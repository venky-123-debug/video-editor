<script>
  import Handle from "./components/handle.svelte"
  import Tools from "./components/tools.svelte"
  import Tabs from "./tabs.svelte"

  export let isVideoLoaded = false

  let items = [
    {
      id: "Screen",
      iconClass: "fa-solid fa-pen-field",
      component: Tools,
    },
    {
      id: "Filters",
      iconClass: "fa-solid fa-sliders",
      component: Handle,
    },
  ]
</script>

{#if !isVideoLoaded}
  <div class="w-full">
    <Tabs {items} />
  </div>
{/if}
