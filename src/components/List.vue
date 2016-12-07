<template>
    <div class="list">
    	<item v-for="(item, index) in items" :info="item" :index="index" ></item>
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
            items:[]
    	}
    },
    props:{


    },
    created(){
        var self = this;
        this
        .getRemoteData()
        .then(function(data){
            self.items.push.apply(self.items,data);
        }).catch(function(err){

        });
    },
    methods:{
    	onTap(){


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
<style>
.list {

	
}
</style>
