<template>
    <ul class="header">
        <li>
            <RouterLink to="/">{{ $t('user.header.home') }}</RouterLink>
        </li>
        <li>
            <RouterLink to="/login">{{ $t('user.header.login') }}</RouterLink>
        </li>
    </ul>
</template>

<script>
export default {
    name: 'Header',
};
</script>

<style scoped>
.header {
    list-style-type: none;
    padding: 20px 0;
    background: #414141;
}

.header li {
    display: inline-block;
    margin: 0 10px;
}

.header a {
    color: #42b983;
}
</style>
