<template>
  <div
    class="form"
  >
    <div class="field is-horizontal">
      <div class="field-body">
        <div class="field is-grouped">
          <p class="control is-expanded">
            <input
              id="data-userNumber"
              v-model="userNumber"
              :class="{ 'input': true, 'is-danger': errors['userNumber'].length > 0, 'is-light': errors['userNumber'].length === 0 }"
              type="text"
              name="data-userNumber"
              :placeholder="placeholder"
              maxLength="4"
              autocomplete="off"
            >
          </p>
          <p class="control">
            <button
              class="button"
              :disabled="errors['userNumber'].length === 0 && !win ? false: 'disabled'"
              @click="sendSpell"
            >
              {{ $t('message.make') }} {{ $t('message.spell') }}
            </button>
          </p>
        </div>
      </div>
    </div>
    <div class="field is-horizontal">
      <div class="field-body">
        <p :class="{ 'help': true, 'is-danger': errors['userNumber'].length > 0 }">
          {{ $t('message.help') }} <span v-if="errors['userNumber'].length > 0">{{ errors['userNumber'].join(', ') }}</span>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
  import { mapActions, mapState } from 'vuex';

  export default {
    name: 'InputNumber',
    data () {
      return {
        errors: {
          'userNumber': []
        },
        userNumber: ''
      }
    },
    computed: {
      ...mapState({
        win: state => state.win,
        init: state => state.init,
      }),
      placeholder () {
        return this.$t('message.placeholder');
      }
    },
    watch: {
      userNumber(to, from) {
        let value = this.checkForm(to);
      },
      init(to, from) {
        if (to) {
          this.userNumber = '';
        }
      }
    },
    methods: {
      ...mapActions({
        makeSpell: 'makeSpell',
      }),
      sendSpell() {
        this.makeSpell(this.userNumber);
      },
      checkForm(value) {
        this.errors['userNumber'] = [];
        let result = true;
        let number = value.trim();

        if (number.length > 4) {
          result = false;
          this.errors['userNumber'].push(this.$t('message.errors.moreSymols'));
        }

        if (result) {
          const unqNumbers = [];
          for (let i = 0; i < number.length; i++) {
            if (!unqNumbers.includes(number[i])) {
              unqNumbers.push(number[i]);
            } else {
              result = false;
              this.errors['userNumber'].push(this.$t('message.errors.repeat'));
              break;
            }
          }
          const regex = /[0-9]/g;
          const found = value.trim().match(regex);

          if (!result || !found || !Array.isArray(found) || found.length !== number.length) {
            result = false;
            this.errors['userNumber'].push(this.$t('message.errors.digitSymbols'));
          }

          if(result) {
            this.errors['userNumber'] = [];
          }
        }

        return result;
      }
    }
  }
</script>

<style scoped>

</style>
