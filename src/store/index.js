import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

function shuffle(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

function detectSpelled(number, spell) {
  const numberArr = number.split('').map(item => Number(item));
  const spellArr = spell.split('').map(item => Number(item)).filter(number => numberArr.includes(number));

  return spellArr.length;
}

function detectInPlace(number, spell) {
  const numberArr = number.split('').map(item => Number(item));
  const spellArr = spell.split('').map(item => Number(item));
  let result = 0;

  for (let i = spellArr.length - 1; i >= 0; i--) {
    if (spellArr[i] === numberArr[i]) {
        result += 1;
    }
  }

  return result;
}

export default new Vuex.Store({
  state: {
    value: '0000',
    spell: 0,
    points: 1000,
    total: 0,
    game: [],
    history: { },
    win: false,
  },
  mutations: {
    setSpell (state, payload) {
      state.spell += 1;
      state.points = state.points - state.spell * 10;
      const spelled = detectSpelled(state.value, payload);
      const inPlace = detectInPlace(state.value, payload);
      if (spelled === inPlace && inPlace === 4) {
        state.win = true;
        state.total = state.total + state.points;
      }
      state.game.push({
        nr: state.spell,
        number: payload,
        spelled,
        inPlace,
        points: state.points,
      });
    },
    setValue (state) {
      const numbers = shuffle([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
      state.value = `${numbers[0]}${numbers[1]}${numbers[2]}${numbers[3]}`;
      state.win = false;
    },
    resetGame(state) {
      state.points = 1000;
      state.spell = 0;
      state.history[`game${Object.keys(state.history).length + 1}`] = [...state.game];
      state.game = [];
      state.win = false;
    }
  },
  actions: {
    makeSpell({ commit }, data) {
      commit('setSpell', data);
    },
    createValue({ commit }) {
      commit('setValue');
    },
    newGame({ commit }) {
      commit('resetGame');
      commit('setValue');
    }
  },
  modules: {

  }
})
