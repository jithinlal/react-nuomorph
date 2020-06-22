"use strict";function _interopDefault(e){return e&&"object"==typeof e&&"default"in e?e.default:e}var convert=_interopDefault(require("color-convert")),React=require("react"),React__default=_interopDefault(React);const innerSC=e=>{const t=convert.hex.cmyk(e.slice(1)),n=[...t],r=t[3];return n.splice(3,1,r<20?0:r-20),`#${convert.cmyk.hex(n)}`},outerSC=e=>{const t=convert.hex.cmyk(e.slice(1)),n=[...t],r=t[3];return n.splice(3,1,r>80?100:r+20),`#${convert.cmyk.hex(n)}`},innerCC=e=>{const t=convert.hex.cmyk(e.slice(1)),n=[...t],r=t[3];return n.splice(3,1,r<10?0:r-10),`#${convert.cmyk.hex(n)}`},outerCC=e=>{const t=convert.hex.cmyk(e.slice(1)),n=[...t],r=t[3];return n.splice(3,1,r>90?100:r+10),`#${convert.cmyk.hex(n)}`},innerSP=(e,t,n,r)=>{switch(e){case"lt":return`-${t}px -${t}px ${n}px ${r}`;case"lb":return`-${t}px ${t}px ${n}px ${r}`;case"rt":return`${t}px -${t}px ${n}px ${r}`;case"rb":return`${t}px ${t}px ${n}px ${r}`;default:return""}},outerSP=(e,t,n,r)=>{switch(e){case"lt":return`-${t}px -${t}px ${n}px ${r}`;case"lb":return`-${t}px ${t}px ${n}px ${r}`;case"rt":return`${t}px -${t}px ${n}px ${r}`;case"rb":return`${t}px ${t}px ${n}px ${r}`;default:return""}},backgroundType=(e,t,n,r)=>{switch(e){case"flat":return t;case"concave":return`linear-gradient(145deg, ${n}, ${r})`;case"convex":return`linear-gradient(145deg, ${r}, ${n})`;default:return""}};function Container({children:e,type:t="flat",borderRadius:n=50,blurStrength:r=50,backgroundColor:i="#429d7d",width:o=500,height:c=500,distance:u=25,innerElementAlignItems:a="",innerElementJustifyContent:l="",innerShadowPosition:s="lb",outerShadowPosition:d="rt",innerElementPadding:p=0}){if(!/^#[0-9A-F]{6}$/i.test(i))return null;let $,x=innerSC(i),h=outerSC(i),C=innerSP(s,u,r,x),f=outerSP(d,u,r,h),g=innerCC(i),b=outerCC(i);return"pressed"===t?(C="inset "+C,f="inset "+f):$=backgroundType(t,i,g,b),React__default.createElement("div",{style:{display:"flex",alignItems:a,justifyContent:l,width:o,height:c,padding:p,background:$,borderRadius:`${n}px`,boxShadow:`${C}, ${f}`}},e)}function Button({children:e,type:t="convex",borderRadius:n=50,blurStrength:r=50,backgroundColor:i="#429d7d",width:o=500,height:c=500,distance:u=25,innerElementAlignItems:a="",innerElementJustifyContent:l="",innerShadowPosition:s="lb",outerShadowPosition:d="rt",innerElementPadding:p=0,onClickFunc:$=(()=>{})}){const[x,h]=React.useState(""),[C,f]=React.useState(!1);let g=innerSC(i),b=outerSC(i),y=innerSP(s,u,r,g),S=outerSP(d,u,r,b),m=innerCC(i),v=outerCC(i);return React.useEffect(()=>{h(backgroundType(t,i,m,v))},[t,i,m,v]),/^#[0-9A-F]{6}$/i.test(i)?React__default.createElement("div",{onClick:()=>{h(backgroundType(C?"convex":"concave",i,m,v)),f(e=>!e),$()},style:{cursor:"pointer",display:"flex",alignItems:a,justifyContent:l,width:o,height:c,padding:p,background:x,borderRadius:`${n}px`,boxShadow:`${y}, ${S}`}},e):null}var index={ContainerMorph:Container,ButtonMorph:Button};module.exports=index;