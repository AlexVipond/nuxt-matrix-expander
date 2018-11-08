<template lang="html">
  <label
    class="btn hover:btn-grow active:btn-pressed"
    :class="[
      (matrixIsUploaded) ? 'bg-primary text-primary-700' : 'bg-gray-300 text-black'
    ]"
    for="matrix-upload">
    <div class="relative w-full">
      <div
        class="flex items-center transition"
        :class="[
          (matrixIsUploaded) ? 'opacity-0': ''
        ]">
        <div class="h-4 w-4 mr-2">
          <feather-upload />
        </div>

        <span>
          {{ defaultMessage }}
        </span>
      </div>

      <fade-in-out class="w-full">
        <div
          v-show="matrixIsUploaded"
          class="absolute pin-t pin-l flex items-center justify-center w-full">
          <div class="h-4 w-4 mr-2">
            <feather-thumbs-up />
          </div>

          <span class="inline-block flex-1 whitespace-no-wrap overflow-hidden text-overflow-ellipsis">
            {{ fileName }}
          </span>
        </div>
      </fade-in-out>
    </div>

    <input
      class="hidden"
      type="file"
      id="matrix-upload"
      name="matrix-upload"
      @change="handleFile" />
  </label>
</template>

<script>
import Papa from 'papaparse'
import XLSX from 'xlsx'

import FeatherUpload from '~/components/icons/FeatherUpload.vue'
import FeatherThumbsUp from '~/components/icons/FeatherThumbsUp.vue'

import FadeInOut from '~/components/transitions/FadeInOut.vue'

export default {
  components: {
    FeatherUpload,
    FeatherThumbsUp,
    FadeInOut
  },
  data () {
    return {
      defaultMessage: 'Upload matrix',
      fileName: '',
      matrixIsUploaded: false,
      matrix: {}
    }
  },
  computed: {
    fileType () {
      return (this.fileName) ? this.fileName.split('.')[1] : ''
    },
  },
  methods: {
    emitData () {
      this.$emit('matrix-uploaded', this.matrix, this.fileName.split('.')[0])
    },

    setFileName (value) {
      this.fileName = value.split("\\").reverse()[0]
    },
    fileTypeIsValid () {
      return this.fileType === 'csv' || this.fileType === 'xlsx' || this.fileType === 'json'
    },

    // Handle CSVs
    formatCSV (papaParseResult) {
      function getSources(papaParseResult) {
        return papaParseResult.data.map(row => {
          let firstKey = Object.keys(row)[0]
          return row[firstKey]
        })
      }

      function getTargets(papaParseResult) {
        return papaParseResult.meta.fields.slice(1)
      }

      function getStrengths(papaParseResult) {
        return papaParseResult.data.reduce((strengths, row) => {
          let firstKey = Object.keys(row)[0]
          let firstValue = row[firstKey]

          delete row[firstKey]

          strengths[firstValue] = row

          return strengths
        }, {})
      }

      let sources = getSources(papaParseResult),
          targets = getTargets(papaParseResult),
          strengths = getStrengths(papaParseResult)

      this.matrix = {
        sources: sources,
        targets: targets,
        strengths: strengths
      }

      this.emitData()
    },
    parseCSV (file) {
      Papa.parse(file, {
        header: true,
        dynamicTyping: true,
        complete: this.formatCSV
      })
    },

    // Handle XLSXs
    formatXLSX (xlsxResult) {
      let firstSheetName = Object.keys(xlsxResult.Sheets)[0]
      let sheet = xlsxResult.Sheets[firstSheetName]

      delete sheet['!margins']
      delete sheet['!ref']
      delete sheet['A1']

      function isInRow1(cell) {
        return Number(cell.match(/\d+$/)[0]) === 1
      }

      function isInColumnA(cell) {
        return /^A\d+$/.test(cell)
      }

      let cells = Object.keys(sheet),
          row1 = cells.filter(cell => isInRow1(cell)),
          columnA = cells.filter(cell => isInColumnA(cell)),
          cellB2ToEnd = cells.filter(cell => !isInRow1(cell) && !isInColumnA(cell))

      function getSources(columnA) {
        return columnA.map(cell => sheet[cell].v)
      }

      function getTargets(row1) {
        return row1.map(cell => sheet[cell].v)
      }

      function getStrengths(sources, targets) {
        function getCurrentStrengths(targets) {
          return targets.reduce((currentStrengths, target) => {
            let currentCell = cellB2ToEnd.shift()

            currentStrengths[target] = sheet[currentCell].v

            return currentStrengths
          }, {})
        }

        return sources.reduce((strengths, source) => {
          let currentStrengths = getCurrentStrengths(targets)

          strengths[source] = currentStrengths

          return strengths
        }, {})
      }

      let sources = getSources(columnA),
          targets = getTargets(row1),
          strengths = getStrengths(sources, targets)

      this.matrix = {
        sources: sources,
        targets: targets,
        strengths: strengths
      }

      this.emitData()
    },
    parseXLSX (file) {
      let readAsBinaryString = true,
          reader = new FileReader()

      reader.onload = (evt) => {
        let data = evt.target.result
        if(!readAsBinaryString) data = new Uint8Array(data)

        let xslxResult = XLSX.read(data, { type: readAsBinaryString ? 'binary' : 'array' })

        this.formatXLSX(xslxResult)
      }

      switch(true) {
        case readAsBinaryString:
          reader.readAsBinaryString(file)
          break;

        default:
          reader.readAsArrayBuffer(file)
          break;
      }
    },

    // Handle JSONs
    formatJSON (jsonParseResult) {
      function getSources (strengths) {
        return Object.keys(jsonParseResult.strengths)
      }

      function getTargets (strengths) {
        let targets = []

        for (var source in strengths) {
          let currentTargets = Object.keys(strengths[source])

          targets = targets.concat(currentTargets)
        }

        return Array.from( new Set(targets) )
      }

      let sources = (jsonParseResult.sources) ? jsonParseResult.sources : getSources(jsonParseResult.strengths),
          targets = (jsonParseResult.targets) ? jsonParseResult.targets : getTargets(jsonParseResult.strengths),
          strengths = jsonParseResult.strengths

      this.matrix = {
        sources: sources,
        targets: targets,
        strengths: strengths
      }

      this.emitData()
    },
    parseJSON (file) {
      let reader = new FileReader()

      reader.onload = (evt) => {
        let data = evt.target.result

        let jsonParseResult = JSON.parse(data)

        this.formatJSON(jsonParseResult)
      }

      reader.readAsText(file)
    },

    parseData (file) {
      switch(true) {
        case this.fileType === 'csv':
          this.parseCSV(file)
          break;

        case this.fileType === 'xlsx':
          this.parseXLSX(file)
          break;

        case this.fileType === 'json':
          this.parseJSON(file)
          break;
      }
    },
    handleFile (evt) {
      let value = evt.target.value

      this.setFileName(value)

      switch(true) {
        case !this.fileTypeIsValid():
          alert('Woops! You can only upload CSV, XLSX, or JSON.')
          this.matrixIsUploaded = false
          break;
        default:
          this.matrixIsUploaded = true
          this.parseData(evt.target.files[0])
          // this.$emit('matrix-uploaded', parseData(file))
      }
    }
  },
}
</script>
