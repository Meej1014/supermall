<template>
  <div id="app">
    <router-view></router-view>
    <TabbarMain></TabbarMain>
  </div>
</template>

<script>
  import TabbarMain from './components/tabbar/tabbarMain.vue'

  // 使用组件时,大写的组件可以用'-'相连,不会报错
  export default {
    name: 'App',
    components: {
      TabbarMain
    }
  }
</script>

<style>
  @import url("./assets/base.css");
</style>
