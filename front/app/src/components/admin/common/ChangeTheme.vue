<template>
    <div style="text-align: left; margin-top: 20px">
        Current: {{ currentTheme }}
        <br />
        <button @click="changeThemeStyle('dark')">dark</button>
        <button @click="changeThemeStyle('default')">default</button>
    </div>
</template>

<script>
import { defineComponent } from 'vue';
import { mapActions, mapGetters } from 'vuex';
// import { useStore } from 'vuex';

export default defineComponent({
    name: 'ChangeTheme',
    computed: {
        ...mapGetters(['theme']),
        currentTheme() {
            return this.theme;
        },
    },
    methods: {
        ...mapActions(['changeTheme']),
        changeThemeStyle(theme) {
            this.changeTheme(theme);
        },
    },
});
</script>
