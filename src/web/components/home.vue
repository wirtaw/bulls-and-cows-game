/* eslint-disable vue/html-self-closing */
<template>
  <div class="vueapp">
    <navbar></navbar>
    <section class="hero is-info vueapp-content">
      <div class="hero-body">
        <p class="title">
          {{ $t('message.verb.play') }} {{ $t('app.title') }}
        </p>
        <p class="subtitle">
          <router-link
            to="/game"
            class="button"
          >
            {{ $t('message.play') }}
          </router-link>
        </p>
      </div>
    </section>
    <foot></foot>
  </div>
</template>


<script>
    import { mapActions } from 'vuex';
    import navbar from './layout/navbar.vue';
    import foot from './layout/foot.vue';

    export default {
      name: 'Main',
      components: {
        navbar,
        foot
      },
      created () {
        this.createValue();
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