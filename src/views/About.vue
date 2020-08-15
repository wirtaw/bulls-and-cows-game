<template>
  <div class="container">
    <h1 class="title is-capitalized">
      {{ $t('message.yourGames') }}
    </h1>
    <img
      v-if="$auth && $auth.user && $auth.user.picture"
      style="width:200px;height:200px;"
      :src="$auth.user.picture"
    >
    <h2
      v-if="$auth && $auth.user && $auth.user.name"
      class="subtitle"
    >
      {{ $auth.user.name }}
    </h2>
    <div
      v-for="(table,index,value) in history"
      :key="value"
      class="columns"
    >
      <div class="column">
        <h3 class="subtitle is-capitalized">
          {{ $t('message.game') }} {{ value + 1 }}
        </h3>
        <table
          v-if="table && table.length > 0"
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
              v-for="item in table"
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
    </div>
  </div>
</template>

<script>
  import { mapState } from 'vuex';

  export default {
    name: 'About',
    computed: {
      ...mapState({
        history: state => state.history,
      }),
    },
  }
</script>
