<template lang="html">
  <div class="flex flex-col">
    <input-radio
      class="mb-2 text-gray-300 hover:text-white transition"
      input-id="matrix-directed"
      input-value="directed"
      :picked-value="direction"
      :input-group-name="groupName"
      :label="messages.directed.label"
      icon-unchecked-color="text-color-inherit"
      icon-checked-hover-color="hover:text-primary"
      @matrix-directed-picked="setDirection">
    </input-radio>

    <input-radio
      class="mb-2 text-gray-300 hover:text-white transition"
      input-id="matrix-undirected"
      input-value="undirected"
      :picked-value="direction"
      :input-group-name="groupName"
      :label="messages.undirected.label"
      icon-unchecked-color="text-color-inherit"
      icon-checked-hover-color="hover:text-primary"
      @matrix-undirected-picked="setDirection">
    </input-radio>
  </div>
</template>

<script>
import InputRadio from '~/components/InputRadio.vue'

export default {
  components: {
    InputRadio
  },
  data () {
    return {
      direction: '',
      groupName: 'matrix-direction',
      messages: {
        directed: {
          label: 'Directed',
        },
        undirected: {
          label: 'Undirected',
        }
      }
    }
  },
  methods: {
    setDirection (value) {
      this.direction = value
      this.$emit('direction-set', this.direction)
    }
  }
}
</script>
