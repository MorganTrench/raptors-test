function O(){}const it=t=>t;function rt(t,e){for(const n in e)t[n]=e[n];return t}function K(t){return t()}function F(){return Object.create(null)}function v(t){t.forEach(K)}function W(t){return typeof t=="function"}function Pt(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}let k;function Rt(t,e){return k||(k=document.createElement("a")),k.href=e,t===k.href}function ct(t){return Object.keys(t).length===0}function qt(t,e,n,i){if(t){const r=Q(t,e,n,i);return t[0](r)}}function Q(t,e,n,i){return t[1]&&i?rt(n.ctx.slice(),t[1](i(e))):n.ctx}function Dt(t,e,n,i){if(t[2]&&i){const r=t[2](i(n));if(e.dirty===void 0)return r;if(typeof r=="object"){const u=[],o=Math.max(e.dirty.length,r.length);for(let l=0;l<o;l+=1)u[l]=e.dirty[l]|r[l];return u}return e.dirty|r}return e.dirty}function zt(t,e,n,i,r,u){if(r){const o=Q(e,n,i,u);t.p(o,r)}}function Bt(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let i=0;i<n;i++)e[i]=-1;return e}return-1}const U=typeof window!="undefined";let ot=U?()=>window.performance.now():()=>Date.now(),z=U?t=>requestAnimationFrame(t):O;const y=new Set;function V(t){y.forEach(e=>{e.c(t)||(y.delete(e),e.f())}),y.size!==0&&z(V)}function lt(t){let e;return y.size===0&&z(V),{promise:new Promise(n=>{y.add(e={c:t,f:n})}),abort(){y.delete(e)}}}let P=!1;function st(){P=!0}function ut(){P=!1}function at(t,e,n,i){for(;t<e;){const r=t+(e-t>>1);n(r)<=i?t=r+1:e=r}return t}function ft(t){if(t.hydrate_init)return;t.hydrate_init=!0;let e=t.childNodes;if(t.nodeName==="HEAD"){const c=[];for(let s=0;s<e.length;s++){const f=e[s];f.claim_order!==void 0&&c.push(f)}e=c}const n=new Int32Array(e.length+1),i=new Int32Array(e.length);n[0]=-1;let r=0;for(let c=0;c<e.length;c++){const s=e[c].claim_order,f=(r>0&&e[n[r]].claim_order<=s?r+1:at(1,r,_=>e[n[_]].claim_order,s))-1;i[c]=n[f]+1;const a=f+1;n[a]=c,r=Math.max(a,r)}const u=[],o=[];let l=e.length-1;for(let c=n[r]+1;c!=0;c=i[c-1]){for(u.push(e[c-1]);l>=c;l--)o.push(e[l]);l--}for(;l>=0;l--)o.push(e[l]);u.reverse(),o.sort((c,s)=>c.claim_order-s.claim_order);for(let c=0,s=0;c<o.length;c++){for(;s<u.length&&o[c].claim_order>=u[s].claim_order;)s++;const f=s<u.length?u[s]:null;t.insertBefore(o[c],f)}}function _t(t,e){t.appendChild(e)}function X(t){if(!t)return document;const e=t.getRootNode?t.getRootNode():t.ownerDocument;return e&&e.host?e:t.ownerDocument}function dt(t){const e=Y("style");return ht(X(t),e),e.sheet}function ht(t,e){_t(t.head||t,e)}function mt(t,e){if(P){for(ft(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentElement!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;e!==t.actual_end_child?(e.claim_order!==void 0||e.parentNode!==t)&&t.insertBefore(e,t.actual_end_child):t.actual_end_child=e.nextSibling}else(e.parentNode!==t||e.nextSibling!==null)&&t.appendChild(e)}function Lt(t,e,n){P&&!n?mt(t,e):(e.parentNode!==t||e.nextSibling!=n)&&t.insertBefore(e,n||null)}function pt(t){t.parentNode.removeChild(t)}function Tt(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function Y(t){return document.createElement(t)}function B(t){return document.createTextNode(t)}function Ft(){return B(" ")}function Ht(){return B("")}function It(t,e,n,i){return t.addEventListener(e,n,i),()=>t.removeEventListener(e,n,i)}function Gt(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function yt(t){return Array.from(t.childNodes)}function gt(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function Z(t,e,n,i,r=!1){gt(t);const u=(()=>{for(let o=t.claim_info.last_index;o<t.length;o++){const l=t[o];if(e(l)){const c=n(l);return c===void 0?t.splice(o,1):t[o]=c,r||(t.claim_info.last_index=o),l}}for(let o=t.claim_info.last_index-1;o>=0;o--){const l=t[o];if(e(l)){const c=n(l);return c===void 0?t.splice(o,1):t[o]=c,r?c===void 0&&t.claim_info.last_index--:t.claim_info.last_index=o,l}}return i()})();return u.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,u}function xt(t,e,n,i){return Z(t,r=>r.nodeName===e,r=>{const u=[];for(let o=0;o<r.attributes.length;o++){const l=r.attributes[o];n[l.name]||u.push(l.name)}u.forEach(o=>r.removeAttribute(o))},()=>i(e))}function Jt(t,e,n){return xt(t,e,n,Y)}function $t(t,e){return Z(t,n=>n.nodeType===3,n=>{const i=""+e;if(n.data.startsWith(i)){if(n.data.length!==i.length)return n.splitText(i.length)}else n.data=i},()=>B(e),!0)}function Kt(t){return $t(t," ")}function Wt(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function Qt(t,e,n,i){n===null?t.style.removeProperty(e):t.style.setProperty(e,n,i?"important":"")}function bt(t,e,n=!1){const i=document.createEvent("CustomEvent");return i.initCustomEvent(t,n,!1,e),i}const C=new Map;let S=0;function wt(t){let e=5381,n=t.length;for(;n--;)e=(e<<5)-e^t.charCodeAt(n);return e>>>0}function vt(t,e){const n={stylesheet:dt(e),rules:{}};return C.set(t,n),n}function Et(t,e,n,i,r,u,o,l=0){const c=16.666/i;let s=`{
`;for(let m=0;m<=1;m+=c){const E=e+(n-e)*u(m);s+=m*100+`%{${o(E,1-E)}}
`}const f=s+`100% {${o(n,1-n)}}
}`,a=`__svelte_${wt(f)}_${l}`,_=X(t),{stylesheet:h,rules:d}=C.get(_)||vt(_,t);d[a]||(d[a]=!0,h.insertRule(`@keyframes ${a} ${f}`,h.cssRules.length));const g=t.style.animation||"";return t.style.animation=`${g?`${g}, `:""}${a} ${i}ms linear ${r}ms 1 both`,S+=1,a}function H(t,e){const n=(t.style.animation||"").split(", "),i=n.filter(e?u=>u.indexOf(e)<0:u=>u.indexOf("__svelte")===-1),r=n.length-i.length;r&&(t.style.animation=i.join(", "),S-=r,S||kt())}function kt(){z(()=>{S||(C.forEach(t=>{const{stylesheet:e}=t;let n=e.cssRules.length;for(;n--;)e.deleteRule(n);t.rules={}}),C.clear())})}let w;function b(t){w=t}function L(){if(!w)throw new Error("Function called outside component initialization");return w}function Ut(t){L().$$.on_mount.push(t)}function Vt(t){L().$$.after_update.push(t)}function Xt(t,e){L().$$.context.set(t,e)}const $=[],I=[],j=[],G=[],tt=Promise.resolve();let D=!1;function et(){D||(D=!0,tt.then(nt))}function Yt(){return et(),tt}function M(t){j.push(t)}const q=new Set;let N=0;function nt(){const t=w;do{for(;N<$.length;){const e=$[N];N++,b(e),Nt(e.$$)}for(b(null),$.length=0,N=0;I.length;)I.pop()();for(let e=0;e<j.length;e+=1){const n=j[e];q.has(n)||(q.add(n),n())}j.length=0}while($.length);for(;G.length;)G.pop()();D=!1,q.clear(),b(t)}function Nt(t){if(t.fragment!==null){t.update(),v(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(M)}}let x;function jt(){return x||(x=Promise.resolve(),x.then(()=>{x=null})),x}function J(t,e,n){t.dispatchEvent(bt(`${e?"intro":"outro"}${n}`))}const A=new Set;let p;function Zt(){p={r:0,c:[],p}}function te(){p.r||v(p.c),p=p.p}function At(t,e){t&&t.i&&(A.delete(t),t.i(e))}function ee(t,e,n,i){if(t&&t.o){if(A.has(t))return;A.add(t),p.c.push(()=>{A.delete(t),i&&(n&&t.d(1),i())}),t.o(e)}}const Ct={duration:0};function ne(t,e,n){let i=e(t,n),r=!1,u,o,l=0;function c(){u&&H(t,u)}function s(){const{delay:a=0,duration:_=300,easing:h=it,tick:d=O,css:g}=i||Ct;g&&(u=Et(t,0,1,_,a,h,g,l++)),d(0,1);const m=ot()+a,E=m+_;o&&o.abort(),r=!0,M(()=>J(t,!0,"start")),o=lt(R=>{if(r){if(R>=E)return d(1,0),J(t,!0,"end"),c(),r=!1;if(R>=m){const T=h((R-m)/_);d(T,1-T)}}return r})}let f=!1;return{start(){f||(f=!0,H(t),W(i)?(i=i(),jt().then(s)):s())},invalidate(){f=!1},end(){r&&(c(),r=!1)}}}function ie(t,e){const n={},i={},r={$$scope:1};let u=t.length;for(;u--;){const o=t[u],l=e[u];if(l){for(const c in o)c in l||(i[c]=1);for(const c in l)r[c]||(n[c]=l[c],r[c]=1);t[u]=l}else for(const c in o)r[c]=1}for(const o in i)o in n||(n[o]=void 0);return n}function re(t){return typeof t=="object"&&t!==null?t:{}}function ce(t){t&&t.c()}function oe(t,e){t&&t.l(e)}function St(t,e,n,i){const{fragment:r,on_mount:u,on_destroy:o,after_update:l}=t.$$;r&&r.m(e,n),i||M(()=>{const c=u.map(K).filter(W);o?o.push(...c):v(c),t.$$.on_mount=[]}),l.forEach(M)}function Mt(t,e){const n=t.$$;n.fragment!==null&&(v(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function Ot(t,e){t.$$.dirty[0]===-1&&($.push(t),et(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function le(t,e,n,i,r,u,o,l=[-1]){const c=w;b(t);const s=t.$$={fragment:null,ctx:null,props:u,update:O,not_equal:r,bound:F(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(c?c.$$.context:[])),callbacks:F(),dirty:l,skip_bound:!1,root:e.target||c.$$.root};o&&o(s.root);let f=!1;if(s.ctx=n?n(t,e.props||{},(a,_,...h)=>{const d=h.length?h[0]:_;return s.ctx&&r(s.ctx[a],s.ctx[a]=d)&&(!s.skip_bound&&s.bound[a]&&s.bound[a](d),f&&Ot(t,a)),_}):[],s.update(),f=!0,v(s.before_update),s.fragment=i?i(s.ctx):!1,e.target){if(e.hydrate){st();const a=yt(e.target);s.fragment&&s.fragment.l(a),a.forEach(pt)}else s.fragment&&s.fragment.c();e.intro&&At(t.$$.fragment),St(t,e.target,e.anchor,e.customElement),ut(),nt()}b(c)}class se{$destroy(){Mt(this,1),this.$destroy=O}$on(e,n){const i=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return i.push(n),()=>{const r=i.indexOf(n);r!==-1&&i.splice(r,1)}}$set(e){this.$$set&&!ct(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}export{ie as A,re as B,Mt as C,rt as D,Yt as E,mt as F,qt as G,zt as H,Bt as I,Dt as J,M as K,Rt as L,It as M,it as N,ne as O,Tt as P,se as S,yt as a,Gt as b,Jt as c,pt as d,Y as e,Qt as f,Lt as g,$t as h,le as i,Wt as j,Ft as k,Ht as l,Kt as m,O as n,Zt as o,ee as p,te as q,At as r,Pt as s,B as t,Xt as u,Vt as v,Ut as w,ce as x,oe as y,St as z};
