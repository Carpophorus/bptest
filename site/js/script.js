window.onunload = function() { window.scrollTo(0,0); }

$(function () {
  $("#navbarToggle").blur(function (event) {
    var screenWidth = window.innerWidth;
    if (screenWidth < 992) {
      $("#collapsable-nav").collapse('hide');
    }
  });

  $("#navbarToggle").click(function (event) {
    $(event.target).focus();
  });
});

(function (global) {
	var bp = {};

	var homeHtml = "snp/home-snippet.html";
	var registerHtml = "snp/register-snippet.html";
	var newsHtml = "snp/news-snippet.html";
	var aboutHtml = "snp/about-snippet.html";
	var contactHtml = "snp/contact-snippet.html";

	/*var showLoading = function (selector) {
	  var html = "<div class='text-center'>";
	  html += "<img src='images/ajax-loader.gif'></div>";
	  insertHtml(selector, html);
	};*/

	var insertHtml = function (selector, html) {
	  var targetElem = document.querySelector(selector);
	  targetElem.innerHTML = html;
	};

	document.addEventListener("DOMContentLoaded", function (event) {
		$ajaxUtils.sendGetRequest(
			homeHtml,
			function (responseText) {
				document.querySelector("#main-content").innerHTML = responseText;
			},
			false
		);
	});

	bp.loadRegister = function () {
		//showLoading("#main-content");
		$ajaxUtils.sendGetRequest(
			registerHtml,
			function (responseText) {
				document.querySelector("#main-content").innerHTML = responseText;
			},
			false
		);
	};

	bp.loadNews = function () {
		//showLoading("#main-content");
		$ajaxUtils.sendGetRequest(
			newsHtml,
			function (responseText) {
				document.querySelector("#main-content").innerHTML = responseText;
			},
			false
		);
	};

	bp.loadAbout = function () {
		//showLoading("#main-content");
		$ajaxUtils.sendGetRequest(
			aboutHtml,
			function (responseText) {
				document.querySelector("#main-content").innerHTML = responseText;
			},
			false
		);
	};

	bp.loadContact = function () {
		//showLoading("#main-content");
		$ajaxUtils.sendGetRequest(
			contactHtml,
			function (responseText) {
				document.querySelector("#main-content").innerHTML = responseText;
			},
			false
		);
	};

	global.$bp = bp;
})(window);