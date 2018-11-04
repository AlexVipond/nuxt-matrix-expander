<template lang="html">
  <nav
    class="flex"
    :class="[`z-${zIndex}`]">
    <nav-links class="ml-auto" />
  </nav>
</template>

<script>
import NavLinks from '~/components/NavLinks.vue'

export default {
  props: {
    zIndex: {
      type: Number,
      required: true
    }
  },
  components: {
    NavLinks
  }
}
</script>
