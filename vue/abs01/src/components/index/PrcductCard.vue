<template>
	<div class="Prcduct_list">
		<div class="PrcductCard" v-for="sellProduct in sellProducts">
			<h3 class="produc_name">{{ sellProduct.producName }}</h3>
			<div class="produc_yield">{{ sellProduct.producYield }} <span>%</span></div>
			<p class="yield">优先级A收益率</p>
			<p class="produc_publisher">发行商：{{ sellProduct.producPublisher }}</p>
			<p class="produc_offer_limit">发售额度：{{ sellProduct.offerLimit }}</p>
			<p class="produc_type">产品类型：{{ sellProduct.producYype }}</p>
			<router-link to="/" class=''>
				<div class="produc_details">
					查看详情
				</div>
			</router-link>
			
		</div>
	</div>
		
</template>

<script>

	export default {
    	name: 'PrcductCard',
    	components: {
//  		Banner
		},
		data(){
            return{
				sellProducts: [
			      	{ 
			      		producName: '平安普惠宅e贷－国海2期',
			      		producYield: '4.58',
			      		producPublisher:'上海市的一家发行商发行商发行商',
			      		offerLimit: '800,000,000.00',
			      		producYype: '个人房产资产证券'
			      	},
			      	{ 
			      		producName: '平安普惠宅e贷平惠宅e贷平安e贷平惠宅e贷平安普惠宅e－国海2期',
			      		producYield: '4.58',
			      		producPublisher:'上海市的一家发行商发行商发行商',
			      		offerLimit: '800,000,000.00',
			      		producYype: '个人房产资产证券'
			      	},
			      	{ 
			      		producName: '平安普惠宅e贷－国海2期',
			      		producYield: '4.58',
			      		producPublisher:'上海市的一家发行商发行海市的一家发行商发行商发行商',
			      		offerLimit: '800,000,000.00',
			      		producYype: '个人房产资产证券'
			      	}
			    ]

            }
            
       	},
       	methods: {
	    	addClass: function () {
	      		this.styles='active'
	    	}
	  	}
  	}
</script>

<style lang="less" scoped>
	.Prcduct_list{
		width: 100%;
		display:box;
    	display:-webkit-box;
    	justify-content:space-between;
    	font-family: 微软雅黑;
    	color: #333;
	}
	.PrcductCard{
		width: 28%;
		background: #ffffff;
		padding: 20px;
		box-sizing: border-box;
	}
	h3{
		font-family: 微软雅黑;
		text-align: center;
		font-size: 17px;
		height: 50px;
	}
	.produc_yield{
		margin-top: 20px;
		text-align: center;
		font-size: 35px;
		span{
			font-size: 14px;
		}
	}
	.yield{
		text-align: center;		
	}
	p{
		line-height: 40px;
	}
	.produc_publisher{
		word-break:keep-all;           /* 不换行 */
		white-space:nowrap;          /* 不换行 */
		overflow:hidden;               /* 内容超出宽度时隐藏超出部分的内容 */
		text-overflow:ellipsis;  
	}
	.produc_details{
		width: 60%;
		height: 44px;
		color: #333333;
		border-radius: 44px;
		box-sizing: border-box;
		border: 1px solid #ccc;
		text-align: center;		
		line-height: 44px;
		margin: 20px auto 0;
		&:hover{
			border: 1px solid #0099ff;
			color: #0099ff;
		}
		&:active{
			color: #fff;
			background: #0099ff;
		}
	}

</style>