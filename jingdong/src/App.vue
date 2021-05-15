<template>
  <div class="wrapper">
    <div class="position">
      <span class="iconfont position__icon">&#xe619;</span>
      北京理工大学国防科技园2号楼10层97578657867862eqweqweqew
      <span class="iconfont position__notice">&#xe601;</span>
    </div>
    <div class="search">
      <span class="iconfont">&#xe602;</span>
      山姆会员商店优惠商品
    </div>
    <div class="banner">
      <img class="banner__img" src="./assets/salesPromotion.jpg" alt="年中大促">
    </div>
    <div class="icons">
      <div class="icons__item">
        <img class="icons__item__img" src="./assets/supermarket.png" alt="">
        <p class="icons__item__desc">超市</p>
      </div>
      <div class="icons__item">
        <img class="icons__item__img" src="./assets/Vegetable__market.png" alt="">
        <p class="icons__item__desc">菜场</p>
      </div>
      <div class="icons__item">
        <img class="icons__item__img" src="./assets/fruit.png" alt="">
        <p class="icons__item__desc">水果</p>
      </div>
      <div class="icons__item">
        <img class="icons__item__img" src="./assets/flowers.png" alt="">
        <p class="icons__item__desc">鲜花</p>
      </div>
      <div class="icons__item">
        <img class="icons__item__img" src="./assets/medicine.png" alt="">
        <p class="icons__item__desc">医药</p>
      </div>
      <div class="icons__item">
        <img class="icons__item__img" src="./assets/household.png" alt="">
        <p class="icons__item__desc">家居</p>
      </div>
      <div class="icons__item">
        <img class="icons__item__img" src="./assets/cake.png" alt="">
        <p class="icons__item__desc">蛋糕</p>
      </div>
      <div class="icons__item">
        <img class="icons__item__img" src="./assets/sign.png" alt="">
        <p class="icons__item__desc">签到</p>
      </div>
      <div class="icons__item">
        <img class="icons__item__img" src="./assets/brand.png" alt="">
        <p class="icons__item__desc">大牌</p>
      </div>
      <div class="icons__item">
        <img class="icons__item__img" src="./assets/red__packer.png" alt="">
        <p class="icons__item__desc">红包</p>
      </div>
    </div>
     <div class="gap"></div>
  </div>
  <div class="docker">
    <div class="docker__item docker__item--active">
      <div class="iconfont">&#xe6f1;</div>
      <div class="docker_title">首页</div>
    </div>
    <div class="docker__item">
      <div class="iconfont">&#xe600;</div>
      <div class="docker_title">购物车</div>
    </div>
    <div class="docker__item">
      <div class="iconfont">&#xe667;</div>
      <div class="docker_title">订单</div>
    </div>
    <div class="docker__item">
      <div class="iconfont">&#xe65f;</div>
      <div class="docker_title">我的</div>
    </div>
  </div>
</template>

<style lang="scss">
  @import './style/viriables.scss';
  @import './style/mixins.scss';

  .wrapper {
    position: absolute;
    left: 0;
    top: 0;
    bottom: .5rem;
    right: 0;
    padding: 0 .18rem;
  }

  .position {
    white-space: .16rem;
    position: relative;
    padding: .16rem .24rem .16rem 0;
    line-height: .22rem;
    font-size: .16rem;
    color: $content-fontcolor;
    @include ellipses;

    .position__icon {
      position: relative;
      top: .015rem;
      font-size: .2rem;
    }

    .position__notice {
      position: absolute;
      right: 0;
      top: 0.17rem;
      font-size: .2rem;
    }
  }

  .search {
    margin-bottom: .12rem;
    line-height: .32rem;
    ;
    background-color: #F5F5F5;
    color: #B7B7B7;
    border-radius: .16rem;
    font-size: .14rem;

    .iconfont {
      padding: 0 .12rem 0 .16rem;
      display: inline-block;
      font-size: .16rem;
    }
  }

  .banner {
    height: 0;
    overflow: hidden;
    padding-bottom: 35.6%;

    &__img {
      width: 100%;
      border-radius: .06rem;
    }
  }

  .icons {
    margin-top: .16rem;
    display: flex;
    flex-wrap: wrap;
    &__item {
      width: 20%;

      &__img {
        display: block;
        width: .4rem;
        height: .4rem;
        margin: 0 auto;
      }

      &__desc {
        text-align: center;
        margin: .06rem 0 .16rem 0 ;
        color: $content-fontcolor;
      }
    }
  }
  .gap{
    height: .1rem;
    background-color:$content-bgColor;
    margin: 0 -.18rem;
  }
  .docker {
    display: flex;
    position: absolute;
    box-sizing: border-box;
    padding: 0 .18rem;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 0.49rem;
    border-top: .01rem solid $content-bgColor;
    text-align: center;
    color: $content-fontcolor;

    &__item {
      flex: 1;
      text-align: center;

      .iconfont {
        margin: .07rem 0 .02rem 0;
        font-size: .18rem;
      }

      &--active {
        color: #1FA4FC;
      }
    }

    &_title {
      font-size: .2rem;
      transform: scale(.5, .5);
      transform-origin: center top;
    }
  }

</style>
