import{e as s,c as n,f as a,a as c}from"./footer-88fddacb.js";const l=document.querySelector(".libr-list"),d=document.querySelector(".libr-catch");async function u(){const e=s();l.insertAdjacentHTML("beforeend",await n(e,9)),a(l),c(l),e.length>=1&&d.classList.add("display"),e.length>=6&&(i.style.display="block")}u();const i=document.querySelector(".loadmorebtn");let r=6;i.addEventListener("click",e=>{e.preventDefault(),console.log(15);const o=[...document.querySelectorAll(".libr-list li")];for(let t=r;t<r+6;t++)o[t]&&(o[t].style.display="block");r+=6});