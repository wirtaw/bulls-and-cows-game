<template>
  <span :class="klass">&nbsp;</span>
</template>

<script>
export default {
  name: 'FlagIcon',
  props: {
    name: {
      type: String,
      default: 'gb'
    }
  },
  computed: {
    klass () {
      const result = {'flag': true, 'm-2': true, 'p-0': true};
      result[`flag-${this.name}`] = true;
      return result;
    }
  }
}
</script>

<style lang="scss" scoped>
  .flag {
    width: 16px;
    height: 11px;
    display: inline-block;
    &-ru {
      background-image: url('../../res/ru.png');
      background-repeat: no-repeat;
      width: 16px;
      height: 11px;
      margin: 0;
      padding: 0;
    }
    &-pl {
      background-image: url('../../res/pl.png');
      background-repeat: no-repeat;
      width: 16px;
      height: 11px;
      margin: 0;
      padding: 0;
    }
    &-lt {
      background-image: url('../../res/lt.png');
      background-repeat: no-repeat;
      width: 16px;
      height: 11px;
      margin: 0;
      padding: 0;
    }
    &-gb {
      background-image: url('../../res/gb.png');
      background-repeat: no-repeat;
      width: 16px;
      height: 11px;
      margin: 0;
      padding: 0;
    }
  }
</style>
