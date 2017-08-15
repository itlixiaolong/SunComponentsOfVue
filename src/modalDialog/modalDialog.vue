<template>
	<div class="mengban errlog">
        <div class="body">
            <p class="title">{{dialogDics.title}}</p>
            <div class="center" v-bind:style="dialogDics.centerstyle">{{dialogDics.body}}</div>
            <div v-if="dialogDics.comfirm">
            	<div class="suspend">
                    <div class="pull-left" style="width:50%">
                        <form class="cm-form">
                            <div class="cm-btn-group" >
                                <a href="javascript:;" class="cm-btn dfbtn" v-on:click="dialogDics.cancelback">取消</a>
                            </div>
                        </form>
                    </div>
                    <div class="pull-left" style="width:50%">
                        <form class="cm-form">
                            <div class="cm-btn-group">
                                <a href="javascript:;" class="cm-btn cm-btn-primary" v-on:click="dialogDics.enterback">立即订购</a>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <div v-else>
            	<form class="cm-form">
	                <div class="cm-btn-group">
	                    <a href="javascript:;" class="cm-btn cm-btn-primary" v-on:click="dialogDics.enterback">我知道了</a>
	                </div>
	            </form>
            </div>
        </div>
    </div>
</template>
<script>
	export default{
		props:{
			// dialogDics:Object
			dialogDics:{
				title:{
					type:String,
					default:'提示'
				},
				body:{
					type:String,
					default:'设置body属性'
				},
				centerstyle:{
					type:Object,
					default:function(){
						return {}
					}
				},
				comfirm:{
					type:Boolean,
					default:false,
				},
				cancelback:{
					type:Function,
					default:function(){
						console.log(11);
					}
				},
				enterback:{
					type:Function,
					default:function(){
						console.log(11);
					}
				}
			}
		}
	}
</script>
<style>
	.mengban{
	    position: fixed;
	    left:0;
	    top:0;
	    height:100%;
	    width:100%;
	    background-color: rgba(0,0,0,0.4);
	}
	.mengban .body{
	    height:4rem;
	    width:6.26rem;
	    position: absolute;
	    left:0;
	    right:0;
	    top:0;
	    bottom: 0;
	    margin:auto;
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
	    margin:0 0.62rem;
	    font-size: 0.3rem;
	    color: #333333;
	}
		.content{
    overflow: auto;
}
.cm-btn {
    width: 100%;
    height: 100%;
    background: #87D5F3;
    color: #fff;
    border-color: #87D5F3;
    font-size: 0.36rem;
    height: 0.9rem;
    line-height: 0.9rem;
    border-radius: 3px;
    display: block;
    text-align: center;
    -webkit-tap-highlight-color: transparent;
    text-decoration: none;
}
.cm-btn-group {
    height: 100%;
    
}
.cm-form .cm-btn-group {
    padding: 10px 15px;
}

.cm-form {
    margin-top: 20px;
    color: #7e7e7e;
}
.cm-form .cm-btn-primary {
    background: #1FBAF3;
    color: #fff;
    border-color: #1FBAF3;
}
</style>