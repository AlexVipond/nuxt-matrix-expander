<template lang="html">
  <label
    class="inline-flex flex-col-reverse"
    :for="inputId"
    @input="emitValue">
    <input
      class="inline-block w-full"
      :id="inputId"
      type="text"
      :name="inputId"
      :value="defaultValue"
      :placeholder="placeholder">

    <span class="text-sm">
      {{ label }}
    </span>
  </label>
</template>

<script>
export default {
  props: {
    inputId: {
      type: String,
      required: true
    },
    defaultValue: {
      type: String,
      default: ''
    },
    placeholder: {
      type: String,
      required: true
    },
    label: {
      type: String,
      required: true
    }
  },
  data () {
    return {
      value: ''
    }
  },
  methods: {
    emitValue (evt) {
      this.value = evt.target.value
      this.$emit(`${this.inputId}-text-input`, this.value)
    }
  }
}
</script>
