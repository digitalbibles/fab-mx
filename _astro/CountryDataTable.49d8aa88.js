import{S as B,i as L,s as q,e as _,c as y,a as P,b as p,d as v,f as C,g as h,h as T,j,k as z,l as S,m as E,t as F,n as w,o as N}from"./index.bde346f1.js";import{G as H,d as b,c as O,e as k,a as A}from"./l10n.module.9e9beff9.js";import{c}from"./countriesByContinent.4c764d18.js";import{F as J}from"./FilterGroup.fd4a62d7.js";function K(n){let o,s,m,u,r,l,f;return u=new J({props:{title:n[0]?.region??"Region",filters:[{title:n[0].continents?.All??"All",value:[],action:n[7]},{title:n[0].continents?.AF??"Africa",value:c.AF.join("|"),action:n[8]},{title:n[0].continents?.AS??"Asia",value:c.AS.join("|"),action:n[9]},{title:n[0].continents?.EU??"Europe",value:c.EU.join("|"),action:n[10]},{title:n[0].continents?.NA??"North America",value:c.NA.join("|"),action:n[11]},{title:n[0].continents?.SA??"South America",value:c.SA.join("|"),action:n[12]},{title:n[0].continents?.OC??"Oceania",value:c.OC.join("|"),action:n[13]}],t:n[0],scope:n[2]}}),l=new H({props:{columns:n[4],data:n[3],sort:!0,search:!0,language:{ar:b,cn:O,en:{},es:k}[n[1]]}}),{c(){o=_("div"),s=_("div"),m=_("div"),y(u.$$.fragment),r=P(),y(l.$$.fragment),this.h()},l(e){o=p(e,"DIV",{class:!0});var a=v(o);s=p(a,"DIV",{class:!0});var i=v(s);m=p(i,"DIV",{class:!0});var d=v(m);C(u.$$.fragment,d),d.forEach(h),i.forEach(h),r=T(a),C(l.$$.fragment,a),a.forEach(h),this.h()},h(){j(m,"class","hidden md:block pl-3 w-full"),j(s,"class","min-w-fit lg:w-1/5 empty:hidden justify-center flex"),j(o,"class","flex flex-row md:pt-4 lg:pt-6")},m(e,a){z(e,o,a),S(o,s),S(s,m),E(u,m,null),S(o,r),E(l,o,null),f=!0},p(e,[a]){const i={};a&1&&(i.title=e[0]?.region??"Region"),a&1&&(i.filters=[{title:e[0].continents?.All??"All",value:[],action:e[7]},{title:e[0].continents?.AF??"Africa",value:c.AF.join("|"),action:e[8]},{title:e[0].continents?.AS??"Asia",value:c.AS.join("|"),action:e[9]},{title:e[0].continents?.EU??"Europe",value:c.EU.join("|"),action:e[10]},{title:e[0].continents?.NA??"North America",value:c.NA.join("|"),action:e[11]},{title:e[0].continents?.SA??"South America",value:c.SA.join("|"),action:e[12]},{title:e[0].continents?.OC??"Oceania",value:c.OC.join("|"),action:e[13]}]),a&1&&(i.t=e[0]),a&4&&(i.scope=e[2]),u.$set(i);const d={};a&16&&(d.columns=e[4]),a&8&&(d.data=e[3]),a&2&&(d.language={ar:b,cn:O,en:{},es:k}[e[1]]),l.$set(d)},i(e){f||(F(u.$$.fragment,e),F(l.$$.fragment,e),f=!0)},o(e){w(u.$$.fragment,e),w(l.$$.fragment,e),f=!1},d(e){e&&h(o),N(u),N(l)}}}function M(n,o,s){let m,u,{t:r={}}=o,{data:l}=o,{locale:f}=o,{scope:e}=o;const a=new Intl.NumberFormat(r?.translate_numeral??f);l.sort((t,g)=>t.po-g.po).reverse();function i(t){t=="All"?s(3,u=l):s(3,u=l.filter(g=>c[t].includes(g.id)))}const d=()=>i("All"),D=()=>i("AF"),I=()=>i("AS"),U=()=>i("EU"),G=()=>i("NA"),R=()=>i("SA"),V=()=>i("OC");return n.$$set=t=>{"t"in t&&s(0,r=t.t),"data"in t&&s(6,l=t.data),"locale"in t&&s(1,f=t.locale),"scope"in t&&s(2,e=t.scope)},n.$$.update=()=>{n.$$.dirty&1&&s(0,r),n.$$.dirty&3&&s(4,m=[{id:"tt",name:r.country??"Country",formatter:(t,g)=>A(`<a class="hover:underline text-stone-900 dark:text-stone-200 w-44 truncate" href="/${f}/countries/${g.cells[1].data}">
					<svg class="h-5 w-5 drop-shadow-md inline-block mr-1"><use href="/images/flags.svg#${g.cells[1].data}" xlink:href="#AD"></use></svg>
					${g.cells[0].data}</a>`)},{id:"id",name:"id",hidden:!0},{id:"po",name:r.population??"Population",formatter:t=>A(t?a.format(t):"-")},{id:"lc",name:r.languages??"Languages",formatter:t=>A(t?a.format(t):"-")},{id:"pr",name:r.refugees??"Refugees",formatter:t=>A(t?a.format(t):"-")},{id:"pl",name:r.literacy??"Literacy",formatter:t=>A(new Intl.NumberFormat(r?.translate_numeral??f,{style:"percent"}).format(t/100))},{id:"rn",name:r.region??"Region"}]),n.$$.dirty&64&&s(3,u=l)},[r,f,e,u,m,i,l,d,D,I,U,G,R,V]}class Z extends B{constructor(o){super(),L(this,o,M,K,q,{t:0,data:6,locale:1,scope:2})}}export{Z as default};
