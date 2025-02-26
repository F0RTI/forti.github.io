<template>
    <div>
        <button @click="changeLanguage('ru')">RU</button>
        <button @click="changeLanguage('en')">EN</button>
    </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
    name: 'ChangeLang',
    props: {
        styleType: {
            type: String,
            default: 'buttons',
        },
    },
    methods: {
        ...mapActions(['changeLang']),
        changeLanguage(lang) {
            this.changeLang(lang);
        },
    },
};
</script>
