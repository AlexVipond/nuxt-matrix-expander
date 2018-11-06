<template lang="html">
  <div class="">
    <label
      class="btn hover:btn-grow active:btn-pressed"
      for="matrix-directed"
      @click.prevent="selectOption('directed')">
      <input
        id="matrix-directed"
        class="hidden"
        type="radio"
        name="matrix-direction"
        value="directed" />

      <div class="h-4 w-4 mr-2">
        <feather-rotate-cw />
      </div>

      <span>
        Directed
      </span>
    </label>

    <label
      class="btn hover:btn-grow active:btn-pressed"
      for="matrix-undirected"
      @click.prevent="selectOption('undirected')">
      <input
        id="matrix-undirected"
        class="hidden"
        type="radio"
        name="matrix-direction"
        value="undirected" />

      <div class="h-4 w-4 mr-2">
        <feather-circle />
      </div>

      <span>
        Undirected
      </span>
    </label>
  </div>
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
      console.log('here')
      this.$emit('direction-set', this.direction)
    }
  }
}
</script>
