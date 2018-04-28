// ==UserScript==
// @name     zhihu block
// @version  1
// @grant    none
// @match  *://*.zhihu.com/*
// ==/UserScript==

var __t = 0;
var __timer = setTimeout(function () {
var model = document.querySelector('div.Modal-wrapper');
if (model) {
model.remove()
document.querySelector('html').style = ""
}
}, 3000) 
