import{r as e,k as t,a,l,m as s,o,c as n,b as r,i as d,w as u,t as i,n as c,u as m,p,s as b,q as g,g as f,v as x,F as v,x as y,d as h,T as k,y as w,z as B,e as j,f as I,A as S}from"./index-39e033da.js";import{_,g as q,d as T}from"./books-1fbb7980.js";const A={class:"flex h-full flex-col items-center justify-between"},C={class:"flex h-full w-full flex-col"},N={class:"w-full object-cover"},D={class:"flex grow flex-col"},H={class:"mb-1 h-10 select-none text-sm line-clamp-2 md:h-12 md:text-base"},L={class:"select-none border-t border-gray-200 py-1 text-xs font-medium text-black/75 md:text-sm"},P={class:"line-clamp-1"},z=r("span",{class:"tracking-wider"},"查看更多",-1),K={__name:"BookCard",props:{bookId:{type:[String,Number],default:""},bookTitle:{type:String,default:""},bookAuthor:{type:String,default:""},quickSelect:{type:Boolean,default:!1}},emits:["select-mode","select-target"],setup(m,{emit:p}){const b=m,g=e(!1),f=e(null),x=e=>{f.value=e,f.value.addEventListener("click",v)},v=e=>{e.preventDefault(),b.quickSelect&&(g.value=!g.value,p("select-target",b.bookId))},y=e=>{p("select-mode",!0)};return t((()=>b.quickSelect),(e=>{e||(g.value=e)})),(e,t)=>{const p=a("router-link"),b=l("img-src"),f=l("longpress");return s((o(),n("li",{class:c(["mx-auto h-full min-h-[256px] w-full max-w-[256px] rounded-lg bg-white p-2 drop-shadow-lg transition-all md:min-h-[320px]",{"outline outline-4 outline-myBlue -translate-x-1 -translate-y-1":g.value}])},[r("div",A,[r("div",C,[d(p,{class:"aspect-w-4 aspect-h-3 mb-2 block overflow-hidden rounded-lg",to:{name:"BookDetail",params:{bookId:m.bookId}}},{default:u((()=>[s(r("img",N,null,512),[[b,`https://picsum.photos/id/${m.bookId}/200/300`]])])),_:1},8,["to"]),r("div",D,[r("h3",H,i(m.bookTitle),1),r("p",L,[r("span",P,"作者 : "+i(m.bookAuthor),1)])])]),d(p,{class:"block w-full rounded-lg bg-myBlue p-1.5 text-center text-white shadow transition-all hover:-translate-y-0.5 hover:bg-myLightBlue hover:shadow-md md:p-2",to:{name:"BookDetail",params:{bookId:m.bookId}}},{default:u((()=>[z])),_:1},8,["to"])])],2)),[[f,{longPress:y,cancelPress:x}]])}}},E={class:"mx-auto max-w-5xl p-4"},F={class:"mx-auto mb-4 flex max-w-lg items-center justify-center gap-2"},M={class:"grow"},$=["onKeyup"],G=[r("span",{class:"material-symbols-rounded align-middle font-bold text-myBlue"}," search ",-1)],J={class:"grid grid-cols-2 gap-4 md:grid-cols-4"},O={key:0,class:"fixed bottom-8 left-1/2 z-20 w-full -translate-x-1/2 md:bottom-0 md:bg-white md:px-8 md:py-2"},Q={class:"mx-auto flex max-w-sm items-center justify-center gap-3 md:max-w-5xl md:justify-between"},R={class:"rounded-full bg-white px-4 py-2 drop-shadow-lg md:drop-shadow-none"},U={class:"inline-block text-base md:text-lg"},V=[r("span",{class:"material-symbols-rounded align-middle text-xl md:text-2xl"}," delete ",-1),r("span",{class:"hidden text-base md:inline-block md:text-lg"},"刪除多筆",-1)],W={__name:"BooksList",setup(t){const a=m(),l=p(),{isAlert:s}=b(l),c=e([]),A=e([]),C=e(null),N=e(""),D=e(!1),H=e([]),L=e({}),P=async()=>{try{const{data:e}=await q();c.value=e,A.value=e}catch(e){}},z=()=>{W.value=C.value.value},W=g({get:()=>c.value.filter((e=>e.title.match(N.value))),set(e){N.value=e}}),X=e=>{e&&a.updateHeaderName("多選模式"),D.value=e},Y=e=>{const t=H.value.findIndex((t=>t===e));-1!==t?H.value.splice(t,1):H.value.push(e),0===H.value.length&&(a.resetHeaderName(),D.value=!1)},Z=()=>{H.value=[],D.value=!1,a.resetHeaderName()},ee=e=>async()=>{try{const t=(e=>{const t=e.reduce(((e,t)=>(e.push(T(t)),e)),[])[Symbol.iterator]();return()=>Promise.all(t)})(e);await t(),Z(),P(),S({group:"success",title:"刪除成功"},2500)}catch(t){}},te=()=>{s.value=!0,L.value={alertTitle:"確定刪除所選書本 ?",confirmTodo:ee(H.value)}};return f((()=>{P()})),(e,t)=>(o(),n("div",E,[r("div",F,[r("div",M,[r("input",{ref_key:"keywordInput",ref:C,class:"inline-block w-full rounded-lg px-3 py-2 focus:outline-myBlue",type:"text",onKeyup:x(z,["enter"])},null,40,$)]),r("button",{type:"button",class:"block rounded-lg p-2 hover:bg-gray-300",onClick:z},G)]),r("ul",J,[(o(!0),n(v,null,y(h(W),(e=>(o(),j(K,{key:e.id,"book-id":e.id,"book-title":e.title,"book-author":e.author,"quick-select":D.value,onSelectMode:X,onSelectTarget:Y},null,8,["book-id","book-title","book-author","quick-select"])))),128))]),d(k,{mode:"out-in","enter-active-class":"transition duration-300 ease-out","enter-from-class":"transform opacity-0 translate-y-48","enter-to-class":"transform opacity-100 translate-y-0","leave-active-class":"transition duration-300 ease-in","leave-from-class":"transform opacity-100 translate-y-0","leave-to-class":"transform opacity-0 translate-y-48"},{default:u((()=>[D.value?(o(),n("div",O,[r("div",Q,[r("div",R,[r("span",U,"已選取 "+i(H.value.length)+" 個",1)]),r("div",{class:"flex items-center justify-center gap-3 md:gap-4"},[r("button",{type:"button",class:"flex w-11 items-center justify-center rounded-full bg-white p-2 text-red-500 drop-shadow-lg transition-all duration-200 ease-out hover:bg-gray-200 active:bg-gray-300 md:h-11 md:w-auto md:px-4 md:py-2 md:drop-shadow-none",onClick:te},V),r("button",{type:"button",class:"block rounded-full bg-white px-4 py-2 text-base drop-shadow-lg transition-colors hover:bg-gray-200 md:text-lg md:drop-shadow-none",onClick:Z}," 取消選取 ")])])])):I("",!0)])),_:1}),d(_,w(B(L.value)),null,16)]))}};export{W as default};
