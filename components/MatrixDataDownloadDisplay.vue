<template lang="html">
  <div class="">
    <button-download
      format="json"
      :data="data"
      :label="messages.download.json" />

    <button-download
      format="csv"
      :data="data"
      :label="messages.download.csv" />

    <button-download
      format="xlsx"
      :data="data"
      :label="messages.download.xlsx" />

    <pre class="h-64 overflow-scroll">{{ stringifiedBlueprint }}</pre>
  </div>
</template>

<script>
import ButtonDownload from '~/components/ButtonDownload.vue'

export default {
  props: {
    data: {
      type: Array,
      required: true
    }
  },
  components: {
    ButtonDownload
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
        connections: this.data
      }
    },
    stringifiedBlueprint () {
      return JSON.stringify(this.blueprint, null, 2)
    }
  }
}
</script>
