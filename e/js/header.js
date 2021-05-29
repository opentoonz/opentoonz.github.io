$(function() {
    $(window).on("scroll", function() {
        if ($(window).scrollTop() > 50) {
            $("header").addClass("active");
            $(".sitewide_HeaderMenu_Container").toggleClass("active_sitewide_HeaderMenu_Container", true);
            $(".sitewide_HeaderMenu_PcLogo img").toggleClass("active_sitewide_HeaderMenu_PcLogo", true);
        } else {
            $("header").removeClass("active");
            $(".sitewide_HeaderMenu_Container").removeClass("active_sitewide_HeaderMenu_Container");
            $(".sitewide_HeaderMenu_PcLogo img").removeClass("active_sitewide_HeaderMenu_PcLogo");
        }
    });
});