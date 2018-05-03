<template>
  <div class="blog">
    <header>
      <div class="head-top">
        <div><img src="./images/home.svg" width="50" height="50"></div>
        <h1>zerotop.top</h1>
      </div>
      <div class="head-nav">
        <div>博客</div>
        <div>设计</div>
        <div>时间轴</div>
        <div>留言</div>
      </div>
    </header>
    <section class="blog-con margin" v-for="(items,index) in blogs" :key="index">
      <div class="content margin">
        <img :src=items.blogImg />
        <div class="content-desc">
          <h3>{{items.description}}</h3>
          <h3>2018/5/2</h3>
        </div>
      </div>
    </section>
  </div>
</template>

<script type="text/ecmascript-6">
export default{
  data () {
    return {
      blogs: [
        {
          blogImg: 'https://images.unsplash.com/photo-1522205940279-d75807ebcd91?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=6e84041cbb7404fb7fafc42bec0f4a91&auto=format&fit=crop&w=500&q=60',
          description: '欢迎来到zerotop'
        },
        {
          blogImg: 'https://images.unsplash.com/photo-1507550442364-c0a42bd688e0?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=92c60a48a7b047b3a2b603cf6227ad2d&auto=format&fit=crop&w=500&q=60',
          description: '欢迎来到zerotop'
        },
        {
          blogImg: 'https://images.unsplash.com/photo-1522205445560-4630427027e3?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=1d6dff78cad1ece4d14fbf6d50ac3325&auto=format&fit=crop&w=500&q=60',
          description: '欢迎来到zerotop'
        }
      ]

    }
  }
}
</script>

<style scoped lang="scss">
  @import "../../style/mixin";

  .blog {
    border-bottom: 6px solid #87CEFA;
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
      padding-bottom: 2.5rem;
      text-align: center;
      .head-top{
        @include cl;
        display: flex;
        flex-direction: row;
        h1{
          margin-left: 2rem;
        }
      }
      .head-nav{
        margin-top: 1.5rem;
        width: 20rem;
        @include cl;
        display: flex;
        justify-content: space-around;
      }
    }
    .blog-con{
      @include wh(42%,24rem);
      border: 1px solid #ccc;
      border-radius: 5px;
      margin-top: 2rem;
      box-shadow: 3px 3px 3px #ddd;
      .content{
        padding: 2rem;
        @include wh(100%,22rem);
        img{
          @include wh(100%,100%);
        }
        .content-desc{
          margin-top: 1rem;
          display: flex;
          justify-content: space-between;
        }
      }
    }
  }
</style>
