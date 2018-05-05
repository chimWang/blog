<template>
  <div>
    <div class="article margin">
      <h2>{{article.title}}</h2>
      <time>{{article.date}}</time>
      <img :src="article.blogImg"/>
      <p class="article-content">{{article.content}}</p>
      <div class="other">
        <img src="./images/like.svg"/>
        <img src="./images/share.svg"/>
      </div>
    </div>
    <div class="comment">
      <header>
        <p>评论区</p>
        <p>15条</p>
      </header>
      <section v-for="(item,index) in comment" :key="index">
        <div class="info">
          <h3>{{item.name}}<img src="./images/comment.svg"/></h3>
          <time>{{item.date}}</time>
        </div>
        <div class="comment-content">
          <p>{{item.content}}</p>
        </div>
      </section>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
export default{
  data () {
    return {
      article: JSON.parse(this.$route.query.article),
      comment: [
        {
          name: 'wcy',
          date: '2018/5/5',
          content: 'okokok'
        },
        {
          name: 'chimWang',
          date: '2018/5/5',
          content: '不错不错不错不错'
        },
        {
          name: 'gxy',
          date: '2018/5/5',
          content: '不错不错不错不错'
        }
      ]
    }
  },
  methods: {}
}
</script>

<style scoped lang="scss">
  @import "../../../../style/mixin";

  .article {
    @include font(1rem, 1.8rem);
    padding: 2rem 3rem;
    border: 2px solid #ccc;
    margin-top: 2rem;
    text-align: center;
    width: 60%;
    time{
      margin:1rem 0;
    }
    img {
      margin: 1rem 0 1rem 0;
      @include wh(80%, 300px);
    }
    .article-content {
      text-align: left;
    }
    .other {
      margin-top: 1rem;
      display: flex;
      justify-content: center;
      img {
        background-color: linen;
        @include wh(40px, 40px);
        border-radius: 50%;
        margin-right: 1rem;
      }
    }
  }
  .comment{
    margin: 1rem auto;
    width: 60%;
    border: 2px solid #ccc;
    header{
      display: flex;
      justify-content: space-between;
      padding: 8px;
      border-bottom: 1px solid #ccc;
    }
    section{
      padding: 2rem;
      border-bottom: 1px solid #ccc;
      .info{
        display: flex;
        justify-content: space-between;
        img{
          margin-left: 5px;
          width: 20px;
          height: 100%;
        }
      }
      .comment-content{
        margin-top: 1rem;
      }
    }
  }
</style>
