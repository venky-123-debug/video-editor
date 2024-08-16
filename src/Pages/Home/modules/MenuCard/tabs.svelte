<script>
  /**
   * @type {Array<tabItem>} - list of tab items
   */
  export let items = []

  let activeItem = items[0].component
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- svelte-ignore a11y-no-noninteractive-tabindex -->

<div class="flex h-full w-full flex-col items-center">
  <div class="flex h-12 w-full items-center justify-center gap-3 rounded-md rounded-b-none border border-[#a0a1a580] border-b-transparent">
    {#each items as item}
      <button on:click={() => (activeItem = item.component)} type="button" class="focus-visible:group group relative flex h-10 w-32 items-center justify-center rounded-md py-2 px-1.5 focus-visible:outline-none {activeItem === item.component ? 'bg-blue-500 text-white' : 'bg-gray-900 text-blue-500 hover:text-blue-600'}">
        <div class="flex select-none items-center text-sm font-bold group-hover:border-blue-600 group-focus-visible:border-blue-600 md:pl-2">
          <!-- <span class={activeItem == item.component ? "block " : "hidden mobile:block"}> -->
          <i class={item.iconClass} />
          <!-- </span> -->
          &nbsp;&nbsp;{item.id}
        </div>
      </button>
    {/each}
  </div>
  <div class="h-full min-h-[400px] w-full rounded-md rounded-t-none border border-[#a0a1a580] bg-gray-900 p-3">
    <svelte:component this={activeItem} />
  </div>
</div>
