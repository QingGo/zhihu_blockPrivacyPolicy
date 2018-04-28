// ==UserScript==
// @name     zhihu block privacy policy
// @version  1
// @grant    none
// @match  *://*.zhihu.com/*
// ==/UserScript==

var __retryTime = 1000;
var haveDeleted = false;

function __retryFindAndDel(){
    var __timer = setTimeout(function () {
        var model = document.querySelector('div.Modal-wrapper');
        if (model) {
        model.remove();
        document.querySelector('html').style = "";
        haveDeleted = true;
        }
    }, __retryTime)
    __retryTime *= 2;
}

if (!haveDeleted){
    __retryFindAndDel();
}
