import { Component, h, Event, EventEmitter } from '@stencil/core';

@Component({
  tag: 'app-hello',
  shadow: true,
})
export class AppHello {
  @Event() hello: EventEmitter<{ message: string }>;

  connectedCallback() {
    console.log(this);
  }

  onClick = (e: MouseEvent) => {
    console.log(e);
    this.hello.emit({ message: 'Hello Stencil!' });
  }

  render() {
    return (
      <div>
        <p>Hello Stencil!</p>
        <button onClick={this.onClick}>HELLO</button>
      </div>
    )
  }
}
