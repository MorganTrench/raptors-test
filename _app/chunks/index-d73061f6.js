function B(){}function H(t,n){for(const e in n)t[e]=n[e];return t}function T(t){return t()}function C(){return Object.create(null)}function p(t){t.forEach(T)}function I(t){return typeof t=="function"}function ct(t,n){return t!=t?n==n:t!==n||t&&typeof t=="object"||typeof t=="function"}let g;function lt(t,n){return g||(g=document.createElement("a")),g.href=n,t===g.href}function L(t){return Object.keys(t).length===0}function ot(t,n,e,r){if(t){const c=O(t,n,e,r);return t[0](c)}}function O(t,n,e,r){return t[1]&&r?H(e.ctx.slice(),t[1](r(n))):e.ctx}function ut(t,n,e,r){if(t[2]&&r){const c=t[2](r(e));if(n.dirty===void 0)return c;if(typeof c=="object"){const f=[],l=Math.max(n.dirty.length,c.length);for(let o=0;o<l;o+=1)f[o]=n.dirty[o]|c[o];return f}return n.dirty|c}return n.dirty}function ft(t,n,e,r,c,f){if(c){const l=O(n,e,r,f);t.p(l,c)}}function at(t){if(t.ctx.length>32){const n=[],e=t.ctx.length/32;for(let r=0;r<e;r++)n[r]=-1;return n}return-1}let w=!1;function G(){w=!0}function J(){w=!1}function K(t,n,e,r){for(;t<n;){const c=t+(n-t>>1);e(c)<=r?t=c+1:n=c}return t}function W(t){if(t.hydrate_init)return;t.hydrate_init=!0;let n=t.childNodes;if(t.nodeName==="HEAD"){const i=[];for(let u=0;u<n.length;u++){const s=n[u];s.claim_order!==void 0&&i.push(s)}n=i}const e=new Int32Array(n.length+1),r=new Int32Array(n.length);e[0]=-1;let c=0;for(let i=0;i<n.length;i++){const u=n[i].claim_order,s=(c>0&&n[e[c]].claim_order<=u?c+1:K(1,c,y=>n[e[y]].claim_order,u))-1;r[i]=e[s]+1;const a=s+1;e[a]=i,c=Math.max(a,c)}const f=[],l=[];let o=n.length-1;for(let i=e[c]+1;i!=0;i=r[i-1]){for(f.push(n[i-1]);o>=i;o--)l.push(n[o]);o--}for(;o>=0;o--)l.push(n[o]);f.reverse(),l.sort((i,u)=>i.claim_order-u.claim_order);for(let i=0,u=0;i<l.length;i++){for(;u<f.length&&l[i].claim_order>=f[u].claim_order;)u++;const s=u<f.length?f[u]:null;t.insertBefore(l[i],s)}}function Q(t,n){if(w){for(W(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentElement!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;n!==t.actual_end_child?(n.claim_order!==void 0||n.parentNode!==t)&&t.insertBefore(n,t.actual_end_child):t.actual_end_child=n.nextSibling}else(n.parentNode!==t||n.nextSibling!==null)&&t.appendChild(n)}function st(t,n,e){w&&!e?Q(t,n):(n.parentNode!==t||n.nextSibling!=e)&&t.insertBefore(n,e||null)}function R(t){t.parentNode.removeChild(t)}function _t(t,n){for(let e=0;e<t.length;e+=1)t[e]&&t[e].d(n)}function U(t){return document.createElement(t)}function A(t){return document.createTextNode(t)}function dt(){return A(" ")}function ht(){return A("")}function mt(t,n,e){e==null?t.removeAttribute(n):t.getAttribute(n)!==e&&t.setAttribute(n,e)}function V(t){return Array.from(t.childNodes)}function X(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function P(t,n,e,r,c=!1){X(t);const f=(()=>{for(let l=t.claim_info.last_index;l<t.length;l++){const o=t[l];if(n(o)){const i=e(o);return i===void 0?t.splice(l,1):t[l]=i,c||(t.claim_info.last_index=l),o}}for(let l=t.claim_info.last_index-1;l>=0;l--){const o=t[l];if(n(o)){const i=e(o);return i===void 0?t.splice(l,1):t[l]=i,c?i===void 0&&t.claim_info.last_index--:t.claim_info.last_index=l,o}}return r()})();return f.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,f}function Y(t,n,e,r){return P(t,c=>c.nodeName===n,c=>{const f=[];for(let l=0;l<c.attributes.length;l++){const o=c.attributes[l];e[o.name]||f.push(o.name)}f.forEach(l=>c.removeAttribute(l))},()=>r(n))}function pt(t,n,e){return Y(t,n,e,U)}function Z(t,n){return P(t,e=>e.nodeType===3,e=>{const r=""+n;if(e.data.startsWith(r)){if(e.data.length!==r.length)return e.splitText(r.length)}else e.data=r},()=>A(n),!0)}function yt(t){return Z(t," ")}function gt(t,n){n=""+n,t.wholeText!==n&&(t.data=n)}function xt(t,n,e,r){e===null?t.style.removeProperty(n):t.style.setProperty(n,e,r?"important":"")}let m;function h(t){m=t}function N(){if(!m)throw new Error("Function called outside component initialization");return m}function bt(t){N().$$.on_mount.push(t)}function $t(t){N().$$.after_update.push(t)}function wt(t,n){N().$$.context.set(t,n)}const d=[],M=[],b=[],q=[],z=Promise.resolve();let k=!1;function D(){k||(k=!0,z.then(F))}function Et(){return D(),z}function j(t){b.push(t)}const E=new Set;let x=0;function F(){const t=m;do{for(;x<d.length;){const n=d[x];x++,h(n),tt(n.$$)}for(h(null),d.length=0,x=0;M.length;)M.pop()();for(let n=0;n<b.length;n+=1){const e=b[n];E.has(e)||(E.add(e),e())}b.length=0}while(d.length);for(;q.length;)q.pop()();k=!1,E.clear(),h(t)}function tt(t){if(t.fragment!==null){t.update(),p(t.before_update);const n=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,n),t.after_update.forEach(j)}}const $=new Set;let _;function kt(){_={r:0,c:[],p:_}}function jt(){_.r||p(_.c),_=_.p}function nt(t,n){t&&t.i&&($.delete(t),t.i(n))}function At(t,n,e,r){if(t&&t.o){if($.has(t))return;$.add(t),_.c.push(()=>{$.delete(t),r&&(e&&t.d(1),r())}),t.o(n)}}function Nt(t,n){const e={},r={},c={$$scope:1};let f=t.length;for(;f--;){const l=t[f],o=n[f];if(o){for(const i in l)i in o||(r[i]=1);for(const i in o)c[i]||(e[i]=o[i],c[i]=1);t[f]=o}else for(const i in l)c[i]=1}for(const l in r)l in e||(e[l]=void 0);return e}function St(t){return typeof t=="object"&&t!==null?t:{}}function vt(t){t&&t.c()}function Ct(t,n){t&&t.l(n)}function et(t,n,e,r){const{fragment:c,on_mount:f,on_destroy:l,after_update:o}=t.$$;c&&c.m(n,e),r||j(()=>{const i=f.map(T).filter(I);l?l.push(...i):p(i),t.$$.on_mount=[]}),o.forEach(j)}function it(t,n){const e=t.$$;e.fragment!==null&&(p(e.on_destroy),e.fragment&&e.fragment.d(n),e.on_destroy=e.fragment=null,e.ctx=[])}function rt(t,n){t.$$.dirty[0]===-1&&(d.push(t),D(),t.$$.dirty.fill(0)),t.$$.dirty[n/31|0]|=1<<n%31}function Mt(t,n,e,r,c,f,l,o=[-1]){const i=m;h(t);const u=t.$$={fragment:null,ctx:null,props:f,update:B,not_equal:c,bound:C(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(n.context||(i?i.$$.context:[])),callbacks:C(),dirty:o,skip_bound:!1,root:n.target||i.$$.root};l&&l(u.root);let s=!1;if(u.ctx=e?e(t,n.props||{},(a,y,...S)=>{const v=S.length?S[0]:y;return u.ctx&&c(u.ctx[a],u.ctx[a]=v)&&(!u.skip_bound&&u.bound[a]&&u.bound[a](v),s&&rt(t,a)),y}):[],u.update(),s=!0,p(u.before_update),u.fragment=r?r(u.ctx):!1,n.target){if(n.hydrate){G();const a=V(n.target);u.fragment&&u.fragment.l(a),a.forEach(R)}else u.fragment&&u.fragment.c();n.intro&&nt(t.$$.fragment),et(t,n.target,n.anchor,n.customElement),J(),F()}h(i)}class qt{$destroy(){it(this,1),this.$destroy=B}$on(n,e){const r=this.$$.callbacks[n]||(this.$$.callbacks[n]=[]);return r.push(e),()=>{const c=r.indexOf(e);c!==-1&&r.splice(c,1)}}$set(n){this.$$set&&!L(n)&&(this.$$.skip_bound=!0,this.$$set(n),this.$$.skip_bound=!1)}}export{Nt as A,St as B,it as C,H as D,Et as E,ot as F,ft as G,at as H,ut as I,Q as J,lt as K,_t as L,qt as S,V as a,mt as b,pt as c,R as d,U as e,xt as f,st as g,Z as h,Mt as i,gt as j,dt as k,ht as l,yt as m,B as n,kt as o,At as p,jt as q,nt as r,ct as s,A as t,wt as u,$t as v,bt as w,vt as x,Ct as y,et as z};
