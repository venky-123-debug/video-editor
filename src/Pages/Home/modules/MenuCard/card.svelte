<script>
  import Handle from "./components/handle.svelte"
  import Tools from "./components/tools.svelte"
  import Tabs from "./tabs.svelte"

  export let isVideoLoaded = false

  let items = [
    {
      id: "Form",
      iconClass: "fa-solid fa-pen-field",
      component: Tools,
    },
    {
      id: "Preview",
      iconClass: "fa-solid fa-eye",
      component: Handle,
    },
    // {
    //   id: "JSON",
    //   iconClass: "fa-sharp fa-solid fa-circle-question",
    //   component: JsonEditor,
    // },
  ]
</script>

{#if isVideoLoaded}
  <div class="w-full">
    <Tabs {items} />
  </div>
{/if}
