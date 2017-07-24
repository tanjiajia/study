$(function() {

	//点击播放和暂停
	var audio = document.getElementById('audio');	
	$('.music_icon').click(function() {
		if (audio.paused == true) {
			$('#music_icon_open').show();
			$('#music_icon_close').hide();
			audio.play();
		} else {
			$('#music_icon_open').hide();
			$('#music_icon_close').show();
			audio.pause();
		}
	})
});
/*(function (doc, win) {
  var docEl = doc.documentElement,
    resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
    recalc = function () {
      var clientWidth = docEl.clientWidth;
      if (!clientWidth) return;
      if (clientWidth>750) clientWidth=750;
      docEl.style.fontSize = 40 * (clientWidth / 320) + 'px';
    };

  if (!doc.addEventListener) return;
  win.addEventListener(resizeEvt, recalc, false);
  doc.addEventListener('DOMContentLoaded', recalc, false);
})(document, window);*/