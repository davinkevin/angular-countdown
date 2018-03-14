import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  countdown(): Observable<number> {
    return timer(0, 1000).pipe(
      scan()
    )
  }


}
