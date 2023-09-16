import { defineStore } from "pinia";
import { useI18n } from "vue-i18n";

export const catalogStore = defineStore('Catalog Store', {
    state:() => ({
        catalogData: useI18n({useScope: 'global'}).messages[useI18n({useScope: 'global'}).locale],
    })
})