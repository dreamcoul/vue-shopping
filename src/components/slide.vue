<template>
	<div id="slide" class="carousel-wrap">
        <transition-group tag="ul" class="slide-ul" name="list" >
            <li v-for="(list,index) in slideList" :key="list.id" v-show="index===currentIndex" @mouseenter="stop" @mouseleave="go">
                <a :href="list.checkUrl">
                    <img :src="list.image"  :alt="list.desc"/>
                </a>
            </li>
        </transition-group>
        <div class="carousel-items">
            <span v-for="(item,index) in slideList.length" :class="{'active':index === currentIndex}" :key="item" @mouseover="change(index)">
                
            </span>
        </div>
    </div>
</template>

<script>
export default{
    name:"slide",
    data:function(){
        return {
           slideList:[
               {
                   'id':1,
                   'checkUrl':'#',
                   'desc':'第一张图',
                   'image':require("../assets/img/p1.png")
               },
               {
                   'id':2,
                   'checkUrl':'#',
                   'desc':'第二张图',
                   'image':require('../assets/img/p2.png')
               },
                {
                   'id':3,
                   'checkUrl':'#',
                   'desc':'第三张图',
                   'image':require('../assets/img/p3.png')
               },
           ],
           currentIndex:0,
           timer:''
        }
        
    },
    methods:{
        change(index){
            this.currentIndex = index
        },
        go(){
            this.timer = setInterval(()=>{
                this.autoPlay()
            },3000)
        },
        stop(){
            clearInterval(this.timer)
            this.timer = null
        },
        autoPlay(){
            this.currentIndex++
            if(this.currentIndex > this.slideList.length-1){
                this.currentIndex = 0 
            }
        }
    },
    created(){
        this.$nextTick(() =>{
            this.timer = setInterval(()=>{
                this.autoPlay()
            },3000)
        })
    }
}
</script>

<style>
 .carousel-wrap {
   height: 453px;
   width: 90%;
   overflow: hidden;
   background-color: #fff;
   border-radius: 10px;
   margin: 20px 5% 20px 5%;
}

.slide-ul {
  position: relative;
  width: 100%;
  height: 100%;
}

.slide-ul li {
  position: absolute;
  width: 100%;
  height: 100%;
}

img {
  width: 100%;
  height: 100%;
}

.carousel-items {
  position: absolute;
  z-index: 10;
  top: 580px;
  width: 100%;
  margin: 0 auto;
  text-align: center;
  font-size: 0;
}

.carousel-items span {
  display: inline-block;
  height: 6px;
  width: 30px;
  margin: 0 3px;
  background-color: #b2b2b2;
  cursor: pointer;
}
.carousel-items .active {
  background-color: orange;
}

.list-enter-to {
  transition: all 1s ease;
  transform: translateX(0);
}

.list-leave-active {
  transition: all 1s ease;
  transform: translateX(-100%)
}

.list-enter {
  transform: translateX(100%)
}

.list-leave {
  transform: translateX(0)
}
</style>
