function animateMenu() {
    var menu = $('.menuBg');
    var nav = $('.mobileNav');

    if (menu.hasClass('showMenu')) { // Hide menu if it's open
        menu.removeClass('showMenu').addClass('hideMenu');
        nav.removeClass('fadeIn');
    } else if (menu.hasClass('hideMenu')) { // Show menu and remove hideMenu
        menu.removeClass('hideMenu').addClass('showMenu');
        nav.addClass('fadeIn')
    } else {
        menu.addClass('showMenu'); // Initial show menu
        nav.addClass('fadeIn');
    }
};

$(document).ready(function () {
    $('.hamburger').on('click', function () {
        $(this).toggleClass('open');
        animateMenu();
    });
    $('.mobileNav a').on('click', function () {
        $('.hamburger').toggleClass('open');
        animateMenu();
    });
});

// RWD NAVIGATION
$(document).ready(function () {
    var $navbar = $(".nav");

    AdjustHeader();
    $(window).scroll(function () {
        AdjustHeader();
    });

    function AdjustHeader() {
        if ($(window).scrollTop() > 1) {
            if (!$navbar.hasClass("padd")) {
                $navbar.addClass("padd");
            }
        } else {
            $navbar.removeClass("padd");
        }
    }
});

// Active link switching
var scrollLink = $('.scroll-p ');
$(window).scroll(function () {
    var scrollbarLocation = $(this).scrollTop();

    scrollLink.each(function () {

        var sectionOffset = $(this.hash).offset().top - 73;

        if (sectionOffset <= scrollbarLocation) {
            $(this).parent().addClass('active');
            $(this).parent().siblings().removeClass('active');
        }
    });
});

// Show or hide the sticky footer button
$(window).on('scroll', function (event) {
    if ($(this).scrollTop() > 600) {
        $('.back-to-top').fadeIn(200)
    } else {
        $('.back-to-top').fadeOut(200)
    }
});

$(function() {
    $('a.scroll-p[href*="#"]:not([href="#"])').on('click', function () {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html, body').animate({
                    scrollTop: (target.offset().top -70)
                }, 1200, "easeInOutExpo");
                return false;
            }
        }
    });
});

$( ".cl-1" ).click(function() {
    $( ".cl-1" ).toggleClass("open");
    $( "#details1" ).toggleClass("open");
});
$( ".cl-2" ).click(function() {
    $( ".cl-2" ).toggleClass("open");
    $( "#details2" ).toggleClass("open");
});
$( ".cl-3" ).click(function() {
    $( ".cl-3" ).toggleClass("open");
    $( "#details3" ).toggleClass("open");
});
$( ".cl-4" ).click(function() {
    $( ".cl-4" ).toggleClass("open");
    $( "#details4" ).toggleClass("open");
});
$( ".cl-5" ).click(function() {
    $( ".cl-5" ).toggleClass("open");
    $( "#details5" ).toggleClass("open");
});
$( ".cl-6" ).click(function() {
    $( ".cl-6" ).toggleClass("open");
    $( "#details6" ).toggleClass("open");
});

var c1 = document.querySelector('.cl-1');
var c2 = document.querySelector('.cl-2');
var c3 = document.querySelector('.cl-3');
var c4 = document.querySelector('.cl-4');
var c5 = document.querySelector('.cl-5');
var c6 = document.querySelector('.cl-6');
c1.onclick = function() {
    
}

console.log(c1);