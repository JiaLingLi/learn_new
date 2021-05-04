<template>
  <div class="docker">
    <span class="docker__item">
     <div class="iconfont">&#xe6f1;</div> 首页</span>
    <span class="docker__item">购物车</span>
    <span class="docker__item">订单</span>
    <span class="docker__item">我的</span>
  </div>
</template>

<style lang="scss">
  .docker{
    display: flex;
    position: absolute;
    box-sizing: border-box;
    padding: 0 .18rem;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 0.49rem;
    border-top: 1px solid #f1f1f1;
    text-align: center;
  }
  .docker__item{
    flex:1;
  }
</style>
