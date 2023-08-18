import{r as c,u as m,j as d,c as l}from"./Container-d68b77cb.js";const u=c.createContext(null);u.displayName="CardHeaderContext";const h=u;var $=/-(.)/g;function B(e){return e.replace($,function(r,a){return a.toUpperCase()})}const I=e=>e[0].toUpperCase()+B(e).slice(1);function i(e,{displayName:r=I(e),Component:a,defaultProps:n}={}){const s=c.forwardRef(({className:t,bsPrefix:o,as:C=a||"div",...f},p)=>{const x={...n,...f},H=m(o,e);return d.jsx(C,{ref:p,className:l(t,H),...x})});return s.displayName=r,s}const y=e=>c.forwardRef((r,a)=>d.jsx("div",{...r,ref:a,className:l(r.className,e)})),v=c.forwardRef(({bsPrefix:e,className:r,variant:a,as:n="img",...s},t)=>{const o=m(e,"card-img");return d.jsx(n,{ref:t,className:l(a?`${o}-${a}`:o,r),...s})});v.displayName="CardImg";const P=v,N=c.forwardRef(({bsPrefix:e,className:r,as:a="div",...n},s)=>{const t=m(e,"card-header"),o=c.useMemo(()=>({cardHeaderBsPrefix:t}),[t]);return d.jsx(h.Provider,{value:o,children:d.jsx(a,{ref:s,...n,className:l(r,t)})})});N.displayName="CardHeader";const R=N,b=y("h5"),w=y("h6"),g=i("card-body"),S=i("card-title",{Component:b}),T=i("card-subtitle",{Component:w}),k=i("card-link",{Component:"a"}),O=i("card-text",{Component:"p"}),A=i("card-footer"),D=i("card-img-overlay"),j=c.forwardRef(({bsPrefix:e,className:r,bg:a,text:n,border:s,body:t=!1,children:o,as:C="div",...f},p)=>{const x=m(e,"card");return d.jsx(C,{ref:p,...f,className:l(r,x,a&&`bg-${a}`,n&&`text-${n}`,s&&`border-${s}`),children:t?d.jsx(g,{children:o}):o})});j.displayName="Card";const F=Object.assign(j,{Img:P,Title:S,Subtitle:T,Body:g,Link:k,Text:O,Header:R,Footer:A,ImgOverlay:D});export{h as C,F as a,i as c,y as d};