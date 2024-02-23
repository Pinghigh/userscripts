// ==UserScript==
// @name        NOI 报名网站自动填充验证码
// @namespace   Violentmonkey Scripts
// @match       https://cspsjtest.noi.cn/*
// @match       https://cspsj.noi.cn/*
// @grant       none
// @version     1.0
// @author      Tibrella
// @license     MPL 2.0
// @homepageURL https://github.com/pinghigh/userscripts
// @downloadURL https://raw.githubusercontent.com/Pinghigh/userscripts/main/auto-fill-cspsj-captcha.user.js
// ==/UserScript==

(function () {
    document.onreadystatechange = function () {
        if (document.readyState == 'complete') {
            document.getElementById('checkCode').value = document.getElementById('hiddenCheckCode').value;
        }
    }
})()