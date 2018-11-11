<template lang="html">
  <main class="pt-32">
    <section class="markdown container" v-html="docs" />
  </main>
</template>

<script>
import docs from '~/static/docs.md'

export default {
  layout: 'master',
  computed: {
    docs () {
      return docs
    }
  }
}
</script>
