// ==UserScript==
// @name     zhihu_blockPrivacyPolicy
// @version  1
// @grant    none
// ==/UserScript==

var __t = 0;
var __timer = setTimeout(function () {
var model = document.querySelector('body > div:nth-child(7)');
if (model) {
model.remove()
document.querySelector('html').style = ""
}
}, 3000) 
