<template>
  <div>
    <article class="message is-success">
      <div class="message-body">
        {{ $t('message.winGame') }} <br>
        <button
          class="button"
          @click="createValue"
        >
          {{ $t('message.play') }} {{ $t('message.new') }} {{ $t('message.game') }} 
        </button>
      </div>
    </article>
  </div>
</template>

<script>
  import { mapActions } from 'vuex';

  export default {
    name: 'Notification',
    methods: {
      ...mapActions({
        createValue: 'createValue',
      })
    }
  }
</script>

<style scoped>

</style>
