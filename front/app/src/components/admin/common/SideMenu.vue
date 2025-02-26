<template>
    <aside>
        <ul>
            <li>
                <router-link to="/admin/pages">{{
                    $t('admin.home.sidemenu.pages')
                }}</router-link>
            </li>
            <li>
                <router-link to="/admin/routes">{{
                    $t('admin.home.sidemenu.routes')
                }}</router-link>
            </li>
        </ul>
    </aside>
</template>

<script>
export default {
    name: 'AdminSideMenu',
};
</script>
