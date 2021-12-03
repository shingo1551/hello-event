import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  title = 'angular-app';

  onHello(e: { message: string }) {
    console.log(e)
  }
}
