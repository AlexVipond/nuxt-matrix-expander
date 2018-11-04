<template lang="html">
  <call-to-action-anchor
    href="https://kumu.io/dashboard"
    :target="target"
    :message="message"
    :icon-before="iconBefore"
    :icon-after="iconAfter"
    :show-icon-before="showIconBefore"
    :show-icon-after="showIconAfter" />
</template>

<script>
import CallToActionAnchor from '~/components/CallToActionAnchor.vue'
import IconKumu from '~/components/icons/IconKumu.vue'

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
      href: 'https://kumu.io',
      target: '_blank',
      message: 'Open Kumu dashboard',
      iconBefore: IconKumu,
      iconAfter: IconKumu,
    }
  }
}
</script>
