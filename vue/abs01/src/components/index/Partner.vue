<template>
	<div class="parnter">
		<h2 class="news_title">合作伙伴</h2>
		<Carousel
	        :autoplay="setting.autoplay"
	        :autoplay-speed="setting.autoplaySpeed"
	        :dots="setting.dots"
	        :trigger="setting.trigger"
	        :arrow="setting.arrow">
	        <Carousel-item>
	            <div class="demo-carousel">
	            	<img src="../../images/parnterLogo.jpg"/>
	            	<img src="../../images/parnterLogo.jpg"/>
	            	<img src="../../images/parnterLogo.jpg"/>
	            	<img src="../../images/parnterLogo.jpg"/>
	            	<img src="../../images/parnterLogo.jpg"/>
	            	<img src="../../images/parnterLogo.jpg"/>
	            </div>
	        </Carousel-item>
	        <Carousel-item>
	            <div class="demo-carousel">
	            	<img src="../../images/parnterLogo.jpg"/>
	            	<img src="../../images/parnterLogo.jpg"/>
	            	<img src="../../images/parnterLogo.jpg"/>
	            	<img src="../../images/parnterLogo.jpg"/>
	            	<img src="../../images/parnterLogo.jpg"/>
	            	<img src="../../images/parnterLogo.jpg"/>
	            </div>
	        </Carousel-item>
	        <Carousel-item>
	            <div class="demo-carousel">
	            	<img src="../../images/parnterLogo.jpg"/>
	            	<img src="../../images/parnterLogo.jpg"/>
	            	<img src="../../images/parnterLogo.jpg"/>
	            	<img src="../../images/parnterLogo.jpg"/>
	            	<img src="../../images/parnterLogo.jpg"/>
	            	<img src="../../images/parnterLogo.jpg"/>
	            </div>
	        </Carousel-item>
	        
	    </Carousel>
	</div>
</template>

<script>
//	import NewCard from './NewCard'
	export default {
    	name: 'Partner',
    	components: {
//			NewCard
		},
		data(){
            return{
				

            }
            
       	}
  	}
</script>

<style lang="less">
	.parnter{
		width: 84%;
		margin: 0 auto;
		h2{
			height: 170px;
			line-height: 170px;
			color: #666;
			text-align: center;
			font-size: 26px;
			width: 92.6%;
			
		}
		.ivu-carousel-dots-inside{
			display: none;
		}
		.ivu-carousel-arrow.right {
		    right: -60px;
		}
		.ivu-carousel-arrow.left {
		    left: -60px;
		}
		/*.ivu-carousel-arrow{
			background-color: #fff;
			
		}
		.ivu-carousel-arrow:hover:{
				background-color: #fff;
			}*/
	}
	
	.demo-carousel{
		display:box;
    	display:-webkit-box;
    	justify-content:space-between;
    	img{
    		width: 165px;
    		height: 112px;
    	}
	}
	.news_list{
		display:box;
    	display:-webkit-box;
    	justify-content:space-between;
    	font-family: 微软雅黑;
    	color: #333;
    	li{
    		width: 29%;
    	}
    	img{
    		width: 100%;
    	}
    	h3{
    		height: 50px;
    		line-height: 50px;
    		font-size: 14px;
    		background: #858585;
    		padding: 0 12px;
    	}
	}
</style>