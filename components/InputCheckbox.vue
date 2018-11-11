<template lang="html">
  <label
    class="inline-flex items-center group cursor-pointer"
    :for="inputId"
    @change="toggle">

    <input
      :id="inputId"
      :value="inputValue"
      class="hidden"
      type="checkbox"
      :name="inputGroupName"
      :checked="isCheckedByDefault">

    <checkbox-icon
      class="h-3 w-3 mr-2"
      :is-checked="isChecked"
      :checked-color="iconCheckedColor"
      :unchecked-color="iconUncheckedColor"
      :checked-hover-color="iconCheckedHoverColor"
      :unchecked-hover-color="iconUncheckedHoverColor">
    </checkbox-icon>

    <span>
      {{ label }}
    </span>

    <!-- Slot for info icon linked to docs -->
    <slot />
  </label>
</template>

<script>
import CheckboxIcon from '~/components/CheckboxIcon.vue'

export default {
  components: {
    CheckboxIcon
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
    isCheckedByDefault: {
      type: Boolean,
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
  data () {
    return {
      isChecked: this.isCheckedByDefault
    }
  },
  methods: {
    toggle (evt) {
      this.isChecked = !this.isChecked
      this.$emit(`${this.inputId}-toggled`, this.isChecked, evt.target.value)
    }
  }
}
</script>
