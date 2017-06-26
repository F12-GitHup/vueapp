<template>
  <div class="mine">
    <mt-loadmore :top-method="loadTop" ref="loadmore" :autoFill="false">
      <ul>
        <li v-for="item in list">{{ item }}</li>
      </ul>
    </mt-loadmore>
    
  </div>
 
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
     list:["1","2","3","4","5","6","7","8","9"]
    }
  },
  methods: {
    loadTop(){
      setTimeout(()=>{
          this.$refs.loadmore.onTopLoaded();
      },2000)
      
    },
    loadBottom(){
       this.allLoaded = false;
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
