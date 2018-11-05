<template lang="html">
  <label
    class="btn hover:btn-grow active:btn-pressed"
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
  data () {
    return {
      edgeList: []
    }
  },
  methods: {
    emitEdgeList () {
      this.$emit('matrix-expanded', this.edgeList)
    },

    createDirectedEdge (source, target, currentStrengths) {
      switch(true) {
        case source === target:
          break
        case (!currentStrengths[target]):
          break
        default:
          let edge = {
            from: source,
            to: target,
            strength: currentStrengths[target]
          }
          return edge
      }
    },
    expandDirectedMatrix (matrix) {
      let sources = matrix.sources,
          targets = matrix.targets,
          strengths = matrix.strengths

      let edgeList = sources.reduce((edgeList, source) => {
        let currentStrengths = strengths[source]

        let edges = targets.reduce((edges, target) => {
          let edge = this.createDirectedEdge(source, target, currentStrengths)

          if(edge) edges.push(edge)

          return edges
        }, [])

        return edgeList.concat(edges)
      }, [])

      this.edgeList = edgeList
      this.emitEdgeList()
    },

    createUndirectedEdge (source, target, currentStrengths, strengths) {
      switch(true) {
        case source === target:
          break
        case (!currentStrengths[target]):
          break
        default:
          let edge = {
            from: source,
            to: target,
            strength: currentStrengths[target]
          }
          delete strengths[target][source]
          return edge
      }
    },
    expandUndirectedMatrix (matrix) {
      let sources = matrix.sources,
          targets = matrix.targets,
          strengths = matrix.strengths

      let edgeList = sources.reduce((edgeList, source) => {
        let currentStrengths = strengths[source]

        let edges = targets.reduce((edges, target) => {
          let edge = this.createUndirectedEdge(source, target, currentStrengths, strengths)

          if(edge) edges.push(edge)

          return edges
        }, [])

        return edgeList.concat(edges)
      }, [])

      this.edgeList = edgeList
      this.emitEdgeList()
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
