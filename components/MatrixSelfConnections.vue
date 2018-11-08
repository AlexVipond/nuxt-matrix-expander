<template lang="html">
  <input-checkbox
    :input-id="id"
    :input-value="value"
    :is-checked-by-default="includeSelfConnections"
    :input-group-name="groupName"
    :label="messages.label"
    icon-unchecked-color="text-color-inherit"
    icon-checked-hover-color="hover:text-primary"
    @matrix-self-connections-toggled="setSelfConnections">
  </input-checkbox>
</template>

<script>
import InputCheckbox from '~/components/InputCheckbox.vue'

export default {
  components: {
    InputCheckbox
  },
  data () {
    return {
      id: 'matrix-self-connections',
      value: 'include-self-connections',
      includeSelfConnections: false,
      groupName: 'matrix-self-connections',
      messages: {
        label: 'Include self connections'
      }
    }
  },
  methods: {
    setSelfConnections (isChecked) {
      this.includeSelfConnections = isChecked

      this.$emit('self-connections-set', this.includeSelfConnections)
    }
  }
}
</script>
