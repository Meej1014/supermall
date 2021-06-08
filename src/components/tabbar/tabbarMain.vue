<template>
  <TabBar>
    <!-- 使用@替换../../,须在webpack.base.conf.js里设置alias -->
    <tab-bar-item path="/home" activeColor="blue">
      <img src="@/assets/img/tabbar/home.png" alt="" slot="item-img">
      <img src="@/assets/img/tabbar/homeActive.png" alt="" slot="item-img-active">
      <div slot="item-name">首页</div>
    </tab-bar-item>
    <tab-bar-item path="/category">
      <img src="@/assets/img/tabbar/businessCollege.png" alt="" slot="item-img">
      <img src="@/assets/img/tabbar/businessCollegeActive.png" alt="" slot="item-img-active">
      <div slot="item-name">分类</div>
    </tab-bar-item>
    <tab-bar-item path="/cart">
      <img src="@/assets/img/tabbar/ranking.png" alt="" slot="item-img">
      <img src="@/assets/img/tabbar/rankingActive.png" alt="" slot="item-img-active">
      <div slot="item-name">购物车</div>
    </tab-bar-item>
    <tab-bar-item path="/profile">
      <img src="@/assets/img/tabbar/mine.png" alt="" slot="item-img">
      <img src="@/assets/img/tabbar/mineActive.png" alt="" slot="item-img-active">
      <div slot="item-name">我的</div>
    </tab-bar-item>
  </TabBar>
</template>

<script>
  import TabBar from './TabBar.vue'
  import TabBarItem from './TabBarItem.vue'

  export default {
    name: 'TabbarMain',
    components: {
      TabBar,
      TabBarItem
    }
  }
</script>

<style>
</style>
