<template>
	<div class="">
		<Banner></Banner>

		<div class="product">
			<!--在售产品-->
			<div class="sell_product">
				<div class="title">
					<h2>在售产品</h2>
					<router-link to="/Investment" class=''>
						<span class="more">more<Icon type="chevron-right"></Icon></span>
					</router-link>
					
				</div>
				
				<PrcductCard></PrcductCard>
				<!--在售产品-->
				<div class="title">
					<h2>已成立产品</h2>
					<router-link to="/Investment" class=''>
						<span class="more">more<Icon type="chevron-right"></Icon></span>
					</router-link>
					
				</div>
				
				<PrcductCardList></PrcductCardList>
			</div>
		</div>
		
		<!--市场数据-->
		<Marketdata></Marketdata>
		<News></News>
		<Partner></Partner>
	</div>
</template>

<script>
	import Banner from './Banner'
	import PrcductCard from './PrcductCard'
	import PrcductCardList from './PrcductCardList'
	import Marketdata from './Marketdata'
	import News from './News'
	import Partner from './Partner'


  	export default {
    	name: 'IndexBody',
    	components: {
 			Banner,
 			PrcductCard,
 			PrcductCardList,
 			Marketdata,
 			News,
 			Partner
		}
		
  	}
</script>

<style lang="less" scoped>
	.product{
		width: 92.6%;
		background: #f4f4f4;
		padding: 0 40px 32px;
		margin: 0 auto;
	}
	h2{
		height: 102px;
		line-height: 102px;
		color: #666;
		text-align: center;
		font-size: 26px;
	}
	.title{
		position: relative;
		color: #0099ff;
		font-size: 14px;
		.more{
			position: absolute;
			right: 40px;
			top: 50px;
			.ivu-icon{
				transform: scale(.8);
				margin-left: 2px;
			}
		}
	}
</style>