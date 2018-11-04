<template lang="html">
  <call-to-action-button
    :cta-id="componentId"
    :on-click="scrollToMatrixExpanderUI"
    :message="message"
    :icon-before="iconBefore"
    :icon-after="iconAfter"
    :show-icon-before="showIconBefore"
    :show-icon-after="showIconAfter"
    :opens-modal="false" />
</template>

<script>
import CallToActionButton from '~/components/CallToActionButton.vue'
import FeatherZap from '~/components/icons/FeatherZap.vue'

export default {
  props: {
    componentId: {
      type: String,
      required: true
    },
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
    CallToActionButton
  },
  data () {
    return {
      message: 'Start',
      iconBefore: FeatherZap,
      iconAfter: FeatherZap,
    }
  },
  methods: {
    scrollToMatrixExpanderUI () {
      let matrixExpanderUI = document.querySelector('#matrix-expander-ui')

      matrixExpanderUI.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
        inline: 'start'
      })
    }
  }
}
</script>

<style lang="css">
</style>
