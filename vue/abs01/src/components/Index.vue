<template>
	<div class="">
		<TopNav></TopNav>
		<!-- <IndexBody></IndexBody> -->
		<Foot></Foot>
	</div>
</template>

<script>
	import TopNav from './header/TopNav'
	import IndexBody from './index/IndexBody'
	import Foot from './footer/Foot'


  	export default {
    	name: 'Index',
    	components: {
    		TopNav,
    		Foot
		}
  	}
</script>
<style>
	
</style>