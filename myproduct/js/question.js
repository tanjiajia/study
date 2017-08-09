$(function(){
	var flag = true;
	var token= localStorage.getItem('token');
	var answerNum,questionCode,answerCode,optionCode;
	getQuestion();
	answerNum= localStorage.getItem('answerNum');
	function getQuestion(){
		$.ajax({
	      	url : "http://192.168.3.19:8080/rest/v34/question",
	      	datatype  : 'json',
	      	data: {
	      		token:token,
	      		answerNum:answerNum
	      	},
	     	type: 'get',
	      	success : function(data){
	      		console.log("成功");	
	           	var resCode=data.resCode;
//	           	console.log(resCode);	
	           	questionCode = data.code;
//	           	answerNum = data.answerNum;
	           	console.log(answerNum);
//	           	var setAnswerNum = localStorage.setItem('answerNum',answerNum);
		    	if (resCode=="0000") {
//		    		console.log("成功");	
		    		var data = data;
		    		answerNum = data.answerNum;
	//				
					    $(".title").text(data.title);//输出标题
					    questionList = $('#questionList');
					    questionList.children("li").not(".dn").remove();
					    var clone = null;
//					    var questionOptions = [];
					    $.each(data.optionlist,function(i, value){
					    	optionCode = value.code;
					      	clone = questionList.children("[data-type=list].dn").clone(true).removeClass("dn");
					
					      	clone.find("[data-type=letter]").text(value.code);//A,B,C,D
					      	clone.find("[data-type=answer]").text(value.name);//答案
					      	questionList.append(clone);
					    })
				
	
				}else if(resCode=="6666"){
			    	var resMsg=data.resMsg;
//					alert(resMsg);
					window.location.href="./login.html";
				}else{
			    	var resMsg=data.resMsg;
			    	alert(resMsg);
				}
  	
	
	      	},
	      	error : function(data){
//	        	alert('getQuestion失败');
				var resMsg=data.resMsg;
			    	alert(resMsg);
	      	}
	    })
	};
	

	
	var questionAnswer = $('.question_list li'); 
	var index;
	var optionCode01;
	questionAnswer.click(function(){
		if (flag == true) {
//			var optionCode01;
//			optionCode01=$(this).children('.letter01').text();
			optionCode01=$(this).find('.letter01').text();

			console.log(optionCode01);
			console.log($(this).children('.letter01'));
			index = $(this).index();
			$(this).children('.text').css('background-image','url(../images/questionName.png)');
			$('.submit').css('background-image','url(../images/submitRed.png)');
//			optionCode = $(this).children('.text [data-type=letter]').text();

		}
		flag = false;
			
		
	});
	
	$('.submit').click(function(){
		
//		questionAnswer.off('click');
		$.ajax({
	      	url : "http://192.168.3.19:8080/rest/v34/add/answer",
	      	datatype  : 'json',
	      	data: {
	      		token:token,
	      		answerNum:answerNum,
	      		questionCode:questionCode,
	      		optionCode:optionCode01
	      	},
	     	type: 'get',
	      	success : function(data){
//	      		console.log("ajax成功");	
	           	var resCode=data.resCode;
//	           	var optionCode=data.optionCode;
//	           	console.log(resCode);	
		    	if (resCode=="0000") {
		    		
//		    		console.log(questionCode);	
		    		var data = data;
		    		var isNext=data.isNext;
		    		if (optionCode == data.optionCode) {
		    			$('.question_list li .text').eq(index).css('background-image','url(../images/questionName_red.png)');
		    		} else{
		    			$('.question_list li .text').eq(index).css('background-image','url(../images/questionName_error.png)');
//		    			var optionlist = [1,2,3,4];
//		    			optionlist.push($('.question_list li [data-type=letter]').text());
		    			/*$.each(optionlist,function(i, value){
					      	if (value == optionCode) {
					      		$('.question_list li .text').eq(i).css('background-image','url(../images/questionName_ZQred.png)');
					      	}
					    })*/
//		    			alert('正确答案')
		    		};
		    		
		    		if (isNext == 1) {
		    			$('.submit').addClass('dn');
						
		    			setTimeout(next(),2000);
						function next(){
							$('.NextquestionBtn').removeClass('dn');
							$('.NextquestionBtn').click(function(){
								flag = true;
//								questionAnswer.on('click');
//								flag = false;
								$('.submit').removeClass('dn');
								$('.submit').css('background-image','url(../images/submit.png)');
								$('.NextquestionBtn').addClass('dn');
								getQuestion();
							})
							
						};
						
		    		} else{
		    			window.location.href = './index.html'
		    		}
					
					
									
				}else if(resCode=="6666"){
			    	var resMsg=data.resMsg;
//					alert(resMsg);
					window.location.href="./login.html";
				}else{
					var resMsg=data.resMsg;
			    	alert(resMsg);
				}

	      	},
	      	error : function(data){
	      		var resMsg=data.resMsg;
			    alert(resMsg);
	        	alert('answer 失败');
	      	}
	    })
		
		
//		$('.NextquestionBtn')
		
	})
	
	
	
});
