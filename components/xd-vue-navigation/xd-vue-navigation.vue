<template>
	<view class="nav" :style="{height:navBarHeight + 'px'}">
		<view class="capsule-box" :style="{height: statusHeight + 'px'}"></view>
		<view :style="{height:navBottomHeight + 'px',lineHeight:navBottomHeight + 'px'}" class="nav-bottom">
			<slot></slot>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			//console.log(getApp())
			return {
				navBarHeight: getApp().globalData.navBarHeight, //导航栏高度
				menuRight: getApp().globalData.menuRight, // 胶囊距右方间距（方保持左、右间距一致）
				menuBotton: getApp().globalData.menuBotton,
				menuHeight: getApp().globalData.menuHeight, // 状态栏高度
				statusHeight:getApp().globalData.statusHeight,
			}
		},
		computed:{
			navBottomHeight(){
				return this.navBarHeight - this.statusHeight
			}
		}
	}
</script>

<style>
	.status_bar {
		height: var(--status-bar-height);
		width: 100%;
	}

	.nav {
		position: fixed;
		top: 0;
		left: 0;
		width: 100vw;
		color: #333;
		background-color: white;
		z-index: 1000;
	}

	.nav-main {
		width: 100%;
		height: 100%;
		position: relative;
	}

	.nav .capsule-box {
		box-sizing: border-box;
		width: 100%;
	}
	.nav-bottom{
		text-align: center;
	}
</style>
