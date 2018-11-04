<template lang="html">
  <form class="font-secondary" action="index.html" method="post">
    <matrix-upload />

    <matrix-direction-toggle />

    <matrix-expand />
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
      data: [],
      direction: '',
      result: []
    }
  }
}
</script>
