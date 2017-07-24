$(function(){

	
	var answerlist;
	var token= localStorage.getItem('token');
	getAnsewer();
//	getAnsewerlist();
	function getAnsewerlist(){
		
	
//	$('.box0-title').click(function(){
		$('.box0-list').children("[data-type=list]:not(.dn)").remove(); 
		
		$('.box0-list').removeClass('dn');
		$.each(answerlist,function(i,value){
        	clone = $('.box0-list').children("[data-type=list].dn").clone(true).removeClass("dn");
	
	      	clone.find("[data-type=number]").text(value.answerNum);
	      	clone.find("[data-type=score]").text(value.Score);
	      	clone.find("[data-type=time]").text(value.answerTime);
	      	$('.box0-list').append(clone);
	      	if (value.isEnd!=0) {
	      		$('.box-continue').addClass('dn');
	      	}
      	});
//	});
	};
	
	function getAnsewer(){
		
		$.ajax({
          	url : "http://192.168.3.19:8080/rest/v34/answer",
          	datatype  : 'json',
          	data: {token:token},
         	type: 'get',
          	success : function(data){
	           	var resCode=data.resCode;
	           	var isHave=data.isHave;
		    	if (resCode=="0000") {
		    		if(isHave == 0){
		    			alert('目前没有答题');
		    		}else{
		    			answerlist=data.answerlist;
		    			getAnsewerlist();
		    			console.log(answerlist);
		    		}
		    							
					
				}else if(resCode=="6666"){
			    	var resMsg=data.resMsg;
//					alert(resMsg);
					window.location.href="login.html";
				}else{
					var resMsg=data.resMsg;
					alert(resMsg);
					window.location.href="login.html";
				}
//		    	alert(resCode);
		    	
		    	

          	},
          	error : function(data){
            
          	}
		
		})
	}
		

})

