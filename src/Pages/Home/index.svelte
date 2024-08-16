<script>
  import Card from "./modules/MenuCard/card.svelte"
  import Navbar from "./modules/Navbar/navbar.svelte"
  import Video from "./modules/video.svelte"
  let isVideoLoaded = false
</script>

<main class="relative flex min-h-screen w-screen flex-col justify-center bg-black">
  <Navbar />

  <div class="mx-auto flex min-h-full w-4/5 items-center justify-center gap-3">
    <Video bind:isVideoLoaded />
    <Card bind:isVideoLoaded />
  </div>
</main>
