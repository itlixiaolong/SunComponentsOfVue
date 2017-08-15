# H5端简单的模态组件

在[segmentfault上提了一个关于prop验证的问题](https://segmentfault.com/q/1010000010574397),虽然表述不清楚，但是需求点在评论中讨论出来了；这两天写了个demo，很遗憾没有复现当初最开始遇到的场景：
```
title和body属性都是可以default，但是enterback是Function用default无效
```
现在的情况是整个prop如果在父组件中不传递则为空对象，default都无效了。

使用了两种方法写的模态组件。

1. modalDialog：main.js中声明使用，父组件中通过子组件声明标签使用，使用**prop**传递数据

2. alertConstructor：使用[@jessica写的组件](https://mengera88.github.io/2017/07/03/%E7%94%A8vue%E7%BC%96%E5%86%99%E5%BC%B9%E5%87%BA%E6%A1%86%E7%BB%84%E4%BB%B6/?utm_source=tuicool&utm_medium=referral)为基础做修改，异步插入到DOM界面中，在子组件中控制显示隐藏

遇到问题：

一、 经过测试发现**modalDialog**中的**prop**实际是不起作用的:

```
//  下面代码不起效果

props:{
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

// 如果prop的下面直接是属性，**prop**就起效（alertConstructor组件）：

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
  }
}
```

二、 由于**alertConstructor**使用的异步插入操作，组件的显示隐藏都直接写在了组件中，导致使用中出现了两个问题：

1. 组件在页面显示后点击确定后组件立即消失，但是有时在极其个别的情况需要点击确定后执行一个异步操作，异步操作结束后才让组件消失(或者出现弹窗后虽然有确定按钮但是按钮实际是无效的)

2. 开发中会遇到如果created中执行显示后，修改代码多次保存由于webpack机制导致页面出现多个弹窗，生产环境应该是不会遇到这个问题的。
