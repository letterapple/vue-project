<template>
    <div class="navigation">
        <button v-if="option.arrowsType" class="prev-btn" :class="{moving:option.arrowsType === 'animate'}"
                @click="changePage(prevIndex)"></button>
        <ul v-if="option.navigation" class="navigation-ul">
            <li v-for="index in pageNum" @click="changePage(index)"
                :class="{active: index === currentPage}" :key="'controller-'+index"
                class="navigation-item">
                <span :style="{background: option.navigationColor}"></span>
            </li>
        </ul>
        <button v-if="option.arrowsType" class="next-btn" :class="{moving:option.arrowsType === 'animate'}"
                @click="changePage(nextIndex)"></button>
    </div>
</template>

<script type="text/babel">
    export default {
        props: {
            pageNum: Number,
            currentPage: Number,
            option: {
                type: Object,
                default: {
                    navigation: true,
                    arrowsType: false
                }
            }
        },
        data() {
            return {};
        },
        computed: {
            nextIndex () {
                if (this.currentPage === this.pageNum) {
                    return this.option.loop ? 1 : -1
                } else {
                    return this.currentPage + 1;
                }
            },
            prevIndex () {
                if (this.currentPage === 1) {
                    return this.option.loop ? this.pageNum : -1;
                } else {
                    return this.currentPage - 1;
                }
            }
        },
        components: {},
        created () {
            if (this.option.navigation === undefined) {
                this.option.navigation = true;
            }
        },
        mounted () {
            let _this = this;
            let timer = null;
            // 滚轮处理
            function scrollHandler(direction) {
                // 防止重复触发滚动事件
                if (timer) {
                    return;
                }
                if (direction === 'down') {
                    _this.changePage(_this.nextIndex);
                } else {
                    _this.changePage(_this.prevIndex);
                }
                timer = setTimeout(function () {
                    clearTimeout(timer);
                    timer = null;
                }, 300);
            }

            if (Object.hasOwnProperty.call(window, 'onmousewheel')) {
                // 监听滚轮事件
                window.addEventListener('mousewheel', function (event) {   // IE/Opera/Chrome
                    let direction = event.wheelDelta > 0 ? 'up' : 'down';
                    scrollHandler(direction);
                }, false);
            } else {
                window.addEventListener('DOMMouseScroll', function (event) {   // Firefox
                    let direction = event.detail > 0 ? 'up' : 'down';
                    scrollHandler(direction);
                }, false);
            }
        },
        watch: {},
        methods: {
            changePage (index) {
                if (index === -1) {
                    return false;
                }
                this.$emit('changePage', index);
            }
        }
    };
</script>

<style lang="less" rel="stylesheet/less" scoped>
    @import "./less/base-page-controller.less";
</style>
