import{r as e,t}from"./rolldown-runtime.hePW80VL.js";import{t as n}from"./react.C2itep5K.js";import{t as r}from"./jsx-runtime.CWLBoBiw.js";function i(e){if(e.sheet)return e.sheet;for(var t=0;t<document.styleSheets.length;t++)if(document.styleSheets[t].ownerNode===e)return document.styleSheets[t]}function a(e){var t=document.createElement(`style`);return t.setAttribute(`data-emotion`,e.key),e.nonce!==void 0&&t.setAttribute(`nonce`,e.nonce),t.appendChild(document.createTextNode(``)),t.setAttribute(`data-s`,``),t}var o=function(){function e(e){var t=this;this._insertTag=function(e){var n=t.tags.length===0?t.insertionPoint?t.insertionPoint.nextSibling:t.prepend?t.container.firstChild:t.before:t.tags[t.tags.length-1].nextSibling;t.container.insertBefore(e,n),t.tags.push(e)},this.isSpeedy=e.speedy===void 0||e.speedy,this.tags=[],this.ctr=0,this.nonce=e.nonce,this.key=e.key,this.container=e.container,this.prepend=e.prepend,this.insertionPoint=e.insertionPoint,this.before=null}var t=e.prototype;return t.hydrate=function(e){e.forEach(this._insertTag)},t.insert=function(e){this.ctr%(this.isSpeedy?65e3:1)==0&&this._insertTag(a(this));var t=this.tags[this.tags.length-1];if(this.isSpeedy){var n=i(t);try{n.insertRule(e,n.cssRules.length)}catch{}}else t.appendChild(document.createTextNode(e));this.ctr++},t.flush=function(){this.tags.forEach(function(e){return e.parentNode?.removeChild(e)}),this.tags=[],this.ctr=0},e}(),s=`-ms-`,c=`-moz-`,l=`-webkit-`,u=`comm`,d=`rule`,f=`decl`,p=`@import`,m=`@keyframes`,h=`@layer`,g=Math.abs,_=String.fromCharCode,v=Object.assign;function y(e,t){return C(e,0)^45?(((t<<2^C(e,0))<<2^C(e,1))<<2^C(e,2))<<2^C(e,3):0}function b(e){return e.trim()}function x(e,t){return(e=t.exec(e))?e[0]:e}function S(e,t,n){return e.replace(t,n)}function ee(e,t){return e.indexOf(t)}function C(e,t){return e.charCodeAt(t)|0}function w(e,t,n){return e.slice(t,n)}function T(e){return e.length}function E(e){return e.length}function te(e,t){return t.push(e),e}function D(e,t){return e.map(t).join(``)}var ne=1,O=1,re=0,k=0,A=0,ie=``;function ae(e,t,n,r,i,a,o){return{value:e,root:t,parent:n,type:r,props:i,children:a,line:ne,column:O,length:o,return:``}}function oe(e,t){return v(ae(``,null,null,``,null,null,0),e,{length:-e.length},t)}function se(){return A}function ce(){return A=k>0?C(ie,--k):0,O--,A===10&&(O=1,ne--),A}function j(){return A=k<re?C(ie,k++):0,O++,A===10&&(O=1,ne++),A}function M(){return C(ie,k)}function le(){return k}function ue(e,t){return w(ie,e,t)}function de(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function fe(e){return ne=O=1,re=T(ie=e),k=0,[]}function pe(e){return ie=``,e}function me(e){return b(ue(k-1,_e(e===91?e+2:e===40?e+1:e)))}function he(e){for(;(A=M())&&A<33;)j();return de(e)>2||de(A)>3?``:` `}function ge(e,t){for(;--t&&j()&&!(A<48||A>102||A>57&&A<65||A>70&&A<97););return ue(e,le()+(t<6&&M()==32&&j()==32))}function _e(e){for(;j();)switch(A){case e:return k;case 34:case 39:e!==34&&e!==39&&_e(A);break;case 40:e===41&&_e(e);break;case 92:j();break}return k}function ve(e,t){for(;j()&&e+A!==57&&(e+A!==84||M()!==47););return`/*`+ue(t,k-1)+`*`+_(e===47?e:j())}function ye(e){for(;!de(M());)j();return ue(e,k)}function be(e){return pe(xe(``,null,null,null,[``],e=fe(e),0,[0],e))}function xe(e,t,n,r,i,a,o,s,c){for(var l=0,u=0,d=o,f=0,p=0,m=0,h=1,g=1,v=1,y=0,b=``,x=i,w=a,E=r,D=b;g;)switch(m=y,y=j()){case 40:if(m!=108&&C(D,d-1)==58){ee(D+=S(me(y),`&`,`&\f`),`&\f`)!=-1&&(v=-1);break}case 34:case 39:case 91:D+=me(y);break;case 9:case 10:case 13:case 32:D+=he(m);break;case 92:D+=ge(le()-1,7);continue;case 47:switch(M()){case 42:case 47:te(Ce(ve(j(),le()),t,n),c);break;default:D+=`/`}break;case 123*h:s[l++]=T(D)*v;case 125*h:case 59:case 0:switch(y){case 0:case 125:g=0;case 59+u:v==-1&&(D=S(D,/\f/g,``)),p>0&&T(D)-d&&te(p>32?we(D+`;`,r,n,d-1):we(S(D,` `,``)+`;`,r,n,d-2),c);break;case 59:D+=`;`;default:if(te(E=Se(D,t,n,l,u,i,s,b,x=[],w=[],d),a),y===123){if(u===0)xe(D,t,E,E,x,a,d,s,w);else switch(f===99&&C(D,3)===110?100:f){case 100:case 108:case 109:case 115:xe(e,E,E,r&&te(Se(e,E,E,0,0,i,s,b,i,x=[],d),w),i,w,d,s,r?x:w);break;default:xe(D,E,E,E,[``],w,0,s,w)}}}l=u=p=0,h=v=1,b=D=``,d=o;break;case 58:d=1+T(D),p=m;default:if(h<1){if(y==123)--h;else if(y==125&&h++==0&&ce()==125)continue}switch(D+=_(y),y*h){case 38:v=u>0?1:(D+=`\f`,-1);break;case 44:s[l++]=(T(D)-1)*v,v=1;break;case 64:M()===45&&(D+=me(j())),f=M(),u=d=T(b=D+=ye(le())),y++;break;case 45:m===45&&T(D)==2&&(h=0)}}return a}function Se(e,t,n,r,i,a,o,s,c,l,u){for(var f=i-1,p=i===0?a:[``],m=E(p),h=0,_=0,v=0;h<r;++h)for(var y=0,x=w(e,f+1,f=g(_=o[h])),ee=e;y<m;++y)(ee=b(_>0?p[y]+` `+x:S(x,/&\f/g,p[y])))&&(c[v++]=ee);return ae(e,t,n,i===0?d:s,c,l,u)}function Ce(e,t,n){return ae(e,t,n,u,_(se()),w(e,2,-2),0)}function we(e,t,n,r){return ae(e,t,n,f,w(e,0,r),w(e,r+1,-1),r)}function Te(e,t){for(var n=``,r=E(e),i=0;i<r;i++)n+=t(e[i],i,e,t)||``;return n}function Ee(e,t,n,r){switch(e.type){case h:if(e.children.length)break;case p:case f:return e.return=e.return||e.value;case u:return``;case m:return e.return=e.value+`{`+Te(e.children,r)+`}`;case d:e.value=e.props.join(`,`)}return T(n=Te(e.children,r))?e.return=e.value+`{`+n+`}`:``}function De(e){var t=E(e);return function(n,r,i,a){for(var o=``,s=0;s<t;s++)o+=e[s](n,r,i,a)||``;return o}}function Oe(e){return function(t){t.root||(t=t.return)&&e(t)}}function ke(e){var t=Object.create(null);return function(n){return t[n]===void 0&&(t[n]=e(n)),t[n]}}var Ae=function(e,t,n){for(var r=0,i=0;r=i,i=M(),r===38&&i===12&&(t[n]=1),!de(i);)j();return ue(e,k)},je=function(e,t){var n=-1,r=44;do switch(de(r)){case 0:r===38&&M()===12&&(t[n]=1),e[n]+=Ae(k-1,t,n);break;case 2:e[n]+=me(r);break;case 4:if(r===44){e[++n]=M()===58?`&\f`:``,t[n]=e[n].length;break}default:e[n]+=_(r)}while(r=j());return e},Me=function(e,t){return pe(je(fe(e),t))},Ne=new WeakMap,Pe=function(e){if(!(e.type!==`rule`||!e.parent||e.length<1)){for(var t=e.value,n=e.parent,r=e.column===n.column&&e.line===n.line;n.type!==`rule`;)if(n=n.parent,!n)return;if(!(e.props.length===1&&t.charCodeAt(0)!==58&&!Ne.get(n))&&!r){Ne.set(e,!0);for(var i=[],a=Me(t,i),o=n.props,s=0,c=0;s<a.length;s++)for(var l=0;l<o.length;l++,c++)e.props[c]=i[s]?a[s].replace(/&\f/g,o[l]):o[l]+` `+a[s]}}},Fe=function(e){if(e.type===`decl`){var t=e.value;t.charCodeAt(0)===108&&t.charCodeAt(2)===98&&(e.return=``,e.value=``)}};function Ie(e,t){switch(y(e,t)){case 5103:return l+`print-`+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return l+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return l+e+c+e+s+e+e;case 6828:case 4268:return l+e+s+e+e;case 6165:return l+e+s+`flex-`+e+e;case 5187:return l+e+S(e,/(\w+).+(:[^]+)/,l+`box-$1$2`+s+`flex-$1$2`)+e;case 5443:return l+e+s+`flex-item-`+S(e,/flex-|-self/,``)+e;case 4675:return l+e+s+`flex-line-pack`+S(e,/align-content|flex-|-self/,``)+e;case 5548:return l+e+s+S(e,`shrink`,`negative`)+e;case 5292:return l+e+s+S(e,`basis`,`preferred-size`)+e;case 6060:return l+`box-`+S(e,`-grow`,``)+l+e+s+S(e,`grow`,`positive`)+e;case 4554:return l+S(e,/([^-])(transform)/g,`$1`+l+`$2`)+e;case 6187:return S(S(S(e,/(zoom-|grab)/,l+`$1`),/(image-set)/,l+`$1`),e,``)+e;case 5495:case 3959:return S(e,/(image-set\([^]*)/,l+"$1$`$1");case 4968:return S(S(e,/(.+:)(flex-)?(.*)/,l+`box-pack:$3`+s+`flex-pack:$3`),/s.+-b[^;]+/,`justify`)+l+e+e;case 4095:case 3583:case 4068:case 2532:return S(e,/(.+)-inline(.+)/,l+`$1$2`)+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(T(e)-1-t>6)switch(C(e,t+1)){case 109:if(C(e,t+4)!==45)break;case 102:return S(e,/(.+:)(.+)-([^]+)/,`$1`+l+`$2-$3$1`+c+(C(e,t+3)==108?`$3`:`$2-$3`))+e;case 115:return~ee(e,`stretch`)?Ie(S(e,`stretch`,`fill-available`),t)+e:e}break;case 4949:if(C(e,t+1)!==115)break;case 6444:switch(C(e,T(e)-3-(~ee(e,`!important`)&&10))){case 107:return S(e,`:`,`:`+l)+e;case 101:return S(e,/(.+:)([^;!]+)(;|!.+)?/,`$1`+l+(C(e,14)===45?`inline-`:``)+`box$3$1`+l+`$2$3$1`+s+`$2box$3`)+e}break;case 5936:switch(C(e,t+11)){case 114:return l+e+s+S(e,/[svh]\w+-[tblr]{2}/,`tb`)+e;case 108:return l+e+s+S(e,/[svh]\w+-[tblr]{2}/,`tb-rl`)+e;case 45:return l+e+s+S(e,/[svh]\w+-[tblr]{2}/,`lr`)+e}return l+e+s+e+e}return e}var Le=[function(e,t,n,r){if(e.length>-1&&!e.return)switch(e.type){case f:e.return=Ie(e.value,e.length);break;case m:return Te([oe(e,{value:S(e.value,`@`,`@`+l)})],r);case d:if(e.length)return D(e.props,function(t){switch(x(t,/(::plac\w+|:read-\w+)/)){case`:read-only`:case`:read-write`:return Te([oe(e,{props:[S(t,/:(read-\w+)/,`:`+c+`$1`)]})],r);case`::placeholder`:return Te([oe(e,{props:[S(t,/:(plac\w+)/,`:`+l+`input-$1`)]}),oe(e,{props:[S(t,/:(plac\w+)/,`:`+c+`$1`)]}),oe(e,{props:[S(t,/:(plac\w+)/,s+`input-$1`)]})],r)}return``})}}],Re=function(e){var t=e.key;if(t===`css`){var n=document.querySelectorAll(`style[data-emotion]:not([data-s])`);Array.prototype.forEach.call(n,function(e){e.getAttribute(`data-emotion`).indexOf(` `)!==-1&&(document.head.appendChild(e),e.setAttribute(`data-s`,``))})}var r=e.stylisPlugins||Le,i={},a,s=[];a=e.container||document.head,Array.prototype.forEach.call(document.querySelectorAll(`style[data-emotion^="`+t+` "]`),function(e){for(var t=e.getAttribute(`data-emotion`).split(` `),n=1;n<t.length;n++)i[t[n]]=!0;s.push(e)});var c,l=[Pe,Fe],u,d=[Ee,Oe(function(e){u.insert(e)})],f=De(l.concat(r,d)),p=function(e){return Te(be(e),f)};c=function(e,t,n,r){u=n,p(e?e+`{`+t.styles+`}`:t.styles),r&&(m.inserted[t.name]=!0)};var m={key:t,sheet:new o({key:t,container:a,nonce:e.nonce,speedy:e.speedy,prepend:e.prepend,insertionPoint:e.insertionPoint}),nonce:e.nonce,inserted:i,registered:{},insert:c};return m.sheet.hydrate(s),m},ze=t((e=>{var t=typeof Symbol==`function`&&Symbol.for,n=t?Symbol.for(`react.element`):60103,r=t?Symbol.for(`react.portal`):60106,i=t?Symbol.for(`react.fragment`):60107,a=t?Symbol.for(`react.strict_mode`):60108,o=t?Symbol.for(`react.profiler`):60114,s=t?Symbol.for(`react.provider`):60109,c=t?Symbol.for(`react.context`):60110,l=t?Symbol.for(`react.async_mode`):60111,u=t?Symbol.for(`react.concurrent_mode`):60111,d=t?Symbol.for(`react.forward_ref`):60112,f=t?Symbol.for(`react.suspense`):60113,p=t?Symbol.for(`react.suspense_list`):60120,m=t?Symbol.for(`react.memo`):60115,h=t?Symbol.for(`react.lazy`):60116,g=t?Symbol.for(`react.block`):60121,_=t?Symbol.for(`react.fundamental`):60117,v=t?Symbol.for(`react.responder`):60118,y=t?Symbol.for(`react.scope`):60119;function b(e){if(typeof e==`object`&&e){var t=e.$$typeof;switch(t){case n:switch(e=e.type,e){case l:case u:case i:case o:case a:case f:return e;default:switch(e&&=e.$$typeof,e){case c:case d:case h:case m:case s:return e;default:return t}}case r:return t}}}function x(e){return b(e)===u}e.AsyncMode=l,e.ConcurrentMode=u,e.ContextConsumer=c,e.ContextProvider=s,e.Element=n,e.ForwardRef=d,e.Fragment=i,e.Lazy=h,e.Memo=m,e.Portal=r,e.Profiler=o,e.StrictMode=a,e.Suspense=f,e.isAsyncMode=function(e){return x(e)||b(e)===l},e.isConcurrentMode=x,e.isContextConsumer=function(e){return b(e)===c},e.isContextProvider=function(e){return b(e)===s},e.isElement=function(e){return typeof e==`object`&&!!e&&e.$$typeof===n},e.isForwardRef=function(e){return b(e)===d},e.isFragment=function(e){return b(e)===i},e.isLazy=function(e){return b(e)===h},e.isMemo=function(e){return b(e)===m},e.isPortal=function(e){return b(e)===r},e.isProfiler=function(e){return b(e)===o},e.isStrictMode=function(e){return b(e)===a},e.isSuspense=function(e){return b(e)===f},e.isValidElementType=function(e){return typeof e==`string`||typeof e==`function`||e===i||e===u||e===o||e===a||e===f||e===p||typeof e==`object`&&!!e&&(e.$$typeof===h||e.$$typeof===m||e.$$typeof===s||e.$$typeof===c||e.$$typeof===d||e.$$typeof===_||e.$$typeof===v||e.$$typeof===y||e.$$typeof===g)},e.typeOf=b})),Be=t(((e,t)=>{t.exports=ze()})),Ve=t(((e,t)=>{var n=Be(),r={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},i={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},a={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},o={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},s={};s[n.ForwardRef]=a,s[n.Memo]=o;function c(e){return n.isMemo(e)?o:s[e.$$typeof]||r}var l=Object.defineProperty,u=Object.getOwnPropertyNames,d=Object.getOwnPropertySymbols,f=Object.getOwnPropertyDescriptor,p=Object.getPrototypeOf,m=Object.prototype;function h(e,t,n){if(typeof t!=`string`){if(m){var r=p(t);r&&r!==m&&h(e,r,n)}var a=u(t);d&&(a=a.concat(d(t)));for(var o=c(e),s=c(t),g=0;g<a.length;++g){var _=a[g];if(!i[_]&&!(n&&n[_])&&!(s&&s[_])&&!(o&&o[_])){var v=f(t,_);try{l(e,_,v)}catch{}}}}return e}t.exports=h}));function He(e,t,n){var r=``;return n.split(` `).forEach(function(n){e[n]===void 0?n&&(r+=n+` `):t.push(e[n]+`;`)}),r}var Ue=function(e,t,n){var r=e.key+`-`+t.name;n===!1&&e.registered[r]===void 0&&(e.registered[r]=t.styles)},We=function(e,t,n){Ue(e,t,n);var r=e.key+`-`+t.name;if(e.inserted[t.name]===void 0){var i=t;do e.insert(t===i?`.`+r:``,i,e.sheet,!0),i=i.next;while(i!==void 0)}};function Ge(e){for(var t=0,n,r=0,i=e.length;i>=4;++r,i-=4)n=e.charCodeAt(r)&255|(e.charCodeAt(++r)&255)<<8|(e.charCodeAt(++r)&255)<<16|(e.charCodeAt(++r)&255)<<24,n=(n&65535)*1540483477+((n>>>16)*59797<<16),n^=n>>>24,t=(n&65535)*1540483477+((n>>>16)*59797<<16)^(t&65535)*1540483477+((t>>>16)*59797<<16);switch(i){case 3:t^=(e.charCodeAt(r+2)&255)<<16;case 2:t^=(e.charCodeAt(r+1)&255)<<8;case 1:t^=e.charCodeAt(r)&255,t=(t&65535)*1540483477+((t>>>16)*59797<<16)}return t^=t>>>13,t=(t&65535)*1540483477+((t>>>16)*59797<<16),((t^t>>>15)>>>0).toString(36)}var Ke={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,scale:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},qe=/[A-Z]|^ms/g,Je=/_EMO_([^_]+?)_([^]*?)_EMO_/g,Ye=function(e){return e.charCodeAt(1)===45},Xe=function(e){return e!=null&&typeof e!=`boolean`},Ze=ke(function(e){return Ye(e)?e:e.replace(qe,`-$&`).toLowerCase()}),Qe=function(e,t){switch(e){case`animation`:case`animationName`:if(typeof t==`string`)return t.replace(Je,function(e,t,n){return N={name:t,styles:n,next:N},t})}return Ke[e]!==1&&!Ye(e)&&typeof t==`number`&&t!==0?t+`px`:t};function $e(e,t,n){if(n==null)return``;var r=n;if(r.__emotion_styles!==void 0)return r;switch(typeof n){case`boolean`:return``;case`object`:var i=n;if(i.anim===1)return N={name:i.name,styles:i.styles,next:N},i.name;var a=n;if(a.styles!==void 0){var o=a.next;if(o!==void 0)for(;o!==void 0;)N={name:o.name,styles:o.styles,next:N},o=o.next;return a.styles+`;`}return et(e,t,n);case`function`:if(e!==void 0){var s=N,c=n(e);return N=s,$e(e,t,c)}}var l=n;if(t==null)return l;var u=t[l];return u===void 0?l:u}function et(e,t,n){var r=``;if(Array.isArray(n))for(var i=0;i<n.length;i++)r+=$e(e,t,n[i])+`;`;else for(var a in n){var o=n[a];if(typeof o!=`object`){var s=o;t!=null&&t[s]!==void 0?r+=a+`{`+t[s]+`}`:Xe(s)&&(r+=Ze(a)+`:`+Qe(a,s)+`;`)}else if(Array.isArray(o)&&typeof o[0]==`string`&&(t==null||t[o[0]]===void 0))for(var c=0;c<o.length;c++)Xe(o[c])&&(r+=Ze(a)+`:`+Qe(a,o[c])+`;`);else{var l=$e(e,t,o);switch(a){case`animation`:case`animationName`:r+=Ze(a)+`:`+l+`;`;break;default:r+=a+`{`+l+`}`}}}return r}var tt=/label:\s*([^\s;{]+)\s*(;|$)/g,N;function nt(e,t,n){if(e.length===1&&typeof e[0]==`object`&&e[0]!==null&&e[0].styles!==void 0)return e[0];var r=!0,i=``;N=void 0;var a=e[0];a==null||a.raw===void 0?(r=!1,i+=$e(n,t,a)):i+=a[0];for(var o=1;o<e.length;o++)i+=$e(n,t,e[o]),r&&(i+=a[o]);tt.lastIndex=0;for(var s=``,c;(c=tt.exec(i))!==null;)s+=`-`+c[1];return{name:Ge(i)+s,styles:i,next:N}}var P=e(n()),rt=function(e){return e()},it=P.useInsertionEffect?P.useInsertionEffect:!1,at=it||rt;it||P.useLayoutEffect;var ot=P.createContext(typeof HTMLElement<`u`?Re({key:`css`}):null);ot.Provider;var st=function(e){return(0,P.forwardRef)(function(t,n){return e(t,(0,P.useContext)(ot),n)})},ct=P.createContext({}),lt={}.hasOwnProperty,ut=`__EMOTION_TYPE_PLEASE_DO_NOT_USE__`,dt=function(e,t){var n={};for(var r in t)lt.call(t,r)&&(n[r]=t[r]);return n[ut]=e,n},ft=function(e){var t=e.cache,n=e.serialized,r=e.isStringTag;return Ue(t,n,r),at(function(){return We(t,n,r)}),null},pt=st(function(e,t,n){var r=e.css;typeof r==`string`&&t.registered[r]!==void 0&&(r=t.registered[r]);var i=e[ut],a=[r],o=``;typeof e.className==`string`?o=He(t.registered,a,e.className):e.className!=null&&(o=e.className+` `);var s=nt(a,void 0,P.useContext(ct));o+=t.key+`-`+s.name;var c={};for(var l in e)lt.call(e,l)&&l!==`css`&&l!==ut&&(c[l]=e[l]);return c.className=o,n&&(c.ref=n),P.createElement(P.Fragment,null,P.createElement(ft,{cache:t,serialized:s,isStringTag:typeof i==`string`}),P.createElement(i,c))}),F=e(r());Ve();var I=F.Fragment,L=function(e,t,n){return lt.call(t,`css`)?F.jsx(pt,dt(e,t),n):F.jsx(e,t,n)},R=function(e,t,n){return lt.call(t,`css`)?F.jsxs(pt,dt(e,t),n):F.jsxs(e,t,n)},mt=function(e,t){var n=arguments;if(t==null||!lt.call(t,`css`))return P.createElement.apply(void 0,n);var r=n.length,i=Array(r);i[0]=pt,i[1]=dt(e,t);for(var a=2;a<r;a++)i[a]=n[a];return P.createElement.apply(null,i)};(function(e){var t;t||=e.JSX||={}})(mt||={});function z(){return nt([...arguments])}var ht=(0,P.createContext)(void 0),gt=({children:e})=>{let[t,n]=(0,P.useState)({x:0,y:0}),r=(0,P.useMemo)(()=>({currentCell:t,setCurrentCell:n}),[t]);return L(ht.Provider,{value:r,children:e})},_t=()=>{let e=(0,P.useContext)(ht);if(!e)throw Error(`CurrentCellContext does not exist. Have you used a Crossword subcomponent outside a Crossword component?`);return e},vt=(0,P.createContext)(void 0),yt=({selectedEntryId:e,children:t})=>{let[n,r]=(0,P.useState)(e);return L(vt.Provider,{value:{currentEntryId:n,setCurrentEntryId:r},children:t})},B=()=>{let e=(0,P.useContext)(vt);if(!e)throw Error(`CurrentClueContext does not exist. Have you used a Crossword subcomponent outside a Crossword component?`);return e},bt=e=>{if(Object.prototype.toString.call(e)!==`[object Object]`)return!1;let t=Object.getPrototypeOf(e);return t===null||t===Object.prototype},V=e=>Object.prototype.toString.call(e)===`[object String]`,H=e=>e===void 0,xt=Object.defineProperty,St=e=>{throw TypeError(e)},Ct=(e,t,n)=>t in e?xt(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,U=(e,t,n)=>Ct(e,typeof t==`symbol`?t:t+``,n),wt=(e,t,n)=>t.has(e)||St(`Cannot `+n),W=(e,t,n)=>(wt(e,t,`read from private field`),n?n.call(e):t.get(e)),Tt=(e,t,n)=>t.has(e)?St(`Cannot add the same private member more than once`):t instanceof WeakSet?t.add(e):t.set(e,n),Et=(e,t,n,r)=>(wt(e,t,`write to private field`),t.set(e,n),n),G,Dt,Ot,kt=class{constructor(e){Tt(this,G),U(this,`isAvailable`,()=>!!W(this,G)),U(this,`get`,e=>{try{let t=JSON.parse(W(this,G)?.getItem(e)??``);if(!bt(t))return null;let{value:n,expires:r}=t;return(V(r)||typeof r==`number`)&&new Date>new Date(r)?(this.remove(e),null):n}catch{return null}}),U(this,`set`,(e,t,n)=>W(this,G)?.setItem(e,JSON.stringify({value:t,expires:n?new Date(n):void 0}))),U(this,`remove`,e=>W(this,G)?.removeItem(e)),U(this,`clear`,()=>W(this,G)?.clear()),U(this,`getRaw`,e=>W(this,G)?.getItem(e)??null),U(this,`setRaw`,(e,t)=>W(this,G)?.setItem(e,t)),U(this,`key`,e=>W(this,G)?.key(e)??null),U(this,`length`,()=>W(this,G)?.length??null);try{let t=window[e],n=new Date().toString();t.setItem(n,n);let r=t.getItem(n)==n;t.removeItem(n),r&&Et(this,G,t)}catch{}}};G=new WeakMap;var At=class{constructor(){Tt(this,Dt),Tt(this,Ot)}get local(){return W(this,Dt)??Et(this,Dt,new kt(`localStorage`))}get session(){return W(this,Ot)??Et(this,Ot,new kt(`sessionStorage`))}};Dt=new WeakMap,Ot=new WeakMap;var jt=new At,Mt=`gu.logger`,Nt={common:{background:`#C1D8FC`,font:`#052962`}},Pt={commercial:{background:`#77EEAA`,font:`#004400`},cmp:{background:`#FF6BB5`,font:`#2F0404`},dotcom:{background:`#000000`,font:`#ff7300`},design:{background:`#185E36`,font:`#FFF4F2`},tx:{background:`#2F4F4F`,font:`#FFFFFF`},supporterRevenue:{background:`#0F70B7`,font:`#ffffff`},identity:{background:`#6F5F8F`,font:`#ffffff`},openJournalism:{background:`#C74600`,font:`#FEF9F5`},perf:{background:`#FFD700`,font:`#000000`}},Ft=e=>Object.keys(Pt).includes(e),It,Lt,Rt=()=>{if(H(Lt)){let e=jt.local.get(Mt);Lt=V(e)?new Set(e.split(`,`).filter(Ft)):new Set}return Lt},zt=e=>{let t=Rt();t.add(e),jt.local.set(Mt,Array.from(t).join(`,`)),Wt(e,`🔔 Subscribed, hello!`)},Bt=e=>{let t=Rt();t.delete(e),jt.local.set(Mt,Array.from(t).join(`,`)),Wt(e,`🔕 Unsubscribed, good-bye!`)},Vt=e=>Rt().has(e),Ht={...Pt,...Nt},Ut=e=>{let{background:t,font:n}=Ht[e];return`background: ${t}; color: ${n}; padding: 2px 6px; border-radius:20px`},Wt=(e,...t)=>{if(Vt(e)){let n=[Ut(`common`),``,Ut(e),``];console.log(`%c@guardian%c %c${e}%c`,...n,...t)}};typeof window<`u`&&(window.guardian??(window.guardian={}),(It=window.guardian).logger??(It.logger={subscribeTo:zt,unsubscribeFrom:Bt,teams:()=>(console.warn(`guardian.logger.teams() is deprecated - use subscriptions()`),Object.keys(Pt)),subscriptions:()=>Object.keys(Pt)}));var Gt=/<\/?(span|i|b|sup|sub)[^>]*?>/g,Kt=e=>e.replace(Gt,``),qt=e=>{let t=e.trim();return/[!?.…]$/.test(t)?t:`${t}.`},Jt=e=>{let t=Kt(e.trim()),[,n,r]=/(.+)\((.+?)\)$/gm.exec(t)??[];if(!V(n)||!V(r)||!r.split(`,`).map(e=>e.trim()).every(e=>/^\d+$/.test(e)))return qt(t);let[i,...a]=r.split(`,`).map(e=>e.trim()+` letters`).reverse(),o=[a.reverse().join(`, `),i?.trim()].filter(Boolean).join(` and `);return`${qt(n)} ${o}.`},Yt=(e,t)=>{let n=e.group??[],r=e.number;if(H(r))return;let i=n.filter(e=>e.startsWith(r.toString()));if(i.length!==0)return i.map(e=>{let n=t.get(e);if(n)return Xt({entry:n})}).join(` Also, `)},Xt=({entry:e})=>`${e.id}: ${Jt(e.clue)}`,Zt=e=>{let t=new Map,n=[],{cols:r,rows:i}=e.dimensions,a=Object.assign(new Map(Array.from({length:r},(e,t)=>Array.from({length:i},(e,n)=>[`x${t}y${n}`,{x:t,y:n}])).flat()),{getByCoords:({x:e,y:t})=>a.get(`x${e}y${t}`)});for(let[r,i]of e.entries.entries()){let o=(r+e.entries.length-1)%e.entries.length,s=(r+1)%e.entries.length;t.set(i.id,{...i,nextEntryId:e.entries[s]?.id,previousEntryId:e.entries[o]?.id});for(let[e,t]of Object.entries(i.separatorLocations))for(let r of t){let{direction:t}=i,a=i.position.x+(t===`across`?r-1:0),o=i.position.y+(t===`down`?r-1:0);n.push({type:e,position:{x:a,y:o},direction:t})}for(let e=0;e<i.length;e+=1){let t=i.position.x,n=i.position.y;i.direction===`across`?t+=e:n+=e;let r=a.getByCoords({x:t,y:n}),o=[i.id,...r?.group??[]],s=e===0?i.number:r?.number;a.set(`x${t}y${n}`,{group:o,number:s,x:t,y:n,solution:i.solution?.[e]})}}return a.forEach(e=>{e.description=Yt(e,t)}),{cells:a,entries:t,separators:n}},Qt=(0,P.createContext)(void 0),$t=({entries:e,solutionAvailable:t,id:n,dimensions:r,children:i})=>{let{entries:a,cells:o,separators:s}=(0,P.useMemo)(()=>Zt({dimensions:r,entries:e}),[r,e]),c=(0,P.useCallback)(e=>`${e}-${n}`,[n]);return L(Qt.Provider,{value:{solutionAvailable:t,entries:a,cells:o,separators:s,getId:c,dimensions:r},children:i})},K=()=>{let e=(0,P.useContext)(Qt);if(!e)throw Error(`DataContext does not exist. Have you used a Crossword subcomponent outside a Crossword component?`);return e},en=new Map;function tn(e,t){let n=t?.serializer,[r]=(0,P.useState)(t?.defaultValue),[i]=(0,P.useState)(t?.defaultServerValue);return nn(e,r,i,t?.storageSync,n?.parse,n?.stringify)}function nn(e,t,n,r=!0,i=on,a=JSON.stringify){let o=(0,P.useRef)({string:null,parsed:void 0}),s=(0,P.useSyncExternalStore)((0,P.useCallback)(t=>{let n=n=>{e===n&&t()};return rn.add(n),()=>{rn.delete(n)}},[e]),()=>{let n=sn(()=>localStorage.getItem(e))??null;if(en.has(e))o.current.parsed=en.get(e);else if(n!==o.current.string){let e;try{e=n===null?t:i(n)}catch{e=t}o.current.parsed=e}return o.current.string=n,t!==void 0&&n===null&&sn(()=>{let n=a(t);localStorage.setItem(e,n),o.current={string:n,parsed:t}}),o.current.parsed},()=>n??t),c=(0,P.useCallback)(t=>{let n=t instanceof Function?t(o.current.parsed):t;try{localStorage.setItem(e,a(n)),en.delete(e)}catch{en.set(e,n)}an(e)},[e,a]),l=(0,P.useCallback)(()=>{sn(()=>localStorage.removeItem(e)),en.delete(e),an(e)},[e]);return(0,P.useEffect)(()=>{if(!r)return;let t=t=>{t.key===e&&t.storageArea===sn(()=>localStorage)&&an(e)};return window.addEventListener(`storage`,t),()=>window.removeEventListener(`storage`,t)},[e,r]),(0,P.useMemo)(()=>[s,c,{isPersistent:s===t||!en.has(e),removeItem:l}],[e,c,s,t,l])}var rn=new Set;function an(e){for(let t of[...rn])t(e)}function on(e){return e===`undefined`?void 0:JSON.parse(e)}function sn(e){try{return e()}catch{}}var cn=e=>Array.from({length:e.cols},()=>Array.from({length:e.rows},()=>``)),ln={stringify:e=>JSON.stringify({value:e}),parse:e=>JSON.parse(e).value},un=(e,{dimensions:t})=>Array.isArray(e)?e.length===t.cols?e.every(e=>Array.isArray(e))?e.every(e=>e.length===t.rows)?!0:(Wt(`dotcom`,`Invalid crossword progress - each row is not of length dimensions.rows`),!1):(Wt(`dotcom`,`Invalid crossword progress - each row is not an array`),!1):(Wt(`dotcom`,`Invalid crossword progress - progress is not an array of length dimensions.cols`),!1):(Wt(`dotcom`,`Invalid crossword progress - progress is not an array`),!1),dn=({userProgress:e,dimensions:t})=>un(e,{dimensions:t})?e:cn(t),fn=(0,P.createContext)(void 0),pn=({children:e,id:t,dimensions:n,progress:r})=>{let i=dn({dimensions:n,userProgress:r}),[a,o]=(0,P.useState)(i),[s,c,l]=tn(`crosswords.${t}`,{defaultValue:i,serializer:ln}),u=(0,P.useCallback)(e=>{c(e),o(e)},[c]);(0,P.useEffect)(()=>{un(s,{dimensions:n})?o(s):u(i)},[i,n,s,u]);let d=(0,P.useMemo)(()=>({progress:a,updateProgress:u,isStored:l.isPersistent}),[a,u,l.isPersistent]);return L(fn.Provider,{value:d,children:e})},q=()=>{let e=(0,P.useContext)(fn);if(!e)throw Error(`ProgressContext does not exist. Have you used a Crossword subcomponent outside a Crossword component?`);return e},mn=(0,P.createContext)(void 0),hn=({children:e,userShowAnagramHelper:t=!1})=>{let[n,r]=(0,P.useState)(t),i=(0,P.useCallback)(()=>{r(e=>!e)},[r]);return L(mn.Provider,{value:{showAnagramHelper:n,setShowAnagramHelper:r,toggleAnagramHelper:i},children:e})},gn=()=>{let e=(0,P.useContext)(mn);if(!e)throw Error(`ShowAnagramHelperContext does not exist. Have you used a Crossword subcomponent outside a Crossword component?`);return e},_n=(0,P.createContext)(void 0),vn=({theme:e,children:t})=>L(_n.Provider,{value:e,children:t}),J=()=>{let e=(0,P.useContext)(_n);if(!e)throw Error(`ThemeContext does not exist. Have you used a Crossword subcomponent outside a Crossword component?`);return e},yn=(0,P.createContext)(void 0),bn=({children:e,validAnswers:t})=>{let[n,r]=(0,P.useState)(t??new Set),i=(0,P.useMemo)(()=>({validAnswers:n,setValidAnswers:r}),[n]);return L(yn.Provider,{value:i,children:e})},xn=()=>{let e=(0,P.useContext)(yn);if(!e)throw Error(`ValidAnswersContext does not exist. Have you used a Crossword subcomponent outside a Crossword component?`);return e},Sn=({data:e,selectedEntryId:t,userProgress:n,theme:r,children:i})=>{let{entries:a,dimensions:o,solutionAvailable:s,id:c}=e;return L(vn,{theme:r,children:L(hn,{children:L($t,{entries:a,solutionAvailable:s,dimensions:o,id:c,children:L(pn,{id:c,dimensions:o,progress:n,children:L(gt,{children:L(yt,{selectedEntryId:t,children:L(bn,{children:i})})})})})})})},Y={brand:{100:`#001536`,300:`#041F4A`,400:`#052962`,500:`#0077B6`,600:`#506991`,800:`#C1D8FC`},brandAlt:{200:`#F3C100`,300:`#FFD900`,400:`#FFE500`},culture:{50:`#2B2625`,100:`#3E3323`,200:`#574835`,300:`#6B5840`,350:`#866D50`,400:`#866D50`,450:`#A1845C`,500:`#EACCA0`,600:`#E7D4B9`,700:`#EFE8DD`,800:`#FBF6EF`},error:{100:`#4D0000`,200:`#8A0000`,400:`#C70000`,500:`#FF9081`,800:`#FFB3B3`,950:`#FFF0F0`},focus:{400:`#0077B6`},informative:{950:`#EBF8FF`},labs:{100:`#09615B`,200:`#0C7A73`,300:`#65A897`,400:`#69D1CA`,500:`#A8E3DF`,600:`#DCF4F3`,700:`#F3FBFB`},lifestyle:{100:`#510043`,200:`#650054`,300:`#7D0068`,400:`#BB3B80`,450:`#F37ABC`,500:`#FFABDB`,600:`#FEC8D3`,800:`#FEF1F8`},neutral:{0:`#000000`,7:`#121212`,10:`#1A1A1A`,20:`#333333`,38:`#545454`,46:`#707070`,60:`#999999`,73:`#BABABA`,86:`#DCDCDC`,93:`#EDEDED`,97:`#F6F6F6`,100:`#FFFFFF`},news:{100:`#660505`,200:`#8B0000`,300:`#AB0613`,400:`#C70000`,500:`#FF5943`,550:`#FF9081`,600:`#FFBAC8`,700:`#FFD8D1`,800:`#FFF4F2`},notificationBlue:{400:`#0190F7`},opinion:{100:`#672005`,200:`#8D2700`,300:`#C74600`,400:`#C74600`,450:`#E05E00`,500:`#FF7F0F`,550:`#FF9941`,600:`#F9B376`,700:`#FFE7D4`,800:`#FEF9F5`},specialReport:{100:`#222527`,200:`#303538`,300:`#3F464A`,400:`#595C5F`,450:`#9DA0A2`,500:`#ABC2C9`,700:`#E4E5E8`,800:`#EFF1F2`},specialReportAlt:{100:`#2B2B2A`,200:`#B9300A`,300:`#FF663D`,700:`#EBE6E1`,800:`#F5F0EB`},sport:{100:`#003C60`,200:`#004E7C`,300:`#005689`,400:`#0077B6`,500:`#00B2FF`,600:`#90DCFF`,700:`#D8F1FF`,800:`#F1F8FC`},success:{100:`#0E3921`,300:`#185E36`,400:`#22874D`,500:`#58D08B`,700:`#99E5BA`,800:`#C2F0D5`,950:`#EFFBF4`}},Cn=e=>`${e}_description`,wn=`
 outline: 0;
 html:not(.src-focus-disabled) & {
	 box-shadow: 0 0 0 3px ${Y.focus[400]};
 }
`,Tn=`
 outline: 0;
 html:not(.src-focus-disabled) & {
	outline: 5px solid ${Y.focus[400]};
	outline-offset: 3px;
 }
`,X=`
	position: absolute;
	overflow: hidden; /* gets rid of horizontal scrollbar that appears in some circumstances */
	white-space: nowrap; /* The white-space property forces the content to render on one line. */
	width: 1px;  /* ensures content is announced by VoiceOver. */
	height: 1px; /* ensures content is announced by VoiceOver. */
	margin: -1px; /* hide or clip content that does not fit into a 1-pixel visible area. */
	padding: 0; /* hide or clip content that does not fit into a 1-pixel visible area. */
	border: 0;
	clip: rect(1px, 1px, 1px, 1px); /* clip removes any visible trace of the element */
	-webkit-clip-path: inset(50%); /* clip removes any visible trace of the element */
	clip-path: inset(50%); /* clip removes any visible trace of the element */
`,En={short:`.2s cubic-bezier(.64, .57, .67, 1.53)`,medium:`.3s ease-in-out`,long:`.65s ease-in-out`},Dn=e=>kn(On(e)),On=e=>{let t=e.match(/[a-f\d]{6}|[a-f\d]{3}/i);if(!t)return[0,0,0];let n=t[0];t[0].length===3&&(n=[...n].map(e=>e+e).join(``));let r=Number.parseInt(n,16);return[r>>16&255,r>>8&255,r&255]},kn=e=>{let t=e[0]/255,n=e[1]/255,r=e[2]/255,i=Math.min(t,n,r),a=Math.max(t,n,r),o=a-i,s=0,c;switch(a){case i:s=0;break;case t:s=(n-r)/o;break;case n:s=2+(r-t)/o;break;case r:s=4+(t-n)/o}s=Math.min(s*60,360),s<0&&(s+=360);let l=(i+a)/2;return c=a===i?0:l<=.5?o/(a+i):o/(2-a-i),[Math.round(s),Math.round(c*100),Math.round(l*100)]},An=e=>Mn(jn(e)),jn=e=>{let t=e[0]/360,n=e[1]/100,r=e[2]/100,i,a;if(n===0)return a=r*255,[a,a,a];let o=r<.5?r*(1+n):r+n-r*n,s=2*r-o,c=[0,0,0];for(let e=0;e<3;e++)i=t+1/3*-(e-1),i<0&&i++,i>1&&i--,a=6*i<1?s+(o-s)*6*i:2*i<1?o:3*i<2?s+(o-s)*(2/3-i)*6:s,c[e]=a*255;return c},Mn=e=>{let t=(((Math.round(e[0])&255)<<16)+((Math.round(e[1])&255)<<8)+(Math.round(e[2])&255)).toString(16).toUpperCase();return`000000`.slice(t.length)+t},Nn=e=>/^#(?:[0-9a-f]{6}|[0-9a-f]{3})$/i.test(e),Pn=(e,t)=>{if(e===`transparent`)return t!==void 0&&Nn(t)?In(t):e;if(!Nn(e))return e;let[n,r,i]=Dn(e);return`#${An([n,r,i+Fn(i)])}`},Fn=e=>e<=10?20:e<=20?-8:e<=80?-5:e<=90?-7:-10,In=e=>{let[,,t]=Dn(e),[n,r,i]=On(e);return`rgba(${n}, ${r}, ${i}, ${Ln(t)})`},Ln=e=>e<=40?.1:e<=50?.15:.2,Z={ctaMedium:44,ctaSmall:36,ctaXsmall:24,iconMedium:30,iconSmall:26,iconXsmall:20,inputMedium:44,inputXsmall:24},Rn={medium:30,small:26,xsmall:20},zn={medium:44,small:36,xsmall:24},Bn={ctaMedium:44,ctaSmall:36,ctaXsmall:24,iconMedium:30,iconSmall:26,iconXsmall:20,inputXsmall:24},Vn={ctaMedium:`2.75rem`,ctaSmall:`2.25rem`,ctaXsmall:`1.5rem`,iconMedium:`1.875rem`,iconSmall:`1.625rem`,iconXsmall:`1.25rem`,inputMedium:`2.75rem`,inputXsmall:`1.5rem`},Hn={ctaMedium:`2.75rem`,ctaSmall:`2.25rem`,ctaXsmall:`1.5rem`,iconMedium:`1.875rem`,iconSmall:`1.625rem`,iconXsmall:`1.25rem`,inputXsmall:`1.5rem`},Q={0:2,1:4,2:8,3:12,4:16,5:20,6:24,8:32,9:36,10:40,12:48,14:56,16:64,18:72,24:96},Un=`
	font-family: "GH Guardian Headline", "Guardian Egyptian Web", Georgia, serif;
	font-size: 1.0625rem;
	line-height: 1.15;
	font-weight: 700;
	font-style: normal;
	--source-text-decoration-thickness: 2px;
`,Wn=`
	font-family: GuardianTextSans, "Guardian Text Sans Web", "Helvetica Neue", Helvetica, Arial, "Lucida Grande", sans-serif;
	font-size: 0.75rem;
	line-height: 1.3;
	font-weight: 400;
	font-style: normal;
	--source-text-decoration-thickness: 2px;
`,Gn=`
	font-family: GuardianTextSans, "Guardian Text Sans Web", "Helvetica Neue", Helvetica, Arial, "Lucida Grande", sans-serif;
	font-size: 0.875rem;
	line-height: 1.3;
	font-weight: 400;
	font-style: normal;
	--source-text-decoration-thickness: 2px;
`,Kn=`
	font-family: GuardianTextSans, "Guardian Text Sans Web", "Helvetica Neue", Helvetica, Arial, "Lucida Grande", sans-serif;
	font-size: 1.0625rem;
	line-height: 1.3;
	font-weight: 400;
	font-style: normal;
	--source-text-decoration-thickness: 2px;
`,qn=`
	font-family: GuardianTextSans, "Guardian Text Sans Web", "Helvetica Neue", Helvetica, Arial, "Lucida Grande", sans-serif;
	font-size: 0.875rem;
	line-height: 1.3;
	font-weight: 700;
	font-style: normal;
	--source-text-decoration-thickness: 2px;
`,Jn=`
	font-family: GuardianTextSans, "Guardian Text Sans Web", "Helvetica Neue", Helvetica, Arial, "Lucida Grande", sans-serif;
	font-size: 1.0625rem;
	line-height: 1.3;
	font-weight: 700;
	font-style: normal;
	--source-text-decoration-thickness: 2px;
`,Yn=`
	font-family: GuardianTextSans, "Guardian Text Sans Web", "Helvetica Neue", Helvetica, Arial, "Lucida Grande", sans-serif;
	font-size: 0.75rem;
	line-height: 1.3;
	font-weight: 400;
	font-style: italic;
	--source-text-decoration-thickness: 2px;
`,Xn=`
	padding: 0;
`,Zn=`
	border: 0;
	padding: 0;
	margin: 0;
`,Qn=`
	*, *:before, *:after {
        box-sizing: border-box;
    }
    html {
        -moz-osx-font-smoothing: grayscale;
        -webkit-font-smoothing: antialiased;
        /* always show the vertical scroll bar to stop the page
         * jumping about when navigating between pages where
         * one has content shorter than the viewport */
        overflow-y: scroll;
    }
    html, body {
        text-rendering: optimizeLegibility;
        font-feature-settings: 'kern';
        font-kerning: normal; /* Safari 7+, Firefox 24+, Chrome 33(?)+, Opera 21 */
        font-variant-ligatures: common-ligatures;
    }
    body {
        background-color: ${Y.neutral[100]};
        color: ${Y.neutral[7]};
    }
    em {
        font-style: italic;
    }
`,$n={legend:Xn,fieldset:Zn,defaults:Qn,resetCSS:`
	html, body, div, span, applet, object, iframe,
	h1, h2, h3, h4, h5, h6, p, blockquote, pre,
	a, abbr, acronym, address, big, cite, code,
	del, dfn, em, img, ins, kbd, q, s, samp,
	small, strike, strong, sub, sup, tt, var,
	b, u, i, center,
	dl, dt, dd, menu, ol, ul, li,
	fieldset, form, label, legend,
	table, caption, tbody, tfoot, thead, tr, th, td,
	article, aside, canvas, details, embed,
	figure, figcaption, footer, header, hgroup,
	main, menu, nav, output, ruby, section, summary,
	time, mark, audio, video {
		margin: 0;
		padding: 0;
		border: 0;
		font-size: 100%;
		font: inherit;
		vertical-align: baseline;
	}
	/* HTML5 display-role reset for older browsers */
	article, aside, details, figcaption, figure,
	footer, header, hgroup, main, menu, nav, section {
		display: block;
	}
	/* HTML5 hidden-attribute fix for newer browsers */
	*[hidden] {
		display: none;
	}
	body {
		line-height: 1;
	}
	menu, ol, ul {
		list-style: none;
	}
	blockquote, q {
		quotes: none;
	}
	blockquote:before, blockquote:after,
	q:before, q:after {
		content: '';
		content: none;
	}
	table {
		border-collapse: collapse;
		border-spacing: 0;
	}

	${Qn}
`},er=z`
	& > sub {
		vertical-align: sub;
	}
	& > sup {
		vertical-align: super;
	}
	& > b {
		font-weight: bold;
	}
	& > i {
		font-style: italic;
	}
`,tr=(0,P.memo)(({additionalCss:e})=>{let{entries:t}=K(),{currentEntryId:n}=B(),r=J(),i=H(n)?void 0:t.get(n);return L(`div`,{"aria-hidden":`true`,css:[e,z`
		top: 0;
		display: flex;
		min-height: 2em;
		${Gn};
		background: ${r.focusedClueBackgroundColor};
		@media print {
			display: none;
		}
	`],children:i&&R(I,{children:[L(`span`,{"aria-hidden":`true`,css:z`
							flex: 0 0 auto;
							font-weight: bold;
							padding-right: 0.625em;
							text-transform: capitalize;
						`,children:i.id.split(`-`).join(` `)}),L(`span`,{"aria-hidden":`true`,css:er,dangerouslySetInnerHTML:{__html:i.clue}})]})})}),nr=(0,P.memo)(({children:e})=>{let t=J();return L(`div`,{css:z`
				${Un};
				border-top: 1px solid ${t.clueListBorderColor};
				border-bottom: 1px dotted ${t.borderColor};
				height: 2em;
				margin-bottom: 0.5em;
				text-transform: capitalize;

				@media print {
					border-top: none;
				}
			`,children:e})});nr.displayName=`CluesHeader`;var rr=(0,P.memo)(({Controls:e,Grid:t,AnagramHelper:n,Clues:r,SavedMessage:i,gridWidth:a})=>{let{clueMinWidth:o,clueMaxWidth:s,gridMinWidth:c}=J(),l=Math.max(a,c),u=l+o,d=l+o*2;return R(`div`,{css:z`
				display: flex;
				flex-direction: column;
				gap: ${Q[4]}px;
				max-width: ${l+s*2}px;
				height: 100%;
				overflow: auto;

				@container (min-width: ${u}px) {
					flex-direction: row;
				}

				@media print {
					flex-direction: column;
				}
			`,children:[L(n,{}),R(`div`,{css:z`
					@container (min-width: ${u}px) {
						max-height: 100%;
						overflow: auto;
						flex-basis: ${l}px;
					}
				`,children:[L(tr,{additionalCss:z`
						max-width: ${l}px;
						@container (min-width: ${u}px) {
							display: none;
						}
					`}),L(t,{}),L(tr,{additionalCss:z`
						max-width: ${l}px;
						@container (min-width: ${u}px) {
							display: none;
						}
					`}),L(`div`,{css:z`
						margin-top: ${Q[1]}px;
						@media print {
							display: none;
						}
					`,children:L(e,{})}),L(`div`,{css:z`
						${Yn};
						@media print {
							display: none;
						}
					`,children:L(i,{})})]}),R(`div`,{css:z`
					flex: 1;
					display: flex;
					flex-direction: column;
					gap: ${Q[4]}px;
					${Gn};
					height: 100%;

					> * {
						max-width: ${Math.max(s,l)}px;
						flex: 1;
					}

					@container (min-width: ${u}px) {
						overflow: auto;
					}

					@container (min-width: ${d}px) {
						flex-direction: row;
						overflow: auto;
						min-height: 100%;

						> * {
							overflow: auto;
						}
					}

					@media print {
						flex-direction: row;
					}
				`,children:[L(r,{direction:`across`,Header:nr}),L(r,{direction:`down`,Header:nr})]})]})}),ir={gridBackgroundColor:Y.neutral[7],gridForegroundColor:Y.neutral[100],gridTextColor:Y.neutral[7],gridPrintBackgroundColor:Y.neutral[46],gridGutterSize:1,gridCellSize:32,gridCellStrikeThrough:Y.neutral[46],gridMinWidth:300,textColor:Y.neutral[7],focusColor:Y.focus[400],selectedTextColor:Y.neutral[7],selectedBackgroundColor:Y.brandAlt[400],connectedBackgroundColor:`#fff7b2`,buttonBackgroundColor:Y.lifestyle[400],buttonBackgroundHoverColor:`#942f65`,borderColor:Y.neutral[86],clueListBorderColor:Y.lifestyle[400],clueMinWidth:240,clueMaxWidth:480,anagramHelperBackgroundColor:Y.neutral[97],anagramHelperProgressBackgroundColor:Y.neutral[86],focusedClueBackgroundColor:Y.neutral[100]};Y.neutral[100],Y.brand[400],Y.brand[400],Y.brand[800],Y.brand[400],Y.brand[400],Y.brand[400],Y.brand[400],Y.neutral[100],Y.neutral[100],Y.brand[600],Y.neutral[100],Y.brand[300],Y.neutral[100],Y.neutral[100],Y.neutral[100],Y.neutral[7],Y.neutral[7],Y.brandAlt[200],Y.neutral[0],Y.neutral[7],Y.neutral[7];var ar={textPrimary:Y.neutral[100],backgroundPrimary:Y.brand[400],textSecondary:Y.brand[400],backgroundSecondary:Y.brand[800],textTertiary:Y.brand[400],backgroundTertiary:`transparent`,borderTertiary:Y.brand[400],textSubdued:Y.brand[400]};Y.brand[400],Y.neutral[100],Y.neutral[100],Y.brand[600],Y.neutral[100],Y.brand[300],Y.neutral[100],Y.neutral[100],Y.neutral[100],Y.neutral[7],Y.neutral[7],Y.brandAlt[200],Y.neutral[0],Y.neutral[7],Y.neutral[7],Y.neutral[7],Y.neutral[46],Y.neutral[46],Y.error[400],Y.success[400],Y.neutral[100],Y.brand[800],Y.brand[800],Y.error[500],Y.success[500];var or={textLabel:Y.neutral[7],textOptional:Y.neutral[46],textSupporting:Y.neutral[46],textError:Y.error[400],textSuccess:Y.success[400]};Y.neutral[100],Y.brand[800],Y.brand[800],Y.error[500],Y.success[500];var sr={userFeedback:{textSuccess:Y.success[400],textError:Y.error[400]}};Y.success[500],Y.error[500];var cr={textSuccess:Y.success[400],textError:Y.error[400]};Y.success[500],Y.error[500];var lr={textUserInput:Y.neutral[7],textLabel:Y.neutral[7],textOptional:Y.neutral[46],textSupporting:Y.neutral[46],textError:Y.neutral[7],textSuccess:Y.success[400],backgroundInput:Y.neutral[100],border:Y.neutral[46],borderError:Y.error[400],borderSuccess:Y.success[400]};Y.neutral[7],Y.neutral[7],Y.neutral[46],Y.neutral[46],Y.neutral[7],Y.success[400],Y.neutral[100],Y.neutral[46],Y.focus[400],Y.error[400],Y.success[400],{...sr};var ur=(e,t,n,r)=>({...e,...r?r(n):n,...t}),dr={background:Y.brand[800],color:Y.brand[400]},fr=({size:e=`medium`,theme:t})=>{let n={...dr,...t};return L(`svg`,{width:typeof e==`number`?e:Rn[e],viewBox:`0 0 30 30`,focusable:!1,"aria-hidden":!0,children:R(`g`,{children:[L(`animateTransform`,{attributeName:`transform`,attributeType:`XML`,type:`rotate`,from:`0 15 15`,to:`360 15 15`,dur:`2.5s`,repeatCount:`indefinite`}),L(`circle`,{cx:15,cy:15,r:12.5,strokeWidth:5,stroke:n.background,fill:`transparent`}),L(`circle`,{cx:15,cy:15,r:12.5,strokeWidth:5,strokeDasharray:82,strokeDashoffset:82,stroke:n.color,fill:`transparent`,children:L(`animate`,{attributeName:`stroke-dashoffset`,dur:`3.5s`,from:164,to:0,repeatCount:`indefinite`})})]})})},pr=({hideLabel:e,iconSvg:t,isLoading:n,children:r})=>{let i=[r];return n?(e||i.push(L(`div`,{className:`src-button-space`},`space`)),i.push((0,P.cloneElement)(L(fr,{theme:{background:`transparent`,color:`currentColor`}}),{key:`svg`}))):t&&(e||i.push(L(`div`,{className:`src-button-space`},`space`)),i.push((0,P.cloneElement)(t,{key:`svg`}))),e?R(I,{children:[L(`span`,{css:z`
						${X};
					`,children:r}),i[1]]}):i},mr=z`
	display: inline-flex;
	justify-content: center;
	align-items: center;
	box-sizing: border-box;
	border: none;
	background: transparent;
	cursor: pointer;
	transition: ${En.medium};
	text-decoration: none;
	white-space: nowrap;
	vertical-align: middle;

	:disabled {
		cursor: not-allowed;
	}

	&:focus {
		${Tn};
	}
`,hr={xsmall:16,small:20,default:24},gr=e=>z`
		svg {
			/*
		 * The loading spinner width has been specified as 24px in the design
		 * which falls outside of the icon sizes in foundations, so we
		 * override the width here.
		 */
			width: ${hr[e]}px;
		}
	`,_r=e=>z`
	background-color: ${e.backgroundPrimary};
	color: ${e.textPrimary};

	&:hover {
		background-color: ${e.backgroundPrimaryHover??Pn(e.backgroundPrimary)};
	}
`,vr=e=>z`
	background-color: ${e.backgroundSecondary};
	color: ${e.textSecondary};

	&:hover {
		background-color: ${e.backgroundSecondaryHover??Pn(e.backgroundSecondary)};
	}
`,yr=e=>z`
	background-color: ${e.backgroundTertiary};
	color: ${e.textTertiary};
	border: 1px solid ${e.borderTertiary};

	&:hover {
		background-color: ${e.backgroundTertiaryHover??Pn(e.backgroundTertiary,e.borderTertiary)};
	}
`,br=e=>z`
	padding: 0;
	background-color: transparent;
	color: ${e.textSubdued};
	text-decoration: underline;
	text-underline-offset: 4px;

	&:hover {
		text-decoration-thickness: 4px;
	}

	/* Why is this zero? Because the default is to have rounded corners but here, when
	   there is only text, it is more natural to show a rectangle for the focus halo */
	border-radius: 0;
`,xr=z`
	${Jn};
	height: ${Z.ctaMedium}px;
	min-height: ${Z.ctaMedium}px;
	padding: 0 ${Q[5]}px;
	border-radius: ${Z.ctaMedium}px;
	padding-bottom: 2px;
`,Sr=z`
	${Jn};
	height: ${Z.ctaSmall}px;
	min-height: ${Z.ctaSmall}px;
	padding: 0 ${Q[4]}px;
	border-radius: ${Z.ctaSmall}px;
	padding-bottom: 2px;
`,Cr=z`
	${qn};
	height: ${Z.ctaXsmall}px;
	min-height: ${Z.ctaXsmall}px;
	padding: 0 ${Q[3]}px;
	border-radius: ${Z.ctaXsmall}px;
	padding-bottom: 1px;
`,wr=z`
	svg {
		flex: 0 0 auto;
		display: block;
		fill: currentColor;
		position: relative;
		width: ${Bn.iconMedium}px;
		height: auto;
	}
	.src-button-space {
		width: ${Q[3]}px;
	}
`,Tr=z`
	svg {
		flex: 0 0 auto;
		display: block;
		fill: currentColor;
		position: relative;
		width: ${Bn.iconSmall}px;
		height: auto;
	}
	.src-button-space {
		width: ${Q[2]}px;
	}
`,Er=z`
	svg {
		flex: 0 0 auto;
		display: block;
		fill: currentColor;
		position: relative;
		width: ${Bn.iconXsmall}px;
		height: auto;
	}
	.src-button-space {
		width: ${Q[1]}px;
	}
`,Dr=-Q[1],Or=z`
	flex-direction: row-reverse;
	svg {
		margin-left: ${Dr}px;
	}
`,kr=z`
	svg {
		margin-right: ${Dr}px;
	}
`,Ar=z`
	padding: 0;
`,jr=z`
	${Ar};
	width: ${Bn.ctaMedium}px;
`,Mr=z`
	${Ar};
	width: ${Bn.ctaSmall}px;
`,Nr=z`
	${Ar};
	width: ${Bn.ctaXsmall}px;
`,Pr=z`
	svg {
		transform: translate(0, 0);
		transition: ${En.short};
	}
	&:hover,
	&:focus {
		svg {
			transform: translate(${Q[1]/2}px, 0);
		}
	}
`,Fr={primary:_r,secondary:vr,tertiary:yr,subdued:br},Ir={right:kr,left:Or},Lr={default:xr,small:Sr,xsmall:Cr},Rr={default:wr,small:Tr,xsmall:Er},zr={default:jr,small:Mr,xsmall:Nr},Br=(e,t)=>ur(ar,t,e),Vr=({priority:e=`primary`,size:t=`default`,icon:n,hideLabel:r,iconSide:i=`left`,nudgeIcon:a,cssOverrides:o,isLoading:s,theme:c})=>l=>[mr,Lr[t],Fr[e](Br(l.button,c)),n??s?Rr[t]:``,(n??s)&&!r?Ir[i]:``,a?Pr:``,r?zr[t]:``,s?gr(t):void 0,o],Hr=({priority:e,size:t,icon:n,iconSide:r,hideLabel:i,nudgeIcon:a,type:o=`button`,isLoading:s=!1,loadingAnnouncement:c=`Loading`,cssOverrides:l,children:u,theme:d,...f})=>L(`button`,{css:Vr({size:t,priority:e,icon:n,hideLabel:i,iconSide:r,nudgeIcon:a,cssOverrides:l,isLoading:s,theme:d}),type:o,"aria-live":`polite`,"aria-label":s?c:void 0,...f,children:pr({hideLabel:i,iconSvg:n,isLoading:s,children:u})}),Ur={medium:Jn,small:qn};z`
	${$n.legend};
`;var Wr=(e,t)=>z`
	${Ur[t]};
	color: ${e.textLabel};
`,Gr=e=>z`
	${Gn};
	color: ${e.textOptional};
	font-style: italic;
`,Kr=e=>z`
	${Gn};
	color: ${e.textSupporting};
	margin: 2px 0 0;
`,qr=(e,t)=>ur(or,t,e),Jr=z`
	${X}
`,Yr=({hideLabel:e,children:t,theme:n})=>L(`p`,{css:t=>[Kr(qr(t.label,n)),e?Jr:``],children:t}),Xr=z`
	${X}
`,Zr=({text:e,optional:t,hideLabel:n,size:r=`medium`,theme:i})=>R(`div`,{css:e=>[Wr(qr(e.label,i),r),n?Xr:``],children:[e,` `,t?L(`span`,{css:e=>Gr(qr(e.label,i)),children:`Optional`}):``]}),Qr=({size:e,theme:t})=>L(`svg`,{width:e?Rn[e]:void 0,height:void 0,viewBox:`-3 -3 30 30`,xmlns:`http://www.w3.org/2000/svg`,focusable:!1,"aria-hidden":!0,children:L(`path`,{fillRule:`evenodd`,clipRule:`evenodd`,d:`M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10m-10.704 1.818h1.386l.659-8.636-.91-.91h-.885l-.91.91zm2.068 3.637c0-.75-.614-1.364-1.364-1.364s-1.364.614-1.364 1.364.614 1.363 1.364 1.363 1.364-.613 1.364-1.363`,fill:t?.fill})}),$r=({size:e,theme:t,isAnnouncedByScreenReader:n=!1})=>R(I,{children:[L(Qr,{size:e,theme:t}),n?L(`span`,{css:z`
					${X}
				`,children:`Warning`}):``]}),ei=(e,t)=>ur(cr,t,e),ti=z`
	display: flex;
	align-items: flex-start;

	svg {
		fill: currentColor;
		/* we don't want the SVG to change size depending on available space */
		flex: none;

		/*
		a visual kick to vertically align the icon with the top row of text
		and horizontally pull it to the beginning of the row
		 */
		transform: translate(-4px, -4px);
	}
`,ni={small:z`
	${Gn};
	svg {
		width: ${Hn.iconSmall};
		height: ${Vn.iconSmall};
	}
`,medium:z`
	${Kn};
	svg {
		width: ${Hn.iconMedium};
		height: ${Vn.iconMedium};
	}
`},ri=(e,t)=>z`
	${ti};
	${ni[t]};
	color: ${e.textError};
`,ii=(e,t)=>z`
	${ti};
	${ni[t]};
	color: ${e.textSuccess};
`,ai=({children:e,size:t=`medium`,cssOverrides:n,theme:r,...i})=>R(`span`,{css:e=>[ri(ei(e.userFeedback,r),t),n],role:`alert`,...i,children:[L($r,{}),e]}),oi=({size:e,theme:t})=>L(`svg`,{width:e?Rn[e]:void 0,height:void 0,viewBox:`-3 -3 30 30`,xmlns:`http://www.w3.org/2000/svg`,focusable:!1,"aria-hidden":!0,children:L(`path`,{fillRule:`evenodd`,clipRule:`evenodd`,d:`M12.015 14.042 20.707 22 22 20.709 14.06 12 22 3.291 20.707 2l-8.692 7.958L3.293 2.03 2 3.321 9.97 12 2 20.679l1.293 1.291z`,fill:t?.fill})}),si=({size:e,theme:t,isAnnouncedByScreenReader:n=!1})=>R(I,{children:[L(oi,{size:e,theme:t}),n?L(`span`,{css:z`
					${X}
				`,children:`Close`}):``]}),ci=({size:e,theme:t})=>L(`svg`,{width:e?Rn[e]:void 0,height:void 0,viewBox:`-3 -3 30 30`,xmlns:`http://www.w3.org/2000/svg`,focusable:!1,"aria-hidden":!0,children:L(`path`,{d:`M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2m-1.773 12.147-2.27-2.17-.8.8 2.71 3.791h.452l7.456-7.716-.82-.8z`,fill:t?.fill})}),li=({size:e,theme:t,isAnnouncedByScreenReader:n=!1})=>R(I,{children:[L(ci,{size:e,theme:t}),n?L(`span`,{css:z`
					${X}
				`,children:`Ticked`}):``]}),ui=({text:e,supporting:t,optional:n=!1,hideLabel:r=!1,size:i,cssOverrides:a,children:o,theme:s,...c})=>R(`label`,{css:a,...c,children:[L(Zr,{hideLabel:r,text:e,optional:n,size:i,theme:s}),t?L(Yr,{hideLabel:r,theme:s,children:t}):``,o]}),di=({children:e,size:t=`medium`,cssOverrides:n,theme:r,...i})=>R(`span`,{css:e=>[ii(ei(e.userFeedback,r),t),n],role:`alert`,...i,children:[L(li,{}),e]}),fi={medium:z`
	${Kn};
	height: ${zn.medium}px;
`,small:z`
	${Gn};
	height: ${zn.small}px;
`},pi=e=>z`
	border: 2px solid ${e.borderError};
	border-radius: 4px;
	color: ${e.textError};
	margin-top: 0;
`,mi=e=>z`
	border: 2px solid ${e.borderSuccess};
	border-radius: 4px;
	color: ${e.textSuccess};
	margin-top: 0;
`,hi=(e,t)=>z`
	box-sizing: border-box;
	${fi[t]};
	color: ${e.textUserInput};
	background-color: ${e.backgroundInput};
	border: 1px solid ${e.border};
	border-radius: 4px;
	padding: 0 ${Q[2]}px;

	&:focus {
		${wn}
	}

	&:invalid {
		/* Remove styling of invalid input elements that gets applied in Firefox */
		box-shadow: none;

		/*
			We automatically apply error styling to fields in an invalid state,
			but stop short of applying it to empty required fields.
			*/
		&[value]:not([value='']) {
			${pi(e)};
		}
	}
`,gi=z`
	margin-top: ${Q[1]}px;
`,_i=z`
	margin-top: 6px;
`,vi=z`
	margin-top: 2px;
`,yi=z`
	width: 100%;
`,bi={30:z`
	width: 40ex;
	max-width: 100%; /* prevent overflow on narrow viewports */
`,10:z`
	width: 18ex;
`,4:z`
	width: 9ex;
`},xi=({id:e,label:t,optional:n=!1,hideLabel:r=!1,supporting:i,size:a=`medium`,width:o,error:s,success:c,theme:l,cssOverrides:u,...d})=>{let f=(0,P.useId)(),p=e??f,m=e=>ur(lr,l,e.textInput);return R(I,{children:[R(ui,{text:t,optional:!!n,hideLabel:r,supporting:i,theme:l,size:a,htmlFor:p,children:[s&&L(`div`,{css:vi,children:L(ai,{id:Cn(p),theme:l,size:a,children:s})}),!s&&c&&L(`div`,{css:vi,children:L(di,{id:Cn(p),theme:l,size:a,children:c})})]}),L(`input`,{css:e=>[o?bi[o]:yi,hi(m(e),a),i?_i:gi,s?pi(m(e)):``,!s&&c?mi(m(e)):``,u],type:`text`,id:p,"aria-required":!n,"aria-invalid":!!s,"aria-describedby":s??c?Cn(p):``,required:!n,...d})]})},Si=e=>{let t=[...e],n=t.length;for(let e=n-1;e>0;e--){let r=Math.max(1,Math.min(e+1,Math.floor(n/2))),i=Math.max(0,e-Math.floor(Math.random()*r)),a=Math.floor(Math.random()*(e+1)),o=Math.random()>.5?a:i;if(!H(t[e])){let n=t[e];!H(t[o])&&!H(n)&&(t[e]=t[o],t[o]=n)}}return t},Ci=({entry:e,entries:t,cells:n,progress:r})=>{let i=[];if(H(e))return i;for(let a of e.group){let e=t.get(a);H(e)||i.push(...wi({entry:e,cells:n,progress:r}))}return i},wi=({entry:e,cells:t,progress:n})=>{let r=[];for(let i=0;i<e.length;i++){let a=e.direction===`across`?e.position.x+i:e.position.x,o=e.direction===`across`?e.position.y:e.position.y+i,s=t.getByCoords({x:a,y:o});s&&r.push({...s,progress:n[a]?.[o]??``,separator:Ti(e,i)})}return r},Ti=(e,t)=>{let n=e.separatorLocations;for(let[e,r]of Object.entries(n))if(r.includes(t+1))return e===`-`?`-`:`,`},$=(0,P.memo)(({children:e,requireConfirmation:t=!1,onClick:n,...r})=>{let[i,a]=(0,P.useState)(!1),o=(0,P.useRef)(null);return R(Hr,{onClick:e=>{if(!t){n(e);return}if(!i){a(!0),o.current=setTimeout(()=>a(!1),3e3);return}o.current&&clearTimeout(o.current),n(e),a(!1)},size:`small`,...r,children:[i&&`Confirm `,e]})}),Ei=({shuffledLetters:e,cellsWithProgress:t})=>{let n=[...e],r=Array.from({length:t.length},()=>``);for(let[e,i]of t.entries()){let t=n.indexOf(i.progress);t!==-1&&(r[e]=n.splice(t,1)[0]??``)}return r.map(e=>e===``?n.pop()??``:e)},Di=({cellWithProgress:e,shuffledLetter:t})=>{let n=J();return R(`div`,{css:z`
				${Wn};
				font-size: ${n.gridCellSize*.6}px;
				background-color: ${e.progress?n.anagramHelperProgressBackgroundColor:n.gridForegroundColor};
				border: 1px solid ${n.gridBackgroundColor};
				border-right: ${e.separator===`,`?`3px solid ${n.gridBackgroundColor}`:`1px solid ${n.gridBackgroundColor}`};
				width: ${n.gridCellSize}px;
				height: ${n.gridCellSize}px;
				text-align: center;
				align-content: center;
				position: relative;
				color: ${n.textColor};
			`,children:[e.separator===`-`&&L(`div`,{css:z`
						position: absolute;
						height: 2px;
						top: ${n.gridCellSize/2-.5}px;
						left: ${n.gridCellSize-5}px;
						width: 7px;
						background-color: ${n.gridBackgroundColor};
						z-index: 1;
					`}),e.number&&L(`div`,{css:z`
						${Wn};
						font-size: ${Math.max(9,Math.round(n.gridCellSize*.2))}px;
						position: absolute;
						top: 0;
						left: 0;
					`,children:e.number}),e.progress===``?t:e.progress]})},Oi=({cellsWithProgress:e,shuffledLetters:t})=>{let n=(0,P.useRef)(null),r=J(),i=Ei({shuffledLetters:t,cellsWithProgress:e});return L(`div`,{ref:n,css:z`
				display: flex;
				justify-content: center;
				flex-direction: row;
				flex-wrap: wrap;
				max-width: 90%;
			`,children:e.map((e,t)=>L(`div`,{css:z`
							display: flex;
							flex-direction: column;
							width: ${r.gridCellSize}px;
							margin-right: -1px;
							position: relative;
						`,children:L(Di,{cellWithProgress:e,shuffledLetter:i[t]??``})},t))})},ki=100,Ai=100,ji=70,Mi=({index:e,letters:t})=>{let n=360/t.length*e*Math.PI/180;return{x:ki+ji*Math.cos(n),y:Ai+ji*Math.sin(n)}},Ni=({letters:e,fill:t})=>e.map((n,r)=>{let{x:i,y:a}=Mi({letters:e,index:r});return L(`text`,{x:i,y:a,textAnchor:`middle`,dominantBaseline:`middle`,css:z`
					${Kn}
				`,fill:t,children:n},r)}),Pi=(0,P.memo)(({letters:e})=>{let t=J(),n=[...e],r=e.length>4?n.shift():void 0;return R(`svg`,{width:`200`,height:`200`,children:[r&&L(`text`,{x:ki,y:Ai,textAnchor:`middle`,dominantBaseline:`middle`,css:z`
						${Jn}
					`,fill:t.textColor,children:r}),Ni({letters:n,fill:t.textColor})]})}),Fi=/[^A-Za-zÀ-ÿ0-9]/g,Ii=()=>{let[e,t]=(0,P.useState)(``),[n,r]=(0,P.useState)(!1),[i,a]=(0,P.useState)([]),o=J(),{setShowAnagramHelper:s,showAnagramHelper:c}=gn(),{entries:l,cells:u}=K(),{currentEntryId:d}=B(),{progress:f}=q(),p=(0,P.useMemo)(()=>d?l.get(d):void 0,[d,l]),m=(0,P.useMemo)(()=>Ci({entry:p,cells:u,entries:l,progress:f}),[p,u,l,f]),h=(0,P.useCallback)(()=>{a([]),r(!1)},[]),g=(0,P.useCallback)(()=>{a(Si(e.split(``)))},[e]),_=(0,P.useCallback)(()=>{t(``),a([]),r(!1),s(!1)},[s]),v=(0,P.useCallback)(()=>{g(),r(!0)},[g]);return(0,P.useEffect)(()=>{h()},[h]),(0,P.useEffect)(()=>{c&&document.getElementById(`anagram-helper-input`)?.focus()},[c]),c?R(`div`,{css:z`
				position: absolute;
				width: 100%;
				height: 100%;
				top: 0;
				left: 0;
				display: flex;
				flex-direction: column;
				${Kn};
				background-color: ${o.anagramHelperBackgroundColor};
				padding: 10px;
				min-height: fit-content;
				z-index: 2;
			`,"data-link-name":`Anagram Helper`,children:[L(`div`,{css:z`
					display: flex;
					width: 100%;
					justify-content: flex-end;
					margin-bottom: ${Q[4]}px;
				`,children:L($,{onClick:_,size:`small`,priority:`tertiary`,icon:L(si,{size:`xsmall`}),hideLabel:!0,"data-link-name":`Close`,children:`Close Anagram Helper`})}),R(`div`,{css:z`
					display: flex;
					align-items: center;
					flex-direction: column;
				`,children:[!n&&R(`div`,{css:z`
							display: grid;
							justify-items: center;
							grid-template-columns: 1fr auto;
						`,children:[L(`div`,{children:L(xi,{hideLabel:!0,label:`Enter letters`,spellCheck:`false`,onChange:e=>{let n=e.target.value.replace(Fi,``);t(n.toUpperCase())},value:e,maxLength:m.length,autoFocus:!0,id:`anagram-helper-input`})}),L($,{cssOverrides:z`
								margin: ${Q[1]}px 0 0 ${Q[1]}px;
							`,onClick:v,disabled:e.length<1,priority:`primary`,size:`default`,"data-link-name":`Shuffle`,children:`Start`}),R(`span`,{children:[e.length,`/`,m.length]})]}),n&&R(I,{children:[L(Pi,{letters:i}),R(`div`,{css:z`
								margin: ${Q[4]}px 0 0;
								> * {
									margin: 0 ${Q[1]}px;
								}
							`,children:[L($,{onClick:h,size:`default`,priority:`secondary`,"data-link-name":`Start Again`,children:`Back`}),L($,{onClick:g,size:`default`,priority:`primary`,"data-link-name":`Shuffle`,children:`Shuffle`})]})]}),L(`div`,{css:z`
						width: 100%;
						margin: ${Q[4]}px 0 ${Q[4]}px;
						border-top: 1px solid ${o.gridBackgroundColor};
					`}),p&&R(`div`,{css:z`
							padding-bottom: ${Q[2]}px;
						`,children:[L(`span`,{"aria-hidden":`true`,css:z`
								font-weight: bold;
								padding-right: 0.625em;
								text-transform: capitalize;
							`,children:p.id.split(`-`).join(` `)}),L(`span`,{"aria-hidden":`true`,css:z`
								text-align: center;
								${er}
							`,dangerouslySetInnerHTML:{__html:p.clue}})]}),L(Oi,{cellsWithProgress:m,shuffledLetters:i})]})]}):null},Li=e=>{let t=e.trim();return/[!?.…]$/.test(t)?t:`${t}.`},Ri=e=>{let[,t,n]=/(.+)\((.+?)\)$/gm.exec(e)??[];if(!V(t)||!V(n))return Li(e);let[r,...i]=n.split(`,`).map(e=>e.trim()+` letters`).reverse(),a=[i.reverse().join(`, `),r?.trim()].filter(Boolean).join(` and `);return`${Li(t)} ${a}.`},zi=(e,t)=>e.split(`,`).map(e=>`${e.trim()} ${t}`).join(`, `)+`.`,Bi=(0,P.memo)(({entry:e,isConnected:t,isSelected:n,isComplete:r,isValid:i,scrollToSelected:a,selectClue:o,...s})=>{let c=J(),l=(0,P.useRef)(null);return(0,P.useEffect)(()=>{let e=l.current;e&&n&&a&&e.scrollIntoView({behavior:`smooth`,block:`nearest`})},[n,a]),R(`div`,{"data-entry-id":e.id,css:z`
				background-color: ${n?c.selectedBackgroundColor:t?c.connectedBackgroundColor:`transparent`};
				cursor: ${t?`default`:`pointer`};
				opacity: ${r?.6:1};

				padding: 0.5em 0;
				color: ${n?c.selectedTextColor:c.textColor};

				@media print {
					padding: 0.125em 0;
					background-color: transparent;
					opacity: 1;
				}
			`,onClick:()=>o(e),ref:l,...s,children:[L(`span`,{"aria-hidden":`true`,css:z`
					font-weight: bold;
					display: table-cell;
					width: 1.25em;
					padding-right: 0.625em;
				`,children:e.humanNumber}),L(`span`,{"aria-hidden":`true`,css:z`
					display: table-cell;
					${er}
				`,dangerouslySetInnerHTML:{__html:e.clue}}),L(`span`,{css:z(X),children:`${i?`Answer correct.`:``} ${zi(e.humanNumber,e.direction)} ${Ri(e.clue)}`}),i&&L(`span`,{css:z`
						display: table-cell;
						min-width: 1.25em;
						vertical-align: middle;
					`,children:L(li,{})})]})}),Vi=(0,P.memo)(({direction:e})=>{let{getId:t}=K(),{textColor:n}=J();return L(`label`,{css:z`
				color: ${n};
			`,id:t(`${e}-label`),htmlFor:t(`${e}-hints`),children:e})});Vi.displayName=`Label`;var Hi=({direction:e,scrollToSelected:t,Header:n})=>{let{entries:r,getId:i,cells:a}=K(),{progress:o}=q(),{currentEntryId:s,setCurrentEntryId:c}=B(),{setCurrentCell:l}=_t(),{validAnswers:u}=xn(),d=(0,P.useMemo)(()=>{let t=[];for(let n of r.values())n.direction===e&&t.push(n);return t},[r,e]),[f,p]=(0,P.useState)(d.findIndex(e=>e.id===s)),m=(0,P.useRef)(null),h=(0,P.useCallback)(e=>{c(e.id);let t=a.getByCoords({x:e.position.x,y:e.position.y});t&&l(t)},[a,l,c]),g=(0,P.useCallback)(()=>{p(d.findIndex(e=>e.id===s))},[s,d]),_=(0,P.useCallback)(e=>{switch(e.key){case` `:case`Enter`:{let e=d[f];e&&h(e)}break;case`ArrowDown`:p(e=>Math.min(e+1,d.length-1)),e.preventDefault();break;case`ArrowUp`:p(e=>Math.max(e-1,0)),e.preventDefault();break;case`Home`:p(0),e.preventDefault();break;case`End`:p(d.length-1),e.preventDefault()}},[d,f,h]);(0,P.useEffect)(()=>{let e=d[f];e&&document.getElementById(i(e.id))?.focus()},[f,d,c,i]),(0,P.useEffect)(()=>{let e=m.current;return e?.addEventListener(`keydown`,_),e?.addEventListener(`focus`,g),()=>{e?.removeEventListener(`keydown`,_),e?.removeEventListener(`focus`,g)}},[_,g]);let v=(0,P.useMemo)(()=>{if(s){let e=r.get(s)?.group??void 0;return e?new Set(e):void 0}},[s,r]);return R(`div`,{children:[n?L(n,{children:L(Vi,{direction:e})}):L(Vi,{direction:e}),L(`div`,{tabIndex:0,id:i(`${e}-hints`),role:`listbox`,"aria-labelledby":i(`${e}-label`),"aria-activedescendant":d[f]&&i(d[f].id),ref:m,children:d.sort((e,t)=>e.number-t.number).map(n=>{let r={...n.position},a=e===`across`?`x`:`y`,c=r[a]+n.length,l=!0;for(;r[a]<c;){if(!o[r.x]?.[r.y]){l=!1;break}r[a]++}let d=!!v?.has(n.id),f=s===n.id,p=u.has(n.id);return L(Bi,{entry:n,isConnected:d,isSelected:f,isComplete:l,isValid:p,scrollToSelected:t,id:i(n.id),tabIndex:-1,role:`option`,"aria-selected":f,selectClue:h},n.id)})})]})},Ui=()=>{let{updateProgress:e}=q(),{dimensions:t}=K(),{setValidAnswers:n}=xn();return{clearUserInput:(0,P.useCallback)(()=>{e(cn(t)),n(new Set)},[t,n,e])}},Wi=()=>{let{progress:e,updateProgress:t}=q(),{setValidAnswers:n,validAnswers:r}=xn(),{cells:i}=K();return{updateCell:(0,P.useCallback)(({x:a,y:o,value:s})=>{let c=i.getByCoords({x:a,y:o})?.group;if(H(c))return;let l=[...e];if(H(l[a]))throw Error(`Invalid x coordinate`);if(H(l[a][o]))throw Error(`Invalid y coordinate`);l[a][o]=s,t(l);for(let e of c)r.has(e)&&n(t=>{let n=new Set(t);return n.delete(e),n})},[i,e,n,t,r])}},Gi=e=>{let t=J();return L($,{theme:{backgroundPrimary:t.buttonBackgroundColor,backgroundPrimaryHover:t.buttonBackgroundHoverColor},cssOverrides:z`
				:disabled {
					cursor: not-allowed;
					opacity: 0.25;

					&:hover {
						background-color: ${t.buttonBackgroundColor};
					}
				}
			`,...e})},Ki=(0,P.memo)(e=>{let{cells:t}=K(),{updateCell:n}=Wi(),{currentEntryId:r}=B(),{progress:i}=q();return L(Gi,{onClick:(0,P.useCallback)(()=>{if(!r)return;let e=e=>{for(let n of t.values())if(n.group?.includes(e)){let e=i[n.x]?.[n.y];if(e===void 0||e===``)return!1}return!0};for(let i of t.values())i.group?.includes(r)&&(i.group.filter(e=>e!==r).some(e)||n({x:i.x,y:i.y,value:``}))},[t,r,n,i]),"aria-label":`Clear ${r?r.split(`-`).join(` `):`word`}`,"data-link-name":`Clear this`,"data-testid":`clear-this`,"aria-live":`off`,...e,children:`Clear Word`})});Ki.displayName=`ClearClue`;var qi=(0,P.memo)(e=>{let{cells:t}=K(),{progress:n}=q(),{setValidAnswers:r}=xn(),{currentEntryId:i}=B(),{updateCell:a}=Wi();return L(Gi,{"aria-live":`off`,onClick:(0,P.useCallback)(()=>{if(!i)return;let e=!0;for(let r of t.values()){let t=n[r.x]?.[r.y];r.group?.includes(i)&&!H(t)&&t!==r.solution&&(t!==``&&a({x:r.x,y:r.y,value:``}),e=!1)}e&&r(e=>new Set(e).add(i))},[i,t,n,a,r]),"data-link-name":`Check this`,"data-testid":`check-this`,"aria-label":`Check and remove incorrect letters from ${i?i.split(`-`).join(` `):`word`}`,...e,children:`Check Word`})});qi.displayName=`CheckClue`;var Ji=(0,P.memo)(e=>{let{cells:t}=K(),{updateCell:n}=Wi(),{currentEntryId:r}=B();return L(Gi,{onClick:(0,P.useCallback)(()=>{if(r)for(let e of t.values())e.group?.includes(r)&&n({x:e.x,y:e.y,value:e.solution??``})},[t,r,n]),"aria-live":`off`,"aria-label":`Reveal ${r?r.split(`-`).join(` `):`word`}`,"data-link-name":`Reveal this`,"data-testid":`reveal-this`,...e,children:`Reveal Word`})});Ji.displayName=`RevealClue`;var Yi=(0,P.memo)(e=>{let{toggleAnagramHelper:t}=gn();return L(Gi,{onClick:t,"data-link-name":`Show anagram helper`,"data-testid":`show-anagram-helper`,...e,children:`Anagram Helper`})});Yi.displayName=`AnagramHelper`;var Xi=(0,P.memo)(e=>{let{progress:t}=q(),{cells:n,entries:r}=K(),{setValidAnswers:i}=xn(),{updateCell:a}=Wi();return L($,{onClick:(0,P.useCallback)(()=>{let e=r.keys(),o=new Set;for(let e of n.values()){let n=t[e.x]?.[e.y];if(e.group&&!H(n)&&n!==e.solution){n!==``&&a({x:e.x,y:e.y,value:``});for(let t of e.group)o.add(t)}}let s=new Set([...e].filter(e=>!o.has(e)));i(s)},[r,i,n,t,a]),"data-link-name":`Check all`,"data-testid":`check-all`,requireConfirmation:!0,...e,"aria-label":`Check and remove all incorrect letters`,children:`Check All`})});Xi.displayName=`CheckGrid`;var Zi=(0,P.memo)(e=>{let{cells:t}=K(),{updateProgress:n}=q();return L($,{onClick:(0,P.useCallback)(()=>{var e;let r=[];for(let n of t.values()){let t=r[e=n.x]||(r[e]=[]);t[n.y]=n.solution??``}n(r)},[t,n]),requireConfirmation:!0,"data-link-name":`Reveal all`,"data-testid":`reveal-all`,...e,children:`Reveal All`})});Zi.displayName=`RevealGrid`;var Qi=(0,P.memo)(e=>{let{clearUserInput:t}=Ui();return L($,{onClick:t,requireConfirmation:!0,"data-link-name":`Clear all`,"data-testid":`clear-all`,...e,children:`Clear All`})});Qi.displayName=`ClearGrid`;var $i=z`
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	justify-content: flex-start;
	gap: ${Q[1]}px;
	padding: ${Q[1]}px 0;
`,ea=(0,P.memo)(()=>{let{solutionAvailable:e}=K(),{currentEntryId:t}=B(),n=(0,P.useRef)(null),r=H(t),[i,a]=(0,P.useState)(0),[o,s]=(0,P.useState)(0),[c,l]=(0,P.useState)(r?`grid`:`clues`),[u,d]=(0,P.useState)(!1),f=e?4:2,p=e?3:1,m=(e,t)=>c===e&&(c===`clues`?i:o)===t?0:-1,h=(0,P.useCallback)(e=>{switch(d(!0),e.key){case`ArrowLeft`:c===`clues`?a((e=0)=>Math.max(e-1,0)):s((e=0)=>Math.max(e-1,0)),e.preventDefault();break;case`ArrowRight`:c===`clues`?a((e=0)=>Math.min(e+1,f-1)):s((e=0)=>Math.min(e+1,p-1)),e.preventDefault();break;case`ArrowDown`:l(`grid`),e.preventDefault();break;case`ArrowUp`:r||l(`clues`),e.preventDefault();break;case`Home`:c===`clues`?a(0):s(0),e.preventDefault();break;case`End`:c===`clues`?a(f-1):s(p-1),e.preventDefault();break;default:return}},[f,p,r,c]);return(0,P.useEffect)(()=>{u&&n.current?.querySelector(`[tabindex="0"]`)?.focus()},[u,c,i,o]),(0,P.useEffect)(()=>{let e=n.current;if(e)return e.addEventListener(`keydown`,h),()=>{e.removeEventListener(`keydown`,h)}},[h]),R(`div`,{role:`menu`,ref:n,"aria-label":`Crossword controls`,children:[R(`div`,{"aria-label":`Clue controls`,role:`group`,tabIndex:-1,css:$i,children:[e&&R(I,{children:[L(qi,{disabled:r,tabIndex:m(`clues`,0),role:`menuItem`}),L(Ji,{disabled:r,tabIndex:m(`clues`,1),role:`menuItem`})]}),L(Ki,{disabled:r,tabIndex:m(`clues`,e?2:0),role:`menuItem`}),L(Yi,{disabled:r,tabIndex:m(`clues`,e?3:1),role:`menuItem`})]}),R(`div`,{"aria-label":`Grid controls`,role:`group`,tabIndex:-1,css:$i,children:[e&&R(I,{children:[L(Xi,{tabIndex:m(`grid`,0),role:`menuItem`}),L(Zi,{tabIndex:m(`grid`,1),role:`menuItem`})]}),L(Qi,{tabIndex:m(`grid`,e?2:0),role:`menuItem`})]})]})});ea.displayName=`Controls`;var ta=[`ArrowUp`,`ArrowUp`,`ArrowDown`,`ArrowDown`,`ArrowLeft`,`ArrowRight`,`ArrowLeft`,`ArrowRight`,`b`,`a`],na=z`
	@keyframes violent-shake {
		0% {
			transform: translate(0, 0) rotate(0deg);
		}
		10% {
			transform: translate(-5px, -5px) rotate(-2deg);
		}
		20% {
			transform: translate(5px, -5px) rotate(2deg);
		}
		30% {
			transform: translate(-5px, 5px) rotate(-2deg);
		}
		40% {
			transform: translate(5px, 5px) rotate(2deg);
		}
		50% {
			transform: translate(-5px, -5px) rotate(-2deg);
		}
		60% {
			transform: translate(5px, -5px) rotate(2deg);
		}
		70% {
			transform: translate(-5px, 5px) rotate(-2deg);
		}
		80% {
			transform: translate(5px, 5px) rotate(2deg);
		}
		90% {
			transform: translate(-5px, -5px) rotate(-2deg);
		}
		100% {
			transform: translate(0, 0) rotate(0deg);
		}
	}

	&.cheat-mode {
		animation: violent-shake 0.15s ease-out;
	}
`,ra=e=>{let[t,n]=(0,P.useState)([]),[r,i]=(0,P.useState)(!1),a=(0,P.useCallback)(e=>{r||(ta[t.length]===e.key?n([...t,e.key]):n([]))},[r,t]);return(0,P.useEffect)(()=>{t.length===ta.length&&(document.removeEventListener(`keydown`,a),i(!0),e.current?.classList.add(`cheat-mode`))},[t.length,a,e]),(0,P.useEffect)(()=>(document.addEventListener(`keydown`,a),()=>document.removeEventListener(`keydown`,a)),[a]),[r,na]},ia=/^[A-Za-zÀ-ÿ0-9]$/,aa=()=>{},oa=(0,P.memo)(({data:e,x:t,y:n,guess:r=``,isBlackCell:i,isConnected:a,isSelected:o,isCurrentCell:s,handleKeyDown:c,handleInput:l,...u})=>{let d=J(),{getId:f}=K(),p=(0,P.useRef)(null),m=z`
		fill: ${i?`transparent`:a?o?d.selectedBackgroundColor:d.connectedBackgroundColor:d.gridForegroundColor};
		@media print {
			fill: ${i?d.gridPrintBackgroundColor:d.gridForegroundColor};
			stroke: ${d.gridPrintBackgroundColor};
		}
	`;return(0,P.useEffect)(()=>{let e=p.current;if(e){let t=s&&i?`0`:`-1`;e.setAttribute(`tabindex`,t)}},[i,s]),R(`g`,{ref:p,...u,children:[L(`rect`,{x:t,y:n,width:d.gridCellSize,height:d.gridCellSize,"aria-hidden":`true`,role:`presentation`,css:m}),!i&&R(I,{children:[e.number&&L(`text`,{x:t,y:n,dx:Math.max(1,d.gridCellSize*.05),dy:Math.max(9,d.gridCellSize*.22),fill:d.gridTextColor,css:z`
								${Wn};
								font-size: ${Math.max(9,Math.round(d.gridCellSize*.2))}px;
							`,"aria-hidden":`true`,role:`presentation`,children:e.number}),L(`foreignObject`,{x:t,y:n,width:d.gridCellSize,height:d.gridCellSize,children:L(`input`,{value:r,autoCapitalize:`none`,type:`text`,pattern:`^[A-Za-zÀ-ÿ0-9]$`,onKeyDown:c,id:f(`cell-input-${e.x}-${e.y}`),"data-testid":f(`cell-test-id-${e.x}-${e.y}`),onInput:l??aa,tabIndex:s?0:-1,"aria-description":e.description,css:z`
								width: 100%;
								height: 100%;
								background: transparent;
								color: ${d.gridTextColor};
								border: none;
								${Wn};
								font-size: ${d.gridCellSize*.6}px;
								text-align: center;
							`,autoComplete:`off`,spellCheck:`false`,autoCorrect:`off`,"aria-label":`
								${e.description??`Cell`} at row ${e.y+1}, column ${e.x+1}
							`})})]})]})}),sa=(e,{gridCellSize:t,gridGutterSize:n})=>e*(t+n)+n,ca=(e,t)=>e.group?.find(e=>e.endsWith(t))??e.group?.[0],la=(0,P.memo)(({position:e,direction:t,type:n,...r})=>{let i=J(),a=sa(e.x,i),o=sa(e.y,i),{gridCellSize:s,gridGutterSize:c}=i,l={down:`rotate(90 ${a+s/2} ${o+s/2})`};return n===`-`?L(`line`,{x1:a+s-3,y1:o+s/2,x2:a+s+4,y2:o+s/2,strokeWidth:c,stroke:i.gridBackgroundColor,transform:l[t],pointerEvents:`none`,...r}):L(`line`,{x1:a+s+c/2,y1:o,x2:a+s+c/2,y2:o+s,strokeWidth:c*2,stroke:i.gridBackgroundColor,transform:l[t],pointerEvents:`none`,...r})});la.displayName=`Separator`;var ua=(0,P.memo)(({currentCell:e})=>{let t=J(),n=t.gridCellSize+t.gridGutterSize,r=e.x*n,i=e.y*n;return R(I,{children:[L(`rect`,{x:r-1+t.gridGutterSize*.5,y:i-1+t.gridGutterSize*.5,width:n+2,height:n+2,stroke:t.gridForegroundColor,strokeWidth:2,fill:`none`,rx:4,ry:4}),L(`rect`,{x:r+t.gridGutterSize*.5,y:i+t.gridGutterSize*.5,width:n,height:n,stroke:t.focusColor,strokeWidth:2,fill:`none`,rx:4,ry:4})]})});ua.displayName=`FocusIndicator`;var da={Grid:()=>{let e=J(),{cells:t,separators:n,entries:r,dimensions:i,getId:a}=K(),{progress:o}=q(),{updateCell:s}=Wi(),{currentCell:c,setCurrentCell:l}=_t(),{currentEntryId:u,setCurrentEntryId:d}=B(),[f,p]=(0,P.useState)(!1),m=(0,P.useRef)(null),h=(0,P.useRef)(`across`),[g,_]=ra(m),v=(0,P.useCallback)(e=>{if(e.x===c.x&&e.y===c.y&&e.group?.length){let t=e.group.find(e=>e!==u);if(t){d(t);return}}},[c,u,d]),y=(0,P.useCallback)(e=>{let t=document.getElementById(a(`cell-input-${e.x}-${e.y}`)),n=document.getElementById(a(`cell-group-${e.x}-${e.y}`));t?t.focus():n?.focus(),l(e)},[a,l]),b=(0,P.useCallback)(({delta:e,isTyping:n=!1})=>{let r=c.x+e.x,i=c.y+e.y,a=t.getByCoords({x:r,y:i});if(a&&!(n&&(H(c.group)||H(a.group)))){if(e.x!==0){y(a);return}if(e.y!==0){y(a);return}}},[c.x,c.y,c.group,t,y]),x=(0,P.useCallback)(e=>{e===``?h.current===`across`?b({delta:{x:-1,y:0},isTyping:!0}):b({delta:{x:0,y:-1},isTyping:!0}):s({x:c.x,y:c.y,value:``})},[c.x,c.y,b,s]),S=(0,P.useCallback)(e=>{let n=g?t.getByCoords({x:c.x,y:c.y})?.solution:ia.test(e)&&e.toUpperCase();n&&(s({x:c.x,y:c.y,value:n}),h.current===`across`?b({delta:{x:1,y:0},isTyping:!0}):b({delta:{x:0,y:1},isTyping:!0}))},[t,g,c.x,c.y,b,s]),ee=(0,P.useCallback)((e,t)=>{let n=e.nativeEvent;if(n instanceof InputEvent){let{inputType:r,data:i}=n;switch(e.preventDefault(),r){case`deleteContentBackward`:x(t??``);break;case`insertText`:case`insertCompositionText`:i&&S(i.slice(-1))}}},[x,S]),C=({direction:e})=>{h.current!==e&&(h.current=e)},w=(0,P.useCallback)(e=>{let n=r.get(e),i=n?t.getByCoords(n.position):void 0;n&&i&&(C({direction:n.direction}),y(i))},[t,r,y]),T=(0,P.useCallback)(e=>{if(u&&(e.key===`[`||e.key===`]`)){let t=r.get(u),n=t?.nextEntryId,i=t?.previousEntryId;e.key===`]`&&n&&w(n),e.key===`[`&&i&&w(i)}e.key===`Backspace`||e.key===`Delete`?`value`in e.target&&V(e.target.value)&&(e.preventDefault(),x(e.target.value)):e.key.length===1&&(e.preventDefault(),S(e.key))},[u,x,r,w,S]),E=(0,P.useCallback)(e=>{let t=!0;switch(e.key){case`ArrowUp`:C({direction:`down`}),b({delta:{x:0,y:-1}});break;case`ArrowDown`:C({direction:`down`}),b({delta:{x:0,y:1}});break;case`ArrowLeft`:C({direction:`across`}),b({delta:{x:-1,y:0}});break;case`ArrowRight`:C({direction:`across`}),b({delta:{x:1,y:0}});break;default:t=!1}t&&e.preventDefault()},[b]),te=(0,P.useCallback)(e=>{let n=e.currentTarget;if(!n)return;let r=Number(n.dataset.x),i=Number(n.dataset.y),a=t.getByCoords({x:r,y:i});if(!a)throw Error(`Could not find cell for x: ${r}, y: ${i}`);y(a)},[t,y]),D=e.gridCellSize*i.rows+e.gridGutterSize*(i.rows+1),ne=e.gridCellSize*i.cols+e.gridGutterSize*(i.cols+1),O=(0,P.useCallback)(()=>p(!0),[]),re=(0,P.useCallback)(({relatedTarget:e})=>p(m.current?.contains(e)??!1),[]);(0,P.useEffect)(()=>{d(ca(c,h.current))},[c,f,d]),(0,P.useEffect)(()=>{u&&(h.current=r.get(u)?.direction??h.current)},[u,r]),(0,P.useEffect)(()=>{if(!m.current?.contains(document.activeElement)&&u){let e=r.get(u),n=e?t.getByCoords(e.position):void 0;n&&y(n)}},[t,u,r,y]);let k=(0,P.useMemo)(()=>{if(u){let e=r.get(u)?.group;if(e)return new Set(e)}},[u,r]);return R(`svg`,{css:[z`
					background: ${e.gridBackgroundColor};
					position: relative;
					cursor: pointer;
					width: 100%;
					max-width: ${ne}px;
					min-width: min(100%, ${e.gridMinWidth}px);

					// This is to prevent the default blue highlight on click on Android
					-webkit-tap-highlight-color: transparent;

					/**
					 * Request that the browser respects background colours when printing
					 * so that the crossword grid and cells are visible. Emotion uses
					 * Stylis to apply prefixes which only supports the deprecated
					 * color-adjust property, hence using the prefixed version here.
					 */
					-webkit-print-color-adjust: exact;

					*:focus {
						outline: none;
					}

					@media print {
						background: ${e.gridPrintBackgroundColor};
					}
				`,_],id:a(`crossword-grid`),ref:m,viewBox:`0 0 ${ne} ${D}`,tabIndex:-1,role:`grid`,"aria-label":`Crossword Grid`,onKeyDown:E,onFocus:O,onBlur:re,children:[Array.from({length:i.rows}).map((n,r)=>L(`g`,{role:`row`,children:Array.from({length:i.cols}).map((n,i)=>{let s=t.getByCoords({x:i,y:r});if(!s)throw Error(`Could not find cell x:${i}, y:${r}`);let l=sa(s.x,e),d=sa(s.y,e),f=o[s.x]?.[s.y],p=c.x===s.x&&c.y===s.y,m=H(s.group),h=!!s.group?.some(e=>k?.has(e));return L(oa,{data:s,x:l,y:d,guess:f,isSelected:!!(u&&s.group?.includes(u)),isConnected:h,isBlackCell:m,isCurrentCell:p,role:`cell`,"data-x":s.x,"data-y":s.y,id:a(`cell-group-${s.x}-${s.y}`),onFocus:te,onPointerDown:p?()=>v(s):void 0,handleKeyDown:p?T:void 0,handleInput:p?e=>ee(e,f):void 0},`x${s.x}y${s.y}`)})},r)),n.map(({type:e,position:t,direction:n})=>L(la,{type:e,position:t,direction:n},`${e}${t.x}${t.y}${n}`)),f&&L(ua,{currentCell:c})]})},Controls:ea,AnagramHelper:Ii,FocusedClue:tr,Clues:Hi,SavedMessage:()=>{let{isStored:e}=q(),{textColor:t}=J();return L(`p`,{css:z`
				color: ${t};
			`,children:e?`Crosswords are saved automatically.`:`Crossword will not be saved.`})}},fa=({children:e,data:t,progress:n,Layout:r,MobileBannerAd:i,...a})=>{let o=r??rr,s=(0,P.useMemo)(()=>({...ir,...a}),[a]),c=(0,P.useMemo)(()=>{let e=(s.gridCellSize+s.gridGutterSize)*t.dimensions.cols+s.gridGutterSize;return Math.max(e,s.gridMinWidth)},[s.gridCellSize,s.gridGutterSize,s.gridMinWidth,t.dimensions.cols]);return L(Sn,{theme:s,data:t,userProgress:n,children:L(`div`,{"data-link-name":`Crosswords`,css:z`
					*,
					*::before,
					*::after {
						box-sizing: border-box;
						padding: 0;
						margin: 0;
					}

					height: 100%;
					width: 100%;
					container-type: inline-size;
					position: relative;
				`,children:e??L(o,{...da,gridWidth:c,MobileBannerAd:i})})})},pa=({Grid:e,Clues:t,Controls:n,FocusedClue:r})=>(0,F.jsxs)(`section`,{className:`crossword-wrapper`,children:[(0,F.jsx)(`div`,{className:`crossword-focused-clue`,children:(0,F.jsx)(r,{})}),(0,F.jsx)(`div`,{className:`crossword-grid`,children:(0,F.jsx)(e,{})}),(0,F.jsx)(`div`,{className:`crossword-focused-clue`,children:(0,F.jsx)(r,{})}),(0,F.jsx)(`div`,{className:`crossword-controls`,children:(0,F.jsx)(n,{})}),(0,F.jsx)(`div`,{className:`crossword-clues`,children:(0,F.jsx)(t,{direction:`across`})}),(0,F.jsx)(`div`,{className:`crossword-clues`,children:(0,F.jsx)(t,{direction:`down`})})]});function ma({puzzle:e}){return(0,F.jsx)(fa,{anagramHelperBackgroundColor:`var(--card)`,anagramHelperProgressBackgroundColor:`var(--glimmerized-blue-0a)`,borderColor:`var(--glimmerized-black-1)`,buttonBackgroundColor:`var(--glimmerized-red-07)`,buttonBackgroundHoverColor:`var(--glimmerized-red-09)`,clueListBorderColor:`var(--glimmerized-red-08)`,connectedBackgroundColor:`var(--glimmerized-blue-0a)`,data:e,focusColor:`var(--glimmerized-red-08)`,focusedClueBackgroundColor:`transparent`,gridBackgroundColor:`var(--glimmerized-black-0)`,gridForegroundColor:`var(--card)`,gridTextColor:`var(--foreground)`,Layout:pa,selectedBackgroundColor:`var(--glimmerized-blue-0a)`,textColor:`var(--foreground)`})}export{ma as ClientSideCrossword};