<template lang="html">
  <call-to-action-anchor
    :href="href"
    :target="target"
    :message="message"
    :icon-before="iconBefore"
    :icon-after="iconAfter"
    :show-icon-before="showIconBefore"
    :show-icon-after="showIconAfter" />
</template>

<script>
import CallToActionAnchor from '~/components/CallToActionAnchor.vue'
import SimpleIconGithub from '~/components/icons/SimpleIconGithub.vue'

export default {
  props: {
    showIconBefore: {
      type: Boolean,
      default: false
    },
    showIconAfter: {
      type: Boolean,
      default: false
    }
  },
  components: {
    CallToActionAnchor
  },
  data () {
    return {
      href: 'https://github.com/alexvipond/matrix-expander',
      target: '_blank',
      message: 'View source code',
      iconBefore: SimpleIconGithub,
      iconAfter: SimpleIconGithub,
    }
  }
}
</script>
