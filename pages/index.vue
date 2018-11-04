<template>
  <body>
    <header class="flex items-center justify-center h-screen">
      <div class="">
        <h1 class="font-mono font-400 text-6xl">
          Expand your Matrix
        </h1>

        <div class="h-6 w-6">
          <nuxt-link to="/docs">
            <feather-info />
          </nuxt-link>
        </div>
      </div>

      <div class="">
        <call-to-action-primary :showIconBefore="true" component-id="cta-primary-landing-page"/>

        <call-to-action-secondary :showIconBefore="true" />
      </div>
    </header>

    <section>
      <matrix-expander-user-interface id="matrix-expander-ui" />
    </section>

    <section>
      <data-result
        v-if="matrixIsExpanded"/>
    </section>
  </body>
</template>

<script>
import FeatherInfo from '~/components/icons/FeatherInfo.vue'

import CallToActionPrimary from '~/components/CallToActionPrimary.vue'
import CallToActionSecondary from '~/components/CallToActionSecondary.vue'

import MatrixExpanderUserInterface from '~/components/MatrixExpanderUserInterface.vue'
import DataResult from '~/components/DataResult.vue'

export default {
  layout: 'master',
  components: {
    FeatherInfo,
    CallToActionPrimary,
    CallToActionSecondary,
    MatrixExpanderUserInterface,
    DataResult,
  },
  data () {
    return {
      matrixIsExpanded: false,
    }
  }
}
</script>
