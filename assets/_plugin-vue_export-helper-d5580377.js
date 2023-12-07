import{i as ze,e as N,m as C,a as b,n as Q,q as U,t as Be,s as et,R as tt,h as T,u as qe,v as nt,x as ot,Q as ne,y as ve,g as D,z as lt,c as K,A as it,B as rt,C as E,D as he,E as Ie,F as de,G as fe,H as be,I as Ae,p as Ee,J as at,b as ut,l as Me,K as Le,L as st,M as Z,N as ct}from"./index-9096878a.js";let ue,ee=0;const k=new Array(256);for(let e=0;e<256;e++)k[e]=(e+256).toString(16).substring(1);const dt=(()=>{const e=typeof crypto<"u"?crypto:typeof window<"u"?window.crypto||window.msCrypto:void 0;if(e!==void 0){if(e.randomBytes!==void 0)return e.randomBytes;if(e.getRandomValues!==void 0)return s=>{const l=new Uint8Array(s);return e.getRandomValues(l),l}}return s=>{const l=[];for(let o=s;o>0;o--)l.push(Math.floor(Math.random()*256));return l}})(),_e=4096;function ft(){(ue===void 0||ee+16>_e)&&(ee=0,ue=dt(_e));const e=Array.prototype.slice.call(ue,ee,ee+=16);return e[6]=e[6]&15|64,e[8]=e[8]&63|128,k[e[0]]+k[e[1]]+k[e[2]]+k[e[3]]+"-"+k[e[4]]+k[e[5]]+"-"+k[e[6]]+k[e[7]]+"-"+k[e[8]]+k[e[9]]+"-"+k[e[10]]+k[e[11]]+k[e[12]]+k[e[13]]+k[e[14]]+k[e[15]]}let vt=0;const ht=["click","keydown"],bt={icon:String,label:[Number,String],alert:[Boolean,String],alertIcon:String,name:{type:[Number,String],default:()=>`t_${vt++}`},noCaps:Boolean,tabindex:[String,Number],disable:Boolean,contentClass:String,ripple:{type:[Boolean,Object],default:!0}};function gt(e,s,l,o){const t=ze(Be,N);if(t===N)return console.error("QTab/QRouteTab component needs to be child of QTabs"),N;const{proxy:y}=D(),g=C(null),_=C(null),v=C(null),f=b(()=>e.disable===!0||e.ripple===!1?!1:Object.assign({keyCodes:[13,32],early:!0},e.ripple===!0?{}:e.ripple)),R=b(()=>t.currentModel.value===e.name),$=b(()=>"q-tab relative-position self-stretch flex flex-center text-center"+(R.value===!0?" q-tab--active"+(t.tabProps.value.activeClass?" "+t.tabProps.value.activeClass:"")+(t.tabProps.value.activeColor?` text-${t.tabProps.value.activeColor}`:"")+(t.tabProps.value.activeBgColor?` bg-${t.tabProps.value.activeBgColor}`:""):" q-tab--inactive")+(e.icon&&e.label&&t.tabProps.value.inlineLabel===!1?" q-tab--full":"")+(e.noCaps===!0||t.tabProps.value.noCaps===!0?" q-tab--no-caps":"")+(e.disable===!0?" disabled":" q-focusable q-hoverable cursor-pointer")+(o!==void 0?o.linkClass.value:"")),z=b(()=>"q-tab__content self-stretch flex-center relative-position q-anchor--skip non-selectable "+(t.tabProps.value.inlineLabel===!0?"row no-wrap q-tab__content--inline":"column")+(e.contentClass!==void 0?` ${e.contentClass}`:"")),w=b(()=>e.disable===!0||t.hasFocus.value===!0||R.value===!1&&t.hasActiveTab.value===!0?-1:e.tabindex||0);function P(u,a){if(a!==!0&&g.value!==null&&g.value.focus(),e.disable===!0){o!==void 0&&o.hasRouterLink.value===!0&&qe(u);return}if(o===void 0){t.updateModel({name:e.name}),l("click",u);return}if(o.hasRouterLink.value===!0){const i=(d={})=>{let L;const A=d.to===void 0||lt(d.to,e.to)===!0?t.avoidRouteWatcher=ft():null;return o.navigateToRouterLink(u,{...d,returnRouterError:!0}).catch(p=>{L=p}).then(p=>{if(A===t.avoidRouteWatcher&&(t.avoidRouteWatcher=!1,L===void 0&&(p===void 0||p.message.startsWith("Avoided redundant navigation")===!0)&&t.updateModel({name:e.name})),d.returnRouterError===!0)return L!==void 0?Promise.reject(L):p})};l("click",u,i),u.defaultPrevented!==!0&&i();return}l("click",u)}function q(u){nt(u,[13,32])?P(u,!0):ot(u)!==!0&&u.keyCode>=35&&u.keyCode<=40&&u.altKey!==!0&&u.metaKey!==!0&&t.onKbdNavigate(u.keyCode,y.$el)===!0&&qe(u),l("keydown",u)}function I(){const u=t.tabProps.value.narrowIndicator,a=[],i=T("div",{ref:v,class:["q-tab__indicator",t.tabProps.value.indicatorClass]});e.icon!==void 0&&a.push(T(ne,{class:"q-tab__icon",name:e.icon})),e.label!==void 0&&a.push(T("div",{class:"q-tab__label"},e.label)),e.alert!==!1&&a.push(e.alertIcon!==void 0?T(ne,{class:"q-tab__alert-icon",color:e.alert!==!0?e.alert:void 0,name:e.alertIcon}):T("div",{class:"q-tab__alert"+(e.alert!==!0?` text-${e.alert}`:"")})),u===!0&&a.push(i);const d=[T("div",{class:"q-focus-helper",tabindex:-1,ref:g}),T("div",{class:z.value},ve(s.default,a))];return u===!1&&d.push(i),d}const M={name:b(()=>e.name),rootRef:_,tabIndicatorRef:v,routeData:o};Q(()=>{t.unregisterTab(M)}),U(()=>{t.registerTab(M)});function F(u,a){const i={ref:_,class:$.value,tabindex:w.value,role:"tab","aria-selected":R.value===!0?"true":"false","aria-disabled":e.disable===!0?"true":void 0,onClick:P,onKeydown:q,...a};return et(T(u,i,I()),[[tt,f.value]])}return{renderTab:F,$tabs:t}}const _t=K({name:"QRouteTab",props:{...it,...bt},emits:ht,setup(e,{slots:s,emit:l}){const o=rt({useDisableForRouterLinkProps:!1}),{renderTab:t,$tabs:y}=gt(e,s,l,{exact:b(()=>e.exact),...o});return E(()=>`${e.name} | ${e.exact} | ${(o.resolvedLink.value||{}).href}`,()=>{y.verifyRouteModel()}),()=>t(o.linkTag.value,o.linkAttrs.value)}});function mt(){const e=C(!he.value);return e.value===!1&&U(()=>{e.value=!0}),e}const Fe=typeof ResizeObserver<"u",Pe=Fe===!0?{}:{style:"display:block;position:absolute;top:0;left:0;right:0;bottom:0;height:100%;width:100%;overflow:hidden;pointer-events:none;z-index:-1;",url:"about:blank"},oe=K({name:"QResizeObserver",props:{debounce:{type:[String,Number],default:100}},emits:["resize"],setup(e,{emit:s}){let l=null,o,t={width:-1,height:-1};function y(v){v===!0||e.debounce===0||e.debounce==="0"?g():l===null&&(l=setTimeout(g,e.debounce))}function g(){if(l!==null&&(clearTimeout(l),l=null),o){const{offsetWidth:v,offsetHeight:f}=o;(v!==t.width||f!==t.height)&&(t={width:v,height:f},s("resize",t))}}const{proxy:_}=D();if(Fe===!0){let v;const f=R=>{o=_.$el.parentNode,o?(v=new ResizeObserver(y),v.observe(o),g()):R!==!0&&de(()=>{f(!0)})};return U(()=>{f()}),Q(()=>{l!==null&&clearTimeout(l),v!==void 0&&(v.disconnect!==void 0?v.disconnect():o&&v.unobserve(o))}),Ie}else{let R=function(){l!==null&&(clearTimeout(l),l=null),f!==void 0&&(f.removeEventListener!==void 0&&f.removeEventListener("resize",y,fe.passive),f=void 0)},$=function(){R(),o&&o.contentDocument&&(f=o.contentDocument.defaultView,f.addEventListener("resize",y,fe.passive),g())};const v=mt();let f;return U(()=>{de(()=>{o=_.$el,o&&$()})}),Q(R),_.trigger=y,()=>{if(v.value===!0)return T("object",{style:Pe.style,tabindex:-1,type:"text/html",data:Pe.url,"aria-hidden":"true",onLoad:$})}}}});function se(){let e;const s=D();function l(){e=void 0}return be(l),Q(l),{removeTick:l,registerTick(o){e=o,de(()=>{e===o&&(Ae(s)===!1&&e(),e=void 0)})}}}function ke(){let e=null;const s=D();function l(){e!==null&&(clearTimeout(e),e=null)}return be(l),Q(l),{removeTimeout:l,registerTimeout(o,t){l(),Ae(s)===!1&&(e=setTimeout(o,t))}}}let pe=!1;{const e=document.createElement("div");e.setAttribute("dir","rtl"),Object.assign(e.style,{width:"1px",height:"1px",overflow:"auto"});const s=document.createElement("div");Object.assign(s.style,{width:"1000px",height:"1px"}),document.body.appendChild(e),e.appendChild(s),e.scrollLeft=-1e3,pe=e.scrollLeft>=0,e.remove()}function wt(e,s,l){const o=l===!0?["left","right"]:["top","bottom"];return`absolute-${s===!0?o[0]:o[1]}${e?` text-${e}`:""}`}const yt=["left","center","right","justify"],Pt=K({name:"QTabs",props:{modelValue:[Number,String],align:{type:String,default:"center",validator:e=>yt.includes(e)},breakpoint:{type:[String,Number],default:600},vertical:Boolean,shrink:Boolean,stretch:Boolean,activeClass:String,activeColor:String,activeBgColor:String,indicatorColor:String,leftIcon:String,rightIcon:String,outsideArrows:Boolean,mobileArrows:Boolean,switchIndicator:Boolean,narrowIndicator:Boolean,inlineLabel:Boolean,noCaps:Boolean,dense:Boolean,contentClass:String,"onUpdate:modelValue":[Function,Array]},setup(e,{slots:s,emit:l}){const{proxy:o}=D(),{$q:t}=o,{registerTick:y}=se(),{registerTick:g}=se(),{registerTick:_}=se(),{registerTimeout:v,removeTimeout:f}=ke(),{registerTimeout:R,removeTimeout:$}=ke(),z=C(null),w=C(null),P=C(e.modelValue),q=C(!1),I=C(!0),M=C(!1),F=C(!1),u=[],a=C(0),i=C(!1);let d=null,L=null,A;const p=b(()=>({activeClass:e.activeClass,activeColor:e.activeColor,activeBgColor:e.activeBgColor,indicatorClass:wt(e.indicatorColor,e.switchIndicator,e.vertical),narrowIndicator:e.narrowIndicator,inlineLabel:e.inlineLabel,noCaps:e.noCaps})),He=b(()=>{const n=a.value,r=P.value;for(let c=0;c<n;c++)if(u[c].name.value===r)return!0;return!1}),Oe=b(()=>`q-tabs__content--align-${q.value===!0?"left":F.value===!0?"justify":e.align}`),Ve=b(()=>`q-tabs row no-wrap items-center q-tabs--${q.value===!0?"":"not-"}scrollable q-tabs--${e.vertical===!0?"vertical":"horizontal"} q-tabs__arrows--${e.outsideArrows===!0?"outside":"inside"} q-tabs--mobile-with${e.mobileArrows===!0?"":"out"}-arrows`+(e.dense===!0?" q-tabs--dense":"")+(e.shrink===!0?" col-shrink":"")+(e.stretch===!0?" self-stretch":"")),Qe=b(()=>"q-tabs__content scroll--mobile row no-wrap items-center self-stretch hide-scrollbar relative-position "+Oe.value+(e.contentClass!==void 0?` ${e.contentClass}`:"")),X=b(()=>e.vertical===!0?{container:"height",content:"offsetHeight",scroll:"scrollHeight"}:{container:"width",content:"offsetWidth",scroll:"scrollWidth"}),G=b(()=>e.vertical!==!0&&t.lang.rtl===!0),le=b(()=>pe===!1&&G.value===!0);E(G,j),E(()=>e.modelValue,n=>{ie({name:n,setCurrent:!0,skipEmit:!0})}),E(()=>e.outsideArrows,Y);function ie({name:n,setCurrent:r,skipEmit:c}){P.value!==n&&(c!==!0&&e["onUpdate:modelValue"]!==void 0&&l("update:modelValue",n),(r===!0||e["onUpdate:modelValue"]===void 0)&&(De(P.value,n),P.value=n))}function Y(){y(()=>{ge({width:z.value.offsetWidth,height:z.value.offsetHeight})})}function ge(n){if(X.value===void 0||w.value===null)return;const r=n[X.value.container],c=Math.min(w.value[X.value.scroll],Array.prototype.reduce.call(w.value.children,(S,m)=>S+(m[X.value.content]||0),0)),x=r>0&&c>r;q.value=x,x===!0&&g(j),F.value=r<parseInt(e.breakpoint,10)}function De(n,r){const c=n!=null&&n!==""?u.find(S=>S.name.value===n):null,x=r!=null&&r!==""?u.find(S=>S.name.value===r):null;if(c&&x){const S=c.tabIndicatorRef.value,m=x.tabIndicatorRef.value;d!==null&&(clearTimeout(d),d=null),S.style.transition="none",S.style.transform="none",m.style.transition="none",m.style.transform="none";const h=S.getBoundingClientRect(),B=m.getBoundingClientRect();m.style.transform=e.vertical===!0?`translate3d(0,${h.top-B.top}px,0) scale3d(1,${B.height?h.height/B.height:1},1)`:`translate3d(${h.left-B.left}px,0,0) scale3d(${B.width?h.width/B.width:1},1,1)`,_(()=>{d=setTimeout(()=>{d=null,m.style.transition="transform .25s cubic-bezier(.4, 0, .2, 1)",m.style.transform="none"},70)})}x&&q.value===!0&&W(x.rootRef.value)}function W(n){const{left:r,width:c,top:x,height:S}=w.value.getBoundingClientRect(),m=n.getBoundingClientRect();let h=e.vertical===!0?m.top-x:m.left-r;if(h<0){w.value[e.vertical===!0?"scrollTop":"scrollLeft"]+=Math.floor(h),j();return}h+=e.vertical===!0?m.height-S:m.width-c,h>0&&(w.value[e.vertical===!0?"scrollTop":"scrollLeft"]+=Math.ceil(h),j())}function j(){const n=w.value;if(n===null)return;const r=n.getBoundingClientRect(),c=e.vertical===!0?n.scrollTop:Math.abs(n.scrollLeft);G.value===!0?(I.value=Math.ceil(c+r.width)<n.scrollWidth-1,M.value=c>0):(I.value=c>0,M.value=e.vertical===!0?Math.ceil(c+r.height)<n.scrollHeight:Math.ceil(c+r.width)<n.scrollWidth)}function me(n){L!==null&&clearInterval(L),L=setInterval(()=>{Ne(n)===!0&&O()},5)}function we(){me(le.value===!0?Number.MAX_SAFE_INTEGER:0)}function ye(){me(le.value===!0?0:Number.MAX_SAFE_INTEGER)}function O(){L!==null&&(clearInterval(L),L=null)}function We(n,r){const c=Array.prototype.filter.call(w.value.children,B=>B===r||B.matches&&B.matches(".q-tab.q-focusable")===!0),x=c.length;if(x===0)return;if(n===36)return W(c[0]),c[0].focus(),!0;if(n===35)return W(c[x-1]),c[x-1].focus(),!0;const S=n===(e.vertical===!0?38:37),m=n===(e.vertical===!0?40:39),h=S===!0?-1:m===!0?1:void 0;if(h!==void 0){const B=G.value===!0?-1:1,H=c.indexOf(r)+h*B;return H>=0&&H<x&&(W(c[H]),c[H].focus({preventScroll:!0})),!0}}const je=b(()=>le.value===!0?{get:n=>Math.abs(n.scrollLeft),set:(n,r)=>{n.scrollLeft=-r}}:e.vertical===!0?{get:n=>n.scrollTop,set:(n,r)=>{n.scrollTop=r}}:{get:n=>n.scrollLeft,set:(n,r)=>{n.scrollLeft=r}});function Ne(n){const r=w.value,{get:c,set:x}=je.value;let S=!1,m=c(r);const h=n<m?-1:1;return m+=h*5,m<0?(S=!0,m=0):(h===-1&&m<=n||h===1&&m>=n)&&(S=!0,m=n),x(r,m),j(),S}function Te(n,r){for(const c in n)if(n[c]!==r[c])return!1;return!0}function Ke(){let n=null,r={matchedLen:0,queryDiff:9999,hrefLen:0};const c=u.filter(h=>h.routeData!==void 0&&h.routeData.hasRouterLink.value===!0),{hash:x,query:S}=o.$route,m=Object.keys(S).length;for(const h of c){const B=h.routeData.exact.value===!0;if(h.routeData[B===!0?"linkIsExactActive":"linkIsActive"].value!==!0)continue;const{hash:H,query:re,matched:Je,href:Ze}=h.routeData.resolvedLink.value,ae=Object.keys(re).length;if(B===!0){if(H!==x||ae!==m||Te(S,re)===!1)continue;n=h.name.value;break}if(H!==""&&H!==x||ae!==0&&Te(re,S)===!1)continue;const V={matchedLen:Je.length,queryDiff:m-ae,hrefLen:Ze.length-H.length};if(V.matchedLen>r.matchedLen){n=h.name.value,r=V;continue}else if(V.matchedLen!==r.matchedLen)continue;if(V.queryDiff<r.queryDiff)n=h.name.value,r=V;else if(V.queryDiff!==r.queryDiff)continue;V.hrefLen>r.hrefLen&&(n=h.name.value,r=V)}n===null&&u.some(h=>h.routeData===void 0&&h.name.value===P.value)===!0||ie({name:n,setCurrent:!0})}function Ue(n){if(f(),i.value!==!0&&z.value!==null&&n.target&&typeof n.target.closest=="function"){const r=n.target.closest(".q-tab");r&&z.value.contains(r)===!0&&(i.value=!0,q.value===!0&&W(r))}}function Xe(){v(()=>{i.value=!1},30)}function J(){xe.avoidRouteWatcher===!1?R(Ke):$()}function Ce(){if(A===void 0){const n=E(()=>o.$route.fullPath,J);A=()=>{n(),A=void 0}}}function Ge(n){u.push(n),a.value++,Y(),n.routeData===void 0||o.$route===void 0?R(()=>{if(q.value===!0){const r=P.value,c=r!=null&&r!==""?u.find(x=>x.name.value===r):null;c&&W(c.rootRef.value)}}):(Ce(),n.routeData.hasRouterLink.value===!0&&J())}function Ye(n){u.splice(u.indexOf(n),1),a.value--,Y(),A!==void 0&&n.routeData!==void 0&&(u.every(r=>r.routeData===void 0)===!0&&A(),J())}const xe={currentModel:P,tabProps:p,hasFocus:i,hasActiveTab:He,registerTab:Ge,unregisterTab:Ye,verifyRouteModel:J,updateModel:ie,onKbdNavigate:We,avoidRouteWatcher:!1};Ee(Be,xe);function Se(){d!==null&&clearTimeout(d),O(),A!==void 0&&A()}let Re;return Q(Se),be(()=>{Re=A!==void 0,Se()}),at(()=>{Re===!0&&Ce(),Y()}),()=>T("div",{ref:z,class:Ve.value,role:"tablist",onFocusin:Ue,onFocusout:Xe},[T(oe,{onResize:ge}),T("div",{ref:w,class:Qe.value,onScroll:j},ut(s.default)),T(ne,{class:"q-tabs__arrow q-tabs__arrow--left absolute q-tab__icon"+(I.value===!0?"":" q-tabs__arrow--faded"),name:e.leftIcon||t.iconSet.tabs[e.vertical===!0?"up":"left"],onMousedownPassive:we,onTouchstartPassive:we,onMouseupPassive:O,onMouseleavePassive:O,onTouchendPassive:O}),T(ne,{class:"q-tabs__arrow q-tabs__arrow--right absolute q-tab__icon"+(M.value===!0?"":" q-tabs__arrow--faded"),name:e.rightIcon||t.iconSet.tabs[e.vertical===!0?"down":"right"],onMousedownPassive:ye,onTouchstartPassive:ye,onMouseupPassive:O,onMouseleavePassive:O,onTouchendPassive:O})])}}),kt=K({name:"QFooter",props:{modelValue:{type:Boolean,default:!0},reveal:Boolean,bordered:Boolean,elevated:Boolean,heightHint:{type:[String,Number],default:50}},emits:["reveal","focusin"],setup(e,{slots:s,emit:l}){const{proxy:{$q:o}}=D(),t=ze(Me,N);if(t===N)return console.error("QFooter needs to be child of QLayout"),N;const y=C(parseInt(e.heightHint,10)),g=C(!0),_=C(he.value===!0||t.isContainer.value===!0?0:window.innerHeight),v=b(()=>e.reveal===!0||t.view.value.indexOf("F")>-1||o.platform.is.ios&&t.isContainer.value===!0),f=b(()=>t.isContainer.value===!0?t.containerHeight.value:_.value),R=b(()=>{if(e.modelValue!==!0)return 0;if(v.value===!0)return g.value===!0?y.value:0;const i=t.scroll.value.position+f.value+y.value-t.height.value;return i>0?i:0}),$=b(()=>e.modelValue!==!0||v.value===!0&&g.value!==!0),z=b(()=>e.modelValue===!0&&$.value===!0&&e.reveal===!0),w=b(()=>"q-footer q-layout__section--marginal "+(v.value===!0?"fixed":"absolute")+"-bottom"+(e.bordered===!0?" q-footer--bordered":"")+($.value===!0?" q-footer--hidden":"")+(e.modelValue!==!0?" q-layout--prevent-focus"+(v.value!==!0?" hidden":""):"")),P=b(()=>{const i=t.rows.value.bottom,d={};return i[0]==="l"&&t.left.space===!0&&(d[o.lang.rtl===!0?"right":"left"]=`${t.left.size}px`),i[2]==="r"&&t.right.space===!0&&(d[o.lang.rtl===!0?"left":"right"]=`${t.right.size}px`),d});function q(i,d){t.update("footer",i,d)}function I(i,d){i.value!==d&&(i.value=d)}function M({height:i}){I(y,i),q("size",i)}function F(){if(e.reveal!==!0)return;const{direction:i,position:d,inflectionPoint:L}=t.scroll.value;I(g,i==="up"||d-L<100||t.height.value-f.value-d-y.value<300)}function u(i){z.value===!0&&I(g,!0),l("focusin",i)}E(()=>e.modelValue,i=>{q("space",i),I(g,!0),t.animate()}),E(R,i=>{q("offset",i)}),E(()=>e.reveal,i=>{i===!1&&I(g,e.modelValue)}),E(g,i=>{t.animate(),l("reveal",i)}),E([y,t.scroll,t.height],F),E(()=>o.screen.height,i=>{t.isContainer.value!==!0&&I(_,i)});const a={};return t.instances.footer=a,e.modelValue===!0&&q("size",y.value),q("space",e.modelValue),q("offset",R.value),Q(()=>{t.instances.footer===a&&(t.instances.footer=void 0,q("size",0),q("offset",0),q("space",!1))}),()=>{const i=ve(s.default,[T(oe,{debounce:0,onResize:M})]);return e.elevated===!0&&i.push(T("div",{class:"q-layout__shadow absolute-full overflow-hidden no-pointer-events"})),T("footer",{class:w.value,style:P.value,onFocusin:u},i)}}}),Tt=[null,document,document.body,document.scrollingElement,document.documentElement];function Ct(e,s){let l=st(s);if(l===void 0){if(e==null)return window;l=e.closest(".scroll,.scroll-y,.overflow-auto")}return Tt.includes(l)?window:l}function xt(e){return e===window?window.pageYOffset||window.scrollY||document.body.scrollTop||0:e.scrollTop}function St(e){return e===window?window.pageXOffset||window.scrollX||document.body.scrollLeft||0:e.scrollLeft}let te;function ce(){if(te!==void 0)return te;const e=document.createElement("p"),s=document.createElement("div");Le(e,{width:"100%",height:"200px"}),Le(s,{position:"absolute",top:"0px",left:"0px",visibility:"hidden",width:"200px",height:"150px",overflow:"hidden"}),s.appendChild(e),document.body.appendChild(s);const l=e.offsetWidth;s.style.overflow="scroll";let o=e.offsetWidth;return l===o&&(o=s.clientWidth),s.remove(),te=l-o,te}const{passive:$e}=fe,Rt=["both","horizontal","vertical"],qt=K({name:"QScrollObserver",props:{axis:{type:String,validator:e=>Rt.includes(e),default:"vertical"},debounce:[String,Number],scrollTarget:{default:void 0}},emits:["scroll"],setup(e,{emit:s}){const l={position:{top:0,left:0},direction:"down",directionChanged:!1,delta:{top:0,left:0},inflectionPoint:{top:0,left:0}};let o=null,t,y;E(()=>e.scrollTarget,()=>{v(),_()});function g(){o!==null&&o();const $=Math.max(0,xt(t)),z=St(t),w={top:$-l.position.top,left:z-l.position.left};if(e.axis==="vertical"&&w.top===0||e.axis==="horizontal"&&w.left===0)return;const P=Math.abs(w.top)>=Math.abs(w.left)?w.top<0?"up":"down":w.left<0?"left":"right";l.position={top:$,left:z},l.directionChanged=l.direction!==P,l.delta=w,l.directionChanged===!0&&(l.direction=P,l.inflectionPoint=l.position),s("scroll",{...l})}function _(){t=Ct(y,e.scrollTarget),t.addEventListener("scroll",f,$e),f(!0)}function v(){t!==void 0&&(t.removeEventListener("scroll",f,$e),t=void 0)}function f($){if($===!0||e.debounce===0||e.debounce==="0")g();else if(o===null){const[z,w]=e.debounce?[setTimeout(g,e.debounce),clearTimeout]:[requestAnimationFrame(g),cancelAnimationFrame];o=()=>{w(z),o=null}}}const{proxy:R}=D();return E(()=>R.$q.lang.rtl,g),U(()=>{y=R.$el.parentNode,_()}),Q(()=>{o!==null&&o(),v()}),Object.assign(R,{trigger:f,getPosition:()=>l}),Ie}}),$t=K({name:"QLayout",props:{container:Boolean,view:{type:String,default:"hhh lpr fff",validator:e=>/^(h|l)h(h|r) lpr (f|l)f(f|r)$/.test(e.toLowerCase())},onScroll:Function,onScrollHeight:Function,onResize:Function},setup(e,{slots:s,emit:l}){const{proxy:{$q:o}}=D(),t=C(null),y=C(o.screen.height),g=C(e.container===!0?0:o.screen.width),_=C({position:0,direction:"down",inflectionPoint:0}),v=C(0),f=C(he.value===!0?0:ce()),R=b(()=>"q-layout q-layout--"+(e.container===!0?"containerized":"standard")),$=b(()=>e.container===!1?{minHeight:o.screen.height+"px"}:null),z=b(()=>f.value!==0?{[o.lang.rtl===!0?"left":"right"]:`${f.value}px`}:null),w=b(()=>f.value!==0?{[o.lang.rtl===!0?"right":"left"]:0,[o.lang.rtl===!0?"left":"right"]:`-${f.value}px`,width:`calc(100% + ${f.value}px)`}:null);function P(a){if(e.container===!0||document.qScrollPrevented!==!0){const i={position:a.position.top,direction:a.direction,directionChanged:a.directionChanged,inflectionPoint:a.inflectionPoint.top,delta:a.delta.top};_.value=i,e.onScroll!==void 0&&l("scroll",i)}}function q(a){const{height:i,width:d}=a;let L=!1;y.value!==i&&(L=!0,y.value=i,e.onScrollHeight!==void 0&&l("scrollHeight",i),M()),g.value!==d&&(L=!0,g.value=d),L===!0&&e.onResize!==void 0&&l("resize",a)}function I({height:a}){v.value!==a&&(v.value=a,M())}function M(){if(e.container===!0){const a=y.value>v.value?ce():0;f.value!==a&&(f.value=a)}}let F=null;const u={instances:{},view:b(()=>e.view),isContainer:b(()=>e.container),rootRef:t,height:y,containerHeight:v,scrollbarWidth:f,totalWidth:b(()=>g.value+f.value),rows:b(()=>{const a=e.view.toLowerCase().split(" ");return{top:a[0].split(""),middle:a[1].split(""),bottom:a[2].split("")}}),header:Z({size:0,offset:0,space:!1}),right:Z({size:300,offset:0,space:!1}),footer:Z({size:0,offset:0,space:!1}),left:Z({size:300,offset:0,space:!1}),scroll:_,animate(){F!==null?clearTimeout(F):document.body.classList.add("q-body--layout-animate"),F=setTimeout(()=>{F=null,document.body.classList.remove("q-body--layout-animate")},155)},update(a,i,d){u[a][i]=d}};if(Ee(Me,u),ce()>0){let d=function(){a=null,i.classList.remove("hide-scrollbar")},L=function(){if(a===null){if(i.scrollHeight>o.screen.height)return;i.classList.add("hide-scrollbar")}else clearTimeout(a);a=setTimeout(d,300)},A=function(p){a!==null&&p==="remove"&&(clearTimeout(a),d()),window[`${p}EventListener`]("resize",L)},a=null;const i=document.body;E(()=>e.container!==!0?"add":"remove",A),e.container!==!0&&A("add"),ct(()=>{A("remove")})}return()=>{const a=ve(s.default,[T(qt,{onScroll:P}),T(oe,{onResize:q})]),i=T("div",{class:R.value,style:$.value,ref:e.container===!0?void 0:t,tabindex:-1},a);return e.container===!0?T("div",{class:"q-layout-container overflow-hidden",ref:t},[T(oe,{onResize:I}),T("div",{class:"absolute-full",style:z.value},[T("div",{class:"scroll",style:w.value},[i])])]):i}}}),zt=(e,s)=>{const l=e.__vccOpts||e;for(const[o,t]of s)l[o]=t;return l};export{$t as Q,zt as _,Pt as a,_t as b,kt as c};
