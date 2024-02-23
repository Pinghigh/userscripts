// ==UserScript==
// @name        查看维护中的洛谷主页
// @namespace   Violentmonkey Scripts
// @match       https://www.luogu.com.cn/user/*
// @grant       none
// @version     1.0
// @author      Tibrella
// @description 2024/2/23 15:20:03
// @license     MPL 2.0
// @homepageURL https://github.com/pinghigh/userscripts
// @downloadURL https://raw.githubusercontent.com/Pinghigh/userscripts/main/show-luogu-mainpage.user.js
// ==/UserScript==
document.addEventListener('readystatechange', (event) => {
    var intro = document.getElementsByClassName('introduction')[0];
    intro.previousElementSibling.style.setProperty('display', 'none');
    intro.style.removeProperty('display');
})