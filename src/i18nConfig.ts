import global_en from './locale/en/global.json';
import global_pt from './locale/pt/global.json';
import i18next from 'i18next';
import {initReactI18next} from 'react-i18next';

const resources = {
    en: {
        global: global_en,
    },
    pt: {
        global: global_pt,
    }
};

i18next
.use(initReactI18next)
.init({
    interpolation: { escapeValue: false },
    lng: navigator.language == 'pt-BR' ? 'pt' : 'en',
    resources
})

export type TSupportedLanguages = keyof typeof resources;
export const SupportedLanguages = Object.keys(
  resources,
) as (keyof typeof resources)[]; // I turn object keys to an array

export default i18next;