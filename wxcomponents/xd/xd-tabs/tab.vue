<template>
<uni-shadow-root class="xd-xd-tabs-tab"><slot v-if="active == 1"></slot></uni-shadow-root>
</template>

<script>

global['__wxVueOptions'] = {components:{}}

global['__wxRoute'] = 'xd/xd-tabs/tab'
Component({
	relations: {
		'./tabs': {
			type: 'parent', // 关联的目标节点应为父节点
			linked: function(target) {
				// 每次被插入到 custom-ul 时执行，target是 custom-ul 节点实例对象，触发在 attached 生命周期之后
				//console.log("实例对象：", target)
			},
			linkChanged: function(target) {
				// 每次被移动后执行，target是 custom-ul 节点实例对象，触发在 moved 生命周期之后
			},
			unlinked: function(target) {
				// 每次被移除时执行，target是 custom-ul 节点实例对象，触发在 detached 生命周期之后
			}
		}
	},
	
	properties:{
		title:{
			 type: String
		}
	},
	data(){
		return {
			active : 0
		}
	}

})
export default global['__wxComponents']['xd/xd-tabs/tab']
</script>
<style platform="mp-weixin">

</style>