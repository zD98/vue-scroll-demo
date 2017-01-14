<template>
    <div class="nav-list">
        <div class="navbar">滚动事件触发次数: {{scrollTime}}</div>
        <div class="list" v-scroll="{methods:{scrolling: onScrolling, afterScroll: onAfterScroll}}">
        	<item v-for="(item, index) in items" :info="item" :index="index" ></item>
            <div class="loading">正在加载中，请稍候...</div>
        </div>
    </div>
</template>

<script>

import Item from './Item';
import data from '../store/mock';
export default {
    components:{
        Item
    },
    data(){
    	return {
            items:[],
            itemHeight: 96,
            scrollTime: 0
    	}
    },
    props:{


    },
    created(){
        this.updateItems();
    },
    methods:{
    	onTap(){


    	},
        onScrolling(){
            // console.log('onScroll')
        },
        onAfterScroll({scrollY}){
            var screenHeight = window.innerHeight;
            if(scrollY > (this.items.length * this.itemHeight - 2 * screenHeight)){
                //提前一屏加载数据
                this.updateItems();
            }
        },
        updateItems(){
            this
            .getRemoteData()
            .then((data)=>{
                // this.items.push.apply(this.items,data);
                this.items = this.items.concat(data);
            }).catch((err)=>{

            });
        },
        getRemoteData(){
            let p = new Promise(function(resolve, reject){
                setTimeout(function(){
                    resolve(data);
                },200);
            })
            return p;
        }
    }

}
</script>
<style lang="less">
#app {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
}
.nav-list {
    width: 100%;
    height: 100%;
}
.navbar {
    position: fixed;
    width: 100%;
    top: 0;
    background: #fff;
}
.list {
    overflow-y: scroll;
    margin-top: 21px;
    -webkit-overflow-scrolling: touch;
    width: 100%;
    .loading {
       text-align: center; 
       padding: 20px 0;
    }
}
</style>
