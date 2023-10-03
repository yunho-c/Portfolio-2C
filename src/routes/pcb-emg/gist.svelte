<!-- gist.svelte -->
<script>
  export let gistUrl = ''

  import { onMount } from 'svelte'

  let frame
  onMount(() => {
    frame.srcdoc = `<script src='${gistUrl}.js'><${''}/script>`
  })
</script>

<iframe width="100%" height="100%" style="aspect-ratio: 16/10;" src="about:blank" bind:this={frame} title="Gist" />

<style>
  iframe {
    border: 0;
    width: 100%;
    height: 100%;
  }
</style>
