!function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";n(1),document.addEventListener("DOMContentLoaded",function(){var e=document.getElementById("form__button"),t=document.querySelector(".consumer"),n=document.querySelectorAll(".choseForm__control"),o=document.getElementById("choseText"),r=document.querySelector(".choseForm__button"),c=document.querySelector(".consumer__closeIcon");e.onclick=function(e){e.preventDefault(),t.classList.remove("consumer_invisible")};var u=function(){t.classList.add("consumer_invisible")};c.onclick=function(){u()},n.forEach(function(e){e.onclick=function(){n.forEach(function(e){e.classList.remove("choseForm__control_active")}),this.classList.add("choseForm__control_active"),o.innerText=document.querySelector(".choseForm__control_active input").value,r.classList.remove("button_disabled")}});var i=document.querySelectorAll(".consumer__container");r.onclick=function(e){e.preventDefault(),document.querySelector(".choseForm__control_active")&&i[0].classList.add("d-none")};var l=document.querySelector(".userForm__button");u(),l.onclick=function(e){e.preventDefault(),u()}})},function(e,t,n){}]);
//# sourceMappingURL=main.065a1a046f7ad2f0b358.js.map