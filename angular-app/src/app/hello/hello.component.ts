import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.css']
})
export class HelloComponent {
  @Output() hello = new EventEmitter<{ message: string }>();

  constructor() { }

  onClick(e: Event) {
    console.log(e);
    this.hello.emit({ message: 'Hello Angular!' });
  }

}
