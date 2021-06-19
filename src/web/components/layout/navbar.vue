<template>
  <nav
    class="navbar"
    role="navigation"
    aria-label="main navigation"
  >
    <div class="navbar-brand">
      <div class="navbar-item">
        {{ $t('app.title') }}
      </div>
      <a
        role="button"
        class="navbar-burger"
        data-target="navMenu"
        aria-label="menu"
        aria-expanded="false"
        @click="openNavigation"
      >
        <span aria-hidden="true" />
        <span aria-hidden="true" />
        <span aria-hidden="true" />
      </a>
    </div>
    <div
      :class="{'navbar-menu': true, 'is-active': navigationMain }"
    >
      <div class="navbar-start">
        <router-link
          to="/"
          class="navbar-item is-active"
        >
          {{ $t('message.home') }}
        </router-link>
        <div class="navbar-item has-dropdown is-hoverable">
          <a
            v-if="$i18n.locale === 'en'"
            class="navbar-link"
            :style="{'width':`120px`}"
          >
            gb
          </a>
          <a
            v-if="$i18n.locale === 'lt'"
            class="navbar-link"
            :style="{'width':`120px`}"
          >
            lt
          </a>
          <a
            v-if="$i18n.locale === 'ru'"
            class="navbar-link"
            :style="{'width':`120px`}"
          >
            ru
          </a>
          <a
            v-if="$i18n.locale === 'pl'"
            class="navbar-link"
            :style="{'width':`120px`}"
          >
            pl
          </a>
          <div class="navbar-dropdown">
            <a
              v-if="$i18n.locale !== 'en'"
              class="navbar-item"
              href="#"
              @click="selectLang('en')"
            >
              gb
            </a>
            <a
              v-if="$i18n.locale !== 'lt'"
              class="navbar-item"
              href="#"
              @click="selectLang('lt')"
            >
              lt
            </a>
            <a
              v-if="$i18n.locale !== 'ru'"
              class="navbar-item"
              href="#"
              @click="selectLang('ru')"
            >
              ru
            </a>
            <a
              v-if="$i18n.locale !== 'pl'"
              class="navbar-item"
              href="#"
              @click="selectLang('pl')"
            >
              pl
            </a>
          </div>
        </div>
        <div
          v-if="total"
          class="navbar-item"
        >
          {{ $t('message.total') }} {{ $t('message.points') }} - {{ total }}
        </div>
      </div>
      <div class="navbar-end">
        <div
          v-if="game && game.length > 0"
          class="navbar-item"
        >
          <button
            class="button"
            @click="newGame"
          >
            {{ $t('message.new') }} {{ $t('message.game') }}
          </button>
        </div>
        <router-link
          to="/profile"
          class="navbar-item"
        >
          {{ $t('message.about') }}
        </router-link>
        <router-link
          to="/rules"
          class="navbar-item"
        >
          {{ $t('message.rules') }}
        </router-link>
      </div>
    </div>
  </nav>
</template>

<script>
  import { mapActions, mapState } from 'vuex'

    export default {
        name: 'Navbar',
        components: {
          
        },
        data () {
          return {
            navigationMain: false,
          }
        },
        computed: {
          ...mapState({
            total: state => state.total,
            game: state => state.game,
          }),
        },
        watch: {
          $route(to, from) {
            this.navigationMain = false;
          }
        },
        methods: {
          ...mapActions({
            startNewGame: 'newGame',
          }),
          newGame() {
            this.startNewGame();
          },
          openNavigation() {
            this.navigationMain = !this.navigationMain;
          },
          selectLang(lang) {
            this.$i18n.locale = lang;
          }
        }
    }
</script>