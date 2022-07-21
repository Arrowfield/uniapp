<template>
<uni-shadow-root class="xd-radio-group-index"><view class="radio-group">
  <slot></slot>
</view></uni-shadow-root>
</template>

<script>

global['__wxVueOptions'] = {components:{}}

global['__wxRoute'] = 'xd/radio-group/index'
Component({
	properties:{
		value:{
			type:String,
			value:'1',
			observer: 'updateChildren',
		}
	},
	relations: {
		'../radio/index': {
			type: 'child',
			linked: function(target) {
				
			}
		}
	},
	ready() {
		
	},
	methods:{
		updateChildren(){
			this.nodes = this.getRelationNodes('../radio/index')
			this.nodes.forEach((item)=>{
				item.setData({
					value:this.data.value
				})
			})
		}
	},
})

// 当父组件配置的value与name相等时 就选中态
export default global['__wxComponents']['xd/radio-group/index']
</script>
<style platform="mp-weixin">
.radio-group{
	display: flex;
}
</style>