<script>
  import Card from "./modules/MenuCard/card.svelte"
  import Navbar from "./modules/Navbar/navbar.svelte"
  import Video from "./modules/video.svelte"

  let isVideoLoaded = false
  let videoElement
  let filterValue
  function handleProgress(event) {
    const { label, progress } = event.detail
    console.log("event.detail", event.detail)
    console.log(`App received progress event: ${label} is now ${progress}%`)

    // Update values based on the label
    switch (label) {
      case "Brightness":
        brightness = progress
        break
      case "Contrast":
        contrast = progress
        break
      case "GrayScale":
        grayscale = progress
        break
    }

    // Construct the filter value string
    filterValue = `brightness(${brightness}%) contrast(${contrast}%) grayscale(${grayscale}%)`

    // Log for debugging
    console.log({ filterValue })
  }
</script>

<main class="relative flex min-h-screen w-screen flex-col justify-center bg-black">
  <Navbar />

  <div class="mx-auto flex min-h-full w-4/5 items-center justify-center gap-3">
    <Video bind:videoElement bind:isVideoLoaded {filterValue} />
    <Card bind:isVideoLoaded on:onProgress={handleProgress} />
  </div>
</main>
