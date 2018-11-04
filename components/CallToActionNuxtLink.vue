<template lang="html">
  <nuxt-link :to="href">
    <slot />
  </nuxt-link :to="href">
</template>

<script>
export default {
  props: {
    href: {
      type: String,
      required: true
    }
  }
}
</script>
