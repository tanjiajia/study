<template>
	<div id="">
		<div class="market_data">
			<h2 class="data_title">市场数据</h2>
			<ul class="data_list">
				<li v-for="marketData in marketDatas">
					<div class="data_momey">
						{{ marketData.momey }} 
						<span>{{ marketData.company }}</span>
					</div>
					<div class="exchange">
						{{ marketData.exchange }}
					</div>
				</li>
				
			</ul>
			
		</div>
		<div class="line">
			<Echarsline></Echarsline>
		</div>
		
	</div>
	
</template>

<script>
	import Echarsline from './Echarsline'
	export default {
    	name: 'Marketdata',
    	components: {
    		Echarsline
		},
		data(){
            return{
				marketDatas: [
			      	{ 
			      		momey: '16,200.14',
			      		company: '亿元',
			      		exchange:'银行间市场'
			      	},
			      	{ 
			      		momey: '16,200.14',
			      		company: '亿元',
			      		exchange:'银行间市场'
			      	},
			      	{ 
			      		momey: '16,200.14',
			      		company: '亿元',
			      		exchange:'银行间市场'
			      	},
			      	{ 
			      		momey: '16,200.14',
			      		company: '亿元',
			      		exchange:'银行间市场'
			      	},
			      	{ 
			      		momey: '--',
			      		company: '',
			      		exchange:'相关数据'
			      	},
			      	{ 
			      		momey: '--',
			      		company: '',
			      		exchange:'相关数据'
			      	}
			    ]

            }
            
       	}
  	}
</script>

<style lang="less" scoped>
	.line{
		width: 92.6%;
		margin: 26px auto 0;
	}
	.market_data{
		width: 92.6%;
		margin: 26px auto 0;
		border-bottom: 1px solid #d0cdc7;
		padding-bottom: 25px;
	}
	h2{
		height: 102px;
		line-height: 102px;
		color: #666;
		text-align: center;
		font-size: 26px;
		width: 92.6%;
		
	}
	.data_list{
		width: 100%;
		display:box;
    	display:-webkit-box;
    	justify-content:space-between;
    	font-family: 微软雅黑;
    	color: #333;
    	li{
    		width: 17.2%;
    	}
    	.data_momey{
    		font-size: 20px;
    		color: #666;
    		span{
    			font-size: 14px;
    		}
    	}
    	.exchange{
    		color: #989898;
    		font-size: 12px;
    		line-height: 58px;
    	}
	}
</style>