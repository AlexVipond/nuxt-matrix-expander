<template lang="html">
  <form class="font-secondary" action="index.html" method="post">
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
    setMatrix (matrix) {
      this.matrix = matrix
    },
    setDirection (direction) {
      this.direction = direction
    },
    setEdgeList (edgeList) {
      this.edgeList = edgeList
    },
    returnEdgeList (returnEdgeList) {
      // TODO: show it
    }
  }
}
</script>
