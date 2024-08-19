<template>
  <div class="game-container">
    <h1>Bulls and Cows</h1>
    <p>Guess the 4-digit number:</p>
    <input v-model="userGuess" maxlength="4" placeholder="Enter your guess" />
    <button v-if="!end" @click="checkGuess">Guess</button>
    <button v-if="end" @click="startGame">Start new game</button>
    <p v-if="message" :class="messageClass">{{ message }}</p>
    <ul>
      <li v-for="(attempt, index) in attempts" :key="index">
        Guess: {{ attempt.guess }} - Bulls: {{ attempt.bulls }}, Cows: {{ attempt.cows }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      secretNumber: this.generateSecretNumber(),
      userGuess: '',
      attempts: [],
      message: '',
      countGueses: 0,
      end: false,
      messageClass: 'notification is-success is-light'
    }
  },
  methods: {
    generateSecretNumber() {
      let digits = new Set()
      while (digits.size < 4) {
        digits.add(Math.floor(Math.random() * 10))
      }
      return Array.from(digits).join('')
    },
    checkGuess() {
      if (this.userGuess.length !== 4 || isNaN(this.userGuess)) {
        this.message = 'Please enter a valid 4-digit number.'
        this.messageClass = 'notification is-warning is-light'
        return
      }
      if (new Set(this.userGuess).size !== 4) {
        this.message = 'Digits must be unique.'
        this.messageClass = 'notification is-warning is-light'
        return
      }

      this.countGueses++
      const { bulls, cows } = this.calculateBullsAndCows(this.userGuess, this.secretNumber)
      this.attempts.push({ guess: this.userGuess, bulls, cows })

      if (bulls === 4) {
        this.end = true
        this.message = `Congratulations! You guessed the number with ${this.countGueses} steps!`
        this.messageClass = 'notification is-success is-light'
      } else {
        this.message = `Bulls: ${bulls}, Cows: ${cows}`
        this.messageClass = 'notification is-success is-light'
      }

      this.userGuess = ''
    },

    startGame() {
      this.secretNumber = this.generateSecretNumber()
      this.attempts = []
      this.message = ''
      this.messageClass = 'notification is-success is-light'
      this.countGueses = 0
      this.end = false
    },
    calculateBullsAndCows(guess, secret) {
      let bulls = 0
      let cows = 0

      for (let i = 0; i < 4; i++) {
        if (guess[i] === secret[i]) {
          bulls++
        } else if (secret.includes(guess[i])) {
          cows++
        }
      }

      return { bulls, cows }
    }
  }
}
</script>

<style>
.game-container {
  max-width: 400px;
  margin: 50px auto;
  padding: 20px;
  text-align: center;
  border: 1px solid #ccc;
  border-radius: 10px;
  background-color: #f9f9f9;
  color:#000;
}
input {
  padding: 8px;
  margin: 10px 0;
  width: 80%;
}
button {
  padding: 10px 20px;
  margin-top: 10px;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  padding: 5px;
  border-bottom: 1px solid #ddd;
}
</style>
