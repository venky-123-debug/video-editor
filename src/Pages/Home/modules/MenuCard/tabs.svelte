<script>
  /**
   * @type {Array<tabItem>} - list of tab items
   */
  export let items = []

  let activeItem = items[0].component
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- svelte-ignore a11y-no-noninteractive-tabindex -->
<div class="mb-[-1px] mt-6 flex h-8 w-full gap-3">
  {#each items as item}
    <button on:click={() => (activeItem = item.component)} type="button" tabindex="0" class="focus-visible:group group relative flex w-1/3 rounded-t-lg border-b border-[#a0a1a580] hover:bg-blue-600 focus-visible:bg-blue-600 focus-visible:outline-none md:w-32 {activeItem === item.component ? 'border border-b-0 bg-gray-900 text-blue-500 hover:text-blue-600' : 'bg-blue-500 text-white'}">
      <div class="absolute bottom-1 flex select-none items-center border-l-4 border-blue-500 pl-1 text-sm font-bold group-hover:border-blue-600 group-focus-visible:border-blue-600 md:pl-2">
        <span class={activeItem == item.component ? "block " : "mobile:block hidden"}>
          <i class={item.iconClass} />
        </span>
        &nbsp;&nbsp;{item.id}
      </div>
    </button>
  {/each}
</div>
<div class="h-full min-h-[400px] rounded-b-md rounded-tr-none border border-[#a0a1a580] bg-gray-900 p-3 md:rounded-tr-md md:p-6">
  <svelte:component this={activeItem} />
</div>
