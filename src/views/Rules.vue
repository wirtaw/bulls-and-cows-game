<template>
  <div class="container">
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
</template>

<script>
  export default {
    name: 'Rules'
  }
</script>

<style scoped>

</style>
