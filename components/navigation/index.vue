<template>
	
	<view class="nav" :style="{height:navBarHeight + 'px'}">
	
				
	 

	    <view 
	      class="capsule-box" 
	      :style="{height: menuHeight + 'px','min-height':menuHeight + 'px', 'line-height': menuHeight + 'px',
		  }"
	    >
	    </view>
		<view :style="{height:navBarHeight - menuHeight + 'px'}"></view>
	  
	</view>
	
	
</template>

<script>
	export default {
		data(){
			//console.log(getApp())
			return {
				navBarHeight: getApp().globalData.navBarHeight, //导航栏高度
				menuRight: getApp().globalData.menuRight, // 胶囊距右方间距（方保持左、右间距一致）
				menuBotton: getApp().globalData.menuBotton,
				menuHeight: getApp().globalData.menuHeight // 状态栏高度
				
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
	 /* position: fixed;
	  top: 0;
	  left: 0; */
	  width: 100vw;
	  color: #333;
	}
	.nav-main {
	  width: 100%;
	  height: 100%;
	  position: relative;
	}
	.nav .capsule-box {
	  /* position: absolute; */
	  box-sizing: border-box;
	  width: 100%;
	}
	

</style>