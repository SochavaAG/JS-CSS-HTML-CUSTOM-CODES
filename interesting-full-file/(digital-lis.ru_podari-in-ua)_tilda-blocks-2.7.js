function t190_scrollToTop() {
  $('html, body').animate({scrollTop: 0}, 700)
}
function t228_highlight() {
  var url = window.location.href;
  var pathname = window.location.pathname;
  if (url.substr(url.length - 1) == "/") {
    url = url.slice(0, -1)
  }
  if (pathname.substr(pathname.length - 1) == "/") {
    pathname = pathname.slice(0, -1)
  }
  if (pathname.charAt(0) == "/") {
    pathname = pathname.slice(1)
  }
  if (pathname == "") {
    pathname = "/"
  }
  $(".t228__list_item a[href='" + url + "']").addClass("t-active");
  $(".t228__list_item a[href='" + url + "/']").addClass("t-active");
  $(".t228__list_item a[href='" + pathname + "']").addClass("t-active");
  $(".t228__list_item a[href='/" + pathname + "']").addClass("t-active");
  $(".t228__list_item a[href='" + pathname + "/']").addClass("t-active");
  $(".t228__list_item a[href='/" + pathname + "/']").addClass("t-active")
}
function t228_checkAnchorLinks(recid) {
  if ($(window).width() >= 960) {
    var t228_navLinks = $("#rec" + recid + " .t228__list_item a:not(.tooltipstered)[href*='#']");
    if (t228_navLinks.length > 0) {
      setTimeout(function () {
        t228_catchScroll(t228_navLinks)
      }, 500)
    }
  }
}
function t228_catchScroll(t228_navLinks) {
  var t228_clickedSectionId = null, t228_sections = new Array(), t228_sectionIdTonavigationLink = [], t228_interval = 100, t228_lastCall, t228_timeoutId;
  t228_navLinks = $(t228_navLinks.get().reverse());
  t228_navLinks.each(function () {
    var t228_cursection = t228_getSectionByHref($(this));
    if (typeof t228_cursection.attr("id") != "undefined") {
      t228_sections.push(t228_cursection)
    }
    t228_sectionIdTonavigationLink[t228_cursection.attr("id")] = $(this)
  });
  t228_updateSectionsOffsets(t228_sections);
  t228_sections.sort(function (a, b) {
    return b.attr("data-offset-top") - a.attr("data-offset-top")
  });
  $(window).bind('resize', t_throttle(function () {
    t228_updateSectionsOffsets(t228_sections)
  }, 200));
  $('.t228').bind('displayChanged', function () {
    t228_updateSectionsOffsets(t228_sections)
  });
  setInterval(function () {
    t228_updateSectionsOffsets(t228_sections)
  }, 5000);
  t228_highlightNavLinks(t228_navLinks, t228_sections, t228_sectionIdTonavigationLink, t228_clickedSectionId);
  t228_navLinks.click(function () {
    var t228_clickedSection = t228_getSectionByHref($(this));
    if (!$(this).hasClass("tooltipstered") && typeof t228_clickedSection.attr("id") != "undefined") {
      t228_navLinks.removeClass('t-active');
      $(this).addClass('t-active');
      t228_clickedSectionId = t228_getSectionByHref($(this)).attr("id")
    }
  });
  $(window).scroll(function () {
    var t228_now = new Date().getTime();
    if (t228_lastCall && t228_now < (t228_lastCall + t228_interval)) {
      clearTimeout(t228_timeoutId);
      t228_timeoutId = setTimeout(function () {
        t228_lastCall = t228_now;
        t228_clickedSectionId = t228_highlightNavLinks(t228_navLinks, t228_sections, t228_sectionIdTonavigationLink, t228_clickedSectionId)
      }, t228_interval - (t228_now - t228_lastCall))
    } else {
      t228_lastCall = t228_now;
      t228_clickedSectionId = t228_highlightNavLinks(t228_navLinks, t228_sections, t228_sectionIdTonavigationLink, t228_clickedSectionId)
    }
  })
}
function t228_updateSectionsOffsets(sections) {
  $(sections).each(function () {
    var t228_curSection = $(this);
    t228_curSection.attr("data-offset-top", t228_curSection.offset().top)
  })
}
function t228_getSectionByHref(curlink) {
  var t228_curLinkValue = curlink.attr("href").replace(/\s+/g, '');
  if (t228_curLinkValue[0] == '/') {
    t228_curLinkValue = t228_curLinkValue.substring(1)
  }
  if (curlink.is('[href*="#rec"]')) {
    return $(".r[id='" + t228_curLinkValue.substring(1) + "']")
  } else {
    return $(".r[data-record-type='215']").has("a[name='" + t228_curLinkValue.substring(1) + "']")
  }
}
function t228_highlightNavLinks(t228_navLinks, t228_sections, t228_sectionIdTonavigationLink, t228_clickedSectionId) {
  var t228_scrollPosition = $(window).scrollTop(), t228_valueToReturn = t228_clickedSectionId;
  if (t228_sections.length != 0 && t228_clickedSectionId == null && t228_sections[t228_sections.length - 1].attr("data-offset-top") > (t228_scrollPosition + 300)) {
    t228_navLinks.removeClass('t-active');
    return null
  }
  $(t228_sections).each(function (e) {
    var t228_curSection = $(this), t228_sectionTop = t228_curSection.attr("data-offset-top"), t228_id = t228_curSection.attr('id'), t228_navLink = t228_sectionIdTonavigationLink[t228_id];
    if (((t228_scrollPosition + 300) >= t228_sectionTop) || (t228_sections[0].attr("id") == t228_id && t228_scrollPosition >= $(document).height() - $(window).height())) {
      if (t228_clickedSectionId == null && !t228_navLink.hasClass('t-active')) {
        t228_navLinks.removeClass('t-active');
        t228_navLink.addClass('t-active');
        t228_valueToReturn = null
      } else {
        if (t228_clickedSectionId != null && t228_id == t228_clickedSectionId) {
          t228_valueToReturn = null
        }
      }
      return !1
    }
  });
  return t228_valueToReturn
}
function t228_setPath() {
}
function t228_setWidth(recid) {
  var window_width = $(window).width();
  if (window_width > 980) {
    $(".t228").each(function () {
      var el = $(this);
      var left_exist = el.find('.t228__leftcontainer').length;
      var left_w = el.find('.t228__leftcontainer').outerWidth(!0);
      var max_w = left_w;
      var right_exist = el.find('.t228__rightcontainer').length;
      var right_w = el.find('.t228__rightcontainer').outerWidth(!0);
      var items_align = el.attr('data-menu-items-align');
      if (left_w < right_w) max_w = right_w;
      max_w = Math.ceil(max_w);
      var center_w = 0;
      el.find('.t228__centercontainer').find('li').each(function () {
        center_w += $(this).outerWidth(!0)
      });
      var padd_w = 40;
      var maincontainer_width = el.find(".t228__maincontainer").outerWidth(!0);
      if (maincontainer_width - max_w * 2 - padd_w * 2 > center_w + 20) {
        if (items_align == "center" || typeof items_align === "undefined") {
          el.find(".t228__leftside").css("min-width", max_w + "px");
          el.find(".t228__rightside").css("min-width", max_w + "px");
          el.find(".t228__list").removeClass("t228__list_hidden")
        }
      } else {
        el.find(".t228__leftside").css("min-width", "");
        el.find(".t228__rightside").css("min-width", "")
      }
    })
  }
}
function t228_setBg(recid) {
  var window_width = $(window).width();
  if (window_width > 980) {
    $(".t228").each(function () {
      var el = $(this);
      if (el.attr('data-bgcolor-setbyscript') == "yes") {
        var bgcolor = el.attr("data-bgcolor-rgba");
        el.css("background-color", bgcolor)
      }
    })
  } else {
    $(".t228").each(function () {
      var el = $(this);
      var bgcolor = el.attr("data-bgcolor-hex");
      el.css("background-color", bgcolor);
      el.attr("data-bgcolor-setbyscript", "yes")
    })
  }
}
function t228_appearMenu(recid) {
  var window_width = $(window).width();
  if (window_width > 980) {
    $(".t228").each(function () {
      var el = $(this);
      var appearoffset = el.attr("data-appearoffset");
      if (appearoffset != "") {
        if (appearoffset.indexOf('vh') > -1) {
          appearoffset = Math.floor((window.innerHeight * (parseInt(appearoffset) / 100)))
        }
        appearoffset = parseInt(appearoffset, 10);
        if ($(window).scrollTop() >= appearoffset) {
          if (el.css('visibility') == 'hidden') {
            el.finish();
            el.css("top", "-50px");
            el.css("visibility", "visible");
            var topoffset = el.data('top-offset');
            if (topoffset && parseInt(topoffset) > 0) {
              el.animate({"opacity": "1", "top": topoffset + "px"}, 200, function () {
              })
            } else {
              el.animate({"opacity": "1", "top": "0px"}, 200, function () {
              })
            }
          }
        } else {
          el.stop();
          el.css("visibility", "hidden");
          el.css("opacity", "0")
        }
      }
    })
  }
}
function t228_changebgopacitymenu(recid) {
  var window_width = $(window).width();
  if (window_width > 980) {
    $(".t228").each(function () {
      var el = $(this);
      var bgcolor = el.attr("data-bgcolor-rgba");
      var bgcolor_afterscroll = el.attr("data-bgcolor-rgba-afterscroll");
      var bgopacityone = el.attr("data-bgopacity");
      var bgopacitytwo = el.attr("data-bgopacity-two");
      var menushadow = el.attr("data-menushadow");
      if (menushadow == '100') {
        var menushadowvalue = menushadow
      } else {
        var menushadowvalue = '0.' + menushadow
      }
      if ($(window).scrollTop() > 20) {
        el.css("background-color", bgcolor_afterscroll);
        if (bgopacitytwo == '0' || (typeof menushadow == "undefined" && menushadow == !1)) {
          el.css("box-shadow", "none")
        } else {
          el.css("box-shadow", "0px 1px 3px rgba(0,0,0," + menushadowvalue + ")")
        }
      } else {
        el.css("background-color", bgcolor);
        if (bgopacityone == '0.0' || (typeof menushadow == "undefined" && menushadow == !1)) {
          el.css("box-shadow", "none")
        } else {
          el.css("box-shadow", "0px 1px 3px rgba(0,0,0," + menushadowvalue + ")")
        }
      }
    })
  }
}
function t228_createMobileMenu(recid) {
  var window_width = $(window).width(), el = $("#rec" + recid), menu = el.find(".t228"), burger = el.find(".t228__mobile");
  burger.click(function (e) {
    menu.fadeToggle(300);
    $(this).toggleClass("t228_opened")
  })
  $(window).bind('resize', t_throttle(function () {
    window_width = $(window).width();
    if (window_width > 980) {
      menu.fadeIn(0)
    }
  }, 200))
}
function t229_highlight(recid) {
  var url = window.location.href;
  var pathname = window.location.pathname;
  if (url.substr(url.length - 1) == "/") {
    url = url.slice(0, -1)
  }
  if (pathname.substr(pathname.length - 1) == "/") {
    pathname = pathname.slice(0, -1)
  }
  if (pathname.charAt(0) == "/") {
    pathname = pathname.slice(1)
  }
  if (pathname == "") {
    pathname = "/"
  }
  $(".t229__list_item a[href='" + url + "']").addClass("t-active");
  $(".t229__list_item a[href='" + url + "/']").addClass("t-active");
  $(".t229__list_item a[href='" + pathname + "']").addClass("t-active");
  $(".t229__list_item a[href='/" + pathname + "']").addClass("t-active");
  $(".t229__list_item a[href='" + pathname + "/']").addClass("t-active");
  $(".t229__list_item a[href='/" + pathname + "/']").addClass("t-active")
}
function t229_checkAnchorLinks(recid) {
  if ($(window).width() >= 960) {
    var t229_navLinks = $("#rec" + recid + " .t229__list_item a:not(.tooltipstered)[href*='#']");
    if (t229_navLinks.length > 0) {
      t229_catchScroll(t229_navLinks)
    }
  }
}
function t229_catchScroll(t229_navLinks) {
  var t229_clickedSectionId = null, t229_sections = new Array(), t229_sectionIdTonavigationLink = [], t229_interval = 100, t229_lastCall, t229_timeoutId;
  t229_navLinks = $(t229_navLinks.get().reverse());
  t229_navLinks.each(function () {
    var t229_cursection = t229_getSectionByHref($(this));
    if (typeof t229_cursection.attr("id") != "undefined") {
      t229_sections.push(t229_cursection)
    }
    t229_sectionIdTonavigationLink[t229_cursection.attr("id")] = $(this)
  });
  t229_updateSectionsOffsets(t229_sections);
  t229_sections.sort(function (a, b) {
    return b.attr("data-offset-top") - a.attr("data-offset-top")
  });
  $(window).bind('resize', t_throttle(function () {
    t229_updateSectionsOffsets(t229_sections)
  }, 200));
  $('.t229').bind('displayChanged', function () {
    t229_updateSectionsOffsets(t229_sections)
  });
  setInterval(function () {
    t229_updateSectionsOffsets(t229_sections)
  }, 5000);
  t229_highlightNavLinks(t229_navLinks, t229_sections, t229_sectionIdTonavigationLink, t229_clickedSectionId);
  t229_navLinks.click(function () {
    var t229_clickedSection = t229_getSectionByHref($(this));
    if (!$(this).hasClass("tooltipstered") && typeof t229_clickedSection.attr("id") != "undefined") {
      t229_navLinks.removeClass('t-active');
      $(this).addClass('t-active');
      t229_clickedSectionId = t229_getSectionByHref($(this)).attr("id")
    }
  });
  $(window).scroll(function () {
    var t229_now = new Date().getTime();
    if (t229_lastCall && t229_now < (t229_lastCall + t229_interval)) {
      clearTimeout(t229_timeoutId);
      t229_timeoutId = setTimeout(function () {
        t229_lastCall = t229_now;
        t229_clickedSectionId = t229_highlightNavLinks(t229_navLinks, t229_sections, t229_sectionIdTonavigationLink, t229_clickedSectionId)
      }, t229_interval - (t229_now - t229_lastCall))
    } else {
      t229_lastCall = t229_now;
      t229_clickedSectionId = t229_highlightNavLinks(t229_navLinks, t229_sections, t229_sectionIdTonavigationLink, t229_clickedSectionId)
    }
  })
}
function t229_updateSectionsOffsets(sections) {
  $(sections).each(function () {
    var t229_curSection = $(this);
    t229_curSection.attr("data-offset-top", t229_curSection.offset().top)
  })
}
function t229_getSectionByHref(curlink) {
  var t229_curLinkValue = curlink.attr("href").replace(/\s+/g, '');
  if (t229_curLinkValue[0] == '/') {
    t229_curLinkValue = t229_curLinkValue.substring(1)
  }
  if (curlink.is('[href*="#rec"]')) {
    return $(".r[id='" + t229_curLinkValue.substring(1) + "']")
  } else {
    return $(".r[data-record-type='215']").has("a[name='" + t229_curLinkValue.substring(1) + "']")
  }
}
function t229_highlightNavLinks(t229_navLinks, t229_sections, t229_sectionIdTonavigationLink, t229_clickedSectionId) {
  var t229_scrollPosition = $(window).scrollTop(), t229_valueToReturn = t229_clickedSectionId;
  if (t229_sections.length != 0 && t229_clickedSectionId == null && t229_sections[t229_sections.length - 1].attr("data-offset-top") > (t229_scrollPosition + 300)) {
    t229_navLinks.removeClass('t-active');
    return null
  }
  $(t229_sections).each(function (e) {
    var t229_curSection = $(this), t229_sectionTop = t229_curSection.attr("data-offset-top"), t229_id = t229_curSection.attr('id'), t229_navLink = t229_sectionIdTonavigationLink[t229_id];
    if (((t229_scrollPosition + 300) >= t229_sectionTop) || (t229_sections[0].attr("id") == t229_id && t229_scrollPosition >= $(document).height() - $(window).height())) {
      if (t229_clickedSectionId == null && !t229_navLink.hasClass('t-active')) {
        t229_navLinks.removeClass('t-active');
        t229_navLink.addClass('t-active');
        t229_valueToReturn = null
      } else {
        if (t229_clickedSectionId != null && t229_id == t229_clickedSectionId) {
          t229_valueToReturn = null
        }
      }
      return !1
    }
  });
  return t229_valueToReturn
}
function t229_setPath(pageid) {
}
function t229_setBg(recid) {
  var window_width = $(window).width();
  if (window_width > 980) {
    $(".t229").each(function () {
      var el = $(this);
      if (el.attr('data-bgcolor-setbyscript') == "yes") {
        var bgcolor = el.attr("data-bgcolor-rgba");
        el.css("background-color", bgcolor)
      }
    })
  } else {
    $(".t229").each(function () {
      var el = $(this);
      var bgcolor = el.attr("data-bgcolor-hex");
      el.css("background-color", bgcolor);
      el.attr("data-bgcolor-setbyscript", "yes")
    })
  }
}
function t229_appearMenu(recid) {
  var window_width = $(window).width();
  if (window_width > 980) {
    $("#rec" + recid + " .t229").each(function () {
      var el = $(this);
      var appearoffset = el.attr("data-appearoffset");
      if (appearoffset != "") {
        if (appearoffset.indexOf('vh') > -1) {
          appearoffset = Math.floor((window.innerHeight * (parseInt(appearoffset) / 100)))
        }
        appearoffset = parseInt(appearoffset, 10);
        if ($(window).scrollTop() >= appearoffset) {
          if (el.css('visibility') == 'hidden') {
            el.finish();
            el.css("top", "-50px");
            el.css("visibility", "visible");
            el.animate({"opacity": "1", "top": "0px"}, 200, function () {
            })
          }
        } else {
          el.stop();
          el.css("visibility", "hidden")
        }
      }
    })
  }
}
function t229_changeBgOpacityMenu(recid) {
  var window_width = $(window).width();
  if (window_width > 980) {
    $(".t229").each(function () {
      var el = $(this);
      var bgcolor = el.attr("data-bgcolor-rgba");
      var bgcolor_afterscroll = el.attr("data-bgcolor-rgba-afterscroll");
      if ($(window).scrollTop() > 20) {
        el.css("background-color", bgcolor_afterscroll)
      } else {
        el.css("background-color", bgcolor)
      }
    })
  }
}
function t280_showMenu(recid) {
  var el = $("#rec" + recid);
  el.find('.t280__burger, .t280__menu__bg, .t280__menu__item:not(".tooltipstered")').click(function () {
    if ($(this).is(".t280__menu__item.tooltipstered, .t794__tm-link")) {
      return
    }
    $('body').toggleClass('t280_opened')
  });
  $('.t280').bind('clickedAnchorInTooltipMenu', function () {
    $('body').removeClass('t280_opened')
  })
}
function t280_changeSize(recid) {
  var el = $("#rec" + recid);
  var div = el.find(".t280__menu").height();
  var bottomheight = el.find(".t280__bottom").height();
  var headerheight = el.find(".t280__container").height();
  var wrapper = el.find(".t280__menu__wrapper");
  var win = $(window).height() - bottomheight - headerheight - 40;
  if (div > win) {
    wrapper.addClass('t280__menu_static')
  }
  else {
    wrapper.removeClass('t280__menu_static')
  }
}
function t280_changeBgOpacityMenu(recid) {
  var window_width = $(window).width();
  var record = $("#rec" + recid);
  record.find(".t280__container__bg").each(function () {
    var el = $(this);
    var bgcolor = el.attr("data-bgcolor-rgba");
    var bgcolor_afterscroll = el.attr("data-bgcolor-rgba-afterscroll");
    var bgopacity = el.attr("data-bgopacity");
    var bgopacity_afterscroll = el.attr("data-bgopacity2");
    var menu_shadow = el.attr("data-menu-shadow");
    if ($(window).scrollTop() > 20) {
      el.css("background-color", bgcolor_afterscroll);
      if (bgopacity_afterscroll != "0" && bgopacity_afterscroll != "0.0") {
        el.css('box-shadow', menu_shadow)
      } else {
        el.css('box-shadow', 'none')
      }
    } else {
      el.css("background-color", bgcolor);
      if (bgopacity != "0" && bgopacity != "0.0") {
        el.css('box-shadow', menu_shadow)
      } else {
        el.css('box-shadow', 'none')
      }
    }
  })
}
function t280_appearMenu(recid) {
  var window_width = $(window).width();
  $(".t280").each(function () {
    var el = $(this);
    var appearoffset = el.attr("data-appearoffset");
    if (appearoffset != "") {
      if (appearoffset.indexOf('vh') > -1) {
        appearoffset = Math.floor((window.innerHeight * (parseInt(appearoffset) / 100)))
      }
      appearoffset = parseInt(appearoffset, 10);
      if ($(window).scrollTop() >= appearoffset) {
        if (el.css('visibility') == 'hidden') {
          el.finish();
          el.css("top", "-50px");
          el.css("visibility", "visible");
          el.animate({"opacity": "1", "top": "0px"}, 200, function () {
          })
        }
      } else {
        el.stop();
        el.css("visibility", "hidden")
      }
    }
  })
}
function t280_highlight(recid) {
  var url = window.location.href;
  var pathname = window.location.pathname;
  if (url.substr(url.length - 1) == "/") {
    url = url.slice(0, -1)
  }
  if (pathname.substr(pathname.length - 1) == "/") {
    pathname = pathname.slice(0, -1)
  }
  if (pathname.charAt(0) == "/") {
    pathname = pathname.slice(1)
  }
  if (pathname == "") {
    pathname = "/"
  }
  $(".t280__menu a[href='" + url + "']").addClass("t-active");
  $(".t280__menu a[href='" + url + "/']").addClass("t-active");
  $(".t280__menu a[href='" + pathname + "']").addClass("t-active");
  $(".t280__menu a[href='/" + pathname + "']").addClass("t-active");
  $(".t280__menu a[href='" + pathname + "/']").addClass("t-active");
  $(".t280__menu a[href='/" + pathname + "/']").addClass("t-active")
}
function t331_setHeight(recid) {
  var el = $("#rec" + recid);
  var div = el.find(".t331__video-carier");
  var ratiowidth = div.attr("data-video-width");
  var ratioheight = div.attr("data-video-height");
  var ratio = ratioheight / ratiowidth;
  var height = div.width() * ratio;
  div.height(height);
  div.parent().height(height)
}
function t331_initPopup(recid) {
  $('#rec' + recid).attr('data-animationappear', 'off');
  $('#rec' + recid).css('opacity', '1');
  var el = $('#rec' + recid).find('.t-popup'), hook = el.attr('data-tooltip-hook'), analitics = el.attr('data-track-popup');
  if (hook !== '') {
    var obj = $('a[href="' + hook + '"]');
    obj.click(function (e) {
      t331_showPopup(recid);
      t331_resizePopup(recid);
      e.preventDefault();
      if (analitics > '') {
        var virtTitle = hook;
        if (virtTitle.substring(0, 7) == '#popup:') {
          virtTitle = virtTitle.substring(7)
        }
        Tilda.sendEventToStatistics(analitics, virtTitle)
      }
    })
  }
}
function t331_showPopup(recid) {
  var el = $('#rec' + recid), popup = el.find('.t-popup');
  var youtubeid = el.find(".t331__youtube").attr('data-content-popup-video-url-youtube');
  var videourl = 'https://www.youtube.com/embed/' + youtubeid;
  el.find(".t331__video-carier").html("<iframe id=\"youtubeiframe" + recid + "\" class=\"t331__iframe\" width=\"100.5%\" height=\"100.5%\" src=\"" + videourl + "?autoplay=1&rel=0\" frameborder=\"0\" allowfullscreen></iframe>");
  popup.css('display', 'block');
  t331_setHeight(recid);
  setTimeout(function () {
    popup.find('.t-popup__container').addClass('t-popup__container-animated');
    popup.addClass('t-popup_show')
  }, 50);
  $('body').addClass('t-body_popupshowed');
  el.find('.t-popup').click(function (e) {
    if (e.target == this) {
      t331_popup_close(recid)
    }
  });
  el.find('.t-popup__close').click(function (e) {
    t331_popup_close(recid)
  });
  $(document).keydown(function (e) {
    if (e.keyCode == 27) {
      t331_popup_close(recid)
    }
  })
}
function t331_popup_close(recid) {
  $('body').removeClass('t-body_popupshowed');
  $('.t-popup').removeClass('t-popup_show');
  setTimeout(function () {
    $("#rec" + recid + " .t331__video-carier").html("");
    $('.t-popup').not('.t-popup_show').css('display', 'none')
  }, 300)
}
function t331_resizePopup(recid) {
  var el = $("#rec" + recid), div = el.find(".t-popup__container").height(), win = $(window).height(), popup = el.find(".t-popup__container");
  if (div > win) {
    popup.addClass('t-popup__container-static')
  } else {
    popup.removeClass('t-popup__container-static')
  }
}
function t331_sendPopupEventToStatistics(popupname) {
  var virtPage = '/tilda/popup/';
  var virtTitle = 'Popup: ';
  if (popupname.substring(0, 7) == '#popup:') {
    popupname = popupname.substring(7)
  }
  virtPage += popupname;
  virtTitle += popupname;
  if (ga) {
    if (window.mainTracker != 'tilda') {
      ga('send', {'hitType': 'pageview', 'page': virtPage, 'title': virtTitle})
    }
  }
  if (window.mainMetrika > '' && window[window.mainMetrika]) {
    window[window.mainMetrika].hit(virtPage, {title: virtTitle, referer: window.location.href})
  }
}
function t390_showPopup(recid) {
  var el = $('#rec' + recid), popup = el.find('.t-popup');
  popup.css('display', 'block');
  setTimeout(function () {
    popup.find('.t-popup__container').addClass('t-popup__container-animated');
    popup.addClass('t-popup_show')
  }, 50);
  $('body').addClass('t-body_popupshowed');
  el.find('.t-popup').click(function (e) {
    if (e.target == this) {
      t390_closePopup()
    }
  });
  el.find('.t-popup__close').click(function (e) {
    t390_closePopup()
  });
  el.find('a[href*=#]').click(function (e) {
    var url = $(this).attr('href');
    if (!url || url.substring(0, 7) != '#price:') {
      t390_closePopup();
      if (!url || url.substring(0, 7) == '#popup:') {
        setTimeout(function () {
          $('body').addClass('t-body_popupshowed')
        }, 300)
      }
    }
  });
  $(document).keydown(function (e) {
    if (e.keyCode == 27) {
      t390_closePopup()
    }
  })
}
function t390_closePopup() {
  $('body').removeClass('t-body_popupshowed');
  $('.t-popup').removeClass('t-popup_show');
  setTimeout(function () {
    $('.t-popup').not('.t-popup_show').css('display', 'none')
  }, 300)
}
function t390_resizePopup(recid) {
  var el = $("#rec" + recid), div = el.find(".t-popup__container").height(), win = $(window).height() - 120, popup = el.find(".t-popup__container");
  if (div > win) {
    popup.addClass('t-popup__container-static')
  } else {
    popup.removeClass('t-popup__container-static')
  }
}
function t390_sendPopupEventToStatistics(popupname) {
  var virtPage = '/tilda/popup/';
  var virtTitle = 'Popup: ';
  if (popupname.substring(0, 7) == '#popup:') {
    popupname = popupname.substring(7)
  }
  virtPage += popupname;
  virtTitle += popupname;
  if (window.Tilda && typeof Tilda.sendEventToStatistics == 'function') {
    Tilda.sendEventToStatistics(virtPage, virtTitle, '', 0)
  } else {
    if (ga) {
      if (window.mainTracker != 'tilda') {
        ga('send', {'hitType': 'pageview', 'page': virtPage, 'title': virtTitle})
      }
    }
    if (window.mainMetrika > '' && window[window.mainMetrika]) {
      window[window.mainMetrika].hit(virtPage, {title: virtTitle, referer: window.location.href})
    }
  }
}
function t390_initPopup(recid) {
  $('#rec' + recid).attr('data-animationappear', 'off');
  $('#rec' + recid).css('opacity', '1');
  var el = $('#rec' + recid).find('.t-popup'), hook = el.attr('data-tooltip-hook'), analitics = el.attr('data-track-popup');
  if (hook !== '') {
    $('.r').on('click', 'a[href="' + hook + '"]', function (e) {
      t390_showPopup(recid);
      t390_resizePopup(recid);
      e.preventDefault();
      if (window.lazy == 'y') {
        t_lazyload_update()
      }
      if (analitics > '') {
        var virtTitle = hook;
        if (virtTitle.substring(0, 7) == '#popup:') {
          virtTitle = virtTitle.substring(7)
        }
        Tilda.sendEventToStatistics(analitics, virtTitle)
      }
    })
  }
}
function t396_init(recid) {
  var data = '';
  var res = t396_detectResolution();
  t396_initTNobj();
  t396_switchResolution(res);
  t396_updateTNobj();
  t396_artboard_build(data, recid);
  window.tn_window_width = $(window).width();
  $(window).resize(function () {
    tn_console('>>>> t396: Window on Resize event >>>>');
    t396_waitForFinalEvent(function () {
      if ($isMobile) {
        var ww = $(window).width();
        if (ww != window.tn_window_width) {
          t396_doResize(recid)
        }
      } else {
        t396_doResize(recid)
      }
    }, 500, 'resizeruniqueid' + recid)
  });
  $(window).on("orientationchange", function () {
    tn_console('>>>> t396: Orient change event >>>>');
    t396_waitForFinalEvent(function () {
      t396_doResize(recid)
    }, 600, 'orientationuniqueid' + recid)
  });
  $(window).load(function () {
    var ab = $('#rec' + recid).find('.t396__artboard');
    t396_allelems__renderView(ab)
  });
  var rec = $('#rec' + recid);
  if (rec.attr('data-connect-with-tab') == 'yes') {
    rec.find('.t396').bind('displayChanged', function () {
      var ab = rec.find('.t396__artboard');
      t396_allelems__renderView(ab)
    })
  }
}
function t396_doResize(recid) {
  var ww = $(window).width();
  window.tn_window_width = ww;
  var res = t396_detectResolution();
  var ab = $('#rec' + recid).find('.t396__artboard');
  t396_switchResolution(res);
  t396_updateTNobj();
  t396_ab__renderView(ab);
  t396_allelems__renderView(ab)
}
function t396_detectResolution() {
  var ww = $(window).width();
  var res;
  res = 1200;
  if (ww < 1200) {
    res = 960
  }
  if (ww < 960) {
    res = 640
  }
  if (ww < 640) {
    res = 480
  }
  if (ww < 480) {
    res = 320
  }
  return (res)
}
function t396_initTNobj() {
  tn_console('func: initTNobj');
  window.tn = {};
  window.tn.canvas_min_sizes = ["320", "480", "640", "960", "1200"];
  window.tn.canvas_max_sizes = ["480", "640", "960", "1200", ""];
  window.tn.ab_fields = ["height", "width", "bgcolor", "bgimg", "bgattachment", "bgposition", "filteropacity", "filtercolor", "filteropacity2", "filtercolor2", "height_vh", "valign"]
}
function t396_updateTNobj() {
  tn_console('func: updateTNobj');
  if (typeof window.zero_window_width_hook != 'undefined' && window.zero_window_width_hook == 'allrecords' && $('#allrecords').length) {
    window.tn.window_width = parseInt($('#allrecords').width())
  } else {
    window.tn.window_width = parseInt($(window).width())
  }
  window.tn.window_height = parseInt($(window).height());
  if (window.tn.curResolution == 1200) {
    window.tn.canvas_min_width = 1200;
    window.tn.canvas_max_width = window.tn.window_width
  }
  if (window.tn.curResolution == 960) {
    window.tn.canvas_min_width = 960;
    window.tn.canvas_max_width = 1200
  }
  if (window.tn.curResolution == 640) {
    window.tn.canvas_min_width = 640;
    window.tn.canvas_max_width = 960
  }
  if (window.tn.curResolution == 480) {
    window.tn.canvas_min_width = 480;
    window.tn.canvas_max_width = 640
  }
  if (window.tn.curResolution == 320) {
    window.tn.canvas_min_width = 320;
    window.tn.canvas_max_width = 480
  }
  window.tn.grid_width = window.tn.canvas_min_width;
  window.tn.grid_offset_left = parseFloat((window.tn.window_width - window.tn.grid_width) / 2)
}
var t396_waitForFinalEvent = (function () {
  var timers = {};
  return function (callback, ms, uniqueId) {
    if (!uniqueId) {
      uniqueId = "Don't call this twice without a uniqueId"
    }
    if (timers[uniqueId]) {
      clearTimeout(timers[uniqueId])
    }
    timers[uniqueId] = setTimeout(callback, ms)
  }
})();
function t396_switchResolution(res, resmax) {
  tn_console('func: switchResolution');
  if (typeof resmax == 'undefined') {
    if (res == 1200) resmax = '';
    if (res == 960) resmax = 1200;
    if (res == 640) resmax = 960;
    if (res == 480) resmax = 640;
    if (res == 320) resmax = 480
  }
  window.tn.curResolution = res;
  window.tn.curResolution_max = resmax
}
function t396_artboard_build(data, recid) {
  tn_console('func: t396_artboard_build. Recid:' + recid);
  tn_console(data);
  var ab = $('#rec' + recid).find('.t396__artboard');
  t396_ab__renderView(ab);
  ab.find('.tn-elem').each(function () {
    var item = $(this);
    if (item.attr('data-elem-type') == 'text') {
      t396_addText(ab, item)
    }
    if (item.attr('data-elem-type') == 'image') {
      t396_addImage(ab, item)
    }
    if (item.attr('data-elem-type') == 'shape') {
      t396_addShape(ab, item)
    }
    if (item.attr('data-elem-type') == 'button') {
      t396_addButton(ab, item)
    }
    if (item.attr('data-elem-type') == 'video') {
      t396_addVideo(ab, item)
    }
    if (item.attr('data-elem-type') == 'html') {
      t396_addHtml(ab, item)
    }
    if (item.attr('data-elem-type') == 'tooltip') {
      t396_addTooltip(ab, item)
    }
    if (item.attr('data-elem-type') == 'form') {
      t396_addForm(ab, item)
    }
  });
  $('#rec' + recid).find('.t396__artboard').removeClass('rendering').addClass('rendered');
  if (ab.attr('data-artboard-ovrflw') == 'visible') {
    $('#allrecords').css('overflow', 'hidden')
  }
  if ($isMobile) {
    $('#rec' + recid).append('<style>@media only screen and (min-width:1366px) and (orientation:landscape) and (-webkit-min-device-pixel-ratio:2) {.t396__carrier {background-attachment:scroll!important;}}</style>')
  }
}
function t396_ab__renderView(ab) {
  var fields = window.tn.ab_fields;
  for (var i = 0; i < fields.length; i++) {
    t396_ab__renderViewOneField(ab, fields[i])
  }
  var ab_min_height = t396_ab__getFieldValue(ab, 'height');
  var ab_max_height = t396_ab__getHeight(ab);
  var offset_top = 0;
  if (ab_min_height == ab_max_height) {
    offset_top = 0
  } else {
    var ab_valign = t396_ab__getFieldValue(ab, 'valign');
    if (ab_valign == 'top') {
      offset_top = 0
    } else if (ab_valign == 'center') {
      offset_top = parseFloat((ab_max_height - ab_min_height) / 2).toFixed(1)
    } else if (ab_valign == 'bottom') {
      offset_top = parseFloat((ab_max_height - ab_min_height)).toFixed(1)
    } else if (ab_valign == 'stretch') {
      offset_top = 0;
      ab_min_height = ab_max_height
    } else {
      offset_top = 0
    }
  }
  ab.attr('data-artboard-proxy-min-offset-top', offset_top);
  ab.attr('data-artboard-proxy-min-height', ab_min_height);
  ab.attr('data-artboard-proxy-max-height', ab_max_height)
}
function t396_addText(ab, el) {
  tn_console('func: addText');
  var fields_str = 'top,left,width,container,axisx,axisy,widthunits,leftunits,topunits';
  var fields = fields_str.split(',');
  el.attr('data-fields', fields_str);
  t396_elem__renderView(el)
}
function t396_addImage(ab, el) {
  tn_console('func: addImage');
  var fields_str = 'img,width,filewidth,fileheight,top,left,container,axisx,axisy,widthunits,leftunits,topunits';
  var fields = fields_str.split(',');
  el.attr('data-fields', fields_str);
  t396_elem__renderView(el);
  el.find('img').on("load", function () {
    t396_elem__renderViewOneField(el, 'top');
    if (typeof $(this).attr('src') != 'undefined' && $(this).attr('src') != '') {
      setTimeout(function () {
        t396_elem__renderViewOneField(el, 'top')
      }, 2000)
    }
  }).each(function () {
    if (this.complete) $(this).load()
  });
  el.find('img').on('tuwidget_done', function (e, file) {
    t396_elem__renderViewOneField(el, 'top')
  })
}
function t396_addShape(ab, el) {
  tn_console('func: addShape');
  var fields_str = 'width,height,top,left,';
  fields_str += 'container,axisx,axisy,widthunits,heightunits,leftunits,topunits';
  var fields = fields_str.split(',');
  el.attr('data-fields', fields_str);
  t396_elem__renderView(el)
}
function t396_addButton(ab, el) {
  tn_console('func: addButton');
  var fields_str = 'top,left,width,height,container,axisx,axisy,caption,leftunits,topunits';
  var fields = fields_str.split(',');
  el.attr('data-fields', fields_str);
  t396_elem__renderView(el);
  return (el)
}
function t396_addVideo(ab, el) {
  tn_console('func: addVideo');
  var fields_str = 'width,height,top,left,';
  fields_str += 'container,axisx,axisy,widthunits,heightunits,leftunits,topunits';
  var fields = fields_str.split(',');
  el.attr('data-fields', fields_str);
  t396_elem__renderView(el);
  var viel = el.find('.tn-atom__videoiframe');
  var viatel = el.find('.tn-atom');
  viatel.css('background-color', '#000');
  var vihascover = viatel.attr('data-atom-video-has-cover');
  if (typeof vihascover == 'undefined') {
    vihascover = ''
  }
  if (vihascover == 'y') {
    viatel.click(function () {
      var viifel = viel.find('iframe');
      if (viifel.length) {
        var foo = viifel.attr('data-original');
        viifel.attr('src', foo)
      }
      viatel.css('background-image', 'none');
      viatel.find('.tn-atom__video-play-link').css('display', 'none')
    })
  }
  var autoplay = t396_elem__getFieldValue(el, 'autoplay');
  var showinfo = t396_elem__getFieldValue(el, 'showinfo');
  var loop = t396_elem__getFieldValue(el, 'loop');
  var mute = t396_elem__getFieldValue(el, 'mute');
  var startsec = t396_elem__getFieldValue(el, 'startsec');
  var endsec = t396_elem__getFieldValue(el, 'endsec');
  var tmode = $('#allrecords').attr('data-tilda-mode');
  var url = '';
  var viyid = viel.attr('data-youtubeid');
  if (typeof viyid != 'undefined' && viyid != '') {
    url = '//www.youtube.com/embed/';
    url += viyid + '?rel=0&fmt=18&html5=1';
    url += '&showinfo=' + (showinfo == 'y' ? '1' : '0');
    if (loop == 'y') {
      url += '&loop=1&playlist=' + viyid
    }
    if (startsec > 0) {
      url += '&start=' + startsec
    }
    if (endsec > 0) {
      url += '&end=' + endsec
    }
    if (mute == 'y') {
      url += '&mute=1'
    }
    if (vihascover == 'y') {
      url += '&autoplay=1';
      viel.html('<iframe id="youtubeiframe" width="100%" height="100%" data-original="' + url + '" frameborder="0" allowfullscreen data-flag-inst="y"></iframe>')
    } else {
      if (typeof tmode != 'undefined' && tmode == 'edit') {
      } else {
        if (autoplay == 'y') {
          url += '&autoplay=1'
        }
      }
      if (window.lazy == 'y') {
        viel.html('<iframe id="youtubeiframe" class="t-iframe" width="100%" height="100%" data-original="' + url + '" frameborder="0" allowfullscreen data-flag-inst="lazy"></iframe>');
        el.append('<script>lazyload_iframe = new LazyLoad({elements_selector: ".t-iframe"});</script>')
      } else {
        viel.html('<iframe id="youtubeiframe" width="100%" height="100%" src="' + url + '" frameborder="0" allowfullscreen data-flag-inst="y"></iframe>')
      }
    }
  }
  var vivid = viel.attr('data-vimeoid');
  if (typeof vivid != 'undefined' && vivid > 0) {
    url = '//player.vimeo.com/video/';
    url += vivid + '?color=ffffff&badge=0';
    if (showinfo == 'y') {
      url += '&title=1&byline=1&portrait=1'
    } else {
      url += '&title=0&byline=0&portrait=0'
    }
    if (loop == 'y') {
      url += '&loop=1'
    }
    if (mute == 'y') {
      url += '&muted=1'
    }
    if (vihascover == 'y') {
      url += '&autoplay=1';
      viel.html('<iframe data-original="' + url + '" width="100%" height="100%" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>')
    } else {
      if (typeof tmode != 'undefined' && tmode == 'edit') {
      } else {
        if (autoplay == 'y') {
          url += '&autoplay=1'
        }
      }
      if (window.lazy == 'y') {
        viel.html('<iframe class="t-iframe" data-original="' + url + '" width="100%" height="100%" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>');
        el.append('<script>lazyload_iframe = new LazyLoad({elements_selector: ".t-iframe"});</script>')
      } else {
        viel.html('<iframe src="' + url + '" width="100%" height="100%" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>')
      }
    }
  }
}
function t396_addHtml(ab, el) {
  tn_console('func: addHtml');
  var fields_str = 'width,height,top,left,';
  fields_str += 'container,axisx,axisy,widthunits,heightunits,leftunits,topunits';
  var fields = fields_str.split(',');
  el.attr('data-fields', fields_str);
  t396_elem__renderView(el)
}
function t396_addTooltip(ab, el) {
  tn_console('func: addTooltip');
  var fields_str = 'width,height,top,left,';
  fields_str += 'container,axisx,axisy,widthunits,heightunits,leftunits,topunits,tipposition';
  var fields = fields_str.split(',');
  el.attr('data-fields', fields_str);
  t396_elem__renderView(el);
  var pinEl = el.find('.tn-atom__pin');
  var tipEl = el.find('.tn-atom__tip');
  var tipopen = el.attr('data-field-tipopen-value');
  if (isMobile || (typeof tipopen != 'undefined' && tipopen == 'click')) {
    t396_setUpTooltip_mobile(el, pinEl, tipEl)
  } else {
    t396_setUpTooltip_desktop(el, pinEl, tipEl)
  }
  setTimeout(function () {
    $('.tn-atom__tip-img').each(function () {
      var foo = $(this).attr('data-tipimg-original');
      if (typeof foo != 'undefined' && foo != '') {
        $(this).attr('src', foo)
      }
    })
  }, 3000)
}
function t396_addForm(ab, el) {
  tn_console('func: addForm');
  var fields_str = 'width,top,left,';
  fields_str += 'inputs,container,axisx,axisy,widthunits,leftunits,topunits';
  var fields = fields_str.split(',');
  el.attr('data-fields', fields_str);
  t396_elem__renderView(el)
}
function t396_elem__setFieldValue(el, prop, val, flag_render, flag_updateui, res) {
  if (res == '') res = window.tn.curResolution;
  if (res < 1200 && prop != 'zindex') {
    el.attr('data-field-' + prop + '-res-' + res + '-value', val)
  } else {
    el.attr('data-field-' + prop + '-value', val)
  }
  if (flag_render == 'render') elem__renderViewOneField(el, prop);
  if (flag_updateui == 'updateui') panelSettings__updateUi(el, prop, val)
}
function t396_elem__getFieldValue(el, prop) {
  var res = window.tn.curResolution;
  var r;
  if (res < 1200) {
    if (res == 960) {
      r = el.attr('data-field-' + prop + '-res-960-value');
      if (typeof r == 'undefined') {
        r = el.attr('data-field-' + prop + '-value')
      }
    }
    if (res == 640) {
      r = el.attr('data-field-' + prop + '-res-640-value');
      if (typeof r == 'undefined') {
        r = el.attr('data-field-' + prop + '-res-960-value');
        if (typeof r == 'undefined') {
          r = el.attr('data-field-' + prop + '-value')
        }
      }
    }
    if (res == 480) {
      r = el.attr('data-field-' + prop + '-res-480-value');
      if (typeof r == 'undefined') {
        r = el.attr('data-field-' + prop + '-res-640-value');
        if (typeof r == 'undefined') {
          r = el.attr('data-field-' + prop + '-res-960-value');
          if (typeof r == 'undefined') {
            r = el.attr('data-field-' + prop + '-value')
          }
        }
      }
    }
    if (res == 320) {
      r = el.attr('data-field-' + prop + '-res-320-value');
      if (typeof r == 'undefined') {
        r = el.attr('data-field-' + prop + '-res-480-value');
        if (typeof r == 'undefined') {
          r = el.attr('data-field-' + prop + '-res-640-value');
          if (typeof r == 'undefined') {
            r = el.attr('data-field-' + prop + '-res-960-value');
            if (typeof r == 'undefined') {
              r = el.attr('data-field-' + prop + '-value')
            }
          }
        }
      }
    }
  } else {
    r = el.attr('data-field-' + prop + '-value')
  }
  return (r)
}
function t396_elem__renderView(el) {
  tn_console('func: elem__renderView');
  var fields = el.attr('data-fields');
  if (!fields) {
    return !1
  }
  fields = fields.split(',');
  for (var i = 0; i < fields.length; i++) {
    t396_elem__renderViewOneField(el, fields[i])
  }
}
function t396_elem__renderViewOneField(el, field) {
  var value = t396_elem__getFieldValue(el, field);
  if (field == 'left') {
    value = t396_elem__convertPosition__Local__toAbsolute(el, field, value);
    el.css('left', parseFloat(value).toFixed(1) + 'px')
  }
  if (field == 'top') {
    value = t396_elem__convertPosition__Local__toAbsolute(el, field, value);
    el.css('top', parseFloat(value).toFixed(1) + 'px')
  }
  if (field == 'width') {
    value = t396_elem__getWidth(el, value);
    el.css('width', parseFloat(value).toFixed(1) + 'px');
    var eltype = el.attr('data-elem-type');
    if (eltype == 'tooltip') {
      var pinSvgIcon = el.find('.tn-atom__pin-icon');
      if (pinSvgIcon.length > 0) {
        var pinSize = parseFloat(value).toFixed(1) + 'px';
        pinSvgIcon.css({'width': pinSize, 'height': pinSize})
      }
      el.css('height', parseInt(value).toFixed(1) + 'px')
    }
  }
  if (field == 'height') {
    var eltype = el.attr('data-elem-type');
    if (eltype == 'tooltip') {
      return
    }
    value = t396_elem__getHeight(el, value);
    el.css('height', parseFloat(value).toFixed(1) + 'px')
  }
  if (field == 'container') {
    t396_elem__renderViewOneField(el, 'left');
    t396_elem__renderViewOneField(el, 'top')
  }
  if (field == 'width' || field == 'height' || field == 'fontsize' || field == 'fontfamily' || field == 'letterspacing' || field == 'fontweight' || field == 'img') {
    t396_elem__renderViewOneField(el, 'left');
    t396_elem__renderViewOneField(el, 'top')
  }
  if (field == 'inputs') {
    value = el.find('.tn-atom__inputs-textarea').val();
    try {
      t_zeroForms__renderForm(el, value)
    } catch (err) {
    }
  }
}
function t396_elem__convertPosition__Local__toAbsolute(el, field, value) {
  value = parseInt(value);
  if (field == 'left') {
    var el_container, offset_left, el_container_width, el_width;
    var container = t396_elem__getFieldValue(el, 'container');
    if (container == 'grid') {
      el_container = 'grid';
      offset_left = window.tn.grid_offset_left;
      el_container_width = window.tn.grid_width
    } else {
      el_container = 'window';
      offset_left = 0;
      el_container_width = window.tn.window_width
    }
    var el_leftunits = t396_elem__getFieldValue(el, 'leftunits');
    if (el_leftunits == '%') {
      value = t396_roundFloat(el_container_width * value / 100)
    }
    value = offset_left + value;
    var el_axisx = t396_elem__getFieldValue(el, 'axisx');
    if (el_axisx == 'center') {
      el_width = t396_elem__getWidth(el);
      value = el_container_width / 2 - el_width / 2 + value
    }
    if (el_axisx == 'right') {
      el_width = t396_elem__getWidth(el);
      value = el_container_width - el_width + value
    }
  }
  if (field == 'top') {
    var ab = el.parent();
    var el_container, offset_top, el_container_height, el_height;
    var container = t396_elem__getFieldValue(el, 'container');
    if (container == 'grid') {
      el_container = 'grid';
      offset_top = parseFloat(ab.attr('data-artboard-proxy-min-offset-top'));
      el_container_height = parseFloat(ab.attr('data-artboard-proxy-min-height'))
    } else {
      el_container = 'window';
      offset_top = 0;
      el_container_height = parseFloat(ab.attr('data-artboard-proxy-max-height'))
    }
    var el_topunits = t396_elem__getFieldValue(el, 'topunits');
    if (el_topunits == '%') {
      value = (el_container_height * (value / 100))
    }
    value = offset_top + value;
    var el_axisy = t396_elem__getFieldValue(el, 'axisy');
    if (el_axisy == 'center') {
      el_height = t396_elem__getHeight(el);
      value = el_container_height / 2 - el_height / 2 + value
    }
    if (el_axisy == 'bottom') {
      el_height = t396_elem__getHeight(el);
      value = el_container_height - el_height + value
    }
  }
  return (value)
}
function t396_ab__setFieldValue(ab, prop, val, res) {
  if (res == '') res = window.tn.curResolution;
  if (res < 1200) {
    ab.attr('data-artboard-' + prop + '-res-' + res, val)
  } else {
    ab.attr('data-artboard-' + prop, val)
  }
}
function t396_ab__getFieldValue(ab, prop) {
  var res = window.tn.curResolution;
  var r;
  if (res < 1200) {
    if (res == 960) {
      r = ab.attr('data-artboard-' + prop + '-res-960');
      if (typeof r == 'undefined') {
        r = ab.attr('data-artboard-' + prop + '')
      }
    }
    if (res == 640) {
      r = ab.attr('data-artboard-' + prop + '-res-640');
      if (typeof r == 'undefined') {
        r = ab.attr('data-artboard-' + prop + '-res-960');
        if (typeof r == 'undefined') {
          r = ab.attr('data-artboard-' + prop + '')
        }
      }
    }
    if (res == 480) {
      r = ab.attr('data-artboard-' + prop + '-res-480');
      if (typeof r == 'undefined') {
        r = ab.attr('data-artboard-' + prop + '-res-640');
        if (typeof r == 'undefined') {
          r = ab.attr('data-artboard-' + prop + '-res-960');
          if (typeof r == 'undefined') {
            r = ab.attr('data-artboard-' + prop + '')
          }
        }
      }
    }
    if (res == 320) {
      r = ab.attr('data-artboard-' + prop + '-res-320');
      if (typeof r == 'undefined') {
        r = ab.attr('data-artboard-' + prop + '-res-480');
        if (typeof r == 'undefined') {
          r = ab.attr('data-artboard-' + prop + '-res-640');
          if (typeof r == 'undefined') {
            r = ab.attr('data-artboard-' + prop + '-res-960');
            if (typeof r == 'undefined') {
              r = ab.attr('data-artboard-' + prop + '')
            }
          }
        }
      }
    }
  } else {
    r = ab.attr('data-artboard-' + prop)
  }
  return (r)
}
function t396_ab__renderViewOneField(ab, field) {
  var value = t396_ab__getFieldValue(ab, field)
}
function t396_allelems__renderView(ab) {
  tn_console('func: allelems__renderView: abid:' + ab.attr('data-artboard-recid'));
  ab.find(".tn-elem").each(function () {
    t396_elem__renderView($(this))
  })
}
function t396_ab__filterUpdate(ab) {
  var filter = ab.find('.t396__filter');
  var c1 = filter.attr('data-filtercolor-rgb');
  var c2 = filter.attr('data-filtercolor2-rgb');
  var o1 = filter.attr('data-filteropacity');
  var o2 = filter.attr('data-filteropacity2');
  if ((typeof c2 == 'undefined' || c2 == '') && (typeof c1 != 'undefined' && c1 != '')) {
    filter.css("background-color", "rgba(" + c1 + "," + o1 + ")")
  } else if ((typeof c1 == 'undefined' || c1 == '') && (typeof c2 != 'undefined' && c2 != '')) {
    filter.css("background-color", "rgba(" + c2 + "," + o2 + ")")
  } else if (typeof c1 != 'undefined' && typeof c2 != 'undefined' && c1 != '' && c2 != '') {
    filter.css({background: "-webkit-gradient(linear, left top, left bottom, from(rgba(" + c1 + "," + o1 + ")), to(rgba(" + c2 + "," + o2 + ")) )"})
  } else {
    filter.css("background-color", 'transparent')
  }
}
function t396_ab__getHeight(ab, ab_height) {
  if (typeof ab_height == 'undefined') ab_height = t396_ab__getFieldValue(ab, 'height');
  ab_height = parseFloat(ab_height);
  var ab_height_vh = t396_ab__getFieldValue(ab, 'height_vh');
  if (ab_height_vh != '') {
    ab_height_vh = parseFloat(ab_height_vh);
    if (isNaN(ab_height_vh) === !1) {
      var ab_height_vh_px = parseFloat(window.tn.window_height * parseFloat(ab_height_vh / 100));
      if (ab_height < ab_height_vh_px) {
        ab_height = ab_height_vh_px
      }
    }
  }
  return (ab_height)
}
function t396_hex2rgb(hexStr) {
  var hex = parseInt(hexStr.substring(1), 16);
  var r = (hex & 0xff0000) >> 16;
  var g = (hex & 0x00ff00) >> 8;
  var b = hex & 0x0000ff;
  return [r, g, b]
}
String.prototype.t396_replaceAll = function (search, replacement) {
  var target = this;
  return target.replace(new RegExp(search, 'g'), replacement)
};
function t396_elem__getWidth(el, value) {
  if (typeof value == 'undefined') value = parseFloat(t396_elem__getFieldValue(el, 'width'));
  var el_widthunits = t396_elem__getFieldValue(el, 'widthunits');
  if (el_widthunits == '%') {
    var el_container = t396_elem__getFieldValue(el, 'container');
    if (el_container == 'window') {
      value = parseFloat(window.tn.window_width * parseFloat(parseInt(value) / 100))
    } else {
      value = parseFloat(window.tn.grid_width * parseFloat(parseInt(value) / 100))
    }
  }
  return (value)
}
function t396_elem__getHeight(el, value) {
  if (typeof value == 'undefined') value = t396_elem__getFieldValue(el, 'height');
  value = parseFloat(value);
  if (el.attr('data-elem-type') == 'shape' || el.attr('data-elem-type') == 'video' || el.attr('data-elem-type') == 'html') {
    var el_heightunits = t396_elem__getFieldValue(el, 'heightunits');
    if (el_heightunits == '%') {
      var ab = el.parent();
      var ab_min_height = parseFloat(ab.attr('data-artboard-proxy-min-height'));
      var ab_max_height = parseFloat(ab.attr('data-artboard-proxy-max-height'));
      var el_container = t396_elem__getFieldValue(el, 'container');
      if (el_container == 'window') {
        value = parseFloat(ab_max_height * parseFloat(value / 100))
      } else {
        value = parseFloat(ab_min_height * parseFloat(value / 100))
      }
    }
  } else if (el.attr('data-elem-type') == 'button') {
    value = value
  } else {
    value = parseFloat(el.innerHeight())
  }
  return (value)
}
function t396_roundFloat(n) {
  n = Math.round(n * 100) / 100;
  return (n)
}
function tn_console(str) {
  if (window.tn_comments == 1) console.log(str)
}
function t396_setUpTooltip_desktop(el, pinEl, tipEl) {
  var timer;
  pinEl.mouseover(function () {
    $('.tn-atom__tip_visible').each(function () {
      var thisTipEl = $(this).parents('.t396__elem');
      if (thisTipEl.attr('data-elem-id') != el.attr('data-elem-id')) {
        t396_hideTooltip(thisTipEl, $(this))
      }
    });
    clearTimeout(timer);
    if (tipEl.css('display') == 'block') {
      return
    }
    t396_showTooltip(el, tipEl)
  });
  pinEl.mouseout(function () {
    timer = setTimeout(function () {
      t396_hideTooltip(el, tipEl)
    }, 300)
  })
}
function t396_setUpTooltip_mobile(el, pinEl, tipEl) {
  pinEl.on('click', function (e) {
    if (tipEl.css('display') == 'block' && $(e.target).hasClass("tn-atom__pin")) {
      t396_hideTooltip(el, tipEl)
    } else {
      t396_showTooltip(el, tipEl)
    }
  });
  var id = el.attr("data-elem-id");
  $(document).click(function (e) {
    var isInsideTooltip = ($(e.target).hasClass("tn-atom__pin") || $(e.target).parents(".tn-atom__pin").length > 0);
    if (isInsideTooltip) {
      var clickedPinId = $(e.target).parents(".t396__elem").attr("data-elem-id");
      if (clickedPinId == id) {
        return
      }
    }
    t396_hideTooltip(el, tipEl)
  })
}
function t396_hideTooltip(el, tipEl) {
  tipEl.css('display', '');
  tipEl.css({"left": "", "transform": "", "right": ""});
  tipEl.removeClass('tn-atom__tip_visible');
  el.css('z-index', '')
}
function t396_showTooltip(el, tipEl) {
  var pos = el.attr("data-field-tipposition-value");
  if (typeof pos == 'undefined' || pos == '') {
    pos = 'top'
  }
  ;
  var elSize = el.height();
  var elTop = el.offset().top;
  var elBottom = elTop + elSize;
  var elLeft = el.offset().left;
  var elRight = el.offset().left + elSize;
  var winTop = $(window).scrollTop();
  var winWidth = $(window).width();
  var winBottom = winTop + $(window).height();
  var tipElHeight = tipEl.outerHeight();
  var tipElWidth = tipEl.outerWidth();
  var padd = 15;
  if (pos == 'right' || pos == 'left') {
    var tipElRight = elRight + padd + tipElWidth;
    var tipElLeft = elLeft - padd - tipElWidth;
    if ((pos == 'right' && tipElRight > winWidth) || (pos == 'left' && tipElLeft < 0)) {
      pos = 'top'
    }
  }
  if (pos == 'top' || pos == 'bottom') {
    var tipElRight = elRight + (tipElWidth / 2 - elSize / 2);
    var tipElLeft = elLeft - (tipElWidth / 2 - elSize / 2);
    if (tipElRight > winWidth) {
      var rightOffset = -(winWidth - elRight - padd);
      tipEl.css({"left": "auto", "transform": "none", "right": rightOffset + "px"})
    }
    if (tipElLeft < 0) {
      var leftOffset = -(elLeft - padd);
      tipEl.css({"left": leftOffset + "px", "transform": "none"})
    }
  }
  if (pos == 'top') {
    var tipElTop = elTop - padd - tipElHeight;
    if (winTop > tipElTop) {
      pos = 'bottom'
    }
  }
  if (pos == 'bottom') {
    var tipElBottom = elBottom + padd + tipElHeight;
    if (winBottom < tipElBottom) {
      pos = 'top'
    }
  }
  tipEl.attr('data-tip-pos', pos);
  tipEl.css('display', 'block');
  tipEl.addClass('tn-atom__tip_visible');
  el.css('z-index', '1000')
}
function t397_init(recid) {
  var el = $('#rec' + recid);
  el.find('.t397__tab').click(function () {
    el.find('.t397__tab').removeClass('t397__tab_active');
    $(this).addClass('t397__tab_active');
    t397_alltabs_updateContent(recid);
    t397_updateSelect(recid);
    $('.t230, .t670, .t347, .t346, .t519, .t774, .t764, .t744, .t349, .t650, .t604, .t117, .t517, .t609, .t351, .t353, .t341, .t404, .t385, .t386, .t412, .t268, .t425, .t409, .t384, .t279, .t428, .t418, .t433, .t121, .t478, .t498, .t552, .t544, .t554, .t545, .t486, .t570, .t422, .t601, .t228, .t229, .t456, .t592, .t520, .t599, .t422, .t504, .t688, .t675, .t132, .t616, .t686, .t778, .t615, .t433, .t598, .t762, .t538, .t226, .t698, .t760, .t511, .t799, .t780, .t827, .t740, .t480, .t827, .t829, .t605, .t726, .t728, .t822, .t798, .t801, .t694, .t842, .t843, .t849, .t850, .t851, .t856, .t858, .t859, .t860, .t396, .t518, .t738, .t532, .t431, .t700, .t223, .t539, .t577, .t-store, .t477').trigger('displayChanged');
    setTimeout(function () {
      $('.t351, .t353, .t341, .t404, .t385, .t386, .t412, .t268, .t425, .t409, .t384, .t279, .t428, .t433, .t545, .t422, .t410, .t829, .t396, .t738').trigger('displayChanged')
    }, 50);
    t397_startUpdateLazyLoad($(this));
    if (window.lazy == 'y') {
      t_lazyload_update()
    }
  });
  t397_alltabs_updateContent(recid);
  t397_updateContentBySelect(recid);
  $('.t397').bind('displayChanged', function () {
    t397_alltabs_updateContent(recid);
    t397_updateContentBySelect(recid)
  });
  var bgcolor = el.css("background-color");
  var bgcolor_target = el.find(".t397__select, .t397__firefoxfix");
  bgcolor_target.css("background-color", bgcolor)
}
function t397_alltabs_updateContent(recid) {
  var el = $('#rec' + recid);
  el.find(".t397__tab").each(function (i) {
    var rec_ids = $(this).attr('data-tab-rec-ids').split(',');
    rec_ids.forEach(function (rec_id, i, arr) {
      var rec_el = $('#rec' + rec_id);
      rec_el.attr('data-connect-with-tab', 'yes');
      rec_el.attr('data-animationappear', 'off');
      rec_el.addClass('t379__off')
    })
  });
  el.find(".t397__tab_active").each(function (i) {
    if ($(this).is(":visible") || el.find(".t397__select").is(":visible")) {
      var rec_ids = $(this).attr('data-tab-rec-ids').split(',');
      rec_ids.forEach(function (rec_id, i, arr) {
        var rec_el = $('#rec' + rec_id);
        rec_el.removeClass('t379__off');
        rec_el.css('opacity', '')
      })
    }
  })
}
function t397_updateContentBySelect(recid) {
  var el = $('#rec' + recid);
  el.find(".t397__select").change(function () {
    var select_val = el.find(".t397__select").val();
    var tab_index = el.find(".t397__tab[data-tab-rec-ids='" + select_val + "']");
    tab_index.trigger('click')
  })
}
function t397_updateSelect(recid) {
  var el = $('#rec' + recid);
  var current_tab = el.find(".t397__tab_active").attr('data-tab-rec-ids');
  var el_select = el.find(".t397__select");
  el_select.val(current_tab)
}
function t397_startUpdateLazyLoad($this) {
  var rec_ids = $this.attr('data-tab-rec-ids').split(',');
  rec_ids.forEach(function (rec_id, i, arr) {
    var rec_el = $('#rec' + rec_id);
    var video = rec_el.find('.t-video-lazyload');
    if (video.length > 0) {
      t397_updateVideoLazyLoad(video)
    }
  })
}
function t397_updateVideoLazyLoad(video) {
  setTimeout(function () {
    video.each(function () {
      var div = $(this);
      if (!div.hasClass('t-video__isload')) {
        var height = div.attr('data-videolazy-height') ? $(this).attr('data-videolazy-height') : '100%';
        if (height.indexOf('vh') != -1) {
          height = '100%'
        }
        var videoId = div.attr('data-videolazy-id').trim();
        var blockId = div.attr('data-blocklazy-id') || '';
        var videoTwoId = '_' + div.attr('data-videolazy-two-id') + '_' || '';
        if (div.attr('data-videolazy-type') == 'youtube') {
          div.find('iframe').remove();
          div.prepend('<iframe id="youtubeiframe' + videoTwoId + blockId + '" width="100%" height="' + height + '" src="//www.youtube.com/embed/' + videoId + '?rel=0&fmt=18&html5=1&showinfo=0" frameborder="0" allowfullscreen></iframe>')
        }
      }
      div.addClass('t-video__isload')
    })
  }, 0)
}
function t450_showMenu(recid) {
  var el = $('#rec' + recid);
  $('body').addClass('t450__body_menushowed');
  el.find('.t450').addClass('t450__menu_show');
  el.find('.t450__overlay').addClass('t450__menu_show');
  $('.t450').bind('clickedAnchorInTooltipMenu', function () {
    t450_closeMenu()
  });
  el.find('.t450__overlay, .t450__close, a[href*=#]').click(function () {
    var url = $(this).attr('href');
    if (typeof url != 'undefined' && url != '' && (url.substring(0, 7) == '#price:' || url.substring(0, 9) == '#submenu:')) {
      return
    }
    t450_closeMenu()
  });
  $(document).keydown(function (e) {
    if (e.keyCode == 27) {
      $('body').removeClass('t390__body_popupshowed');
      $('.t390').removeClass('t390__popup_show')
    }
  })
}
function t450_closeMenu() {
  $('body').removeClass('t450__body_menushowed');
  $('.t450').removeClass('t450__menu_show');
  $('.t450__overlay').removeClass('t450__menu_show')
}
function t450_checkSize(recid) {
  var el = $('#rec' + recid).find('.t450');
  var windowheight = $(window).height() - 80;
  var contentheight = el.find(".t450__top").height() + el.find(".t450__rightside").height();
  if (contentheight > windowheight) {
    el.addClass('t450__overflowed');
    el.find(".t450__container").css('height', 'auto')
  }
}
function t450_appearMenu(recid) {
  var el = $('#rec' + recid);
  var burger = el.find(".t450__burger_container");
  burger.each(function () {
    var el = $(this);
    var appearoffset = el.attr("data-appearoffset");
    var hideoffset = el.attr("data-hideoffset");
    if (appearoffset != "") {
      if (appearoffset.indexOf('vh') > -1) {
        appearoffset = Math.floor((window.innerHeight * (parseInt(appearoffset) / 100)))
      }
      appearoffset = parseInt(appearoffset, 10);
      if ($(window).scrollTop() >= appearoffset) {
        if (el.hasClass('t450__beforeready')) {
          el.finish();
          el.removeClass("t450__beforeready")
        }
      } else {
        el.stop();
        el.addClass("t450__beforeready")
      }
    }
    if (hideoffset != "") {
      if (hideoffset.indexOf('vh') > -1) {
        hideoffset = Math.floor((window.innerHeight * (parseInt(hideoffset) / 100)))
      }
      hideoffset = parseInt(hideoffset, 10);
      if ($(window).scrollTop() + $(window).height() >= $(document).height() - hideoffset) {
        if (!el.hasClass('t450__beforeready')) {
          el.finish();
          el.addClass("t450__beforeready")
        }
      } else {
        if (appearoffset != "") {
          if ($(window).scrollTop() >= appearoffset) {
            el.stop();
            el.removeClass("t450__beforeready")
          }
        } else {
          el.stop();
          el.removeClass("t450__beforeready")
        }
      }
    }
  })
}
function t450_initMenu(recid) {
  var el = $('#rec' + recid).find('.t450');
  var hook = el.attr('data-tooltip-hook');
  if (hook !== '') {
    var obj = $('a[href="' + hook + '"]');
    obj.click(function (e) {
      t450_closeMenu();
      t450_showMenu(recid);
      t450_checkSize(recid);
      e.preventDefault()
    })
  }
  $('#rec' + recid).find('.t450__burger_container').click(function (e) {
    t450_closeMenu();
    t450_showMenu(recid);
    t450_checkSize(recid)
  })
}
function t537_setHeight(recid) {
  var t537__el = $("#rec" + recid), t537__image = t537__el.find(".t537__bgimg:first"), t537__width = t537__image.attr("data-image-width"), t537__height = t537__image.attr("data-image-height"), t537__ratio = t537__height / t537__width, t537__padding = t537__ratio * 100;
  $("#rec" + recid + " .t537__bgimg").css("padding-bottom", t537__padding + "%")
}
function t545_setHeight(recid) {
  var el = $('#rec' + recid);
  var t545_height = el.find('.t-container').attr("data-height");
  el.find('.t-container').each(function () {
    var highestBox = 0;
    $('.t545__col', this).each(function () {
      if ($(this).height() > highestBox) {
        highestBox = $(this).height()
      }
    });
    if (t545_height > highestBox) {
      highestBox = t545_height
    }
    $('.t545__textwrapper', this).css('height', highestBox);
    $('.t545__blockimg', this).css('height', highestBox)
  })
}
function t570_init(recid) {
  if ($(window).width() > 750) {
    t570_setMapHeight(recid);
    $(window).load(function () {
      t570_setMapHeight(recid)
    });
    $(window).resize(function () {
      t570_setMapHeight(recid)
    })
  }
}
function t570_setMapHeight(recid) {
  var t570__el = $('#rec' + recid), t570__map = t570__el.find('.t-map');
  var t570__textwrapper = t570__el.find('.t570__col_text').height();
  t570__map.css('height', t570__textwrapper).trigger('sizechange')
}
function t592_init(recid) {
  var element = $('#rec' + recid).find('.t592__descr');
  var highestBox = 0;
  element.css('height', '');
  element.each(function () {
    if ($(this).height() > highestBox) highestBox = $(this).height()
  });
  if ($(window).width() >= 960) {
    element.css('height', highestBox)
  } else {
    element.css('height', '')
  }
};function t598_init(recid) {
  var el = $('#rec' + recid);
  if (el.find('.t598__title').length) {
    t598_equalHeight(el.find('.t598__title'))
  }
  if (el.find('.t598__descr').length) {
    t598_equalHeight(el.find('.t598__descr'))
  }
  if (el.find('.t598__price').length) {
    t598_equalHeight(el.find('.t598__price'))
  }
  if (el.find('.t598__imgwrapper').length) {
    t598_equalHeight(el.find('.t598__imgwrapper'));
    $(window).load(function () {
      t598_equalHeight(el.find('.t598__imgwrapper'))
    })
  }
};function t598_equalHeight(element) {
  var highestBox = 0;
  element.css('height', '');
  element.each(function () {
    if ($(this).height() > highestBox) highestBox = $(this).height()
  });
  if ($(window).width() >= 960) {
    element.css('height', highestBox)
  } else {
    element.css('height', '')
  }
}
function t602_init(recid) {
  var t602_lastCall, t602_timeoutId, t602_interval = 100;
  $(window).scroll(function () {
    var t602_now = new Date().getTime();
    if (t602_lastCall && t602_now < (t602_lastCall + t602_interval)) {
      clearTimeout(t602_timeoutId);
      t602_timeoutId = setTimeout(function () {
        t602_lastCall = t602_now;
        t602_setProgressBarWidth(recid)
      }, t602_interval - (t602_now - t602_lastCall))
    } else {
      t602_lastCall = t602_now;
      t602_setProgressBarWidth(recid)
    }
  })
}
function t602_setProgressBarWidth(recid) {
  var t602_windowScrollTop = $(window).scrollTop(),
    t602_docHeight = $(document).height(),
    t602_winHeight = $(window).height();

  t602_scrollPercent = (t602_windowScrollTop / (t602_docHeight - t602_winHeight)) * 100;
  $(".t602__indicator").css('width', t602_scrollPercent + '%')
}
function t604_init(recid) {
  t604_imageHeight(recid);
  t604_arrowWidth(recid);
  t604_show(recid);
  t604_hide(recid);
  $(window).bind('resize', t_throttle(function () {
    t604_arrowWidth(recid)
  }, 200))
}
function t604_show(recid) {
  var el = $("#rec" + recid), play = el.find('.t604__play');
  play.click(function () {
    if ($(this).attr('data-slider-video-type') == 'youtube') {
      var url = $(this).attr('data-slider-video-url');
      $(this).next().html("<iframe class=\"t604__iframe\" width=\"100%\" height=\"100%\" src=\"https://www.youtube.com/embed/" + url + "?autoplay=1\" frameborder=\"0\" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>")
    }
    if ($(this).attr('data-slider-video-type') == 'vimeo') {
      var url = $(this).attr('data-slider-video-url');
      $(this).next().html("<iframe class=\"t604__iframe\" width=\"100%\" height=\"100%\" src=\"https://player.vimeo.com/video/" + url + "?autoplay=1\" frameborder=\"0\" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>")
    }
    $(this).next().css('z-index', '3')
  })
}
function t604_hide(recid) {
  var el = $("#rec" + recid), body = el.find('.t604__frame');
  el.on('updateSlider', function () {
    body.html('').css('z-index', '')
  })
}
function t604_imageHeight(recid) {
  var el = $("#rec" + recid);
  var image = el.find(".t604__separator");
  image.each(function () {
    var width = $(this).attr("data-slider-image-width");
    var height = $(this).attr("data-slider-image-height");
    var ratio = height / width;
    var padding = ratio * 100;
    $(this).css("padding-bottom", padding + "%")
  })
}
function t604_arrowWidth(recid) {
  var el = $("#rec" + recid), arrow = el.find('.t-slds__arrow_wrapper'), slideWidth = el.find('.t-slds__wrapper').width(), windowWidth = $(window).width(), arrowWidth = windowWidth - slideWidth;
  if (windowWidth > 960) {
    arrow.css('width', arrowWidth / 2)
  } else {
    arrow.css('width', '')
  }
}
function t635_init(recid) {
  t635_startType(recid)
}
function t635_startType(recid) {
  var t635_el = $('#rec' + recid), t635_data = t635_el.find(".t635__textholder"), t635_animRecId = t635_data.attr("data-recid"), t635_animText = t635_findAnimElem(t635_animRecId), t635_phrasesList = [], t635_phrase1 = t635_data.attr("data-text1"), t635_phrase2 = t635_data.attr("data-text2"), t635_phrase3 = t635_data.attr("data-text3"), t635_phrase4 = t635_data.attr("data-text4"), t635_phrase5 = t635_data.attr("data-text5"), t635_speed = t635_data.attr("data-speed"), t635_loop = t635_data.attr("data-loop"), t635_backspaceDelay = t635_data.attr("data-backspacing-delay");
  if (typeof t635_animText == "undefined") {
    return
  }
  if (typeof t635_phrase1 != "undefined") {
    t635_phrasesList.push(t635_phrase1.slice(0, 80))
  }
  if (typeof t635_phrase2 != "undefined") {
    t635_phrasesList.push(t635_phrase2.slice(0, 80))
  }
  if (typeof t635_phrase3 != "undefined") {
    t635_phrasesList.push(t635_phrase3.slice(0, 80))
  }
  if (typeof t635_phrase4 != "undefined") {
    t635_phrasesList.push(t635_phrase4.slice(0, 80))
  }
  if (typeof t635_phrase5 != "undefined") {
    t635_phrasesList.push(t635_phrase5.slice(0, 80))
  }
  if (t635_animText.length != 0 && t635_phrasesList.length != 0) {
    var t635_animTextHtml = t635_animText.html(), t635_animTextSplitted = t635_animTextHtml.split("|"), t635_curWin = $(window);
    t635_animText.html(t635_animTextSplitted[0] + "<span class=\"t635__typing-text\"></span>" + t635_animTextSplitted[1]);
    t635_updateAnimTextLimits(t635_animRecId);
    t635_curWin.bind('resize', t_throttle(function () {
      t635_updateAnimTextLimits(t635_animRecId)
    }, 200));
    setInterval(function () {
      t635_updateAnimTextLimits(t635_animRecId)
    }, 5000);
    var t635_animatedText = $("#rec" + t635_animRecId + " .t635__typing-text"), t635_animTextTop = t635_animatedText.attr("data-top-limit"), t635_animTextBottom = t635_animatedText.attr("data-bottom-limit"), t635_winTop = t635_curWin.scrollTop(), t635_winBottom = t635_winTop + t635_curWin.height();
    t635_animateText(t635_animRecId, t635_phrasesList, t635_speed, t635_loop, t635_backspaceDelay);
    if (t635_animTextBottom < t635_winTop || t635_animTextTop > t635_winBottom) {
      $("#rec" + t635_animRecId + " .t635__typing-text").data('typed').pauseTyping();
      $("#rec" + t635_animRecId + " .t635__typing-text").html("")
    }
    t635_curWin.bind('scroll', t_throttle(function () {
      t635_animTextTop = t635_animatedText.attr("data-top-limit");
      t635_animTextBottom = t635_animatedText.attr("data-bottom-limit");
      t635_winTop = t635_curWin.scrollTop();
      t635_winBottom = t635_winTop + t635_curWin.height();
      if (t635_animTextBottom < t635_winTop || t635_animTextTop > t635_winBottom) {
        $("#rec" + t635_animRecId + " .t635__typing-text").data('typed').pauseTyping();
        $("#rec" + t635_animRecId + " .t635__typing-text").html("")
      } else {
        $("#rec" + t635_animRecId + " .t635__typing-text").data('typed').continueTyping()
      }
    }, 200))
  }
}
function t635_findAnimElem(animRecId) {
  var animRec = $("#rec" + animRecId);
  var animH1 = animRec.find("h1:contains(\'|\')").last();
  var animH2 = animRec.find("h2:contains(\'|\')").last();
  var animH3 = animRec.find("h3:contains(\'|\')").last();
  var animDiv = animRec.find("div:contains(\'|\')").last();
  if (typeof animH1 != "undefined" && animH1.length > 0) {
    return animH1
  }
  if (typeof animH2 != "undefined" && animH2.length > 0) {
    return animH2
  }
  if (typeof animH3 != "undefined" && animH3.length > 0) {
    return animH3
  }
  if (typeof animDiv != "undefined" && animDiv.length > 0) {
    return animDiv
  }
}
function t635_updateAnimTextLimits(t635_animRecId) {
  var t635_animatedBlock = $("#rec" + t635_animRecId), t635_animatedText = t635_animatedBlock.find(".t635__typing-text");
  t635_animatedText.attr("data-top-limit", t635_animatedText.offset().top);
  t635_animatedText.attr("data-bottom-limit", (t635_animatedBlock.offset().top + t635_animatedBlock.height()))
}
function t635_animateText(t635_animRecId, t635_phrasesList, t635_speed, t635_loop, t635_backspaceDelay) {
  if (typeof t635_speed == "undefined") {
    t635_speed = 40
  }
  if (typeof t635_backspaceDelay == "undefined") {
    t635_backspaceDelay = 800
  }
  if (typeof t635_loop == "undefined") {
    t635_loop = !0
  } else {
    t635_loop = !1
  }
  $("#rec" + t635_animRecId + " .t635__typing-text").typed({
    strings: t635_phrasesList,
    typeSpeed: t635_speed * 1,
    startDelay: 600,
    backSpeed: 10,
    backDelay: t635_backspaceDelay * 1,
    loop: t635_loop,
    contentType: 'text'
  })
}
function t654_showPanel(recid) {
  var t654_el = $('#rec' + recid), t654_block = t654_el.find('.t654'), t654_closeBtn = t654_el.find('.t654__icon-close'), t654_storageItem = t654_block.attr('data-storage-item'), t654_lastOpen = localStorage.getItem(t654_storageItem), t654_delta = t654_block.attr('data-storage-delta') * 86400, t654_today = Math.floor(Date.now() / 1000), t654_curDelta = t654_today - t654_lastOpen;
  if (t654_lastOpen == null || t654_curDelta >= t654_delta) {
    t654_block.removeClass('t654_closed')
  }
  t654_closeBtn.click(function (e) {
    t654_block.addClass('t654_closed');
    if (t654_delta) {
      localStorage.setItem(t654_storageItem, Math.floor(Date.now() / 1000))
    }
    e.preventDefault()
  })
}
function t654_setBg(recid) {
  var window_width = $(window).width();
  if (window_width > 980) {
    $(".t654").each(function () {
      var el = $(this);
      if (el.attr('data-bgcolor-setbyscript') == "yes") {
        var bgcolor = el.attr("data-bgcolor-rgba");
        el.css("background-color", bgcolor)
      }
    })
  } else {
    $(".t654").each(function () {
      var el = $(this);
      var bgcolor = el.attr("data-bgcolor-hex");
      el.css("background-color", bgcolor);
      el.attr("data-bgcolor-setbyscript", "yes")
    })
  }
}
function t654_appearMenu(recid) {
  var window_width = $(window).width();
  if (window_width > 980) {
    $(".t654").each(function () {
      var el = $(this);
      var appearoffset = el.attr("data-appearoffset");
      if (appearoffset != "") {
        if (appearoffset.indexOf('vh') > -1) {
          appearoffset = Math.floor((window.innerHeight * (parseInt(appearoffset) / 100)))
        }
        appearoffset = parseInt(appearoffset, 10);
        if ($(window).scrollTop() >= appearoffset) {
          if (el.css('visibility') == 'hidden') {
            el.finish();
            if (el.hasClass('t654_top')) {
              el.css("top", "-50px");
              el.css("visibility", "visible");
              el.animate({"opacity": "1", "top": "0px"}, 200, function () {
              })
            } else {
              el.css("bottom", "-50px");
              el.css("visibility", "visible");
              el.animate({"opacity": "1", "bottom": "0px"}, 200, function () {
              })
            }
          }
        } else {
          el.stop();
          el.css("visibility", "hidden")
        }
      }
    })
  }
}
function t654_changebgopacitymenu(recid) {
  var window_width = $(window).width();
  if (window_width > 980) {
    $(".t654").each(function () {
      var el = $(this);
      var bgcolor = el.attr("data-bgcolor-rgba");
      var bgcolor_afterscroll = el.attr("data-bgcolor-rgba-afterscroll");
      var bgopacityone = el.attr("data-bgopacity");
      var bgopacitytwo = el.attr("data-bgopacity-two");
      var menushadow = el.attr("data-menushadow");
      if (menushadow == '100') {
        var menushadowvalue = menushadow
      } else {
        var menushadowvalue = '0.' + menushadow
      }
      if ($(window).scrollTop() > 20) {
        el.css("background-color", bgcolor_afterscroll);
        if (bgopacitytwo == '0' || menushadow == ' ') {
          el.css("box-shadow", "none")
        } else {
          el.css("box-shadow", "0px 1px 3px rgba(0,0,0," + menushadowvalue + ")")
        }
      } else {
        el.css("background-color", bgcolor);
        if (bgopacityone == '0.0' || menushadow == ' ') {
          el.css("box-shadow", "none")
        } else {
          el.css("box-shadow", "0px 1px 3px rgba(0,0,0," + menushadowvalue + ")")
        }
      }
    })
  }
}
function t686_init(recid) {
  setTimeout(function () {
    t686_setHeight(recid)
  }, 500);
  var t686__doResize;
  $(window).resize(function () {
    clearTimeout(t686__doResize);
    t686__doResize = setTimeout(function () {
      t686_setHeight(recid)
    }, 200)
  })
}
function t686_setHeight(recid) {
  var t686_el = $('#rec' + recid + ' .t686'), t686_ratio = t686_el.attr('data-tile-ratio'), t686_ratioHeight = t686_el.find('.t686__col').width() * t686_ratio;
  t686_el.find('.t686__row').each(function () {
    var t686_largestHeight = 0, t686_currow = $(this);
    $('.t686__table', this).each(function () {
      var t686_curCol = $(this), t686_curColHeight = t686_curCol.find(".t686__textwrapper").outerHeight();
      if ($(this).find(".t686__cell").hasClass("t686__button-bottom")) {
        t686_curColHeight += t686_curCol.find(".t686__button-container").outerHeight()
      }
      if (t686_curColHeight > t686_largestHeight) {
        t686_largestHeight = t686_curColHeight
      }
    });
    if ($(window).width() >= 960) {
      if (t686_largestHeight > t686_ratioHeight) {
        $('.t686__table', this).css('height', t686_largestHeight)
      }
      else {
        $('.t686__table', this).css('height', t686_ratioHeight)
      }
      $('.t686__table', this).css('min-height', 'auto')
    } else {
      $('.t686__table', this).css('min-height', t686_ratioHeight);
      $('.t686__table', this).css('height', '')
    }
    if (t686_GetIEVersion() > 0) {
      var curRowHeight = $('.t686__table', this).css('height');
      $('.t686__bg', this).css('height', curRowHeight);
      $('.t686__overlay', this).css('height', curRowHeight)
    }
  })
}
function t686_GetIEVersion() {
  var sAgent = window.navigator.userAgent;
  var Idx = sAgent.indexOf("MSIE");
  if (Idx > 0) {
    return parseInt(sAgent.substring(Idx + 5, sAgent.indexOf(".", Idx)))
  } else {
    if (!!navigator.userAgent.match(/Trident\/7\./)) {
      return 11
    } else {
      return 0
    }
  }
}
function t690_onSuccess(t690_form) {
  var t690_inputsWrapper = t690_form.find('.t-form__inputsbox');
  var t690_inputsHeight = t690_inputsWrapper.height();
  var t690_inputsOffset = t690_inputsWrapper.offset().top;
  var t690_inputsBottom = t690_inputsHeight + t690_inputsOffset;
  var t690_targetOffset = t690_form.find('.t-form__successbox').offset().top;
  if ($(window).width() > 960) {
    var t690_target = t690_targetOffset - 200
  } else {
    var t690_target = t690_targetOffset - 100
  }
  if (t690_targetOffset > $(window).scrollTop() || ($(document).height() - t690_inputsBottom) < ($(window).height() - 100)) {
    t690_inputsWrapper.addClass('t690__inputsbox_hidden');
    setTimeout(function () {
      if ($(window).height() > $('.t-body').height()) {
        $('.t-tildalabel').animate({opacity: 0}, 50)
      }
    }, 300)
  } else {
    $('html, body').animate({scrollTop: t690_target}, 400);
    setTimeout(function () {
      t690_inputsWrapper.addClass('t690__inputsbox_hidden')
    }, 400)
  }
  var successurl = t690_form.data('success-url');
  if (successurl && successurl.length > 0) {
    setTimeout(function () {
      window.location.href = successurl
    }, 500)
  }
}
function t694_init(recid) {
  t694_setHeight(recid);
  var t694__doResize;
  $(window).resize(function () {
    clearTimeout(t694__doResize);
    t694__doResize = setTimeout(function () {
      t694_setHeight(recid)
    }, 200)
  })
}
function t694_setHeight(recid) {
  var t694_el = $('#rec' + recid + ' .t694'), t694_ratio = t694_el.attr('data-tile-ratio'), t694_ratioHeight = t694_el.find('.t694__col').width() * t694_ratio;
  if ($(window).width() >= 768) {
    t694_el.find('.t694__row').each(function () {
      var t694_largestHeight = 0, t694_currow = $(this);
      $('.t694__table', this).each(function () {
        var t694_curCol = $(this), t694_curColHeight = t694_curCol.find(".t694__textwrapper").outerHeight();
        if ($(this).find(".t694__cell").hasClass("t694__button-bottom")) {
          t694_curColHeight += t694_curCol.find(".t694__button-container").outerHeight()
        }
        if (t694_curColHeight > t694_largestHeight) {
          t694_largestHeight = t694_curColHeight
        }
      });
      if (t694_largestHeight > t694_ratioHeight) {
        $('.t694__table', this).css('height', t694_largestHeight)
      } else {
        if ($('.t694__table', this).css('height') != '') {
          $('.t694__table', this).css('height', '')
        }
      }
    })
  } else {
    t694_el.find('.t694__table').css('height', '')
  }
}
function t702_onSuccess(t702_form) {
  var t702_inputsWrapper = t702_form.find('.t-form__inputsbox');
  var t702_inputsHeight = t702_inputsWrapper.height();
  var t702_inputsOffset = t702_inputsWrapper.offset().top;
  var t702_inputsBottom = t702_inputsHeight + t702_inputsOffset;
  var t702_targetOffset = t702_form.find('.t-form__successbox').offset().top;
  if ($(window).width() > 960) {
    var t702_target = t702_targetOffset - 200
  } else {
    var t702_target = t702_targetOffset - 100
  }
  if (t702_targetOffset > $(window).scrollTop() || ($(document).height() - t702_inputsBottom) < ($(window).height() - 100)) {
    t702_inputsWrapper.addClass('t702__inputsbox_hidden');
    setTimeout(function () {
      if ($(window).height() > $('.t-body').height()) {
        $('.t-tildalabel').animate({opacity: 0}, 50)
      }
    }, 300)
  } else {
    $('html, body').animate({scrollTop: t702_target}, 400);
    setTimeout(function () {
      t702_inputsWrapper.addClass('t702__inputsbox_hidden')
    }, 400)
  }
  var successurl = t702_form.data('success-url');
  if (successurl && successurl.length > 0) {
    setTimeout(function () {
      window.location.href = successurl
    }, 500)
  }
}
function t702_lockScroll() {
  var body = $("body");
  if (!body.hasClass('t-body_scroll-locked')) {
    var bodyScrollTop = (typeof window.pageYOffset !== 'undefined') ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop;
    body.addClass('t-body_scroll-locked');
    body.css("top", "-" + bodyScrollTop + "px");
    body.attr("data-popup-scrolltop", bodyScrollTop)
  }
}
function t702_unlockScroll() {
  var body = $("body");
  if (body.hasClass('t-body_scroll-locked')) {
    var bodyScrollTop = $("body").attr("data-popup-scrolltop");
    body.removeClass('t-body_scroll-locked');
    body.css("top", "");
    body.removeAttr("data-popup-scrolltop")
    window.scrollTo(0, bodyScrollTop)
  }
}
function t702_showPopup(recid) {
  var el = $('#rec' + recid), popup = el.find('.t-popup');
  popup.css('display', 'block');
  el.find('.t-range').trigger('popupOpened');
  if (window.lazy == 'y') {
    t_lazyload_update()
  }
  setTimeout(function () {
    popup.find('.t-popup__container').addClass('t-popup__container-animated');
    popup.addClass('t-popup_show')
  }, 50);
  $('body').addClass('t-body_popupshowed t702__body_popupshowed');
  if (/iPhone|iPad|iPod/i.test(navigator.userAgent) && !window.MSStream) {
    setTimeout(function () {
      t702_lockScroll()
    }, 500)
  }
  el.find('.t-popup').click(function (e) {
    if (e.target == this) {
      t702_closePopup()
    }
  });
  el.find('.t-popup__close').click(function (e) {
    t702_closePopup()
  });
  el.find('a[href*="#"]').click(function (e) {
    var url = $(this).attr('href');
    if (!url || url.substring(0, 7) != '#price:') {
      t702_closePopup();
      if (!url || url.substring(0, 7) == '#popup:') {
        setTimeout(function () {
          $('body').addClass('t-body_popupshowed')
        }, 300)
      }
    }
  });
  $(document).keydown(function (e) {
    if (e.keyCode == 27) {
      t702_closePopup()
    }
  })
}
function t702_closePopup() {
  $('body').removeClass('t-body_popupshowed t702__body_popupshowed');
  if (/iPhone|iPad|iPod/i.test(navigator.userAgent) && !window.MSStream) {
    t702_unlockScroll()
  }
  $('.t-popup').removeClass('t-popup_show');
  setTimeout(function () {
    $('.t-popup').not('.t-popup_show').css('display', 'none')
  }, 300)
}
function t702_resizePopup(recid) {
  var el = $("#rec" + recid), div = el.find(".t-popup__container").height(), win = $(window).height() - 120, popup = el.find(".t-popup__container");
  if (div > win) {
    popup.addClass('t-popup__container-static')
  } else {
    popup.removeClass('t-popup__container-static')
  }
}
function t702_sendPopupEventToStatistics(popupname) {
  var virtPage = '/tilda/popup/';
  var virtTitle = 'Popup: ';
  if (popupname.substring(0, 7) == '#popup:') {
    popupname = popupname.substring(7)
  }
  virtPage += popupname;
  virtTitle += popupname;
  if (window.Tilda && typeof Tilda.sendEventToStatistics == 'function') {
    Tilda.sendEventToStatistics(virtPage, virtTitle, '', 0)
  } else {
    if (ga) {
      if (window.mainTracker != 'tilda') {
        ga('send', {'hitType': 'pageview', 'page': virtPage, 'title': virtTitle})
      }
    }
    if (window.mainMetrika > '' && window[window.mainMetrika]) {
      window[window.mainMetrika].hit(virtPage, {title: virtTitle, referer: window.location.href})
    }
  }
}
function t702_initPopup(recid) {
  $('#rec' + recid).attr('data-animationappear', 'off');
  $('#rec' + recid).css('opacity', '1');
  var el = $('#rec' + recid).find('.t-popup'), hook = el.attr('data-tooltip-hook'), analitics = el.attr('data-track-popup');
  if (hook !== '') {
    var obj = $('a[href="' + hook + '"]');
    obj.click(function (e) {
      t702_showPopup(recid);
      t702_resizePopup(recid);
      e.preventDefault();
      if (window.lazy == 'y') {
        t_lazyload_update()
      }
      if (analitics > '') {
        var virtTitle = hook;
        if (virtTitle.substring(0, 7) == '#popup:') {
          virtTitle = virtTitle.substring(7)
        }
        Tilda.sendEventToStatistics(analitics, virtTitle)
      }
    })
  }
}
function t716_onSuccess(t716_form) {
  var t716_inputsWrapper = t716_form.find('.t-form__inputsbox');
  var t716_inputsHeight = t716_inputsWrapper.height();
  var t716_inputsOffset = t716_inputsWrapper.offset().top;
  var t716_inputsBottom = t716_inputsHeight + t716_inputsOffset;
  var t716_targetOffset = t716_form.find('.t-form__successbox').offset().top;
  if ($(window).width() > 960) {
    var t716_target = t716_targetOffset - 200
  } else {
    var t716_target = t716_targetOffset - 100
  }
  if (t716_targetOffset > $(window).scrollTop() || ($(document).height() - t716_inputsBottom) < ($(window).height() - 100)) {
    t716_inputsWrapper.addClass('t716__inputsbox_hidden');
    setTimeout(function () {
      if ($(window).height() > $('.t-body').height()) {
        $('.t-tildalabel').animate({opacity: 0}, 50)
      }
    }, 300)
  } else {
    $('html, body').animate({scrollTop: t716_target}, 400);
    setTimeout(function () {
      t716_inputsWrapper.addClass('t716__inputsbox_hidden')
    }, 400)
  }
  var successurl = t716_form.data('success-url');
  if (successurl && successurl.length > 0) {
    setTimeout(function () {
      window.location.href = successurl
    }, 500)
  }
}
function t716_fixcontentheight(id) {
  var el = $("#rec" + id);
  var hcover = el.find(".t-cover").height();
  var hcontent = el.find("div[data-hook-content]").outerHeight();
  if (hcontent > 300 && hcover < hcontent) {
    var hcontent = hcontent + 120;
    if (hcontent > 1000) {
      hcontent += 100
    }
    console.log('auto correct cover height: ' + hcontent);
    el.find(".t-cover").height(hcontent);
    el.find(".t-cover__filter").height(hcontent);
    el.find(".t-cover__carrier").height(hcontent);
    el.find(".t-cover__wrapper").height(hcontent);
    if ($isMobile == !1) {
      setTimeout(function () {
        var divvideo = el.find(".t-cover__carrier");
        if (divvideo.find('iframe').length > 0) {
          console.log('correct video from cover_fixcontentheight');
          setWidthHeightYoutubeVideo(divvideo, hcontent + 'px')
        }
      }, 2000)
    }
  }
}
function t778__init(recid) {
  t778_unifyHeights(recid);
  $(window).load(function () {
    t778_unifyHeights(recid)
  });
  $(window).bind('resize', t_throttle(function () {
    t778_unifyHeights(recid)
  }, 200));
  $(".t778").bind("displayChanged", function () {
    t778_unifyHeights(recid)
  });
  setTimeout(function () {
    t_prod__init(recid);
    t778_initPopup(recid);
    t778__updateLazyLoad(recid)
  }, 500)
}
function t778__updateLazyLoad(recid) {
  var scrollContainer = $("#rec" + recid + " .t778__container_mobile-flex");
  var curMode = $(".t-records").attr("data-tilda-mode");
  if (scrollContainer.length && curMode != "edit" && curMode != "preview") {
    scrollContainer.bind('scroll', t_throttle(function () {
      t_lazyload_update()
    }, 500))
  }
}
function t778_unifyHeights(recid) {
  var t778_el = $('#rec' + recid), t778_blocksPerRow = t778_el.find(".t778__container").attr("data-blocks-per-row"), t778_cols = t778_el.find(".t778__content"), t778_mobScroll = t778_el.find(".t778__scroll-icon-wrapper").length;
  if ($(window).width() <= 480 && t778_mobScroll == 0) {
    t778_cols.css("height", "auto");
    return
  }
  var t778_perRow = +t778_blocksPerRow;
  if ($(window).width() <= 960 && t778_mobScroll > 0) {
    var t778_perRow = t778_cols.length
  }
  else {
    if ($(window).width() <= 960) {
      var t778_perRow = 2
    }
  }
  for (var i = 0; i < t778_cols.length; i += t778_perRow) {
    var t778_maxHeight = 0, t778_row = t778_cols.slice(i, i + t778_perRow);
    t778_row.each(function () {
      var t778_curText = $(this).find(".t778__textwrapper"), t778_curBtns = $(this).find(".t778__btn-wrapper_absolute"), t778_itemHeight = t778_curText.outerHeight() + t778_curBtns.outerHeight();
      if (t778_itemHeight > t778_maxHeight) {
        t778_maxHeight = t778_itemHeight
      }
    });
    t778_row.css("height", t778_maxHeight)
  }
}
function t778_initPopup(recid) {
  var rec = $('#rec' + recid);
  rec.find('[href^="#prodpopup"]').one("click", function (e) {
    e.preventDefault();
    var el_popup = rec.find('.t-popup');
    var el_prod = $(this).closest('.js-product');
    var lid_prod = el_prod.attr('data-product-lid');
    t_sldsInit(recid + ' #t778__product-' + lid_prod + '')
  });
  rec.find('[href^="#prodpopup"]').click(function (e) {
    e.preventDefault();
    t778_showPopup(recid);
    var el_popup = rec.find('.t-popup');
    var el_prod = $(this).closest('.js-product');
    var lid_prod = el_prod.attr('data-product-lid');
    el_popup.find('.js-product').css('display', 'none');
    var el_fullprod = el_popup.find('.js-product[data-product-lid="' + lid_prod + '"]')
    el_fullprod.css('display', 'block');
    var analitics = el_popup.attr('data-track-popup');
    if (analitics > '') {
      var virtTitle = el_fullprod.find('.js-product-name').text();
      if (!virtTitle) {
        virtTitle = 'prod' + lid_prod
      }
      Tilda.sendEventToStatistics(analitics, virtTitle)
    }
    var curUrl = window.location.href;
    if (curUrl.indexOf('#!/tproduct/') < 0 && curUrl.indexOf('%23!/tproduct/') < 0) {
      if (typeof history.replaceState != 'undefined') {
        window.history.replaceState('', '', window.location.href + '#!/tproduct/' + recid + '-' + lid_prod)
      }
    }
    t778_updateSlider(recid + ' #t778__product-' + lid_prod + '');
    if (window.lazy == 'y') {
      t_lazyload_update()
    }
  });
  if ($('#record' + recid).length == 0) {
    t778_checkUrl(recid)
  }
  t778_copyTypography(recid)
}
function t778_checkUrl(recid) {
  var curUrl = window.location.href;
  var tprodIndex = curUrl.indexOf('#!/tproduct/');
  if (/iPhone|iPad|iPod/i.test(navigator.userAgent) && tprodIndex < 0) {
    tprodIndex = curUrl.indexOf('%23!/tproduct/')
  }
  if (tprodIndex >= 0) {
    var curUrl = curUrl.substring(tprodIndex, curUrl.length);
    var curProdLid = curUrl.substring(curUrl.indexOf('-') + 1, curUrl.length);
    var rec = $('#rec' + recid);
    if (curUrl.indexOf(recid) >= 0 && rec.find('[data-product-lid=' + curProdLid + ']').length) {
      rec.find('[data-product-lid=' + curProdLid + '] [href^="#prodpopup"]').triggerHandler('click')
    }
  }
}
function t778_updateSlider(recid) {
  var el = $('#rec' + recid);
  t_slds_SliderWidth(recid);
  var sliderWrapper = el.find('.t-slds__items-wrapper');
  var sliderWidth = el.find('.t-slds__container').width();
  var pos = parseFloat(sliderWrapper.attr('data-slider-pos'));
  sliderWrapper.css({transform: 'translate3d(-' + (sliderWidth * pos) + 'px, 0, 0)'});
  t_slds_UpdateSliderHeight(recid);
  t_slds_UpdateSliderArrowsHeight(recid)
}
function t778_showPopup(recid) {
  var el = $('#rec' + recid);
  var popup = el.find('.t-popup');
  popup.css('display', 'block');
  setTimeout(function () {
    popup.find('.t-popup__container').addClass('t-popup__container-animated');
    popup.addClass('t-popup_show');
    if (window.lazy == 'y') {
      t_lazyload_update()
    }
  }, 50);
  $('body').addClass('t-body_popupshowed');
  el.find('.t-popup').click(function (e) {
    if (e.target == this) {
      t778_closePopup()
    }
  });
  el.find('.t-popup__close, .t778__close-text').click(function (e) {
    t778_closePopup()
  });
  $(document).keydown(function (e) {
    if (e.keyCode == 27) {
      t778_closePopup()
    }
  })
}
function t778_closePopup() {
  $('body').removeClass('t-body_popupshowed');
  $('.t-popup').removeClass('t-popup_show');
  var curUrl = window.location.href;
  var indexToRemove = curUrl.indexOf('#!/tproduct/');
  if (/iPhone|iPad|iPod/i.test(navigator.userAgent) && indexToRemove < 0) {
    indexToRemove = curUrl.indexOf('%23!/tproduct/')
  }
  curUrl = curUrl.substring(0, indexToRemove);
  setTimeout(function () {
    $(".t-popup").scrollTop(0);
    $('.t-popup').not('.t-popup_show').css('display', 'none');
    if (typeof history.replaceState != 'undefined') {
      window.history.replaceState('', '', curUrl)
    }
  }, 300)
}
function t778_removeSizeStyles(styleStr) {
  if (typeof styleStr != "undefined" && (styleStr.indexOf('font-size') >= 0 || styleStr.indexOf('padding-top') >= 0 || styleStr.indexOf('padding-bottom') >= 0)) {
    var styleStrSplitted = styleStr.split(';');
    styleStr = "";
    for (var i = 0; i < styleStrSplitted.length; i++) {
      if (styleStrSplitted[i].indexOf('font-size') >= 0 || styleStrSplitted[i].indexOf('padding-top') >= 0 || styleStrSplitted[i].indexOf('padding-bottom') >= 0) {
        styleStrSplitted.splice(i, 1);
        i--;
        continue
      }
      if (styleStrSplitted[i] == "") {
        continue
      }
      styleStr += styleStrSplitted[i] + ";"
    }
  }
  return styleStr
}
function t778_copyTypography(recid) {
  var rec = $('#rec' + recid);
  var titleStyle = rec.find('.t778__title').attr('style');
  var descrStyle = rec.find('.t778__descr').attr('style');
  rec.find('.t-popup .t778__title').attr("style", t778_removeSizeStyles(titleStyle));
  rec.find('.t-popup .t778__descr, .t-popup .t778__text').attr("style", t778_removeSizeStyles(descrStyle))
}
function t796_init(recid) {
  var el = $("#rec" + recid);
  var shapeEl = el.find(".t796__shape-border");
  var recs = el.find(".t796").attr("data-shape-rec-ids");
  if (typeof recs != "undefined") {
    recs = recs.split(",");
    recs.forEach(function (rec_id, i, arr) {
      var curRec = $("#rec" + rec_id);
      var curShapeEl = shapeEl.clone();
      t796_setColor(el, curShapeEl);
      t796_addDivider(curRec, curShapeEl)
    })
  } else {
    if (shapeEl.hasClass('t796__shape-border_top') || shapeEl.hasClass('t796__shape-border_top-flip')) {
      var curRec = el.next(".r");
      if (curRec.attr("data-record-type") == "215" || curRec.attr("data-record-type") == "706") {
        curRec = curRec.next(".r")
      }
    }
    if (shapeEl.hasClass('t796__shape-border_bottom') || shapeEl.hasClass('t796__shape-border_bottom-flip')) {
      var curRec = el.prev(".r");
      if (curRec.attr("data-record-type") == "215" || curRec.attr("data-record-type") == "706") {
        curRec = curRec.prev(".r")
      }
    }
    if (curRec.length != 0) {
      var curShapeEl = shapeEl.clone();
      t796_setColor(el, curShapeEl);
      t796_addDivider(curRec, curShapeEl)
    }
  }
}
function t796_addDivider(curRec, curShapeEl) {
  curRec.attr("data-animationappear", "off").removeClass('r_hidden');
  var coverWrapper = curRec.find(".t-cover");
  var zeroWrapper = curRec.find(".t396");
  if (coverWrapper.length > 0 || zeroWrapper.length > 0) {
    if (coverWrapper.length > 0) {
      coverWrapper.find(".t-cover__filter").after(curShapeEl)
    }
    if (zeroWrapper.length > 0) {
      zeroWrapper.after(curShapeEl);
      curRec.css("position", "relative")
    }
    curShapeEl.css("display", "block")
  } else {
    var wrapper = curRec;
    var curRecType = curRec.attr("data-record-type");
    if (wrapper.length == 0) {
      return !0
    }
    wrapper.append(curShapeEl);
    wrapper.css("position", "relative");
    if (curRecType != "554" && curRecType != "125") {
      wrapper.children("div").first().css({
        "position": "relative",
        "z-index": "1"
      }).addClass("t796_cont-near-shape-divider")
    }
    if (curRecType == "734" || curRecType == "675" || curRecType == "279" || curRecType == "694") {
      curShapeEl.css("z-index", "1")
    }
    curShapeEl.css("display", "block")
  }
}
function t796_setColor(el, curShapeEl) {
  if (typeof curShapeEl.attr("data-fill-color") != "undefined") {
    return
  }
  if (curShapeEl.hasClass("t796__shape-border_bottom") || curShapeEl.hasClass("t796__shape-border_bottom-flip")) {
    var nearestBlock = el.next(".r")
  } else {
    var nearestBlock = el.prev(".r")
  }
  if (nearestBlock.length == 0) {
    return
  }
  var fillColor = nearestBlock.attr("data-bg-color");
  if (typeof fillColor == "undefined") {
    return
  }
  curShapeEl.find(".t796__svg").css("fill", fillColor)
}
function t804_init(recid) {
  var el = $("#rec" + recid);
  var geodata = [];
  var key = el.find('.t_804_geo-datablock').children('.t_804_geo-key').html();
  var def = el.find('.t_804_geo-datablock').children('.t_804_geo-default').html();
  data = el.find('.t_804_geo-datablock').children('.t_804_geo-data').children();
  $.each(data, function () {
    var valuesArr = $(this).children('.t_804_geo-geoip').html().split(';');
    var country = [];
    var region = [];
    var city = [];
    $.each(valuesArr, function (index, value) {
      if (value === '') {
        return !0
      }
      var strVal = value.split(',');
      if (strVal.length === 3) {
        city.push(strVal[2])
      }
      if (strVal.length === 2) {
        region.push(strVal[1])
      }
      if (strVal.length === 1) {
        country.push(strVal[0])
      }
    });
    var value = $(this).children('.t_804_geo-value').html()
    var geo = $.merge(country, region);
    geo = $.merge(geo, city);
    geodata.push({'value': value, 'geo': geo})
  });
  $.each($('[field]'), function () {
    fix = $(this).html().replace(/(?!%%)[A-zА-яё0-9_-]*(?=%%)/ig, '<span data-replace-key="$&"></span>');
    fix = fix.replace(/%{2}/igm, '');
    $(this).html(fix)
  });
  getGeo(key, geodata, def);
  function getGeo(key, geodata, def) {
    $.ajax({
      type: "GET",
      url: "https://geo.tildacdn.com/geo/full/",
      crossDomain: !0,
      dataType: "json",
      success: function (data) {
        replaceGeo(data, key, geodata, def)
      },
      error: function (data) {
        replaceGeo(data, key, geodata, def)
      },
      timeout: 1000 * 15
    })
  }

  function replaceGeo(data, key, geodata, def) {
    var city = data.city.name_en;
    var region = data.region.name_en;
    var country = data.country.iso;
    var val = def;
    $.each(geodata, function (index, value) {
      if ($.inArray(country, value.geo) != -1) {
        val = value.value
      }
      if ($.inArray(region, value.geo) != -1) {
        val = value.value
      }
      if ($.inArray(city, value.geo) != -1) {
        val = value.value
      }
    });
    $('[data-replace-key=' + key + ']').html(val)
  }
}
function t823_onSuccess(form) {
  var inputsWrapper = form.find('.t-form__inputsbox');
  var inputsHeight = inputsWrapper.height();
  var inputsOffset = inputsWrapper.offset().top;
  var inputsBottom = inputsHeight + inputsOffset;
  var targetOffset = form.find('.t-form__successbox').offset().top;
  if ($(window).width() > 960) {
    var target = targetOffset - 200
  } else {
    var target = targetOffset - 100
  }
  if (targetOffset > $(window).scrollTop() || ($(document).height() - inputsBottom) < ($(window).height() - 100)) {
    inputsWrapper.addClass('t823__inputsbox_hidden');
    setTimeout(function () {
      if ($(window).height() > $('.t-body').height()) {
        $('.t-tildalabel').animate({opacity: 0}, 50)
      }
    }, 300)
  } else {
    $('html, body').animate({scrollTop: target}, 400);
    setTimeout(function () {
      inputsWrapper.addClass('t823__inputsbox_hidden')
    }, 400)
  }
  var successurl = form.data('success-url');
  if (successurl && successurl.length > 0) {
    setTimeout(function () {
      window.location.href = successurl
    }, 500)
  }
}
function t857__init(recid) {
  $('.t857__container_mobile-flex').bind('touchstart', function () {
    $('.t857__col').bind('touchmove', function () {
      if (typeof $(".t-records").attr('data-tilda-mode') == 'undefined') {
        if (window.lazy == 'y') {
          t_lazyload_update()
        }
      }
    })
  }).mouseup(function () {
    $('.t857__col').unbind('touchend')
  })
}
