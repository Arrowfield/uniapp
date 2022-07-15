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