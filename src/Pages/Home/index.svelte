<script>
  import progressStore from "../../Stores/progressStore"
  import Card from "./modules/MenuCard/card.svelte"
  import Navbar from "./modules/Navbar/navbar.svelte"
  import Video from "./modules/video.svelte"

  let isVideoLoaded = false
  let videoElement
  let filterValue
  function handleProgress(event) {
    const { label, progress } = event.detail

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

    // Log for debugging
    console.log({ filterValue }, $progressStore)
  }
</script>

<main class="relative flex min-h-screen w-screen flex-col justify-center bg-black">
  <Navbar />

  <div class="mx-auto flex min-h-full w-4/5 items-center justify-center gap-3">
    <Video bind:videoElement bind:isVideoLoaded bind:filterValue />
    <Card bind:isVideoLoaded on:onProgress={handleProgress} />
  </div>
</main>
