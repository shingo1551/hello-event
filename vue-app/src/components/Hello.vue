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
