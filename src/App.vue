<template>
  <div id="app">
    <modal-dialog :dialogDics='dialogDics'></modal-dialog>
  </div>
</template>

<script>
import AlertConstructor from './alertConstructor'
export default {
  name: 'app',
  data () {
    return {
      dialogDics:{
        // title:'提示',
        // body:'diadhiawd',
        // enterback:function(){
        //   console.log(1111);
        // }
      }
    }
  },
  created(){
    console.log(11)
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
