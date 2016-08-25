(function($) {
    "use strict";
    var fn = {
        // Launch Functions
        Launch: function() {
            fn.MenuSticky();
            // fn.Navigation();
        },
        // Sticky Menu
        MenuSticky: function() {
            var menu = document.querySelector('#menu'),
                origOffsetY = menu.offsetTop + 100;

            function scroll() {
                if ($(window).scrollTop() >= origOffsetY) {
                    $('#menu').addClass('sticky');
                    $('#menu').removeClass('fixed');
                } else {
                    $('#menu').removeClass('sticky');
                    $('#menu').addClass('fixed');
                }
            }
            document.onscroll = scroll;
        },
        // One Page Navigation
        Navigation: function() {
            $('#menu').onePageNav({
                currentClass: 'current',
                scrollSpeed: 500,
                scrollOffset: 60,
                scrollThreshold: 0.2,
                easing: 'swing'
            });
        },
    };
    $(document).ready(function() {
        fn.Launch();
    });
})(jQuery);