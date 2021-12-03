# root

## Angular
app.component
```
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
```
```
<app-hello (hello)="onHello($event)"></app-hello>
```

## React
App.js
```
import Hello from './hello/Hello'

function App() {
  const onHello = (e) => console.log(e);

  return <Hello onHello={onHello} />
}

export default App;
```

## Vue
App.vue
```
<template>
  <Hello @hello="onHello" />
</template>

<script>
import Hello from './components/Hello.vue'

export default {
  name: 'App',
  components: {
    Hello
  },
  methods: {
    onHello(event) {
      console.log(event);
    }
  }
}
</script>
```

## Svelte
App.svelte
```
<script>
  import Hello from "./components/Hello.svelte";

  function onHello(e) {
    console.log(e);
  }
</script>

<Hello on:hello={onHello} />
```

## Stencil
app-root.tsx
```
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
```