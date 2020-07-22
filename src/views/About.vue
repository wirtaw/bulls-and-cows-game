<template>
  <div class="container">
    <h1 class="title">
      About Your games
    </h1>
    <h2 class="subtitle" />
    <div
      v-for="(table,index,value) in history"
      :key="value"
      class="columns"
    >
      <div class="column">
        <h3 class="subtitle">
          Game {{ value + 1 }}
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
                number
              </th>
              <th className="tableInfo">
                cows
              </th>
              <th className="tableInfo">
                bulls
              </th>
              <th className="tablePoints">
                points
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
