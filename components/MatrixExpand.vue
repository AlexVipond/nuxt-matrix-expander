<template lang="html">
  <label
    class="btn hover:btn-grow active:btn-pressed"
    :class="[
      (edgeList.length > 0) ? 'bg-primary text-primary-700' : 'bg-gray-300 text-black'
    ]"
    for="expand-matrix"
    @click.prevent="validateMatrix(matrix, direction)">
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
    },
    includeSelfConnections: {
      type: Boolean,
      default: false
    },
    includeStrengthZero: {
      type: Boolean,
      default: false
    },
    connectionType: {
      type: String
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

    edgeIsValid (source, target, currentStrengths) {
      /*
        Edges are never valid when currentStrengths[target] is undefined.

        Edges with identical source and target are valid only when self connections are includeed.

        Edges with a strength of zero are valid only when zero strength connections are includeed.
      */

      if(this.includeSelfConnections && this.includeStrengthZero) {
        switch(true) {
          case (currentStrengths[target] === undefined):
            break
          default:
            return true
        }
      } else if(this.includeSelfConnections) {
        switch(true) {
          case (currentStrengths[target] === undefined):
            break
          case (currentStrengths[target] === 0):
            break
          default:
            return true
        }
      } else if(this.includeStrengthZero) {
        switch(true) {
          case (currentStrengths[target] === undefined):
            break
          case (source === target):
            break
          default:
            return true
        }
      } else {
        switch(true) {
          case (currentStrengths[target] === undefined):
            break
          case (currentStrengths[target] === 0):
            break
          case (source === target):
            break
          default:
            return true
        }
      }
    },

    createDirectedEdge (source, target, currentStrengths) {
      let edge = {
        from: source,
        to: target,
        strength: currentStrengths[target]
      }

      if(this.connectionType) {
        edge['connection type'] = this.connectionType
      }

      return edge
    },
    createUndirectedEdge (source, target, currentStrengths, strengths) {
      let edge = this.createDirectedEdge(source, target, currentStrengths)

      delete strengths[target][source]

      return edge
    },

    expandMatrix (matrix, direction) {
      let sources = matrix.sources,
          targets = matrix.targets,
          strengths = matrix.strengths

      let edgeList = sources.reduce((edgeList, source) => {
        let currentStrengths = strengths[source]

        let edges = targets.reduce((edges, target) => {
          if(this.edgeIsValid(source, target, currentStrengths)) {
            let edge = {}

            switch(true) {
              case direction === 'directed':
                edge = this.createDirectedEdge(source, target, currentStrengths)
                edges.push(edge)
                break
              case direction === 'undirected':
                edge = this.createUndirectedEdge(source, target, currentStrengths, strengths)
                edges.push(edge)
                break
            }
          }

          return edges
        }, [])

        return edgeList.concat(edges)
      }, [])

      this.edgeList = edgeList
      this.emitEdgeList()
    },

    validateMatrix (matrix, direction) {
      switch(true) {
        case !matrix.sources || !matrix.targets || !matrix.strengths:
          alert('Woops! Don\'t forget to upload a matrix.')
          break
        case !direction:
          alert('Woops! Don\'t forget to select a direction.')
          break
        default:
          this.expandMatrix(matrix, direction)
      }
    }
  }
}
</script>
