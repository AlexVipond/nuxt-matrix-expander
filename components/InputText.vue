<template lang="html">
  <label
    class="inline-flex flex-col-reverse"
    :for="inputId"
    @input="emitValue">
    <input
      class="inline-block w-full focus:outline-none"
      :class="[
        inputStyles,
      ]"
      :id="inputId"
      type="text"
      :name="inputId"
      :value="defaultValue"
      :placeholder="placeholder">

    <span
      v-if="showLabel"
      class="text-sm">
      {{ label }}
    </span>
  </label>
</template>

<script>
export default {
  props: {
    inputStyles: {
      type: String,
      default: 'bg-gray-200 text-black rounded-sm focus:shadow-outline'
    },
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
    },
    showLabel: {
      type: Boolean,
      default: true
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
