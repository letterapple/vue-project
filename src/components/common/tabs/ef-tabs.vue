<template>
  <div class="ef-tabs">
    <div class="ef-tabs-header">
      <div class="ef-tabs-item" ref="tabs" v-for="tab in tabs" :class="{'is-actived': activeName === tab.name}"
           @click="handleTabClick(tab.key, $event)">
        <i v-if="tab.icon !== ''" :class="tab.icon"></i>{{ tab.title }}
      </div>
      <span class="ef-tabs-bar-link" :style="tabStyle"></span>
    </div>

    <div class="ef-tabs-body" :style="{'top': top}">
      <slot></slot>
    </div>
  </div>

</template>

<script type="text/babel">
  module.exports = {
    props: {
      type: String,
      activeName: {
        type: String,
        default: "Hots"
      },
      top: {
        type: String,
        default: '42px'
      }
    },
    data() {
      return {
        tabs: [],
        activeTab: null,
        tabStyle: {
          width: '100%',
          transform: 'translate3d(0, 0, 0)'
        },
        currentName: "Hots"
      };
    },
    watch: {
      activeName: function (newVal, oldVal) {
        this.currentName = newVal;
      },
      currentName(newVal, oldVal) {
        if (oldVal) this.setTabStyle();
      }
    },
    methods: {
      handleTabClick(key, event) {
        if (key === this.currentName) return false;
        this.currentName = key;
      },
      setTabStyle() {
        let tabStyle = {};
        if (this.tabs.length === 0) return tabStyle;

        let offsetWidth = 0;
        let barWidth = 0;
        this.tabs.some((tab, index) => {
          let $tab = this.$refs.tabs[index];
          if (tab.key === this.currentName) {
            barWidth = $tab.clientWidth;
            return true;
          } else {
            offsetWidth += $tab.clientWidth;
            return false;
          }
        });
        tabStyle.width = barWidth + 'px';
        tabStyle.transform = `translate3d(${offsetWidth}px, 0, 0)`;
        this.tabStyle = tabStyle;
      }
    },
    mounted() {
      // 默认显示第一个tab
      let firstKey = this.$children[0].key || '1';
      this.currentName = this.activeName || firstKey;
      this.$children.forEach(tab => this.tabs.push(tab));
      this.$nextTick(() => this.setTabStyle());
    }
  };

</script>

<style lang="less" rel="stylesheet/less">
  @import "./less/ef-tabs.less";
</style>


