import ErrorCode404 from "./Pages/404/index.svelte"

export default {
  // The catch-all route must always be last
  "*": ErrorCode404,
}
