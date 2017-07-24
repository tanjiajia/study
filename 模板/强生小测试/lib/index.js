$(function(){
	
	var index=0;
//	var questionList;
	var count=0;
	var answer = ['D','A','A'];
	var flag = false;
	// 开始闯关
	$('#start').click(function() {
		MainSwiper.slideTo(1);
		nextQuestion("#title","#questionList");
	})
	
	$('.NextquestionBtn').click(function() {
		if (flag == true) {
			index++;
			MainSwiper.slideTo(index+1);
			if (index<=2) {
				nextQuestion("#title0"+index+"","#questionList0"+index+"");
	//			console.log(index);
			} else{
				$('.result').text(count);
			}
		}
		flag = false;
		
	});

	function nextQuestion(tit,questionL){
		function getQuestion(){//获取当前问题
	      	var question = "";
	      	$.each(questiondata,function(i,value){
	        	if(index == i && value.index==i+1){
	          		question = value;
	          		return false;
	        	}
	      	});
	      	return question;
	    }
	    var question = getQuestion();//当前问题
	    // console.log(question);
	    $(tit).text(question.Name);//输出标题
	    questionList = $(questionL);
	    questionList.children("li").not(".dn").remove();
	    var clone = null;
	    var questionOptions = [];
	    $.each(question.QuestionItems,function(i, value){
	      	clone = questionList.children("[data-type=list].dn").clone(true).removeClass("dn");
	
	      	clone.find("[data-type=letter]").text(value.option);//A,B,C,D
	      	clone.find("[data-type=answer]").text(value.item);//答案
	      	questionList.append(clone);
	      	questionOptions.push(value.option);
	    })

		
		var questionAnswer = questionList.find('[data-type=answer]');
		
		questionAnswer.click(function(){
			questionAnswer.attr('class','text');
			var option = $(this).parent().find("[data-type=letter]").text();
			if(answer[index] != option) {
				$(this).addClass('errBg');
				for(var i = 0; i < questionOptions.length; i++) {
					// console.log(i);
					if(questionOptions[i] == answer[index]) {
						
						questionAnswer.eq(i+1).addClass('correctBg_Not');
						 console.log(questionOptions[i]);
						// console.log(i);
						break;
					}
				}
			} else {
				$(this).addClass('correctBg');
				count++;
			}
			flag = true;
			questionAnswer.off('click');
		});
	};
	
	MainSwiper = new Swiper('#MainSwiper', {
		direction: 'vertical',
		noSwipingClass: 'stop-swiping',
		loop: false,
		initialSlide: 0,
		onInit: function() {

		}
		
	});
	


});