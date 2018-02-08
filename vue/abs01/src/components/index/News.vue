<template>
	<div class="news">
		<h2 class="news_title">最新资讯</h2>
		<Tabs active-key="key1" :animated="false">
	        <Tab-pane label="机构朋友圈" key="key1">
	        	<!--<NewCard></NewCard>-->
	        	<ul class="news_list">
	        		<li v-for="friendNew in friendNews">
	        			<div class="">
	        				<img src="../../images/new.jpg"/>
	        			</div>
	        			<h3 class="word_ellipsis">{{ friendNew.title }}</h3>
	        		</li>
	        	</ul>
	        </Tab-pane>
	        <Tab-pane label="行业资讯" key="key2">
	        	<ul class="news_list">
	        		<li v-for="information in informations">
	        			<div class="">
	        				<img src="../../images/new.jpg"/>
	        			</div>
	        			<h3 class="word_ellipsis">{{ information.title }}</h3>
	        		</li>
	        	</ul>
	        </Tab-pane>
	        <Tab-pane label="政策法规" key="key3">
	        	<ul class="news_list">
	        		<li v-for="law in laws">
	        			<div class="">
	        				<img src="../../images/new.jpg"/>
	        			</div>
	        			<h3 class="word_ellipsis">{{ law.title }}</h3>
	        		</li>
	        	</ul>
	        </Tab-pane>
	    </Tabs>
	</div>
</template>

<script>
//	import NewCard from './NewCard'
	export default {
    	name: 'News',
    	components: {
//			NewCard
		},
		data(){
            return{
				friendNews: [
			      	{ 
			      		src: '16,200.14',
			      		title: '标题标题标题标题标题标题标题标题标题标题'
			      	},
			      	{ 
			      		src: '16,200.14',
			      		title: '标题标题标题标题标'
			      	},
			      	{ 
			      		src: '16,200.14',
			      		title: '标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题'
			      	}
			    ],
			    informations: [
			      	{ 
			      		src: '16,200.14',
			      		title: 'informationsinformations'
			      	},
			      	{ 
			      		src: '16,200.14',
			      		title: 'informationsinformationsinformationsinformationsinformations'
			      	},
			      	{ 
			      		src: '16,200.14',
			      		title: 'informationsinformationsinformations'
			      	}
			    ],
			    laws: [
			      	{ 
			      		src: '16,200.14',
			      		title: 'lawslawslawslaws'
			      	},
			      	{ 
			      		src: '16,200.14',
			      		title: 'lawslawslawslawslawslawslawslawslawslawslawslawslawslaws'
			      	},
			      	{ 
			      		src: '16,200.14',
			      		title: 'lawslawlawslawlawslawlawslawlawslawlawslaw'
			      	}
			    ]

            }
            
       	}
  	}
</script>

<style lang="less">
	.news{
		width: 92.6%;
		margin: 0 auto;
		/*border-bottom: 1px solid #d0cdc7;*/
		padding-bottom: 25px;
		h2{
			height: 102px;
			line-height: 102px;
			color: #666;
			text-align: center;
			font-size: 26px;
			width: 92.6%;
			
		}
	}
	
	.news{
		width: 92.6%;		
		.ivu-tabs-bar{
			background: none;
		}
		.ivu-tabs-tab{
			border-bottom: 1px solid #ebebeb;
			padding-bottom: 1px;
			line-height: 20px;
			width: 110px;
			text-align: center;		
			font-family: 微软雅黑;
			font-size: 12px;
			color: #666666;
			margin-bottom: 14px;
			/*padding-bottom: 5px;*/
			padding-bottom: 1px;
			/*border-bottom: 2px solid #fff;*/
			border-bottom: 1px solid #ebebeb;
		}
		.ivu-tabs-nav .ivu-tabs-tab.ivu-tabs-tab-active{
			
			border-bottom: 2px solid #2d8cf0;
			color: #333333;
		}
		.ivu-tabs-bar{
			border-bottom: none !important;
			border-bottom-color: transparent;
		}
		.ivu-tabs-nav .ivu-tabs-tab{
		    color: #989898;
		    &:hover{
		    	color: #333333;
		    }
		}
		.ivu-tabs-ink-bar{
			background: #fff;
		}
	}
	.news .ivu-tabs-bar .ivu-tabs-nav-scroll{
		text-align: center;
	}
	.news .ivu-tabs-bar .ivu-tabs-nav{
		float: none;
		position: relative;
		
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