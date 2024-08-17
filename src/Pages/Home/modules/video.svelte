<script>
  import { createEventDispatcher } from "svelte"

  const dispatch = createEventDispatcher()
  export let videoElement
  export let filterValue
  let videoFileInput
  let file = ""
  export let isVideoLoaded = false

  const handleFileChange = (event) => {
    file = event.target.files[0]
    if (file) {
      const fileURL = URL.createObjectURL(file)
      videoElement.src = fileURL
      isVideoLoaded = true
    }
  }

  const resetVideo = () => {
    videoElement.src = ""
    file = ""
    isVideoLoaded = false
    if (videoFileInput) {
      videoFileInput.value = ""
    }
    dispatch("onReset")
  }
</script>

<div class="mx-auto w-full max-w-2xl rounded-lg bg-gray-900 p-3 {!isVideoLoaded ? 'shadow-md hover:border-dotted hover:shadow-blue-600' : ''} ">
  <div class="space-y-4">
    <!-- Video File Input -->
    <label for="video-upload" class="block w-full cursor-pointer rounded-md border border-gray-800 bg-gray-800 py-3 text-center text-base text-blue-600 hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-600">
      {isVideoLoaded ? "Select another video file" : "Select a video file to upload"}
    </label>
    <input id="video-upload" on:change={handleFileChange} type="file" bind:this={videoFileInput} accept="video/*" class="hidden" />

    <!-- Video Display -->
    <!-- The video player is always rendered but is only shown if a video is loaded -->
    <!-- svelte-ignore a11y-media-has-caption -->
    <video bind:this={videoElement} controls style="filter: {filterValue};" class="aspect-video w-full rounded-lg border-2 border-gray-800 {isVideoLoaded ? '' : 'hidden'}">Your browser does not support the video tag.</video>

    {#if isVideoLoaded}
      <button on:click={resetVideo} class="mt-4 w-full rounded-lg bg-red-600 py-2 px-4 text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-600">Remove Video</button>
    {/if}
  </div>
</div>
