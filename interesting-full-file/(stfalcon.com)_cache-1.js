$(document).ready(function () {
  var timerId = false;
  $(".search-phrase").on("keyup keypress", function (e) {
    var code = e.keyCode || e.which;
    if (code == 13) {
      e.preventDefault();
      return false
    }
  });
  $(document).on("input", ".search-phrase", function (e) {
    e.preventDefault();
    if (timerId) {
      clearTimeout(timerId)
    }
    timerId = setTimeout(sendSearchRequest, 1e3)
  });
  var sendSearchRequest = function () {
    var $searchForm = $("#search-form");
    var $searchResults = $("#search-results");
    $.post($searchForm.attr("action"), $searchForm.serialize(), function (response) {
      if (response.status == "success") {
        var template = _.template($("#search-template").html());
        var posts = "";
        if (response.posts) {
          $searchResults.html("");
          for (var post in response["posts"]) {
            var item = response["posts"][post];
            var imageTag = "";
            if (item["preview_image"]) {
              imageTag = '<img class="preview-image" src="' + item["preview_image"] + '" alt="' + item["title"] + '" />'
            }
            posts += template({postHref: item["url"], title: item["title"], text: item["text"], imageTag: imageTag})
          }
          $("#search-results").append(posts)
        }
      }
      timerId = false
    })
  }
});
$(document).ready(function () {
  $(document).on("submit", ".subscribe-form", function (e) {
    e.preventDefault();
    var $form = $(this);
    $.ajax({
      url: $form.attr("action"),
      type: "POST",
      data: $form.serialize(),
      cache: false,
      async: false,
      success: function (response) {
        if (!response.success) {
          var $renderedForm = $(response.view);
          $renderedForm.find("form").addClass("error-status");
          $form.closest(".subscribe-form-wrap").replaceWith($renderedForm);
          inputChange()
        } else {
          $form.find('input[type="email"]').val("");
          $form.find(".error-list").remove();
          $form.addClass("success-status");
          if (response.message) {
            $form.find(".success-list").append("<li>" + response.message + "</li>")
          }
          inputChange()
        }
        setTimeout(function () {
          var $subscribeForm = $(".subscribe-form");
          $subscribeForm.removeClass("error-status").removeClass("success-status");
          $subscribeForm.find(".error-list").remove();
          $subscribeForm.find(".success-list").empty()
        }, 3e3)
      }
    })
  });
  function inputChange() {
    $("#subscribe_email").keyup(function () {
      $(".error-list").empty()
    })
  }
});
$(function () {
  $(document).on("submit", "#direct-order-form", function (e) {
    e.preventDefault();
    var $directOrderForm = $(this);
    $.ajax({
      url: window.location.href,
      type: "post",
      data: new FormData(this),
      processData: false,
      contentType: false,
      success: function (response) {
        $directOrderForm.replaceWith(response.view)
      }
    })
  });
  $(document).on("click", ".show-mobile-nav", function () {
    if (!$(this).hasClass("current-language")) {
      $("body").addClass("open-navigation open-main-nav")
    } else {
      $("body").addClass("open-navigation open-languages-nav")
    }
  });
  $(document).on("click", ".close-mobile-nav", function () {
    $("body").removeClass("open-navigation open-main-nav open-languages-nav")
  });
  $(window).on("resize", function () {
    if (window.matchMedia && window.matchMedia("(min-width: 800px)").matches) {
      $("body").removeClass("open-navigation open-main-nav open-languages-nav")
    }
  });
  $(document).on("click", ".hire_us", function () {
    $("body").addClass("open-hire_us")
  });
  function resizePos() {
    return (window.innerWidth - 915) / 2 - 49.5
  }

  $(window).resize(function () {
    var windowWidth = resizePos();
    $(".search_button.js-icon-search").css({left: windowWidth, top: "76px"})
  });
  $(document).on("click", ".search_button", function () {
    if ($(window).width() < 838) {
      $(".search-form-wrap").animate({display: "block", width: "100%", height: "toggle", top: "0"}, 450, function () {
        $("#search_searchPhrase").focus()
      });
      $(".search_button").prop("disabled", true).css("cursor", "default");
      var windowWidth = resizePos();
      $(".search_button").addClass("search_button-animate").animate({left: windowWidth, top: "76px"}, 500);
      $("body").addClass("open-search-form");
      setTimeout(function () {
        $("#search-form, #search-results").animate({opacity: "1"}, 500)
      }, 100)
    } else {
      $(".search-form-wrap").animate({width: "toggle", height: "toggle", top: "0"}, 450, function () {
        $(".search_button").toggle();
        $("#search_searchPhrase").focus()
      });
      $(".search_button").prop("disabled", true).css("cursor", "default");
      var windowWidth = resizePos();
      $(".search_button").addClass("search_button-animate").animate({left: windowWidth, top: "76px"}, 500);
      setTimeout(function () {
        $("body").addClass("open-search-form");
        $("#search-form, #search-results").animate({opacity: "1"}, 500)
      }, 450)
    }
  });
  $(document).on("click", ".close-search-form", function () {
    if ($(window).width() < 838) {
      $("body").removeClass("open-search-form");
      $(".search-form-wrap").animate({width: "100%", height: "toggle", top: "92px"}, 450);
      $("#search-form,#search-results").animate({opacity: "0"}, 100);
      $(".search_button").animate({left: "0px", top: "92px"}, 500, function () {
        $(".search_button").removeClass("search_button-animate");
        $(".search_button").prop("disabled", false).css("cursor", "pointer")
      })
    } else {
      $("body").removeClass("open-search-form");
      $(".search_button").toggle();
      $(".search-form-wrap").animate({width: "toggle", height: "toggle", top: "92px"}, 450);
      $("#search-form,#search-results").animate({opacity: "0"}, 100);
      $(".search_button").animate({left: "0px", top: "92px"}, 500, function () {
        $(".search_button").removeClass("search_button-animate");
        $(".search_button").prop("disabled", false).css("cursor", "pointer")
      })
    }
  });
  var yearsCnt = $(".years-count"),
    startPos;
  var yearList = $(".year-slider-wrapp li");
  var usersList = $(".team-list li");

  function updateYear(value) {
    $("#view-year").html(value)
  }

  function changeUsers(selected_year) {
    $.each(usersList, function (index, value) {
      var start_year = $(value).data("start");
      var end_year = $(value).data("end");
      var active = $(value).data("active");
      if (0 === start_year && 9999 === end_year) {
        if (1 === active) {
          $(value).show()
        } else {
          $(value).hide()
        }
      } else if (selected_year >= start_year && selected_year <= end_year) {
        $(value).show()
      } else {
        $(value).hide()
      }
    })
  }

  if ($("#year-slider").length) {
    $("#year-slider").slider({
      min: 0,
      max: yearList.length - 1,
      value: yearList.length - 1,
      step: 1,
      range: "min",
      start: function (event, ui) {
        startPos = $(yearList[ui.value]).data("val")
      },
      change: function (event, ui) {
        counter(startPos, $(yearList[ui.value]).data("val"));
        updateYear($(yearList[ui.value]).data("text"))
      },
      stop: function (event, ui) {
        changeUsers($(yearList[ui.value]).text())
      }
    });
    $("#year-slider").draggable()
  }
  function counter(start, end) {
    var i = start;
    var t = setInterval(function () {
      if (i == end) {
        clearInterval(t)
      } else if (i > end) {
        i--
      } else {
        i++
      }
      yearsCnt.html(i)
    }, 20)
  }

  var filter;
  var teamList = $(".avatar"), teamCnt = $(".team-list"), interestsList = $(".interests a");
  if ($(".team-list").length) {
    (function () {
      interestsList.click(function () {
        if ($(this).hasClass("active")) {
          toDefaultState()
        } else {
          teamCnt.addClass("active-filter");
          interestsList.removeClass("active");
          $(this).addClass("active");
          filter = $(this).data("filter");
          if (filter === "drinks") {
            teamCnt.addClass("show-drinks");
            showItems()
          } else {
            teamCnt.removeClass("show-drinks");
            teamList.each(function (index, value) {
              var el = $(value);
              var interests = eval(el.data("interests"));
              if (el.hasClass("disabled")) {
                if ($.inArray(filter, interests) >= 0) {
                  el.removeClass("disabled").animate({opacity: "1"}, 0)
                } else {
                  el.addClass("disabled").animate({opacity: "0.2"}, 0)
                }
              } else {
                if ($.inArray(filter, interests) < 0) {
                  el.addClass("disabled").animate({opacity: "0.2"}, 0)
                } else {
                  el.removeClass("disabled").animate({opacity: "1"}, 0)
                }
              }
            })
          }
        }
      });
      $(document).click(function (e) {
        if ($.inArray(e.target, interestsList) < 0) {
          toDefaultState()
        }
      });
      function toDefaultState() {
        teamCnt.removeClass("show-drinks").removeClass("active-filter");
        showItems();
        interestsList.removeClass("active")
      }

      function showItems() {
        teamList.each(function (index, value) {
          $(value).stop(true, true).animate({opacity: "1"}, 0)
        })
      }
    })()
  }
  var projectSlider = false, projectSliderCnt = $(".project-slider");
  if (projectSliderCnt.length) {
    projectSlider = new Sly(projectSliderCnt, {
      horizontal: 1,
      itemNav: "basic",
      smart: 1,
      mouseDragging: 1,
      touchDragging: 1,
      releaseSwing: 0,
      activateOn: "mousedown",
      sweengSpeed: .8,
      startAt: 0,
      scrollBy: 0,
      speed: 300,
      pagesBar: ".slider-pages",
      pageBuilder: function (index) {
        return "<span></span>"
      },
      activatePageOn: "click",
      prev: ".prev-slide",
      next: ".next-slide"
    });
    projectSlider.init();
    $(window).load(function () {
      projectSliderCnt.height(projectSliderCnt.find("li.active img").height()).addClass("loaded")
    });
    if (projectSlider.items.length > 1) {
      $(".project-slider-cnt").removeClass("no-controls")
    }
    projectSlider.on("moveStart", function () {
      projectSliderCnt.addClass("moving")
    });
    projectSlider.on("load", function () {
      disableNavigation()
    });
    projectSlider.on("moveEnd", function () {
      projectSliderCnt.removeClass("moving");
      projectSlider.activate(projectSlider.rel.activePage);
      projectSliderCnt.height(projectSliderCnt.find("li.active img").height());
      disableNavigation()
    });
    projectSlider.on("change", function () {
      projectSliderCnt.height(projectSliderCnt.find("li.active img").height())
    });
    var $sliderWrapper = $(".project-slider-cnt");

    function disableNavigation() {
      $sliderWrapper.removeClass("hide-next-button hide-prev-button");
      if (projectSlider.rel.activePage == 0) {
        $sliderWrapper.addClass("hide-prev-button")
      } else if (projectSlider.rel.activePage == projectSlider.items.length - 1) {
        $sliderWrapper.addClass("hide-next-button")
      }
    }

    function resizeSliderItems(cnt) {
      sliderWidth = cnt.width();
      slides.each(function (index, value) {
        $(value).css({width: sliderWidth + "px"});
        $(".project-slider").css({width: sliderWidth + "px"})
      });
      projectSlider.reload()
    }

    var forSliderWidth = $(".project-info"), slides = projectSliderCnt.find("li");
    if (!$("html").hasClass("lt-ie10")) {
      (function () {
        var teamList = $(".team-list");
        enquire.register("screen and (max-width:840px)", {
          match: function () {
            var sliderWidth = $(".project-info").width();
            resizeSliderItems(forSliderWidth);
            $(window).bind("resize", function () {
              resizeSliderItems(forSliderWidth)
            })
          }, unmatch: function () {
            $(window).unbind("resize");
            projectSliderCnt[0].style.width = "";
            slides.each(function (idnex, value) {
              value.style.width = ""
            })
          }
        }).register("screen and (max-width:620px)", {
          match: function () {
            $(".work-on-project h2").bind("click", function () {
              teamList.slideToggle(100)
            });
            teamList.hide()
          }, unmatch: function () {
            $(".work-on-project h2").unbind("click");
            teamList.show()
          }
        });
        $(window).on("resize orientationchange", function () {
          projectSlider.reload()
        })
      })()
    }
  }
  var $sliderCnt = $(".project-slider-cnt");
  if ($sliderCnt.length) {
    var $scrollingCnt = navigator.userAgent.match(/(iPad|iPhone|iPod|Macintosh|Android)/g) ? $("body") : $("html"), $fixedNav = $(".fixed-nav"), middleScreenPoint = $(window).height() / 2 - $sliderCnt.offset().top, leftSlideHeight;
    $(window).resize(function () {
      middleScreenPoint = $(window).height() / 2 - $(".project-slider-cnt").offset().top
    });
    window.addEventListener("scroll", function (event) {
      setButtonsPosition()
    });
    $(document).on("click", ".fix-prev-slide", function () {
      $(".slider-nav .prev-slide").trigger("click");
      $scrollingCnt.animate({scrollTop: 0}, 300)
    });
    $(document).on("click", ".fix-next-slide", function () {
      $(".slider-nav .next-slide").trigger("click");
      $scrollingCnt.animate({scrollTop: 0}, 300)
    });
    function setButtonsPosition() {
      leftSlideHeight = $sliderCnt.height() - ($scrollingCnt.scrollTop() - $sliderCnt.offset().top) - middleScreenPoint;
      if ($scrollingCnt.scrollTop() >= $sliderCnt.offset().top) {
        $sliderCnt.addClass("show-fixed-nav")
      } else {
        $sliderCnt.removeClass("show-fixed-nav")
      }
      if (leftSlideHeight >= 280) {
        $fixedNav[0].style.top = $scrollingCnt.scrollTop() + middleScreenPoint + "px"
      }
    }

    $(window).on("keyup", function (e) {
      if (e.keyCode == 37) {
        $(".fix-prev-slide").trigger("click")
      } else if (e.keyCode == 39) {
        $(".fix-next-slide").trigger("click")
      }
    })
  }
  $(document).on("change", ".file-input input", function () {
    var fullPath = $(this).val();
    if (fullPath == "" || fullPath == "&nbsp;") {
      fullPath = "&nbsp;";
      $(this).closest(".file-input").find(".filesize").fadeIn(700)
    } else {
      $(this).closest(".file-input").find(".filesize").fadeOut(700)
    }
    var pathArray = fullPath.split(/[/\\]/);
    $(this).closest(".file-input").find(".filename").html(pathArray[pathArray.length - 1])
  });
  if ($(".link-more").length) {
    $(".link-more").click(function () {
      $(".detailed-text").toggle()
    })
  }
  if ($("#feedback-form").length) {
    $('a[href="#feedback-form"]').click(function () {
      var el = $(this).attr("href");
      var headerHeight = $(".header-line").outerHeight();
      $("html, body").animate({scrollTop: $(el).offset().top - headerHeight}, 1e3);
      return false
    })
  }
  if ($("#scroll").length) {
    $('a[href="#scroll"]').click(function () {
      var el = $(this).attr("href");
      $("html, body").animate({scrollTop: $(el).offset().top}, 1e3);
      return false
    })
  }
  if ($("#web-dev").length) {
    $('a[href="#web-dev"]').click(function () {
      $(".detailed-text").show();
      var el = $(this).attr("href");
      $("html, body").animate({scrollTop: $(el).offset().top}, 1e3);
      return false
    })
  }
  if ($("#feedback-line").length) {
    $('a[href="#feedback-line"]').click(function () {
      var el = $(this).attr("href");
      $("html, body").animate({scrollTop: $(el).offset().top}, 1e3);
      return false
    })
  }
  if ($(".project-cell").length) {
    var a = $(".project-cell:eq(2)").height();
    $(".container_load").height(a);
    $(window).resize(function () {
      a = $(".project-cell:eq(2)").height();
      $(".container_load").height(a)
    })
  }
  var formDelay = 3e3;
  if ($("#feedback-form").length) {
    $("#feedback-form").validate({
      rules: {
        name: {required: true, minlength: 3},
        email: {required: true, minlength: 3},
        message: {required: true, minlength: 30}
      },
      messages: {
        name: {
          required: "Пожалуйста, введите ваше имя",
          minlength: jQuery.validator.format("Введите имя не меньше 3 символов")
        },
        email: {
          required: "Пожалуйста, введите адрес вашей эл.почты",
          email: "Ваш эл.адрес должен быть формата name@domain.com"
        },
        message: {
          required: "Пожалуйста, введите сообщение",
          minlength: jQuery.validator.format("Введите сообщение не меньше 30 символов")
        }
      },
      errorPlacement: function (label, element) {
        label.addClass("error-pad");
        label.insertAfter(element)
      },
      wrapper: "div",
      debug: true,
      submitHandler: function () {
        $("#feedback-form").find(".form-pad").animate({opacity: 0}, 300).delay(formDelay).animate({opacity: 1}, 300);
        $("#feedback-form").find(".form-success").fadeIn(300).delay(formDelay).fadeOut(300);
        return false
      }
    });
    $.validator.addClassRules({
      name: {required: true, minlength: 3},
      email: {required: true, minlength: 3},
      messageText: {required: true, minlength: 30}
    })
  }
  $(function () {
    $(window).scroll(function () {
      if ($(this).scrollTop() > 200) {
        $(".scroll-to-top").fadeIn()
      } else {
        $(".scroll-to-top").fadeOut()
      }
      if ($(window).width() < 320) {
        $(".scroll-to-top").hide();
        return false
      }
    });
    $(".scroll-to-top").click(function () {
      $("body,html").animate({scrollTop: 0}, 800);
      return false
    })
  });
  function fixedButtonUp() {
    if ($(".scroll-to-top").length) {
      if ($(".scroll-to-top").offset().top + $(".scroll-to-top").height() >= $(".footer").offset().top - 69) {
        $(".scroll-to-top").addClass("fixed-scroll-top")
      }
      if ($(document).scrollTop() + window.innerHeight < $(".footer").offset().top) {
        $(".scroll-to-top").removeClass("fixed-scroll-top")
      }
    }
  }

  function fixedHireUs() {
    if ($("#hire_us-js").length) {
      if ($("#hire_us-js").offset().top + $(".hire_us").height() >= $(".footer").offset().top - 186) {
        $("#hire_us-js").addClass("fixed-hire-us")
      }
      if ($(document).scrollTop() + window.innerHeight < $(".footer").offset().top) {
        $("#hire_us-js").removeClass("fixed-hire-us")
      }
    }
  }

  $(document).scroll(function () {
    fixedButtonUp()
  });
  autosize(document.querySelectorAll("#order_promotion_message"));
  if (typeof last_year !== "undefined") {
    changeUsers(last_year)
  }
  $(".sidebar-menu__link").click(function (e) {
    e.preventDefault();
    var ourClass = $(this).attr("data-filter-el");
    $(".sidebar-menu__link").removeClass("sidebar-menu__link--active");
    $(this).addClass("sidebar-menu__link--active");
    if (ourClass == "filter-all") {
      $(".opensource-list").children(".opensource-item").hide();
      $(".opensource-list").children(".opensource-item").fadeIn();
      $(".opensource-list").children(".opensource-item").removeClass("opensource-item--last")
    } else if (ourClass == "filter-android") {
      $(".opensource-list").children(".opensource-item").hide();
      $(".opensource-list").children("article." + ourClass).fadeIn();
      $(".opensource-list").children("article." + ourClass).last().addClass("opensource-item--last")
    } else {
      $(".opensource-list").children("article:not(." + ourClass + ")").hide();
      $(".opensource-list").children("article." + ourClass).hide();
      $(".opensource-list").children("article." + ourClass).fadeIn();
      $(".opensource-list").children("article." + ourClass).last().addClass("opensource-item--last")
    }
    return false
  })
});
var windowCloseTimerId = false;
$(document).on("click", ".close-hire_us", function () {
  $("#hire-us-form").find(".form-pad").css({opacity: "1"});
  $("body").removeClass("open-hire_us");
  $("#hire-us-form").trigger("reset");
  $("#hire-us-form").find("button").prop("disabled", false);
  $("#hire-us-form").find(".form-success").css("display", "none");
  $("#hire-us-form").find(".form-pad").stop(true, true).css("opacity", "1");
  clearTimeout(windowCloseTimerId);
  $("#order_promotion_message").css("height", "auto")
});
$(document).on("click", ".hire_us, .hire_us_land, .hire_us_main", function () {
  $("body").addClass("open-hire_us")
});
$.validator.addMethod("phone", function (value, element, regexp) {
  var re = new RegExp(regexp);
  return this.optional(element) || re.test(value)
});
$(function () {
  var formDelay = 3e3;
  var $hireUsForm = $("#hire-us-form");
  $.validator.methods.email = function (value, element) {
    return this.optional(element) || /^\w([\-\.]{0,1}\w)*\@\w+([\-\.]{0,1}\w)*\.\w{2,4}$/.test(value)
  };
  $hireUsForm.validate({
    rules: {
      "order_promotion[name]": {required: true, minlength: 3, maxlength: 64},
      "order_promotion[email]": {required: true, minlength: 3, maxlength: 72, email: true},
      "order_promotion[company]": {required: false, minlength: 3, maxlength: 72},
      "order_promotion[position]": {required: false, minlength: 3, maxlength: 72},
      "order_promotion[phone]": {required: true, phone: "[0-9\\-\\(\\)\\s]+$"},
      "order_promotion[message]": {required: true, minlength: 30, maxlength: 5e3}
    }, errorPlacement: function (label, element) {
      label.addClass("error-pad");
      var parent_elem = element.parent();
      if (parent_elem.hasClass("line__radio")) {
        parent_elem = parent_elem.parent()
      }
      label.insertAfter(parent_elem)
    }, wrapper: "div", debug: false, submitHandler: function (form, e) {
      e.preventDefault();
      $.ajax({
        url: $(form).data("url"),
        type: "POST",
        dataType: "json",
        data: $(form).serialize(),
        beforeSend: function () {
          $(form).find("button").prop("disabled", true)
        },
        cache: false,
        async: false,
        success: function (response) {
          if ("success" === response.status) {
            $(form).find(".form-pad").animate({opacity: 0}, 300);
            $(form).find(".form-success").fadeIn(300);
            windowCloseTimerId = setTimeout(function () {
              $(".close-hire_us").trigger("click")
            }, 4e3);
            dataLayer.push({event: "submit_popupform"})
          } else {
            $(form).find("button").prop("disabled", false)
          }
          grecaptcha.reset()
        }
      });
      return false
    }
  });
  var $leadForm = $("#lead-form");
  $leadForm.validate({
    rules: {
      "person_form[name]": {required: true, minlength: 3, maxlength: 64},
      "person_form[email]": {required: true, minlength: 3, maxlength: 72, email: true},
      "person_form[company]": {required: false, minlength: 3, maxlength: 72},
      "person_form[position]": {required: false, minlength: 3, maxlength: 72}
    }, errorPlacement: function (label, element) {
      label.addClass("error-pad");
      var parent_elem = element.parent();
      if (parent_elem.hasClass("line__radio")) {
        parent_elem = parent_elem.parent()
      }
      label.insertAfter(parent_elem)
    }, wrapper: "div", debug: false, submitHandler: function (form, e) {
      e.preventDefault();
      $.ajax({
        url: $(form).data("url"),
        type: "POST",
        dataType: "json",
        data: $(form).serialize(),
        beforeSend: function () {
          $(form).find("button").prop("disabled", true)
        },
        cache: false,
        async: false,
        success: function (response) {
          if ("success" === response.status) {
            $(form).find(".form-pad").animate({opacity: 0}, 300);
            $(form).find(".form-success").fadeIn(300);
            $(".close-hire_us").trigger("click");
            Cookies.set("lead-data-send", "1", {expires: 365});
            dataLayer.push({event: "submit_leadform"})
          } else {
            $(form).find("button").prop("disabled", false)
          }
        }
      });
      return false
    }
  })
});
(function (factory) {
  var registeredInModuleLoader = false;
  if (typeof define === "function" && define.amd) {
    define(factory);
    registeredInModuleLoader = true
  }
  if (typeof exports === "object") {
    module.exports = factory();
    registeredInModuleLoader = true
  }
  if (!registeredInModuleLoader) {
    var OldCookies = window.Cookies;
    var api = window.Cookies = factory();
    api.noConflict = function () {
      window.Cookies = OldCookies;
      return api
    }
  }
})(function () {
  function extend() {
    var i = 0;
    var result = {};
    for (; i < arguments.length; i++) {
      var attributes = arguments[i];
      for (var key in attributes) {
        result[key] = attributes[key]
      }
    }
    return result
  }

  function init(converter) {
    function api(key, value, attributes) {
      var result;
      if (typeof document === "undefined") {
        return
      }
      if (arguments.length > 1) {
        attributes = extend({path: "/"}, api.defaults, attributes);
        if (typeof attributes.expires === "number") {
          var expires = new Date;
          expires.setMilliseconds(expires.getMilliseconds() + attributes.expires * 864e5);
          attributes.expires = expires
        }
        attributes.expires = attributes.expires ? attributes.expires.toUTCString() : "";
        try {
          result = JSON.stringify(value);
          if (/^[\{\[]/.test(result)) {
            value = result
          }
        } catch (e) {
        }
        if (!converter.write) {
          value = encodeURIComponent(String(value)).replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g, decodeURIComponent)
        } else {
          value = converter.write(value, key)
        }
        key = encodeURIComponent(String(key));
        key = key.replace(/%(23|24|26|2B|5E|60|7C)/g, decodeURIComponent);
        key = key.replace(/[\(\)]/g, escape);
        var stringifiedAttributes = "";
        for (var attributeName in attributes) {
          if (!attributes[attributeName]) {
            continue
          }
          stringifiedAttributes += "; " + attributeName;
          if (attributes[attributeName] === true) {
            continue
          }
          stringifiedAttributes += "=" + attributes[attributeName]
        }
        return document.cookie = key + "=" + value + stringifiedAttributes
      }
      if (!key) {
        result = {}
      }
      var cookies = document.cookie ? document.cookie.split("; ") : [];
      var rdecode = /(%[0-9A-Z]{2})+/g;
      var i = 0;
      for (; i < cookies.length; i++) {
        var parts = cookies[i].split("=");
        var cookie = parts.slice(1).join("=");
        if (cookie.charAt(0) === '"') {
          cookie = cookie.slice(1, -1)
        }
        try {
          var name = parts[0].replace(rdecode, decodeURIComponent);
          cookie = converter.read ? converter.read(cookie, name) : converter(cookie, name) || cookie.replace(rdecode, decodeURIComponent);
          if (this.json) {
            try {
              cookie = JSON.parse(cookie)
            } catch (e) {
            }
          }
          if (key === name) {
            result = cookie;
            break
          }
          if (!key) {
            result[name] = cookie
          }
        } catch (e) {
        }
      }
      return result
    }

    api.set = api;
    api.get = function (key) {
      return api.call(api, key)
    };
    api.getJSON = function () {
      return api.apply({json: true}, [].slice.call(arguments))
    };
    api.defaults = {};
    api.remove = function (key, attributes) {
      api(key, "", extend(attributes, {expires: -1}))
    };
    api.withConverter = init;
    return api
  }

  return init(function () {
  })
});
