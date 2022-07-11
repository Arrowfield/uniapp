<template>
	<view>
		<view v-for="(node,index) of tabs" @click="onTabClick(index)">
			{{index}}
		</view>
		<view class="el-tabs__content">
			<slot></slot>
		</view>
		
	</view>
</template>
<script>
	export default {
		data(){
			return {
				selectIndex:0,
				tabs:[]
			}
		},
		props:{
			active:{
				type:Number,
			}
		},
		methods:{
			onTabClick(index){
				console.log("tabs切换",index)
				this.selectIndex = index
			}
		},
		mounted(){
			// console.log(this.active,this.$children[this.active])
			// console.log(this.$children)
			// this.$children.forEach((item)=>{
			// 	console.log(item)
			// 	this.tabs.push(item)
			// })
			
			
			// console.log(query)
			// console.log(this.$slots)
			for(let i = 0; i < this.$children.length;i++){
				let temp = this.$children[i]
				// console.log(temp)
				// this.tabs.push(i)
				let query = wx.createSelectorQuery().in(temp)
				console.log(query)
			}
			//console.log(this)
		}
	}
</script>

<style>
</style>