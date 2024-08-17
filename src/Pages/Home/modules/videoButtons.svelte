<script>
  import { createEventDispatcher } from "svelte"

  const dispatch = createEventDispatcher()
  import Button from "../../../Shared/button.svelte"
  export let isVideoLoaded = false

  export let paused = false
  export let muted = false
</script>

<div class:hidden={!isVideoLoaded} class="flex h-12 w-full items-center justify-center gap-3 rounded-md border border-[#a0a1a580] bg-gray-800 p-3">
  <Button text={!paused ? "Start" : "Stop"} iconClass="fa-{!paused ? 'play' : 'stop'}" on:click={() => dispatch("play")} />
  <Button text={!muted ? "Mute" : "Unmute"} iconClass="fa-volume{!muted ? '-xmark' : ''}" on:click={() => dispatch("mute")} />
  <!-- <Button text="Start" iconClass="fa-play" /> -->
</div>
