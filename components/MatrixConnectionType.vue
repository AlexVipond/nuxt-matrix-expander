<template lang="html">
  <label
    class="btn hover:btn-grow active:btn-pressed"
    for="matrix-connection-type"
    @keyup="setConnectionType">
    <input
      id="matrix-connection-type"
      type="radio"
      name="matrix-direction"
      value="connection-type" />

    <div class="h-4 w-4 mr-2">
      <feather-rotate-cw />
    </div>

    <span>
      Directed
    </span>
  </label>
</template>

<script>
import FeatherRotateCw from '~/components/icons/FeatherRotateCw.vue'
import FeatherCircle from '~/components/icons/FeatherCircle.vue'

export default {
  components: {
    FeatherRotateCw,
    FeatherCircle,
  },
  data () {
    return {
      direction: ''
    }
  },
  methods: {
    selectOption (option) {
      this.direction = option
      this.$emit('direction-set', this.direction)
    }
  }
}
</script>
