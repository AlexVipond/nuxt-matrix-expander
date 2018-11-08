<template lang="html">
  <ul class="list-reset flex" :class="[textColor]">
    <li class="mr-6 transition" :class="[textHoverColor]">
      <nuxt-link to="/">Home</nuxt-link>
    </li>

    <li class="mr-6 transition" :class="[textHoverColor]">
      <nuxt-link to="/docs">Docs</nuxt-link>
    </li>

    <li class="mr-6 transition" :class="[textHoverColor]">
      <call-to-action-tertiary :showIconBefore="false"/>
    </li>

    <li class="transition" :class="[textHoverColor]">
      <call-to-action-secondary :showIconBefore="false"/>
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
  },
  props: {
    textColor: {
      type: String,
      default: 'primary-100'
    },
    textHoverColor: {
      type: String,
      default: 'hover:text-white'
    }
  }
}
</script>
