<template lang="html">
  <footer class="flex items-center">
    <p class="mr-auto">&copy; 2018 Alex Vipond</p>

    <nav-links />
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
