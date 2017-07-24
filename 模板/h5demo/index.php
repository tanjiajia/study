<?php
require_once "jssdk.php";
$jssdk = new JSSDK("wxbd82342264612e10", "43f0835454a77973e7781b7792a75b20");
$signPackage = $jssdk->GetSignPackage();
?>
<!DOCTYPE html>
<html lang="en" style='font-size:40px;'>
	<head>
	<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
	<meta charset="utf-8">
	<meta http-equiv="Pragma" content="no-cache">
	<meta http-equiv="Cache-Control" content="no-cache">
	<meta http-equiv="Expires" content="-1">
	<meta name="viewport" content="width=640,user-scalable=no">
	<meta content="yes" name="apple-mobile-web-app-capable">
	<meta content="black" name="apple-mobile-web-app-status-bar-style">
	<meta content="telephone=no" name="format-detection">
	<meta content="email=no" name="format-detection">
	<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0">
	<link rel="stylesheet" href="css/reset.css">
	<link rel="stylesheet" href="css/swiper.min.css">
	<link rel="stylesheet" type="text/css" href="css/animate.css">
	<link rel="stylesheet" type="text/css" href="css/index.css"/>
	<script src="https://res.wx.qq.com/open/js/jweixin-1.0.0.js"></script>
	<script>
			wx.config({
			    debug: false,
			    appId: '<?php echo $signPackage["appId"];?>',
			    timestamp: '<?php echo $signPackage["timestamp"];?>',
			    nonceStr: '<?php echo $signPackage["nonceStr"];?>',
			    signature: '<?php echo $signPackage["signature"];?>',
			    jsApiList: ['onMenuShareTimeline','onMenuShareAppMessage']
			});
			wx.ready(function(){
			    // config信息验证后会执行ready方法，所有接口调用都必须在config接口获得结果之后，config是一个客户端的异步操作，所以如果需要在页面加载时就调用相关接口，则须把相关接口放在ready函数中调用来确保正确执行。对于用户触发时才调用的接口，则可以直接调用，不需要放在ready函数中。
			});
			wx.error(function(res){
			    // config信息验证失败会执行error函数，如签名过期导致验证失败，具体错误信息可以打开config的debug模式查看，也可以在返回的res参数中查看，对于SPA可以在这里更新签名。
			});
		</script>
	<script>
		var share = {
			desc: 'just for no.1',
			title: '易恒健康前端H5模板',
			link: location.href,
			imgUrl: 'http://www.ecmoho.com/2017MidYearConference/images/PIC300.jpg'
		}
		wx.ready(function () {
			wx.onMenuShareAppMessage({
				title: share.title,
				desc: share.desc,
				link: share.link,
				imgUrl: share.imgUrl,
				// trigger: function (res) {
				// 	// 不要尝试在trigger中使用ajax异步请求修改本次分享的内容，因为客户端分享操作是一个同步操作，这时候使用ajax的回包会还没有返回
				// 	alert('用户点击发送给朋友');
				// },
				// success: function (res) {
				// 	alert('已分享');
				// },
				// cancel: function (res) {
				// 	alert('已取消');
				// },
				// fail: function (res) {
				// 	alert(JSON.stringify(res));
				// }
			});
			wx.onMenuShareTimeline({
				title: share.title,
				desc: share.desc,
				link: share.link,
				imgUrl: share.imgUrl,
				// trigger: function (res) {
				// 	// 不要尝试在trigger中使用ajax异步请求修改本次分享的内容，因为客户端分享操作是一个同步操作，这时候使用ajax的回包会还没有返回
				// 	alert('用户点击发送给朋友');
				// },
				// success: function (res) {
				// 	alert('已分享');
				// },
				// cancel: function (res) {
				// 	alert('已取消');
				// },
				// fail: function (res) {
				// 	alert(JSON.stringify(res));
				// }
			});
		});

	</script>
</head>
<body>
<div class="swiper-container">
	<div class="swiper-wrapper">
        <div class="swiper-slide swiper-slide01 box">
          <div class="pos-A center cover_00"></div>
          <div class="pos-A word_01 center ani" swiper-animate-effect="lightSpeedIn" swiper-animate-duration="1.0s" swiper-animate-delay="0.0s"></div>
          <div class="pos-A word_02 center ani" swiper-animate-effect="lightSpeedIn" swiper-animate-duration="1.0s" swiper-animate-delay="0.3s"></div>
          <div class="pos-A word_03 center ani" swiper-animate-effect="lightSpeedIn" swiper-animate-duration="1.0s" swiper-animate-delay="0.6s"></div>
          <div class="pos-A word_05 center ani" swiper-animate-effect="lightSpeedIn" swiper-animate-duration="1.0s" swiper-animate-delay="0.9s"></div>
          <div class="pos-A word_06 center ani" swiper-animate-effect="bounceIn" swiper-animate-duration="1.0s" swiper-animate-delay="1.2s"></div>
          <div class="pos-A cover_01"></div>
        </div>
        <div class="swiper-slide swiper-slide02">
          <div class="pos-A word_01 center ani" swiper-animate-effect="lightSpeedIn" swiper-animate-duration="1.0s" swiper-animate-delay="0.0s"></div>
          <div class="pos-A word_03 center ani" swiper-animate-effect="lightSpeedIn" swiper-animate-duration="1.0s" swiper-animate-delay="0.3s"></div>
          <div class="pos-A word_04 ani" swiper-animate-effect="fadeIn" swiper-animate-duration="1.0s" swiper-animate-delay="0.6s"></div>
          <div class="pos-A word_05 ani" swiper-animate-effect="fadeIn" swiper-animate-duration="1.0s" swiper-animate-delay="0.8s"></div>
          <div class="pos-A word_06 ani" swiper-animate-effect="fadeIn" swiper-animate-duration="1.0s" swiper-animate-delay="0.9s"></div>
          <div class="pos-A word_07 ani" swiper-animate-effect="fadeIn" swiper-animate-duration="1.0s" swiper-animate-delay="1.0s"></div>
          <div class="pos-A word_08 ani" swiper-animate-effect="bounceIn" swiper-animate-duration="1.0s" swiper-animate-delay="1.2s"></div>
          <div class="pos-A word_09 ani" swiper-animate-effect="bounceIn" swiper-animate-duration="1.0s" swiper-animate-delay="1.2s"></div>
        </div>
        <div class="swiper-slide swiper-slide04">
          <div class="pos-A word_01 center ani" swiper-animate-effect="lightSpeedIn" swiper-animate-duration="1.0s" swiper-animate-delay="0.0s"></div>
          <div class="pos-A word_02 center ani" swiper-animate-effect="lightSpeedIn" swiper-animate-duration="1.0s" swiper-animate-delay="0.3s"></div>
          <div class="pos-A word_04 ani" swiper-animate-effect="fadeIn" swiper-animate-duration="1.0s" swiper-animate-delay="0.6s"></div>
          <div class="pos-A word_05 ani" swiper-animate-effect="fadeIn" swiper-animate-duration="1.0s" swiper-animate-delay="0.6s"></div>
          <div class="pos-A word_06 ani" swiper-animate-effect="bounceIn" swiper-animate-duration="1.0s" swiper-animate-delay="0.8s"></div>
          <div class="pos-A word_07 ani" swiper-animate-effect="bounceIn" swiper-animate-duration="1.0s" swiper-animate-delay="0.8s"></div>
          <div class="pos-A word_08 ani" swiper-animate-effect="bounceIn" swiper-animate-duration="1.0s" swiper-animate-delay="1.0s"></div>
        </div>
	</div>
</div>
<img class="music_icon" id="music_icon_open" style="display: block;" src="images/music_open.png"> <img class="music_icon" id="music_icon_close" src="images/music_close.png">
<audio src="media/xuetangyi.mp3" id="audio" loop autoplay></audio>
<script>
function audioAutoPlay(id){
	var audio = document.getElementById(id);
	audio.play();
    document.addEventListener("WeixinJSBridgeReady", function () {
            audio.play();
    }, false);
    document.addEventListener('YixinJSBridgeReady', function() {
    	audio.play();
    }, false);
}
audioAutoPlay('audio');

</script>
<script src="js/jquery.js"></script> 
<script src="js/swiper.min.js"></script> 
<script type="text/javascript" src="js/index.js"></script> 
<script type="text/javascript" src="js/swiper.animate.min.js"></script> 
<script>
			var ohtml = document.documentElement;
			getSize();

			window.onresize = function(){
				getSize();
			}
			function getSize(){

				var screenWidth = ohtml.clientWidth;
				if(screenWidth <= 320){
					ohtml.style.fontSize = '17.0667px';
				}else if(screenWidth >= 750){
					ohtml.style.fontSize = '40.0000px';
				}else{
					ohtml.style.fontSize = screenWidth/(750/40)+'px';
				}
			}

			var swiper = new Swiper('.swiper-container', {
		        pagination: '.swiper-pagination',
		        paginationClickable: true,
		        direction: 'vertical',
		        resistanceRatio : 0, //第一张和最后一张在向上、向下滑动时无回弹
		        onInit: function(swiper){ //Swiper2.x的初始化是onFirstInit
				    swiperAnimateCache(swiper); //隐藏动画元素 
				    swiperAnimate(swiper); //初始化完成开始动画
				}, 
				onSlideChangeEnd: function(swiper){ 
				    swiperAnimate(swiper); //每个slide切换结束时也运行当前slide动画
				}
		    });
			
			
</script>
</body>
</html>