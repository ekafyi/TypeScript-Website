(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{"0Sy+":function(e,t,n){"use strict";n.r(t),n.d(t,"pageQuery",(function(){return d}));var o=n("ERkP"),r=n.n(o),a=n("9Dj+"),c=n("yVh0"),l=n("I56Z"),i=n("GO2c"),s=(n("2oau"),n("i0GD"),n("1P1P")),u=function(e){var t=Object(l.a)(Object(c.a)()),n=e.data.markdownRemark;return n?(Object(o.useEffect)((function(){var e=document.querySelectorAll(".tsconfig nav li a");e.forEach((function(e){e.addEventListener("click",(function(e){e.preventDefault(),document.querySelector(e.target.hash).scrollIntoView({behavior:"smooth",block:"start"})}))}));var t=function(){var t,n=window.scrollY;e.forEach((function(e){var o=document.querySelector(e.hash);o&&(o.offsetTop-100<=n&&(t=e))})),e.forEach((function(e){e===t?e.classList.add("current"):e.classList.remove("current")}))};return window.addEventListener("scroll",t,{passive:!0,capture:!0}),t(),Object(s.setupTwoslashHovers)(),function(){window.removeEventListener("scroll",t)}}),[]),r.a.createElement(a.a,{title:t("tsconfig_title"),description:t("tsconfig_description"),lang:e.pageContext.locale,allSitePage:e.data.allSitePage},r.a.createElement("div",{className:"tsconfig raised main-content-block markdown"},r.a.createElement("div",{dangerouslySetInnerHTML:{__html:n.html}})))):(console.log("Could not render:",JSON.stringify(e)),r.a.createElement("div",null))},d="1502950449";t.default=function(e){return r.a.createElement(i.a,{locale:e.pageContext.locale},r.a.createElement(u,e))}},"1P1P":function(e,t,n){"use strict";t.__esModule=!0,t.setupTwoslashHovers=void 0;var o=function(){var e=document.getElementById("twoslash-mouse-hover-info");e&&(e.style.display="none")},r=function(e){var t=e.target;if("DATA-LSP"!==t.nodeName)return o();var n,r,a,c,l=t.getAttribute("lsp"),i=(n=t,r=document.body.getBoundingClientRect(),{top:(a=n.getBoundingClientRect()).top-r.top,left:a.left-r.left}),s=((c=document.getElementById("twoslash-mouse-hover-info"))||((c=document.createElement("div")).style.position="absolute",c.id="twoslash-mouse-hover-info",document.body.appendChild(c)),c),u=document.createElement("textarea");u.innerHTML=l,s.textContent=u.value;s.style.display="block",s.style.top=i.top+20+"px",s.style.left=i.left+"px";var d=function e(t){return"pre"===t.nodeName.toLowerCase()?t.getBoundingClientRect():e(t.parentElement)}(t),f=i.left-d.x;s.style.maxWidth=d.width-f+"px"};t.setupTwoslashHovers=function(){var e=document.querySelectorAll(".shiki.lsp .code-container code");return e.forEach((function(e){e.addEventListener("mouseover",r),e.addEventListener("mouseout",o)})),function(){e.forEach((function(e){e.removeEventListener("mouseover",r),e.removeEventListener("mouseout",o)}))}}}}]);
//# sourceMappingURL=component---src-templates-tsconfig-reference-tsx-ccee087a267b1d3dc3d8.js.map