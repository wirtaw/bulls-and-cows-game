<template>
  <div
    id="app"
    class="app"
  >
    <nav
      class="navbar"
      role="navigation"
      aria-label="main navigation"
    >
      <div class="navbar-brand" />
      <div class="navbar-menu">
        <div class="navbar-start">
          <router-link
            to="/"
            class="navbar-item is-active"
          >
            Home
          </router-link>
          <div
            v-if="total"
            class="navbar-item"
          >
            Total points - {{ total }}
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
              New game
            </button>
          </div>
          <router-link
            to="/about"
            class="navbar-item"
          >
            About
          </router-link>
          <router-link
            to="/rules"
            class="navbar-item"
          >
            Rules
          </router-link>
        </div>
      </div>
    </nav>
    <router-view />
    <footer class="footer">
      <div class="content has-text-centered">
        <p>
          <strong>Poplauki.eu</strong> by <a href="https://poplauki.eu">Poplavskij Vladimir</a>.
        </p>
      </div>
    </footer>
  </div>
</template>
<script>
  import { mapActions, mapState } from 'vuex';
  export default {
    name: 'App',
    computed: {
      ...mapState({
        total: state => state.total,
        game: state => state.game,
      }),
    },
    created () {
      this.createValue();
    },
    methods: {
      ...mapActions({
        startNewGame: 'newGame',
        createValue: 'createValue',
      }),
      newGame() {
        this.startNewGame();
      },
    }
  }
</script>


<style lang="scss">
  @import "src/assets/scss/variables";
  @import 'bulma/bulma.sass';
  @import "src/assets/scss/overrides";
  .app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }

  #nav {
    padding: 30px;
  }

  #nav a {
    font-weight: bold;
    color: #2c3e50;
  }

  #nav a.router-link-exact-active {
    color: #42b983;
  }
</style>
