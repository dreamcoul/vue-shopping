<template>
    <div id="headerNav">
        <div class="nav-global">
            <div class="container">
                <h1 class="nav-logo">
                    <a href="javascript:;"></a>
                </h1>
                <ul class="nav-aside">
                    <li class="nav-user">
                        <a href="javascript:;">个人中心</a>
                        <!-- active -->
                        <div class="nav-user-wrapper">
                            <div class="nav-user-list">
                                <dl class="nav-user-avatar">
                                    <dd><span class="ng-scope"></span></dd>
                                    <dt class="ng-binding">+86 138****9453</dt>
                                </dl>
                                <ul>
                                    <li class="order"><a href="javascript:;">我的订单</a></li>
                                    <li class="order"><a href="javascript:;">售后服务</a></li>
                                    <li class="order"><a href="javascript:;">我的优惠</a></li>
                                    <li class="order"><a href="javascript:;">账户资料</a></li>
                                    <li class="order"><a href="javascript:;">收货地址</a></li>
                                    <li class="order"><a href="javascript:;">退出</a></li>
                                </ul>
                            </div>
                        </div>
                    </li>
                    <!-- 购物车组件 -->
                    <car-panel></car-panel>
                </ul>
                <ul class="nav-list">
                    <li><a href="javascript:;" title="在线商城">在线商城</a></li>
                    <li><a href="javascript:;" title="坚果Pro">坚果Pro</a></li>
                    <li><a href="javascript:;" title="Smartisan m1">Smartisan m1</a></li>
                    <li><a href="javascript:;" title="Smartisan OS">Smartisan OS</a></li>
                    <li><a href="javascript:;" title="欢喜云">欢喜云</a></li>
                    <li><a href="javascript:;" title="应用下载">应用下载</a></li>
                    <li><a href="javascript:;" title="官方论坛">官方论坛</a></li>
                </ul>
            </div>
        </div>
        <div class="nav-sub">
            <div class="nav-sub-wrapper">
                <div class="container">
                    <ul class="nav-list">
                        <li><router-link to="/Home">首页</router-link></li>
                        <li><router-link to="/mPhone">手机</router-link></li>
                        <li><router-link to="/one">手感膜</router-link></li>
                        <li><router-link to="/shop">官方配件</router-link></li>
                        <li><router-link to="/two">周边产品</router-link></li>
                        <li><router-link to="/three">第三方配件</router-link></li>
                        <li><router-link to="/four">全部商品</router-link></li>
                        <li><router-link to="/five">服务</router-link></li>
                    </ul>
                    <div class="nav-search">
                        <font-awesome-icon icon="search" />
                        <input type="search" />
                    </div>
                </div>
            </div>
            <!--            <div class="nav-goods-panel ">
                <ul class="nav-goods-list">
                    <li class="jianguopro2">
                        <a href="//www.smartisan.com/item/1000351">
                            <div class="item-thumb">
                               <img alt="" height="160" width="160" src="https://resource.smartisan.com/resource/c71ce2297b362f415f1e74d56d867aed.png?x-oss-process=image/resize,w_160/format,webp">
                            </div>
                            <div class="item-name">坚果 Pro 2</div>
                            <div class="item-price">¥ 1,799.00 起</div>
                        </a>
                    </li>
                    <li class="jianguopro">
                        <a href="//www.smartisan.com/item/1000273">
                            <div class="item-thumb">
                              <img alt="" height="160" width="160" src="https://resource.smartisan.com/resource/b68b71f1f97490fa8694a97057abd813.png?x-oss-process=image/resize,w_160/format,webp">
                            </div>
                            <div class="item-name">坚果 Pro</div>
                            <div class="item-price">¥ 1,299.00 起</div>
                        </a>
                    </li>
                </ul>
            </div> -->
        </div>
    </div>
</template>

<script>
import carPanel from './cart-panel'

export default {
    name: 'headerNav',
    components:{
       carPanel 
    }
}
</script>

<style>
</style>
