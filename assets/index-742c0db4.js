(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const c of t.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&r(c)}).observe(document,{childList:!0,subtree:!0});function l(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function r(e){if(e.ep)return;e.ep=!0;const t=l(e);fetch(e.href,t)}})();let s=document.querySelectorAll(".number"),i=3e3;s.forEach(n=>{let o=0,l=parseInt(n.getAttribute("data-val")),r=Math.floor(i/l),e=parseInt(n.getAttribute("data-proc")),t=setInterval(()=>{o+=1,e=="1"?n.textContent=o+"%":n.textContent=o+"+",o==l&&clearInterval(t)},r)});(()=>{const n=document.querySelector(".js-menu-container"),o=document.querySelector(".js-open-menu"),l=document.querySelector(".js-close-menu"),r=()=>{const e=o.getAttribute("aria-expanded")==="true"||!1;o.setAttribute("aria-expanded",!e),n.classList.toggle("is-open");const t=e?"enableBodyScroll":"disableBodyScroll";bodyScrollLock[t](document.body)};o.addEventListener("click",r),l.addEventListener("click",r),window.matchMedia("(min-width: 768px)").addEventListener("change",e=>{e.matches&&(n.classList.remove("is-open"),o.setAttribute("aria-expanded",!1),bodyScrollLock.enableBodyScroll(document.body))})})();document.querySelectorAll('a[href^="#"').forEach(n=>{n.addEventListener("click",function(o){o.preventDefault();let l=this.getAttribute("href").substring(1);const r=document.getElementById(l),e=document.querySelector(".scrollto").offsetHeight,c=r.getBoundingClientRect().top-e;window.scrollBy({top:c,behavior:"smooth"})})});
