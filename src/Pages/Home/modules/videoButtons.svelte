<script>
  import { createEventDispatcher } from "svelte"

  const dispatch = createEventDispatcher()
  import Button from "../../../Shared/button.svelte"
  export let isVideoLoaded = false

  export let paused = false
  export let muted = false
</script>

<div class:hidden={!isVideoLoaded} class="grid w-full grid-cols-2 items-center justify-center gap-3 rounded-md border border-[#a0a1a580] bg-gray-800 p-3 md:grid-cols-3">
  <Button text={!paused ? "Start" : "Stop"} iconClass="fa-{!paused ? 'play' : 'stop'}" on:click={() => dispatch("play")} />
  <Button text={!muted ? "Mute" : "Unmute"} iconClass="fa-volume{!muted ? '-xmark' : ''}" on:click={() => dispatch("mute")} />

  <Button text="Forward 10s" iconClass="fa-forward" on:click={() => dispatch("farward")} />
  <Button text="Backward 10s" iconClass="fa-backward" on:click={() => dispatch("backward")} />

  <Button text="Screenshot" iconClass="fa-camera-viewfinder" on:click={() => dispatch("SS")} />
</div>
