<template lang="html">
  <input-text
    input-styles="py-2 px-2 bg-gray-700 text-gray-300 rounded-sm focus:shadow-outline border-primary"
    :input-id="id"
    :placeholder="placeholder"
    :label="messages.label"
    :show-label="false"
    @matrix-connection-type-text-input="setConnectionType">
  </input-text>
</template>

<script>
import InputText from '~/components/InputText.vue'

export default {
  components: {
    InputText
  },
  data () {
    return {
      id: 'matrix-connection-type',
      placeholder: 'Matrix connection',
      messages: {
        label: 'Connection type'
      }
    }
  },
  methods: {
    setConnectionType (value) {
      this.connectionType = value

      this.$emit('connection-type-set', this.connectionType)
    }
  }
}
</script>
