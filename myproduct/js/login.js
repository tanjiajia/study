$(function(){
		//	发送验证码
	$(".box1-code").click(function(){
        var mobile = $("#mobile").find("[data-type=mobile]").val();
        var smscode = $("#mobile").find("[data-type=smscode]").val();
		$('[data-type=code-ing]').removeClass('dn');
		$('[data-type=code-begin]').addClass('dn');
        $.ajax({
          	url : "http://192.168.3.19:8080/rest/v34/sms",
          	datatype  : 'json',
          	data: {mobile:mobile},
         	type: 'get',
          	success : function(data){
	           	var resCode=data.resCode;
		    	if (resCode=="0000") {
		    		console.log("成功");	
					var timesRun= 10;
					var interval = setInterval(function(){
						
						timesRun--;
						
						$('[data-type=code-ing]').text(timesRun).removeClass('dn');
						$('[data-type=code-begin]').addClass('dn');
						if(timesRun === 0){
							clearInterval(interval);
							timesRun= 10;
//							console.log("jieshu");	
							$('[data-type=code-begin]').removeClass('dn');
							$('[data-type=code-ing]').addClass('dn');
						}
					}, 1000);

					tujiao();
					
					
				}else{
			    	var resMsg=data.resMsg;
	
					$('[data-type=code-begin]').removeClass('dn');
					$('[data-type=code-ing]').addClass('dn');
					alert(resMsg);
				}
//		    	alert(resCode);
		    	
		    	

          	},
          	error : function(data){
            	var resMsg=data.resMsg;
			    	alert(resMsg);
          	}
        })
    });
//  登陆提交
	function tujiao(){
//		var resCode = $('[data-type=smscode]').value;
		$(".box1-btn").click(function(){
	        var mobile = $("#mobile").find("[data-type=mobile]").val();
	        var setMobile = localStorage.setItem('mobile',mobile);
	        var code = $("[data-type=smscode]").val();
	        var token;
	        var getToken= localStorage.getItem('token');
	        console.log(getToken);
	        
	        $.ajax({
	          	url : "http://192.168.3.19:8080/rest/v34/login",
	          	datatype  : 'json',
	          	data: {
	          		mobile:mobile,
	          		code:code
	          	},
	         	type: 'get',
	          	success : function(data){
		           	var resCode=data.resCode;
		           	var token=data.token;
			    	if (resCode=="0000") {
			    		console.log("成功");	
//			    		console.log(token);
						var setToken = localStorage.setItem('token',token);
						window.location.href="index.html";
						
					}else{
				    	var resMsg=data.resMsg;
		
						$('[data-type=code-begin]').removeClass('dn');
						$('[data-type=code-ing]').addClass('dn');
						alert(resMsg);
					}
	//		    	alert(resCode);
				
	//		    	alert(resCode);
			    	
			    	
	
	          	},
	          	error : function(data){
	            
	          	}
	        })
	    });
	};
	
	
		

})

