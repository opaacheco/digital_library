import{r as p,j as x,u as j,c as m}from"./Container-d68b77cb.js";const B=["as","disabled"];function P(n,o){if(n==null)return{};var t={},u=Object.keys(n),s,e;for(e=0;e<u.length;e++)s=u[e],!(o.indexOf(s)>=0)&&(t[s]=n[s]);return t}function $(n){return!n||n.trim()==="#"}function b({tagName:n,disabled:o,href:t,target:u,rel:s,role:e,onClick:i,tabIndex:f=0,type:c}){n||(t!=null||u!=null||s!=null?n="a":n="button");const a={tagName:n};if(n==="button")return[{type:c||"button",disabled:o},a];const l=r=>{if((o||n==="a"&&$(t))&&r.preventDefault(),o){r.stopPropagation();return}i==null||i(r)},d=r=>{r.key===" "&&(r.preventDefault(),l(r))};return n==="a"&&(t||(t="#"),o&&(t=void 0)),[{role:e??"button",disabled:void 0,tabIndex:o?void 0:f,href:t,target:n==="a"?u:void 0,"aria-disabled":o||void 0,rel:n==="a"?s:void 0,onClick:l,onKeyDown:d},a]}const k=p.forwardRef((n,o)=>{let{as:t,disabled:u}=n,s=P(n,B);const[e,{tagName:i}]=b(Object.assign({tagName:t,disabled:u},s));return x.jsx(i,Object.assign({},s,e,{ref:o}))});k.displayName="Button";const y=p.forwardRef(({as:n,bsPrefix:o,variant:t="primary",size:u,active:s=!1,disabled:e=!1,className:i,...f},c)=>{const a=j(o,"btn"),[l,{tagName:d}]=b({tagName:n,disabled:e,...f}),r=d;return x.jsx(r,{...l,...f,ref:c,disabled:e,className:m(i,a,s&&"active",t&&`${a}-${t}`,u&&`${a}-${u}`,f.href&&e&&"disabled")})});y.displayName="Button";const D=y;export{k as B,D as a,b as u};