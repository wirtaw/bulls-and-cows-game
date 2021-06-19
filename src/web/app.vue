<template>
  <router-view />
</template>

<script>
    import Vue from 'vue';
    import {router} from './_router.js';
    import {store} from './_store.js';
    import {i18n} from './_locales.js';
   
    export default Vue.extend({ 
        store: store,
        router: router,
        i18n: i18n
    });    
</script>

<style lang="scss">
  .vueapp {
    display: flex;
    min-height: 100vh;
    flex-direction: column;
  }
</style>