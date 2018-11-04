<template>
  <div>
    <portal-target name="modals" multiple />

    <fade-in-out :duration="500">
      <nav-bar :z-index="10"/>
    </fade-in-out>

    <fade-in-out :duration="500">
      <nuxt />
    </fade-in-out>

    <fade-in-out :duration="500">
      <custom-footer />
    </fade-in-out>
  </div>
</template>

<script type="text/javascript">
import FadeInOut from '~/components/transitions/FadeInOut.vue'
import NavBar from '~/components/NavBar.vue'
import CustomFooter from '~/components/CustomFooter.vue'

export default {
  components: {
    FadeInOut,
    NavBar,
    CustomFooter,
  }
}
</script>
