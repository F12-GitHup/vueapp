<template>
  <div id="app">


    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style >
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  text-align:center;
  height:100%;
  width:100%;
}
html,body{
  height:100%;
  width:100%;
}
*{ margin:0;padding:0;}
li{list-style:none;}
a{text-decoration:none;
  color: #666;}
.itempxove {
    overflow: hidden;
    -webkit-animation:pxoveItem .8s both cubic-bezier(.24,.01,.38,.97);
    animation: pxoveItem .8s both cubic-bezier(.24,.01,.38,.97)}
@-webkit-keyframes pxoveItem{
    0% {
        opacity: 1;

    }
    99%{


        opacity: 0;

    }
    95%{

        margin-top: 0;
        margin-bottom: 0;
        border-top-width: 0;
        border-bottom-width: 0;
        padding-top: 0;
        padding-bottom: 0;
        opacity: 0;
        height: 0;

    }
    100% {

        margin-top: 0;
        margin-bottom: 0;
        border-top-width: 0;
        border-bottom-width: 0;
        padding-top: 0;
        padding-bottom: 0;
        opacity: 0;
        height: 0;
    }
}
@keyframes pxoveItem{
    0% {
        opacity: 1;

    }
    80%{


        opacity: 0;


    }
    95%{

        margin-top: 0;
        margin-bottom: 0;
        border-top-width: 0;
        border-bottom-width: 0;
        padding-top: 0;
        padding-bottom: 0;
        opacity: 0;
        height: 0;

    }
    100% {

        margin-top: 0;
        margin-bottom: 0;
        border-top-width: 0;
        border-bottom-width: 0;
        padding-top: 0;
        padding-bottom: 0;
        opacity: 0;
        height: 0;
    }
}
</style>
