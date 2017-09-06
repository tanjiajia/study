$(function(){
		//	全网成交情况
	proportion(); 
	function proportion(){
		var ChartPie = echarts.init(document.getElementById('pie03'));
		
		var labelTop = {
		    normal : {
		        label : {
		            show : false,
		            position : 'center',
		            formatter : '{b}',
		            textStyle: {
		                baseline : 'bottom'
		            }
		        },
		        labelLine : {
		            show : false
		        }
		    }
		};
		var labelFromatter = {
		    normal : {
		        label : {
		        	position : 'center',
//		        	show : false,
		            formatter : function (params){
		                return 100 - params.value + '%'
		            },
		            textStyle: {
		                baseline : 'top'
		            }
		        },
		        labelLine : {
		            show : false
		        }
		    },
		}
		var labelBottom = {
		    normal : {
		        color: '#ccc',
		        label : {
		            show : true,
		            position : 'center'
		        },
		        labelLine : {
		            show : false
		        }
		    }
		};
		

		ChartPie.setOption({  
			tooltip : {
		        trigger: 'item',
		        formatter: "{b} :<br/> {c} ({d}%)"
		    },
			series : [
		        {
		            type : 'pie',
		            center: ['50%', '50%'],
			        radius: ['70%', '75%'],
		            startAngle:[45],
		            color: ['#4bd8e8', '#FFF'],
		            x: '0%', // for funnel
		            itemStyle : labelFromatter,
		            data : [
		                {name:'未完成', value:75,itemStyle:labelBottom},
		                {name:'完成率', value:25,itemStyle:labelTop}
		            ]
		        }
		    ]
		 }); 
		
		/*ChartPie.setOption({  

			series : [
		         {
		            center: ['50%', '50%'],
		            radius: ['70%', '75%'],
		            startAngle:[135],
		           
		            type : 'pie',
		            itemStyle: {
		                normal: {
		                    label: {
		                        show: true,
		                        textStyle: {
		                            fontSize: 15
		                        },
		                        position: "center"
		                    },
		                    labelLine: {
		                        show: false
		                    },
		                    color: "#FFF",
		                    borderColor: "#4bd8e8",
		                    borderWidth: 5
		                },
		                emphasis: {
		                    label: {
		                        textStyle: {
		                            fontSize: 15,
		                            fontWeight: "bold"
		                        }
		                    },
		                    color: "#Fff",
		                    borderColor: "#4bd8e8",
		                    borderWidth: 2
		                }
		            },
		            data: [
		                {
		                    "value": 13,
		                    "name": "1.3%"
		                },
		                {
		                    "name": " ",
		                    "value": 87,
		                    "itemStyle": {
		                        "normal": {
		                            "label": {
		                                "show": false
		                            },
		                            "labelLine": {
		                                "show": false
		                            },
		                            "color": "#fff",
		                            "borderColor": "#4bd8e8",
		                            "borderWidth": 0
		                        },
		                        "emphasis": {
		                            "color": "#fff",
		                            "borderColor": "#4bd8e8",
		                            "borderWidth": 0
		                        }
		                    }
		                }
		            ]
		        }
		    ]
		 }); */
		 
		$.get('json/proportion.json').done(function (data) {
			$('.pie03-proportion span').eq(1).text(data.proportion);
			$('.pie03-total span').eq(1).text(data.total);
	//	    console.dir(data);  
		    // 填入数据  
		   /* ChartPie.setOption({  
		        series: [{ //饼图（空心）
			        name:'',
			        type:'pie',
			        
		            data : [
//		                {name:data.name, value:data.value}
		            ]
		        }]  
		    }); */ 
		});
	}
	    
		
		
	
	//	成交用户分析
	ChartPie(); 
	function ChartPie(){

		var ChartPie = echarts.init(document.getElementById('pie01'));
		var itemStyle = {
		    normal: {
		        
		        borderWidth: 0.5,
		        borderColor: '#4bd8e8'
		    }
		};
		ChartPie.setOption({  
			tooltip : {
		        trigger: 'item',
		        formatter: "{b} :<br/> {c} ({d}%)"
		    },

		    calculable : true,
		    series : [{ 
			        name:'访问来源',
			        type:'pie',
					startAngle:[190],
//			        avoidLabelOverlap: false,
			        center: ['50%', '50%'],
			        radius: ['0%', '80%'],
			        color: ['#00001c', '#4bd8e8'],
			        label: {
		                normal: {
		                    show: true,
		                    formatter: '{d}%',
			                position: 'inside'
		                },
		                emphasis: {
		                    show: false
		                }
		           },
		            itemStyle: itemStyle,
			        data:[]
			    }
		    ] 
		 }); 
		$.get('json/pie01.json').done(function (data) {                      
		    console.dir(data);  

			$('.pie01-pc span').eq(0).text(data[0].name);
			$('.pie01-pc span').eq(1).text(data[0].value);
			$('.pie01-wireless span').eq(0).text(data[1].name);
			$('.pie01-wireless span').eq(1).text(data[1].value);
		    // 填入数据  
		    ChartPie.setOption({  
		        series: [{ 
			        type:'pie',

		            data: data 
		        }]  
		    });  
		}); 
	};
	
	//	渠道销售排行
	Channelsales(); 
	function Channelsales(){
		var ChartPie = echarts.init(document.getElementById('pie02'));

		ChartPie.setOption({  

			tooltip : {
		        trigger: 'item',
		        formatter: "{b} : <br/>{c} ({d}%)"
		    },
		    /*toolbox: {
			    show : true,
			    feature : {
			        mark : {show: true},
			        dataView : {show: true, readOnly: false},
			        magicType : {
			            show: true,
			            type: ['pie', 'funnel']
			        },
			        restore : {show: true},
			        saveAsImage : {show: true}
			    }
		    },*/
		    calculable : true,
		    
		    series : [{ //饼图（空心）
			        name:'',
			        type:'pie',
		        	
			        center: ['50%', '50%'],
			        radius: ['65%', '85%'],
			        color: ['#4bd8e8', '#FFF'],
			        label: {
			            normal: {
			            	
			                formatter: '{b}\n{d}%',
			                position: 'inside'
			            },
			      
			        },
			        labelLine:{
			        	normal: {
			        		show:false
			           },
			        },
			        data:[]
			    }
		    ] 
		 }); 
		$.get('json/pie02.json').done(function (data) {                      
	//	    console.dir(data);  
		    // 填入数据  
		    ChartPie.setOption({  
		        series: [{ //饼图（空心）
			        name:'',
			        type:'pie',
		//	        center: ['80%', '25%'],
			        label: {
			            normal: {
			                formatter: '{b}\n{d}%'
			            },
			      
			        },
		            data: data 
		        }]  
		    });  
		}); 
	}
	    
		
	
	
});
