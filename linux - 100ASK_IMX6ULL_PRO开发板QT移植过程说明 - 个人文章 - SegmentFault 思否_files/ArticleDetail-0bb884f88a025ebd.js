(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2449],{15057:function(e,t){"use strict";var r,i,l="function"==typeof Map?new Map:(r=[],i=[],{has:function(e){return r.indexOf(e)>-1},get:function(e){return i[r.indexOf(e)]},set:function(e,t){-1===r.indexOf(e)&&(r.push(e),i.push(t))},delete:function(e){var t=r.indexOf(e);t>-1&&(r.splice(t,1),i.splice(t,1))}}),n=function(e){return new Event(e,{bubbles:!0})};try{new Event("test")}catch(e){n=function(e){var t=document.createEvent("Event");return t.initEvent(e,!0,!1),t}}function a(e){var t=l.get(e);t&&t.destroy()}function o(e){var t=l.get(e);t&&t.update()}var s=null;"undefined"==typeof window||"function"!=typeof window.getComputedStyle?((s=function(e){return e}).destroy=function(e){return e},s.update=function(e){return e}):((s=function(e,t){return e&&Array.prototype.forEach.call(e.length?e:[e],function(e){return function(e){if(e&&e.nodeName&&"TEXTAREA"===e.nodeName&&!l.has(e)){var t,r=null,i=null,a=null,o=function(){e.clientWidth!==i&&u()},s=(function(t){window.removeEventListener("resize",o,!1),e.removeEventListener("input",u,!1),e.removeEventListener("keyup",u,!1),e.removeEventListener("autosize:destroy",s,!1),e.removeEventListener("autosize:update",u,!1),Object.keys(t).forEach(function(r){e.style[r]=t[r]}),l.delete(e)}).bind(e,{height:e.style.height,resize:e.style.resize,overflowY:e.style.overflowY,overflowX:e.style.overflowX,wordWrap:e.style.wordWrap});e.addEventListener("autosize:destroy",s,!1),"onpropertychange"in e&&"oninput"in e&&e.addEventListener("keyup",u,!1),window.addEventListener("resize",o,!1),e.addEventListener("input",u,!1),e.addEventListener("autosize:update",u,!1),e.style.overflowX="hidden",e.style.wordWrap="break-word",l.set(e,{destroy:s,update:u}),"vertical"===(t=window.getComputedStyle(e,null)).resize?e.style.resize="none":"both"===t.resize&&(e.style.resize="horizontal"),isNaN(r="content-box"===t.boxSizing?-(parseFloat(t.paddingTop)+parseFloat(t.paddingBottom)):parseFloat(t.borderTopWidth)+parseFloat(t.borderBottomWidth))&&(r=0),u()}function d(t){var r=e.style.width;e.style.width="0px",e.style.width=r,e.style.overflowY=t}function c(){if(0!==e.scrollHeight){var t=function(e){for(var t=[];e&&e.parentNode&&e.parentNode instanceof Element;)e.parentNode.scrollTop&&(e.parentNode.style.scrollBehavior="auto",t.push([e.parentNode,e.parentNode.scrollTop])),e=e.parentNode;return function(){return t.forEach(function(e){var t=e[0];t.scrollTop=e[1],t.style.scrollBehavior=null})}}(e);e.style.height="",e.style.height=e.scrollHeight+r+"px",i=e.clientWidth,t()}}function u(){c();var t=Math.round(parseFloat(e.style.height)),r=window.getComputedStyle(e,null),i="content-box"===r.boxSizing?Math.round(parseFloat(r.height)):e.offsetHeight;if(i<t?"hidden"===r.overflowY&&(d("scroll"),c(),i="content-box"===r.boxSizing?Math.round(parseFloat(window.getComputedStyle(e,null).height)):e.offsetHeight):"hidden"!==r.overflowY&&(d("hidden"),c(),i="content-box"===r.boxSizing?Math.round(parseFloat(window.getComputedStyle(e,null).height)):e.offsetHeight),a!==i){a=i;var l=n("autosize:resized");try{e.dispatchEvent(l)}catch(e){}}}}(e)}),e}).destroy=function(e){return e&&Array.prototype.forEach.call(e.length?e:[e],a),e},s.update=function(e){return e&&Array.prototype.forEach.call(e.length?e:[e],o),e});var d=s;t.Z=d},72442:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/ArticleDetail",function(){return r(67298)}])},55296:function(e,t){"use strict";t.Z={src:"https://static.segmentfault.com/main_site_next/5ae3ab99/_next/static/media/bg-169.3426af7c.svg",height:9,width:16,blurWidth:0,blurHeight:0}},18934:function(e,t,r){"use strict";var i=r(11527),l=r(50959);let n=()=>{let e=()=>{let e=window.scrollY,t=parseInt(String(e/50)),i=setInterval(()=>{(e-=t)<0?(window.scrollTo(0,0),clearInterval(i)):window.scrollTo(0,e)},3);r(0)},[t,r]=(0,l.useState)(0),n=()=>{r(window.scrollY)};return(0,l.useEffect)(()=>(window.addEventListener("scroll",n),()=>{window.removeEventListener("scroll",n)})),(0,i.jsx)(i.Fragment,{children:(0,i.jsx)("div",{id:"fixedTools",className:"position-fixed d-none ".concat(t>720?"d-xl-flex":""),style:{right:"24px",bottom:"24px"},children:(0,i.jsx)("button",{type:"button",className:"btn btn-light",title:"回顶部",onClick:e,children:"▲"})})})};t.Z=n},3855:function(e,t,r){"use strict";var i=r(11527),l=r(4270),n=r.n(l),a=r(50959),o=r(75778),s=r(30721);let d=()=>{let[e,t]=(0,a.useState)(0),r=r=>{"success"===r&&t(e+1)};return(0,i.jsxs)(o.Z,{className:e>0?"d-flex":"d-none",children:[(0,i.jsx)(o.Z.Header,{className:"bg-white border-0",children:(0,i.jsx)("strong",{children:"宣传栏"})}),(0,i.jsxs)(o.Z.Body,{children:[(0,i.jsx)("div",{className:"mb-3",children:(0,i.jsx)(s.Z,{name:"7",callback:r})}),(0,i.jsx)("div",{className:"mb-3",children:(0,i.jsx)(s.Z,{name:"9"})}),(0,i.jsx)("div",{children:(0,i.jsx)(s.Z,{name:"10"})})]})]})},c=(0,i.jsx)(i.Fragment,{children:(0,i.jsx)(n(),{id:"485379b6e05f23fd",children:".grid-ad{margin-top:1.5rem}.grid-ad .ad-wrap{height:12.5rem;background:#026e4c;border:.5rem solid#452d1c;-webkit-border-radius:.25rem;-moz-border-radius:.25rem;border-radius:.25rem;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;-ms-flex-direction:column;flex-direction:column}.grid-ad .ad-wrap .desc-wrap .desc{font-size:.875rem}.card-header{border-bottom:1px solid rgba(0,0,0,.0625)!important}"})}),u=e=>(0,i.jsxs)(i.Fragment,{children:[c,(0,i.jsx)(d,{...e})]});t.Z=a.memo(u)},619:function(e,t,r){"use strict";var i=r(11527),l=r(4270),n=r.n(l);r(50959);var a=r(75778),o=r(65895),s=r(64496),d=r(23970),c=r(18318),u=r(78661),m=r(87710);let v=e=>{var t,r;let{id:l,className:n="",data:v,source:h}=e,p=(0,d.I0)(),x=()=>{p({type:"article"===h?"articleDetail/getQuoted":"question/getQuoted",payload:{object_id:l,size:15,page:v.rows.length<15?1:v.page+1}})},f=e=>{u.ZP.confirm({title:"删除引用",content:"确认要删除么？",onSuccess:()=>{(0,m.F3D)(e).then(()=>{p({type:"article"===h?"articleDetail/deleteOneQuoted":"question/deleteOneQuoted",payload:e})})}})};return(null==v?void 0:null===(t=v.rows)||void 0===t?void 0:t.length)?(0,i.jsxs)(a.Z,{className:n,children:[(0,i.jsx)(a.Z.Header,{className:"bg-white",children:(0,i.jsxs)("strong",{children:["被 ",v.total," 篇内容引用"]})}),(0,i.jsx)(o.Z,{variant:"flush",className:"quote",as:"ul",children:null==v?void 0:null===(r=v.rows)||void 0===r?void 0:r.map(e=>{var t,r,l,n,a;return(0,i.jsxs)(s.Z,{action:!0,as:"li",className:"d-flex align-items-center",children:[(0,i.jsxs)("a",{href:"".concat(e.object.url,"?utm_source=sf-backlinks"),className:"d-flex align-items-center",children:[(0,i.jsx)(c.Z,{src:null===(t=e.object)||void 0===t?void 0:null===(r=t.user)||void 0===r?void 0:r.avatar_url,headdress:null===(l=e.object)||void 0===l?void 0:null===(n=l.user)||void 0===n?void 0:n.headdress_worn,alt:"头像",width:24,height:24,className:"me-2"}),(0,i.jsx)("div",{className:"me-2 text-body",children:e.object.title}),(e.object.answers>0||e.object.comments>0)&&(0,i.jsxs)("span",{className:"ms-1 me-2 font-size-14 flex-shrink-0",children:[(0,i.jsx)("i",{className:"far fa-message-lines text-primary me-1"}),(0,i.jsx)("span",{className:"text-primary",children:e.object.comments||e.object.answers})]})]}),(null===(a=e.actions.find(e=>"delete"===e.action))||void 0===a?void 0:a.action)&&(0,i.jsx)("a",{href:"###",className:"text-secondary font-size-14 delete-quote ms-1 flex-shrink-0",onClick:t=>{t.preventDefault(),f(e.id)},children:"删除"})]},e.id)})}),v.page<v.total_page&&(0,i.jsx)(a.Z.Footer,{className:"bg-white",children:(0,i.jsx)("a",{href:"###",onClick:e=>{e.preventDefault(),x()},className:"font-size-14",children:"展开更多"})})]}):null},h=(0,i.jsx)(i.Fragment,{children:(0,i.jsx)(n(),{id:"e7ade88cc0ab8362",children:".quote .delete-quote{visibility:hidden}.quote .list-group-item:hover .delete-quote{visibility:visible}"})}),p=e=>(0,i.jsxs)(i.Fragment,{children:[h,(0,i.jsx)(v,{...e})]});t.Z=p},39118:function(e,t,r){"use strict";r.d(t,{Z:function(){return m}});var i=r(11527),l=r(50959),n=r(39110),a=r.n(n),o=r(84875),s=r.n(o);let d=(e,t)=>{let{children:r,className:l="",isSticky:n=!1,enabledSticky:a=!1}=e;return(0,i.jsx)("div",{ref:t,className:s()(l,n&&!a&&"mini"),children:r})},c=(0,l.forwardRef)(d);c.displayName="StickyView.Item";let u=e=>{let{children:t,...r}=e,n=(0,l.useRef)(null),o=(0,l.useRef)(0),s=(0,l.useRef)([]),d=(0,l.useRef)(0),[c,u]=(0,l.useState)([]),[m,v]=(0,l.useState)(!1);(0,l.useEffect)(()=>{if(!n.current||!window.ResizeObserver)return;let e=new ResizeObserver(e=>{window.requestAnimationFrame(()=>{if(Array.isArray(e)&&e.length)return h()})});e.observe(n.current)},[]);let h=()=>{let e=s.current,t=e.map(e=>{if(!e)return{};let t=e.offsetTop,r=e.clientHeight;return{elementTop:t,elementHeight:r}});u(t)};(0,l.useEffect)(()=>(0===c.length&&x(),window.addEventListener("scroll",x),()=>{window.removeEventListener("scroll",x)}),[c]),(0,l.useEffect)(()=>{if(!n.current)return;let e=n.current.getBoundingClientRect().top,t=document.documentElement.scrollTop||document.body.scrollTop;0===o.current&&(o.current=t+e)},[n.current]),(0,l.useEffect)(()=>{0!==s.current.length&&s.current.forEach(e=>{p(e)})},[s.current]);let p=e=>{if(!window.ResizeObserver)return;let t=new ResizeObserver(e=>{window.requestAnimationFrame(()=>{if(!Array.isArray(e)||!e.length)return;let t=f();return d.current=t,t})});t.observe(e)},x=()=>{if(!n.current)return;let e=n.current.clientHeight,t=n.current.getBoundingClientRect().top;-1*t>e-58&&v(!0),o.current-t<58+d.current&&v(!1)},f=()=>{let e=0;return s.current.forEach(t=>{(null==t?void 0:t.children)&&Array.from(t.children).forEach(t=>{e+=t.clientHeight})}),e};return(0,i.jsx)("div",{id:"right-side-wrap",ref:n,children:(0,i.jsx)(a(),{enabled:m,...r,children:l.Children.map(t,(e,t)=>e?l.cloneElement(e,{isSticky:m,ref:e=>s.current[t]=e}):null)})})};u.Item=c;var m=u},80541:function(e,t,r){"use strict";var i=r(11527),l=r(50959),n=r(75778),a=r(84875),o=r.n(a),s=r(18318),d=r(40941),c=r(49485);let u=e=>{var t,r,l,a;let{user:u,onFollow:m,isFollow:v,followNum:h}=e;return(0,i.jsx)(n.Z,{children:(0,i.jsxs)(n.Z.Body,{children:[(0,i.jsxs)("div",{className:"d-flex align-items-center mb-3",children:[(0,i.jsx)("picture",{className:"me-3",children:(0,i.jsx)("a",{href:null==u?void 0:u.url,children:(0,i.jsx)(s.Z,{src:null==u?void 0:u.avatar_url,alt:"avatar",width:64,height:64,headdress:null==u?void 0:u.headdress_worn})})}),(0,i.jsxs)("div",{children:[(0,i.jsx)("h5",{className:"mb-0",children:(0,i.jsx)("a",{href:null==u?void 0:u.url,className:"text-body",children:null==u?void 0:u.name})}),!!(null==u?void 0:null===(t=u.user_auth)||void 0===t?void 0:t.is_auth)&&(null==u?void 0:null===(r=u.user_auth)||void 0===r?void 0:r.info)&&(0,i.jsxs)("div",{className:"mt-2 font-size-14 authentication-info",children:[(0,i.jsx)("i",{className:o()("me-1 fas fa-badge-check",(null==u?void 0:null===(l=u.user_auth)||void 0===l?void 0:l.type)===1?"text-info":"text-warning")}),null==u?void 0:null===(a=u.user_auth)||void 0===a?void 0:a.info]})]})]}),(null==u?void 0:u.excerpt)&&(0,i.jsx)("div",{className:"text-secondary text-truncate-2 userExcerpt mb-3",dangerouslySetInnerHTML:{__html:null==u?void 0:u.excerpt}}),(0,i.jsxs)("div",{className:"d-flex align-items-center mb-3",children:[(0,i.jsxs)("div",{className:"me-4",children:[(0,i.jsx)("strong",{children:(0,c.Ae)(null==u?void 0:u.rank)}),(0,i.jsx)("span",{className:"text-secondary",children:" 声望"})]}),(0,i.jsxs)("div",{children:[(0,i.jsx)("strong",{children:(0,c.Ae)(h)||0}),(0,i.jsx)("span",{className:"text-secondary",children:" 粉丝"})]})]}),(0,i.jsx)("div",{className:"d-grid",children:(0,i.jsx)(d.Z,{variant:"primary",onClick:m,children:v?"已关注":"关注作者"})})]})})};t.Z=l.memo(u)},67298:function(e,t,r){"use strict";r.r(t),r.d(t,{__N_SSP:function(){return eo},default:function(){return es}});var i=r(11527),l=r(4270),n=r.n(l),a=r(50959),o=r(44587),s=r(79852),d=r(34940),c=r(25487),u=r(23970),m=r(32699),v=r(30721),h=r(88072),p=r(97344),x=r(74637),f=r.n(x);let g=e=>{var t,r,l,n,a,o,s;let{id:d,extra:u,status:m,sessionUser:v={}}=e;return(0,i.jsxs)(i.Fragment,{children:["rejected"===m&&(0,i.jsxs)(c.Z,{className:"mb-3",variant:"warning",children:[(0,i.jsxs)("div",{className:"",children:[(0,i.jsx)("div",{dangerouslySetInnerHTML:{__html:u.reason}}),(0,i.jsxs)("div",{children:[(0,i.jsx)("span",{children:"你可以"}),(0,i.jsx)("a",{href:"/a/".concat(d,"/edit"),children:" 再次编辑 "}),(0,i.jsx)("span",{children:"以重新发表"})]})]}),(0,i.jsx)("div",{className:"mt-3",children:"注意：如果该内容"}),(0,i.jsxs)("ul",{children:[(0,i.jsx)("li",{children:"连续 3 次发表未通过"}),(0,i.jsx)("li",{children:"发表未成功一周内未做任何改动"})]}),(0,i.jsx)("div",{className:"mt-3",children:"都将被系统自动删除，如有必要，请做好备份。"})]}),"deleted"===m&&(0,i.jsxs)(c.Z,{className:"mb-3",variant:"warning",children:[(0,i.jsx)("span",{dangerouslySetInnerHTML:{__html:u.reason}}),(null==u?void 0:u.operator)&&(0,i.jsxs)("div",{children:["操作者：",(0,i.jsx)("a",{href:null==u?void 0:null===(t=u.operator)||void 0===t?void 0:t.url,children:null==u?void 0:null===(r=u.operator)||void 0===r?void 0:r.name})]})]}),"hidden"===m&&(null==v?void 0:null===(l=v.roles)||void 0===l?void 0:l.is_editor)&&(0,i.jsxs)(c.Z,{className:"mb-3",variant:"warning",children:[(0,i.jsx)("div",{dangerouslySetInnerHTML:{__html:u.reason}}),(null==u?void 0:u.operator)?(0,i.jsxs)("div",{children:["操作者：",(0,i.jsx)("a",{href:null==u?void 0:null===(n=u.operator)||void 0===n?void 0:n.url,children:null==u?void 0:null===(a=u.operator)||void 0===a?void 0:a.name})]}):""]}),"locked"===m&&(0,i.jsxs)(c.Z,{className:"mb-3",variant:"warning",children:[(0,i.jsx)("div",{dangerouslySetInnerHTML:{__html:u.reason}}),(0,i.jsxs)("div",{children:["操作者：",(0,i.jsx)("a",{href:null==u?void 0:null===(o=u.operator)||void 0===o?void 0:o.url,children:null==u?void 0:null===(s=u.operator)||void 0===s?void 0:s.name}),(0,i.jsx)("br",{}),"操作者时间：",f().unix(null==u?void 0:u.operator_time).format("YYYY-MM-DD HH:mm")]})]})]})};var b=r(18934),w=r(58658),j=r(93413),y=r(3855),N=r(78661),k=r(619),Z=r(39118),_=r(75778),E=r(65895),z=r(64496),S=r(84875),F=r.n(S),A=r(49485),T=r(50112);let C=e=>{var t;let{data:l,type:n}=e,a=()=>{1===n&&new T.Z().saveEvent("aa_rdArticles_click"),2===n&&new T.Z().saveEvent("aa_relatedArticles_click")};return(0,i.jsxs)(z.Z,{as:"a",className:F()("d-flex align-items-center",1===n?"py-3":"py-2"),href:"".concat(null==l?void 0:l.url,"?utm_source=sf-similar-article"),target:"_blank",action:!0,active:!1,onClick:a,children:[(0,i.jsxs)("div",{children:[1===n?(0,i.jsx)("h5",{className:"mb-2 text-break text-body",children:null==l?void 0:l.title}):(0,i.jsx)("div",{className:"mb-0 text-break text-body",children:null==l?void 0:l.title}),1===n&&(0,i.jsx)("div",{className:"text-secondary font-size-14 text-truncate-1 mb-2",children:null==l?void 0:l.excerpt}),(0,i.jsxs)("p",{className:"d-flex align-items-center font-size-14 mb-0",children:[1===n&&(0,i.jsx)("span",{className:"text-primary  mr-13",children:null==l?void 0:null===(t=l.user)||void 0===t?void 0:t.name}),(null==l?void 0:l.votes)>0&&(0,i.jsxs)("span",{className:F()("text-secondary",1===n&&"mr-13"),children:["赞 ",(0,A.Ae)(null==l?void 0:l.votes)]}),2===n&&(null==l?void 0:l.votes)>0&&(0,i.jsx)("span",{className:"split-dot"}),(null==l?void 0:l.views)>0&&(0,i.jsxs)("span",{className:"text-secondary mr-13",children:["阅读 ",(0,A.Ae)(null==l?void 0:l.views)]}),1===n&&(null==l?void 0:l.comments)>0&&(0,i.jsxs)("span",{className:"text-secondary",children:["评论 ",(0,A.Ae)((null==l?void 0:l.comments)||0)]})]})]}),(null==l?void 0:l.cover)&&1===n&&(0,i.jsx)("picture",{className:"ms-3 d-none d-sm-block",children:(0,i.jsx)("img",{src:r(55296).Z.src,className:"rounded",style:{background:"no-repeat center url(".concat(null==l?void 0:l.cover,")"),backgroundSize:"cover"},alt:"封面图",width:"146",height:"82"})})]})};var H=a.memo(C);let L=(e,t)=>{let{title:r,list:l=[],type:n,className:a=""}=e;return l.length?(0,i.jsxs)(_.Z,{className:a,ref:t,children:[(0,i.jsx)(_.Z.Header,{className:"bg-transparent",children:(0,i.jsx)("strong",{children:r})}),(0,i.jsx)(E.Z,{variant:"flush",children:l.map((e,t)=>(0,i.jsx)(H,{data:e,type:n},"".concat(e.id).concat(t)))})]}):null},q=(0,a.forwardRef)(L),I=(0,i.jsx)(i.Fragment,{children:(0,i.jsx)(n(),{id:"a71179a83a8815ea",children:".recommend-list-wrap .card-header{-webkit-box-shadow:0rem -.06rem 0rem 0rem rgba(0,0,0,.13)inset;-moz-box-shadow:0rem -.06rem 0rem 0rem rgba(0,0,0,.13)inset;box-shadow:0rem -.06rem 0rem 0rem rgba(0,0,0,.13)inset}.mr-13{margin-right:13px}"})}),R=(e,t)=>(0,i.jsxs)(i.Fragment,{children:[I,(0,i.jsx)(q,{...e,ref:t})]});var O=(0,a.memo)((0,a.forwardRef)(R)),B=r(17515),D=r(29634);let M=e=>{let{isFixed:t,setFixedState:r}=e;(0,a.useEffect)(()=>{let e=D.Z.get("articleNavFixed");"true"===e&&r(!0)},[]);let l=e=>{let t=e.target.checked;r(t);let i=D.Z.get("articleNavFixed");String(t)!==i&&D.Z.set("articleNavFixed",t,{expires:7})},n=()=>{var e,t;let r=(null===(e=document.querySelector("#article-nav-list"))||void 0===e?void 0:e.offsetTop)||0,i=(null===(t=document.querySelector("#article-nav-list a.text-primary"))||void 0===t?void 0:t.offsetTop)||0,l=i-r,n=document.querySelector("#collapseTarget");l>232?n.scrollTop=232*Math.floor(l/232):n.scrollTop=0};return(0,i.jsxs)(_.Z,{className:"overflow-hidden d-none d-xl-flex","data-article-nav":!0,id:"articleNavCard",children:[(0,i.jsxs)(_.Z.Header,{className:"d-flex justify-content-between align-items-center  bg-white ",children:[(0,i.jsx)("strong",{className:"nav-header p-0",children:"文章目录"}),(0,i.jsx)(B.Z,{type:"switch",id:"follow-switch",className:"mb-0",checked:t,onChange:l,label:"跟随"})]}),(0,i.jsx)(_.Z.Body,{className:"p-0 py-2",onMouseLeave:n,id:"collapseTarget",children:(0,i.jsx)("nav",{id:"article-nav-list",className:"list-group list-group-flush d-flex flex-column font-size-14","data-article-nav-list":!0})})]})},P=(0,i.jsx)(i.Fragment,{children:(0,i.jsx)(n(),{id:"cad47faaef1227ac",children:".nav-header{cursor:pointer}"})}),W=e=>(0,i.jsxs)(i.Fragment,{children:[P,(0,i.jsx)(M,{...e})]});var Y=a.memo(W),U=r(88759),X=r(94071),Q=r(50111),$=r(18318),J=r(40941);let V=e=>{var t,r,l,n,a,s,d,c,u,m,v;let{user:h,title:p,isFollow:x,onFollow:f}=e,{articleHeaderAnimate:g}=(0,A.CA)();return(0,i.jsx)(U.Z,{bg:"light",expand:"lg",id:"article-header",className:F()("bg-white shadow-sm py-0 ",g?"fixed-top":"d-none",g),children:(0,i.jsxs)(o.Z,{style:{marginTop:"7px",marginBottom:"7px"},children:[(0,i.jsx)("h4",{className:"mb-0 text-truncate-1",style:{flex:1},children:p}),(0,i.jsxs)("div",{className:"sflex-center",children:[(0,i.jsxs)("a",{href:null==h?void 0:h.url,className:"d-flex align-items-center me-3",children:[(0,i.jsx)("picture",{className:"me-2 d-flex align-items-center",children:(0,i.jsx)($.Z,{width:32,height:32,src:null==h?void 0:h.avatar_url,headdress:null==h?void 0:h.headdress_worn,"aria-hidden":"true",itemProp:"image"})}),(0,i.jsxs)("div",{className:"font-size-14",children:[(0,i.jsxs)("div",{className:"d-flex",children:[(0,i.jsx)("strong",{className:"align-self-center",itemProp:"name",children:null==h?void 0:h.name}),(0,i.jsx)("ul",{className:"list-inline mb-0 authentication-info ms-1",children:!!(null==h?void 0:null===(t=h.user_auth)||void 0===t?void 0:t.is_auth)&&(0,i.jsx)("li",{className:"list-inline-item me-1",children:(null==h?void 0:null===(r=h.user_auth)||void 0===r?void 0:r.info)?(0,i.jsx)(X.Z,{placement:"bottom",overlay:(0,i.jsx)(Q.Z,{id:"tooltip-top",children:null==h?void 0:null===(l=h.user_auth)||void 0===l?void 0:l.info}),children:(0,i.jsx)("i",{className:F()("fas fa-badge-check",(null==h?void 0:null===(n=h.user_auth)||void 0===n?void 0:n.type)===1?"text-info":"text-warning")})}):(0,i.jsx)("i",{className:F()("fas fa-badge-check",(null==h?void 0:null===(a=h.user_auth)||void 0===a?void 0:a.type)===1?"text-info":"text-warning")})})})]}),(0,i.jsxs)("div",{className:"font-size-14 rank-wrap text-secondary",children:[(0,i.jsx)("span",{className:"me-1",style:{color:"#BF7158",fontWeight:"bold"},children:(0,A.Ae)(null==h?void 0:h.rank)}),(null==h?void 0:null===(s=h.summary_badges)||void 0===s?void 0:s.gold)?(0,i.jsxs)("span",{className:"d-inline-block me-1",children:[(0,i.jsx)("i",{className:"medal-circle fas fa-circle",style:{color:"#FFDA23"}}),null==h?void 0:null===(d=h.summary_badges)||void 0===d?void 0:d.gold]}):null,(null==h?void 0:null===(c=h.summary_badges)||void 0===c?void 0:c.silver)?(0,i.jsxs)("span",{className:"d-inline-block me-1",children:[(0,i.jsx)("i",{className:"medal-circle fas fa-circle",style:{color:"#C5C5C5"}}),null==h?void 0:null===(u=h.summary_badges)||void 0===u?void 0:u.silver]}):null,(null==h?void 0:null===(m=h.summary_badges)||void 0===m?void 0:m.bronze)?(0,i.jsxs)("span",{className:"d-inline-block",children:[(0,i.jsx)("i",{className:"medal-circle fas fa-circle",style:{color:"#CD9A62"}}),null==h?void 0:null===(v=h.summary_badges)||void 0===v?void 0:v.bronze]}):null]})]})]}),(0,i.jsx)(J.Z,{onClick:f,children:x?"已关注":"关注作者"})]})]})})};var G=r(80541),K=r(87710),ee=r(81661),et=r(17146),er=r(44868);let ei=new A.i8,el=e=>{var t,r,l,n,x,f,_;let{artDetail:E,action:z,match:S,dispatch:F,sessionUser:C,articleRelated:H,isBaiduOxApp:L=!1,quotedData:q,articleRecommendationList:I}=e,R=(0,u.k6)(),B=(0,a.useRef)(null),D=el.articleHtml;el.articleHtml=null,B.current=null==C?void 0:null===(t=C.user)||void 0===t?void 0:t.id;let{params:{aid:M,lang:P=null}}=S,{article:W={},actions:U,extra:X,member_actions:Q,tag:$={},blog:J={},description:en,keywords:ea,pay_info:eo,title:es}=E[M]||{},[ed,ec]=(0,a.useState)(null==W?void 0:null===(r=W.user)||void 0===r?void 0:r.followers),[eu,em]=(0,a.useState)((null==W?void 0:null===(l=W.user)||void 0===l?void 0:l.is_followed)?1:0),{is_editor:ev}=(null==C?void 0:C.roles)||{},eh=Number(null==W?void 0:null===(n=W.user)||void 0===n?void 0:n.id)===(null==C?void 0:null===(x=C.user)||void 0===x?void 0:x.id),[ep,ex]=(0,a.useState)(!1),[ef,eg]=(0,a.useState)(""),[eb,ew]=(0,a.useState)(!1),ej=(0,A.sA)();(0,a.useEffect)(()=>{new T.Z("aa_detailsPage_view",{type:"pageEvent"})},[]),(0,a.useEffect)(()=>{(0,m.isEmpty)(E[M])&&F({type:"articleDetail/getArtDetail",payload:{aid:M,lang:P},callback:e=>{"error"===e&&R.replace("/404")}})},[M]),(0,a.useEffect)(()=>{if(null==W?void 0:W.tags){var e;let t=null==W?void 0:W.tags.map(e=>e.name),r=null==t?void 0:t.join(",");(0,ee.Z)(r,null==C?void 0:null===(e=C.user)||void 0===e?void 0:e.rank)}},[null==W?void 0:W.tags]);let ey=()=>{F({type:"articleDetail/getArtDetail",payload:{aid:M,lang:P,isRefresh:!1},callback:()=>{}})};(0,a.useEffect)(()=>{let e=(0,A.Wz)(window.location.href,"openShare");ex("true"===e),(0,et.j)("article")},[]),(0,a.useEffect)(()=>{if(!(0,m.isEmpty)(W)){var e;em((null==W?void 0:null===(e=W.user)||void 0===e?void 0:e.is_followed)?1:0),F({type:"global/saveTitle",payload:{title:es,titleAlias:null==W?void 0:W.title}}),F({type:"global/pushPageUser",payload:{pathName:window.location.pathname,users:[W.user]}}),F({type:"global/saveHeadOptions",payload:{keywords:ea,description:en}});let t=document.querySelector(".article.fmt");if(setTimeout(()=>{ei.render(t)},1e3),window.onresize=()=>{if(document.body.clientWidth<576){var e;null===(e=document.querySelector("#first-ad"))||void 0===e||e.classList.remove("data-fix")}},document.body.clientWidth<576){let e=document.querySelectorAll("article.article img")||[];e.forEach(e=>{e.onchange=e=>{let t=e.currentTarget,r=t.getAttribute("src"),i=t.getAttribute("data-src"),l="";if(!(r=i||r))return;let n=r.indexOf("?");n>0&&(l=r.substring(n),r=r.substring(0,n)),r.match(/^\/img\//)&&!r.match(/\/view$/)&&(r=r+"/view"+l,t.setAttribute(i?"data-src":"src",r),t.setAttribute("data-src",r))}})}let r=document.querySelector("article.article img");if(r){let e=r.getAttribute("src"),t=r.getAttribute("data-src");(e=t||e)&&!(null==e?void 0:e.includes("http"))&&(e="".concat(window.location.origin).concat(e)),eg(e||"")}}eN(),W.id&&F({type:"articleDetail/getRelated",payload:M})},[W.id]);let eN=()=>{var e;let t=(null===(e=document.getElementById("second-ad"))||void 0===e?void 0:e.getBoundingClientRect().bottom)||0,r=document.documentElement.scrollTop||document.body.scrollTop;r&&t<0&&window.scrollTo(0,r+1)},ek=e=>{if("success"===e){var t;null===(t=document.querySelector("#rectangle-ad"))||void 0===t||t.classList.add("d-xl-flex")}},eZ=async()=>!!(0,er.bg)()&&(new T.Z("aa_detailsPage_followUser").clickEvent(),(0,K.ZNR)({id:null==W?void 0:W.user.id,type:"user",isFollow:eu?0:1}).then(e=>{ec((null==e?void 0:e.is_followed)?ed+1:ed-1),em(null==e?void 0:e.is_followed)}),!0),e_=(0,m.findIndex)(null==W?void 0:W.tags,{name:"招聘"})>-1||(0,m.findIndex)(null==W?void 0:W.tags,{name:"酷工作"})>-1;return E[M]?(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("div",{className:"d-none d-xl-flex justify-content-center",children:(0,i.jsx)(v.Z,{name:"2"})}),(0,i.jsx)(V,{title:null==W?void 0:W.title,user:null==W?void 0:W.user,onFollow:eZ,isFollow:eu}),(0,i.jsxs)(o.Z,{className:"article-content pt-3 pt-sm-0",children:[(0,i.jsx)(w.Z,{className:"mx-4 mx-md-0 d-none d-sm-block",data:e_?[{name:"招聘",url:"/jobs"},{name:"招聘详情",url:"###"}]:[{name:"专栏",url:"/blogs"},{name:(null==J?void 0:J.id)?J.name:null==$?void 0:$.name,url:(null==J?void 0:J.id)?J.url:"".concat(null==$?void 0:$.url,"/blogs")},{name:"文章详情",url:"###"}]}),(0,i.jsxs)(s.Z,{children:[(0,i.jsxs)(d.Z,{className:"col-xl w-0",xs:12,children:[(null==W?void 0:W.status_key)&&(null==X?void 0:X.reason)&&(0,i.jsx)(g,{id:M,extra:X,sessionUser:C,status:null==W?void 0:W.status_key}),(null==W?void 0:W.status_key)==="deleted"&&!(null==X?void 0:X.reason)&&(0,i.jsx)(c.Z,{className:"mb-3",variant:"warning",children:(0,i.jsx)("span",{children:"这篇文章已被删除"})}),(0,i.jsx)(h.Z,{id:null==W?void 0:W.id,actionData:{...z[M]},title:null==W?void 0:W.title,showShare:ep,banner:(null==W?void 0:W.cover)||ef,isAuthor:eh,source:"article"}),(0,i.jsx)(p.Z,{detail:E[M],articleHtml:D,actionData:z[M],actions:U,initPage:ey,imageUrl:W.cover,isEditor:ev,isAuthor:eh,memberActions:Q,lang:P,payInfo:eo,isBaiduOxApp:L}),(0,i.jsx)(k.Z,{className:"mb-4",data:q,id:M,source:"article"}),(0,i.jsx)("div",{className:"d-block d-xl-none my-4",children:(null==W?void 0:null===(f=W.user)||void 0===f?void 0:f.url)&&(0,i.jsx)(G.Z,{user:null==W?void 0:W.user,onFollow:eZ,isFollow:eu,followNum:ed})}),(0,i.jsx)(j.Z,{id:M,event_object:ej,user:W.user,isFetchComments:W.comments>0}),(0,m.isEmpty)(C)&&(0,i.jsx)(N.Js,{}),(0,i.jsx)(O,{title:"推荐阅读",className:"mt-4",type:1,list:I})]}),(0,i.jsx)(d.Z,{xs:12,className:"col-xl-auto w-xl-300 d-none d-xl-block p-0 right-side",children:(0,i.jsxs)(Z.Z,{top:82,bottomBoundary:".article-content",children:[(0,i.jsx)(Z.Z.Item,{className:"mb-4",children:(null==W?void 0:null===(_=W.user)||void 0===_?void 0:_.url)&&(0,i.jsx)(G.Z,{user:null==W?void 0:W.user,onFollow:eZ,isFollow:eu,followNum:ed})}),(0,i.jsx)(Z.Z.Item,{enabledSticky:!eb,children:(0,i.jsx)("div",{id:"rectangle-ad",className:"card border-0 overflow-hidden sflex-center float-ads mb-4 d-none",children:(0,i.jsx)(v.Z,{name:"1",callback:ek})})}),(0,i.jsx)(Z.Z.Item,{className:eb?"mb-4":"",enabledSticky:!0,children:(0,i.jsx)(O,{title:"相关文章",type:2,list:H})}),(0,i.jsx)(Z.Z.Item,{className:"my-4",children:(0,i.jsx)(y.Z,{})}),(0,i.jsx)(Z.Z.Item,{enabledSticky:eb,children:(0,i.jsx)(Y,{isFixed:eb,setFixedState:e=>{ew(e),eN()}})}),(0,i.jsx)(Z.Z.Item,{className:"mt-4",children:(0,i.jsx)(v.Z,{name:"31"})})]})})]}),(0,i.jsx)(b.Z,{}),(0,i.jsx)("div",{className:"d-block d-sm-none fix-bottom-action-wrap",children:(0,i.jsx)(h.Z,{id:null==W?void 0:W.id,actionData:{...z[M]},title:null==W?void 0:W.title,showShare:ep,banner:(null==W?void 0:W.cover)||ef,isAuthor:eh,source:"article",mode:"fixBottom"})})]})]}):null};el.articleHtml=null;let en=(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n(),{id:"3ac87742dc6d52b6",children:"html{scroll-behavior:unset!important;scroll-padding-top:60px}.article-content{margin-bottom:1.5rem}.article-content .userExcerpt p{margin-bottom:0!important}.article-content .col-md-90{width:120px}.article-content pre{position:relative}.right-side .right-block{margin-bottom:1.5rem}#article-header{border-top:2px solid#00965e}@media(max-width:767.98px){.article-content .col-md-90{width:100%}}@media(max-width:575.98px){.article-content.container{padding:0;padding-bottom:56px;padding-bottom:-webkit-calc(56px + constant(safe-area-inset-bottom));padding-bottom:-moz-calc(56px + constant(safe-area-inset-bottom));padding-bottom:calc(56px + constant(safe-area-inset-bottom));padding-bottom:-webkit-calc(56px + env(safe-area-inset-bottom));padding-bottom:-moz-calc(56px + env(safe-area-inset-bottom));padding-bottom:calc(56px + env(safe-area-inset-bottom));overflow-x:hidden}}.medal-circle{-webkit-transform:scale(.4)!important;-moz-transform:scale(.4)!important;-ms-transform:scale(.4)!important;-o-transform:scale(.4)!important;transform:scale(.4)!important}"}),(0,i.jsx)(n(),{id:"eb1a012af2479eb7",children:'@charset "UTF-8";.fmt,.tui-editor-contents,.preview-wrap{line-height:1.6}.fmt p,.fmt address,.fmt ul,.fmt ol,.fmt dl,.fmt pre,.fmt blockquote,.fmt table,.fmt figure,.fmt hr,.tui-editor-contents p,.tui-editor-contents address,.tui-editor-contents ul,.tui-editor-contents ol,.tui-editor-contents dl,.tui-editor-contents pre,.tui-editor-contents blockquote,.tui-editor-contents table,.tui-editor-contents figure,.tui-editor-contents hr,.preview-wrap p,.preview-wrap address,.preview-wrap ul,.preview-wrap ol,.preview-wrap dl,.preview-wrap pre,.preview-wrap blockquote,.preview-wrap table,.preview-wrap figure,.preview-wrap hr{margin-bottom:1.25rem}.fmt ol ol,.fmt ol ul,.fmt ul ol,.fmt ul ul,.tui-editor-contents ol ol,.tui-editor-contents ol ul,.tui-editor-contents ul ol,.tui-editor-contents ul ul,.preview-wrap ol ol,.preview-wrap ol ul,.preview-wrap ul ol,.preview-wrap ul ul{margin-bottom:0}.fmt li>p:last-of-type,.tui-editor-contents li>p:last-of-type,.preview-wrap li>p:last-of-type{margin-bottom:0!important}.fmt h1,.tui-editor-contents h1,.preview-wrap h1{font-size:2rem;margin:2.75rem 0 1rem;padding-bottom:.5rem;border-bottom:3px double rgba(0,0,0,.1)}.fmt h2,.tui-editor-contents h2,.preview-wrap h2{font-size:1.75rem;margin:2.5rem 0 1rem;padding-bottom:.5rem;border-bottom:1px double rgba(0,0,0,.1)}.fmt h3,.tui-editor-contents h3,.preview-wrap h3{font-size:1.5rem;margin:2.25rem 0 1rem}.fmt h4,.tui-editor-contents h4,.preview-wrap h4{font-size:1.25rem;margin:2rem 0 1rem}.fmt h5,.tui-editor-contents h5,.preview-wrap h5{font-size:1rem;margin:1.75rem 0 1rem}.fmt h6,.tui-editor-contents h6,.preview-wrap h6{font-size:1rem;margin:1.5rem 0 .5rem}.fmt h6::before,.tui-editor-contents h6::before,.preview-wrap h6::before{content:"❐";margin-right:.25rem}.fmt blockquote,.tui-editor-contents blockquote,.preview-wrap blockquote{padding-left:1rem;border-left:.25rem solid#e9ecef}.fmt pre,.tui-editor-contents pre,.preview-wrap pre{padding:1rem;max-height:35rem;line-height:1.5;background-color:#e9ecef;overflow:auto}.fmt pre code,.tui-editor-contents pre code,.preview-wrap pre code{word-wrap:normal;overflow-wrap:normal;white-space:inherit}.fmt hr,.tui-editor-contents hr,.preview-wrap hr{margin:2rem auto;max-width:160px;border-top-width:2px}.fmt img,.tui-editor-contents img,.preview-wrap img{max-width:100%}.fmt table,.tui-editor-contents table,.preview-wrap table{border:1px solid#dee2e6;width:100%;table-layout:fixed}.fmt table td,.fmt table th,.tui-editor-contents table td,.tui-editor-contents table th,.preview-wrap table td,.preview-wrap table th{padding:.75rem;border:1px solid#dee2e6;word-wrap:break-word}.fmt table [align="center"],.tui-editor-contents table [align="center"],.preview-wrap table [align="center"]{text-align:center}.fmt table [align="right"],.tui-editor-contents table [align="right"],.preview-wrap table [align="right"]{text-align:right}.fmt table thead th,.tui-editor-contents table thead th,.preview-wrap table thead th{border-bottom-width:2px;background-color:#e9ecef;color:#212529;font-weight:bold}.fmt table tbody tr:hover,.tui-editor-contents table tbody tr:hover,.preview-wrap table tbody tr:hover{background-color:rgba(0,0,0,.025)}.fmt .img-wrap,.tui-editor-contents .img-wrap,.preview-wrap .img-wrap{display:block;text-align:center}article.fmt a img{cursor:pointer}article.fmt img{cursor:-webkit-zoom-in;cursor:-moz-zoom-in;cursor:zoom-in}'})]}),ea=e=>(0,i.jsxs)(i.Fragment,{children:[en,(0,i.jsx)(el,{...e})]});var eo=!0,es=(0,u.$j)(e=>{let{articleDetail:t,action:r,global:i}=e;return{...t,action:r,sessionUser:i.sessionUser,isBaiduOxApp:i.isBaiduOxApp}})(ea)},95544:function(e,t,r){"use strict";r.d(t,{Z:function(){return f}});var i=r(84875),l=r.n(i),n=r(50959),a=r(42530),o=r(23005),s=r(11527);let d=n.forwardRef(({active:e,disabled:t,className:r,style:i,activeLabel:n,children:a,...d},c)=>{let u=e||t?"span":o.Z;return(0,s.jsx)("li",{ref:c,style:i,className:l()(r,"page-item",{active:e,disabled:t}),children:(0,s.jsxs)(u,{className:"page-link",disabled:t,...d,children:[a,e&&n&&(0,s.jsx)("span",{className:"visually-hidden",children:n})]})})});function c(e,t,r=e){let i=n.forwardRef(({children:e,...i},l)=>(0,s.jsxs)(d,{...i,ref:l,children:[(0,s.jsx)("span",{"aria-hidden":"true",children:e||t}),(0,s.jsx)("span",{className:"visually-hidden",children:r})]}));return i.displayName=e,i}d.defaultProps={active:!1,disabled:!1,activeLabel:"(current)"},d.displayName="PageItem";let u=c("First","\xab"),m=c("Prev","‹","Previous"),v=c("Ellipsis","…","More"),h=c("Next","›"),p=c("Last","\xbb"),x=n.forwardRef(({bsPrefix:e,className:t,size:r,...i},n)=>{let o=(0,a.vE)(e,"pagination");return(0,s.jsx)("ul",{ref:n,...i,className:l()(t,o,r&&`${o}-${r}`)})});x.displayName="Pagination";var f=Object.assign(x,{First:u,Prev:m,Ellipsis:v,Item:d,Next:h,Last:p})}},function(e){e.O(0,[9110,8119,9701,8072,3413,1900,9774,2888,179],function(){return e(e.s=72442)}),_N_E=e.O()}]);