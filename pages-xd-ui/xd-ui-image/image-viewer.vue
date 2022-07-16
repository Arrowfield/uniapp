<template>
	<xd-vue-layout  className="bg-black">
		<xd-vue-navigation>
			<view class="left-btn"></view>
			<text style="color: #fff;">1/10</text>
		</xd-vue-navigation>
		<!-- <view>this is a image page</view> -->
	</xd-vue-layout>
</template>

<script>
	export default{
		data(){
			return {
				imageList:[
					
				]
			}
		}
	}
</script>

<style lang="scss" scoped>

</style>
<style lang="scss">
	.bg-black{
		background: #000;
		color: #fff;
		height: 100vh;
		box-sizing: border-box;
	}
</style>