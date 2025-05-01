<template>
    <div>
        <Header />
        <SideMenu />
    </div>
</template>

<script>
import Header from '../../admin/common/header/Header.vue';
import SideMenu from '../../admin/common/SideMenu.vue';

export default {
    name: 'AdminHomePage',
    components: {
        SideMenu,
        Header,
    },
};
</script>
