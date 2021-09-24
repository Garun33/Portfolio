!(function(e) {
    "use strict";
    (window.App = {}),
    e(window).on("load", function(t) {
            e(".preloader").fadeOut("slow"),
                new WOW().init(),
                (function() {
                    if (document.getElementById("map")) {
                        var e = new google.maps.Map(document.getElementById("map"), {
                            zoom: 16,
                            center: {
                                lat: 10.01115,
                                lng: 76.366281
                            },
                            styles: [{
                                    featureType: "water",
                                    elementType: "geometry",
                                    stylers: [{
                                        color: "#e9e9e9"
                                    }, {
                                        lightness: 17
                                    }]
                                },
                                {
                                    featureType: "landscape",
                                    elementType: "geometry",
                                    stylers: [{
                                        color: "#f5f5f5"
                                    }, {
                                        lightness: 20
                                    }]
                                },
                                {
                                    featureType: "road.highway",
                                    elementType: "geometry.fill",
                                    stylers: [{
                                        color: "#ffffff"
                                    }, {
                                        lightness: 17
                                    }]
                                },
                                {
                                    featureType: "road.highway",
                                    elementType: "geometry.stroke",
                                    stylers: [{
                                        color: "#ffffff"
                                    }, {
                                        lightness: 29
                                    }, {
                                        weight: 0.2
                                    }]
                                },
                                {
                                    featureType: "road.arterial",
                                    elementType: "geometry",
                                    stylers: [{
                                        color: "#ffffff"
                                    }, {
                                        lightness: 18
                                    }]
                                },
                                {
                                    featureType: "road.local",
                                    elementType: "geometry",
                                    stylers: [{
                                        color: "#ffffff"
                                    }, {
                                        lightness: 16
                                    }]
                                },
                                {
                                    featureType: "poi",
                                    elementType: "geometry",
                                    stylers: [{
                                        color: "#f5f5f5"
                                    }, {
                                        lightness: 21
                                    }]
                                },
                                {
                                    featureType: "poi.park",
                                    elementType: "geometry",
                                    stylers: [{
                                        color: "#dedede"
                                    }, {
                                        lightness: 21
                                    }]
                                },
                                {
                                    elementType: "labels.text.stroke",
                                    stylers: [{
                                        visibility: "on"
                                    }, {
                                        color: "#ffffff"
                                    }, {
                                        lightness: 16
                                    }]
                                },
                                {
                                    elementType: "labels.text.fill",
                                    stylers: [{
                                        saturation: 36
                                    }, {
                                        color: "#333333"
                                    }, {
                                        lightness: 40
                                    }]
                                },
                                {
                                    elementType: "labels.icon",
                                    stylers: [{
                                        visibility: "off"
                                    }]
                                },
                                {
                                    featureType: "transit",
                                    elementType: "geometry",
                                    stylers: [{
                                        color: "#f2f2f2"
                                    }, {
                                        lightness: 19
                                    }]
                                },
                                {
                                    featureType: "administrative",
                                    elementType: "geometry.fill",
                                    stylers: [{
                                        color: "#fefefe"
                                    }, {
                                        lightness: 20
                                    }]
                                },
                                {
                                    featureType: "administrative",
                                    elementType: "geometry.stroke",
                                    stylers: [{
                                        color: "#fefefe"
                                    }, {
                                        lightness: 17
                                    }, {
                                        weight: 1.2
                                    }]
                                },
                            ],
                        });
                        new google.maps.Marker({
                            position: {
                                lat: 10.00925,
                                lng: 76.360181
                            },
                            icon: new google.maps.MarkerImage("img/svg/marker.svg", null, null, null, new google.maps.Size(50, 50)),
                            map: e
                        });
                    }
                })(),
                e(".counter").counterUp({
                    delay: 10,
                    time: 1e3
                }),
                setTimeout(function() {
                    new Swiper(".swiper-full-screen", {
                        grabCursor: !0,
                        pagination: {
                            el: ".swiper-pagination"
                        }
                    });
                }, 100);
        }),
        e(document).ready(function() {
            e(window).on("resize", function() {
                setTimeout(function() {
                    e(".swiper-full-screen").length > 0 && fullScreenSwiper.onResize();
                }, 500);
            });
            var t = e(".mobile-menu"),
                s = !1;

            function a() {
                t.addClass("active"), (s = !0);
            }

            function n() {
                t.removeClass("active"), (s = !1);
            }!(function() {
                var e = document.querySelector(".mixitup-container");
                if (e) mixitup(e, {
                    animation: {
                        animateResizeContainer: !1
                    }
                });
            })(),
            (function() {
                if (e(".navbar-toggler").length && e(".main-menu").length) {
                    var t = e(".navbar-toggler"),
                        o = e(".menu_close_container"),
                        i = e(".mobile-menu .menu_item");
                    t.on("click", function() {
                            s ? n() : a();
                        }),
                        i.on("click", function() {
                            s && n();
                        }),
                        o.on("click", function() {
                            s ? n() : a();
                        });
                }
            })(),
            e(".client-slider").owlCarousel({
                    loop: !0,
                    nav: !0,
                    margin: 5,
                    dots: !1,
                    autoplay: !0,
                    autoplayTimeout: 4e3,
                    smartSpeed: 500,
                    center: !0,
                    navText: ['<i class="material-icons">keyboard_arrow_left</i>', '<i class="material-icons">keyboard_arrow_right</i>'],
                    responsive: {
                        0: {
                            items: 1
                        },
                        600: {
                            items: 3
                        },
                        1200: {
                            items: 5
                        }
                    },
                }),
                e(".testimonial-slider").owlCarousel({
                    loop: !0,
                    nav: !1,
                    margin: 0,
                    autoplay: !1,
                    autoplayTimeout: 4e3,
                    smartSpeed: 500,
                    responsive: {
                        0: {
                            items: 1
                        },
                        600: {
                            items: 2
                        },
                        1200: {
                            items: 3
                        }
                    }
                });
        }),
        e("a.page-scroll").on("click", function(t) {
            var s = e(this);
            e("html, body")
                .stop()
                .animate({
                    scrollTop: e(s.attr("href")).offset().top - 0
                }, 1250, "easeInOutExpo"),
                t.preventDefault();
        }),
        e(window).on("scroll", function() {
            e(window).scrollTop() > 100 ? e(".fixed-top").addClass("fixed") : e(".fixed-top").removeClass("fixed");
        }),
        e("body").scrollspy({
            target: ".navbar-collapse",
            offset: 70
        }),
        e(".theme-image-placer").each(function() {
            var t = e(this).children("img").attr("src");
            e(this)
                .css("background", 'url("' + t + '")')
                .css("background-position", "initial")
                .css("opacity", "1");
        }),
        e(".videoPopup").magnificPopup({
            disableOn: 700,
            type: "iframe",
            mainClass: "mfp-fade",
            removalDelay: 160,
            preloader: !1,
            fixedContentPos: !1
        }),
        e("form[name='contactForm']").validate({
            rules: {
                name: {
                    required: !0,
                    minlength: 1
                },
                email: {
                    required: !0,
                    email: !0
                },
                subject: "required",
                message: "required"
            },
            messages: {
                name: "Enter Name",
                email: {
                    required: "Enter email address",
                    email: "Enter a valid email address"
                },
                subject: "Enter subject",
                message: "Enter your comments"
            },
            submitHandler: function(t) {
                var s = e(t),
                    a = e("#messageSuccess"),
                    n = e("#messageError"),
                    o = e(this.submitButton);
                o.button("loading"),
                    e.ajax({
                        type: "POST",
                        url: s.attr("action"),
                        data: {
                            name: s.find("#name").val(),
                            email: s.find("#email").val(),
                            subject: s.find("#subject").val(),
                            message: s.find("#message").val()
                        }
                    }).always(function(e, t, i) {
                        if ("success" == e.response)
                            return a.removeClass("hidden"), n.addClass("hidden"), s.find(".minimal").val("").blur().parent().removeClass("has-success").removeClass("has-error").find("label.error").remove(), void o.button("reset");
                        n.removeClass("hidden"), a.addClass("hidden"), s.find(".has-success").removeClass("has-success"), o.button("reset");
                    });
            },
        });
})(jQuery);