var MainSwiper;

	/*StartCode*/
$(function() {
	window.addEventListener('load', function() {
		FastClick.attach(document.body);
	}, false);

	document.addEventListener('touchmove', function(e) {
		e.preventDefault();
	}, false);

	/*Load end*/
	CreateMainSwiper();

});
/***
 * 创建Swiper
 */
function CreateMainSwiper() {
	/*实例化*/
	MainSwiper = new Swiper('#MainSwiper', {
		direction: 'vertical',
		noSwipingClass: 'stop-swiping',
		loop: false,
		initialSlide: 0
	});
	//init event
	CreateEvent();
}
//创建事件
function CreateEvent() {

	//弹出分享
	$('.openshare_btn').click(function() {
		if (MainSwiper.activeIndex == 6) {
			console.log('成绩页面');
		}
		$('#ShareDilog').show();
	})
	$('#ShareDilog').click(function() {
			$('#ShareDilog').hide();
		})
		//
	$('#p7 .NextPageBtn').click(function() {
			MainSwiper.slideTo(8);
		})
		//偷瞄秘籍
	$('#lookCheatsBtn').click(function() {
		MainSwiper.slideTo(7);
	})

	//点击闯关
	$('#p0_btn1').click(function() {
		MainSwiper.slideTo(1);
		console.log(1);
		document.title = "百日稳糖/测测你对【血糖监测】了解多少，据说只有5%的人拿到了优秀";
	})

	

}

