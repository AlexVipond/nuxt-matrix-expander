<template lang="html">
  <form class="flex flex-col items-center w-full max-w-md ui-card" action="index.html" method="post">
    <!-- TODO:
      map qualitative values to quantitative
      reset app
      -->

    <matrix-upload
      class="mb-10"
      @matrix-uploaded="setMatrix" />

    <div class="flex flex-col">
      <div class="flex flex-col">
        <h2 class="text-gray-500 font-400 text-lg mb-2">Matrix connections are...</h2>

        <div class="h-1 w-8 mb-3 border-t border-primary" />

        <matrix-direction
          class="mb-10"
          @direction-set="setDirection"/>
      </div>

      <div class="flex flex-col">
        <h2 class="text-gray-500 font-400 text-lg mb-2">Connection type is...</h2>

        <div class="h-1 w-8 mb-3 border-t border-primary" />
      </div>

      <matrix-connection-type
        class="mb-10"
        @connection-type-set="setConnectionType"/>

      <div class="flex flex-col text-gray-300 mb-10">
        <h2 class="text-gray-500 font-400 text-lg mb-2">Special instructions</h2>

        <div class="h-1 w-8 mb-3 border-t border-primary" />

        <matrix-self-connections
          class="mb-2 hover:text-white transition"
          @self-connections-set="setSelfConnections"/>

        <matrix-strength-zero
          class="hover:text-white transition"
          @strength-zero-set="setStrengthZero"/>
      </div>
    </div>

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
import MatrixConnectionType from '~/components/MatrixConnectionType.vue'
import MatrixExpand from '~/components/MatrixExpand.vue'

export default {
  components: {
    MatrixUpload,
    MatrixDirection,
    MatrixSelfConnections,
    MatrixStrengthZero,
    MatrixConnectionType,
    MatrixExpand,
  },
  data () {
    return {
      matrix: {},
      fileName: '',
      direction: '',
      includeSelfConnections: false,
      includeStrengthZero: false,
      connectionType: '',
      edgeList: []
    }
  },
  methods: {
    scrollToEdgeListDownloadDisplay () {
      let matrixExpanderUI = document.querySelector('#edge-list-download-display-container')

      matrixExpanderUI.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
        inline: 'start'
      })
    },
    emitEdgeList () {
      this.$emit('edge-list-created', this.edgeList, this.fileName)
      this.scrollToEdgeListDownloadDisplay()
    },

    setMatrix (matrix, fileName) {
      this.matrix = matrix
      this.fileName = fileName
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
    },
  }
}
</script>
