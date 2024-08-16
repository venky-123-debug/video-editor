import { writable } from "svelte/store"

const progressStore = writable({
  brightness: 100,
  contrast: 100,
  grayscale: 0,
})

export default progressStore
