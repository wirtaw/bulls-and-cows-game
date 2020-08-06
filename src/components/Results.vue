<template>
  <div id="gameTable">
    <table
      v-if="game && game.length > 0"
      class="table is-fullwidth"
    >
      <thead>
        <tr>
          <th className="tableNr">
            #
          </th>
          <th className="tableNumber">
            {{ $t('message.number') }}
          </th>
          <th className="tableInfo">
            {{ $t('message.cows') }}
          </th>
          <th className="tableInfo">
            {{ $t('message.bulls') }}
          </th>
          <th className="tablePoints">
            {{ $t('message.points') }}
          </th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="item in game"
          :key="item.nr"
        >
          <td>{{ item.nr }}</td>
          <td>{{ item.number }}</td>
          <td>{{ item.spelled }}</td>
          <td>{{ item.inPlace }}</td>
          <td>{{ item.points }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
  import { mapState } from 'vuex';

  export default {
    name: 'Results',
    computed: {
      ...mapState({
        game: state => state.game,
      }),
    },
  }
</script>

<style scoped>

</style>
