"use strict";
var _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (a) {
    return typeof a
} : function (a) {
    return a && "function" == typeof Symbol && a.constructor === Symbol && a !== Symbol.prototype ? "symbol" : typeof a
};
!function (a) {
    function b(a) {
        if (void 0 === Function.prototype.name) {
            var b = /function\s([^(]{1,})\(/, c = b.exec(a.toString());
            return c && c.length > 1 ? c[1].trim() : ""
        }
        return void 0 === a.prototype ? a.constructor.name : a.prototype.constructor.name
    }

    function c(a) {
        return "true" === a || "false" !== a && (isNaN(1 * a) ? a : parseFloat(a))
    }

    function d(a) {
        return a.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase()
    }

    var e = "6.3.0", f = {
        version: e, _plugins: {}, _uuids: [], rtl: function () {
            return "rtl" === a("html").attr("dir")
        }, plugin: function (a, c) {
            var e = c || b(a), f = d(e);
            this._plugins[f] = this[e] = a
        }, registerPlugin: function (a, c) {
            var e = c ? d(c) : b(a.constructor).toLowerCase();
            a.uuid = this.GetYoDigits(6, e), a.$element.attr("data-" + e) || a.$element.attr("data-" + e, a.uuid), a.$element.data("zfPlugin") || a.$element.data("zfPlugin", a), a.$element.trigger("init.zf." + e), this._uuids.push(a.uuid)
        }, unregisterPlugin: function (a) {
            var c = d(b(a.$element.data("zfPlugin").constructor));
            this._uuids.splice(this._uuids.indexOf(a.uuid), 1), a.$element.removeAttr("data-" + c).removeData("zfPlugin").trigger("destroyed.zf." + c);
            for (var e in a)a[e] = null
        }, reInit: function (b) {
            var c = b instanceof a;
            try {
                if (c) b.each(function () {
                    a(this).data("zfPlugin")._init()
                }); else {
                    var e = "undefined" == typeof b ? "undefined" : _typeof(b), f = this, g = {
                        object: function (b) {
                            b.forEach(function (b) {
                                b = d(b), a("[data-" + b + "]").foundation("_init")
                            })
                        }, string: function () {
                            b = d(b), a("[data-" + b + "]").foundation("_init")
                        }, undefined: function () {
                            this.object(Object.keys(f._plugins))
                        }
                    };
                    g[e](b)
                }
            } catch (a) {
            } finally {
                return b
            }
        }, GetYoDigits: function (a, b) {
            return a = a || 6, Math.round(Math.pow(36, a + 1) - Math.random() * Math.pow(36, a)).toString(36).slice(1) + (b ? "-" + b : "")
        }, reflow: function (b, d) {
            "undefined" == typeof d ? d = Object.keys(this._plugins) : "string" == typeof d && (d = [d]);
            var e = this;
            a.each(d, function (d, f) {
                var g = e._plugins[f], h = a(b).find("[data-" + f + "]").addBack("[data-" + f + "]");
                h.each(function () {
                    var b = a(this), d = {};
                    if (!b.data("zfPlugin")) {
                        if (b.attr("data-options")) {
                            b.attr("data-options").split(";").forEach(function (a, b) {
                                var e = a.split(":").map(function (a) {
                                    return a.trim()
                                });
                                e[0] && (d[e[0]] = c(e[1]))
                            })
                        }
                        try {
                            b.data("zfPlugin", new g(a(this), d))
                        } catch (a) {
                        } finally {
                            return
                        }
                    }
                })
            })
        }, getFnName: b, transitionend: function (a) {
            var b, c = {
                transition: "transitionend",
                WebkitTransition: "webkitTransitionEnd",
                MozTransition: "transitionend",
                OTransition: "otransitionend"
            }, d = document.createElement("div");
            for (var e in c)"undefined" != typeof d.style[e] && (b = c[e]);
            return b ? b : (b = setTimeout(function () {
                a.triggerHandler("transitionend", [a])
            }, 1), "transitionend")
        }
    };
    f.util = {
        throttle: function (a, b) {
            var c = null;
            return function () {
                var d = this, e = arguments;
                null === c && (c = setTimeout(function () {
                    a.apply(d, e), c = null
                }, b))
            }
        }
    };
    var g = function (c) {
        var d = "undefined" == typeof c ? "undefined" : _typeof(c), e = a("meta.foundation-mq"), g = a(".no-js");
        if (e.length || a('<meta class="foundation-mq">').appendTo(document.head), g.length && g.removeClass("no-js"), "undefined" === d) f.MediaQuery._init(), f.reflow(this); else {
            if ("string" !== d)throw new TypeError("We're sorry, " + d + " is not a valid parameter. You must use a string representing the method you wish to invoke.");
            var h = Array.prototype.slice.call(arguments, 1), i = this.data("zfPlugin");
            if (void 0 === i || void 0 === i[c])throw new ReferenceError("We're sorry, '" + c + "' is not an available method for " + (i ? b(i) : "this element") + ".");
            1 === this.length ? i[c].apply(i, h) : this.each(function (b, d) {
                i[c].apply(a(d).data("zfPlugin"), h)
            })
        }
        return this
    };
    window.Foundation = f, a.fn.foundation = g, function () {
        Date.now && window.Date.now || (window.Date.now = Date.now = function () {
            return (new Date).getTime()
        });
        for (var a = ["webkit", "moz"], b = 0; b < a.length && !window.requestAnimationFrame; ++b) {
            var c = a[b];
            window.requestAnimationFrame = window[c + "RequestAnimationFrame"], window.cancelAnimationFrame = window[c + "CancelAnimationFrame"] || window[c + "CancelRequestAnimationFrame"]
        }
        if (/iP(ad|hone|od).*OS 6/.test(window.navigator.userAgent) || !window.requestAnimationFrame || !window.cancelAnimationFrame) {
            var d = 0;
            window.requestAnimationFrame = function (a) {
                var b = Date.now(), c = Math.max(d + 16, b);
                return setTimeout(function () {
                    a(d = c)
                }, c - b)
            }, window.cancelAnimationFrame = clearTimeout
        }
        window.performance && window.performance.now || (window.performance = {
            start: Date.now(), now: function () {
                return Date.now() - this.start
            }
        })
    }(), Function.prototype.bind || (Function.prototype.bind = function (a) {
        if ("function" != typeof this)throw new TypeError("Function.prototype.bind - what is trying to be bound is not callable");
        var b = Array.prototype.slice.call(arguments, 1), c = this, d = function () {
        }, e = function () {
            return c.apply(this instanceof d ? this : a, b.concat(Array.prototype.slice.call(arguments)))
        };
        return this.prototype && (d.prototype = this.prototype), e.prototype = new d, e
    })
}(jQuery), !function (a) {
    function b(a, b, d, e) {
        var f, g, h, i, j = c(a);
        if (b) {
            var k = c(b);
            g = j.offset.top + j.height <= k.height + k.offset.top, f = j.offset.top >= k.offset.top, h = j.offset.left >= k.offset.left, i = j.offset.left + j.width <= k.width + k.offset.left
        } else g = j.offset.top + j.height <= j.windowDims.height + j.windowDims.offset.top, f = j.offset.top >= j.windowDims.offset.top, h = j.offset.left >= j.windowDims.offset.left, i = j.offset.left + j.width <= j.windowDims.width;
        var l = [g, f, h, i];
        return d ? h === i == !0 : e ? f === g == !0 : l.indexOf(!1) === -1
    }

    function c(a, b) {
        if (a = a.length ? a[0] : a, a === window || a === document)throw new Error("I'm sorry, Dave. I'm afraid I can't do that.");
        var c = a.getBoundingClientRect(), d = a.parentNode.getBoundingClientRect(),
            e = document.body.getBoundingClientRect(), f = window.pageYOffset, g = window.pageXOffset;
        return {
            width: c.width,
            height: c.height,
            offset: {top: c.top + f, left: c.left + g},
            parentDims: {width: d.width, height: d.height, offset: {top: d.top + f, left: d.left + g}},
            windowDims: {width: e.width, height: e.height, offset: {top: f, left: g}}
        }
    }

    function d(a, b, d, e, f, g) {
        var h = c(a), i = b ? c(b) : null;
        switch (d) {
            case"top":
                return {
                    left: Foundation.rtl() ? i.offset.left - h.width + i.width : i.offset.left,
                    top: i.offset.top - (h.height + e)
                };
            case"left":
                return {left: i.offset.left - (h.width + f), top: i.offset.top};
            case"right":
                return {left: i.offset.left + i.width + f, top: i.offset.top};
            case"center top":
                return {left: i.offset.left + i.width / 2 - h.width / 2, top: i.offset.top - (h.height + e)};
            case"center bottom":
                return {left: g ? f : i.offset.left + i.width / 2 - h.width / 2, top: i.offset.top + i.height + e};
            case"center left":
                return {left: i.offset.left - (h.width + f), top: i.offset.top + i.height / 2 - h.height / 2};
            case"center right":
                return {left: i.offset.left + i.width + f + 1, top: i.offset.top + i.height / 2 - h.height / 2};
            case"center":
                return {
                    left: h.windowDims.offset.left + h.windowDims.width / 2 - h.width / 2,
                    top: h.windowDims.offset.top + h.windowDims.height / 2 - h.height / 2
                };
            case"reveal":
                return {left: (h.windowDims.width - h.width) / 2, top: h.windowDims.offset.top + e};
            case"reveal full":
                return {left: h.windowDims.offset.left, top: h.windowDims.offset.top};
            case"left bottom":
                return {left: i.offset.left, top: i.offset.top + i.height + e};
            case"right bottom":
                return {left: i.offset.left + i.width + f - h.width, top: i.offset.top + i.height + e};
            default:
                return {
                    left: Foundation.rtl() ? i.offset.left - h.width + i.width : i.offset.left + f,
                    top: i.offset.top + i.height + e
                }
        }
    }

    Foundation.Box = {ImNotTouchingYou: b, GetDimensions: c, GetOffsets: d}
}(jQuery), !function (a) {
    function b(a) {
        var b = {};
        for (var c in a)b[a[c]] = a[c];
        return b
    }

    var c = {
        9: "TAB",
        13: "ENTER",
        27: "ESCAPE",
        32: "SPACE",
        37: "ARROW_LEFT",
        38: "ARROW_UP",
        39: "ARROW_RIGHT",
        40: "ARROW_DOWN"
    }, d = {}, e = {
        keys: b(c), parseKey: function (a) {
            var b = c[a.which || a.keyCode] || String.fromCharCode(a.which).toUpperCase();
            return b = b.replace(/\W+/, ""), a.shiftKey && (b = "SHIFT_" + b), a.ctrlKey && (b = "CTRL_" + b), a.altKey && (b = "ALT_" + b), b = b.replace(/_$/, "")
        }, handleKey: function (b, c, e) {
            var f, g, h, i = d[c], j = this.parseKey(b);
            if (i)if (f = "undefined" == typeof i.ltr ? i : Foundation.rtl() ? a.extend({}, i.ltr, i.rtl) : a.extend({}, i.rtl, i.ltr), g = f[j], h = e[g], h && "function" == typeof h) {
                var k = h.apply();
                (e.handled || "function" == typeof e.handled) && e.handled(k)
            } else(e.unhandled || "function" == typeof e.unhandled) && e.unhandled()
        }, findFocusable: function (b) {
            return !!b && b.find("a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), iframe, object, embed, *[tabindex], *[contenteditable]").filter(function () {
                    return !(!a(this).is(":visible") || a(this).attr("tabindex") < 0)
                })
        }, register: function (a, b) {
            d[a] = b
        }, trapFocus: function (a) {
            var b = Foundation.Keyboard.findFocusable(a), c = b.eq(0), d = b.eq(-1);
            a.on("keydown.zf.trapfocus", function (a) {
                a.target === d[0] && "TAB" === Foundation.Keyboard.parseKey(a) ? (a.preventDefault(), c.focus()) : a.target === c[0] && "SHIFT_TAB" === Foundation.Keyboard.parseKey(a) && (a.preventDefault(), d.focus())
            })
        }, releaseFocus: function (a) {
            a.off("keydown.zf.trapfocus")
        }
    };
    Foundation.Keyboard = e
}(jQuery), !function (a) {
    function b(a) {
        var b = {};
        return "string" != typeof a ? b : (a = a.trim().slice(1, -1)) ? b = a.split("&").reduce(function (a, b) {
            var c = b.replace(/\+/g, " ").split("="), d = c[0], e = c[1];
            return d = decodeURIComponent(d), e = void 0 === e ? null : decodeURIComponent(e), a.hasOwnProperty(d) ? Array.isArray(a[d]) ? a[d].push(e) : a[d] = [a[d], e] : a[d] = e, a
        }, {}) : b
    }

    var c = {
        queries: [], current: "", _init: function () {
            var c, d = this, e = a(".foundation-mq").css("font-family");
            c = b(e);
            for (var f in c)c.hasOwnProperty(f) && d.queries.push({
                name: f,
                value: "only screen and (min-width: " + c[f] + ")"
            });
            this.current = this._getCurrentSize(), this._watcher()
        }, atLeast: function (a) {
            var b = this.get(a);
            return !!b && window.matchMedia(b).matches
        }, is: function (a) {
            return a = a.trim().split(" "), a.length > 1 && "only" === a[1] ? a[0] === this._getCurrentSize() : this.atLeast(a[0])
        }, get: function (a) {
            for (var b in this.queries)if (this.queries.hasOwnProperty(b)) {
                var c = this.queries[b];
                if (a === c.name)return c.value
            }
            return null
        }, _getCurrentSize: function () {
            for (var a, b = 0; b < this.queries.length; b++) {
                var c = this.queries[b];
                window.matchMedia(c.value).matches && (a = c)
            }
            return "object" === ("undefined" == typeof a ? "undefined" : _typeof(a)) ? a.name : a
        }, _watcher: function () {
            var b = this;
            a(window).on("resize.zf.mediaquery", function () {
                var c = b._getCurrentSize(), d = b.current;
                c !== d && (b.current = c, a(window).trigger("changed.zf.mediaquery", [c, d]))
            })
        }
    };
    Foundation.MediaQuery = c, window.matchMedia || (window.matchMedia = function () {
        var a = window.styleMedia || window.media;
        if (!a) {
            var b = document.createElement("style"), c = document.getElementsByTagName("script")[0], d = null;
            b.type = "text/css", b.id = "matchmediajs-test", c && c.parentNode && c.parentNode.insertBefore(b, c), d = "getComputedStyle" in window && window.getComputedStyle(b, null) || b.currentStyle, a = {
                matchMedium: function (a) {
                    var c = "@media " + a + "{ #matchmediajs-test { width: 1px; } }";
                    return b.styleSheet ? b.styleSheet.cssText = c : b.textContent = c, "1px" === d.width
                }
            }
        }
        return function (b) {
            return {matches: a.matchMedium(b || "all"), media: b || "all"}
        }
    }()), Foundation.MediaQuery = c
}(jQuery), !function (a) {
    function b(a, b, c) {
        function d(h) {
            g || (g = h), f = h - g, c.apply(b), f < a ? e = window.requestAnimationFrame(d, b) : (window.cancelAnimationFrame(e), b.trigger("finished.zf.animate", [b]).triggerHandler("finished.zf.animate", [b]))
        }

        var e, f, g = null;
        return 0 === a ? (c.apply(b), void b.trigger("finished.zf.animate", [b]).triggerHandler("finished.zf.animate", [b])) : void(e = window.requestAnimationFrame(d))
    }

    function c(b, c, f, g) {
        function h() {
            b || c.hide(), i(), g && g.apply(c)
        }

        function i() {
            c[0].style.transitionDuration = 0, c.removeClass(j + " " + k + " " + f)
        }

        if (c = a(c).eq(0), c.length) {
            var j = b ? d[0] : d[1], k = b ? e[0] : e[1];
            i(), c.addClass(f).css("transition", "none"), requestAnimationFrame(function () {
                c.addClass(j), b && c.show()
            }), requestAnimationFrame(function () {
                c[0].offsetWidth, c.css("transition", "").addClass(k)
            }), c.one(Foundation.transitionend(c), h)
        }
    }

    var d = ["mui-enter", "mui-leave"], e = ["mui-enter-active", "mui-leave-active"], f = {
        animateIn: function (a, b, d) {
            c(!0, a, b, d)
        }, animateOut: function (a, b, d) {
            c(!1, a, b, d)
        }
    };
    Foundation.Move = b, Foundation.Motion = f
}(jQuery), !function (a) {
    var b = {
        Feather: function (b) {
            var c = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "zf";
            b.attr("role", "menubar");
            var d = b.find("li").attr({role: "menuitem"}), e = "is-" + c + "-submenu", f = e + "-item",
                g = "is-" + c + "-submenu-parent";
            d.each(function () {
                var b = a(this), d = b.children("ul");
                d.length && (b.addClass(g).attr({
                    "aria-haspopup": !0,
                    "aria-label": b.children("a:first").text()
                }), "drilldown" === c && b.attr({"aria-expanded": !1}), d.addClass("submenu " + e).attr({
                    "data-submenu": "",
                    role: "menu"
                }), "drilldown" === c && d.attr({"aria-hidden": !0})), b.parent("[data-submenu]").length && b.addClass("is-submenu-item " + f)
            })
        }, Burn: function (a, b) {
            var c = "is-" + b + "-submenu", d = c + "-item", e = "is-" + b + "-submenu-parent";
            a.find(">li, .menu, .menu > li").removeClass(c + " " + d + " " + e + " is-submenu-item submenu is-active").removeAttr("data-submenu").css("display", "")
        }
    };
    Foundation.Nest = b
}(jQuery), !function (a) {
    function b(a, b, c) {
        var d, e, f = this, g = b.duration, h = Object.keys(a.data())[0] || "timer", i = -1;
        this.isPaused = !1, this.restart = function () {
            i = -1, clearTimeout(e), this.start()
        }, this.start = function () {
            this.isPaused = !1, clearTimeout(e), i = i <= 0 ? g : i, a.data("paused", !1), d = Date.now(), e = setTimeout(function () {
                b.infinite && f.restart(), c && "function" == typeof c && c()
            }, i), a.trigger("timerstart.zf." + h)
        }, this.pause = function () {
            this.isPaused = !0, clearTimeout(e), a.data("paused", !0);
            var b = Date.now();
            i -= b - d, a.trigger("timerpaused.zf." + h)
        }
    }

    function c(b, c) {
        function d() {
            e--, 0 === e && c()
        }

        var e = b.length;
        0 === e && c(), b.each(function () {
            if (this.complete || 4 === this.readyState || "complete" === this.readyState) d(); else {
                var b = a(this).attr("src");
                a(this).attr("src", b + "?" + (new Date).getTime()), a(this).one("load", function () {
                    d()
                })
            }
        })
    }

    Foundation.Timer = b, Foundation.onImagesLoaded = c
}(jQuery), function (a) {
    function b() {
        this.removeEventListener("touchmove", c), this.removeEventListener("touchend", b), j = !1
    }

    function c(c) {
        if (a.spotSwipe.preventDefault && c.preventDefault(), j) {
            var d, e = c.touches[0].pageX, g = (c.touches[0].pageY, f - e);
            i = (new Date).getTime() - h, Math.abs(g) >= a.spotSwipe.moveThreshold && i <= a.spotSwipe.timeThreshold && (d = g > 0 ? "left" : "right"), d && (c.preventDefault(), b.call(this), a(this).trigger("swipe", d).trigger("swipe" + d))
        }
    }

    function d(a) {
        1 == a.touches.length && (f = a.touches[0].pageX, g = a.touches[0].pageY, j = !0, h = (new Date).getTime(), this.addEventListener("touchmove", c, !1), this.addEventListener("touchend", b, !1))
    }

    function e() {
        this.addEventListener && this.addEventListener("touchstart", d, !1)
    }

    a.spotSwipe = {
        version: "1.0.0",
        enabled: "ontouchstart" in document.documentElement,
        preventDefault: !1,
        moveThreshold: 75,
        timeThreshold: 200
    };
    var f, g, h, i, j = !1;
    a.event.special.swipe = {setup: e}, a.each(["left", "up", "down", "right"], function () {
        a.event.special["swipe" + this] = {
            setup: function () {
                a(this).on("swipe", a.noop)
            }
        }
    })
}(jQuery), !function (a) {
    a.fn.addTouch = function () {
        this.each(function (c, d) {
            a(d).bind("touchstart touchmove touchend touchcancel", function () {
                b(event)
            })
        });
        var b = function (a) {
            var b, c = a.changedTouches, d = c[0],
                e = {touchstart: "mousedown", touchmove: "mousemove", touchend: "mouseup"}, f = e[a.type];
            "MouseEvent" in window && "function" == typeof window.MouseEvent ? b = new window.MouseEvent(f, {
                bubbles: !0,
                cancelable: !0,
                screenX: d.screenX,
                screenY: d.screenY,
                clientX: d.clientX,
                clientY: d.clientY
            }) : (b = document.createEvent("MouseEvent"), b.initMouseEvent(f, !0, !0, window, 1, d.screenX, d.screenY, d.clientX, d.clientY, !1, !1, !1, !1, 0, null)), d.target.dispatchEvent(b)
        }
    }
}(jQuery), !function (a) {
    function b() {
        g(), d(), e(), f(), c()
    }

    function c(b) {
        var c = a("[data-yeti-box]"), d = ["dropdown", "tooltip", "reveal"];
        if (b && ("string" == typeof b ? d.push(b) : "object" === ("undefined" == typeof b ? "undefined" : _typeof(b)) && "string" == typeof b[0] && d.concat(b)), c.length) {
            var e = d.map(function (a) {
                return "closeme.zf." + a
            }).join(" ");
            a(window).off(e).on(e, function (b, c) {
                var d = b.namespace.split(".")[0], e = a("[data-" + d + "]").not('[data-yeti-box="' + c + '"]');
                e.each(function () {
                    var b = a(this);
                    b.triggerHandler("close.zf.trigger", [b])
                })
            })
        }
    }

    function d(b) {
        var c = void 0, d = a("[data-resize]");
        d.length && a(window).off("resize.zf.trigger").on("resize.zf.trigger", function (e) {
            c && clearTimeout(c), c = setTimeout(function () {
                h || d.each(function () {
                    a(this).triggerHandler("resizeme.zf.trigger")
                }), d.attr("data-events", "resize")
            }, b || 10)
        })
    }

    function e(b) {
        var c = void 0, d = a("[data-scroll]");
        d.length && a(window).off("scroll.zf.trigger").on("scroll.zf.trigger", function (e) {
            c && clearTimeout(c), c = setTimeout(function () {
                h || d.each(function () {
                    a(this).triggerHandler("scrollme.zf.trigger")
                }), d.attr("data-events", "scroll")
            }, b || 10)
        })
    }

    function f(b) {
        var c = a("[data-mutate]");
        c.length && h && c.each(function () {
            a(this).triggerHandler("mutateme.zf.trigger")
        })
    }

    function g() {
        if (!h)return !1;
        var b = document.querySelectorAll("[data-resize], [data-scroll], [data-mutate]"), c = function (b) {
            var c = a(b[0].target);
            switch (b[0].type) {
                case"attributes":
                    "scroll" === c.attr("data-events") && "data-events" === b[0].attributeName && c.triggerHandler("scrollme.zf.trigger", [c, window.pageYOffset]), "resize" === c.attr("data-events") && "data-events" === b[0].attributeName && c.triggerHandler("resizeme.zf.trigger", [c]), "style" === b[0].attributeName && (c.closest("[data-mutate]").attr("data-events", "mutate"), c.closest("[data-mutate]").triggerHandler("mutateme.zf.trigger", [c.closest("[data-mutate]")]));
                    break;
                case"childList":
                    c.closest("[data-mutate]").attr("data-events", "mutate"), c.closest("[data-mutate]").triggerHandler("mutateme.zf.trigger", [c.closest("[data-mutate]")]);
                    break;
                default:
                    return !1
            }
        };
        if (b.length)for (var d = 0; d <= b.length - 1; d++) {
            var e = new h(c);
            e.observe(b[d], {
                attributes: !0,
                childList: !0,
                characterData: !1,
                subtree: !0,
                attributeFilter: ["data-events", "style"]
            })
        }
    }

    var h = function () {
        for (var a = ["WebKit", "Moz", "O", "Ms", ""],
                 b = 0; b < a.length; b++)if (a[b] + "MutationObserver" in window)return window[a[b] + "MutationObserver"];
        return !1
    }(), i = function (b, c) {
        b.data(c).split(" ").forEach(function (d) {
            a("#" + d)["close" === c ? "trigger" : "triggerHandler"](c + ".zf.trigger", [b])
        })
    };
    a(document).on("click.zf.trigger", "[data-open]", function () {
        i(a(this), "open")
    }), a(document).on("click.zf.trigger", "[data-close]", function () {
        var b = a(this).data("close");
        b ? i(a(this), "close") : a(this).trigger("close.zf.trigger")
    }), a(document).on("click.zf.trigger", "[data-toggle]", function () {
        var b = a(this).data("toggle");
        b ? i(a(this), "toggle") : a(this).trigger("toggle.zf.trigger")
    }), a(document).on("close.zf.trigger", "[data-closable]", function (b) {
        b.stopPropagation();
        var c = a(this).data("closable");
        "" !== c ? Foundation.Motion.animateOut(a(this), c, function () {
            a(this).trigger("closed.zf")
        }) : a(this).fadeOut().trigger("closed.zf")
    }), a(document).on("focus.zf.trigger blur.zf.trigger", "[data-toggle-focus]", function () {
        var b = a(this).data("toggle-focus");
        a("#" + b).triggerHandler("toggle.zf.trigger", [a(this)])
    }), a(window).on("load", function () {
        b()
    }), Foundation.IHearYou = b
}(jQuery), function (a, b) {
    if (a.addEventListener) {
        var c = /\s+(\d+)(w|h)\s+(\d+)(w|h)/, d = /parent-fit["']*\s*:\s*["']*(contain|cover|width)/,
            e = /parent-container["']*\s*:\s*["']*(.+?)(?=(\s|$|,|'|"|;))/, f = /^picture$/i, g = function (a) {
                return getComputedStyle(a, null) || {}
            }, h = {
                getParent: function (b, c) {
                    var d = b, e = b.parentNode;
                    return c && "prev" != c || !e || !f.test(e.nodeName || "") || (e = e.parentNode), "self" != c && (d = "prev" == c ? b.previousElementSibling : c && (e.closest || a.jQuery) ? (e.closest ? e.closest(c) : jQuery(e).closest(c)[0]) || e : e), d
                }, getFit: function (a) {
                    var b, c, f = g(a), i = f.content || f.fontFamily,
                        j = {fit: a._lazysizesParentFit || a.getAttribute("data-parent-fit")};
                    return !j.fit && i && (b = i.match(d)) && (j.fit = b[1]), j.fit ? (c = a._lazysizesParentContainer || a.getAttribute("data-parent-container"), !c && i && (b = i.match(e)) && (c = b[1]), j.parent = h.getParent(a, c)) : j.fit = f.objectFit, j
                }, getImageRatio: function (b) {
                    var d, e, g, h, i = b.parentNode,
                        j = i && f.test(i.nodeName || "") ? i.querySelectorAll("source, img") : [b];
                    for (d = 0; d < j.length; d++)if (b = j[d], e = b.getAttribute(lazySizesConfig.srcsetAttr) || b.getAttribute("srcset") || b.getAttribute("data-pfsrcset") || b.getAttribute("data-risrcset") || "", g = b.getAttribute("media"), g = lazySizesConfig.customMedia[b.getAttribute("data-media") || g] || g, e && (!g || (a.matchMedia && matchMedia(g) || {}).matches)) {
                        h = parseFloat(b.getAttribute("data-aspectratio")), !h && e.match(c) && (h = "w" == RegExp.$2 ? RegExp.$1 / RegExp.$3 : RegExp.$3 / RegExp.$1);
                        break
                    }
                    return h
                }, calculateSize: function (a, b) {
                    var c, d, e, f, g = this.getFit(a), h = g.fit, i = g.parent;
                    return "width" == h || ("contain" == h || "cover" == h) && (e = this.getImageRatio(a)) ? (i ? b = i.clientWidth : i = a, f = b, "width" == h ? f = b : (d = i.clientHeight, d > 40 && (c = b / d) && ("cover" == h && c < e || "contain" == h && c > e) && (f = b * (e / c))), f) : b
                }
            }, i = function b() {
                a.lazySizes && (lazySizes.parentFit || (lazySizes.parentFit = h), a.removeEventListener("lazyunveilread", b, !0))
            };
        a.addEventListener("lazyunveilread", i, !0), b.addEventListener("lazybeforesizes", function (a) {
            if (!a.defaultPrevented) {
                var b = a.target;
                a.detail.width = h.calculateSize(b, a.detail.width)
            }
        }), setTimeout(i)
    }
}(window, document), function (a, b, c) {
    var d, e = a.lazySizes && lazySizes.cfg || a.lazySizesConfig, f = b.createElement("img"),
        g = "sizes" in f && "srcset" in f, h = /\s+\d+h/g, i = function () {
            var a = /\s+(\d+)(w|h)\s+(\d+)(w|h)/, c = Array.prototype.forEach;
            return function (d) {
                var e = b.createElement("img"), f = function (b) {
                    var c, d = b.getAttribute(lazySizesConfig.srcsetAttr);
                    d && (d.match(a) && (c = "w" == RegExp.$2 ? RegExp.$1 / RegExp.$3 : RegExp.$3 / RegExp.$1, c && b.setAttribute("data-aspectratio", c)), b.setAttribute(lazySizesConfig.srcsetAttr, d.replace(h, "")))
                }, g = function (a) {
                    var b = a.target.parentNode;
                    b && "PICTURE" == b.nodeName && c.call(b.getElementsByTagName("source"), f), f(a.target)
                }, i = function () {
                    e.currentSrc && b.removeEventListener("lazybeforeunveil", g)
                };
                d[1] && (b.addEventListener("lazybeforeunveil", g), e.onload = i, e.onerror = i, e.srcset = "data:,a 1w 1h", e.complete && i())
            }
        }();
    if (e || (e = {}, a.lazySizesConfig = e), e.supportsType || (e.supportsType = function (a) {
            return !a
        }), !a.picturefill && !e.pf) {
        if (a.HTMLPictureElement && g)return b.msElementsFromPoint && i(navigator.userAgent.match(/Edge\/(\d+)/)), void(e.pf = function () {
        });
        e.pf = function (b) {
            var c, e;
            if (!a.picturefill)for (c = 0, e = b.elements.length; c < e; c++)d(b.elements[c])
        }, d = function () {
            var c = function (a, b) {
                return a.w - b.w
            }, f = /^\s*\d+px\s*$/, i = function (a) {
                var b, c, d = a.length, e = a[d - 1], f = 0;
                for (f; f < d; f++)if (e = a[f], e.d = e.w / a.w, e.d >= a.d) {
                    !e.cached && (b = a[f - 1]) && b.d > a.d - .13 * Math.pow(a.d, 2.2) && (c = Math.pow(b.d - .6, 1.6), b.cached && (b.d += .15 * c), b.d + (e.d - a.d) * c > a.d && (e = b));
                    break
                }
                return e
            }, j = function () {
                var a, b = /(([^,\s].[^\s]+)\s+(\d+)w)/g, c = /\s/, d = function (b, c, d, e) {
                    a.push({c: c, u: d, w: 1 * e})
                };
                return function (e) {
                    return a = [], e = e.trim(), e.replace(h, "").replace(b, d), a.length || !e || c.test(e) || a.push({
                        c: e,
                        u: e,
                        w: 99
                    }), a
                }
            }(), k = function a() {
                a.init || (a.init = !0, addEventListener("resize", function () {
                    var a, c = b.getElementsByClassName("lazymatchmedia"), e = function () {
                        var a, b;
                        for (a = 0, b = c.length; a < b; a++)d(c[a])
                    };
                    return function () {
                        clearTimeout(a), a = setTimeout(e, 66)
                    }
                }()))
            }, l = function (b, c) {
                var d, f = b.getAttribute("srcset") || b.getAttribute(e.srcsetAttr);
                !f && c && (f = b._lazypolyfill ? b._lazypolyfill._set : b.getAttribute(e.srcAttr) || b.getAttribute("src")), b._lazypolyfill && b._lazypolyfill._set == f || (d = j(f || ""), c && b.parentNode && (d.isPicture = "PICTURE" == b.parentNode.nodeName.toUpperCase(), d.isPicture && a.matchMedia && (lazySizes.aC(b, "lazymatchmedia"), k())), d._set = f, Object.defineProperty(b, "_lazypolyfill", {
                    value: d,
                    writable: !0
                }))
            }, m = function (b) {
                var c = a.devicePixelRatio || 1, d = lazySizes.getX && lazySizes.getX(b);
                return Math.min(d || c, 2.5, c)
            }, n = function (b) {
                return a.matchMedia ? (n = function (a) {
                    return !a || (matchMedia(a) || {}).matches
                })(b) : !b
            }, o = function (a) {
                var b, d, g, h, j, k, o;
                if (h = a, l(h, !0), j = h._lazypolyfill, j.isPicture)for (d = 0, b = a.parentNode.getElementsByTagName("source"), g = b.length; d < g; d++)if (e.supportsType(b[d].getAttribute("type"), a) && n(b[d].getAttribute("media"))) {
                    h = b[d], l(h), j = h._lazypolyfill;
                    break
                }
                return j.length > 1 ? (o = h.getAttribute("sizes") || "", o = f.test(o) && parseInt(o, 10) || lazySizes.gW(a, a.parentNode), j.d = m(a), !j.src || !j.w || j.w < o ? (j.w = o, k = i(j.sort(c)), j.src = k) : k = j.src) : k = j[0], k
            }, p = function (a) {
                if (!g || !a.parentNode || "PICTURE" == a.parentNode.nodeName.toUpperCase()) {
                    var b = o(a);
                    b && b.u && a._lazypolyfill.cur != b.u && (a._lazypolyfill.cur = b.u, b.cached = !0, a.setAttribute(e.srcAttr, b.u), a.setAttribute("src", b.u))
                }
            };
            return p.parse = j, p
        }(), e.loadedClass && e.loadingClass && !function () {
            var a = [];
            ['img[sizes$="px"][srcset].', "picture > img:not([srcset])."].forEach(function (b) {
                a.push(b + e.loadedClass), a.push(b + e.loadingClass)
            }), e.pf({elements: b.querySelectorAll(a.join(", "))})
        }()
    }
}(window, document), function (a) {
    var b, c = a.createElement("img");
    !("srcset" in c) || "sizes" in c || window.HTMLPictureElement || (b = /^picture$/i, a.addEventListener("lazybeforeunveil", function (c) {
        var d, e, f, g, h, i, j;
        !c.defaultPrevented && !lazySizesConfig.noIOSFix && (d = c.target) && (f = d.getAttribute(lazySizesConfig.srcsetAttr)) && (e = d.parentNode) && ((h = b.test(e.nodeName || "")) || (g = d.getAttribute("sizes") || d.getAttribute(lazySizesConfig.sizesAttr))) && (i = h ? e : a.createElement("picture"), d._lazyImgSrc || Object.defineProperty(d, "_lazyImgSrc", {
            value: a.createElement("source"),
            writable: !0
        }), j = d._lazyImgSrc, g && j.setAttribute("sizes", g), j.setAttribute(lazySizesConfig.srcsetAttr, f), d.setAttribute("data-pfsrcset", f), d.removeAttribute(lazySizesConfig.srcsetAttr), h || (e.insertBefore(i, d), i.appendChild(d)), i.insertBefore(j, d))
    }))
}(document), function () {
    if (window.addEventListener) {
        var a = /\s+/g, b = /\s*\|\s+|\s+\|\s*/g, c = /^(.+?)(?:\s+\[\s*(.+?)\s*\])?$/, d = /\(|\)|'/,
            e = {contain: 1, cover: 1}, f = function (a) {
                var b = lazySizes.gW(a, a.parentNode);
                return (!a._lazysizesWidth || b > a._lazysizesWidth) && (a._lazysizesWidth = b), a._lazysizesWidth
            }, g = function (a) {
                var b;
                return b = (getComputedStyle(a) || {
                    getPropertyValue: function () {
                    }
                }).getPropertyValue("background-size"), !e[b] && e[a.style.backgroundSize] && (b = a.style.backgroundSize), b
            }, h = function (d, e, f) {
                var g = document.createElement("picture"), h = e.getAttribute(lazySizesConfig.sizesAttr),
                    i = e.getAttribute("data-ratio"), j = e.getAttribute("data-optimumx");
                e._lazybgset && e._lazybgset.parentNode == e && e.removeChild(e._lazybgset), Object.defineProperty(f, "_lazybgset", {
                    value: e,
                    writable: !0
                }), Object.defineProperty(e, "_lazybgset", {
                    value: g,
                    writable: !0
                }), d = d.replace(a, " ").split(b), g.style.display = "none", f.className = lazySizesConfig.lazyClass, 1 != d.length || h || (h = "auto"), d.forEach(function (a) {
                    var b = document.createElement("source");
                    h && "auto" != h && b.setAttribute("sizes", h), a.match(c) && (b.setAttribute(lazySizesConfig.srcsetAttr, RegExp.$1), RegExp.$2 && b.setAttribute("media", lazySizesConfig.customMedia[RegExp.$2] || RegExp.$2)), g.appendChild(b)
                }), h && (f.setAttribute(lazySizesConfig.sizesAttr, h), e.removeAttribute(lazySizesConfig.sizesAttr), e.removeAttribute("sizes")), j && f.setAttribute("data-optimumx", j), i && f.setAttribute("data-ratio", i), g.appendChild(f), e.appendChild(g)
            }, i = function (a) {
                if (a.target._lazybgset) {
                    var b = a.target, c = b._lazybgset, e = b.currentSrc || b.src;
                    e && (c.style.backgroundImage = "url(" + (d.test(e) ? JSON.stringify(e) : e) + ")"), b._lazybgsetLoading && (lazySizes.fire(c, "_lazyloaded", {}, !1, !0), delete b._lazybgsetLoading)
                }
            };
        addEventListener("lazybeforeunveil", function (a) {
            var b, c, d;
            !a.defaultPrevented && (b = a.target.getAttribute("data-bgset")) && (d = a.target, c = document.createElement("img"), c.alt = "", c._lazybgsetLoading = !0, a.detail.firesLoad = !0, h(b, d, c), setTimeout(function () {
                lazySizes.loader.unveil(c), lazySizes.rAF(function () {
                    lazySizes.fire(c, "_lazyloaded", {}, !0, !0), c.complete && i({target: c})
                })
            }))
        }), document.addEventListener("load", i, !0), window.addEventListener("lazybeforesizes", function (a) {
            if (a.target._lazybgset && a.detail.dataAttr) {
                var b = a.target._lazybgset, c = g(b);
                e[c] && (a.target._lazysizesParentFit = c, lazySizes.rAF(function () {
                    a.target.setAttribute("data-parent-fit", c), a.target._lazysizesParentFit && delete a.target._lazysizesParentFit
                }))
            }
        }, !0), document.documentElement.addEventListener("lazybeforesizes", function (a) {
            !a.defaultPrevented && a.target._lazybgset && (a.detail.width = f(a.target._lazybgset))
        })
    }
}(), function (a, b) {
    var c = b(a, a.document);
    a.lazySizes = c, "object" == ("undefined" == typeof module ? "undefined" : _typeof(module)) && module.exports && (module.exports = c)
}(window, function (a, b) {
    if (b.getElementsByClassName) {
        var c, d = b.documentElement, e = a.Date, f = a.HTMLPictureElement, g = "addEventListener", h = "getAttribute",
            i = a[g], j = a.setTimeout, k = a.requestAnimationFrame || j, l = a.requestIdleCallback, m = /^picture$/i,
            n = ["load", "error", "lazyincluded", "_lazyloaded"], o = {}, p = Array.prototype.forEach,
            q = function (a, b) {
                return o[b] || (o[b] = new RegExp("(\\s|^)" + b + "(\\s|$)")), o[b].test(a[h]("class") || "") && o[b]
            }, r = function (a, b) {
                q(a, b) || a.setAttribute("class", (a[h]("class") || "").trim() + " " + b)
            }, s = function (a, b) {
                var c;
                (c = q(a, b)) && a.setAttribute("class", (a[h]("class") || "").replace(c, " "))
            }, t = function a(b, c, d) {
                var e = d ? g : "removeEventListener";
                d && a(b, c), n.forEach(function (a) {
                    b[e](a, c)
                })
            }, u = function (a, c, d, e, f) {
                var g = b.createEvent("CustomEvent");
                return g.initCustomEvent(c, !e, !f, d || {}), a.dispatchEvent(g), g
            }, v = function (b, d) {
                var e;
                !f && (e = a.picturefill || c.pf) ? e({reevaluate: !0, elements: [b]}) : d && d.src && (b.src = d.src)
            }, w = function (a, b) {
                return (getComputedStyle(a, null) || {})[b]
            }, x = function (a, b, d) {
                for (d = d || a.offsetWidth; d < c.minSize && b && !a._lazysizesWidth;)d = b.offsetWidth, b = b.parentNode;
                return d
            }, y = function () {
                var a, c, d = [], e = function () {
                    var b;
                    for (a = !0, c = !1; d.length;)b = d.shift(), b[0].apply(b[1], b[2]);
                    a = !1
                }, f = function (f) {
                    a ? f.apply(this, arguments) : (d.push([f, this, arguments]), c || (c = !0, (b.hidden ? j : k)(e)))
                };
                return f._lsFlush = e, f
            }(), z = function (a, b) {
                return b ? function () {
                    y(a)
                } : function () {
                    var b = this, c = arguments;
                    y(function () {
                        a.apply(b, c)
                    })
                }
            }, A = function (a) {
                var b, c = 0, d = 125, f = 666, g = f, h = function () {
                    b = !1, c = e.now(), a()
                }, i = l ? function () {
                    l(h, {timeout: g}), g !== f && (g = f)
                } : z(function () {
                    j(h)
                }, !0);
                return function (a) {
                    var f;
                    (a = a === !0) && (g = 44), b || (b = !0, f = d - (e.now() - c), f < 0 && (f = 0), a || f < 9 && l ? i() : j(i, f))
                }
            }, B = function (a) {
                var b, c, d = 99, f = function () {
                    b = null, a()
                }, g = function a() {
                    var b = e.now() - c;
                    b < d ? j(a, d - b) : (l || f)(f)
                };
                return function () {
                    c = e.now(), b || (b = j(g, d))
                }
            }, C = function () {
                var f, k, l, n, o, x, C, E, F, G, H, I, J, K, L, M = /^img$/i, N = /^iframe$/i,
                    O = "onscroll" in a && !/glebot/.test(navigator.userAgent), P = 0, Q = 0, R = 0, S = -1,
                    T = function a(b) {
                        R--, b && b.target && t(b.target, a), (!b || R < 0 || !b.target) && (R = 0)
                    }, U = function (a, c) {
                        var e, f = a, g = "hidden" == w(b.body, "visibility") || "hidden" != w(a, "visibility");
                        for (F -= c, I += c, G -= c, H += c; g && (f = f.offsetParent) && f != b.body && f != d;)g = (w(f, "opacity") || 1) > 0, g && "visible" != w(f, "overflow") && (e = f.getBoundingClientRect(), g = H > e.left && G < e.right && I > e.top - 1 && F < e.bottom + 1);
                        return g
                    }, V = function () {
                        var a, e, g, i, j, m, n, p, q;
                        if ((o = c.loadMode) && R < 8 && (a = f.length)) {
                            e = 0, S++, null == K && ("expand" in c || (c.expand = d.clientHeight > 500 && d.clientWidth > 500 ? 500 : 370), J = c.expand, K = J * c.expFactor), Q < K && R < 1 && S > 2 && o > 2 && !b.hidden ? (Q = K, S = 0) : Q = o > 1 && S > 1 && R < 6 ? J : P;
                            for (; e < a; e++)if (f[e] && !f[e]._lazyRace)if (O)if ((p = f[e][h]("data-expand")) && (m = 1 * p) || (m = Q), q !== m && (C = innerWidth + m * L, E = innerHeight + m, n = m * -1, q = m), g = f[e].getBoundingClientRect(), (I = g.bottom) >= n && (F = g.top) <= E && (H = g.right) >= n * L && (G = g.left) <= C && (I || H || G || F) && (l && R < 3 && !p && (o < 3 || S < 4) || U(f[e], m))) {
                                if (ba(f[e]), j = !0, R > 9)break
                            } else!j && l && !i && R < 4 && S < 4 && o > 2 && (k[0] || c.preloadAfterLoad) && (k[0] || !p && (I || H || G || F || "auto" != f[e][h](c.sizesAttr))) && (i = k[0] || f[e]); else ba(f[e]);
                            i && !j && ba(i)
                        }
                    }, W = A(V), X = function (a) {
                        r(a.target, c.loadedClass), s(a.target, c.loadingClass), t(a.target, Z)
                    }, Y = z(X), Z = function (a) {
                        Y({target: a.target})
                    }, $ = function (a, b) {
                        try {
                            a.contentWindow.location.replace(b)
                        } catch (c) {
                            a.src = b
                        }
                    }, _ = function (a) {
                        var b, d, e = a[h](c.srcsetAttr);
                        (b = c.customMedia[a[h]("data-media") || a[h]("media")]) && a.setAttribute("media", b), e && a.setAttribute("srcset", e), b && (d = a.parentNode, d.insertBefore(a.cloneNode(), a), d.removeChild(a))
                    }, aa = z(function (a, b, d, e, f) {
                        var g, i, k, l, o, q;
                        (o = u(a, "lazybeforeunveil", b)).defaultPrevented || (e && (d ? r(a, c.autosizesClass) : a.setAttribute("sizes", e)), i = a[h](c.srcsetAttr), g = a[h](c.srcAttr), f && (k = a.parentNode, l = k && m.test(k.nodeName || "")), q = b.firesLoad || "src" in a && (i || g || l), o = {target: a}, q && (t(a, T, !0), clearTimeout(n), n = j(T, 2500), r(a, c.loadingClass), t(a, Z, !0)), l && p.call(k.getElementsByTagName("source"), _), i ? a.setAttribute("srcset", i) : g && !l && (N.test(a.nodeName) ? $(a, g) : a.src = g), (i || l) && v(a, {src: g})), y(function () {
                            a._lazyRace && delete a._lazyRace, s(a, c.lazyClass), q && !a.complete || (q ? T(o) : R--, X(o))
                        })
                    }), ba = function (a) {
                        var b, d = M.test(a.nodeName), e = d && (a[h](c.sizesAttr) || a[h]("sizes")), f = "auto" == e;
                        (!f && l || !d || !a.src && !a.srcset || a.complete || q(a, c.errorClass)) && (b = u(a, "lazyunveilread").detail, f && D.updateElem(a, !0, a.offsetWidth), a._lazyRace = !0, R++, aa(a, b, f, e, d))
                    }, ca = function a() {
                        if (!l) {
                            if (e.now() - x < 999)return void j(a, 999);
                            var b = B(function () {
                                c.loadMode = 3, W()
                            });
                            l = !0, c.loadMode = 3, W(), i("scroll", function () {
                                3 == c.loadMode && (c.loadMode = 2), b()
                            }, !0)
                        }
                    };
                return {
                    _: function () {
                        x = e.now(), f = b.getElementsByClassName(c.lazyClass),
                            k = b.getElementsByClassName(c.lazyClass + " " + c.preloadClass), L = c.hFac, i("scroll", W, !0), i("resize", W, !0), a.MutationObserver ? new MutationObserver(W).observe(d, {
                            childList: !0,
                            subtree: !0,
                            attributes: !0
                        }) : (d[g]("DOMNodeInserted", W, !0), d[g]("DOMAttrModified", W, !0), setInterval(W, 999)), i("hashchange", W, !0), ["focus", "mouseover", "click", "load", "transitionend", "animationend", "webkitAnimationEnd"].forEach(function (a) {
                            b[g](a, W, !0)
                        }), /d$|^c/.test(b.readyState) ? ca() : (i("load", ca), b[g]("DOMContentLoaded", W), j(ca, 2e4)), f.length ? V() : W()
                    }, checkElems: W, unveil: ba
                }
            }(), D = function () {
                var a, d = z(function (a, b, c, d) {
                    var e, f, g;
                    if (a._lazysizesWidth = d, d += "px", a.setAttribute("sizes", d), m.test(b.nodeName || ""))for (e = b.getElementsByTagName("source"), f = 0, g = e.length; f < g; f++)e[f].setAttribute("sizes", d);
                    c.detail.dataAttr || v(a, c.detail)
                }), e = function (a, b, c) {
                    var e, f = a.parentNode;
                    f && (c = x(a, f, c), e = u(a, "lazybeforesizes", {
                        width: c,
                        dataAttr: !!b
                    }), e.defaultPrevented || (c = e.detail.width, c && c !== a._lazysizesWidth && d(a, f, e, c)))
                }, f = function () {
                    var b, c = a.length;
                    if (c)for (b = 0; b < c; b++)e(a[b])
                }, g = B(f);
                return {
                    _: function () {
                        a = b.getElementsByClassName(c.autosizesClass), i("resize", g)
                    }, checkElems: g, updateElem: e
                }
            }(), E = function a() {
                a.i || (a.i = !0, D._(), C._())
            };
        return function () {
            var b, d = {
                lazyClass: "lazyload",
                loadedClass: "lazyloaded",
                loadingClass: "lazyloading",
                preloadClass: "lazypreload",
                errorClass: "lazyerror",
                autosizesClass: "lazyautosizes",
                srcAttr: "data-src",
                srcsetAttr: "data-srcset",
                sizesAttr: "data-sizes",
                minSize: 40,
                customMedia: {},
                init: !0,
                expFactor: 1.5,
                hFac: .8,
                loadMode: 2
            };
            c = a.lazySizesConfig || a.lazysizesConfig || {};
            for (b in d)b in c || (c[b] = d[b]);
            a.lazySizesConfig = c, j(function () {
                c.init && E()
            })
        }(), {cfg: c, autoSizer: D, loader: C, init: E, uP: v, aC: r, rC: s, hC: q, fire: u, gW: x, rAF: y}
    }
}), function (a, b, c) {
    function d() {
        if (a.lazySizes && !f) {
            var c = b.documentElement, h = function () {
                var a, b = function () {
                    j.checkElements(), a = !1
                };
                return function () {
                    a || (a = !0, setTimeout(b, 999))
                }
            }();
            e = lazySizes.cfg, removeEventListener("lazybeforeunveil", d), "unloadClass" in e || (e.unloadClass = "lazyunload"), "unloadedClass" in e || (e.unloadedClass = "lazyunloaded"), "unloadHidden" in e || (e.unloadHidden = !0), "emptySrc" in e || (e.emptySrc = "data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="), "autoUnload" in e || (e.autoUnload = !0), "unloadPixelThreshold" in e || (e.unloadPixelThreshold = 6e4), e.autoUnload && c.addEventListener("load", function (a) {
                a.target.naturalWidth * a.target.naturalHeight > e.unloadPixelThreshold && a.target.className && a.target.className.indexOf && a.target.className.indexOf(lazySizesConfig.loadingClass) != -1 && a.target.className.indexOf(lazySizesConfig.preloadClass) == -1 && lazySizes.aC(a.target, lazySizesConfig.unloadClass)
            }, !0), lazySizes.unloader = j, g = 1.1 * (e.expand * e.expFactor + 99), f = b.getElementsByClassName([e.unloadClass, e.loadedClass].join(" ")), setInterval(h, 9999), addEventListener("lazybeforeunveil", h), addEventListener("lazybeforeunveil", j._reload, !0)
        }
    }

    if (b.addEventListener) {
        var e, f, g, h = [], i = a.requestAnimationFrame || setTimeout, j = {
            checkElements: function () {
                var a, b, c, d = g * -1, k = d, l = innerHeight + g, m = innerWidth + g;
                for (a = 0, b = f.length; a < b; a++)c = f[a].getBoundingClientRect(), (c.top > l || c.bottom < d || c.left > m || c.right < k || e.unloadHidden && !c.top && !c.bottom && !c.left && !c.right) && h.push(f[a]);
                i(j.unloadElements)
            }, unload: function (a) {
                var b, c, d, f, g = a.parentNode;
                if (lazySizes.rC(a, e.loadedClass), a.getAttribute(e.srcsetAttr) && (a.setAttribute("srcset", e.emptySrc), c = !0), g && "PICTURE" == g.nodeName.toUpperCase()) {
                    for (b = g.getElementsByTagName("source"), d = 0, f = b.length; d < f; d++)b[d].setAttribute("srcset", e.emptySrc);
                    c = !0
                }
                lazySizes.hC(a, e.autosizesClass) && (lazySizes.rC(a, e.autosizesClass), a.setAttribute(e.sizesAttr, "auto")), (c || a.getAttribute(e.srcAttr)) && (a.src = e.emptySrc), lazySizes.aC(a, e.unloadedClass), lazySizes.aC(a, e.lazyClass), lazySizes.fire(a, "lazyafterunload")
            }, unloadElements: function (a) {
                for (a = Array.isArray(a) ? a : h; a.length;)j.unload(a.shift())
            }, _reload: function (a) {
                lazySizes.hC(a.target, e.unloadedClass) && a.detail && (a.detail.reloaded = !0, lazySizes.rC(a.target, e.unloadedClass))
            }
        };
        addEventListener("lazybeforeunveil", d)
    }
}(window, document), function (a) {
}(jQuery), jQuery(document).foundation(), function (a, b) {
    var c = b.getElementsByClassName("mobile-trigger"), d = a(c), e = a(".main-nav"), f = a(b.body),
        g = a("body, html"), h = 960, i = a(".featured-slider"), j = c[0].childNodes[0], k = a(window),
        l = function (a, b, c) {
            var d;
            return function () {
                var e = this, f = arguments, g = function () {
                    d = null, c || a.apply(e, f)
                }, h = c && !d;
                clearTimeout(d), d = setTimeout(g, b), h && a.apply(e, f)
            }
        }, m = function () {
            i.slick({
                autoplay: !0,
                slidesToShow: 1,
                slidesToScroll: 1,
                dots: !0,
                autoplaySpeed: 2500,
                speed: 2500,
                fade: !0,
                arrows: !0
            })
        }, n = function () {
            d.hasClass("is-active") ? j.nodeValue = "Close" : j.nodeValue = " "
        }, o = function () {
            d.attr({
                "aria-label": "Site Navigation Toggle",
                "aria-expanded": !1,
                "aria-controls": "navigation",
                "aria-haspopup": !0
            }), e.attr({"aria-hidden": !0, "aria-labelledby": "trigger-nav"})
        }, p = function () {
            d.attr("aria-expanded", !0), e.attr("aria-hidden", !1)
        }, q = function () {
            d.attr("aria-expanded", !1), e.attr("aria-hidden", !0)
        }, r = function () {
            d.removeAttr("aria-label aria-expanded aria-controls aria-haspopup"), e.removeAttr("aria-hidden aria-labelledby")
        }, s = l(function (a) {
            k.width() >= h ? (f.hasClass("mobile-nav-active") && (g.removeClass("no-scroll"), f.removeClass("mobile-nav-active"), f.addClass("desktop-nav-active"), d.removeClass("is-active")), n(), r()) : o()
        }, 500), t = function (a) {
            a && (a.preventDefault(), a.stopPropagation()), g.toggleClass("no-scroll"), f.toggleClass("desktop-nav-active mobile-nav-active"), d.toggleClass("is-active"), d.hasClass("is-active") ? p() : (q(), i.slick("unslick"), m()), n()
        }, u = function () {
            f.on("click", ".mobile-trigger", function (a) {
                t(a)
            }), window.addEventListener("resize", s, !1)
        }, v = function () {
            c.length && (f.addClass("desktop-nav-active"), u())
        };
    v()
}(jQuery, document), function (a) {
    function b() {
        var a = h.width(), b = h.height() - 150;
        return a < 960 ? (l(), e.slick("unslick"), void k()) : (e.height(b), f.height(b), void c())
    }

    function c() {
        var a = h.width(), b = h.height() - 150;
        window.opt = {
            correctW: 1434,
            correctH: 651,
            correctRatio: null,
            currentRatio: null,
            newW: a,
            newH: b,
            moveTop: 0,
            moveLeft: 0
        }, opt.currentRatio = a / b, opt.correctRatio = opt.correctW / opt.correctH, opt.currentRatio <= opt.correctRatio ? (opt.newW = opt.newH * opt.correctRatio, opt.moveLeft = parseInt(opt.newW - a) / 2 * -1) : (opt.newH = opt.newW / opt.correctRatio, opt.moveTop = parseInt(opt.newH - b) / 2 * -1), g.css({
            width: opt.newW + "px",
            height: opt.newH + "px",
            top: opt.moveTop + "px",
            left: opt.moveLeft + "px",
            "max-width": "none"
        })
    }

    var d = document.getElementsByClassName("featured-slider"), e = a(d), f = a(".slider-image"),
        g = a(".slider-image > img"), h = a(window), i = function () {
            d.length && (k(), j(), b())
        }, j = function () {
            h.resize(function () {
                d.length && b()
            })
        }, k = function () {
            e.slick({
                autoplay: !0,
                slidesToShow: 1,
                slidesToScroll: 1,
                dots: !0,
                autoplaySpeed: 2500,
                speed: 2500,
                fade: !0,
                arrows: !0
            })
        }, l = function () {
            g.removeAttr("style"), e.removeAttr("style")
        };
    i()
}(jQuery);
//# sourceMappingURL=app.js.map