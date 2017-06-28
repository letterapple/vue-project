<template>
  <div class="ef-tab-container" v-show="show">
    <slot></slot>
  </div>
</template>

<script type="text/babel">
  module.exports = {
    props: {
      title: {
        type: String,
        required: true
      },
      name: String,
      icon: {
        type: String,
        default: ''
      }
    },
    components: {},
    data() {
      return {
        key: '',
        transition: ''
      };
    },
    created() {
      if (!this.key) {
        this.key = this.$parent.$children.indexOf(this) + 1 + '';
      }
    },
    watch: {
      name: {
        immediate: true,
        handler(val) {
          this.key = val;
        }
      }
    },
    computed: {
      show() {
        return this.$parent.currentName === this.key;
      }
    },
    methods: {},
    mounted() {

    }
  };
</script>

<style lang="less" rel="stylesheet/less" scoped>
  .ef-tab-container {
    height: 100%;
  }
</style>


