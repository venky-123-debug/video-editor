<script>
  export let label = ""
  let progress = 50 // Initial progress value

  function handleInput(event) {
    progress = event.target.value
  }
</script>

<div class="flex flex-col items-center space-y-2">
  <div class="flex w-full justify-between">
    <div class="text-sm text-white">{label}</div>
    <div class="text-sm font-medium text-white">
      {progress}%
    </div>
  </div>
  <!-- Progress Bar Wrapper -->
  <div class="relative h-3 w-full overflow-hidden rounded-lg bg-gray-200">
    <!-- Animated Striped Background -->
    <div class="bg-stripes absolute top-0 left-0 h-full bg-blue-600" style="width: {progress}%;" />
    <!-- HTML Range Input (Transparent) -->
    <input type="range" min="0" max="100" bind:value={progress} on:input={handleInput} class="absolute top-0 left-0 h-full w-full cursor-pointer opacity-0" />
  </div>
</div>

<style>
  /* Add striped background with animation */
  .bg-stripes {
    background-image: linear-gradient(45deg, rgba(255, 255, 255, 0.3) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.3) 50%, rgba(255, 255, 255, 0.3) 75%, transparent 75%, transparent);
    background-size: 20px 20px;
    animation: move-stripes 1s linear infinite;
  }

  /* Animation for moving stripes */
  @keyframes move-stripes {
    from {
      background-position: 0 0;
    }
    to {
      background-position: 20px 20px;
    }
  }
</style>
