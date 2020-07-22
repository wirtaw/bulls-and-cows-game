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
              :class="{ 'input': true, 'is-danger': errors['userNumber'], 'is-light': !errors['userNumber'] }"
              type="text"
              name="data-userNumber"
              placeholder="Input your spell"
              maxLength="4"
              autocomplete="off"
            >
          </p>
          <p class="control">
            <button
              class="button"
              :disabled="!errors['userNumber'] && !win ? false: 'disabled'"
              @click="sendSpell"
            >
              Make spell
            </button>
          </p>
        </div>
      </div>
    </div>
    <div class="field is-horizontal">
      <div class="field-body">
        <p :class="{ 'help': true, 'is-danger': errors['userNumber'] }">
          Input only numbers 0-9. Without reapeat. <span v-if="errors['userNumber']">{{ errors['userNumber'] }}</span>
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
          'userNumber': null
        },
        userNumber: ''
      }
    },
    computed: {
      ...mapState({
        win: state => state.win,
      }),
    },
    watch: {
      userNumber(to, from) {
        let value = this.checkForm(to);
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
        let result = true;
        let number = value.trim();

        if (number.length > 4) {
          result = false;
          this.errors['userNumber'] = 'More than 4 digits';
        }

        if (result) {
          const unqNumbers = [];
          for (let i = 0; i < number.length; i++) {
            if (!unqNumbers.includes(number[i])) {
              unqNumbers.push(number[i]);
            } else {
              result = false;
              this.errors['userNumber'] = 'Repeat numbers';
              break;
            }
          }
          const regex = /[0-9]/g;
          const found = value.trim().match(regex);

          if (result && found && Array.isArray(found) && found.length !== number.length) {
            result = false;
            this.errors['userNumber'] = 'Digit values in the input.';
          }

          if(result) {
            this.errors['userNumber'] = null;
          }
        }

        return result;
      }
    }
  }
</script>

<style scoped>

</style>
