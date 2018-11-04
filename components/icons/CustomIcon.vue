<template lang="html">
  <svg
    class="inline-block h-full w-full"
    stroke-linecap="round"
    stroke-linejoin="round"
    role="img"
    :viewBox="viewbox"
    xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink"
    preserveAspectRatio="xMidYMid meet">
    <slot />
  </svg>
</template>

<script>
export default {
  props: {
    viewbox: {
      type: String,
      default: '0 0 24 24'
    }
  }
}
</script>
