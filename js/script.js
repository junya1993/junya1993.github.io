$(document).ready(function() {

	var typed = new Typed(".typed", {
		strings: ["JUNYA WATANABE"],
		typeSpeed: 90,
		loop: false,
		startDelay: 1000,
		showCursor: false
	});

	$("[data-fancybox]").fancybox();

	$(".items").isotope({
		filter: '*',
		animationOptions: {
			duration: 1500,
			easing: 'linear',
			queue: false,
		}
	});

	$("#filters a").click(function() {

		$("#filters .current").removeClass("current");
		$(this).addClass("current");

		var selector = $(this).attr("data-filter");

		$(".items").isotope({
			filter: selector,
			animationOptions: {
				duration: 1500,
				easing: 'linear',
				queue: false
			}
		});

		return false;
	});

	$(".modal").fancybox({
    'onComplete': function() {
      vidplay();
    }
  });
 
  function vidplay() {
    var video = document.getElementById("player");
    if (video.paused) {
      video.play();
    } else {
      video.pause();
    }
	}

	$(function(){
		// #で始まるアンカーをクリックした場合に処理
		$('.footer__item a[href^=#]').click(function() {
			 // スクロールの速度
			 var speed = 800; // ミリ秒
			 // アンカーの値取得
			 var href= $(this).attr("href");
			 // 移動先を取得
			 var target = $(href == "#" || href == "" ? 'html' : href);
			 // 移動先を数値で取得
			 var position = target.offset().top;
			 // スムーススクロール
			 $('body,html').animate({scrollTop:position}, speed, 'swing');
			 return false;
		});
 });
	
});