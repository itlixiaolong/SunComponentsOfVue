/*
*	使用方法：
*		1. 在 main.js中 
*			import Loading from './components/loading'
			Vue.use(Loading)
		2. 页面中
			<template>
				<div>
					<Loading :dialogDics="dialogDics" v-show='showdialog'></Loading>
				</div>
			</template>
		3. 页面 JS 设置data，添加一个方法：
			data(){
				return {
					showdialog:false, //是否显示模态对话框
					dialogDics:{
						title:'标题', // String		选填
						body:'描述', // String		选填
						style:{ // Object，设置中间显示区域样式		选填
							height:'4.5rem'
						},
						centerstyle:{ // Object，设置描述区样式		选填
							margin:'0 0.3rem'
						},
						comfirm:true, // Boolean，是否显示 选择项	选填
						cancelback:()=>{  // function，取消回调		选填
							
						},
						enterback:()=>{ // Function，确定回调	必填
							
						}
					}
				}
			}
			methods:{
				cleardialogDics(){
					this.dialog = false;
		            this.dialogDics = {};
		        }
			}
*/

import ModalDialogComponent from "./modalDialog.vue"

const ModalDialog = {
	install:function(Vue){
		Vue.component('ModalDialog',ModalDialogComponent)
	}
}

export default ModalDialog