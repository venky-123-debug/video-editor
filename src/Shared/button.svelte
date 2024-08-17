<script>
  export let text
  export let buttonClass = "bg-blue-600 hover:bg-blue-500 focus-visible:outline-blue-600"
  export let iconClass
</script>

<button type="button" on:click class="rounded-md {buttonClass} px-2 py-1.5 text-sm font-semibold text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2">
  <i class="fa-solid {iconClass}" />
  {text}
</button>
