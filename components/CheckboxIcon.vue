<template lang="html">
  <div class="relative inline-block">
    <grow-in-shrink-out
      :duration="animationDuration"
      :delay="animationDuration">
      <feather-check-square
        class="absolute pin-t pin-l h-full w-full"
        :class="[checkedColor, checkedHoverColor]"
        v-show="isChecked">
      </feather-check-square>
    </grow-in-shrink-out>

    <grow-in-shrink-out
      :duration="animationDuration"
      :delay="animationDuration">
      <feather-square
        class="absolute pin-t pin-l h-full w-full"
        :class="[uncheckedColor, uncheckedHoverColor]"
        v-show="!isChecked">
      </feather-square>
    </grow-in-shrink-out>
  </div>
</template>

<script>
import FeatherSquare from '~/components/icons/FeatherSquare.vue'
import FeatherCheckSquare from '~/components/icons/FeatherCheckSquare.vue'
import GrowInShrinkOut from '~/components/transitions/GrowInShrinkOut.vue'

export default {
  components: {
    FeatherSquare,
    FeatherCheckSquare,
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
