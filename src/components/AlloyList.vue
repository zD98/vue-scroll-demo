<template>
    <div class="list" v-alloytouch="{
            options: options,
            methods: {
                change
            },
            min
        }">
        <div class="items-wrap alloytouch-target">
            <item v-for="(item, index) in items" :info="item" :index="index" ></item>
            <div class="loading">正在加载中，请稍候...</div>
        </div>
    </div>
</template>

<script>
import Item from './Item.vue'
import data from '../store/mock';

export default {

  name: 'AlloyList',
  components: {
    Item
    },
    data () {
        return {
            items: [],
            options: {
                touch:"",//dom for touching
                target: '.alloytouch-target', //dom for transform
                vertical: true,
                property: "translateY",  
                sensitivity: 1,
                factor: 1,
            },
            min: 0
        };
    },
    created(){
        this.updateItems();
    },
    methods:{
        change(y){
            console.log(y)
        },
        onAfterScroll({y}){
            var screenHeight = window.innerHeight;
            if(-y > (this.items.length * 96 - 2 * screenHeight)){
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
                this.min = -(this.items.length * 96 - window.innerHeight + 60);

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
};
</script>

<style lang="less">
.loading {
   text-align: center; 
   padding: 20px 0;
}
</style>