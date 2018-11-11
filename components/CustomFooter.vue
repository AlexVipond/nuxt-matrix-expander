<template lang="html">
  <footer class="flex items-center py-10 px-8 font-sans text-gray-700">
    <p class="mr-auto">&copy; 2018 Alex Vipond</p>

    <nav-links
      class="text-right"
      :is-vertical="true"
      text-hover-color="hover:text-primary" />
  </footer>
</template>

<script>
import NavLinks from '~/components/NavLinks.vue'

export default {
  components: {
    NavLinks
  }
}
</script>
