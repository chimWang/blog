<template>
  <div class="home-page">
    <div class="page-left">
      <img src="./images/main.jpg"/>
    </div>
    <div class="page-right">
      <div class="title"><img src="./images/zerotop.png"/></div>
      <div><h4>Welcome to our blog</h4></div>
      <div class="page-project">
        <section>
          <router-link tag="div" to="/blog/blogList" class="blog-icon"></router-link>
          <p>主页</p>
        </section>
        <section>
          <router-link tag="div" to="/blog" class="design-icon"></router-link>
          <p>设计</p>
        </section>
        <section>
          <router-link tag="div" to="/blog" class="timeline-icon"></router-link>
          <p>时间轴</p>
        </section>
        <section>
          <router-link tag="div" to="/blog" class="message-icon"></router-link>
          <p>留言</p>
        </section>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
export default{
}
</script>

<style scoped lang="scss">
  @import "../../style/mixin";
  $bgImg: blog, design, timeline, message;

  @media only screen and (max-width: 420px) {
    #app{
      width: 100%;
      height: 100%;
      .home-page {
        @include wh(100%, 90%);
        @include center;
        flex-direction: column;
        justify-content: space-between;
        .page-right{
          align-items: center;
        }
        .page-project {
          width: 100%;
          justify-content: space-between;
        }
      }
    }

  }

  .home-page {
    @include wh(85%, 60%);
    @include center;
    display: flex;
    .page-left {
      flex-grow: 1;
      img {
        @include wh(100%, 100%);
      }
    }
    .page-right {
      flex-grow: 1;
      @include sc(1.8rem, #C28E90);
      display: flex;
      flex-direction: column;
      align-items: flex-end;
      .title {
        @include wh(80%, 30%);
        margin: 1rem 0 2rem 0;
        img {
          @include wh(100%, 100%);
        }
      }
      .page-project {
        width: 85%;
        margin-top: 3rem;
        display: flex;
        justify-content: space-between;
        section {
          flex-grow: 1;
          cursor: pointer;
          text-align: center;
          @each $bg in $bgImg {
            .#{$bg}-icon {
              @include wh(100%, 4rem);
              @include bis('./images/#{$bg}.svg');
              &:hover {
                @include bis('./images/#{$bg}1.svg');
                transform: scale(1.2);
              }
            }
          }
          p {
            @include sc(1rem, #555);
            margin-top: 3px;
          }
        }
      }
    }

  }
</style>
