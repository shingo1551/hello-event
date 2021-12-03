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
