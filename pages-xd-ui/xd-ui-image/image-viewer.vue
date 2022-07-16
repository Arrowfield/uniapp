<template>
	<xd-vue-layout className="bg-black">
		<xd-vue-navigation>
			<view class="left-btn"></view>
			<text style="color: #fff;">{{current + 1}}/{{imageList.length}}</text>
		</xd-vue-navigation>


		<view class="uni-margin-wrap">
			<swiper	@change="bindchange" class="swiper" 	:current="current" circular :indicator-dots="indicatorDots" :autoplay="false" :interval="interval"
				:duration="duration">
				<swiper-item  class="swiper-item" :key="index" v-for="(item,index) of imageList">
					<image mode="widthFix"	 class="image" :src="item" @click="viewerImage"/>
				</swiper-item>
				
			</swiper>
		</view>

	</xd-vue-layout>
</template>

<script>
	export default {
		data() {
			return {
				imageList: [
					"https://cdn.zipblog.top/switch/switch-pro01.jpg",
					"https://cdn.zipblog.top/switch/switch-pro02.jpg",
					"https://cdn.zipblog.top/switch/switch-pro03.jpg",
					"https://cdn.zipblog.top/switch/switch-pro04.jpg",
					"https://cdn.zipblog.top/switch/switch-pro05.jpg"
				],
				background: ['color1', 'color2', 'color3'],
				indicatorDots: true,
				autoplay: true,
				interval: 2000,
				duration: 500,
				current:0
			}
		},
		methods:{
			bindchange(event){
				this.current = event.mp.detail.current
			},
			viewerImage(){
				uni.previewImage({
					urls:this.imageList
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	.uni-margin-wrap {
		position: absolute;
		top:50%;
		left:50%;
		width: 100%;
		transform: translate(-50%,-50%);
	}

	.swiper {
		height: 750rpx;
	}


	.image{
		width: 650rpx;
		// height: 650rpx;
	}
</style>
<style lang="scss">
	.bg-black {
		background: #000;
		color: #fff;
		height: 100vh;
		box-sizing: border-box;
	}
	.swiper-item{
		display: flex;
		justify-content: center;
		align-items: center;
	}
</style>
