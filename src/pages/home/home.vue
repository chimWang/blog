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
          <router-link tag="div" to="/blog" class="blog-icon"></router-link>
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

</script>

<style scoped lang="scss">
  @import "../../style/mixin";
  $bgImg: blog, design, timeline, message;
  @keyframes titleMove {
    0% {
      transform: scale(1);
    }
    35% {
      transform: scale(.8)
    }
    70% {
      transform: scale(1.2);
      color: #555555
    }
    100% {
      transform: scale(1)
    }
  }

  @media only screen and (max-width: 420px) {
    #app{
      width: 100%;
      height: 100%;
      .home-page {
        @include wh(95%, 90%);
        @include center;
        flex-direction: column;
        .page-project {
          section {
            margin-left: 1rem;
          }
        }
      }
    }
  }

  .home-page {
    @include wh(85%, 60%);
    @include center;
    display: flex;
    .page-left {
      img {
        @include wh(100%, 100%);
      }
    }
    .page-right {
      @include sc(1.8rem, #C28E90);
      display: flex;
      flex-direction: column;
      align-items: flex-end;
      h4:hover {
        animation: titleMove 2s ease-in-out infinite;
      }
      .title {
        @include wh(80%, 30%);
        margin: 1rem 0 2rem 0;
        img {
          @include wh(100%, 100%);
        }
      }
      .page-project {
        width: 100%;
        margin-top: 3rem;
        display: flex;
        flex-direction: row;
        justify-content: flex-end;
        section {
          cursor: pointer;
          text-align: center;
          margin-left: 3rem;
          @each $bg in $bgImg {
            .#{$bg}-icon {
              @include wh(75px, 80px);
              @include bis('./images/#{$bg}.svg');
              &:hover {
                @include bis('./images/#{$bg}1.svg');
                transform: scale(1.2);
              }
            }
          }
          p {
            @include sc(1rem, #555);
          }
        }
      }
    }

  }
</style>
