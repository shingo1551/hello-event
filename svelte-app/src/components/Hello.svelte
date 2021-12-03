<script>
  import { createEventDispatcher, onMount } from "svelte";
  const dispatch = createEventDispatcher();

  onMount(() => console.log(this));

  function onClick(e) {
    dispatch("hello", { message: "Hello Svelte!" });
  }
</script>

<p>Hello Svelte!</p>
<button on:click={onClick}>HELLO</button>
