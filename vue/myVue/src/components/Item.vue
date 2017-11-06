<template>
  	<div>
    	<itemcontainer father-component="item"></itemcontainer>
  	</div>
</template>

<script>
import Itemcontainer from './itemcontainer'

export default {
	name: 'item',
  	components: {
   		Itemcontainer
  	},
  	created(){
  		this.$store.commit('REMBER_TIME');
  	}
}

</script>

<style lang="less">
    

</style>
