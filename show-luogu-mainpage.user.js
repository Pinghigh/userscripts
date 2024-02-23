// ==UserScript==
// @name        查看维护中的洛谷主页
// @namespace   Violentmonkey Scripts
// @match       https://www.luogu.com.cn/user/*
// @grant       none
// @version     1.1
// @author      Tibrella
// @description 2024/2/23 15:20:03
// @license     MPL 2.0
// @homepageURL https://github.com/pinghigh/userscripts
// @downloadURL https://raw.githubusercontent.com/Pinghigh/userscripts/main/show-luogu-mainpage.user.js
// ==/UserScript==

const displayMainPage = () => {
    var intro = document.getElementsByClassName('introduction')[0];
    intro.previousElementSibling.style.setProperty('display', 'none');
    intro.style.removeProperty('display');
}

document.addEventListener('readystatechange', (event) => {
    displayMainPage();
    document.getElementsByClassName('items')[0].getElementsByTagName('li')[0].addEventListener("click", function(){
        displayMainPage();
    });
})
