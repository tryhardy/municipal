"use strict";!function(){var s=$(".search__button");s.on("click",function(e){e.preventDefault(),"open"==s.attr("data-status")?($(".search").addClass("active"),s.attr("data-status","close")):"close"==s.attr("data-status")&&(s.attr("data-status","open"),$(".search").removeClass("active"))}),$(".search__find").on("click",function(e){e.preventDefault(),"open"==s.attr("data-status")?($(".search").addClass("active"),s.attr("data-status","close")):"close"==s.attr("data-status")&&(s.attr("data-status","open"),$(".search").removeClass("active"))}),$("body").keydown(function(e){27==e.keyCode&&$(".search").hasClass("active")&&($(".search").removeClass("active"),s.attr("data-status","open"))}),$("body").on("click",function(e){$(".search").each(function(){$(".search__input input").is(e.target)||"close"!=s.attr("data-status")||$(".search__button svg").is(e.target)||(s.attr("data-status","open"),$(".search").removeClass("active"))})})}(),$(".menu-mobile").on("click",function(){$(".header__nav").hasClass("active")||$(".header__nav").addClass("active")}),$(".menu-mobile__close-m").on("click",function(){$(".header__nav").hasClass("active")&&$(".header__nav").removeClass("active")}),$(".menu__submenu-icon").on("click",function(){var e=$(this).closest(".menu__item"),s=e.find(".menu__submenu-list"),t=s.prop("scrollHeight");e.hasClass("menu__item--active")?(e.removeClass("menu__item--active"),s.css("height","0px"),$(this).css("transform","rotate(90deg)")):(e.addClass("menu__item--active"),s.css("height",t),$(this).css("transform","rotate(0deg)"))}),$("#sendmail").on("click",function(e){e.preventDefault(),$(".popup").addClass("active")}),$(".popup__close").on("click",function(e){e.preventDefault(),$(".popup").removeClass("active")}),$(".overlay").on("click",function(e){e.preventDefault(),$(".popup").removeClass("active")}),$("body").keydown(function(e){27==e.keyCode&&$(".popup").hasClass("active")&&$(".popup").removeClass("active")}),$(".news-slider__list").slick({infinite:!0,slidesToShow:1,slidesToScroll:1,dots:!0,arrows:!1}),$(".slides").slick({infinite:!0,slidesToShow:4,slidesToScroll:1,dots:!1,arrows:!0,prevArrow:$(".banners__arrows-prev"),nextArrow:$(".banners__arrows-next"),draggable:!0,responsive:[{breakpoint:992,settings:{slidesToShow:2,slidesToScroll:2}},{breakpoint:676,settings:{slidesToShow:1,slidesToScroll:1}}]}),$(".news-detail__slider").slick({infinite:!0,slidesToShow:1,slidesToScroll:1,dots:!1,arrows:!0,prevArrow:$(".buttons__prev"),nextArrow:$(".buttons__next"),draggable:!0,responsive:[{breakpoint:720,settings:{slidesToShow:1,slidesToScroll:1,arrows:!1}}]}),$(".sidebar-menu__open-submenu").click(function(){var e=$(this).parent(".sidebar-menu__item"),s=e.children(".sidebar-menu__submenu").prop("scrollHeight");e.hasClass("sidebar-menu__item--active")?(e.removeClass("sidebar-menu__item--active"),e.children(".sidebar-menu__submenu").css("height","0px"),$(this).css("transform","rotate(45deg)")):(e.addClass("sidebar-menu__item--active"),e.children(".sidebar-menu__submenu").css("height",s),$(this).css("transform","rotate(90deg)"))}),$(document).ready(function(){$(".fancybox").fancybox()}),function(){var e=$(".structure__link"),s=$(".structure__popup-close"),t=$(".structure__popup");e.on("click",function(e){e.preventDefault();var s=$(this).attr("data-id");$(".structure__popup-id-"+s).hasClass("active")?$(".structure__popup-id-"+s).removeClass("active"):$(".structure__popup-id-"+s).addClass("active")}),s.on("click",function(e){var s=$(this).closest(".structure__popup");s.hasClass("active")&&s.removeClass("active")}),t.on("click",function(e){var s=$(this);e.target===s[0]&&s.removeClass("active")}),$("body").keydown(function(e){27==e.keyCode&&t.each(function(){$(this).hasClass("active")&&$(this).removeClass("active")})})}(),function(){$(".translation__info");var e=$(".translation__popup-close"),s=$(".translation__popup");$(".translation__info").on("click",function(e){$(this);$(".translation__popup").hasClass("active")?$(".translation__popup").removeClass("active"):$(".translation__popup").addClass("active")}),e.on("click",function(e){var s=$(this).closest(".translation__popup");s.hasClass("active")&&s.removeClass("active")}),s.on("click",function(e){var s=$(this);e.target===s[0]&&s.removeClass("active")}),$("body").keydown(function(e){27==e.keyCode&&s.each(function(){$(this).hasClass("active")&&$(this).removeClass("active")})})}(),function(){var e=$("input[type=radio]");e.on("click",function(){e.each(function(){var e=$(this),s=e.closest("label.radio");e.is(":checked")?s.addClass("active"):s.removeClass("active")})}),$(document).on("input","textarea[name=form__message]",function(){var e=$(this).val().length;$("#symbol-counter").text(e)}),$("#files").on("change",function(){var e=$(this)[0].files;1==e.length?$("#file-name").text(e[0].name):$("#file-name").text("Выбрано файлов: "+e.length)})}(),function(){var e,s,t=$(".news-pics__important");t&&(e=$(".news-pics__important .news-pics__item").length,s=(t[0].scrollHeight-20*(e-1))/e,$(".news-pics__important .news-pics__item").each(function(e){$(this).css("height",s+"px")}))}();