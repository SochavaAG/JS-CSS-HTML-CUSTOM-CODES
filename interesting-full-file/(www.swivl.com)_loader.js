var fc_css = document.createElement("link");

fc_css.setAttribute("rel", "stylesheet");
fc_css.setAttribute("media", "screen");
fc_css.setAttribute("href", "https://cdn.foxycart.com/swivl/responsive_styles.1548788064.css");

var fc_script = document.createElement("script");

window.jQuery && (1 <= window.jQuery.fn.jquery.match(/(\d+)\.(\d+)/)[1] && 7 < window.jQuery.fn.jquery.match(/(\d+)\.(\d+)/)[2] || 2 <= window.jQuery.fn.jquery.match(/(\d+)\.(\d+)/)[1]) ? fc_script.src = "https://cdn.foxycart.com/swivl/foxycart.jsonp.sidecart.min.1548808583.js" : fc_script.src = "https://cdn.foxycart.com/swivl/foxycart.jsonp.sidecart.with-jquery.min.1548808583.js";

function fc_loader() {
  document.getElementsByTagName("body")[0].appendChild(fc_script);
  document.getElementsByTagName("body")[0].appendChild(fc_css);
}

document.readyState === "complete" ? fc_loader() : window.addEventListener ? window.addEventListener("load", fc_loader, !1) : window.attachEvent ? window.attachEvent("onload", fc_loader) : window.onload = fc_loader;
