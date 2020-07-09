$(document).ready(function () {
    var $navbar = $(".nav-fixed");
    AdjustHeader();
    $(window).scroll(function () {
        AdjustHeader();
    });
    function AdjustHeader() {
        if ($(window).scrollTop() > 100) {
            if (!$navbar.hasClass("nav-fixed-scroll")) {
                $navbar.addClass("nav-fixed-scroll");
            }
        } else {
            $navbar.removeClass("nav-fixed-scroll");
        }
    }
});

$(document).ready(function () {
    var $navbar = $(".back-to-top");
    AdjustHeader();
    $(window).scroll(function () {
        AdjustHeader();
    });
    function AdjustHeader() {
        if ($(window).scrollTop() > 200) {
            if (!$navbar.hasClass("back-to-top-show")) {
                $navbar.addClass("back-to-top-show");
            }
        } else {
            $navbar.removeClass("back-to-top-show");
        }
    }
});

// Active link switching
var scrollLink = $('.scroll-p');
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

$(function() {
    $('a.scroll-p[href*="#"]:not([href="#"])').on('click', function () {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html, body').animate({
                    scrollTop: (target.offset().top -70)
                }, 800, "easeInOutExpo");
                return false;
            }
        }
    });
});

(function() {
    const hamburger = document.querySelector("#hamburger")
    const hiddenMenu = document.querySelector("#hiddenMenu")
    const hiddenMenuLi = document.getElementsByClassName("hiddenMenuLi")
    const main = document.querySelector("#main")
    const scrollTop = document.querySelector("#scrollTop")

    for (var i = 0; i < hiddenMenuLi.length; i++) {
        hiddenMenuLi[i].addEventListener('click', removeClass);
      }

    function removeClass(e) {
        if (hamburger.classList.contains("open")) {
            hamburger.classList.remove("open")
        }

        if (hiddenMenu.classList.contains("open")) {
            hiddenMenu.classList.remove("open")
        }
    }

    hamburger.addEventListener("click", function() {
        this.classList.toggle("open")
        hiddenMenu.classList.toggle("open")
    })

    main.addEventListener("click", function() {
        if (hamburger.classList.contains("open")) {
            hamburger.classList.remove("open")
        }

        if (hiddenMenu.classList.contains("open")) {
            hiddenMenu.classList.remove("open")
        }
    })

    scrollTop.addEventListener("click", function() {
        if (hamburger.classList.contains("open")) {
            hamburger.classList.remove("open")
        }

        if (hiddenMenu.classList.contains("open")) {
            hiddenMenu.classList.remove("open")
        }
    })
})
();

(function(){
    var copys = document.querySelectorAll(".copy");

    for (var i = 0; i < copys.length; i++) {
        copys[i].addEventListener('click', addClass);
      }

    function addClass(e) {
        this.classList.add("copied")
        var _this = this;

        setTimeout(function () {
            _this.classList.remove("copied")
        }, 700);
      }
})
();

var copy = document.querySelectorAll(".copy");

for (const copies of copy) {
  copies.onclick = function() {
    document.execCommand("copy");
  };
  copies.addEventListener("copy", function(event) {
    event.preventDefault();
    if (event.clipboardData) {
      event.clipboardData.setData("text/plain", copies.textContent);
      console.log(event.clipboardData.getData("text"))
    };
  });
};

$().ready(function() {
    var sName = "cookiesok";
    $("#close-cookie-warn").click(function(){
        var oExpire = new Date();
        oExpire.setTime((new Date()).getTime() + 3600000*24*365);
        document.cookie = sName + "=1;expires=" + oExpire;
        $("#cookie-warn").hide("slow");
    });

    var sStr = '; '+ document.cookie +';';
    var nIndex = sStr.indexOf('; '+ escape(sName) +'=');
    if (nIndex === -1) {
        $("#cookie-warn").show();
    }
});