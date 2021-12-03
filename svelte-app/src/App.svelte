<script>
  import Hello from "./components/Hello.svelte";

  function onHello(e) {
    console.log(e);
  }
</script>

<Hello on:hello={onHello} />
