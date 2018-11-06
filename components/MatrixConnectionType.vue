<template lang="html">
  <input-text
    :input-id="id"
    :placeholder="placeholder"
    :label="messages.label"
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
