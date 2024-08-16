<script>
  import { createEventDispatcher } from "svelte"
  import ProgressStore from "../../../../../Stores/progressStore"
  import Progress from "./progress.svelte"

  const dispatch = createEventDispatcher()

  function handleProgressChange(event) {
    const { label, progress } = event.detail

    // Update the store based on the label
    switch (label) {
      case "Brightness":
        ProgressStore.update((store) => ({ ...store, brightness: progress }))
        break
      case "Contrast":
        ProgressStore.update((store) => ({ ...store, contrast: progress }))
        break
      case "GrayScale":
        ProgressStore.update((store) => ({ ...store, grayscale: progress }))
        break
    }

    // Dispatch the event up to the grandparent
    dispatch("change", { label, progress })
  }
</script>

<div class="flex w-full flex-col items-center gap-3">
  <Progress label="Brightness" progress={$ProgressStore.brightness} on:onChange={handleProgressChange} />
  <Progress label="Contrast" progress={$ProgressStore.contrast} on:onChange={handleProgressChange} />
  <Progress label="GrayScale" progress={$ProgressStore.grayscale} on:onChange={handleProgressChange} />
</div>
