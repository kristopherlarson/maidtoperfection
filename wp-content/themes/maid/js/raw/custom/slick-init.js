;(function ($) {

    'use strict';

    var el = document.getElementsByClassName('featured-slider'),
        $el = $(el),
        $elSlider = $('.slider-image'),
        $elImage = $('.slider-image > img'),
        $window = $(window);

    var init = function () {

        if (el.length) {
            runSlick();
            bindEvents();
            homeSize();
            console.log('Initialized slick fullscreen.');
        }

    };

    var bindEvents = function () {

        $window.resize(function () {
            if (el.length) {
                homeSize();
            }
        });

    };

    var runSlick = function () {

        /****** NOTE: if options are changed don't forget to match in mobile-nav.js slick initializer. ******/

        $el.slick({
            autoplay: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: true,
            autoplaySpeed: 2500,
            speed: 2500,
            fade: true,
            arrows: true
        });

    };

    // Remove styling
    var removeStyles = function () {
        $elImage.removeAttr('style');
        $el.removeAttr('style');
    };

    // Flexslider Responsive slider
    function homeSize() {
        var wWindow = $window.width();
        var hWindow = $window.height() - 150;

        if (wWindow < 960) {
            removeStyles();
            $el.slick('unslick');
            runSlick();
            return;
        }

        $el.height(hWindow);
        $elSlider.height(hWindow);
        fullscreen();
    }

    function fullscreen() {

        var wWindow = $window.width();
        var hWindow = $window.height() - 150;

        window.opt = {

            // Set these values to your uploaded slider image dimension.
            // Images have to be consistently sizeed to these dimensions
            correctW: 1434,
            correctH: 651,
            correctRatio: null,
            currentRatio: null,
            newW: wWindow,
            newH: hWindow,
            moveTop: 0,
            moveLeft: 0

        };

        opt.currentRatio = wWindow / hWindow;
        opt.correctRatio = opt.correctW / opt.correctH;

        if (opt.currentRatio <= opt.correctRatio) {

            opt.newW = opt.newH * opt.correctRatio;
            opt.moveLeft = (parseInt(opt.newW - wWindow) / 2) * (-1);

        } else {

            opt.newH = opt.newW / opt.correctRatio;
            opt.moveTop = (parseInt(opt.newH - hWindow) / 2) * (-1);

        }

        $elImage.css({

            'width': opt.newW + 'px',
            'height': opt.newH + 'px',
            'top': opt.moveTop + 'px',
            'left': opt.moveLeft + 'px',
            'max-width': 'none'

        });

    }

    init();

})(jQuery);