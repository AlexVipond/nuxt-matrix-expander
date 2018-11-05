<template lang="html">
  <label
    class="btn hover:btn-grow"
    for="expand-matrix"
    @click.prevent="expandMatrix(matrix, direction)">
    <button
      class="hidden"
      type="submit"
      name="expand-matrix"></button>

    <div class="h-4 w-4 mr-2">
      <feather-shuffle />
    </div>

    <span class="inline-block">Expand</span>
  </label>
</template>

<script>
import FeatherShuffle from '~/components/icons/FeatherShuffle.vue'

export default {
  props: {
    matrix: {
      type: Object,
      required: true
    },
    direction: {
      type: String,
      required: true
    }
  },
  components: {
    FeatherShuffle
  },
  methods: {
    expandDirectedMatrix (matrix) {
      console.log('expand directed')
    },
    expandUndirectedMatrix (matrix) {
      console.log('expand undirected')
    },
    expandMatrix (matrix, direction) {
      // TODO: alert for null matrix

      switch(true) {
        case direction === 'directed':
          this.expandDirectedMatrix(matrix)
          break
        case direction === 'undirected':
          this.expandUndirectedMatrix(matrix)
          break
        default:
          alert('Woops! Don\'t forget to select a direction.')
      }
    }
  }
}
</script>

<style lang="css">
</style>
