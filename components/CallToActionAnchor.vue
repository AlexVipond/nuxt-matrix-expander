<template lang="html">
  <a
    class="inline-flex items-center"
    :href="href"
    :target="target"
    rel="noopener">
    <div
      v-if="showIconBefore"
      class="h-4 w-4 mr-2">
      <component :is="iconBefore" />
    </div>

    <span>
      {{ message }}
    </span>

    <div
      v-if="showIconAfter"
      class="h-4 w-4 ml-2">
      <component :is="iconAfter" />
    </div>
  </a>
</template>

<script>
export default {
  props: {
    href: {
      type: String,
      required: true
    },
    target: {
      type: String,
      default: '_self'
    },
    message: {
      type: String,
      required: true
    },
    iconBefore: {
      type: Object
    },
    iconAfter: {
      type: Object
    },
    showIconBefore: {
      type: Boolean
    },
    showIconAfter: {
      type: Boolean
    },
  }
}
</script>
