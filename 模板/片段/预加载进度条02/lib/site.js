
	/*StartCode*/
$(function() {
//	window.addEventListener('load', function() {
//		FastClick.attach(document.body);
//	}, false);
	var load_text = $("#show_processnum");
	var load_process = $("#process-num");
	var manifest = [];
	var preload;

	function setupManifest() {
		$('img').each(function() {
			if ($(this).attr('src').indexOf('data:image') < 0) {
				manifest.push({
					src: $(this).attr('src')
				})
			}
		})
		
	}

	function startPreload() {
		preload = new createjs.LoadQueue(true);
		//注意加载音频文件需要调用如下代码行
		preload.on("progress", handleFileProgress);
		preload.on("complete", loadComplete);
		preload.loadManifest(manifest);
	}

	function handleFileProgress(event) {
		
		load_text.text((preload.progress * 100 | 0) + "%");
		load_process.css('width', (preload.progress * 100 | 0) + "%");
	}

	function loadComplete(event) {
		// 进度条加载结束
		$("#loading").hide();
		 	console.log(1);
	}
	setupManifest();
	startPreload();

	document.addEventListener('touchmove', function(e) {
		e.preventDefault();
	}, false);

});


