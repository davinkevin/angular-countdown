import {TestBed, async, fakeAsync, tick, ComponentFixture, discardPeriodicTasks} from '@angular/core/testing';
import { AppComponent } from './app.component';
import {By} from '@angular/platform-browser';
import {DebugElement} from '@angular/core';

describe('AppComponent', () => {

  let fixture: ComponentFixture<AppComponent>;
  let el: DebugElement;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  }));

  beforeEach(fakeAsync(() => {
    fixture = TestBed.createComponent(AppComponent);
    el = fixture.debugElement;
  }));

  [1, 2, 3, 4, 5].forEach(timing => {
    it(`should show countdown after ${timing} seconds`, fakeAsync(() => {
      const remaining = 5 - timing + 1;
      fixture.detectChanges();
      tick(timing * 1000);
      fixture.detectChanges();
      const message = el.query(By.css('h2'));
      expect(toText(message)).toContain(`${remaining}`);
      discardPeriodicTasks();
    }));
  });

  it('should render complete message after 7 seconds', fakeAsync(() => {
    fixture.detectChanges();
    tick(7000);
    fixture.detectChanges();
    const message = el.query(By.css('h1.over-message'));
    expect(toText(message)).toContain('It\'s OVER !!');
  }));
});

function toText(el: DebugElement) {
  return el.nativeElement.innerHTML.trim();
}
