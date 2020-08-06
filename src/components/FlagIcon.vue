<template>
  <div>
    <country-flag
      :country="name"
      size="normal"
    />
  </div>
</template>

<script>
import CountryFlag from 'vue-country-flag'
export default {
  name: 'FlagIcon',
  components: {
    CountryFlag
  },
  props: {
    name: {
      type: String,
      default: 'en'
    }
  },
}
</script>

<style scoped>

</style>
