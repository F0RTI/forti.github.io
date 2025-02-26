<template>
    <div class="header-wrapper">
        <header>
            <router-link to="/admin/home">{{ $t('admin.home.header.home') }}</router-link>
            <button>Add Page</button>
        </header>
        <ChangeLang/>
    </div>
    <DIcon/>
    <ChangeTheme/>
</template>

<script>
import './header.scss';
// import DIcon from 'd-icon/src/index.js';
import ChangeLang from '../../../common/ChangeLang.vue';
import ChangeTheme from '../ChangeTheme.vue';

    export default {
        name: 'AdminHeader',
        components: {
            ChangeLang,
            ChangeTheme,
            // DIcon
        }
    }
</script>