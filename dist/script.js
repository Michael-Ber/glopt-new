(()=>{"use strict";window.addEventListener("DOMContentLoaded",(function(){!function(e,t,s,n,i,l,r){var c=arguments.length>7&&void 0!==arguments[7]?arguments[7]:"10px",o=document.querySelector(e),d=document.querySelector(t),u=document.querySelector(s),a=document.querySelector(r),v=document.querySelector("body");o.addEventListener("click",(function(){this.classList.contains(n)?(this.classList.remove(n),d.classList.remove(i),null==u||u.classList.remove(l),v.style.overflow="unset",v.style.paddingRight="unset"):(this.classList.add(n),d.classList.add(i),null==u||u.classList.add(l),v.style.overflow="hidden",v.style.paddingRight="".concat(c,"px"))})),a.addEventListener("click",(function(){o.classList.remove(n),d.classList.remove(i),null==u||u.classList.remove(l),v.style.overflow="unset",v.style.paddingRight="unset"}))}(".burger-btn",".burger-menu",null,"burger-btn_active","burger-menu_active",null,".burger-close"),function(){try{new Swiper(".comments-swiper",{centeredSlides:!0,initialSlide:1,slideClass:"comments-swiper-slide",navigation:{nextEl:".next",prevEl:".prev"},breakpoints:{320:{slidesPerView:1},992:{slidesPerView:3},1200:{slidesPerView:3}}})}catch(e){console.log(e)}}()}))})();