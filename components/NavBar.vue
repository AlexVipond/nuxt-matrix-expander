<template lang="html">
  <nav
    class="flex w-full absolute pin-t pin-l py-3 px-4 font-sans"
    :class="[`z-${zIndex}`]">
    <nav-links
      class="ml-auto"
      text-color="text-gray-600"
      text-hover-color="hover:text-primary" />
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
