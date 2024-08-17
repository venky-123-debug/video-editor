<script>
  import progressStore from "../../Stores/progressStore"
  import Card from "./modules/MenuCard/card.svelte"
  import Navbar from "./modules/Navbar/navbar.svelte"
  import Video from "./modules/video.svelte"

  let isVideoLoaded = false
  let videoElement
  let filterValue
  let label, progress
  function handleProgress(event) {
    label = event.detail.label
    progress = event.detail.progress
    // Update values based on the label
    switch (label) {
      case "Brightness":
        $progressStore.brightness = Number(progress)
        break
      case "Contrast":
        $progressStore.contrast = Number(progress)
        break
      case "GrayScale":
        $progressStore.grayscale = Number(progress)
        break
    }

    // Construct the filter value string
    filterValue = `brightness(${$progressStore.brightness}%) contrast(${$progressStore.contrast}%) grayscale(${$progressStore.grayscale}%)`
  }
</script>

<main class="relative flex min-h-screen w-screen flex-col justify-center bg-black">
  <Navbar />

  <div class="mx-auto flex min-h-full w-4/5 items-center justify-center gap-3">
    <Video
      bind:videoElement
      bind:isVideoLoaded
      bind:filterValue
      on:onReset={() => {
        console.log($progressStore)
        $progressStore.brightness = 100
        $progressStore.contrast = 100
        $progressStore.grayscale = 0
        progress = 0
      }}
    />
    <Card bind:isVideoLoaded on:onProgress={handleProgress} />
  </div>
</main>
