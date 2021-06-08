<template>
  <div class="tab-bar-item" @click="itemClick">
    <div v-if="!isActive"><slot name="item-img"></slot></div>
    <div v-else><slot name="item-img-active" ></slot></div>
    <div :style="activeStyle"><slot name="item-name"></slot></div>
  </div>
</template>

<script>
  export default{
    name:"TabBarItem",
    props:{
      // 用来接收跳转路径
      path:String,
      // 设置字体颜色,默认为红色
      activeColor:{
        type:String,
        default:'red'
      }
    },
    data(){
      return{
        // isActive:true,
      }
    },
    computed:{
      // 判断点击了哪个板块，将isActive改为true
      isActive(){
        return this.$route.path.indexOf(this.path) > -1
      },
      activeStyle(){
        return this.isActive ? {color:this.activeColor} : {}
      }
    },
    methods:{
      itemClick(){
        console.log('点击')
        this.$router.replace(this.path)
      }
    }
  }
</script>

<style scoped>
  .tab-bar-item {
    flex: 1;
    text-align: center;
    height: 49px;
    font-size: 14px;
  }

  .tab-bar-item img {
    width: 26px;
    height: 26px;
    margin-top: 3px;
    vertical-align: middle;
  }

</style>
