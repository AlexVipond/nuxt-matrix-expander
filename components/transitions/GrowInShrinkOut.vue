<template lang="html">
  <transition
    appear
    :css="false"
    @before-enter="beforeEnter"
    @enter="enter"
    @leave="leave">
    <slot></slot>
  </transition>
</template>

<script>
import Velocity from 'velocity-animate'

export default {
  props: {
    duration: {
      type: Number,
      default: 200
    },
    delay: {
      type: Number,
      default: 0
    }
  },
  data () {
    return {}
  },
  methods: {
    beforeEnter (el) {
      Velocity(
        el,
        { scale: 0 },
        { duration: 0 }
      )
    },
    enter (el, done) {
      Velocity(
        el,
        { scale: 1 },
        { duration: this.duration, delay: this.delay, complete: done }
      )
    },
    leave (el, done) {
      Velocity(
        el,
        { scale: 0 },
        { duration: this.duration, complete: done }
      )
    }
  }
}
</script>
