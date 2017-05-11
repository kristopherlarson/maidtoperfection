//Mobile Menu Toggle Plugin
;(function ($, window, document, undefined) {

    'use strict';

    $.fn.jwMobMenu = function (options) {
        var defaults = {
            parentNav: '#jPanelMenu-menu',
            topParentLink: 'li.has-drop > a',
            subParent: true,
            subParentLink: 'ul.navdrop > li > a',
            sectionToOpen: '.navdrop',
            subSection: false,
            subSectionToOpen: '.level-1',
            icon: true,
            iconDownClass: 'icon-arrow-down',
            iconUpClass: 'icon-arrow-up',
            iconWrapper: '<span></span>',
            iconWrapperType: 'span'
        };

        var settings = $.extend({}, defaults, options);

        this.each(function () {
            function toggleOpen(e) {
                e.stopPropagation;
                e.preventDefault;
                var $this = $(this);

                if ($this.parent().children(settings.sectionToOpen).length > 0) {
                    var hiddenMenu = $this.parent().find(settings.sectionToOpen);
                } else if ($this == $(settings.subParentLink)) {
                    var hiddenMenu = $this.parent().find(settings.subSectionToOpen);
                }
                if (hiddenMenu.hasClass("on")) {
                    hiddenMenu.removeClass("on");
                    hiddenMenu.slideUp(400);
                    $this.children(settings.iconWrapperType).removeClass(settings.iconUpClass).addClass(settings.iconDownClass);
                } else {
                    hiddenMenu.addClass("on");
                    hiddenMenu.slideDown(400);
                    $this.children(settings.iconWrapperType).removeClass(settings.iconDownClass).addClass(settings.iconUpClass);
                }
            }

            if (settings.icon == true) {
                if ($(settings.topParentLink).parents(settings.parentNav).length > 0) {
                    if ($(settings.topParentLink).children(settings.iconWrapperType).length == 0) {
                        $(settings.parentNav + ' ' + settings.topParentLink).append(settings.iconWrapper);
                        $(settings.topParentLink).children(settings.iconWrapperType).addClass(settings.iconDownClass);
                    }
                }
            }
            if (settings.subParent == true) {
                $(this).on('click', settings.topParentLink, toggleOpen);
            }
            if (settings.subSection == true) {
                $(this).on('click', settings.subParentLink, toggleOpen);
            }

        });
        return this;
    }
})(jQuery, window, document);