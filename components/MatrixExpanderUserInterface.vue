<template lang="html">
  <form class="font-secondary" action="index.html" method="post">
    <!-- TODO:
      map qualitative values to quantitative
      opt out of including edges with a strength of 0 -->

    <matrix-upload
      @matrix-uploaded="setMatrix" />

    <matrix-direction
      @direction-set="setDirection"/>

    <matrix-self-connections
      @self-connections-set="setSelfConnections"/>

    <matrix-strength-zero
      @strength-zero-set="setStrengthZero"/>

    <!-- <matrix-connection-type
      @connection-type-set="setConnectionType"/> -->

    <matrix-expand
      :matrix="matrix"
      :direction="direction"
      :include-self-connections="includeSelfConnections"
      :include-strength-zero="includeStrengthZero"
      :connection-type="connectionType"
      @matrix-expanded="setEdgeList" />
  </form>
</template>

<script>
import MatrixUpload from '~/components/MatrixUpload.vue'
import MatrixDirection from '~/components/MatrixDirection.vue'
import MatrixSelfConnections from '~/components/MatrixSelfConnections.vue'
import MatrixStrengthZero from '~/components/MatrixStrengthZero.vue'
// import MatrixConnectionType from '~/components/MatrixConnectionType.vue'
import MatrixExpand from '~/components/MatrixExpand.vue'

export default {
  components: {
    MatrixUpload,
    MatrixDirection,
    MatrixSelfConnections,
    MatrixStrengthZero,
    MatrixExpand,
  },
  data () {
    return {
      matrix: {},
      direction: '',
      includeSelfConnections: false,
      includeStrengthZero: false,
      connectionType: '',
      edgeList: []
    }
  },
  methods: {
    emitEdgeList () {
      this.$emit('edge-list-created', this.edgeList)
    },

    setMatrix (matrix) {
      this.matrix = matrix
    },
    setDirection (direction) {
      this.direction = direction
    },
    setSelfConnections (includeSelfConnections) {
      this.includeSelfConnections = includeSelfConnections
    },
    setStrengthZero (includeStrengthZero) {
      this.includeStrengthZero = includeStrengthZero
    },
    setConnectionType (connectionType) {
      this.connectionType = connectionType
    },
    setEdgeList (edgeList) {
      this.edgeList = edgeList

      this.emitEdgeList()
    }
  }
}
</script>
