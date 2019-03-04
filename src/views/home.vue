<template>
	<div id="Home">
        <slide></slide>
        <advert></advert>
        <div class="sku-box store-content ">
            <!--手机配件-->
            <div class="gray-box">
                <header class="title-header">
                    <h5 class="title">热门商品</h5>
                </header>
                <div class="item-box">
                    <!-- <shop-item v-for="item,index in goodsData" :item="item" :key="index" @tabschange="tabImg" @checkNum="checkNums" ></shop-item> -->
                    <shop-item v-for="item,index in goodsData" :item="item" :key="index" @tabschange="tabImg"></shop-item>
                </div>
            </div>
            <!-- <prompt :hidden="IsMaxNum" @cancel="cancels"></prompt> -->
            <prompt></prompt>
        </div>
    </div>
</template>

<script>
import goodsData from '../lib/newGoodsData.js'
import shopItem from '../components/shop-item'
import prompt from '../components/prompt'
import slide from '../components/slide'
import advert from '../components/advert'
 export default{
    name:'Home',
    data:function() {
         return {
             goodsData,
             tabsindex: 0,
             IsMaxNum: true
         }
     },
     methods: {
         mouseover: function() {
             return 1
         },
         tabImg(tabs) {
             console.log(tabs)
         },
//             checkNums(isNum) {
//                 if (isNum) {
//                     this.IsMaxNum = false
//                 }
//             },
//             cancels(cancelP) {
//                 this.IsMaxNum = cancelP
//             }
     },
     components: {
         shopItem,
         prompt,
         slide,
         advert
     }
 }
</script>

<style>
</style>
