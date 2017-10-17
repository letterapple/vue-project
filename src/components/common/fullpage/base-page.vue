<template>
    <div class="base-panel" :class="{'page-before': option.index < currentPage,
                'page-after': option.index > currentPage,
                'page-current': option.index === currentPage}"
         :style="{background: option.background ||'transparent'}">
        <slot>暂无内容</slot>
    </div>
</template>

<script type="text/babel">
    export default {
        props: {
            currentPage: {
                type: Number,
                default: 1
            }
        },
        data() {
            return {
                option: ''
            };
        },
        computed: {},
        components: {},
        mounted() {

        },
        watch: {},
        methods: {}
    };
</script>

<style lang="less" rel="stylesheet/less">
    .base-panel {
        overflow: hidden;
        position: fixed;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        transition: all 0.5s ease 0s;
        z-index: 1;
    }

    .page-before {
        z-index: 0;
        transform: translateY(-100%);
    }

    .page-after {
        z-index: 0;
        transform: translateY(100%);
    }
</style>
