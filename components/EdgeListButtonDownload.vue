<template lang="html">
  <label
    class="btn hover:btn-grow active:btn-pressed font-sans bg-primary text-primary-700"
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
import XLSX from 'xlsx'

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
    createBlueprint (edgeList) {
      let blueprint = {
        connections: edgeList
      }

      return JSON.stringify(blueprint, null, 2)
    },
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
    convertToXLSX (edgeList, fileName) {
      let workbook = XLSX.utils.book_new()

      let headers = Array.from(
        new Set (
          edgeList.reduce((headers, edge) => {
            let currentFields = Object.keys(edge)

            return headers.concat(currentFields)
          }, [])
        )
      )

      let worksheet = XLSX.utils.json_to_sheet(edgeList, { headers: headers })

      XLSX.utils.book_append_sheet(workbook, worksheet, fileName.slice(0, 31))

      return workbook
    },

    unparse (edgeList, format, fileName) {
      switch(true) {
        case format === 'json':
          edgeList = this.createBlueprint(edgeList)
          break
        case format === 'csv':
          edgeList = this.convertToCSV(edgeList)
          break
        case format === 'xlsx':
          edgeList = this.convertToXLSX(edgeList, fileName)
          break
      }

      return edgeList
    },

    downloadXLSX (workbook, fileName) {
      // Via https://sheetjs.com/demos/modify.html
      XLSX.write(workbook, {
        bookType: 'xlsx',
        bookSST: true,
        type: 'base64'
      })

      XLSX.writeFile(workbook, `${fileName}-expanded.xlsx`);
    },

    downloadJSONOrCSV (string, format, fileName) {
      let uri = encodeURIComponent(string)
      let dataURL = `text/${format};charset=utf-8,${uri}`

      let link = document.createElement("a"),
          url = `data:${dataURL}`

      link.setAttribute("href", url);
      link.setAttribute("download", `${fileName}-expanded.${format}`);
      link.style.visibility = "hidden";

      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    },

    downloadEdgeList (edgeList, format, fileName) {
      edgeList = this.unparse(edgeList, format, fileName)

      if(format === 'xlsx') {
        this.downloadXLSX(edgeList, fileName)
      } else {
        this.downloadJSONOrCSV(edgeList, format, fileName)
      }
    }
  }
}
</script>
