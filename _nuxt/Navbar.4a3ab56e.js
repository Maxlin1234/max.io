import{_ as h}from"./nuxt-link.a1a9a4fc.js";import{h as _,i as u,o as n,b as l,f as s,e as c,w as i,j as p}from"./entry.5159e606.js";const v=""+globalThis.__publicAssetsURL("dark/assets/imgs/LOGO.png"),m=""+globalThis.__publicAssetsURL("dark/assets/imgs/LOGOwhite.png"),b={class:"container"},f={class:"logo icon-img-100",href:"#"},k={key:0,src:v,alt:"logo"},y={key:1,src:m,style:{width:"160px",height:"24px"},alt:"logo"},x=s("button",{class:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"},[s("span",{class:"icon-bar"},[s("i",{class:"fas fa-bars"})])],-1),S={class:"navbar-nav"},L={class:"nav-item"},w=s("span",{class:"rolling-text"},"首頁",-1),B={class:"nav-item"},C=s("span",{class:"rolling-text"},"關於我們",-1),$={class:"nav-item"},M=s("span",{class:"rolling-text"},"作品分類",-1),N=s("div",{class:"form-group"},[s("input",{type:"text",name:"search",placeholder:"Search"}),s("button",null,[s("span",{class:"pe-7s-search"})])],-1),q=s("span",{class:"pe-7s-search open-search"},null,-1),O=s("span",{class:"pe-7s-close close-search"},null,-1),E=[q,O],j={__name:"Navbar",props:["lightMode","mainBg","subBg","noStatic","curve"],setup(a){function r(){const e=window.scrollY,t=document.querySelector(".navbar");e>300?t.classList.add("nav-scroll"):t.classList.remove("nav-scroll")}function d(){document.querySelector(".navbar .navbar-collapse").classList.toggle("show")}function g(){let e=document.querySelector(".navbar .search-form"),t=document.querySelector(".search-form .close-search");e.classList.toggle("open"),e.classList.contains("open")?t.style.display="block":t.style.display="none"}return _(()=>{window.addEventListener("scroll",r)}),u(()=>{window.removeEventListener("scroll",r)}),(e,t)=>{const o=h;return n(),l("nav",{class:p(`navbar navbar-expand-lg ${a.curve?"nav-crev":""} ${a.noStatic?"":"static"} ${a.mainBg?"main-bg":""} ${a.subBg?"sub-bg":""}`)},[s("div",b,[s("a",f,[a.lightMode?(n(),l("img",k)):(n(),l("img",y))]),x,s("div",{class:"collapse navbar-collapse justify-content-center",id:"navbarSupportedContent",onClick:d},[s("ul",S,[s("li",L,[c(o,{class:"nav-link",to:"/dark/home-onepage"},{default:i(()=>[w]),_:1})]),s("li",B,[c(o,{class:"nav-link",to:`/${a.lightMode?"light":"dark"}/page-about`},{default:i(()=>[C]),_:1},8,["to"])]),s("li",$,[c(o,{class:"nav-link",to:`/${a.lightMode?"light":"dark"}/portfolio-grid-2`},{default:i(()=>[M]),_:1},8,["to"])])])]),s("div",{class:"search-form"},[N,s("div",{class:"search-icon",onClick:g},E)])])],2)}}};export{j as _};
