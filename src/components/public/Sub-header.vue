<template>
   <div class="sub-header">
        <ul class="class-list">
            <li v-for="(ele,index) in classData" key="index">
                {{ele.title}}
            </li>

        </ul>
   </div>
</template>

<script>
    export default({
        name:"sub-header",
        props:{
            classData:{
                type:Array,
                default(){
                    return []
                }
            }
        }
    })
</script>

<style scoped>
   .sub-header{width:100%;height:42px;background:#fff;position:fixed;top:45px;left:0;z-index:5;}
    .class-list{width:100%;display:flex;line-height:42px;overflow-x:scroll;white-space:nowrap;}
  .class-list li{padding:0 10px;color:#f10;font-size: 13px}
</style>
