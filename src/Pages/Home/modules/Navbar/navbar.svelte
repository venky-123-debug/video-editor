<script>
  import Logo from "./logo.svelte"
</script>

<nav class="fixed top-0 left-0 min-w-full bg-gray-800">
  <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
    <div class="flex h-16 items-center justify-between">
      <div class="flex items-center">
        <div class="flex-shrink-0">
          <Logo />
        </div>
        <div class="hidden sm:ml-6 sm:block">
          <div class="flex space-x-4">
            <div class="text-xl font-semibold text-blue-500">Video Editor</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</nav>
