<template lang="html">
  <div class="flex flex-col items-center w-full max-w-md max-h-full font-sans bg-gray-900 py-8 px-6 rounded shadow-lg">
    <div class="flex mb-8">
      <edge-list-button-download
        class="mr-4"
        button-id="download-json"
        format="json"
        :edge-list="edgeList"
        :file-name="fileName"
        :label="messages.download.json" />

      <edge-list-button-download
        class="mr-4"
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
    </div>

    <pre class="w-full flex-1 overflow-scroll py-2 px-3 text-gray-500"><code class="json">{{ stringifiedBlueprint }}</code></pre>
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
