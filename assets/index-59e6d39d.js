(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))d(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const o of t.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&d(o)}).observe(document,{childList:!0,subtree:!0});function c(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function d(e){if(e.ep)return;e.ep=!0;const t=c(e);fetch(e.href,t)}})();const x="/slider_nike/assets/logo-f43f90e4.svg",y="/slider_nike/assets/twitter-b4153735.svg",b="/slider_nike/assets/inst-fe3aab30.svg",v="/slider_nike/assets/facebook-2d71e77f.svg",I=()=>{const n=document.createElement("header");n.classList.add("header");const s=document.createElement("img");s.src=x,s.alt="Nike Logo";const c=document.createElement("p");c.textContent="WOOCOMMERCE  PRODUCT  SLIDER";const d=document.createElement("div");d.classList.add("header__social");const e=document.createElement("a");e.href="#";const t=document.createElement("img");t.src=y,t.alt="Twitter Logo",e.appendChild(t);const o=document.createElement("a");o.href="#";const a=document.createElement("img");a.src=b,a.alt="Instagram Logo",o.appendChild(a);const i=document.createElement("a");i.href="#";const l=document.createElement("img");l.src=v,l.alt="Facebook Logo",i.appendChild(l);const r=document.createElement("a");return r.href="#",r.textContent="CART (0)",n.appendChild(s),n.appendChild(c),n.appendChild(d),d.appendChild(e),d.appendChild(o),d.appendChild(i),n.appendChild(r),n},T="/slider_nike/assets/jordan-0600a994.png",w="/slider_nike/assets/cryptokick1-600322f5.png",K="/slider_nike/assets/cryptokick2-ab8bf18f.png",N="/slider_nike/assets/mag-b97b4380.png",O="/slider_nike/assets/shadow-8674c737.svg",R=()=>{const n=document.createElement("div");n.classList.add("slider");const s=document.createElement("img");s.classList.add("slider__shadow"),s.src=O,s.alt="shadow img";const c=document.createElement("div");c.classList.add("slider--line");const d=document.createElement("div");d.classList.add("slider__element");const e=document.createElement("img");e.classList.add("slider__img--size"),e.src=T,e.alt="jordan img";const t=document.createElement("h1");t.classList.add("slider__text"),t.textContent="NIKE AIR JORDAN";const o=document.createElement("h1");o.classList.add("slider__text","slider__text--opacity"),o.textContent="NIKE AIR JORDAN";const a=document.createElement("div");a.classList.add("slider__element");const i=document.createElement("img");i.classList.add("slider__img--size"),i.src=w,i.alt="cryptokick img";const l=document.createElement("h1");l.classList.add("slider__text","slider__text--black"),l.textContent="NIKE CRYPTOKICK";const r=document.createElement("h1");r.classList.add("slider__text","slider__text--opacity","slider__text--black-opacity"),r.textContent="NIKE CRYPTOKICK";const m=document.createElement("div");m.classList.add("slider__element");const u=document.createElement("img");u.classList.add("slider__img--size","slider__text--black"),u.src=K,u.alt="cryptokick2 img";const g=document.createElement("h1");g.classList.add("slider__text","slider__text--black"),g.textContent="NIKE CRYPTOKICK";const C=document.createElement("h1");C.classList.add("slider__text","slider__text--opacity","slider__text--black-opacity"),C.textContent="NIKE CRYPTOKICK";const p=document.createElement("div");p.classList.add("slider__element");const _=document.createElement("img");_.classList.add("slider__img--size"),_.src=N,_.alt="mag img";const E=document.createElement("h1");E.classList.add("slider__text"),E.textContent="NIKE MAG BACK TO THE FUTURE";const f=document.createElement("h1");return f.classList.add("slider__text","slider__text--opacity"),f.textContent="NIKE MAG BACK TO THE FUTURE",d.appendChild(e),d.appendChild(t),d.appendChild(o),a.appendChild(i),a.appendChild(l),a.appendChild(r),m.appendChild(u),m.appendChild(g),m.appendChild(C),p.appendChild(_),p.appendChild(E),p.appendChild(f),c.appendChild(d),c.appendChild(a),c.appendChild(m),c.appendChild(p),n.appendChild(c),n.appendChild(s),{sliderDiv:n,sliderLineDiv:c}};const k="/slider_nike/assets/arrow-a50e3f41.svg",{sliderDiv:D,sliderLineDiv:h}=R(),A=()=>{let n=0;const s=document.createElement("content");s.classList.add("content");const c=document.createElement("button");c.classList.add("content__button"),c.addEventListener("click",function(){n+=500,n>0&&(n=-1500),h.style.left=n+"px",console.log(h.style.left)});const d=document.createElement("img");d.classList.add("button__arrow"),d.src=k,d.alt="arrow",c.appendChild(d);const e=document.createElement("button");e.classList.add("content__button","button--reverse"),e.addEventListener("click",function(){n-=500,n<-1500&&(n=0),h.style.left=n+"px",console.log(h.style.left)});const t=document.createElement("img");return t.classList.add("button__arrow"),t.src=k,t.alt="arrow",e.appendChild(t),s.appendChild(c),s.appendChild(D),s.appendChild(e),s};const P=()=>{const n=document.createElement("footer");n.classList.add("footer");const s=document.createElement("div");s.classList.add("footer__details");const c=document.createElement("p");c.className="footer__number--size",c.textContent="$749";var d=document.createElement("ul");d.className="footer__rating";for(var e=[],t=0;t<5;t++){var o=document.createElement("li");o.className="rating__star",o.innerHTML="&#9733;",d.appendChild(o),e.push(o)}e.forEach(r=>{r.addEventListener("click",()=>{r.classList.toggle("checked")})});const a=document.createElement("p");a.className="footer__text--margin",a.textContent=`A Woocommerce product gallery Slider for Slider
Revolution with mind-blowing visuals.`,s.appendChild(c),s.appendChild(d),s.appendChild(a);const i=document.createElement("button");i.classList.add("footer__button"),i.textContent="BUY NOW";const l=document.createElement("hr");return l.classList.add("button__hr"),i.appendChild(l),n.appendChild(s),n.appendChild(i),n},L=document.querySelector("body"),j=I(),B=A(),M=P();L.appendChild(j);L.appendChild(B);L.appendChild(M);
