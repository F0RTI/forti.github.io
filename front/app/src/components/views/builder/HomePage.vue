<template>
    <Header />
    <h1>{{ $t('user.header.home') }}</h1>
</template>

<script>
import Header from '../../views/builder/Header.vue';

export default {
    name: 'HomePage',
    components: {
        Header,
    },
};
</script>

<style scoped>
h3 {
    margin: 40px 0 0;
}
ul {
    list-style-type: none;
    padding: 0;
}
li {
    display: inline-block;
    margin: 0 10px;
}
a {
    color: #42b983;
}
</style>
