<template lang="html">
  <div class="relative inline-block">
    <grow-in-shrink-out
      :duration="animationDuration"
      :delay="animationDuration">
      <feather-disc
        class="absolute pin-t pin-l h-full w-full"
        :class="[checkedColor, checkedHoverColor]"
        v-show="isChecked">
      </feather-disc>
    </grow-in-shrink-out>

    <grow-in-shrink-out
      :duration="0"
      :delay="0">
      <feather-circle
        class="absolute pin-t pin-l h-full w-full"
        :class="[uncheckedColor, uncheckedHoverColor]"
        v-show="!isChecked">
      </feather-circle>
    </grow-in-shrink-out>
  </div>
</template>

<script>
import FeatherCircle from '~/components/icons/FeatherCircle.vue'
import FeatherDisc from '~/components/icons/FeatherDisc.vue'
import GrowInShrinkOut from '~/components/transitions/GrowInShrinkOut.vue'

export default {
  components: {
    FeatherCircle,
    FeatherDisc,
    GrowInShrinkOut
  },
  props: {
    isChecked: {
      type: Boolean,
      required: true
    },
    animationDuration: {
      type: Number,
      default: 100
    },
    checkedColor: {
      type: String,
      default: 'text-primary'
    },
    checkedHoverColor: {
      type: String,
      default: 'group-hover:text-color-inherit'
    },
    uncheckedColor: {
      type: String,
      default: 'text-gray-500'
    },
    uncheckedHoverColor: {
      type: String,
      default: 'group-hover:text-color-inherit'
    }
  }
}
</script>
