import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {timer} from 'rxjs/observable/timer';
import {mapTo, scan, take, takeWhile, tap} from 'rxjs/operators';
import {interval} from 'rxjs/observable/interval';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'app';
  duration = 5;
  countdown: number;
  complete = false;

  ngOnInit(): void {
    interval(1000).pipe(
      mapTo(1),
      scan((acc, curr) => acc - curr, this.duration + 1),
      take(this.duration + 1)
    )
      .subscribe(
        c => this.countdown = c,
        e => console.error(e),
        () => this.onComplete()
      );
  }

  onComplete() {
    this.complete = true;
  }

}
