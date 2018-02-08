<template>
	<div class="chart" ref="chartOne" :style="{width: '100%', height: '300px'}"></div>
</template>

<script>
	import echarts from 'echarts'
	export default {
    	name: 'Echarsline',
    	components: {
    		
		},
		data(){
            return{
			
            }
            
      	},
      	methods:{
	      /*创建图表一*/
	      createChartOne(){
	        let chartOne=echarts.init(this.$refs.chartOne);
	
	        chartOne.setOption({
	          	title: {
			        text: 'XXX趋势'
			    },
			    tooltip: {
			        trigger: 'axis'
			    },
			    legend: {
			        data:['AAA','AA']
			    },
			    grid: {
			        left: '3%',
			        right: '3%',
			        bottom: '3%',
			        containLabel: true
			    },
			    toolbox: {
			        feature: {
			            saveAsImage: {}
			        }
			    },
			    xAxis: {
			        type: 'category',
			        boundaryGap: false,
			        data: ['2017.01','2017.02','2017.03','2017.04','2017.05','2017.06','2017.07','2017.08','2017.09','2017.10','2017.11','2017.12']
			    },
			    yAxis: {
			        type: 'value',
			        splitLine: {
			            show: false
			        }
			    },
			    series: [
			        {
			            name:'比例',
			            type:'line',
			            stack: '比例',
			           	color: ['#343535','#00baf5'],
			            data:[120, 132, 101, 134, 90, 230, 210, 132, 101, 134, 90, 230]
			        },
			        
			        {
			            name:'比例',
			            type:'line',
			            stack: '比例',
			            color: ['#9f9b97','#7d8ac2'],
			            data:[820, 932, 901, 934, 1290, 1330, 1320, 932, 901, 934, 1290, 1330]
			        }
			    ]
	        })
	      }
	    },
	    mounted(){
	      this.createChartOne();
	    }
  	}
</script>

<style>
</style>