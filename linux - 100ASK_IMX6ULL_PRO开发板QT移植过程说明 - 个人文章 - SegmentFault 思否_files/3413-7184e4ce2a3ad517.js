"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3413],{93413:function(e,t,s){s.d(t,{Z:function(){return ey}});var n=s(11527),a=s(4270),i=s.n(a),l=s(50959),r=s(75778),c=s(65895),d=s(64496),o=s(23970),m=s(15057),u=s(32699),p=s(18318),h=s(78661),x=s(87710),f=s(49485),j=s(44868);let v=e=>{var t,s;let{sessionUser:a,item:i,onEditComment:r,onEdit:c,onRemove:d,onReport:o}=e,[m,u]=(0,l.useState)(i.is_liked),[p,h]=(0,l.useState)(i.votes),v=(e,t)=>{t.preventDefault(),(0,j.bg)()&&(0,x.arA)({id:e.id,is_like:e.is_liked?0:1}).then(()=>{h(m?p-1:p+1),u(!m)})},g=(null===(t=i.member_actions)||void 0===t?void 0:t.filter(e=>"edit"===e.action).length)>0,y=(null===(s=i.member_actions)||void 0===s?void 0:s.filter(e=>"delete"===e.action).length)>0;return(0,n.jsxs)("div",{className:"handle-bar font-size-14 d-flex justify-content-between",children:[(0,n.jsxs)("div",{children:[(0,n.jsxs)("a",{className:"text-secondary",href:"###",onClick:e=>v(i,e),children:[(0,n.jsx)("span",{className:"mainLike-comment ".concat(m?"text-primary":""),children:(0,n.jsx)("i",{className:"fa-w-16 ".concat(m?"fas fa-thumbs-up":"far fa-thumbs-up"),style:{width:"1em"}})}),p>0&&(0,n.jsx)("span",{className:"mainLike-commentNum ms-1",children:p})]}),(0,n.jsx)("span",{className:"split-dot"}),(0,n.jsx)("a",{className:"text-secondary btn-comment",href:"###",onClick:e=>{r(i,"",e)},children:"回复"}),(0,n.jsx)("span",{className:"split-dot"}),(0,n.jsx)("span",{className:"text-secondary",children:(0,f.dq)(i.created)}),(null==i?void 0:i.ip_address)&&(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("span",{className:"split-dot"}),(0,n.jsxs)("span",{className:"text-secondary",children:["来自",i.ip_address]})]})]}),(0,n.jsxs)("div",{className:"control-area d-none",children:[a&&g&&(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("a",{className:"text-secondary edit",href:"###",onClick:e=>{e.preventDefault(),c(i)},children:"编辑"}),(0,n.jsx)("span",{className:"split-dot"})]}),a&&y&&(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("a",{className:"text-secondary delete",href:"###",onClick:e=>d(i.id,e),children:"删除"}),(0,n.jsx)("span",{className:"split-dot"})]}),a&&(0,n.jsx)("a",{className:"text-secondary comment-report",href:"###",onClick:e=>o(i,e),children:"举报"})]})]})};var g=(0,o.$j)(e=>{let{global:t}=e;return{sessionUser:t.sessionUser}})(l.memo(v)),y=s(92061),b=s(28554),N=s(25487),w=s(94071),D=s(21713),E=s(79852),C=s(34940),_=s(57898);let k=["\uD83D\uDE00","\uD83D\uDE01","\uD83E\uDD23","\uD83D\uDE02","\uD83D\uDE04","\uD83D\uDE05","\uD83D\uDE06","\uD83D\uDE11","\uD83D\uDE12","\uD83D\uDE44","\uD83E\uDD14","\uD83D\uDE33","\uD83D\uDE1E","\uD83D\uDE21","\uD83D\uDE31","\uD83D\uDE37","\uD83D\uDC4D","\uD83D\uDC4E","\uD83D\uDC4A","\uD83D\uDC4C","\uD83E\uDD1D","\uD83D\uDE35","\uD83E\uDD19","\uD83E\uDD2B","\uD83D\uDE48","\uD83D\uDE49","\uD83D\uDE4A"],Z=e=>{let{onSelected:t}=e,s=(0,f.Fe)();return"sf_app"===s?null:(0,n.jsx)(w.Z,{trigger:"click",placement:"bottom",rootClose:!0,overlay:(0,n.jsx)(D.Z,{className:"p-3",children:(0,n.jsx)(E.Z,{children:k.map((e,s)=>(0,n.jsx)(C.Z,{xs:2,children:(0,n.jsx)(_.Z,{variant:"link",className:"m-0 p-0 font-size-24 btn-no-border",onClick:()=>t(e),children:e})},s))})}),children:(0,n.jsx)("a",{href:"###",className:"me-3",onClick:e=>{e.preventDefault()},"aria-label":"提示",tabIndex:-1,children:(0,n.jsx)("i",{className:"far fa-face-laugh text-secondary"})})},"bottom")},S=(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(i(),{id:"b3e1b6a7c9b96113",children:""})}),I=e=>(0,n.jsxs)(n.Fragment,{children:[S,(0,n.jsx)(Z,{...e})]});var R=s(40941),F=s(16983),z=s(76734);let U=e=>{let{element:t,children:s,pageUsers:a}=e,[i,r]=(0,l.useState)([]),c=(0,l.useRef)(null),[d,o]=(0,l.useState)(""),[m,h]=(0,l.useState)([]),[f,j]=(0,l.useState)(0),[v,g]=(0,l.useState)(!1);(0,l.useEffect)(()=>{if(t)return t.addEventListener("input",y),()=>{t.removeEventListener("input",y)}},[t]),(0,l.useEffect)(()=>{let e=a[window.location.pathname];h((0,u.uniqBy)(e?[...e,...i]:[...i],"id"))},[a,i,d]);let y=()=>{let{value:e,selectionStart:s=0}=t;if(0>e.indexOf("@")&&o(""),!s)return;let n=e.substring(e.substring(0,s).lastIndexOf("@"),s);!(0>n.substring(n.lastIndexOf(" "),s).indexOf("@"))&&(o(n.substring(1)),n.substring(1)&&!v&&(g(!0),(0,x.LIC)().then(e=>{r(e)})))},b=e=>{let{value:s,selectionStart:n=0}=t;if(!n)return;let a=s.substring(s.substring(0,n).lastIndexOf("@"),n),i="@".concat(null==e?void 0:e.name,"[").concat(null==e?void 0:e.slug,"] ");t.value="".concat(s.substring(0,s.substring(0,n).lastIndexOf("@"))).concat(i).concat(s.substring(n)),h([]),o("");let l=n+i.length-a.length;t.setSelectionRange(l,l),t.focus()},N=d?m.filter(e=>0===e.name.indexOf(d)||0===e.slug.indexOf(d)):[],w=e=>{let t=e.keyCode;if(38===t&&f>0&&(e.preventDefault(),j(f-1)),40===t&&f<N.length-1&&(e.preventDefault(),j(f+1)),13===t&&f>-1&&f<=N.length-1){e.preventDefault();let t=N[f];b(t),j(0)}};return(0,n.jsxs)(F.Z,{className:"mentions-wrap",show:N.length>0,onKeyDown:w,children:[s,(0,n.jsx)(F.Z.Toggle,{as:z.Z,domType:"div",id:"mentions-toggle"}),(0,n.jsx)(F.Z.Menu,{className:N.length>0?"visabled":"hidden",ref:c,children:N.filter((e,t)=>t<5).map((e,t)=>(0,n.jsxs)(F.Z.Item,{className:"d-flex align-items-center ".concat(f===t?"bg-gray-200":""),onClick:()=>b(e),children:[(0,n.jsx)(p.Z,{className:"me-2",src:e.avatar_url,width:24,height:24,headdress:null==e?void 0:e.headdress_worn}),(0,n.jsx)("span",{className:"text-body me-1",children:e.name}),(0,n.jsxs)("small",{className:"text-secondary",children:["@",e.slug]})]},t))})]})},q=(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(i(),{id:"d6a7c16d4796689",children:".mentions-wrap .dropdown-toggle::after{display:none}"})}),B=e=>(0,n.jsxs)(n.Fragment,{children:[q,(0,n.jsx)(U,{...e})]});var T=(0,o.$j)(e=>{let{global:t}=e;return{pageUsers:t.pageUsers}})(l.memo(B)),O=s(50112);let M=!0,V=e=>{var t,s;let{commentContent:a,inputRef:i,setCommentContent:r,onComment:c,sessionUser:d,defaultVisableTip:o=!1}=e,[m,u]=(0,l.useState)(o),[h,x]=(0,l.useState)({isInvalid:!1,msg:""}),f=e=>{x(e)},v=e=>{let t=e.keyCode;13===t&&(e.ctrlKey||e.metaKey)&&M&&a&&(M=!1,setTimeout(()=>{M=!0},700),c({item:"comment",callback:f}))};(0,l.useEffect)(()=>{o!==m&&u(o)},[o]);let g=e=>{let t=i.current,{value:s,selectionStart:n=0}=t,a=s.slice(0,n)+e+s.slice(n);r(a);let l=n+e.length;t.setSelectionRange(l,l),t.focus()},w=()=>(new O.Z("aa_detailsPage_comment").clickEvent(),c({item:"comment",callback:f}));return(0,n.jsx)(n.Fragment,{children:(0,n.jsxs)("div",{className:"mb-4 media",onKeyDown:v,tabIndex:1,children:[(0,n.jsx)(p.Z,{src:null==d?void 0:null===(t=d.user)||void 0===t?void 0:t.avatar_url,className:"me-3",width:38,height:38,"aria-hidden":"true",headdress:null==d?void 0:null===(s=d.user)||void 0===s?void 0:s.headdress_worn}),(0,n.jsxs)("div",{className:"media-body",children:[(0,n.jsx)(y.Z,{className:"mb-3",children:(0,n.jsxs)(T,{element:i.current,children:[(0,n.jsx)(b.Z.Control,{as:"textarea",rows:1,ref:i,value:a,onChange:e=>{r(e.target.value)},className:"comment-text",placeholder:"撰写评论 …",onFocus:e=>{(0,j.bg)()||(e.preventDefault(),i.current.blur())},"aria-label":"评论",isInvalid:h.isInvalid}),(0,n.jsx)(b.Z.Control.Feedback,{type:"invalid",children:h.msg})]})}),(0,n.jsxs)("div",{className:"d-flex justify-content-end align-items-center",children:[(0,n.jsx)("a",{href:"###",className:"me-3",onClick:e=>{e.preventDefault(),u(!m)},"aria-label":"提示",tabIndex:-1,children:(0,n.jsx)("i",{className:"far fa-circle-info text-secondary"})}),(0,n.jsx)(I,{onSelected:g}),(0,n.jsx)(R.Z,{className:"float-end",onClick:w,disabled:!a,children:"提交评论"})]}),(0,n.jsxs)(N.Z,{show:m,variant:"info",className:"mt-3 my-0 font-size-14",children:["评论支持部分 Markdown 语法：",(0,n.jsx)("code",{children:"**粗体** _斜体_ [链接](http://example.com) `代码` - 列表 > 引用"}),"。你还可以使用 ",(0,n.jsx)("code",{children:"@ "}),"来通知其他用户。"]})]})]})})};var K=(0,o.$j)(e=>{let{global:t}=e;return{sessionUser:t.sessionUser}})(l.memo(V));let L=e=>{let{isChild:t=!1,item:s,parentItem:a,onChangeOfComment:i,onComment:r}=e,c=(0,l.useRef)(null);(0,l.useEffect)(()=>{if(c.current&&((0,m.Z)(c.current),s.original_text)){let e=s.original_text.length;c.current.setSelectionRange(e,e)}},[c]);let d=e=>{a?i({...s,original_text:e},a):i({...s,original_text:e})},o=e=>{let t=c.current;if(!t)return;let{value:s,selectionStart:n=0}=t,a=s.slice(0,n)+e+s.slice(n);d(a);let i=n+e.length;t.setSelectionRange(i,i),t.focus()};return(0,n.jsxs)(b.Z,{className:"edit-form ".concat(t?"edit-reply-form":""),children:[(0,n.jsxs)(y.Z,{className:"mb-3",children:[(0,n.jsx)(b.Z.Control,{as:"textarea",className:"comment-text",rows:1,ref:c,autoFocus:!0,value:s.original_text,size:"sm",onChange:e=>{d(e.target.value)},placeholder:"撰写评论 ...",isInvalid:s.isInvalid}),(0,n.jsx)(b.Z.Control.Feedback,{type:"invalid",children:s.errorMsg})]}),(0,n.jsxs)("div",{className:"my-3 d-flex align-items-center justify-content-end",children:[(0,n.jsx)(I,{onSelected:o}),(0,n.jsx)(_.Z,{variant:"outline-secondary",size:"sm",className:"me-2 edit-top-comment-cancel-btn cancelEdit",onClick:()=>{a?i({...s,isEdit:!1},a):i({...s,isEdit:!1})},children:"取消"}),(0,n.jsx)(_.Z,{size:"sm",onClick:()=>r({item:s,parentItem:a}),disabled:!s.original_text,children:"提交"})]})]})},P=(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(i(),{id:"fbbcc7eb8f14ecf0",children:".edit-form .comment-text{overflow:hidden;word-wrap:break-word;overflow-wrap:break-word;resize:none;min-height:31px}.edit-form.edit-reply-form .comment-text{overflow:hidden;word-wrap:break-word;overflow-wrap:break-word;resize:none;min-height:31px;height:29px}"})}),A=e=>(0,n.jsxs)(n.Fragment,{children:[P,(0,n.jsx)(L,{...e})]});var $=l.memo(A),H=s(95544);let Q=e=>{let{total:t,page:s,getData:a}=e,i=()=>{let e=document.getElementById("comment-area"),t=e.getBoundingClientRect().top+window.pageYOffset+-65;window.scrollTo({top:t})},l=e=>{a(e),i()};return(0,n.jsx)("div",{className:"d-flex justify-content-center mt-4 mb-1",children:(0,n.jsxs)(H.Z,{size:"sm",className:"mb-0",children:[(0,n.jsx)(H.Z.Item,{disabled:1===s,onClick:()=>l(s-1),children:"上一页"}),[...Array(Math.ceil(t/15))].map(()=>0).map((e,t)=>(0,n.jsx)(H.Z.Item,{active:s===t+1,onClick:()=>l(t+1),children:t+1},"page".concat(t))),(0,n.jsx)(H.Z.Item,{disabled:s===[...Array(Math.ceil(t/15))].map(()=>0).length,onClick:()=>l(s+1),children:"下一页"})]})})};var Y=(0,o.$j)(e=>{let{global:t}=e;return{sessionUser:t.sessionUser}})(l.memo(Q)),G=s(38989),W=s(50111);let X=!0,J={min:2,max:600},ee=e=>{let{commentContent:t,isShowComment:s,inputRef:a,setCommentContent:i,onComment:c,sessionUser:d,defaultVisableTip:o=!1}=e,[m,u]=(0,l.useState)(t.length>280),[p,h]=(0,l.useState)(o),[x,f]=(0,l.useState)({isInvalid:!1,msg:""});(0,l.useEffect)(()=>{o!==p&&h(o)},[o]),(0,l.useEffect)(()=>{u(t.length>280)},[t]),(0,l.useEffect)(()=>{s&&a.current.focus()},[s]);let v=e=>{f(e)},g=e=>{let t=e.keyCode;13===t&&(e.ctrlKey||e.metaKey)&&X&&(X=!1,setTimeout(()=>{X=!0},700),c({item:"comment",callback:v}))},w=e=>{let t=a.current,{value:s,selectionStart:n=0}=t,l=s.slice(0,n)+e+s.slice(n);i(l);let r=n+e.length;t.setSelectionRange(r,r),t.focus()},D=()=>(new O.Z("qa_detailsPage_commentQuestion").clickEvent(),c({item:"comment",callback:v}));return(0,n.jsx)(r.Z,{className:"bg-light border-0 mt-2 ".concat(s?"":"hidden"),onKeyDown:g,tabIndex:2,children:(0,n.jsxs)(r.Z.Body,{children:[(0,n.jsxs)("div",{className:"media-body",children:[(0,n.jsxs)(y.Z,{className:"mb-3",children:[(0,n.jsxs)(T,{element:a.current,children:[(0,n.jsx)(b.Z.Control,{as:"textarea",rows:1,ref:a,value:t,size:"sm",onChange:e=>{i(e.target.value)},className:"comment-text",placeholder:"给问答点赞就是支持，请勿在评论里发布“+1、感谢”等信息",onFocus:e=>{d||(e.preventDefault(),(0,j.bg)(),a.current.blur())},isInvalid:x.isInvalid}),(0,n.jsx)(b.Z.Control.Feedback,{type:"invalid",children:x.msg})]}),(0,n.jsx)(G.Z,{target:a.current,show:s&&m,placement:"top",children:e=>(0,n.jsx)(W.Z,{className:"qa-tooltip",...e,children:"你正在输入大段内容，如果是回答或补充信息，请直接编辑原文"})})]}),(0,n.jsxs)("div",{className:"d-flex flex-md-row flex-column justify-content-md-between align-items-md-center",children:[(0,n.jsx)("small",{className:"text-secondary",children:"评论用于指出存在的问题，提醒作者澄清改进，请勿在评论里回答或补充信息"}),(0,n.jsxs)("div",{className:"d-flex align-items-center justify-content-end",children:[(0,n.jsx)("a",{href:"###",className:"me-3",onClick:e=>{e.preventDefault(),h(!p)},"aria-label":"提示",tabIndex:-1,children:(0,n.jsx)("i",{className:"far fa-circle-info text-secondary"})}),(0,n.jsx)(I,{onSelected:w}),(0,n.jsx)(R.Z,{size:"sm",className:"float-end",onClick:D,disabled:!t||t.length<J.min||t.length>J.max,children:"提交评论"})]})]})]}),(0,n.jsxs)(N.Z,{show:p,variant:"info",className:"mt-3 my-0 font-size-14",children:["评论支持部分 Markdown 语法：",(0,n.jsx)("code",{children:"**粗体** _斜体_ [链接](http://example.com) `代码` - 列表 > 引用"}),"。你还可以使用 ",(0,n.jsx)("code",{children:"@ "}),"来通知其他用户。"]})]})})},et=(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(i(),{id:"2a897c3644246ea1",children:".qa-tooltip .tooltip-inner{max-width:408px!important}"})}),es=e=>(0,n.jsxs)(n.Fragment,{children:[et,(0,n.jsx)(ee,{...e})]});var en=(0,o.$j)(e=>{let{global:t}=e;return{sessionUser:t.sessionUser}})(l.memo(es));let ea=!0,ei={min:2,max:600},el=["question","answer"],er=e=>{let{item:t,parentItem:s,onChangeOfComment:a,onComment:i,className:r,onEditComment:c,defaultVisableTip:d=!1,mode:o}=e,u=el.includes(o)?'给问答点赞就是支持，请勿在评论里发布“+1、感谢”等信息"':"撰写评论 …",[p,h]=(0,l.useState)(!1),[x,f]=(0,l.useState)(d),j=(0,l.useRef)(null),[v,g]=(0,l.useState)({isInvalid:!1,msg:""}),{commentVal:w=""}=t||{};(0,l.useEffect)(()=>{el.includes(o)&&h(w.length>280)},[w]),(0,l.useEffect)(()=>{d!==x&&f(d)},[d]),(0,l.useEffect)(()=>{if((null==j?void 0:j.current)&&((0,m.Z)(j.current),t.commentVal)){let e=t.commentVal.length;j.current.setSelectionRange(e,e)}},[j]);let D=e=>{g(e)},E=e=>{let n=e.keyCode;13===n&&(e.ctrlKey||e.metaKey)&&ea&&(ea=!1,setTimeout(()=>{ea=!0},700),i({item:t,parentItem:s,callback:D}))},C=e=>{s?a({...t,commentVal:e},s):a({...t,commentVal:e})},_=e=>{let t=j.current;if(!t)return;let{value:s,selectionStart:n=0}=t,a=s.slice(0,n)+e+s.slice(n);C(a);let i=n+e.length;t.setSelectionRange(i,i),t.focus()},k=()=>(new O.Z("qa_detailsPage_commentAnswer").clickEvent(),i({item:t,parentItem:s,callback:D}));return(0,n.jsxs)(b.Z,{className:"card-body add-comment-form ".concat(r),onKeyDown:E,children:[(0,n.jsxs)(y.Z,{className:"mb-3",children:[(0,n.jsxs)("small",{className:"text-secondary",children:["回复"," ",(0,n.jsxs)("a",{href:t.user.url,onClick:e=>{s?c(t,s,e):c(t,"",e)},children:[t.user.name," \xd7"]})]}),(0,n.jsxs)(T,{element:j.current,children:[(0,n.jsx)(b.Z.Control,{as:"textarea",value:t.commentVal,autoFocus:!0,ref:j,size:"sm",rows:1,onChange:e=>{C(e.target.value)},className:"form-control form-control-sm comment-reply mt-2",placeholder:u,isInvalid:v.isInvalid}),(0,n.jsx)(b.Z.Control.Feedback,{type:"invalid",children:v.msg})]}),(0,n.jsx)(G.Z,{target:j.current,show:x&&p,placement:"top",children:e=>(0,n.jsx)(W.Z,{className:"qa-tooltip",...e,children:"你正在输入大段内容，如果是回答或补充信息，请直接编辑原文"})})]}),(0,n.jsxs)("div",{className:"d-flex flex-md-row flex-column justify-content-md-between align-items-md-center",children:[(0,n.jsx)("small",{className:"text-secondary",children:"评论用于指出存在的问题，提醒作者澄清改进，请勿在评论里回答或补充信息"}),(0,n.jsxs)("div",{className:"d-flex align-items-center justify-content-end",children:[(0,n.jsx)("a",{href:"###",className:"me-3",onClick:e=>{e.preventDefault(),f(!x)},tabIndex:-1,children:(0,n.jsx)("i",{className:"far fa-circle-info text-secondary"})}),(0,n.jsx)(I,{onSelected:_}),(0,n.jsx)(R.Z,{size:"sm",className:"float-end",onClick:k,disabled:!w||w.length<ei.min||w.length>ei.max,children:"提交评论"})]})]}),(0,n.jsxs)(N.Z,{show:x,variant:"info",className:"mt-3 my-0 font-size-14",children:["评论支持部分 Markdown 语法：",(0,n.jsx)("code",{children:"**粗体** _斜体_ [链接](http://example.com) `代码` - 列表 > 引用"}),"。你还可以使用 ",(0,n.jsx)("code",{children:"@ "}),"来通知其他用户。"]})]})};var ec=l.memo(er);let ed=e=>{var t,s;let{sessionUser:a,item:i,subItem:r,onEditComment:c,onEdit:d,onRemove:o,onReport:m}=e,[u,p]=(0,l.useState)(r.is_liked),[h,v]=(0,l.useState)(r.votes),g=(e,t)=>{t.preventDefault(),(0,j.bg)()&&(0,x.arA)({id:e.id,is_like:e.is_liked?0:1}).then(()=>{v(u?h-1:h+1),p(!u)})},y=(null===(t=r.member_actions)||void 0===t?void 0:t.filter(e=>"edit"===e.action).length)>0,b=(null===(s=r.member_actions)||void 0===s?void 0:s.filter(e=>"delete"===e.action).length)>0;return(0,n.jsxs)("div",{className:"handle-bar font-size-14 d-flex justify-content-between",children:[(0,n.jsxs)("div",{children:[(0,n.jsxs)("a",{className:"text-secondary",href:"###",onClick:e=>g(r,e),children:[(0,n.jsx)("span",{className:"mainLike-comment ".concat(u?"text-primary":""),children:(0,n.jsx)("i",{className:"fa-w-16 ".concat(u?"fas fa-thumbs-up":"far fa-thumbs-up"),style:{width:"1em"}})}),h>0&&(0,n.jsx)("span",{className:"mainLike-commentNum  ms-1",children:h})]}),(0,n.jsx)("span",{className:"split-dot"}),(0,n.jsx)("a",{className:"text-secondary btn-reply",href:"###",onClick:e=>{c(r,i,e)},children:"回复"}),(0,n.jsx)("span",{className:"split-dot"}),(0,n.jsx)("span",{className:"text-secondary",children:(0,f.dq)(r.created)})]}),(0,n.jsxs)("div",{className:"comment-control-area d-none",children:[a&&y&&(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("a",{className:"text-secondary edit",href:"###",onClick:e=>{e.preventDefault(),d(r,i)},children:"编辑"}),(0,n.jsx)("span",{className:"split-dot"})]}),a&&b&&(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("a",{className:"text-secondary delete",href:"###",onClick:e=>o(r.id,e),children:"删除"}),(0,n.jsx)("span",{className:"split-dot"})]}),a&&(0,n.jsx)("a",{className:"text-secondary reply-report",href:"###",onClick:e=>m(r,e),children:"举报"})]})]})};var eo=(0,o.$j)(e=>{let{global:t}=e;return{sessionUser:t.sessionUser}})(l.memo(ed)),em=s(81159);let eu=e=>{let{allTotal:t,sort:s,setSort:a,aId:i}=e;return(0,n.jsxs)(r.Z.Header,{className:"d-flex align-items-center justify-content-between bg-transparent",children:[(0,n.jsxs)("strong",{children:[t," 条评论"]}),(0,n.jsxs)(em.Z,{"aria-label":"Basic",children:[(0,n.jsx)(_.Z,{as:"a",href:"/a/".concat(i,"?sort=votes"),size:"sm",variant:"votes"===s?"secondary":"outline-secondary",onClick:e=>{e.preventDefault(),a("votes")},children:"得票"}),(0,n.jsx)(_.Z,{as:"a",href:"/a/".concat(i,"?sort=newest"),size:"sm",variant:"newest"===s?"secondary":"outline-secondary",onClick:e=>{e.preventDefault(),a("newest")},children:"最新"})]})]})};var ep=l.memo(eu),eh=s(51458);let ex="",ef=["question","answer"],ej=e=>{let{id:t,mode:s="article",isShowComment:a=!1,setCommentState:i,event_object:v,user:y={},isFetchComments:b=!0,sessionUser:N}=e,{rank:w=0}=(null==N?void 0:N.user)||{},D=(0,l.useRef)(null),[E,C]=(0,l.useState)(""),_=(0,o.I0)(),{location:{query:k={}}}=(0,o.k6)();D.current&&(D.current.value=E);let[Z,S]=(0,l.useState)([]),[I,R]=(0,l.useState)({isShow:!1,id:""}),[F,z]=(0,l.useState)({page:1,init:!0}),[U,q]=(0,l.useState)(0),[B,T]=(0,l.useState)(0),[O,M]=(0,l.useState)("newest"===k.sort?"newest":"votes"),[V,L]=(0,l.useState)(!1),[P,A]=(0,l.useState)(!1),H=(0,l.useRef)({}),[Q,G]=(0,l.useState)(!1);(0,l.useEffect)(()=>{D.current&&(0,m.Z)(D.current)},[D]),(0,l.useEffect)(()=>{z({page:1,init:!0})},[t]),(0,l.useEffect)(()=>{if(!b){S([]);return}1===F.page&&!0===F.init&&X()},[F,b]),(0,l.useEffect)(()=>{if(!Q){G(!0);return}z({page:1,init:!0})},[O]),(0,l.useEffect)(()=>{V&&(Z.map(e=>(e.hidden=!1,e)),S((0,u.orderBy)(Z,["created"])))},[V]),(0,l.useEffect)(()=>{if(!((0,u.isEmpty)(Z)||(0,u.isEmpty)(v))&&String(t)===String(v.root.object_id)&&s===v.root.type&&String(t)===String(v.root.object_id)&&"comment"===v.current.type){var e,n;let t;let a=(0,u.findIndex)(Z,["id",Number((null==v?void 0:null===(e=v.current)||void 0===e?void 0:e.object_id)||0)]);a<0&&(Z.forEach(e=>{t=[...t||[],...e.replies||[]]}),a=(0,u.findIndex)(t,["id",Number((null==v?void 0:null===(n=v.current)||void 0===n?void 0:n.object_id)||0)])),["question","answer"].includes(s)&&a>2&&(Z.splice(a,1),S([v.current.comment,...Z])),-1===a&&S([v.current.comment,...Z])}},[Z,v]),(0,l.useEffect)(()=>{_({type:"global/pushPageUser",payload:{pathName:window.location.pathname,users:Z.map(e=>null==e?void 0:e.user)}}),"question"===s&&_({type:"action/saveComments",payload:{id:t,comments:"article"===s?B:null==Z?void 0:Z.length}})},[Z]);let W=e=>{let{item:n,parentItem:a,callback:l}=e;return new Promise((e,r)=>{var c,d;if(!(0,j.bg)()){r(!1);return}let o={};a?o={reply_comment_id:a.id,reply_user_id:null===(c=n.user)||void 0===c?void 0:c.id}:(null==n?void 0:n.isReply)&&(o={reply_comment_id:n.reply_comment_id||n.id,reply_user_id:null===(d=n.user)||void 0===d?void 0:d.id}),n.id&&!n.isReply&&n.isEdit?(0,x.uAg)({id:n.id,object_id:t,...o,text:null==n?void 0:n.original_text}).then(e=>{a?S(Z.map(t=>((null==t?void 0:t.id)===a.id&&(null==t||t.replies.forEach(t=>{t.id===e.id&&(t.isEdit=!1,t.parsed_text=e.parsed_text)})),t))):S(Z.map(t=>(t.id===e.id&&(t.parsed_text=null==e?void 0:e.parsed_text,t.isEdit=!1),t))),"function"==typeof i&&i(!1)}).finally(()=>{e(!0)}):(0,x.UI8)({object_id:t,...o,text:(null==n?void 0:n.commentVal)||E}).then(e=>{if("function"==typeof l&&l({isInvalid:!1,msg:""}),"string"==typeof n?C(""):S(Z.map(e=>(a?e.id===a.id&&e.replies.forEach(e=>{e.id===n.id&&(e.isReply=!1)}):e.id===n.id&&(e.isReply=!1,e.commentVal=""),e))),"article"===s&&"string"!=typeof n)S(Z.map(t=>{if(a){if(t.id===a.id){let s=(0,u.findIndex)(t.replies,{id:n.id});t.replies.splice(s+1,0,e.comment)}}else t.id===n.id&&((0,u.isEmpty)(t.replies)?t.replies=[e.comment]:t.replies.unshift(e.comment));return t}));else if("string"!=typeof n){let t=(0,u.findIndex)(Z,{id:n.id});Z.splice(t+1,0,e.comment),S(Z)}else S([e.comment,...Z]);"function"==typeof i&&i(!1)}).catch(e=>{(null==e?void 0:e.isError)&&"function"==typeof l&&l({isInvalid:!0,msg:e.reply_comment_id||e.text})}).finally(()=>{e(!0)})})},X=function(){let{commentId:e="",commentPage:n=1}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},a=n;e?F[e]?(F[e].page+=1,z({...F,init:!1}),a=F[e].page):z({...F,[e]:{page:1},init:!1}):z({...F,page:n,init:!1}),(0,x.liG)({objectId:t,commentId:e,page:a,sort:"newest"===O?"newest":"votes",is_direct:"article"===s?0:1}).then(t=>{(0,u.isEmpty)(null==t?void 0:t.comments)||J({commentId:e,res:t,page:a})})},J=e=>{let{commentId:n,res:a,page:i}=e;if(n){let e=Z.map(e=>(e.id===n&&(e.replies=(0,u.orderBy)(1===i?a.comments:[...e.replies,...a.comments],["created"])),e));S((0,u.uniqBy)(e,"id")||[])}else if(1===i&&(q(a.total),T(a.all_total),_({type:"action/saveComments",payload:{id:t,comments:a.all_total}})),"article"===s)S((0,u.uniqBy)(a.comments,"id"));else{let e=1===i?a.comments:[...Z,...a.comments];S(e=!V&&ef.includes(s)?(0,u.orderBy)(e,["votes"],["desc"]).map((e,t)=>(e.hidden=t>2,e)):(0,u.orderBy)((0,u.uniqBy)(e,"id"),["created"]))}},ee=(e,t,s)=>{s.preventDefault(),S(t?Z.map(s=>(s.id===t.id&&(s.replies=s.replies.map(t=>(t.id===e.id&&(t.isReply=!t.isReply,t.isEdit=!1),t))),s)):Z.map(t=>(t.id===e.id&&(t.isReply=!t.isReply,t.isEdit=!1),t)))},et=(e,t)=>{S("object"==typeof t?Z.map(s=>(s.id===(null==t?void 0:t.id)&&(s.replies=s.replies.map(t=>(t.id===e.id&&(t=e),t))),s)):Z.map(t=>(t.id===e.id&&(t=e),t)))},es=(e,t)=>{t.preventDefault();let s=(0,f.Xf)();if("sf_app"===s){let t=(0,eh.Z)();return t.send("report",{id:e.id}),!1}R({id:e.id,isShow:!0})},ea=e=>{R({...I,isShow:e})},ei=(e,t)=>{S(t?Z.map(s=>(s.id===t.id&&(s.replies=s.replies.map(t=>(t.id===e.id&&(t.isEdit=!t.isEdit,t.isReply=!1),t))),s)):Z.map(t=>(t.id===e.id&&(t.isEdit=!t.isEdit,t.isReply=!1),t)))},el=(e,t)=>{t.preventDefault(),h.ZP.confirm({title:"删除评论",content:"确定要删除该评论吗",onSuccess:async()=>{await (0,x.YFy)(e),X()}})};(0,l.useEffect)(()=>{if(!P&&!(0,u.isEmpty)(H.current)&&ex&&er(ex)){let e=H.current[ex];e&&(0,f.SM)(e),A(!0)}});let er=(0,l.useCallback)(e=>{let s=(0,f.PQ)({eventObj:v,id:e,type:"comment",parentId:t});return s&&(ex=e),s},[v]),ed=U-(V?null==F?void 0:F.page:0)*15,em=Z.filter(e=>!(null==e?void 0:e.hidden));return(0,n.jsxs)("div",{children:[("question"===s||"answer"===s)&&(0,n.jsx)(en,{defaultVisableTip:w<50,commentContent:E,isShowComment:a,inputRef:D,setCommentContent:C,onComment:W}),(0,n.jsxs)(r.Z,{id:"comment-area",className:"comment-wrap ".concat("article"===s?"":0===Z.length?"hidden":"bg-light border-0 mt-2"),children:["article"===s&&(0,n.jsx)(ep,{allTotal:B,sort:O,setSort:M,aId:t}),(0,n.jsxs)(r.Z.Body,{className:"article"===s?"":"p-3",children:["article"===s&&(0,n.jsx)(K,{defaultVisableTip:w<50,commentContent:E,inputRef:D,setCommentContent:C,onComment:W}),(0,n.jsx)("div",{className:"comment-body-wrap ".concat(Z.filter(e=>!e.hidden).length<1&&"d-none"),children:em.map((e,a)=>{var i,l,o,m,h,x,f,j,v;let b=e.parsed_text,N=e.reply_user;return(0,u.isEmpty)(N)||b.includes('<a href="'.concat(N.url,'">@').concat(N.name,"</a>"))||(b=b.replace(/^<p>/,'<p><a href="'.concat(N.url,'">@').concat(N.name,"</a> "))),(0,n.jsxs)("div",{ref:t=>H.current[e.id]=t,className:"mb-r media d-flex align-items-start ".concat(em.length!==a+1&&("article"===s?"mb-4":"mb-3")),children:["article"===s&&(0,n.jsx)(p.Z,{className:"me-3",width:38,height:38,src:null===(i=e.user)||void 0===i?void 0:i.avatar_url,headdress:null===(l=e.user)||void 0===l?void 0:l.headdress_worn}),(0,n.jsxs)("div",{className:"w-0 media-body ".concat(er(e.id)?"scroll-warning":""),children:[(0,n.jsxs)("div",{className:"commentUnit ".concat("question"===s||"answer"===s?"font-size-14":""),children:[(0,n.jsxs)("div",{className:"mb-1",children:[(0,n.jsxs)("a",{className:"d-uname",href:null===(o=e.user)||void 0===o?void 0:o.url,target:"_blank",children:[(0,n.jsx)("strong",{children:null===(m=e.user)||void 0===m?void 0:m.name}),"article"===s&&(null===(h=e.user)||void 0===h?void 0:h.id)===(null==y?void 0:y.id)&&(0,n.jsx)("span",{className:"text-secondary",children:"（作者）"})]}),"：",!e.isEdit&&(0,n.jsx)("div",{className:"parsedText fmt",dangerouslySetInnerHTML:{__html:b}})]}),e.isEdit&&(0,n.jsx)($,{onChangeOfComment:et,item:e,onComment:W}),(0,n.jsx)(g,{item:e,onEditComment:ee,onEdit:ei,onRemove:el,onReport:es}),e.isReply&&(0,n.jsx)(r.Z,{className:"bg-light border-0 mt-2",children:(0,n.jsx)(ec,{defaultVisableTip:w<50,id:t,className:"".concat("question"===s||"answer"===s?"p-0":"p-3"),mode:s,onChangeOfComment:et,item:e,onComment:W,onEditComment:ee})})]}),(0,n.jsx)("div",{className:"replies ".concat((0,u.isEmpty)(e.replies)?"hidden":""),children:(0,n.jsx)(r.Z,{className:"bg-light border-0 mt-2",children:(0,n.jsxs)(r.Z.Body,{className:"p-3",children:[(0,n.jsx)(c.Z,{className:"reply-list",children:null===(x=e.replies)||void 0===x?void 0:x.map((a,i)=>{var l,c,o;let m=a.parsed_text,p=a.reply_user;return(0,u.isEmpty)(p)||m.includes('<a href="'.concat(p.url,'">@').concat(p.name,"</a>"))||(m=m.replace(/^<p>/,'<p><a href="'.concat(p.url,'">@').concat(p.name,"</a> "))),(0,n.jsxs)(d.Z,{ref:e=>H.current[a.id]=e,className:"p-0 border-0 commentUnit ".concat(e.replies.length!==i+1&&"mb-3"," ").concat(er(a.id)?"scroll-warning":""," "),children:[(0,n.jsxs)("div",{className:"font-size-14 mb-1",children:[(0,n.jsxs)("a",{className:"d-uname",href:null===(l=a.user)||void 0===l?void 0:l.url,target:"_blank",children:[(0,n.jsx)("strong",{children:null===(c=a.user)||void 0===c?void 0:c.name}),"article"===s&&(null===(o=a.user)||void 0===o?void 0:o.id)===(null==y?void 0:y.id)&&(0,n.jsx)("span",{className:"text-secondary",children:"（作者）"})]}),"：",!a.isEdit&&(0,n.jsx)("div",{className:"parsedText fmt",dangerouslySetInnerHTML:{__html:m}})]}),a.isEdit&&(0,n.jsx)($,{isChild:!0,onChangeOfComment:et,item:a,parentItem:e,onComment:W}),(0,n.jsx)(eo,{item:e,subItem:a,onEditComment:ee,onEdit:ei,onRemove:el,onReport:es}),a.isReply&&(0,n.jsx)(r.Z,{className:"bg-light border-0 mt-2",children:(0,n.jsx)(ec,{defaultVisableTip:w<50,id:t,onChangeOfComment:et,item:a,onComment:W,parentItem:e,className:"p-0",onEditComment:ee})})]},a.id)})}),e.replies&&e.replies_total>e.replies.length&&e.replies_total-15*((null===(f=F[e.id])||void 0===f?void 0:f.page)||0)>0&&(0,n.jsx)("div",{className:"font-size-14 d-flex mt-3",children:(0,n.jsx)("a",{className:"text-secondary next-page-btn",href:"###",onClick:t=>{t.preventDefault(),X({commentId:e.id})},children:e.replies_total<15?"共 ".concat(e.replies_total," 条回复"):"更多 ".concat(15>e.replies_total-15*((null===(j=F[e.id])||void 0===j?void 0:j.page)||0)?e.replies_total-15*((null===(v=F[e.id])||void 0===v?void 0:v.page)||0):15," 条回复")})})]})})})]})]},e.id)})}),"article"===s?U>15&&(0,n.jsx)(Y,{total:U,page:F.page,getData:e=>X({commentPage:e})}):U>3&&ed>0&&(0,n.jsx)("div",{className:"font-size-14 d-flex mt-3",children:(0,n.jsx)("a",{className:"text-secondary next-page-btn",href:"###",onClick:e=>{e.preventDefault(),V?X({commentPage:F.page+1}):L(!0)},children:U<15?"共 ".concat(U," 条评论"):"更多 ".concat(15>ed?ed:15," 条评论")})})]})]}),(0,n.jsx)(h.yW,{...I,setModalStatus:ea})]})},ev=(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(i(),{id:"264ee8e6dd3c886a",children:'.comment-wrap .media-body .fmt,.comment-wrap .media-body .fmt>p:first-child{display:inline}.comment-wrap .media-body .fmt>p:first-child::after{display:block;content:"";margin-bottom:1.25rem}.comment-wrap .media-body .fmt>p:last-child::after{display:none!important}.comment-wrap .commentUnit:hover .control-area,.comment-wrap .commentUnit:hover .comment-control-area{display:block!important}.comment-wrap .comment-reply{overflow:hidden;word-wrap:break-word;overflow-wrap:break-word;resize:none}.comment-wrap .dropdown-item.active,.comment-wrap .dropdown-item:active{background:#f8f9fa!important;color:inherit!important}.comment-wrap .reply-list .list-group-item{background-color:unset}'})}),eg=e=>(0,n.jsxs)(n.Fragment,{children:[ev,(0,n.jsx)(ej,{...e})]});var ey=(0,o.$j)(e=>{let{global:t}=e;return{sessionUser:t.sessionUser}})(l.memo(eg))}}]);