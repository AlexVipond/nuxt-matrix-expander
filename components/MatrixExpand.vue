<template lang="html">
  <label
    class="btn hover:btn-grow"
    for="expand-matrix"
    @click.prevent="expandMatrix()">
    <button
      type="submit"
      name="expand-matrix"></button>

    <div class="h-4 w-4 mr-2">
      <feather-shuffle />
    </div>

    <span class="inline-block">Expand</span>
  </label>
</template>

<script>
import FeatherShuffle from '~/components/icons/FeatherShuffle.vue'

export default {
  components: {
    FeatherShuffle
  }
}
</script>

<style lang="css">
</style>
