$(function() {
    var body = $("html, body");
	
    $(".pagetop a").on("click", function() {
        var speed = 800;

        body.animate({
            scrollTop: 0
        }, speed);
        return false;
    });

    $("a[href^=#]").on("click", function() {
        var speed = 500;
        var href = $(this).attr("href");
        var target = $(href === "#" || href === "" ? "html" : href);
        var position = target.offset().top; 

        body.animate({
            scrollTop:position
        }, speed, "swing");
        return false;
    });

    $(".slider").flexslider();
});
