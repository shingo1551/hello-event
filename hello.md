# hello

## Angular
hello.component
```
import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html'
})
export class HelloComponent {
  @Output() hello = new EventEmitter<{ message: string }>();

  constructor() { }

  onClick(e: Event) {
    console.log(e);
    this.hello.emit({ message: 'Hello Angular!' });
  }
}
```
```
<p>Hello Angular!</p>
<button (click)="onClick($event)">HELLO</button>
```

## React
Hello.jsx
```
import React from 'react';

class Hello extends React.Component {
  onClick = (e) => {
    console.log(e);
    this.props.onHello({ message: 'Hello React!' });
  }

  render() {
    return (
    <div>
      <p >Hello React!</p>
      <button  onClick={this.onClick}>HELLO</button>
    </div>
    )
  }
}

export default Hello
```

## Vue
Hello.vue
```
<template>
  <p>Hello Vue!</p>
  <button @click="onClick">HELLO</button>
</template>

<script>
export default {
  name: 'Hello',
  emits: ['hello'],
  methods: {
    onClick(event) {
      console.log(event);
      this.$emit('hello', { message: 'hello Vue!' })
    },
  },
}
</script>
```

## Svelte
Hello.svelte
```
<script>
  import { createEventDispatcher } from "svelte";
  const dispatch = createEventDispatcher();

  function onClick(e) {
    console.log(e);
    dispatch("hello", { message: "Hello Svelte!" });
  }
</script>

<p>Hello Svelte!</p>
<button on:click={onClick}>HELLO</button>
```

## Stencil
app-hello.tsx
```
import { Component, h, Event, EventEmitter } from '@stencil/core';

@Component({
  tag: 'app-hello',
  shadow: true,
})
export class AppHello {
  @Event() hello: EventEmitter<{ message: string }>;

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
```
