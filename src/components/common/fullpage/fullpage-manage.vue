<template>
  <div class="fullpage-container">
    <page :currentPage="currentPage">
      <side-bar></side-bar>
      <head-bar></head-bar>
      <div class="content">
        <carousel-panel></carousel-panel>
      </div>
    </page>
    <page :currentPage="currentPage">
      <h2>第二屏</h2>
    </page>
    <page :currentPage="currentPage">
      <!--<h1>第三屏</h1>-->
    </page>
    <page-controller :pageNum="pageNum" :currentPage="currentPage" @changePage="changePage"
                     :option="controllerOption"></page-controller>
  </div>
</template>

<script type="text/babel">
  import page from  './base-page.vue'
  import pageController from './base-page-controller.vue'
  import sideBar from '../../sideBar/sideBar.vue'
  import headBar from '../../headBar/headBar.vue'
  import carouselPanel from '../../home/carousel.vue'

  export default {
    props: {},
    data() {
      return {
        currentPage: 1,              //当前显示页面，默认显示第一页
        controllerOption: {
          navigation: true,          // 是否显示导航条
          navigationColor: '#000',   //导航条颜色，默认显示黑色
          arrowsType: false,         // 是否显示上下箭头按钮   animate 显示且有动画效果  false  不显示
          loop: false                //是否循环滚动
        },

        pageOptions: [{
          background: '',                        //背景色,默认为透明
          afterEnter: function () {              //进入之后的回调函数
            console.log('进入之后的回调函数::::1');
          },
          beforeLeave: function () {            //离开之前的回调函数
            console.log('离开之前的回调函数:::::1');
          }
        }, {
          background: 'rgba(79, 204, 76, 1)',
          afterEnter: function () {
            console.log('进入之后的回调函数::::2');
          },
          beforeLeave: function () {
            console.log('离开之前的回调函数:::::2');
          }
        }, {
          background: 'rgba(233, 84, 84, 1)',
          afterEnter: function () {
            console.log('进入之后的回调函数::::3');
          },
          beforeLeave: function () {
            console.log('离开之前的回调函数:::::3');
          }
        }]
      };
    },
    computed: {
      pageNum(){
        return this.pageOptions.length;
      }
    },
    components: {
      page,
      pageController,
      sideBar,
      headBar,
      carouselPanel
    },
    mounted() {
      this.$children.forEach((child, index) => {
        // 动态设置各个page内的options
        if (!child.option) {
          let childOption = this.pageOptions[index];
          this.$set(childOption, 'index', index + 1);
          child.option = childOption;
        }
      });
    },
    watch: {},
    methods: {
      changePage(index) {
        let beforeIndex = this.currentPage - 1;
        let leaveFunction = this.pageOptions[beforeIndex].beforeLeave;
        typeof leaveFunction === 'function' && leaveFunction.call(this, this.$children[beforeIndex]);
        this.currentPage = index;
        let nextIndex = index - 1;
        let enterFunction = this.pageOptions[nextIndex].afterEnter;
        this.$nextTick(function () {
          typeof enterFunction === 'function' && enterFunction.call(this, this.$children[nextIndex]);
        })
      }
    }
  };
</script>

<style lang="less" rel="stylesheet/less">
  /*@import '';*/
</style>
