<template>
  <section class="hero is-light is-medium">
    <div class="hero-body">
      <div class="container">
        <h1 class="title">
          Bulls and cows game
        </h1>
        <h2 class="subtitle">
          Play now!
        </h2>
        <div
          v-if="win"
          class="columns"
        >
          <div class="column">
            <Notification />
          </div>
        </div>
        <div class="columns">
          <div class="column">
            <InputNumber />
          </div>
        </div>
        <div class="columns">
          <div class="column">
            <Results />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { mapState } from 'vuex';
// @ is an alias to /src
import InputNumber from '@/components/InputNumber.vue';
import Results from '@/components/Results.vue';
import Notification from '@/components/Notification.vue';

export default {
  name: 'Home',
  components: {
    InputNumber,
    Results,
    Notification
  },
  computed: {
    ...mapState({
      win: state => state.win,
    }),
  }
}
</script>
