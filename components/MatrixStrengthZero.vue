<template lang="html">
  <input-checkbox
    :input-id="id"
    :is-checked-by-default="includeStrengthZero"
    :checkbox-group-name="groupName"
    :label="messages.label"
    icon-unchecked-color="text-color-inherit"
    icon-checked-hover-color="hover:text-primary"
    @matrix-strength-zero-toggled="setStrengthZero">
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
      id: 'matrix-strength-zero',
      includeStrengthZero: false,
      groupName: 'matrix-strength-zero',
      messages: {
        label: 'Include zero strengths'
      }
    }
  },
  methods: {
    setStrengthZero (isChecked) {
      this.includeStrengthZero = isChecked

      this.$emit('strength-zero-set', this.includeStrengthZero)
    }
  }
}
</script>
