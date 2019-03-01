<template>
        <li class="nav-cart" id="cartPanel">
            <a href="javascript:;">购物车</a>
            <!--根据class改变颜色-->
            <span class="cart-empty-num cart-num">
                <i>0</i>
            </span>
            <div class="nav-cart-wrapper">
                <div class="nav-cart-list">
                    <div class="empty">
                        <h3>购物车为空</h3>
                        <p>您还没有选购任何商品，现在前往商城选购吧!</p>
                    </div>
                    <div class="full">
                        <div class="nav-cart-items">
                            <ul>
                                <li class="clear" v-for="(item,index) in CarPanelData">
                                    <div class="cart-item js-cart-item cart-item-sell">
                                        <div class="cart-item-inner">
                                            <div class="item-thumb">
                                                <img :src="item.ali_image+'?x-oss-process=image/resize,w_160/format,webp'">
                                            </div>
                                            <div class="item-desc">
                                                <div class="cart-cell">
                                                    <h4>
                                                        <a :href="'#/item/'+item.sku_id">{{item.title}}</a>
                                                    </h4>
                                                    <p class="attrs">
                                                        <span>{{item.spec_json.show_name}}</span>
                                                    </p>
                                                    <h6>
                                                        <span class="price-icon">¥</span><span class="price-num">{{item.price}}</span><span
                                                            class="item-num">x {{item.count}}</span>
                                                    </h6>
                                                </div>
                                            </div>
                                            <div class="del-btn" @click="clear(item)">删除</div>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div class="nav-cart-total">
                            <p>共 <strong class="ng-binding">{{CountData}}</strong> 件商品</p>
                            <h5>合计：<span class="price-icon">¥</span><span class="price-num ng-binding" ng-bind="cartMenu.totalPrice">{{PriceData}}</span></h5>
                            <h6>
                                <a ng-href="http://www.smartisan.com/shop/#/cart" class="nav-cart-btn" href="http://www.smartisan.com/shop/#/cart">去购物车</a>
                            </h6>
                        </div>
                    </div>
                </div>
            </div>
        </li>
</template>

<script>
export default{
    name:'cartPanel',
    computed:{
        CarPanelData(){
            return this.$store.state.carPanelData
        },
        CountData(){
            return this.$store.getters.totalCountData
        },
        PriceData(){
            return this.$store.getters.totalPriceData
        }
    },
    methods:{
        clear(data){
            this.$store.commit('clearCarData',data)
        }
    }
}
</script>

<style>
</style>
