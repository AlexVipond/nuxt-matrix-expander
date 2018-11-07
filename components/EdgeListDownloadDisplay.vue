<template lang="html">
  <div class="">
    <edge-list-button-download
      button-id="download-json"
      format="json"
      :edge-list="edgeList"
      :file-name="fileName"
      :label="messages.download.json" />

    <edge-list-button-download
      button-id="download-csv"
      format="csv"
      :edge-list="edgeList"
      :file-name="fileName"
      :label="messages.download.csv" />

    <edge-list-button-download
      button-id="download-xlsx"
      format="xlsx"
      :edge-list="edgeList"
      :file-name="fileName"
      :label="messages.download.xlsx" />

    <pre class="h-128 overflow-scroll">{{ stringifiedBlueprint }}</pre>
  </div>
</template>

<script>
import EdgeListButtonDownload from '~/components/EdgeListButtonDownload.vue'

export default {
  props: {
    edgeList: {
      type: Array,
      required: true
    },
    fileName: {
      type: String,
      required: true
    },
  },
  components: {
    EdgeListButtonDownload
  },
  data () {
    return {
      messages: {
        download: {
          json: 'Download JSON',
          csv: 'Download CSV',
          xlsx: 'Download XLSX'
        }
      }
    }
  },
  computed: {
    blueprint () {
      return {
        connections: this.edgeList
      }
    },
    stringifiedBlueprint () {
      return JSON.stringify(this.blueprint, null, 2)
    }
  }
}
</script>
