<script>
  import { createEventDispatcher } from "svelte"

  const dispatch = createEventDispatcher()
  import Handle from "./components/handle.svelte"
  import Tools from "./components/tools.svelte"
  import Tabs from "./tabs.svelte"

  export let isVideoLoaded = false
  function handleGrandparentChange(event) {
    const { label, progress } = event.detail
    dispatch("onProgress", { label, progress })
  }
  let items = [
    {
      id: "Filters",
      iconClass: "fa-solid fa-sliders",
      component: Tools,
    },
  ]
</script>

{#if isVideoLoaded}
  <div class="w-full">
    <Tabs {items} on:change={handleGrandparentChange} />
  </div>
{/if}
