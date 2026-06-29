import{a as m,S as h,i as a}from"./assets/vendor-BGqwtSVv.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&s(n)}).observe(document,{childList:!0,subtree:!0});function i(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(e){if(e.ep)return;e.ep=!0;const r=i(e);fetch(e.href,r)}})();const p="https://pixabay.com/api/",f="54685682-80977b0b5ca1319a1902ced87";function g(t){return m.get(p,{params:{key:f,q:t,image_type:"photo",orientation:"horizontal",safesearch:!0}}).then(o=>o.data)}const l=document.querySelector(".gallery");document.querySelector(".loader");let c=null;function y(t){const o=t.map(({webformatURL:i,largeImageURL:s,tags:e,likes:r,views:n,comments:u,downloads:d})=>`
            <li class="list-item">
                <a href="${s}"><img src="${i}" alt="${e}" /></a>
                <div class="list-content">
                    <div>
                        <h2 class="likes">Likes</h2>
                        <p class="count-likes">${r}</p>
                    </div>
                    <div>
                        <h2 class="views">Views</h2>
                        <p class="count-views">${n}</p>
                    </div>
                    <div>
                        <h2 class="comments">Comments</h2>
                        <p class="count-comments">${u}</p>
                    </div>
                    <div>
                        <h2 class="downloads">Downloads</h2>
                        <p class="count-downloads">${d}</p>
                    </div>
                </div>
            </li>
        `).join("");l.innerHTML=o,c?c.refresh():c=new h(".gallery a",{captions:!0,captionsData:"alt",captionDelay:250})}function v(){l.innerHTML=""}function L(){var t;(t=document.querySelector(".loader"))==null||t.classList.remove("is-hidden")}function w(){var t;(t=document.querySelector(".loader"))==null||t.classList.add("is-hidden")}const S=document.querySelector(".search-form");S.addEventListener("submit",t=>{t.preventDefault();const o=t.currentTarget,i=o.elements["search-text"].value.trim();if(i===""){a.warning({title:"Warning",message:"Please enter a search query!",position:"topRight"});return}v(),L(),g(i).then(s=>{if(s.hits.length===0){a.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}y(s.hits)}).catch(s=>{console.error(s),a.error({title:"Error",message:"Something went wrong. Please try again later.",position:"topRight"})}).finally(()=>{w(),o.reset()})});
//# sourceMappingURL=index.js.map
