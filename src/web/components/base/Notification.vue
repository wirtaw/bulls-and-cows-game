<template>
  <div>
    <article class="message is-success">
      <div class="message-body">
        {{ $t('message.winGame') }} <br>
        {{ $t('message.total') }} {{ $t('message.points') }} : <span class="tag is-info is-light"> {{ total }} </span>
        <br>
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
  import { mapActions, mapState } from 'vuex';

  export default {
    name: 'Notification',
    computed: {
      ...mapState({
        total: state => state.total,
      }),
    },
    methods: {
      ...mapActions({
        createValue: 'createValue',
      })
    }
  }
</script>

<style scoped>

</style>
