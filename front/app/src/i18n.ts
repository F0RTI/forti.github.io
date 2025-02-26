import { createI18n } from 'vue-i18n';
import ru from '../public/lang/ru.json';
import en from '../public/lang/en.json';

const messages = {
    en: en,
    ru: ru,
};

const i18n = createI18n({
    locale: 'en',
    fallbackLocale: 'en',
    messages,
});

export default i18n;
