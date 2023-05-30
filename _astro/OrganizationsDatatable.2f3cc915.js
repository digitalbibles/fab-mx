import{S as O,i as j,s as z,e as p,c as y,a as E,b as v,d as _,f as w,g,h as T,j as k,k as U,l as b,m as B,t as x,n as I,o as A}from"./index.bde346f1.js";import{G as V,d as F,c as S,e as D,a as h}from"./l10n.module.9e9beff9.js";import{F as C}from"./FilterGroup.fd4a62d7.js";function N(a){let n,s,c,i,m,r,d;return i=new C({props:{title:a[0]?.type??"Type",filters:[{title:"All",value:[],action:a[7]},{title:"FOBAI",value:[],action:a[8]},{title:"UBS",value:[],action:a[9]}],t:a[0],scope:a[3]}}),r=new V({props:{columns:a[5],data:a[4],sort:!0,search:!0,pagination:{enabled:!0,limit:a[6]??50},language:{ar:F,cn:S,en:{},es:D}[a[2]]}}),{c(){n=p("div"),s=p("div"),c=p("div"),y(i.$$.fragment),m=E(),y(r.$$.fragment),this.h()},l(e){n=v(e,"DIV",{class:!0});var l=_(n);s=v(l,"DIV",{class:!0});var o=_(s);c=v(o,"DIV",{class:!0});var f=_(c);w(i.$$.fragment,f),f.forEach(g),o.forEach(g),m=T(l),w(r.$$.fragment,l),l.forEach(g),this.h()},h(){k(c,"class","hidden md:block pl-3 w-full"),k(s,"class","min-w-fit lg:w-1/5 empty:hidden justify-center flex"),k(n,"class","flex flex-row md:pt-4 lg:pt-6")},m(e,l){U(e,n,l),b(n,s),b(s,c),B(i,c,null),b(n,m),B(r,n,null),d=!0},p(e,[l]){const o={};l&1&&(o.title=e[0]?.type??"Type"),l&18&&(o.filters=[{title:"All",value:[],action:e[7]},{title:"FOBAI",value:[],action:e[8]},{title:"UBS",value:[],action:e[9]}]),l&1&&(o.t=e[0]),l&8&&(o.scope=e[3]),i.$set(o);const f={};l&32&&(f.columns=e[5]),l&16&&(f.data=e[4]),l&4&&(f.language={ar:F,cn:S,en:{},es:D}[e[2]]),r.$set(f)},i(e){d||(x(i.$$.fragment,e),x(r.$$.fragment,e),d=!0)},o(e){I(i.$$.fragment,e),I(r.$$.fragment,e),d=!1},d(e){e&&g(n),A(i),A(r)}}}function q(a,n,s){let c,i,{t:m={}}=n,{data:r}=n,{locale:d}=n,{scope:e}=n,l;const o=()=>{s(4,i=r)},f=()=>{s(4,i=i.filter(t=>t.tp==="FOBAI"))},G=()=>{s(4,i=i.filter(t=>t.tp==="UBS"))};return a.$$set=t=>{"t"in t&&s(0,m=t.t),"data"in t&&s(1,r=t.data),"locale"in t&&s(2,d=t.locale),"scope"in t&&s(3,e=t.scope)},a.$$.update=()=>{a.$$.dirty&5&&s(5,c=[{id:"tt",name:m?.name??"Name",formatter:(t,u)=>h(`<a class="class="font-medium text-stone-900 dark:text-stone-200 w-44 truncate hover:underline block" href="/${d}/organizations/${u.cells[2].data}">
        <div class="font-medium text-gray-900 dark:text-stone-200">${u.cells[0].data}</div>
        <div class="text-gray-500 dark:text-stone-300">${u.cells[1].data??""}</div>
    </a>
    `)},{id:"tv",hidden:!0},{id:"id",name:"id",hidden:!0},{id:"ci",name:"ci",hidden:!0},{id:"cn",name:m?.country??"Country",formatter:(t,u)=>h(`
    <a class="hover:underline flex flex-row items-center" href="/${d}/countries/${u.cells[3].data}">
		<svg class="h-5 w-5 drop-shadow-md inline-block mx-2">
            <use href="/images/flags.svg#${u.cells[3].data}" xlink:href="#{row.cells[3].data}"></use>
        </svg>
        <div class="text-gray-900 dark:text-stone-200">${u.cells[4].data??""}</div>
    </a>
  `)},{id:"tp",name:"Type",hidden:!0},{id:"bc",name:"Bibles Links",formatter:t=>h(t?`<span class="text-right block">${t}</span>`:'<span class="text-gray-400 text-right block">-</span>')},{id:"rc",name:"Resources",formatter:t=>h(t?`<span class="text-right block">${t}</span>`:'<span class="text-gray-400 text-right block">-</span>')}]),a.$$.dirty&2&&s(4,i=r)},[m,r,d,e,i,c,l,o,f,G]}class J extends O{constructor(n){super(),j(this,n,q,N,z,{t:0,data:1,locale:2,scope:3})}}export{J as default};
