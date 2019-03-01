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

    export default {
        name: 'Shop',
        data() {
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
            prompt
        }
    }
</script>

<style>
</style>
