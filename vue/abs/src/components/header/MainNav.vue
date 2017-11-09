<template>
	<div class="main">
		
		<div class="nav">
			<div class="logo fl">
				<img src="../../images/logo.jpg"/>
			</div>
			
			<div class="fr">
				<img class="fl userpic" src="../../images/tit.jpg"/>
				<div class="fl username">
					{{ mes }}
					<Icon type="arrow-down-b"></Icon>
				</div>
			</div>
		</div>
		<div class="navlist">
			<router-link to="/IndexBody" class=' router-link-active'>首页</router-link>
			<router-link to="/Investment" class=''>投资专区</router-link>
			<router-link to="/Information" class=''>信息大厅</router-link>
			<router-link to="/Chain" class=''>区块链</router-link>
		</div>
		
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
    		Investment
		},
        data(){
            return{
               
				mes:' junuoliang198'

            }
            
        },
        methods: {
		
		}

    }
	
</script>

<style lang="less" scoped>
	.main{
		position: relative;
	}
	.nav{
		height: 70px;
		padding-right: 30px;
		
	}
	.logo{
		width: 150px;
		height: 70px;
		img{
			margin: 14px auto;
		}
	}
	.userpic{
		margin: 14px 15px;
	}
	
	.username{
		line-height: 70px;
	}
	.navlist{
		position: absolute;
		top: 0;
		left: 50%;
		margin-left: -268px;
	}
	.navlist a{
		float: left;
		line-height: 70px;
		width: 134px;
		text-align: center;		
		font-family: 微软雅黑;
		font-size: 18px;
		color: #666666;
		
	}

	.navlis a.router-link-active{
		color: #000027 !important;
		font-weight: bold;
	}
</style>