<template lang="html">
  <label
    class="inline-flex items-center group cursor-pointer"
    :for="inputId"
    @change="emitValue">

    <input
      :id="inputId"
      :value="inputValue"
      class="hidden"
      type="radio"
      :name="inputGroupName">

    <radio-icon
      class="h-3 w-3 mr-1"
      :is-checked="inputValue === pickedValue"
      :checked-color="iconCheckedColor"
      :unchecked-color="iconUncheckedColor"
      :checked-hover-color="iconCheckedHoverColor"
      :unchecked-hover-color="iconUncheckedHoverColor">
    </radio-icon>

    <span>
      {{ label }}
    </span>

    <!-- Slot for info icon linked to docs -->
    <slot />
  </label>
</template>

<script>
import RadioIcon from '~/components/RadioIcon.vue'

export default {
  components: {
    RadioIcon
  },
  props: {
    inputId: {
      type: String,
      required: true
    },
    inputValue: {
      type: String,
      required: true
    },
    pickedValue: {
      type: String,
      required: true
    },
    inputGroupName: {
      type: String,
      required: true
    },
    label: {
      type: String,
      required: true
    },
    iconCheckedColor: {
      type: String,
    },
    iconCheckedHoverColor: {
      type: String,
    },
    iconUncheckedColor: {
      type: String,
    },
    iconUncheckedHoverColor: {
      type: String,
    },
  },
  methods: {
    emitValue (evt) {
      this.$emit(`${this.inputId}-picked`, this.inputValue)
    }
  }
}
</script>
