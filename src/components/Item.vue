<template>
    <div class="item">
        <div class="id">{{index}}</div>
        <div class="content">
            <p class="title">{{info.title}}</p>
            <p class="sub-title">{{info.sub_title}}</p>
        </div>
    </div>
</template>

<script>
export default {
    props:{
        info: Object,
        index: Number
    }
}
</script>
<style lang="less">
.item {
    display: flex;
    flex-direction: row;
    justify-content: center;
    height: 96px;
    .id {
        width: 70px;
        text-align: center;
        display: flex;
        justify-content: center;
       align-items: center; 
       font-size: 24px;

    }

    .content{
        padding: 24px 0 0 12px;
        border-bottom: 1px solid #ccc;
        flex: 1;
        display: flex;
        flex-direction: column;
        .title{
            font-size: 18px;
        }
        .sub-title{
            margin-top: 12px;
            font-size: 14px;
            color: #777;
        }
    }
    &:last-child{
        .content{
            border-bottom: 0;
        }
    }
}
</style>
