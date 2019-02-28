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
                    <li class="nav-cart">
                        <a href="javascript:;">购物车</a>
                        <span class="cart-empty-num cart-num">
                            <i>0</i>
                        </span>
                        <div class="nav-cart-wrapper">
                            <div class="nav-cart-list">
                                <div class="empty">
                                    <h3>购物车为空</h3>
                                    <p>您还没有选购任何商品，现在前往商城选购吧</p>
                                </div>
                                <div class="full">
                                    <div class="nav-cart-items">
                                        <ul>
                                            <li class="clear">
                                                <div class="cart-item ks-cart-item cart-item-shell">
                                                    <div class="cart-item-inner">
                                                        <div class="item-thumb">
                                                            <img src="../assets/img/1.jpg" />
                                                        </div>
                                                        <div class="item-desc">
                                                            <div class="cat-cell">
                                                                <h4>
                                                                    <a href="#/item/10027401">坚果Pro</a>
                                                                </h4>
                                                                <p class="attrs">
                                                                    <span>透明</span>
                                                                </p>
                                                                <h6>
                                                                    <span class="price-icon">￥</span>
                                                                </h6>
                                                            </div>
                                                        </div>
                                                        <div class="del-btn">删除</div>
                                                    </div>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                    <div class="nav-cart-total">
                                        <p>共<strong class="ng-binding">1</strong>件商品</p>
                                        <h5>合计：<span>￥</span><span>1000</span></h5>
                                        <h6>
                                            <a ng-href="http://smartisan.com/shop/#/cart" class="nav-xx"></a>
                                        </h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>
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
                        <li><a href="javascript:;">首页</a></li>
                        <li><a href="javascript:;">手机</a></li>
                        <li><a href="javascript:;">手感膜</a></li>
                        <li><a href="javascript:;">官方配件</a></li>
                        <li><a href="javascript:;">周边产品</a></li>
                        <li><a href="javascript:;">第三方配件</a></li>
                        <li><a href="javascript:;">全部商品</a></li>
                        <li><a href="javascript:;">服务</a></li>
                    </ul>
                    <div class="nav-search">
                        <font-awesome-icon icon="search" />
                        <input  type="search" />
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
export default {
  name: 'headerNav'
}
</script>

<style>
</style>
