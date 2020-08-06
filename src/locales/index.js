import Vue from 'vue';
import VueI18n from 'vue-i18n';
import en from './en';
import ru from './ru';
import pl from './pl';
import lt from './lt';

Vue.use(VueI18n);

const messages = {
  en,
  ru,
  pl,
  lt,
};

export default new VueI18n({
  locale: 'en',
  messages,
});
