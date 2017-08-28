$(function(){
	
	// 获取今天 昨天支付金额
	paymoney();
	
	function paymoney(){
		$.get('json/paymoney.json').done(function (data){
			var todaypay=data.todaypay;
           	var yesterdayPay=data.yesterdayPay;
	    	var rise=data.rise;
	    	
	    	$('.yPay').text(yesterdayPay);
	    	$('.rise').text(rise);
	    	
	    	var payarr=[];
	    	for(var i = 0; i < todaypay.length; i ++){
	    	 	payarr[i]=todaypay.charAt(i);
	    	};
	    	$('.payList').children("[data-type=list]:not(.dn)").remove(); 
// 			console.log(payarr);
 			$.each(payarr, function(i,value) {
 				clone = $('.payList').children("[data-type=list].dn").clone(true).removeClass("dn");
//				console.log(value);
		      	clone.text(value);
		      	$('.payList').append(clone);
		      	if (value.isEnd!=0) {
		      		$('.box-continue').addClass('dn');
		      	}
 			});
 						
			
		});
		
//		获取时间  格式：2017-04-04 14:20:20
		var clockon = function () {
		    var now = new Date();
		    var year = now.getFullYear(); 
		    var month = now.getMonth();
		    var date = now.getDate();
		    var day = now.getDay();
		    var hour = now.getHours();
		    var minu = now.getMinutes();
		    var sec = now.getSeconds();
		    month = month + 1;
		    if (month < 10) month = "0" + month;
		    if (date < 10) date = "0" + date;
		    if (hour < 10) hour = "0" + hour;
		    if (minu < 10) minu = "0" + minu;
		    if (sec < 10) sec = "0" + sec;
		    var time = "";
		    time = year + "-" + month + "-" + date + " " + " " + hour + ":" + minu + ":" + sec;
		
		    $(".time").text(time);

		}
		var timer = setInterval(clockon, 1000);
				
	};
	
		//	全网成交情况
	proportion(); 
	function proportion(){

		$.get('json/proportion.json').done(function (data) {
			$('.pie03-proportion span').eq(1).text(data.proportion);
			$('.pie03-total span').eq(1).text(data.total);
		    
		    var ChartPie = echarts.init(document.getElementById('pie03'));
			
			var labelTop = {
			    normal : {
			        label : {
			            show : true,
			            position : 'center',
			            formatter: '{d}%',
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
			                baseline : 'top',
			                color:'#fffs'
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
			            show : false,
			            formatter: '{d}%',
//			            color:transparent,
			            position : 'center'
			        },
			        labelLine : {
			            show : false
			        }
			    }
			};
			
			var data0, data1;
			data0 = data.option[0];
			data0.itemStyle=labelBottom;
			data1 = data.option[1];
			data1.itemStyle=labelTop;
//			console.log(data0);
//			console.log(data1);
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
			            x: '0%', 
			            itemStyle : labelFromatter,
			            data : [
			            	data0,
			            	data1
			            ]
			        }
			    ]
			 }); 
			 
		});
	};
	    
	//	全网成交情况 折线	
	payment();
	function payment(){
		var seriesData,xAxisData;
		var ChartLine = echarts.init(document.getElementById('line01'));
		$.get('json/linePayment.json').done(function (data) {   
			
		    xAxisData= data.xAxis;
		    seriesData = data.data;
		    console.log(seriesData);

		    console.log(ChartLine);
		    ChartLine.setOption({  
//			    backgroundColor: '#394056',
			    title: {
			        text: '全年累计支付金额',
			        textStyle: {
			            fontWeight: 'normal',
			            fontSize: 16,
			            color: '#ead7b5'
			        },
			        left: '30%'
			    },
			    tooltip: {
			        trigger: 'axis',
			        axisPointer: {
			            lineStyle: {
			                color: '#57617B'
			            }
			        }
			    },
	
			    grid: {
			        left: '3%',
			        width:"90%",
			        height:'80%',
			        right: '4%',
			        bottom: '0%',
			        containLabel: true
			    },
			    xAxis: [{
			        type: 'category',
			        boundaryGap: false,
			        axisLine: {
			            lineStyle: {
			                color: '#57617B'
			            }
			        },
			        axisLabel: {
		                textStyle: {
		                    color: '#b1b2b8'
		                }
		            },
			        data: xAxisData
			    }],
			    yAxis: [{
			        type: 'value',
			        axisTick: {
			            show: false
			        },
			        axisLine: {
			            
			            lineStyle: {
			                color: '#57617B'
			            }
			        },
			        axisLabel: {
			            margin: 10,		           
			            textStyle: {
			                fontSize: 14,
			                color: '#b1b2b8'
			            }
			        },
			        splitLine: {
			            show: false
			        }
			    }],
			    series: [{
			        name: '',
			        type: 'line',
			        smooth: true,
			        lineStyle: {
			            normal: {
			                width: 1
			            }
			        },
			        areaStyle: {
			            normal: {
			                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
			                    offset: 0,
			                    color: 'rgba(75, 216, 323, 0.3)'
			                }, {
			                    offset: 0.8,
			                    color: 'rgba(75, 216, 323, 0)'
			                }], false),
			                shadowColor: 'rgba(0, 0, 0, 0.1)',
			                shadowBlur: 10
			            }
			        },
			        itemStyle: {
			            normal: {
			                color: 'rgb(137,189,27)'
			            }
			        },
			        data: seriesData
			    }]
			});
		
		});
		
			
			
			
		    
	};
		
	
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
			        radius: ['60%', '80%'],
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
	    
	//	渠道销售排行 pie3
	//饼图
	pie04();
	function pie04(){
		$.get('json/pie04.json').done(function (data) {                      
		    console.dir(data);  
		    
		    var data;
		    data=data;
		    
		    var dom = document.getElementById("pie04");
			var ChartPie = echarts.init(dom);
			ChartPie.setOption({  
				tooltip : {
			        trigger: 'item',
			        formatter: "{a} <br/>{b} : {c} ({d}%)"
			    },
			
			    calculable : true,
			    
			    series : [{ 
				        name:'访问来源',
				        type:'pie',
				        center: ['53%', '60%'],
				        radius: ['0', '65%'],
				        color: ['#669396', '#4bd8e8', '#dedee0', '#000'],
				        label: {
				            normal: {
				                formatter: '{b}\n{d}%'
				            },
				      
				        },
				        data:data
				    }
			    ] 
			 }); 
		  	
		  	var datalist= data;
		  	datalist.sort(function(a, b) {
			    return b.value - a.value;
			})
		  	$('.channellist').children("[data-type=list]:not(.dn)").remove(); 
		
			$.each(datalist,function(i,value){
	        	clone = $('.channellist').children("[data-type=list].dn").clone(true).removeClass("dn");
		
		      	clone.find(".number span").text(i+1);
		      	clone.find(".channel").text(value.name);
		      	clone.find(".money00").text(value.value);
		      	$('.channellist').append(clone);
		      	if (value.isEnd!=0) {
		      		$('.box-continue').addClass('dn');
		      	}
	      	});
		});  
	};

	function list(list,data){
		list.children("[data-type=list]:not(.dn)").remove(); 
		$.each(data,function(i,value){
	    	clone = list.children("[data-type=list].dn").clone(true).removeClass("dn");
	
	      	clone.find(".number span").text(i+1);
	      	clone.find(".channel").text(value.name);
	      	clone.find(".money00").text(value.value);
	      	list.append(clone);
	      	if (value.isEnd!=0) {
	      		$('.box-continue').addClass('dn');
	      	}
	  	});
	};
	
//	goodssort
	goodssort();
	function goodssort(){
		$.get('json/goodsSort.json').done(function (data) {  
			var datalist= data;
			datalist.sort(function(a, b) {
			    return b.value - a.value;
			});
			var goodsSortList01=$('.goodsSortList01');
			list(goodsSortList01,datalist);
		});
	};
	
//	shopsort
	shopsort();
	function shopsort(){
		$.get('json/shopSort.json').done(function (data) {  
			var datalist= data;
			datalist.sort(function(a, b) {
			    return b.value - a.value;
			});
			var shopSortList01=$('.shopSortList01');
			list(shopSortList01,datalist);
		});
	};	

//	map
	map();
	function map(){


		$.get('json/mapvalue.json').done(function (respon) {  
			var data=respon.data;
			var geoCoordMap=respon.geoCoordMap;
			var convertData = function (data) {
				
                var res = [];
                for (var i = 0; i < data.length; i++) {
                    var geoCoord = geoCoordMap[data[i].name];
                    if (geoCoord) {
                        res.push({
                            name: data[i].name,
                            value: geoCoord.concat(data[i].value)
                        });
                    }
                }
                return res;
            };
            var ChartMap = echarts.init(document.getElementById('map'));
            ChartMap.setOption({ 
                backgroundColor: '',
               
                tooltip : {
                    trigger: 'item'
                },
                legend: {
                    orient: 'vertical',
                    y: 'bottom',
                    x:'right',
                    data:['pm2.5'],
                    textStyle: {
                        color: '#fff'
                    }
                },
                geo: {
                    map: 'china',
			       	top:'42%',
			        right: '22%',
			        center: [117.98561551896913, 31.205000490896193],
			        zoom: 2.2,
                    label: {
                        emphasis: {
                            show: false
                        }
                    },
                    roam: true,
                    itemStyle: {
                        normal: {
                        	areaColor: 'rgba(75,216,232,.3)',
                            borderColor: '#111'
//                          areaColor: '#323c48',
//                          borderColor: '#111'
                        },
                        emphasis: {
//                          areaColor: '#2a333d'
                            areaColor: 'rgba(75,216,232,.3)'
                        }
                    }
                },
                series : [
                    {
                        name: '销售额',
                        type: 'scatter',
                        coordinateSystem: 'geo',
                        data: convertData(data),
                        symbolSize: function (val) {
                            return val[2] / 5;
                        },
                        label: {
                            normal: {
                                formatter: '{b}',
                                position: 'right',
                                show: false
                            },
                            emphasis: {
                                show: true
                            }
                        },
                        itemStyle: {
                            normal: {
//                              color: '#d1ea8d'
                                color: 'rgba(193,242,72,.7)'
                            }
                        }
                    },
                    {
                        name: 'Top 5',
                        type: 'effectScatter',
                        coordinateSystem: 'geo',
                        data: convertData(data.sort(function (a, b) {
                            return b.value - a.value;
                        }).slice(0, 6)),
                        symbolSize: function (val) {
                            return val[2] / 5;
                        },
                        showEffectOn: 'render',
                        rippleEffect: {
                            brushType: 'stroke'
                        },
                        hoverAnimation: true,
                        label: {
                            normal: {
                                formatter: '{b}',
                                position: 'right',
                                show: true
                            }
                        },
                        itemStyle: {
                            normal: {
                                color: 'rgba(232,248,116,.8)',
                                shadowBlur: 10,
                                shadowColor: '#333'
                            }
                        },
                        zlevel: 1
                    }
                ]
            });
		
		}); 
		       
		  
	};
	
});
