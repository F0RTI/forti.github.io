<template>
  <div>
    <Header/>
    <SideMenu/>
  </div>
</template>

<script>
import Header from '../../components/admin/common/header/Header.vue'
import SideMenu from '../../components/admin/common/SideMenu.vue'

export default {
  name: 'AdminHomePage',
  components:{
    SideMenu, Header
  }
}

</script>