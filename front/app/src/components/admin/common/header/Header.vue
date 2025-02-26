<template>
    <div class="header-wrapper">
        <header>
            <router-link to="/admin/home">{{
                $t('admin.home.header.home')
            }}</router-link>
            <button>Add Page</button>

            <DIcon theme="fluent" name="home" :size="50" />
        </header>

        <ChangeLang />
    </div>

    <ChangeTheme />
</template>

<script>
import './header.scss';
import ChangeLang from '../../../common/ChangeLang.vue';
import ChangeTheme from '../ChangeTheme.vue';
export default {
    name: 'AdminHeader',
    components: {
        ChangeLang,
        ChangeTheme,
    },
};
</script>
