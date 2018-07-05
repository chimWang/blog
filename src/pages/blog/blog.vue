<template>
  <div class="blog">
    <header>
      <div class="head-top">
        <router-link to="/" tag="div"><img src="./images/home.svg" width="50" height="50"></router-link>
        <h1>zerotop.top</h1>
      </div>
      <div class="head-nav">
        <router-link tag="div" to="/blog/blogList">博客</router-link>
        <router-link tag="div" to="/blog/design">设计</router-link>
        <div>时间轴</div>
        <div>留言</div>
      </div>
    </header>
    <router-view/>
  </div>
</template>

<script type="text/ecmascript-6">
export default{
}
</script>

<style scoped lang="scss">
  @import "../../style/mixin";
  @media only screen and (max-width: 420px) {
    #app{
      width: 100%;
      height: 100%;
      .head-nav {
        justify-content: center;
        width: 20rem;
      }
    }
  }
  .blog {
    width: 100%;
    height: 100%;
    header {
      display: flex;
      flex-direction: column;
      justify-content: flex-end;
      width: 100%;
      height: 15rem;
      border-radius: 50%;
      margin-top: -7.5rem;
      background-color: #ccc;
      padding-bottom: 2.8rem;
      text-align: center;
      .head-top {
        @include cl;
        display: flex;
        flex-direction: row;
        h1 {
          margin-left: 1rem;
        }
      }
      .head-nav {
        margin-top: 2.4rem;
        width: 23rem;
        @include cl;
        display: flex;
        justify-content: space-around;
        div{
          cursor: pointer;
          padding: 5px 5px 5px 35px;
          &.router-link-active{
            font-size: 1.1rem;
            background: url("./images/choosed.svg") no-repeat -8px;
            background-size: 70% 70%;
          }
        }
      }
    }
  }
</style>
