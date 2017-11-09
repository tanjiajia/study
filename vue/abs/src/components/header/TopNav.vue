<template>
	<div class="">
		<div class="top_nav">
			<div class="fl top_nav_l">
				{{ mes }}
			</div>
			<div class="fr top_nav_r">
				<ul class="top_nav_list">
					<li><a href="javascript:;">注册</a></li>
					<li><a href="javascript:;">登陆</a></li>
					<li><a href="javascript:;">金融机构一账通</a></li>
				</ul>
			</div>
		</div>
		<MainNav></MainNav>
	</div>
</template>

<script>
	import MainNav from './MainNav'
    export default{
    	name: 'TopNav',
        data(){
            return{
               mes:' 欢迎来到ABS生态圈'

            }
        },
        components: {
    		MainNav
		}

    }
    
	
</script>

<style>
	.top_nav{
		width: 100%;
		height: 25px;
		background: #f7f6f5;
		padding: 0 20px;
		line-height: 25px;
		font-family: 微软雅黑;
		font-size: 12px;
	}
	
	.top_nav_list li{
		float: left;
	}
	.top_nav_list a{
		/*display: block;*/
		color: #999999;
	}
	.top_nav_list li:nth-child(1) a{
		padding: 0 34px;
		border-right: #797671 solid 1px;
	}
	.top_nav_list li:nth-child(2) a{
		padding: 0 28px;
		border-right: #797671 solid 1px;
	}
	.top_nav_list li:nth-child(3) a{
		padding: 0 10px;
	}
</style>