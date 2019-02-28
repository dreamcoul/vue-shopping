<template>
    <div id="Shop">
        <div class="sku-box store-content ">
            <div class="sort-option">
                <ul class="line clear">
                    <li><a href="javascript:;" class="active">综合排序</a></li>
                    <li><a href="javascript:;" class="">销量排序</a></li>
                    <li><a href="javascript:;" class="">价格低到高</a></li>
                    <li><a href="javascript:;" class="">价格高到低</a></li>
                </ul>
            </div>
            <!--手机配件-->
            <div class="gray-box">
                <div class="item-box">
                    <shop-item v-for="item,index in goodsData" :item="item" :key="index" @tabschange="tabImg"></shop-item>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import goodsData from '../lib/newGoodsData.js'
import shopItem from '../components/shop-item.vue'
export default {
  name: 'Shop',
  data(){
    return{
        goodsData,
        tabsindex:0
    }
  },
  methods: {
    mouseover: function () {
      return 1
    },
    tabImg(tabs){
        console.log(tabs)
    }
  },
  components:{
    shopItem
  }
}
</script>

<style>
</style>
