import { Component, Output, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html'
})
export class HelloComponent implements OnInit {
  @Output() hello = new EventEmitter<{ message: string }>();

  constructor() { }

  ngOnInit(): void {
    console.log(this);
  }

  onClick(e: Event) {
    console.log(e);
    this.hello.emit({ message: 'Hello Angular!' });
  }
}
