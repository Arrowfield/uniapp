<script>
	export default {
	    globalData: {
			//全局数据管理
			navBarHeight: 0, // 导航栏高度
			menuBottom: 0, // 胶囊距底部间距（顶部间距也是这个）
			menuHeight: 0, // 胶囊高度
	    },
		onLaunch: function() {
			//console.log('App Launch')
			this.calcNavBarInfo()
		},
		onShow: function() {
			//console.log('App Show')
		},
		onHide: function() {
			//console.log('App Hide')
		},
		methods:{
			calcNavBarInfo(){
				const systemInfo = wx.getSystemInfoSync();
				
				// 胶囊按钮位置信息
				const menuButtonInfo = wx.getMenuButtonBoundingClientRect();
				// 导航栏高度 = 状态栏到胶囊的间距（胶囊上坐标位置-状态栏高度） * 2 + 胶囊高度 + 状态栏高度
				this.globalData.navBarHeight = (menuButtonInfo.top - systemInfo.statusBarHeight) * 2 + menuButtonInfo.height + systemInfo.statusBarHeight;
				// 状态栏和菜单按钮(标题栏)之间的间距
				// 等同于菜单按钮(标题栏)到正文之间的间距（胶囊上坐标位置-状态栏高度）
				this.globalData.menuBottom = menuButtonInfo.top - systemInfo.statusBarHeight;
				// 菜单按钮栏(标题栏)的高度
				this.globalData.menuHeight = menuButtonInfo.height;
				
				
			}
		}
	}
</script>

<style>
	/*每个页面公共css */
	 .my-test-class  .wrapper-tabs{
		background-color: black;
	}
</style>
