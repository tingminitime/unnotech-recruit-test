import{u as e,s as t,r as a,a as l,o as s,c as o,b as r,t as n,d as i,e as u,w as d,f as m,n as c,g as f,h as x,i as v,F as w}from"./index-39e033da.js";import{_ as y}from"./lodash-0862ab66.js";const h={class:"relative mx-auto max-w-5xl"},k={class:"absolute top-1/2 left-1/2 w-[218px] -translate-x-1/2 -translate-y-1/2 text-center text-2xl font-medium text-myBlack line-clamp-1 md:w-80 md:text-3xl"},b={class:"flex h-14 items-center justify-between"},p={class:"h-full"},B=r("span",{class:"material-symbols-rounded align-middle text-3xl font-bold"}," arrow_back_ios_new ",-1),_={key:1,class:"w-16"},g={class:"flex h-full"},j=r("span",{class:"material-symbols-outlined align-middle text-4xl font-bold"}," add ",-1),E=r("span",{class:"material-symbols-rounded align-middle text-3xl"}," border_color ",-1),L={__name:"HeaderLayout",setup(v){const w=e(),{headerName:L,showBackButton:$,backRoute:C}=t(w),I=a(null),R=a(0),Y=a(0),z=a(!1);var D;return D=y.throttle((()=>{Y.value=window.scrollY,R.value>Y.value?z.value=!1:z.value=!0,Y.value<=0&&(z.value=!1),R.value=Y.value}),300),f((()=>{R.value=window.scrollY,window.addEventListener("scroll",D)})),x((()=>{window.removeEventListener("scroll",D)})),(e,t)=>{const a=l("router-link");return s(),o("div",{ref_key:"headerRef",ref:I,class:c(["sticky top-0 left-0 z-20 w-full bg-white drop-shadow-lg transition-transform duration-200",{"-translate-y-full":z.value}])},[r("div",h,[r("h2",k,n(i(L)),1),r("div",b,[r("div",p,[i($)?(s(),u(a,{key:0,to:i(C),class:"flex h-full w-16 items-center justify-center text-myDarkGray transition-colors md:hover:text-myBlue"},{default:d((()=>[B])),_:1},8,["to"])):(s(),o("div",_))]),r("div",g,[e.$route.meta.showCreateButton?(s(),u(a,{key:0,to:{name:"BookCreate"},class:"flex h-full w-16 items-center justify-center text-myBlack transition-colors md:hover:text-myBlue"},{default:d((()=>[j])),_:1})):m("",!0),e.$route.meta.showEditButton?(s(),u(a,{key:1,to:{name:"BookEdit",params:{bookId:e.$route.params.bookId}},class:"flex h-full w-16 items-center justify-center text-myBlack transition-colors md:hover:text-myBlue"},{default:d((()=>[E])),_:1},8,["to"])):m("",!0)])])])],2)}}},$={__name:"LandingPage",setup:e=>(e,t)=>{const a=l("router-view");return s(),o(w,null,[v(L),v(a)],64)}};export{$ as default};