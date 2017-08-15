<template>
 <div class="alert" v-if="showAlert">
  <div class="mengban">
        <div class="body" v-bind:style="bodystyle">
            <p class="title">{{title}}</p>
            <div class="center" v-bind:style="centerstyle">{{message}}</div>
            <div class="footer"  v-if="type === 'confirm'">
              <div class="left" style="width:50%">
                <a href="javascript:;" class="dfbtn" @click="cancel">{{cancelName}}</a>
              </div>
              <div class="left" style="width:50%">
                <a href="javascript:;" class="dfbtn primary" @click="sure">{{sureName}}</a>
              </div>
            </div>
            <div class="footer" v-else-if="type === 'inform'">
              <a href="javascript:;" class="footerbtn" @click="sure">{{sureName}}</a>
            </div>
        </div>
    </div>
 </div>
</template>
<script>
export default {
 name: 'alert',
 data() {
  return {
   showAlert: false,
  };
 },
 props: {
  title: {
   type: String,
   default: '提示',
  },
  message: {
   type: String,
  },
  bodystyle:{
    type:Object,
    default:function(){
      return {}
    }
  },
  centerstyle:{
    type:Object,
    default:function(){
      return {}
    }
  },
  type: { // 可以有confirm, 和inform两个类型
   type: String,
   default: 'confirm',
   validator(value) {
    return value === 'confirm' || value === 'inform';
   },
  },
  sureName:{
    type:String,
    default:'立即订购'
  },
  cancelName:{
    type:String,
    default:'取消'
  },
  sureBtn: {
   type: Function,
  },
  cancelBtn: {
   type: Function,
  },
 },
 methods: {
  cancel() {
   if (this.cancelBtn) {
    this.cancelBtn.apply();
   }
   this.close();
  },
  sure() {
   if (this.sureBtn) {
    this.sureBtn.apply();
   }
   console.log(this.showAlert);
   this.close();
  },
  show() {
   this.showAlert = true;
  },
  close() {
   this.showAlert = false;
  },
 },
};
</script>
<style scoped>
.mengban{
      position: fixed;
      left:0;
      top:0;
      height:100%;
      width:100%;
      z-index: 1000;
      background-color: rgba(0,0,0,0.4);
      transition: all .3s ease-in-out;
  }
  .mengban .body{
      width:6.26rem;
      position: absolute;
      z-index: 1002;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      background: #FFFFFF;
      border-radius: 0.24rem;
  }
  .mengban .body .title{
      text-align: center;
      margin:0.3rem auto 0.4rem;
      font-size:0.36rem;
      line-height: 0.5rem;
      color: #333333;
      font-weight: bold;
  }
  .mengban .body .center,.suspend{
      margin:0 0.6rem;
      font-size: 0.3rem;
      color: #333333;
  }
  .footer{
    text-align: center;
    padding:0.65rem 0.5rem 0.4rem;
  }
  .footer:after{
    content: '';
    display: block;
    clear: both;
  }
  .left{
    float: left;
  }
  .dfbtn{
    line-height: 0.94rem;
    font-size: 0.36rem;
    width: 2.4rem;
    background-color: #ccc;
    color: #fff;
    border-radius: 0.08rem;
    display: inline-block;
  }
  .primary{
    background-color: #1FBAF3;
  }
  .footerbtn{
    display: inline-block;
    width: 4rem;
    font-size: 0.36rem;
    height: 0.94rem;
    background-color: #1FBAF3;
    text-align: center;
    line-height: 0.94rem;
    border-radius: 0.08rem;
    color:#fff;
  }
</style>