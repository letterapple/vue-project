<template>
  <div class="carousel-panel" >
    <div class="btns left-btn">
      <span class="iconfont icon-triangle-up" @click="handleBtn('left')"></span>
    </div>
    <div class="btns right-btn">
      <span class="iconfont icon-triangle-up" @click="handleBtn('right')"></span>
    </div>
    <ul class="list" >
      <li  v-for="imgUrl in imgDatas" class="list-img" :class="{'current': imgUrl.isActive}">
        <img  :src=imgUrl.url>
      </li>
    </ul>
    <ul class="circle">
      <li class="list-count" v-for="imgUrl in imgDatas"
          :class="{'current': imgUrl.isActive}"
          @click="handleClick(imgUrl)"></li>
    </ul>
  </div>
</template>

<script type="text/babel">
  import $ from 'jquery'
  export default {
    data () {
      return {
        imgDatas:[
          {
            url: require('../../assets/images/product-1.jpg'),
            isActive: true
          },
          {
            url:require('../../assets/images/product-2.jpg'),
            isActive: false
          },
          {
            url:require('../../assets/images/product-3.jpg'),
            isActive: false
          },
          {
            url:require('../../assets/images/product-4.jpg'),
            isActive: false
          },
          {
            url:require('../../assets/images/product-5.jpg'),
            isActive: false
          },
          {
            url:require('../../assets/images/product-6.jpg'),
            isActive: false
          }
        ],
        intervalTime: 1000,
        interval:''
      };
    },
    computed: {},
    components: {},
    mounted () {
//      const self = this
//      let index;
//      self.imgDatas.forEach( (imgData,i) => {
//        if (imgData.isActive) {
//          index = i
//        }
//        imgData.isActive = false
//      })
//
//      self.interval = setInterval(function () {
//        for (let i = 0; i < self.imgDatas.length; i++) {
//          if (i === (index + 1) % 6) {
//            self.imgDatas[i].isActive = true
//          } else {
//            self.imgDatas[i].isActive = false
//          }
//        }
//        index ++
//      },self.intervalTime)
    },
    watch: {},
    methods: {
      handleClick (imgUrl) {
      //  clearInterval(this.interval)
       this.imgDatas.forEach ( imgData => {
         imgData.isActive = imgData.url === imgUrl.url
       })
      },
      handleBtn (direction) {
      //  clearInterval(this.interval)
        let index
        this.imgDatas.forEach ((imgData , i) => {
          if (imgData.isActive) {
            index = i
          }
          imgData.isActive = false;
        })
        if (direction === 'left') {
          if (!index) {
            index = this.imgDatas.length
          }
          this.imgDatas[index - 1].isActive = true;
        } else {
          this.imgDatas[(index + 1) % this.imgDatas.length ].isActive = true
        }
      }
    }
  }
</script>

<style lang="less" rel="stylesheet/less">
  @import 'less/carousel.less';
</style>