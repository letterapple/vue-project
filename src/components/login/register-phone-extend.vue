<template>
  <div class="phone-extend">
    <div class="triangle"></div>
    <ef-tabs :activeName="activeName" top="70px">
      <ef-tab-container title="热门" name="Hots">
        <ul  name="Hots">
          <li v-for="county in HotsList" @click="handelClick($event)">{{county}}</li>
        </ul>
      </ef-tab-container>
      <ef-tab-container  title="亚洲" name="Asia">
        <ul name="Asia">
          <li v-for="county in AsiaList" @click="handelClick($event)">{{county}}</li>
        </ul>
      </ef-tab-container>
      <ef-tab-container title="美洲" name="America">
        <ul name="America">
          <li v-for="county in AmericaList" @click="handelClick($event)">{{county}}</li>
        </ul>
      </ef-tab-container>
      <ef-tab-container title="欧洲" name="Europe">
        <ul name="Europe">
          <li v-for="county in EuropeList" @click="handelClick($event)">{{county}}</li>
        </ul>
      </ef-tab-container>
    </ef-tabs>

  </div>
</template>

<script type="text/babel">
  import efTabs from '../common/tabs/ef-tabs.vue';
  import efTabContainer from '../common/tabs/ef-tab-container.vue';
  export default{
    props: {
      activeName: {
        type: String,
        default: 'Hots'
      }
    },
    data () {
      return {
        HotsList:["中国 0086","中国台湾 0886","中国香港 0852","日本 0081","韩国 0082","马来西亚 0060","新加坡 0065"],
        AsiaList:["中国 0086","中国台湾 0886","阿联酋 0971","马来西亚 0060","中国香港 0852","新加坡 0065","印度 0091"],
        AmericaList:["巴西 0055","加拿大 0001","委内瑞拉 0058","阿鲁巴 0297","美国 0001","安圭拉 1264","巴哈马 1242"],
        EuropeList:["德国 0049","俄罗斯 0007","丹麦 0045","法国 0033","安圭拉 1264","芬兰 0358","荷兰 0031"]
      }
    },
    components:{
      efTabs,
      efTabContainer
    },
    computed:{

    },
    methods:{
      handelClick (e) {
        this.$emit('changeCounty' , e.target.innerText)
      }

    }
  }
</script>


<style lang="less" rel="stylesheet/less">
  @import './less/register-phone-extend.less';
</style>