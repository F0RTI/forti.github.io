<template>
    <Header />
    <h1>{{ $t('user.header.login') }}</h1>
</template>

<script>
import Header from '../../views/builder/Header.vue';

export default {
    name: 'LoginPage',
    components: {
        Header,
    },
};
</script>
