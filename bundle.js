var app=function(){"use strict";function t(){}const n=t=>t;function e(t){return t()}function r(){return Object.create(null)}function i(t){t.forEach(e)}function o(t){return"function"==typeof t}function a(t,n){return t!=t?n==n:t!==n||t&&"object"==typeof t||"function"==typeof t}function u(t,n,e){t.$$.on_destroy.push(function(t,n){const e=t.subscribe(n);return e.unsubscribe?()=>e.unsubscribe():e}(n,e))}function s(t,n,e=n){return t.set(e),n}const c="undefined"!=typeof window;let l=c?()=>window.performance.now():()=>Date.now(),d=c?t=>requestAnimationFrame(t):t;const f=new Set;let m,p=!1;function $(){f.forEach(t=>{t[0](l())||(f.delete(t),t[1]())}),(p=f.size>0)&&d($)}function g(t){let n;return p||(p=!0,d($)),{promise:new Promise(e=>{f.add(n=[t,e])}),abort(){f.delete(n)}}}function h(t,n){t.appendChild(n)}function b(t,n,e){t.insertBefore(n,e||null)}function v(t){t.parentNode.removeChild(t)}function x(t){return document.createElement(t)}function y(t){return document.createTextNode(t)}function w(){return y(" ")}function _(){return y("")}function k(t,n,e,r){return t.addEventListener(n,e,r),()=>t.removeEventListener(n,e,r)}function C(t,n,e){null==e?t.removeAttribute(n):t.setAttribute(n,e)}function I(t){return""===t?void 0:+t}function S(t,n){n=""+n,t.data!==n&&(t.data=n)}function q(t,n){(null!=n||t.value)&&(t.value=n)}let A,E=0,T={};function N(t,n,e,r,i,o,a,u=0){const s=16.666/r;let c="{\n";for(let t=0;t<=1;t+=s){const r=n+(e-n)*o(t);c+=100*t+`%{${a(r,1-r)}}\n`}const l=c+`100% {${a(e,1-e)}}\n}`,d=`__svelte_${function(t){let n=5381,e=t.length;for(;e--;)n=(n<<5)-n^t.charCodeAt(e);return n>>>0}(l)}_${u}`;if(!T[d]){if(!m){const t=x("style");document.head.appendChild(t),m=t.sheet}T[d]=!0,m.insertRule(`@keyframes ${d} ${l}`,m.cssRules.length)}const f=t.style.animation||"";return t.style.animation=`${f?`${f}, `:""}${d} ${r}ms linear ${i}ms 1 both`,E+=1,d}function F(t,n){t.style.animation=(t.style.animation||"").split(", ").filter(n?t=>t.indexOf(n)<0:t=>-1===t.indexOf("__svelte")).join(", "),n&&!--E&&d(()=>{if(E)return;let t=m.cssRules.length;for(;t--;)m.deleteRule(t);T={}})}function M(t){A=t}function H(t){(function(){if(!A)throw new Error("Function called outside component initialization");return A})().$$.on_mount.push(t)}const j=[],z=[],O=[],R=[],W=Promise.resolve();let L,P=!1;function B(t){O.push(t)}function D(){const t=new Set;do{for(;j.length;){const t=j.shift();M(t),U(t.$$)}for(;z.length;)z.pop()();for(let n=0;n<O.length;n+=1){const e=O[n];t.has(e)||(e(),t.add(e))}O.length=0}while(j.length);for(;R.length;)R.pop()();P=!1}function U(t){t.fragment&&(t.update(t.dirty),i(t.before_update),t.fragment.p(t.dirty,t.ctx),t.dirty=null,t.after_update.forEach(B))}function V(){return L||(L=Promise.resolve()).then(()=>{L=null}),L}function G(t,n,e){t.dispatchEvent(function(t,n){const e=document.createEvent("CustomEvent");return e.initCustomEvent(t,!1,!1,n),e}(`${n?"intro":"outro"}${e}`))}const J=new Set;let K;function Q(){K={r:0,c:[],p:K}}function X(){K.r||i(K.c),K=K.p}function Y(t,n){t&&t.i&&(J.delete(t),t.i(n))}function Z(t,n,e,r){if(t&&t.o){if(J.has(t))return;J.add(t),K.c.push(()=>{J.delete(t),r&&(e&&t.d(1),r())}),t.o(n)}}const tt={duration:0};function nt(e,r,i){let a,u,s=r(e,i),c=!1,d=0;function f(){a&&F(e,a)}function m(){const{delay:r=0,duration:i=300,easing:o=n,tick:m=t,css:p}=s||tt;p&&(a=N(e,0,1,i,r,o,p,d++)),m(0,1);const $=l()+r,h=$+i;u&&u.abort(),c=!0,B(()=>G(e,!0,"start")),u=g(t=>{if(c){if(t>=h)return m(1,0),G(e,!0,"end"),f(),c=!1;if(t>=$){const n=o((t-$)/i);m(n,1-n)}}return c})}let p=!1;return{start(){p||(F(e),o(s)?(s=s(),V().then(m)):m())},invalidate(){p=!1},end(){c&&(f(),c=!1)}}}function et(e,r,a){let u,s=r(e,a),c=!0;const d=K;function f(){const{delay:r=0,duration:o=300,easing:a=n,tick:f=t,css:m}=s||tt;m&&(u=N(e,1,0,o,r,a,m));const p=l()+r,$=p+o;B(()=>G(e,!1,"start")),g(t=>{if(c){if(t>=$)return f(0,1),G(e,!1,"end"),--d.r||i(d.c),!1;if(t>=p){const n=a((t-p)/o);f(1-n,n)}}return c})}return d.r+=1,o(s)?V().then(()=>{s=s(),f()}):f(),{end(t){t&&s.tick&&s.tick(1,0),c&&(u&&F(e,u),c=!1)}}}function rt(e,r,a,u){let s=r(e,a),c=u?0:1,d=null,f=null,m=null;function p(){m&&F(e,m)}function $(t,n){const e=t.b-c;return n*=Math.abs(e),{a:c,b:t.b,d:e,duration:n,start:t.start,end:t.start+n,group:t.group}}function h(r){const{delay:o=0,duration:a=300,easing:u=n,tick:h=t,css:b}=s||tt,v={start:l()+o,b:r};r||(v.group=K,K.r+=1),d?f=v:(b&&(p(),m=N(e,c,r,a,o,u,b)),r&&h(0,1),d=$(v,a),B(()=>G(e,r,"start")),g(t=>{if(f&&t>f.start&&(d=$(f,a),f=null,G(e,d.b,"start"),b&&(p(),m=N(e,c,d.b,d.duration,0,u,s.css))),d)if(t>=d.end)h(c=d.b,1-c),G(e,d.b,"end"),f||(d.b?p():--d.group.r||i(d.group.c)),d=null;else if(t>=d.start){const n=t-d.start;c=d.a+d.d*u(n/d.duration),h(c,1-c)}return!(!d&&!f)}))}return{run(t){o(s)?V().then(()=>{s=s(),h(t)}):h(t)},end(){p(),d=f=null}}}function it(t,n){t.d(1),n.delete(t.key)}function ot(t,n,r){const{fragment:a,on_mount:u,on_destroy:s,after_update:c}=t.$$;a.m(n,r),B(()=>{const n=u.map(e).filter(o);s?s.push(...n):i(n),t.$$.on_mount=[]}),c.forEach(B)}function at(t,n){t.$$.fragment&&(i(t.$$.on_destroy),t.$$.fragment.d(n),t.$$.on_destroy=t.$$.fragment=null,t.$$.ctx={})}function ut(t,n){t.$$.dirty||(j.push(t),P||(P=!0,W.then(D)),t.$$.dirty=r()),t.$$.dirty[n]=!0}function st(n,e,o,a,u,s){const c=A;M(n);const l=e.props||{},d=n.$$={fragment:null,ctx:null,props:s,update:t,not_equal:u,bound:r(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(c?c.$$.context:[]),callbacks:r(),dirty:null};let f=!1;d.ctx=o?o(n,l,(t,e,r=e)=>(d.ctx&&u(d.ctx[t],d.ctx[t]=r)&&(d.bound[t]&&d.bound[t](r),f&&ut(n,t)),e)):l,d.update(),f=!0,i(d.before_update),d.fragment=a(d.ctx),e.target&&(e.hydrate?d.fragment.l(function(t){return Array.from(t.childNodes)}(e.target)):d.fragment.c(),e.intro&&Y(n.$$.fragment),ot(n,e.target,e.anchor),D()),M(c)}class ct{$destroy(){at(this,1),this.$destroy=t}$on(t,n){const e=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return e.push(n),()=>{const t=e.indexOf(n);-1!==t&&e.splice(t,1)}}$set(){}}const lt=[];function dt(n,e=t){let r;const i=[];function o(t){if(a(n,t)&&(n=t,r)){const t=!lt.length;for(let t=0;t<i.length;t+=1){const e=i[t];e[1](),lt.push(e,n)}if(t){for(let t=0;t<lt.length;t+=2)lt[t][0](lt[t+1]);lt.length=0}}}return{set:o,update:function(t){o(t(n))},subscribe:function(a,u=t){const s=[a,u];return i.push(s),1===i.length&&(r=e(o)||t),a(n),()=>{const t=i.indexOf(s);-1!==t&&i.splice(t,1),0===i.length&&(r(),r=null)}}}}const ft=dt([]),mt=dt([]);let pt=dt("get");const $t=dt([]);let gt=dt("");const ht=dt([]);function bt(n){var e,r,o,a,u,s;return{c(){(e=x("h2")).textContent="Хотите повторить неотвеченные слова?",r=w(),(o=x("button")).textContent="ДА 😃",a=w(),(u=x("button")).textContent="НЕТ 😱",C(e,"class","svelte-m5gqgo"),C(o,"class","svelte-m5gqgo"),C(u,"class","svelte-m5gqgo"),s=[k(o,"click",n.consent),k(u,"click",n.nay)]},m(t,n){b(t,e,n),b(t,r,n),b(t,o,n),b(t,a,n),b(t,u,n)},p:t,i:t,o:t,d(t){t&&(v(e),v(r),v(o),v(a),v(u)),i(s)}}}function vt(t,n,e){let r,i,o;return u(t,ft,t=>{e("$remaining",r=t)}),u(t,mt,t=>{e("$unanswered",i=t)}),u(t,pt,t=>{e("$state",o=t)}),{consent:function(){s(ft,r=i),s(mt,i=[]),s(pt,o="test")},nay:function(){s(pt,o="end")}}}class xt extends ct{constructor(t){super(),st(this,t,vt,bt,a,[])}}function yt(n){var e,r;return{c(){C(e=x("input"),"type","file"),r=k(e,"change",n.changeHandler)},m(t,r){b(t,e,r),n.input_binding(e)},p:t,i:t,o:t,d(t){t&&v(e),n.input_binding(null),r()}}}function wt(t,n,e){let r,i,o;u(t,gt,t=>{e("$dictionary",r=t)}),u(t,ht,t=>{e("$arrString",i=t)}),u(t,pt,t=>{e("$state",o=t)});let a,c=/[a-z].*[а-я].$/gm;return window.File&&window.FileReader&&window.FileList&&window.Blob||alert("The File APIs are not fully supported in this browser."),{inp:a,changeHandler:function(){let t=event.target.files[0];if(!t.name.match(/dictionary.txt/))return void alert(`Файл ${t.name} не соответсвует ожидаемому dictionary.txt`);let n=new FileReader;n.onload=()=>{s(gt,r=n.result),s(ht,i=r.match(c))},n.readAsText(t,"UTF-8"),s(pt,o="parse")},input_binding:function(t){z[t?"unshift":"push"](()=>{e("inp",a=t)})}}}class _t extends ct{constructor(t){super(),st(this,t,wt,yt,a,[])}}function kt(n){var e,r,o,a,u,s,c,l,d,f,m,p,$,g,_,I,A,E=n.$arrString.length+"",T=!1,N=!1;function F(){T=!0,n.input0_input_handler.call(f)}function M(){N=!0,n.input1_input_handler.call(g)}return{c(){e=x("h4"),r=y("Загружено "),o=y(E),a=y(" слов"),u=w(),(s=x("h4")).textContent="Выберите нужное количество слов",c=w(),l=x("span"),d=y("с "),f=x("input"),m=w(),p=x("span"),$=y("по "),g=x("input"),_=w(),(I=x("button")).textContent="подключить текст",C(f,"type","number"),C(f,"min","0"),C(l,"class","svelte-1qcr508"),C(g,"type","number"),C(g,"min","0"),C(p,"class","svelte-1qcr508"),A=[k(f,"input",F),k(g,"input",M),k(I,"click",n.parse)]},m(t,i){b(t,e,i),h(e,r),h(e,o),h(e,a),b(t,u,i),b(t,s,i),b(t,c,i),b(t,l,i),h(l,d),h(l,f),q(f,n.startIndex),b(t,m,i),b(t,p,i),h(p,$),h(p,g),q(g,n.stopIndex),b(t,_,i),b(t,I,i),n.button_binding(I)},p(t,n){t.$arrString&&E!==(E=n.$arrString.length+"")&&S(o,E),!T&&t.startIndex&&q(f,n.startIndex),T=!1,!N&&t.stopIndex&&q(g,n.stopIndex),N=!1},i:t,o:t,d(t){t&&(v(e),v(u),v(s),v(c),v(l),v(m),v(p),v(_),v(I)),n.button_binding(null),i(A)}}}function Ct(t,n,e){let r,i,o,a;u(t,ht,t=>{e("$arrString",r=t)}),u(t,$t,t=>{e("$arrSelected",i=t)}),u(t,ft,t=>{e("$remaining",o=t)}),u(t,pt,t=>{e("$state",a=t)});let c,l,d,f=/^[a-z]*[a-z]/gi,m=/\[.*\]/gi,p=/[а-я].*[а-я]/gi;return{butConnect:c,startIndex:l,stopIndex:d,parse:function(){l<=0||d<=0||d>r.length?alert("Некорректный диапазон"):(s($t,i=r.slice(e("startIndex",--l),d)),i.forEach(t=>{let n={word:t.match(f)[0],trp:t.match(m)[0],trt:t.match(p)[0].split(", "),done:!1};s(ft,o=[...o,n])}),s(pt,a="list"))},$arrString:r,input0_input_handler:function(){l=I(this.value),e("startIndex",l)},input1_input_handler:function(){d=I(this.value),e("stopIndex",d)},button_binding:function(t){z[t?"unshift":"push"](()=>{e("butConnect",c=t)})}}}class It extends ct{constructor(t){super(),st(this,t,Ct,kt,a,[])}}function St(t,n,e){const r=Object.create(t);return r.item=n[e],r.i=e,r}function qt(t,n){var e,r,i,o=n.item+"";return{key:t,first:null,c(){e=x("div"),r=x("span"),i=y(o),C(r,"class","text svelte-veb4gu"),C(e,"class","item svelte-veb4gu"),this.first=e},m(t,n){b(t,e,n),h(e,r),h(r,i)},p(t,n){t.$arrSelected&&o!==(o=n.item+"")&&S(i,o)},d(t){t&&v(e)}}}function At(n){var e,r,o,a,u,s,c,l,d,f,m=[],p=new Map;let $=n.$arrSelected;const g=t=>t.i;for(let t=0;t<$.length;t+=1){let e=St(n,$,t),r=g(e);p.set(r,m[t]=qt(r,e))}return{c(){(e=x("h2")).textContent="учим 🙇",r=w(),o=x("p"),a=y('кнопка "Начать тест" в\r\n  '),(u=x("a")).textContent="конце",s=y("\r\n  текста"),c=w();for(let t=0;t<m.length;t+=1)m[t].c();var t;l=w(),(d=x("button")).textContent="Начать тест 😬",C(e,"class","svelte-veb4gu"),C(u,"href","#end"),C(d,"id","end"),f=[k(u,"click",(t=n.smoothScrolling,function(n){return n.preventDefault(),t.call(this,n)})),k(d,"click",n.startTest)]},m(t,i){b(t,e,i),b(t,r,i),b(t,o,i),h(o,a),h(o,u),h(o,s),b(t,c,i);for(let n=0;n<m.length;n+=1)m[n].m(t,i);b(t,l,i),b(t,d,i),n.button_binding(d)},p(t,n){const e=n.$arrSelected;m=function(t,n,e,r,i,o,a,u,s,c,l,d){let f=t.length,m=o.length,p=f;const $={};for(;p--;)$[t[p].key]=p;const g=[],h=new Map,b=new Map;for(p=m;p--;){const t=d(i,o,p),u=e(t);let s=a.get(u);s?r&&s.p(n,t):(s=c(u,t)).c(),h.set(u,g[p]=s),u in $&&b.set(u,Math.abs(p-$[u]))}const v=new Set,x=new Set;function y(t){Y(t,1),t.m(u,l),a.set(t.key,t),l=t.first,m--}for(;f&&m;){const n=g[m-1],e=t[f-1],r=n.key,i=e.key;n===e?(l=n.first,f--,m--):h.has(i)?!a.has(r)||v.has(r)?y(n):x.has(i)?f--:b.get(r)>b.get(i)?(x.add(r),y(n)):(v.add(i),f--):(s(e,a),f--)}for(;f--;){const n=t[f];h.has(n.key)||s(n,a)}for(;m;)y(g[m-1]);return g}(m,t,g,1,n,e,p,l.parentNode,it,qt,l,St)},i:t,o:t,d(t){t&&(v(e),v(r),v(o),v(c));for(let n=0;n<m.length;n+=1)m[n].d(t);t&&(v(l),v(d)),n.button_binding(null),i(f)}}}function Et(t,n,e){let r,i,o;return u(t,pt,t=>{e("$state",r=t)}),u(t,$t,t=>{e("$arrSelected",i=t)}),{anchor:o,startTest:function(){s(pt,r="test")},smoothScrolling:function(){o.scrollIntoView({block:"center",behavior:"smooth"})},$arrSelected:i,button_binding:function(t){z[t?"unshift":"push"](()=>{e("anchor",o=t)})}}}class Tt extends ct{constructor(t){super(),st(this,t,Et,At,a,[])}}function Nt(t){const n=t-1;return n*n*n+1}function Ft(t,{delay:n=0,duration:e=400}){const r=+getComputedStyle(t).opacity;return{delay:n,duration:e,css:t=>`opacity: ${t*r}`}}function Mt(t,{delay:n=0,duration:e=400,easing:r=Nt,x:i=0,y:o=0,opacity:a=0}){const u=getComputedStyle(t),s=+u.opacity,c="none"===u.transform?"":u.transform,l=s*(1-a);return{delay:n,duration:e,easing:r,css:(t,n)=>`\n\t\t\ttransform: ${c} translate(${(1-t)*i}px, ${(1-t)*o}px);\n\t\t\topacity: ${s-l*n}`}}function Ht(t){var n,e,r,i,o,a,u,s,c=t.$remaining[t.randomIndex].word+"";return{c(){n=x("div"),(e=x("p")).textContent="слово:",r=w(),i=x("h2"),o=y(c),C(e,"class","lable svelte-mqk3ba"),C(i,"class","word svelte-mqk3ba"),C(n,"class","wrap-word svelte-mqk3ba")},m(t,a){b(t,n,a),h(n,e),h(n,r),h(n,i),h(i,o),s=!0},p(t,n){s&&!t.$remaining&&!t.randomIndex||c===(c=n.$remaining[n.randomIndex].word+"")||S(o,c)},i(t){s||(B(()=>{u&&u.end(1),a||(a=nt(n,Ft,{delay:200,duration:800})),a.start()}),s=!0)},o(t){a&&a.invalidate(),u=et(n,Ft,{duration:200}),s=!1},d(t){t&&(v(n),u&&u.end())}}}function jt(t){var n,e,r,i,o=[Ot,zt],a=[];function u(t,n){return n.rightAnswer?0:1}return n=u(0,t),e=a[n]=o[n](t),{c(){e.c(),r=_()},m(t,e){a[n].m(t,e),b(t,r,e),i=!0},p(t,i){var s=n;(n=u(0,i))!==s&&(Q(),Z(a[s],1,1,()=>{a[s]=null}),X(),(e=a[n])||(e=a[n]=o[n](i)).c(),Y(e,1),e.m(r.parentNode,r))},i(t){i||(Y(e),i=!0)},o(t){Z(e),i=!1},d(t){a[n].d(t),t&&v(r)}}}function zt(t){var n,e,r,i;return{c(){(n=x("h2")).textContent="Не правильно. 🙅",C(n,"class","false svelte-mqk3ba")},m(t,e){b(t,n,e),i=!0},i(t){i||(B(()=>{r&&r.end(1),e||(e=nt(n,Ft,{duration:500})),e.start()}),i=!0)},o(t){e&&e.invalidate(),r=et(n,Ft,{duration:0}),i=!1},d(t){t&&(v(n),r&&r.end())}}}function Ot(t){var n,e,r,i;return{c(){(n=x("h2")).textContent="Правильно! 🙋",C(n,"class","right svelte-mqk3ba")},m(t,e){b(t,n,e),i=!0},i(t){i||(B(()=>{r&&r.end(1),e||(e=nt(n,Ft,{duration:500})),e.start()}),i=!0)},o(t){e&&e.invalidate(),r=et(n,Ft,{duration:0}),i=!1},d(t){t&&(v(n),r&&r.end())}}}function Rt(n){var e,r;return{c(){(e=x("button")).textContent="next word",r=k(e,"click",n.nextHandler)},m(t,r){b(t,e,r),n.button_binding_1(e)},p:t,d(t){t&&v(e),n.button_binding_1(null),r()}}}function Wt(t){var n,e,r,i,o,a,u,s,c,l,d,f,m,p,$,g,_,k,I,q,A,E,T,N,F,M,H=t.$unanswered.length+"",j=t.$remaining[t.randomIndex].word+"",z=t.$remaining[t.randomIndex].trp+"",O=t.$remaining[t.randomIndex].trt.join(", ")+"";return{c(){n=x("div"),e=x("div"),r=x("p"),i=y("Всего слов: "),o=y(t.wordCount),a=w(),u=x("p"),s=y("Осталось слов: "),c=y(t.remainedWords),l=w(),d=x("p"),f=y("Не отвечены: "),m=y(H),p=w(),$=x("div"),g=x("h2"),_=y(j),k=w(),I=x("h2"),q=y(z),A=w(),E=x("h3"),T=y(O),C(e,"class","info svelte-mqk3ba"),C(g,"class","card-word svelte-mqk3ba"),C(I,"class","card-trp svelte-mqk3ba"),C($,"class","word-trp svelte-mqk3ba"),C(n,"class","card svelte-mqk3ba")},m(t,v){b(t,n,v),h(n,e),h(e,r),h(r,i),h(r,o),h(e,a),h(e,u),h(u,s),h(u,c),h(e,l),h(e,d),h(d,f),h(d,m),h(n,p),h(n,$),h($,g),h(g,_),h($,k),h($,I),h(I,q),h(n,A),h(n,E),h(E,T),M=!0},p(t,n){M&&!t.wordCount||S(o,n.wordCount),M&&!t.remainedWords||S(c,n.remainedWords),M&&!t.$unanswered||H===(H=n.$unanswered.length+"")||S(m,H),M&&!t.$remaining&&!t.randomIndex||j===(j=n.$remaining[n.randomIndex].word+"")||S(_,j),M&&!t.$remaining&&!t.randomIndex||z===(z=n.$remaining[n.randomIndex].trp+"")||S(q,z),M&&!t.$remaining&&!t.randomIndex||O===(O=n.$remaining[n.randomIndex].trt.join(", ")+"")||S(T,O)},i(t){M||(B(()=>{F&&F.end(1),N||(N=nt(n,Ft,{duration:500})),N.start()}),M=!0)},o(t){N&&N.invalidate(),F=et(n,Ft,{duration:400}),M=!1},d(t){t&&(v(n),F&&F.end())}}}function Lt(t){var n,e,r,o,a,u,s,c,l,d,f,m=t.$remaining[t.randomIndex]&&Ht(t),p=t.done&&jt(t),$=0!==t.$remaining.length&&Rt(t),g=t.done&&Wt(t);return{c(){n=x("div"),m&&m.c(),e=w(),p&&p.c(),r=w(),o=x("input"),a=w(),(u=x("button")).textContent="check",s=w(),$&&$.c(),c=w(),g&&g.c(),l=_(),C(n,"class","wrap svelte-mqk3ba"),f=[k(o,"input",t.input_1_input_handler),k(o,"change",t.checkHanler),k(u,"click",t.checkHanler)]},m(i,f){b(i,n,f),m&&m.m(n,null),h(n,e),p&&p.m(n,null),b(i,r,f),b(i,o,f),q(o,t.inputText),t.input_1_binding(o),b(i,a,f),b(i,u,f),t.button_binding(u),b(i,s,f),$&&$.m(i,f),b(i,c,f),g&&g.m(i,f),b(i,l,f),d=!0},p(t,r){r.$remaining[r.randomIndex]?m?(m.p(t,r),Y(m,1)):((m=Ht(r)).c(),Y(m,1),m.m(n,e)):m&&(Q(),Z(m,1,1,()=>{m=null}),X()),r.done?p?(p.p(t,r),Y(p,1)):((p=jt(r)).c(),Y(p,1),p.m(n,null)):p&&(Q(),Z(p,1,1,()=>{p=null}),X()),t.inputText&&o.value!==r.inputText&&q(o,r.inputText),0!==r.$remaining.length?$?$.p(t,r):(($=Rt(r)).c(),$.m(c.parentNode,c)):$&&($.d(1),$=null),r.done?g?(g.p(t,r),Y(g,1)):((g=Wt(r)).c(),Y(g,1),g.m(l.parentNode,l)):g&&(Q(),Z(g,1,1,()=>{g=null}),X())},i(t){d||(Y(m),Y(p),Y(g),d=!0)},o(t){Z(m),Z(p),Z(g),d=!1},d(e){e&&v(n),m&&m.d(),p&&p.d(),e&&(v(r),v(o)),t.input_1_binding(null),e&&(v(a),v(u)),t.button_binding(null),e&&v(s),$&&$.d(e),e&&v(c),g&&g.d(e),e&&v(l),i(f)}}}function Pt(t,n,e){let r,i,o;u(t,ft,t=>{e("$remaining",r=t)}),u(t,mt,t=>{e("$unanswered",i=t)}),u(t,pt,t=>{e("$state",o=t)});let a,c,l,d,f="",m=null,p=0,$=!1,g=!1;function h(){$&&(r.splice(m,1),ft.set(r)),e("done",$=!1),e("rightAnswer",g=!1),e("inputText",f=""),0!==r.length?(e("randomIndex",m=Math.floor(Math.random()*(r.length-1+1))),console.log("выбран элемент",r[m]),console.log("перевод",r[m].trt),l.removeAttribute("disabled"),a.focus()):0===i.length?s(pt,o="end"):s(pt,o="repeated")}return H(()=>{e("wordCount",p=r.length),h()}),t.$$.update=(t={$remaining:1})=>{t.$remaining&&e("remainedWords",d=r.length-1)},{inputText:f,randomIndex:m,wordCount:p,done:$,rightAnswer:g,input:a,butNext:c,butCheck:l,nextHandler:h,checkHanler:function(){if(a.value.length<4&&r[m].trt.some(t=>t.length>2))return alert("Недостаточно букв"),void a.focus();/[а-яА-ЯЁё]+/.test(a.value)?(r[m].trt.some(t=>t.includes(a.value.toLowerCase()))?e("rightAnswer",g=!0):i.push(r[m]),e("done",$=!0),l.setAttribute("disabled",""),c.focus()):(alert("Написано не по русски"),a.focus())},$remaining:r,remainedWords:d,$unanswered:i,input_1_input_handler:function(){f=this.value,e("inputText",f)},input_1_binding:function(t){z[t?"unshift":"push"](()=>{e("input",a=t)})},button_binding:function(t){z[t?"unshift":"push"](()=>{e("butCheck",l=t)})},button_binding_1:function(t){z[t?"unshift":"push"](()=>{e("butNext",c=t)})}}}class Bt extends ct{constructor(t){super(),st(this,t,Pt,Lt,a,[])}}function Dt(n){var e,r,i;return{c(){(e=x("h2")).textContent="Тест окончен. 😅",r=w(),(i=x("p")).textContent="Чтобы пройти тест ещё раз - перезагрузите страницу",C(e,"class","svelte-1suz8eo")},m(t,n){b(t,e,n),b(t,r,n),b(t,i,n)},p:t,i:t,o:t,d(t){t&&(v(e),v(r),v(i))}}}class Ut extends ct{constructor(t){super(),st(this,t,null,Dt,a,[])}}function Vt(t){var n,e,r,i,o=new It({});return{c(){n=x("div"),o.$$.fragment.c()},m(t,e){b(t,n,e),ot(o,n,null),i=!0},i(t){i||(Y(o.$$.fragment,t),B(()=>{r&&r.end(1),e||(e=nt(n,Ft,{delay:800,duration:300})),e.start()}),i=!0)},o(t){Z(o.$$.fragment,t),e&&e.invalidate(),r=et(n,Mt,{y:-80,duration:500}),i=!1},d(t){t&&v(n),at(o),t&&r&&r.end()}}}function Gt(t){var n,e,r,i,o=new Tt({});return{c(){n=x("div"),o.$$.fragment.c()},m(t,e){b(t,n,e),ot(o,n,null),i=!0},i(t){i||(Y(o.$$.fragment,t),B(()=>{r&&r.end(1),e||(e=nt(n,Mt,{y:500,delay:500,duration:1500})),e.start()}),i=!0)},o(t){Z(o.$$.fragment,t),e&&e.invalidate(),r=et(n,Mt,{y:200,duration:800}),i=!1},d(t){t&&v(n),at(o),t&&r&&r.end()}}}function Jt(t){var n,e,r,i,o=new _t({});return{c(){n=x("div"),o.$$.fragment.c()},m(t,e){b(t,n,e),ot(o,n,null),i=!0},i(t){i||(Y(o.$$.fragment,t),B(()=>{r&&r.end(1),e||(e=nt(n,Ft,{duration:500})),e.start()}),i=!0)},o(t){Z(o.$$.fragment,t),e&&e.invalidate(),r=et(n,Mt,{y:200,duration:800}),i=!1},d(t){t&&v(n),at(o),t&&r&&r.end()}}}function Kt(t){var n,e,r,i,o=new Bt({});return{c(){n=x("div"),o.$$.fragment.c()},m(t,e){b(t,n,e),ot(o,n,null),i=!0},i(t){i||(Y(o.$$.fragment,t),B(()=>{r&&r.end(1),e||(e=nt(n,Ft,{delay:800,duration:300})),e.start()}),i=!0)},o(t){Z(o.$$.fragment,t),e&&e.invalidate(),r=et(n,Ft,{duration:100}),i=!1},d(t){t&&v(n),at(o),t&&r&&r.end()}}}function Qt(t){var n,e,r,i=new xt({});return{c(){n=x("div"),i.$$.fragment.c()},m(t,e){b(t,n,e),ot(i,n,null),r=!0},i(t){r||(Y(i.$$.fragment,t),B(()=>{e||(e=rt(n,Mt,{delay:100,duration:500},!0)),e.run(1)}),r=!0)},o(t){Z(i.$$.fragment,t),e||(e=rt(n,Mt,{delay:100,duration:500},!1)),e.run(0),r=!1},d(t){t&&v(n),at(i),t&&e&&e.end()}}}function Xt(t){var n,e,r,i=new Ut({});return{c(){n=x("div"),i.$$.fragment.c()},m(t,e){b(t,n,e),ot(i,n,null),r=!0},i(t){r||(Y(i.$$.fragment,t),B(()=>{e||(e=rt(n,Ft,{delay:100,duration:500},!0)),e.run(1)}),r=!0)},o(t){Z(i.$$.fragment,t),e||(e=rt(n,Ft,{delay:100,duration:500},!1)),e.run(0),r=!1},d(t){t&&v(n),at(i),t&&e&&e.end()}}}function Yt(t){var n,e,r,i,o,a,u,s,c,l="parse"===t.$state&&Vt(),d="list"===t.$state&&Gt(),f="get"===t.$state&&Jt(),m="test"===t.$state&&Kt(),p="repeated"===t.$state&&Qt(),$="end"===t.$state&&Xt();return{c(){n=x("div"),(e=x("h2")).textContent="Тестирование знания английских слов",r=w(),l&&l.c(),i=w(),d&&d.c(),o=w(),f&&f.c(),a=w(),m&&m.c(),u=w(),p&&p.c(),s=w(),$&&$.c(),C(e,"class","title svelte-1drok1u"),C(n,"class","container svelte-1drok1u")},m(t,g){b(t,n,g),h(n,e),h(n,r),l&&l.m(n,null),h(n,i),d&&d.m(n,null),h(n,o),f&&f.m(n,null),h(n,a),m&&m.m(n,null),h(n,u),p&&p.m(n,null),h(n,s),$&&$.m(n,null),c=!0},p(t,e){"parse"===e.$state?l?Y(l,1):((l=Vt()).c(),Y(l,1),l.m(n,i)):l&&(Q(),Z(l,1,1,()=>{l=null}),X()),"list"===e.$state?d?Y(d,1):((d=Gt()).c(),Y(d,1),d.m(n,o)):d&&(Q(),Z(d,1,1,()=>{d=null}),X()),"get"===e.$state?f?Y(f,1):((f=Jt()).c(),Y(f,1),f.m(n,a)):f&&(Q(),Z(f,1,1,()=>{f=null}),X()),"test"===e.$state?m?Y(m,1):((m=Kt()).c(),Y(m,1),m.m(n,u)):m&&(Q(),Z(m,1,1,()=>{m=null}),X()),"repeated"===e.$state?p?Y(p,1):((p=Qt()).c(),Y(p,1),p.m(n,s)):p&&(Q(),Z(p,1,1,()=>{p=null}),X()),"end"===e.$state?$?Y($,1):(($=Xt()).c(),Y($,1),$.m(n,null)):$&&(Q(),Z($,1,1,()=>{$=null}),X())},i(t){c||(Y(l),Y(d),Y(f),Y(m),Y(p),Y($),c=!0)},o(t){Z(l),Z(d),Z(f),Z(m),Z(p),Z($),c=!1},d(t){t&&v(n),l&&l.d(),d&&d.d(),f&&f.d(),m&&m.d(),p&&p.d(),$&&$.d()}}}function Zt(t,n,e){let r;return u(t,pt,t=>{e("$state",r=t)}),{$state:r}}return new class extends ct{constructor(t){super(),st(this,t,Zt,Yt,a,[])}}({target:document.body,props:{name:"world"}})}();
//# sourceMappingURL=bundle.js.map
