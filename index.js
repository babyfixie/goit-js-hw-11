import{i as u,S as f}from"./assets/vendor-B07T6_gy.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&o(a)}).observe(document,{childList:!0,subtree:!0});function i(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function o(e){if(e.ep)return;e.ep=!0;const s=i(e);fetch(e.href,s)}})();const y=t=>{const{webformatURL:r,largeImageURL:i,tags:o,likes:e,views:s,comments:a,downloads:m}=t;return`<li class="gallery-card">
            <a href=${i} class="gallery-link">
              <img class="gallery-img" src=${r} alt='s${o}'>
            </a>

          <ul class="description">
            <li class="description-item">
              <p class="descriotion-text">Likes<span class="descriotion-span">${e}</span></p>
            </li>
            <li class="description-item">
              <p class="descriotion-text">Views<span class="descriotion-span">${s}</span></p>
            </li>
            <li class="description-item">
              <p class="descriotion-text">Comments<span class="descriotion-span">${a}</span></p>
            </li>
            <li class="description-item">
              <p class="descriotion-text">Downloads<span class="descriotion-span">${m}</</span></p>
            </li>
          </ul>
          </li>`},h=t=>{const r="48501785-b055ddd49a6daf7c18b293e38";console.log("Using API Key:",r);const i=new URLSearchParams({key:r,q:t,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:12});return fetch(`https://pixabay.com/api/?${i}`).then(o=>{if(!o.ok)throw new Error(o.status);return o.json()})},l=document.querySelector(".js-seach-form"),c=document.querySelector(".js-gallery"),p=document.querySelector(".loader-container");u.settings({position:"topRight",theme:"dark",backgroundColor:"#ef4040",timeout:2e3});const g=new f(".js-gallery a",{captionsData:"alt",captionDelay:250,animationSpeed:400}),L=t=>{t.preventDefault();const r=t.currentTarget.elements.user_query.value.trim();if(r===""){n(!1),setTimeout(()=>{u.error({message:"Please feel this field!"})},500),l.reset(),n(!0);return}d(!0),n(!1),h(r).then(i=>{if(i.total===0){u.error({message:"Sorry, there are no images matching your search query. Please try again!"}),c.innerHTML="",l.reset();return}const o=i.hits.map(e=>y(e)).join("");c.innerHTML=o,g.refresh(),d(!0)}).catch(i=>{console.log(i)}).finally(()=>{l.reset(),n(!0)}),d(!1)};l.addEventListener("submit",L);function n(t){t?setTimeout(()=>{p.classList.add("is-hidden")},500):p.classList.remove("is-hidden")}function d(t){t?c.classList.remove("is-visibly"):c.classList.add("is-visibly")}
//# sourceMappingURL=index.js.map
