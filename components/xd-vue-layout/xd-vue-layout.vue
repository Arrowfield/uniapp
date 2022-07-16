<template>
	<view :class="className" :style="{paddingTop:paddingTop + 'px'}">
		<slot></slot>
	</view>
</template>

<script>
	export default {


		props:{
			className:String,
		},
		data() {
			let navBarHeight = getApp().globalData.navBarHeight

			return {
				paddingTop: navBarHeight
			}
		},
	}
</script>

<style>
</style>
