import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

let store = new Vuex.Store({
    state: {
        carPanelData: [],
        isMaxNum:false
    },
    getters: {
        //计算
        totalCountData(state) {
            let count = 0
            state.carPanelData.forEach(goods => {
                count += goods.count
            })
            console.log(count)
            return count
        },
        totalPriceData(state) {
            let price = 0
            state.carPanelData.forEach(goods => {
                price += goods.count * goods.price
            })
            return price
        }
    },
    mutations: {
        addCarPanelData(state, data) {
            let boff = true
            // console.log('1'+state.carPanelData)
            state.carPanelData.forEach(goods => {
                if (goods.sku_id === data.sku_id) {
                    goods.count++
                    if(goods.count>data.limit_num){
                        goods.count--
                        state.isMaxNum = true
                    }
                    boff = false
                }
            })
            if (boff) {
                let goodsData = data
                Vue.set(goodsData, 'count', 1)
                state.carPanelData.push(goodsData)
            }
            // console.log(state.carPanelData)

        },
        cancelPrompt(state){
            state.isMaxNum = false
        },
        clearCarData(state,data){
            state.carPanelData.forEach((goods,index) => {
              if (goods.sku_id === data.sku_id) {
                     state.carPanelData.splice(index, 1)
              }
          })  
        }
    }
})


export default store
