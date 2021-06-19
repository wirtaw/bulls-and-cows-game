import Vue from "vue";
    
import VueRouter from 'vue-router';

Vue.use(VueRouter);

import home    from './components/home.vue';
import about   from './components/about.vue';
import profile from './components/profile.vue';
import rules from './components/rules.vue';
import game from './components/game.vue';

const routes = [
    { path: '/'       , component: home    },
    { path: '/profile', component: profile },
    { path: '/about'  , component: about   },
    { path: '/rules'  , component: rules   },
    { path: '/game'  , component: game   }
]

export const router = new VueRouter({
    routes: routes
})