$(function() {
    $(window).on("scroll", function() {
        if ($(window).scrollTop() > 50) {
            $("header").addClass("active");
            $(".sitewide_HeaderMenu_Container").toggleClass("active_sitewide_HeaderMenu_Container", true);
            $(".sitewide_HeaderMenu_PcLogo img").addClass("active_sitewide_HeaderMenu_PcLogo");
        } else {
            $("header").removeClass("active");
            $(".sitewide_HeaderMenu_Container").removeClass("active_sitewide_HeaderMenu_Container");
            $(".sitewide_HeaderMenu_PcLogo img").toggleClass("active_sitewide_HeaderMenu_PcLogo", false);
        }
    });
});