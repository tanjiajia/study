<template>
	<div class="produc">
		<h2>在售产品</h2>
		<PrcductCard></PrcductCard>
		
		<h2>已成立产品</h2>
		<PrcductCard></PrcductCard>
	</div>
</template>

<script>

	export default {
    	name: 'Product',
    	components: {
//  		Banner
		}
  	}
</script>

<style>
	.product{
		width: 92.6%;
		background: #f4f4f4;
		padding: 0 40px 32px;
	}
</style>