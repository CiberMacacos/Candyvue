import { createI18n } from "vue-i18n";
import message from "@intlify/unplugin-vue-i18n/messages";


export const i18n = createI18n({
    legacy: false,
    locale: 'en',
    fallbackLocale: 'es',
    availableLocales: ['es', 'en'],
    messages:
})