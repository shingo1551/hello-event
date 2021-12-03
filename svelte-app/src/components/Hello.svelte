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
