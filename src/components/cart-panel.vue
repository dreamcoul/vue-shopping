<template>
        <li class="nav-cart" id="cartPanel" @mouseenter="EnterCartPanel" @mouseleave="LeaveCartPanel">
            <a href="javascript:;"  class="ball-rect">购物车</a>
            <!--根据class改变颜色-->
            <span class="cart-empty-num" :class="{'cart-num':CountData>0}">
                <i>{{CountData}}</i>
            </span>
            <div class="nav-cart-wrapper" v-if="PanelShow">
                <div class="nav-cart-list">
                    <div class="empty" v-if="CountData === 0">
                        <h3>购物车为空</h3>
                        <p>您还没有选购任何商品，现在前往商城选购吧!</p>
                    </div>
                    <div class="full">
                        <div class="nav-cart-items">
                            <ul>
                                <li class="clear" v-for="(item,index) in CarPanelData" :key="index">
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
            <transition name="ball"  
            v-on:before-enter="beforeEnter"
            v-on:enter="enter"
            v-on:after-enter="afterEnter"
            v-bind:css="true">
                <div class="addcart-mask" v-show='ball.show'>
                    <img src="" class="mask-item"/>
                </div>
            </transition>
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
        },
        PanelShow(){
            return this.$store.state.carShow
        },
        ball(){
            return this.$store.state.ball
        }
    },
    methods:{
        clear(data){
            this.$store.commit('clearCarData',data)
        },
        EnterCartPanel(){
            this.$store.commit('EnterCartPanel')
        },
        LeaveCartPanel(){
           this.$store.commit('LeaveCartPanel')
        },
        beforeEnter(el){
            console.log(el)
            let rect = this.ball.el.getBoundingClientRect()
            let rectE = document.getElementsByClassName('ball-rect')[0].getBoundingClientRect()
            let ball = document.getElementsByClassName('mask-item')[0]
            let x = rectE.left+15 -(rect.left+rect.width/2)
            let y = rect.top + rect.height/2 - (rectE.top +10)
            
            el.style.transform = 'translate3d(0,'+y+'px,0)'
            ball.style.transform = 'translate3d(-'+x+'px,0,0)'
            ball.src = this.ball.img
            console.log(y)
        },
        enter(el){
            let a = el.offsetHeight
            let ball = document.getElementsByClassName('mask-item')[0]
            el.style.transform = 'translate3d(0,0,0)'
            ball.style.transform = 'translate3d(0,0,0)'
        },
        afterEnter(){
            this.ball.show = false
        }
    }
}
</script>

<style>
.ball-enter-active{
    transition: 1s cubic-bezier(.17,.67,.56,1.53);
}

.ball-enter-active .mask-item{
    transition: 1s;
}

 .mask-item{
    height: 20px;
    widows: 16px;
} 
</style>
