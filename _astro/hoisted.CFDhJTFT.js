const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["_astro/ui-core.DPg9fpfo.js","_astro/hoisted.Ml6QHBxB.js","_astro/_commonjsHelpers.BosuxZz1.js","_astro/hoisted.CrURxFpJ.css"])))=>i.map(i=>d[i]);
import"./hoisted.Ml6QHBxB.js";import"./_commonjsHelpers.BosuxZz1.js";const p="modulepreload",h=function(u){return"/"+u},m={},E=function(d,s,i){let l=Promise.resolve();if(s&&s.length>0){document.getElementsByTagName("link");const o=document.querySelector("meta[property=csp-nonce]"),n=o?.nonce||o?.getAttribute("nonce");l=Promise.allSettled(s.map(t=>{if(t=h(t),t in m)return;m[t]=!0;const e=t.endsWith(".css"),a=e?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${t}"]${a}`))return;const r=document.createElement("link");if(r.rel=e?"stylesheet":p,e||(r.as="script"),r.crossOrigin="",r.href=t,n&&r.setAttribute("nonce",n),document.head.appendChild(r),e)return new Promise((w,f)=>{r.addEventListener("load",w),r.addEventListener("error",()=>f(new Error(`Unable to preload CSS for ${t}`)))})}))}function c(o){const n=new Event("vite:preloadError",{cancelable:!0});if(n.payload=o,window.dispatchEvent(n),!n.defaultPrevented)throw o}return l.then(o=>{for(const n of o||[])n.status==="rejected"&&c(n.reason);return d().catch(c)})};class v extends HTMLElement{constructor(){super();const d=this.querySelector("button[data-open-modal]"),s=this.querySelector("button[data-close-modal]"),i=this.querySelector("dialog"),l=this.querySelector(".dialog-frame"),c=e=>{document.body.contains(e.target)&&!l.contains(e.target)&&t()},o=e=>{if(e.key==="Escape"&&i.open)t(),window.removeEventListener("keydown",o);else return},n=e=>{i.showModal(),document.body.classList.add("overflow-hidden"),this.querySelector("input")?.focus(),e?.stopPropagation(),window.addEventListener("click",c),window.addEventListener("keydown",o)},t=()=>{i.close(),document.body.classList.remove("overflow-hidden"),window.removeEventListener("click",c),window.addEventListener("keydown",o)};d.addEventListener("click",n),d.disabled=!1,s.addEventListener("click",t),document.addEventListener("astro:after-swap",t),window.addEventListener("keydown",e=>{e.key==="/"&&!i.open&&(n(),e.preventDefault())}),window.addEventListener("DOMContentLoaded",()=>{(window.requestIdleCallback||(a=>setTimeout(a,1)))(async()=>{const{PagefindUI:a}=await E(async()=>{const{PagefindUI:r}=await import("./ui-core.DPg9fpfo.js");return{PagefindUI:r}},__vite__mapDeps([0,1,2,3]));new a({element:"#pagefind__search",baseUrl:"/",bundlePath:"/".replace(/\/$/,"")+"/pagefind/",showImages:!1})})})}}customElements.define("site-search",v);export{E as _};