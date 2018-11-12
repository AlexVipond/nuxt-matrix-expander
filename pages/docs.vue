<template lang="html">
  <main class="pt-32 px-4">
    <section class="markdown container ui-card">
      <div v-html="docs" />
    </section>
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
  },
  mounted () {
    let links = this.$el.querySelectorAll('a')

    console.log(links)

    links.forEach(link => {
      link.target = "_blank"
      link.rel = "noopener"
    })
  }
}
</script>
