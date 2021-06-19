import Vue from 'vue';
import VueI18n from 'vue-i18n';
import en from './locales/en';
import ru from './locales/ru';
import pl from './locales/pl';
import lt from './locales/lt';

Vue.use(VueI18n);

const messages = {
  en,
  ru,
  pl,
  lt,
};

export const i18n = new VueI18n({
  locale: 'en',
  messages,
});
