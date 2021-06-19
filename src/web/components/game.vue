/* eslint-disable vue/html-self-closing */
<template>
  <div class="vueapp">
    <navbar></navbar>
    <section class="hero is-light is-medium vueapp-content">
      <div class="hero-body">
        <div class="container">
          <h1 class="title">
            {{ $t('app.title') }} {{ $t('message.game') }}
          </h1>
          <h2 class="subtitle">
            {{ $t('message.play') }} {{ $t('message.now') }}!
          </h2>
          <div
            v-if="win"
            class="columns"
          >
            <div class="column">
              <Notification></Notification>
            </div>
          </div>
          <div class="columns">
            <div class="column">
              <InputNumber></InputNumber>
            </div>
          </div>
          <div class="columns">
            <div class="column">
              <Results></Results>
            </div>
          </div>
        </div>
      </div>
    </section>
    <foot></foot>
  </div>
</template>

<script>
    import { mapState, mapActions } from 'vuex';
    import navbar from './layout/navbar.vue';
    import foot from './layout/foot.vue';

    import InputNumber from './base/InputNumber.vue';
    import Results from './base/Results.vue';
    import Notification from './base/Notification.vue';
    export default {
      name: 'Game',
      components: {
        navbar,
        foot,
        InputNumber,
        Results,
        Notification
      },
      computed: {
        ...mapState({
          win: state => state.win,
          init: state => state.init
        }),
      },
      created () {
        if (!this.init) {
          this.createValue();
        }
      },
      methods: {
        ...mapActions({
          createValue: 'createValue',
        })
      }
    }
</script>

<style lang="scss" scoped>

</style>