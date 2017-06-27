<template>
  <div class="content">
   <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'my-content',
  data () {
    return {
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.content{width:100%;
  height:100%;
box-sizing: border-box;
}
.header~.content{padding-top:50px;}
.sub-header~.content{padding-top:85px;}
.footer~.content{padding-bottom:60px;}
</style>
