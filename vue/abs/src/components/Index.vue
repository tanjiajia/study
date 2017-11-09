<template>
	<div class="">
		<TopNav></TopNav>
		<!-- <IndexBody></IndexBody> -->
	</div>
</template>

<script>
	import TopNav from './header/TopNav'
	import IndexBody from './index/IndexBody'


  	export default {
    	name: 'Index',
    	components: {
    		TopNav,
    		IndexBody
		}
  	}
</script>
<style>
	.demo-carousel{
		background: #666666;
		width: 100%;
		height: 410px;
	}
</style>