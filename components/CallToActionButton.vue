<template lang="html">
  <label class="focus-within:shadow-outline"
    :for="ctaId">
    <button
      class="hidden"
      type="button"
      :id="ctaId"
      :name="ctaId"
      @click="handleClick()">
    </button>

    <div
      v-if="showIconBefore"
      class="h-4 w-4 mr-2">
      <component :is="iconBefore" />
    </div>

    <span>
      {{ message }}
    </span>

    <div
      v-if="showIconAfter"
      class="h-4 w-4 ml-2">
      <component :is="iconAfter" />
    </div>

    <portal
      v-if="opensModal"
      to="modals">
      <modal-wrapper
        :z-index="modalZIndex"
        :open="modalOpen"
        :content-max-width="modalContentMaxWidth"
        :close-event="modalCloseEvent">
        <component
          :is="modalContentComponent"
          :z-index="modalZIndex + 10" />
      </modal-wrapper>
    </portal>
  </label>
</template>

<script>
import ModalWrapper from '~/components/ModalWrapper.vue'

export default {
  components: {
    ModalWrapper,
  },
  props: {
    ctaId: {
      type: String,
      required: true
    },
    onClick: {
      type: Function,
      required: true
    },
    message: {
      type: String,
      required: true
    },
    iconBefore: {
      type: Object
    },
    iconAfter: {
      type: Object
    },
    showIconBefore: {
      type: Boolean
    },
    showIconAfter: {
      type: Boolean
    },
    opensModal: {
      type: Boolean,
      default: false
    },
    modalZIndex: {
      type: Number,
    },
    modalCloseEvent: {
      type: String,
    },
    modalContentMaxWidth: {
      type: String,
      default: 'max-w-sm'
    },
    modalContentComponent: {
      type: Object
    },
  },
  data () {
    return {
      modalOpen: false
    }
  },
  methods: {
    closeModal () {
      this.modalOpen = false
    },
    handleClick () {
      if(this.opensModal) {
        this.onClick(this.modalOpen)
      } else {
        this.onClick()
      }
    }
  },
  created () {
    // Listen for modal close event
    this.$on(this.modalCloseEvent, this.closeModal)
  }
}
</script>
