import { writable } from "svelte/store"

const progressStore = writable({
  brightness: 50,
  contrast: 50,
  grayscale: 50,
})

export default progressStore
