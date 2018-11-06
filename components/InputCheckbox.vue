<template lang="html">
  <label
    class="inline-flex items-center group"
    :for="inputId"
    @click.prevent="toggle">

    <input
      :id="inputId"
      class="hidden"
      type="checkbox"
      :name="checkboxGroupName"
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
    isCheckedByDefault: {
      type: Boolean,
      required: true
    },
    checkboxGroupName: {
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
    toggle () {
      this.isChecked = !this.isChecked
      this.$emit(`${this.inputId}-toggled`, this.isChecked)
    }
  }
}
</script>
