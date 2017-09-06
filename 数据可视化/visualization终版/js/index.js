$(function(){
	
	// 获取今天 昨天支付金额
	paymoney();
	
	function paymoney(){
		$.get('json/paymoney.json').done(function (data){
			var todaypay=data.todaypay;
           	var yesterdayPay=data.yesterdayPay;
	    	var rise=data.rise;
	    	todaypay = toThousands(todaypay);
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
		      	clone.text(value);
		      	$('.payList').append(clone);
		      	if(value ==','){
// 					clone.css('background','none');
 					clone.css({
 						"background":"none",
 						"margin":"0 0 0 0px",
						"width":'auto',
 						"height":'auto'
 					});
 				};
				if(value =='0'){
 					clone.css("color","#fff")
 				};	      	
 			});
 			
 			
			
		});
				
		function toThousands(num) {  
		    var num = (num || 0).toString(), result = '';  
		    while (num.length > 3) {  
		        result = ',' + num.slice(-3) + result;  
		        num = num.slice(0, num.length - 3);  
		    }  
		    if (num) { result = num + result; }  
		    return result;  
		};


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
		    time = year + "年" + month + "月" + date + "日" + " " + hour + ":" + minu + ":" + sec;
		
		    $(".time").text(time);

		}
		var timer = setInterval(clockon, 1000);
				
	};
	
		//	目标达成率
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
				tooltip: {
					trigger: 'item',
					formatter: "{a} <br/>{b}: {c} ({d}%)"
				},
				legend: {
					orient: 'vertical',
					x: 'left',
					data:['无','达成率'],
					textStyle: {
						color: 'rgba(255, 255, 255, 0.3)',
					}
				},
				series: [
					{
						name:'访问来源',
						type:'pie',
						radius: ['50%', '70%'],
						center: ['50%', '60%'],
						avoidLabelOverlap: false,
						label: {
							normal: {
								show: false,
								position: 'center',
								textStyle: {
									color: 'rgba(255, 255, 255, 0.3)'
								}
							},
							emphasis: {
								show: true,
								textStyle: {
									fontSize: '12',
									fontWeight: 'nomal'
								}
							}
						},
						labelLine: {
							normal: {
								show: false
							}
						},
						data:[
							{value:235, name:'无',
							itemStyle: {
								normal: {
									color: '#2f4554'
								}
							}},
							{value:380, name:'达成率',
							itemStyle: {
								normal: {
									color: '#ff9b28'
								}
							}},
						]
					}
				]
			 }); 
			 
		});
	};
	    
	//	无线端交易占比	
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
		    	title : {
			        text: '无线端交易占比',
			        subtext: '易恒各店铺访问实时情况',
			        textStyle: {
						color: '#fff',
						fontSize:16,
						fontFamily: 'Microsoft YaHei'
							
					},
					subtextStyle:{
						color: '#d9dee8',
						fontSize:10,
						fontFamily: 'Microsoft YaHei'
					},
			        x:'center',
			        top:'0'
			    },
				tooltip : {
					trigger: 'item',
					formatter: "{a} <br/>{b} : {c} ({d}%)"
				},
				
				series : [
					{
						name: '访问来源',
						type: 'pie',
						radius : '65%',
						center: ['50%', '65%'],
						label: {
			                normal: {
			                    position: 'inner',
			                    formatter: "{b} {c}"
			                }
			            },
			            labelLine: {
			                normal: {
			                    show: false
			                }
			            },
						data:[
							{value:205, name:'无线',
							itemStyle: {
									normal: {
										color: '#cc1529'
									}
							}},
							{value:310, name:'PC',
							itemStyle: {
									normal: {
										color: '#ff6527'
									}
							}},
						],
						itemStyle: {
							emphasis: {
								shadowBlur: 10,
								shadowOffsetX: 0,
								shadowColor: 'rgba(0, 0, 0, 0.5)'
							}
						}
					}
				]
			});
		
		});
				    
	};
		
	
	//	店铺商品榜 交易
	channellist();
	function channellist(){
		$.get('json/pie04.json').done(function (data) {                      
//		    console.dir(data);  		    
		    var data;
		    data=data;

		  	var datalist= data;
		  	datalist.sort(function(a, b) {
			    return b.value - a.value;
			})
		  	$('.channellist').children("[data-type=list]:not(.dn)").remove(); 
		
			$.each(datalist,function(i,value){
	        	clone = $('.channellist').children("[data-type=list].dn").clone(true).removeClass("dn");		

		      	clone.find(".product").text(value.name);
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
		$.get('json/shop.json').done(function (data) {  
			var datalist= data;
			datalist.sort(function(a, b) {
			    return b.value - a.value;
			});
			var goodsSortList01=$('.goodsSortList01');
			goodsSortList01.children("[data-type=list]:not(.dn)").remove(); 
			$.each(data,function(i,value){
		    	clone = goodsSortList01.children("[data-type=list].dn").clone(true).removeClass("dn");
		
		      	clone.find(".number span").text(i+1);
//		      	clone.find(".shopName").text(value.name);
		      	
		      	goodsSortList01.append(clone);
		      	
		  	});
		});
	};

//	shopSortList
	shopSort();
	function shopSort(){
		$.get('json/shop.json').done(function (data) {  
			var datalist= data;
			datalist.sort(function(a, b) {
			    return b.value - a.value;
			});
			var shopSortList01=$('.shopSortList01');
			shopSortList01.children("[data-type=list]:not(.dn)").remove(); 
			$.each(data,function(i,value){
		    	clone = shopSortList01.children("[data-type=list].dn").clone(true).removeClass("dn");
		
		      	clone.find(".number span").text(i+1);
//		      	clone.find(".shopName").text(value.name);
		      	
		      	shopSortList01.append(clone);
		      	
		  	});
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
