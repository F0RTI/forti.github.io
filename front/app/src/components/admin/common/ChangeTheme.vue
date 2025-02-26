<template>
    <div style="text-align: left; margin-top: 20px;">
        Current: {{ currentTheme }}
        <br>
        <button @click="changeThemeStyle('dark')">dark</button>
        <button @click="changeThemeStyle('default')">default</button>
    </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
    name: 'ChangeTheme',
    computed: {
        ...mapGetters(['theme']),
        currentTheme() {
            return this.theme;
        }
    },
    methods: {
        ...mapActions(['changeTheme']),
        changeThemeStyle(theme) {
            this.changeTheme(theme);
        }
    }
}
</script>