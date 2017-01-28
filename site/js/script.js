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

	var researchHtml = "snp/research-article.html"
	var valuesHtml = "snp/values-article.html"
	var mwHtml = "snp/mw-article.html"
	var mediaHtml = "snp/media-article.html"

	var showLoading = function (selector, section) {
		var html = "<div class='loader'>";
		html += "<img src='img/ajax-loader-" + section + ".gif'></div>";
		insertHtml(selector, html);
	};

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

	bp.loadHome = function () {
		showLoading("#main-content", "home");
		$ajaxUtils.sendGetRequest(
			homeHtml,
			function (responseText) {
				document.querySelector("#main-content").innerHTML = responseText;
			},
			false
		);
		window.scrollTo(0,0);
	};

	bp.loadRegister = function () {
		showLoading("#main-content", "register");
		$ajaxUtils.sendGetRequest(
			registerHtml,
			function (responseText) {
				document.querySelector("#main-content").innerHTML = responseText;
			},
			false
		);
		// history.pushState({oldScrollPosition: ..., newState: "register"}, null, null);
		window.scrollTo(0,0);
	};

	bp.loadNews = function () {
		showLoading("#main-content", "news");
		$ajaxUtils.sendGetRequest(
			newsHtml,
			function (responseText) {
				document.querySelector("#main-content").innerHTML = responseText;
			},
			false
		);
		window.scrollTo(0,0);
	};

	bp.loadAbout = function () {
		showLoading("#main-content", "about");
		$ajaxUtils.sendGetRequest(
			aboutHtml,
			function (responseText) {
				document.querySelector("#main-content").innerHTML = responseText;
			},
			false
		);
		window.scrollTo(0,0);
	};

	bp.loadContact = function () {
		showLoading("#main-content", "contact");
		$ajaxUtils.sendGetRequest(
			contactHtml,
			function (responseText) {
				document.querySelector("#main-content").innerHTML = responseText;
			},
			false
		);
		window.scrollTo(0,0);
	};

	bp.loadPiece = function (articleNumber) {
		showLoading("#main-content", "news");
		var articleHtml;
		switch(articleNumber) {
			case 1:
				articleHtml = researchHtml;
				break;
			case 2:
				articleHtml = valuesHtml;
				break;
			case 3:
				articleHtml = mwHtml;
				break;
			case 4:
				articleHtml = mediaHtml;
			default:
				articleHtml = null;
		}
		$ajaxUtils.sendGetRequest(
			articleHtml,
			function (responseText) {
				document.querySelector("#main-content").innerHTML = responseText;
			},
			false
		);
		window.scrollTo(0,0);
	}

	global.$bp = bp;
})(window);