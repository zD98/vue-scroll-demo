<template>
    <div class="list" v-alloytouch="{}">
        <item v-for="(item, index) in items" :info="item" :index="index" ></item>
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

        };
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
};
</script>

<style lang="less">
</style>