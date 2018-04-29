// ==UserScript==
// @name     zhihu block privacy policy
// @version  1
// @grant    none
// @match  *://*.zhihu.com/*
// ==/UserScript==

var __retryTime = 100;

function __retryFindAndDel(){
    var model = document.querySelector('div.Modal-wrapper');
    if (model) {
        model.remove();
        document.querySelector('html').style = "";
    } else {
        setTimeout(__retryFindAndDel, __retryTime);
        console.log(__retryTime);
        __retryTime *= 2;
    }
}

__retryFindAndDel()
