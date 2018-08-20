<template>
  <div class="design margin">
    <header class="margin">
      <div>
        <div><h5>设计作品</h5></div>
        <div><h1>Crescent Gu</h1></div>
      </div>
      <div>
        <img src="./images/icon.jpg" width="100" height="100" class="icon"/>
      </div>
    </header>
    <nav>
      <router-link to="" tag="div">个人</router-link>
      <router-link to="" tag="div">涂音小程序</router-link>
      <router-link to="" tag="div">云智教育app</router-link>
      <router-link to="" tag="div">博客</router-link>
    </nav>
    <div class="all-works">
      <div class="left">
        <div v-for="(items,index) in canvas.slice(0,3)" class="works"
             :style="{backgroundColor:items.isSelected?bgColor:'#fff'}"
        >
          <div>
            <canvas :id="items.id" width="150" height="150"></canvas>
            <img :src="items.iconImg" width="80" height="80" class="center-bg icon-bg"
                 @mouseover="bgChange(items)" @mouseout='offChange(items)'
                 @click="showImg(items)"
            />
          </div>
          <img src="./images/like.svg" class="right-top" width="20" height="20"/>
          <span class="left-bottom">{{items.name}}</span>
          <span class="right-bottom">{{items.time}}</span>
          <span class="animated jello font-change" :style="{display:items.isSelected?'block':'none'}">APP</span>
        </div>
      </div>
      <div class="center">
        <div v-for="(items,index) in canvas.slice(3,6)" class="works"
             :style="{backgroundColor:items.isSelected?bgColor:'#fff'}">
          <div>
            <canvas :id="items.id" width="150" height="150"></canvas>
            <img :src="items.iconImg" width="80" height="80" class="center-bg icon-bg"
                 @mouseover="bgChange(items)" @mouseout='offChange(items)'
                 @click="showImg(items)"
            />
          </div>
          <img src="./images/like.svg" class="right-top" width="20" height="20"/>
          <span class="left-bottom">{{items.name}}</span>
          <span class="right-bottom">{{items.time}}</span>
          <span class="animated jello font-change" :style="{display:items.isSelected?'block':'none'}">Dalian</span>
        </div>
      </div>
      <div class="right">
        <div v-for="(items,index) in canvas.slice(6,9)" class="works"
             :style="{backgroundColor:items.isSelected?bgColor:'#fff'}">
          <div>
            <canvas :id="items.id" width="150" height="150"></canvas>
            <img :src="items.iconImg" width="80" height="80" class="center-bg icon-bg"
                 @mouseover="bgChange(items)" @mouseout='offChange(items)'
                 @click="showImg(items)"
            />
          </div>
          <img src="./images/like.svg" class="right-top" width="20" height="20"/>
          <span class="left-bottom">{{items.name}}</span>
          <span class="right-bottom">{{items.time}}</span>
          <span class="animated jello font-change" :style="{display:items.isSelected?'block':'none'}">BLOG</span>
        </div>
      </div>
    </div>
    <div v-show="isShowImg">
      <img src="./images/close.svg" width="50" height="50" @click="isShowImg=false" class="close-img"/>
      <div class="mask"></div>
      <div class="show-img"><img :src="nowImg"/></div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import { setLinePoints } from './../../../../api/irregularCircle'
  import { drawCircle } from './../../../../api/irregularCircle'
  export default{
    data(){
      return {
        nowImg: '',
        isShowImg: false,
        bgColor: '',
        canvas: [
          {
            name: '涂音',
            time: '2018/6/14',
            id: 'canvas1',
            rgb: 'rgb(252,206,1)',
            isSelected: false,
            iconImg: 'https://images.unsplash.com/photo-1496105463139-c6c6f14dedf7?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=d8ed34974e1326b9ffdb0c5b1d4a2774&auto=format&fit=crop&w=500&q=60'
          },
          {
            name: '博客',
            time: '2018/6/14',
            id: 'canvas2',
            rgb: 'rgb(252,103,25)',
            isSelected: false,
            iconImg: 'https://images.unsplash.com/photo-1511318000277-c414d5918162?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=4421da5f4eec8026649704e07050a409&auto=format&fit=crop&w=500&q=60'
          },
          {
            name: '博客',
            time: '2018/6/14',
            id: 'canvas3',
            rgb: 'rgb(167,74,200)',
            isSelected: false,
            iconImg: 'https://images.unsplash.com/photo-1523937986058-3643cb987697?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=caf1a1b9ca7aa6e1ccd37d1079319615&auto=format&fit=crop&w=500&q=60'
          },
          {
            name: '涂音',
            time: '2018/6/14',
            id: 'canvas4',
            rgb: 'rgb(84,68,174)',
            isSelected: false,
            iconImg: 'https://images.unsplash.com/photo-1499365094259-713ae26508c5?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=26d4766855746c603e3d42aaec633144&auto=format&fit=crop&w=500&q=60'
          },
          {
            name: '涂音',
            time: '2018/6/14',
            id: 'canvas5',
            rgb: 'rgb(20,228,218)',
            isSelected: false,
            iconImg: 'https://images.unsplash.com/photo-1526792903869-f3035bfc7f29?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=e8c12112ab6f3ad5007ccf62667236d4&auto=format&fit=crop&w=500&q=60'
          },
          {
            name: '博客',
            time: '2018/6/14',
            id: 'canvas6',
            rgb: 'rgb(252,206,1)',
            isSelected: false,
            iconImg: 'https://images.unsplash.com/photo-1527166124503-10400af9d69d?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=8230f9617a063c1e47c098b36f74e641&auto=format&fit=crop&w=500&q=60'
          },
          {
            name: '博客',
            time: '2018/6/14',
            id: 'canvas7',
            rgb: 'rgb(84,68,174)',
            isSelected: false,
            iconImg: 'https://images.unsplash.com/photo-1526423955980-3d394799999e?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=e4541f7857f22c02e1795f056fdfb0a0&auto=format&fit=crop&w=500&q=60'
          },
          {
            name: '涂音',
            time: '2018/6/14',
            id: 'canvas8',
            rgb: 'rgb(20,228,218)',
            isSelected: false,
            iconImg: 'https://images.unsplash.com/photo-1507160634214-89e0baae2457?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=9df168bddae101e185e697926806634f&auto=format&fit=crop&w=500&q=60'
          },
          {
            name: '涂音',
            time: '2018/6/14',
            id: 'canvas9',
            rgb: 'rgb(252,206,1)',
            isSelected: false,
            iconImg: 'https://images.unsplash.com/photo-1486068338746-bc8c63a2d7ea?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=348afc4c4ac324a022630fbce9204348&auto=format&fit=crop&w=500&q=60'
          },
        ]
      }
    },
    mounted(){
      this.canvas.forEach((item) => {
        var irregularCircle = document.getElementById(item.id), ctx = irregularCircle.getContext("2d");
        drawCircle(ctx, 75, 75, 65, 75, 20, item.rgb)
      })
    },
    methods: {
      bgChange(item){
        this.bgColor = item.rgb
        item.isSelected = true

      },
      offChange(item){
        item.isSelected = false
      },
      showImg(item){
        this.nowImg = item.iconImg
        this.isShowImg = true
      }
    }
  }
</script>

<style scoped lang="scss">
  @import "../../../../style/mixin";

  .design {
    margin-top: 3rem;
    width: 60%;
    header {
      width: 100%;
      display: flex;
      justify-content: space-between;
      font-size: x-large;
      margin-bottom: 1.5rem;
      .icon {
        border-radius: 50%;
      }
    }
    nav div {
      display: inline-block;
      margin-right: 3rem;
    }
    .all-works {
      margin-top: 2rem;
      width: 100%;
      padding: 5px;
      background-color: #ddd;
      display: flex;
      div {
        flex: 1;
        .works {
          .icon-bg {
            border-radius: 50%;
            border: 2px solid rgba(0, 0, 0, 0.25);
            &:hover {
              @include wh(120px, 120px);
            }
          }
          .font-change {
            display: inline-block;
            font-family: 'STHupo';
            color: #fff;
            font-size: xx-large;
            position: absolute;
            top: 15px;
            left: 15PX
          }
          background-color: #fff;
          @include wh(100%, 12rem);
          position: relative;
          margin-bottom: 5px;
          div {
            @include center;
          }
        }

      }
      .left {
        .works:nth-child(odd) {
          @include wh(100%, 20rem);
        }
      }
      .center {
        margin: 0 5px 0 5px;
        .works:nth-child(even) {
          @include wh(100%, 20rem);
        }
      }
      .right {
        .works:nth-child(odd) {
          @include wh(100%, 20rem);
        }
      }

    }
    .mask {
      width: 100%;
      height: 100%;
      position: fixed;
      top: 0;
      left: 0;
      background-color: #fff;
      opacity: 0.8;

    }
    .show-img {
      width: 100%;
      height: 100%;
      position: fixed;
      top: 0;
      left: 0;
      img {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        /*height: 100%;*/
        /*width: 50%;*/
      }
    }
    .close-img {
      position: fixed;
      top: 0;
      right: 0;
      z-index: 10;
    }

  }
</style>
