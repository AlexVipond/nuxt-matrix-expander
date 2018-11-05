<template lang="html">
  <form class="font-secondary" action="index.html" method="post">
    <!-- TODO:
      map qualitative values to quantitative
      opt out of including edges with a strength of 0 -->

    <matrix-upload
      @matrix-uploaded="setMatrix" />

    <matrix-direction-toggle
      @direction-set="setDirection"/>

    <matrix-expand
      :matrix="matrix"
      :direction="direction"
      @matrix-expanded="setEdgeList" />
  </form>
</template>

<script>
import MatrixUpload from '~/components/MatrixUpload.vue'
import MatrixDirectionToggle from '~/components/MatrixDirectionToggle.vue'
import MatrixExpand from '~/components/MatrixExpand.vue'

export default {
  components: {
    MatrixUpload,
    MatrixDirectionToggle,
    MatrixExpand
  },
  data () {
    return {
      matrix: {},
      direction: '',
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
    setEdgeList (edgeList) {
      this.edgeList = edgeList

      this.emitEdgeList()
    }
  }
}
</script>
