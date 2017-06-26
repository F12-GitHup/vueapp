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
.content{width:100%;}
.header~.content{padding-top:45px;}
.sub-header~.content{padding-top:85px;}
.footer~.content{padding-bottom:51px;}
</style>
