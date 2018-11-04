<template lang="html">
  <ul>
    <li>
      <nuxt-link to="/">Home</nuxt-link>
    </li>

    <li>
      <nuxt-link to="/docs">Docs</nuxt-link>
    </li>

    <li>
      <call-to-action-tertiary :showIconBefore="true"/>
    </li>

    <li>
      <call-to-action-secondary :showIconBefore="true"/>
    </li>
  </ul>
</template>

<script>
import CallToActionTertiary from '~/components/CallToActionTertiary.vue'
import CallToActionSecondary from '~/components/CallToActionSecondary.vue'

export default {
  components: {
    CallToActionTertiary,
    CallToActionSecondary
  }
}
</script>
