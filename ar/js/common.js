$(function(){
	$('.pagetop a').click(function () {
		$('body, html').animate({
			scrollTop: 0
		}, 800);
		return false;
	});

	$(".sitewide_SpMenuList_Container a").on('click touchend', function(){
		$('#nav-input').prop('checked', false);

		$('a[href^=#]').click(function(){
			var speed = 500;
			var href= $(this).attr("href");
			var target = $(href == "#" || href == "" ? 'html' : href);
			var position = target.offset().top; $("html, body").animate({scrollTop:position}, speed, "swing");
			return false;
		});
	});

	$('a[href^=#]').click(function(){
		var speed = 500;
		var href= $(this).attr("href");
		var target = $(href == "#" || href == "" ? 'html' : href);
		var position = target.offset().top; $("html, body").animate({scrollTop:position}, speed, "swing");
		return false;
	});
});
