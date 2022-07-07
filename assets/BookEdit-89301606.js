import{N as e,u as t,p as a,s as o,K as l,r as s,q as r,g as u,o as i,c as d,b as n,i as p,d as m,y as c,z as b,A as h}from"./index-39e033da.js";import{_ as x,a as f}from"./TextareaText-e475e2f0.js";import{_ as k,a as v,u as y}from"./books-1fbb7980.js";import"./lodash-0862ab66.js";const g={class:"mx-auto max-w-xl p-4"},I={class:"flex flex-col gap-4"},w={class:"mt-4 flex items-center justify-evenly gap-4"},V=["disabled"],j={__name:"BookEdit",props:{bookId:{type:[String,Number],default:""}},setup(j){const B=j,T=e(),D=t(),E=a(),{isAlert:N}=o(E),_=l({title:"",author:"",description:""}),q=s({title:!0,author:!0,description:!0}),O=s({}),U=e=>{Object.assign(q.value,e)},A=r((()=>{const{title:e,author:t}=_;return Object.values({title:e,author:t}).some((e=>""===e.trim()))})),C=r((()=>Object.values(q.value).every((e=>e)))),z=()=>{var e,t;C.value&&(N.value=!0,O.value={alertTitle:"確認修改 ?",confirmTodo:(e=B.bookId,t=_,async()=>{try{const{data:a}=await y(e,t);h({group:"success",title:"修改成功"}),T.push({name:"BookDetail",params:{bookId:a.id}})}catch(a){}})})},F=()=>{N.value=!0,O.value={alertTitle:"是否返回上一頁 ?",confirmTodo(){T.push({name:"BookDetail",params:{bookId:B.bookId}})}}};return u((()=>{D.$patch((e=>{e.backRoute={name:"BookDetail",params:{bookId:B.bookId}}})),(async e=>{try{const{data:t}=await v(e),{title:a,author:o,description:l}=t;D.updateHeaderName(a),_.title=a||"",_.author=o||"",_.description=l||""}catch(t){T.push({name:"NotFound"})}})(B.bookId)})),(e,t)=>(i(),d("div",g,[n("div",I,[p(x,{modelValue:_.title,"onUpdate:modelValue":t[0]||(t[0]=e=>_.title=e),"input-title":"名稱","input-name":"title","placeholder-text":"請輸入書名","required-text":"請填寫書名",onErrorsInfo:U},null,8,["modelValue"]),p(x,{modelValue:_.author,"onUpdate:modelValue":t[1]||(t[1]=e=>_.author=e),"input-title":"作者","input-name":"author","placeholder-text":"請輸入作者","required-text":"請填寫作者",onErrorsInfo:U},null,8,["modelValue"]),p(f,{modelValue:_.description,"onUpdate:modelValue":t[2]||(t[2]=e=>_.description=e),"input-name":"description","max-length":"500",onErrorsInfo:U},null,8,["modelValue"]),n("div",w,[n("button",{type:"button",class:"block w-full max-w-[192px] rounded-full bg-gray-300 p-2 px-4 text-white hover:bg-gray-400",onClick:F}," 取消 "),n("button",{type:"button",disabled:m(A),class:"block w-full max-w-[192px] rounded-full bg-myBlue p-2 px-4 text-white hover:bg-myDarkBlue disabled:bg-gray-300",onClick:z}," 修改 ",8,V)])]),p(k,c(b(O.value)),null,16)]))}};export{j as default};
