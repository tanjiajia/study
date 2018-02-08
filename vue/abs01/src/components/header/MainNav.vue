<template>
	<div class="main">
		<div class="nav">

			<div class="logo fl" @click="returnHome">
				<router-link to="/IndexBody" class=''><img src="../../images/logo.jpg"/></router-link>
			</div>
			
			<div class="fr usermessage">
				<img class="fl userpic" src="../../images/tit.jpg"/>
				<div class="fl username">
					{{ mes }}
					<Icon type="arrow-down-b"></Icon>
				</div>
				<div class="dropdown">
					<div class="management">
						账户管理
					</div>
					<div class="">
						退出
					</div>
				</div>
			</div>
		</div>
		
		<ul class="navlist">
			<li 
				v-for="(navList,index) in navLists" 
				:class="{ 'active':ind === index }"
				@click="changeStyle(index)">
				<router-link :to="navList.url">{{ navList.title }}</router-link>
			</li>
		</ul>
		
		<!--<div class="navlist">
			<router-link to="/IndexBody" class='active'>首页</router-link>
			<router-link to="/Investment" class=''>投资专区</router-link>
			<router-link to="/Information" class=''>信息大厅</router-link>
			<router-link to="/Chain" class=''>区块链</router-link>
		</div>-->
		
		<router-view></router-view>

	</div>
	
</template>

<script>
	import IndexBody from '../index/IndexBody'
	import Investment from '../investment/Investment'
	import Information from '../information/Information'
	import Chain from '../chain/Chain'
	export default{
    	name: 'MainNav',
    	components: {
    		IndexBody,
    		Investment,
    		Information,
    		Chain
		},
        data(){
            return{
               	mes:' junuoliang198',
				navLists:[
					{
						title:'首页',url:'/IndexBody'
					},
					{
						title:'投资专区',url:'/Investment'
					},
					{
						title:'信息大厅',url:'/Information'
					},
					{
						title:'区块链',url:'/Chain'
					}
				],
				ind:0

            }
            
        },
        mounted(){
        	this.changeStyle(ind);
        },
        methods: {
			changeStyle: function (index){
				this.ind = index;
				
			},
			returnHome: function(e){
				this.ind = 0;
			}
		}

    }
	
</script>

<style lang="less" >
	.main{
		position: relative;
	}
	.nav{
		width: 92.6%;
		height: 70px;
		padding-right: 30px;
		position: relative;
		.usermessage{
			position: absolute;
			z-index: 999;
			right: 0;
			position: relative;
			&:hover{
				.dropdown{
					display: block;
				}
			}
			.dropdown{
				display: none;
				position: absolute;				
				top: 70px;
				border: 1px solid #efefef;
				border-radius: 5px;
				-webkit-box-shadow: 0 0 2px 2px #efefef; 
				-moz-box-shadow: 0 0 2px 2px #efefef; 
				box-shadow: 0 0 2px 2px #efefef; 
				background: #fff;
				left: 50%;
				margin-left: -50px;
				padding: 4px;
				width: 116px;
				padding-top: 5px;
				/*box-sizing: border-box;*/
				div{
					text-align: center;
					width: 100%;
					line-height: 35px;
				}
				.management{
					border-bottom: 1px solid #d9d9d9;
				}
				&:before{
					content: '';
					position: absolute;
					top: -6px;
					left: 50%;
					margin-left: -6px;
					width: 10px;
					height:10px;
					background: #fff;
					border-top: 1px solid #efefef;
					border-left: 1px solid #efefef;
					transform: rotate(45deg);
					z-index: 999;
					-webkit-box-shadow: 0 0 2px 2px #efefef; 
					-moz-box-shadow: 0 0 2px 2px #efefef; 
					box-shadow: -2px -2px 1px 1px #efefef;
				}
			}
		}
	}
	.logo{
		/*position: absolute;
		z-index: 999;*/
		width: 150px;
		height: 70px;
		img{
			margin: 14px auto;
		}
	}
	.userpic{
		margin: 14px 15px 14px 0;
	}
	
	.username{
		line-height: 70px;
		font-size: 16px;
		color: #333;
		
	}
	/*.navlist{
		position: relative;
		top: -70px;
	}*/
	
	/*.navlist{
		width: 100%;	
		position: relative;
		top: -70px;	
		.ivu-tabs-bar{
			background: none;
		}
		.ivu-tabs-bar{
			margin-bottom: 0;
		}
		.ivu-tabs-tab{
			line-height: 60px;
			width: 134px;
			text-align: center;		
			font-family: 微软雅黑;
			font-size: 18px;
			color: #666666;
		}
		.ivu-tabs-nav .ivu-tabs-tab.ivu-tabs-tab-active{
			color: #000027;
			font-weight: bold;
		}
		.ivu-tabs-bar{
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
	.navlist .ivu-tabs-bar .ivu-tabs-nav-scroll{
		text-align: center;
	}
	.navlist .ivu-tabs-bar .ivu-tabs-nav{
		float: none;
		position: relative;
		
	}*/
	
	.navlist{
		position: absolute;
		top: 0;
		left: 50%;
		margin-left: -268px;
		li{
			float: left;
		}
	}
	.navlist a{
		float: left;
		line-height: 70px;
		width: 134px;
		text-align: center;		
		font-family: 微软雅黑;
		font-size: 18px;
		color: #666666;
		&:hover{
			color: #000000;
			/*font-weight: bold;*/
		}
	}

	.navlist li.active a{
		color: #000000;
		/*font-weight: bold;*/
	}

</style>