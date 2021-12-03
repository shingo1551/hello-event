import { Component, h } from '@stencil/core';

@Component({
  tag: 'app-root',
  shadow: true,
})
export class AppRoot {
  onHello = (e: CustomEvent<{ message: string }>) => {
    console.log(e);
  }

  render() {
    return <app-hello onHello={this.onHello} />;
  }
}
