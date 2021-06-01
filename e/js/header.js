$(function() {
    $(window).on("scroll", function() {
        if ($(window).scrollTop() > 50) {
            $("header").addClass("active_header");
            $(".sitewide_HeaderMenu_Container").toggleClass("active_sitewide_HeaderMenu_Container", true);
            $(".sitewide_HeaderMenu_PcLogo img").toggleClass("active_sitewide_HeaderMenu_PcLogo", true);
            $(".sitewide_HeaderMenu_SpLogo").toggleClass("acitve_sitewide_HeaderMenu_SpLogo", true);
            $(".sitewide_HamburgerMenu_Container").toggleClass("active_sitewide_HamburgerMenu_Container", true);
        } else {
            $("header").removeClass("active_header");
            $(".sitewide_HeaderMenu_Container").removeClass("active_sitewide_HeaderMenu_Container");
            $(".sitewide_HeaderMenu_PcLogo img").removeClass("active_sitewide_HeaderMenu_PcLogo");
            $(".sitewide_HeaderMenu_SpLogo").removeClass("acitve_sitewide_HeaderMenu_SpLogo");
            $(".sitewide_HamburgerMenu_Container").removeClass("active_sitewide_HamburgerMenu_Container");
        }
    });

    if (document.URL.includes("usecase.html")) {
        $("header").addClass("green_header");
    }

    if (document.URL.includes("opentoonz.html")) {
        $("header").addClass("green_header");
    }

    if (document.URL.includes("gts.html")) {
        $("header").addClass("green_header");
        $("footer .copyright").addClass("center_footer_copyright");
    }

    if (document.URL.includes("kumoworks.html")) {
        $("header").addClass("green_header");
        $("footer .copyright").addClass("center_footer_copyright");
    }

    if (document.URL.includes("sample.html")) {
        $("header").addClass("green_header");
    }

});