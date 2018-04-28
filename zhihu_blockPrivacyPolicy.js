// ==UserScript==
// @name     zhihu block privacy policy
// @version  1
// @grant    none
// @match  *://*.zhihu.com/*
// ==/UserScript==

var __retryTime = 1000;

function __retryFindAndDel(){
	setTimeout(function(){
        var model = document.querySelector('div.Modal-wrapper');
        if (model) {
            model.remove();
            document.querySelector('html').style = "";
            clearInterval(__timer)
        }
        __retryTime *= 2;
    		console.log(__retryTime);
    }, __retryTime)
}

var __timer=self.setInterval("__retryFindAndDel();",500)
