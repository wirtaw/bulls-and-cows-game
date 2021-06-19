/* eslint-disable vue/html-self-closing */
<template>
  <div class="vueapp">
    <navbar></navbar>
    <section class="container vueapp-content">
      <div class="container is-fluid">
        <h1 class="title is-capitalized">
          {{ $t('message.rules') }}
        </h1>
        <p class="has-text-left">
          <span
            v-if="$t('message.rulesItems.sentence1')"
            class="has-text-left"
          >{{ $t('message.rulesItems.sentence1') }}</span>
          <br v-if="$t('message.rulesItems.sentence1')">
          <span
            v-if="$t('message.rulesItems.sentence2')"
            class="has-text-left"
          >{{ $t('message.rulesItems.sentence2') }}</span>
          <br v-if="$t('message.rulesItems.sentence2')">
          <span
            v-if="$t('message.rulesItems.sentence3')"
            class="has-text-left"
          >{{ $t('message.rulesItems.sentence3') }}</span>
          <br v-if="$t('message.rulesItems.sentence3')">
          <span
            v-if="$t('message.rulesItems.sentence4')"
            class="has-text-left"
          >{{ $t('message.rulesItems.sentence4') }}</span>
          <br v-if="$t('message.rulesItems.sentence4')">
        </p>
      </div>
    </section>
    <foot></foot>
  </div>
</template>

<script>
    import navbar from './layout/navbar.vue';
    import foot from './layout/foot.vue';
    export default {
      name: 'Rules',
      components: {
        navbar,
        foot
      },
    }
</script>

<style lang="scss" scoped>

</style>