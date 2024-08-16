<script>
  export let text
  export let buttonClass = "bg-indigo-600 hover:bg-indigo-500 focus-visible:outline-indigo-600"
</script>

<button type="button" on:click class="rounded-md {buttonClass} px-2 py-1 text-sm font-semibold text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2">{text}</button>
