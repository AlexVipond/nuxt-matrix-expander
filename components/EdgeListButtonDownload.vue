<template lang="html">
  <label
    class="btn hover:btn-grow active:btn-pressed"
    :for="buttonId"
    @click="downloadEdgeList(edgeList, format, fileName)">
    <button
      class="hidden"
      type="button"
      :name="buttonId" />

    <div class="h-4 w-4 mr-2">
      <feather-download />
    </div>

    <span>
      {{ label }}
    </span>
  </label>
</template>

<script>
import Papa from 'papaparse'

import FeatherDownload from '~/components/icons/FeatherDownload.vue'

export default {
  components: {
    FeatherDownload
  },
  props: {
    buttonId: {
      type: String,
      required: true
    },
    label: {
      type: String,
      required: true
    },
    edgeList: {
      type: Array,
      required: true
    },
    fileName: {
      type: String,
      required: true
    },
    format: {
      type: String,
      validator: function (value) {
        // The value must match one of these strings
        return ['json', 'csv', 'xlsx'].indexOf(value) !== -1
      }
    }
  },
  methods: {
    convertToCSV (edgeList) {
      let fields = Array.from(
        new Set (
          edgeList.reduce((fields, edge) => {
            let currentFields = Object.keys(edge)

            return fields.concat(currentFields)
          }, [])
        )
      )

      let data = edgeList.reduce((data, edge) => {
        edge = fields.map(field => {
          return (edge[field] === undefined) ? '' : edge[field]
        })

        data.push(edge)

        return data
      }, [])

      let csv = Papa.unparse({
        fields: fields,
        data: data
      })

      return csv
    },
    downloadEdgeList (edgeList, format, fileName) {
      switch(true) {
        case format === 'json':
          edgeList = JSON.stringify(edgeList, null, 2)
          break
        case format === 'csv':
          edgeList = this.convertToCSV(edgeList)
          break
        default:
          // support excel
      }

      let uri = encodeURIComponent(edgeList)
      let dataURL = `text/${format};charset=utf-8,${uri}`

      let link = document.createElement("a"),
          url = `data:${dataURL}`

      link.setAttribute("href", url);
      link.setAttribute("download", `${fileName}-expanded.${format}`);
      link.style.visibility = "hidden";

      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  }
}
</script>
