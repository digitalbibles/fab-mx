import{S as Ne,i as Ae,s as Je,e as k,b as E,j as r,P as ce,k as O,p as we,g as f,Q as Z,a as C,d,R as U,h as M,y as Oe,l as n,t as ae,n as de,K as Be,r as Ze,v as ne,A as ve,w as S,x as G,B as ie,z as F,c as Ue,f as Re,m as Le,o as Ke,M as Se,u as Ge}from"./index.bde346f1.js";const ze="/_astro/41_MAT.06e95a28.jpg",qe="/_astro/42_MRK.fe8bc074.jpg",Fe="/_astro/43_LUK.9b0b131c.jpg",Qe="/_astro/44_JHN.02bb7dfb.jpg",We="/_astro/45_ACT.0a76ca5d.jpg",Xe="/_astro/46_ROM.316f9eee.jpg",Ye="/_astro/47_1CO.b3d7d810.jpg",$e="/_astro/48_2CO.4997875c.jpg",et="/_astro/49_GAL.b3999e6b.jpg",tt="/_astro/50_EPH.d0d887c4.jpg",lt="/_astro/51_PHP.d865856e.jpg",st="/_astro/52_1TH.343b2be0.jpg",ot="/_astro/53_2TH.32d58f75.jpg",rt="/_astro/54_COL.83b5e6e3.jpg",at="/_astro/55_1TI.7c2cf714.jpg",ct="/_astro/56_2TI.1eba5aa0.jpg",nt="/_astro/57_TIT.a49f9825.jpg",it="/_astro/58_PHM.f0405bb3.jpg",ft="/_astro/59_HEB.3ebdbafe.jpg",ht="/_astro/60_JAS.4cd4576b.jpg",ut="/_astro/61_1PE.fc5a980d.jpg",_t="/_astro/62_2PE.7340da95.jpg",dt="/_astro/63_1JN.2f893bb6.jpg",vt="/_astro/64_2JN.dd452b2f.jpg",pt="/_astro/65_3JN.1db6b7dc.jpg",bt="/_astro/66_JUD.447d591c.jpg",mt="/_astro/67_REV.8c647efb.jpg";function gt(a){let e,s;return{c(){e=k("img"),this.h()},l(t){e=E(t,"IMG",{class:!0,alt:!0,src:!0}),this.h()},h(){r(e,"class","w-20 h-20 object-cover rounded object-top"),r(e,"alt",a[0]),ce(e.src,s=a[1][a[0]])||r(e,"src",s)},m(t,l){O(t,e,l)},p(t,[l]){l&1&&r(e,"alt",t[0]),l&1&&!ce(e.src,s=t[1][t[0]])&&r(e,"src",s)},i:we,o:we,d(t){t&&f(e)}}}function kt(a,e,s){const t={MAT:ze,MRK:qe,LUK:Fe,JHN:Qe,ACT:We,ROM:Xe,"1CO":Ye,"2CO":$e,GAL:et,EPH:tt,PHP:lt,"1TH":st,"2TH":ot,COL:rt,"1TI":at,"2TI":ct,TIT:nt,PHM:it,HEB:ft,JAS:ht,"1PE":ut,"2PE":_t,"1JN":dt,"2JN":vt,"3JN":pt,JUD:bt,REV:mt};let{book_id:l=""}=e;return a.$$set=c=>{"book_id"in c&&s(0,l=c.book_id)},[l,t]}class Et extends Ne{constructor(e){super(),Ae(this,e,kt,gt,Je,{book_id:0})}}function je(a,e,s){const t=a.slice();return t[16]=e[s],t}function Te(a,e,s){const t=a.slice();return t[19]=e[s],t}function Ve(a,e,s){const t=a.slice();return t[22]=e[s],t}function He(a){let e,s=a[0].data,t=[];for(let l=0;l<s.length;l+=1)t[l]=Ie(Ve(a,s,l));return{c(){for(let l=0;l<t.length;l+=1)t[l].c();e=ne()},l(l){for(let c=0;c<t.length;c+=1)t[c].l(l);e=ne()},m(l,c){for(let o=0;o<t.length;o+=1)t[o].m(l,c);O(l,e,c)},p(l,c){if(c&65){s=l[0].data;let o;for(o=0;o<s.length;o+=1){const h=Ve(l,s,o);t[o]?t[o].p(h,c):(t[o]=Ie(h),t[o].c(),t[o].m(e.parentNode,e))}for(;o<t.length;o+=1)t[o].d(1);t.length=s.length}},d(l){ve(t,l),l&&f(e)}}}function Ie(a){let e,s,t,l,c=a[22].name+"",o,h,p,b=(a[22].vname??"")+"",w,v,u,_;function i(){return a[11](a[22])}return{c(){e=k("button"),s=k("div"),t=k("div"),l=k("h2"),o=S(c),h=C(),p=k("h3"),w=S(b),v=C(),this.h()},l(m){e=E(m,"BUTTON",{class:!0});var T=d(e);s=E(T,"DIV",{class:!0});var V=d(s);t=E(V,"DIV",{class:!0});var N=d(t);l=E(N,"H2",{class:!0});var g=d(l);o=G(g,c),g.forEach(f),h=M(N),p=E(N,"H3",{class:!0});var J=d(p);w=G(J,b),J.forEach(f),N.forEach(f),V.forEach(f),v=M(T),T.forEach(f),this.h()},h(){r(l,"class","text-sm"),r(p,"class","text-stone-500 text-sm"),r(t,"class","flex flex-col pl-4"),r(s,"class","flex ml-4"),r(e,"class","bg-stone-100 px-8 py-6 flex w-full items-center border-b border-stone-300")},m(m,T){O(m,e,T),n(e,s),n(s,t),n(t,l),n(l,o),n(t,h),n(t,p),n(p,w),n(e,v),u||(_=ie(e,"click",i),u=!0)},p(m,T){a=m,T&1&&c!==(c=a[22].name+"")&&F(o,c),T&1&&b!==(b=(a[22].vname??"")+"")&&F(w,b)},d(m){m&&f(e),u=!1,_()}}}function Pe(a){let e,s,t,l,c,o,h,p,b,w=a[2].data,v=[];for(let u=0;u<w.length;u+=1)v[u]=De(Te(a,w,u));return{c(){e=k("button"),s=k("div"),t=Z("svg"),l=Z("path"),c=S(`
						Back`),o=C();for(let u=0;u<v.length;u+=1)v[u].c();h=ne(),this.h()},l(u){e=E(u,"BUTTON",{class:!0});var _=d(e);s=E(_,"DIV",{class:!0});var i=d(s);t=U(i,"svg",{class:!0,"x-description":!0,xmlns:!0,viewBox:!0,fill:!0,"aria-hidden":!0});var m=d(t);l=U(m,"path",{"fill-rule":!0,d:!0,"clip-rule":!0}),d(l).forEach(f),m.forEach(f),c=G(i,`
						Back`),i.forEach(f),_.forEach(f),o=M(u);for(let T=0;T<v.length;T+=1)v[T].l(u);h=ne(),this.h()},h(){r(l,"fill-rule","evenodd"),r(l,"d","M7.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l2.293 2.293a1 1 0 010 1.414z"),r(l,"clip-rule","evenodd"),r(t,"class","mr-2 h-6 w-6 text-stone-400"),r(t,"x-description","Heroicon name: solid/arrow-narrow-left"),r(t,"xmlns","http://www.w3.org/2000/svg"),r(t,"viewBox","0 0 20 20"),r(t,"fill","currentColor"),r(t,"aria-hidden","true"),r(s,"class","flex flex-row ml-4"),r(e,"class","bg-stone-100 px-8 py-6 flex w-full items-center border-b border-stone-300")},m(u,_){O(u,e,_),n(e,s),n(s,t),n(t,l),n(s,c),O(u,o,_);for(let i=0;i<v.length;i+=1)v[i].m(u,_);O(u,h,_),p||(b=ie(e,"click",a[12]),p=!0)},p(u,_){if(_&132){w=u[2].data;let i;for(i=0;i<w.length;i+=1){const m=Te(u,w,i);v[i]?v[i].p(m,_):(v[i]=De(m),v[i].c(),v[i].m(h.parentNode,h))}for(;i<v.length;i+=1)v[i].d(1);v.length=w.length}},d(u){u&&f(e),u&&f(o),ve(v,u),u&&f(h),p=!1,b()}}}function De(a){let e,s,t=(a[19].book_id??"")+"",l,c,o,h=a[19].name+"",p,b,w,v;function u(){return a[13](a[19])}return{c(){e=k("button"),s=k("h3"),l=S(t),c=C(),o=k("h2"),p=S(h),b=C(),this.h()},l(_){e=E(_,"BUTTON",{class:!0});var i=d(e);s=E(i,"H3",{class:!0});var m=d(s);l=G(m,t),m.forEach(f),c=M(i),o=E(i,"H2",{class:!0});var T=d(o);p=G(T,h),T.forEach(f),b=M(i),i.forEach(f),this.h()},h(){r(s,"class","text-stone-500 text-sm mr-4"),r(o,"class","text-sm"),r(e,"class","bg-stone-100 px-8 py-6 flex w-full items-center border-b border-stone-300")},m(_,i){O(_,e,i),n(e,s),n(s,l),n(e,c),n(e,o),n(o,p),n(e,b),w||(v=ie(e,"click",u),w=!0)},p(_,i){a=_,i&4&&t!==(t=(a[19].book_id??"")+"")&&F(l,t),i&4&&h!==(h=a[19].name+"")&&F(p,h)},d(_){_&&f(e),w=!1,v()}}}function xe(a){let e,s,t;return{c(){e=k("audio"),s=k("track"),this.h()},l(l){e=E(l,"AUDIO",{src:!0});var c=d(e);s=E(c,"TRACK",{kind:!0}),c.forEach(f),this.h()},h(){r(s,"kind","captions"),ce(e.src,t=a[4])||r(e,"src",t),e.controls=!0},m(l,c){O(l,e,c),n(e,s),a[14](e)},p(l,c){c&16&&!ce(e.src,t=l[4])&&r(e,"src",t)},d(l){l&&f(e),a[14](null)}}}function ye(a){let e,s,t,l,c,o=a[3].name+"",h,p,b,w=a[3].book_group+"",v,u;return s=new Et({props:{book_id:a[3].book_id}}),{c(){e=k("div"),Ue(s.$$.fragment),t=C(),l=k("div"),c=k("h2"),h=S(o),p=C(),b=k("h3"),v=S(w),this.h()},l(_){e=E(_,"DIV",{class:!0});var i=d(e);Re(s.$$.fragment,i),t=M(i),l=E(i,"DIV",{class:!0});var m=d(l);c=E(m,"H2",{class:!0});var T=d(c);h=G(T,o),T.forEach(f),p=M(m),b=E(m,"H3",{class:!0});var V=d(b);v=G(V,w),V.forEach(f),m.forEach(f),i.forEach(f),this.h()},h(){r(c,"class","text-sm"),r(b,"class","text-stone-500 text-sm"),r(l,"class","flex flex-col pl-4"),r(e,"class","flex ml-4")},m(_,i){O(_,e,i),Le(s,e,null),n(e,t),n(e,l),n(l,c),n(c,h),n(l,p),n(l,b),n(b,v),u=!0},p(_,i){const m={};i&8&&(m.book_id=_[3].book_id),s.$set(m),(!u||i&8)&&o!==(o=_[3].name+"")&&F(h,o),(!u||i&8)&&w!==(w=_[3].book_group+"")&&F(v,w)},i(_){u||(ae(s.$$.fragment,_),u=!0)},o(_){de(s.$$.fragment,_),u=!1},d(_){_&&f(e),Ke(s)}}}function Ce(a){let e,s=a[3].chapters,t=[];for(let l=0;l<s.length;l+=1)t[l]=Me(je(a,s,l));return{c(){e=k("div");for(let l=0;l<t.length;l+=1)t[l].c();this.h()},l(l){e=E(l,"DIV",{class:!0});var c=d(e);for(let o=0;o<t.length;o+=1)t[o].l(c);c.forEach(f),this.h()},h(){r(e,"class","flex flex-row flex-wrap")},m(l,c){O(l,e,c);for(let o=0;o<t.length;o+=1)t[o].m(e,null)},p(l,c){if(c&266){s=l[3].chapters;let o;for(o=0;o<s.length;o+=1){const h=je(l,s,o);t[o]?t[o].p(h,c):(t[o]=Me(h),t[o].c(),t[o].m(e,null))}for(;o<t.length;o+=1)t[o].d(1);t.length=s.length}},d(l){l&&f(e),ve(t,l)}}}function Me(a){let e,s=a[16]+"",t,l,c,o;function h(){return a[15](a[16])}return{c(){e=k("button"),t=S(s),l=C(),this.h()},l(p){e=E(p,"BUTTON",{class:!0});var b=d(e);t=G(b,s),l=M(b),b.forEach(f),this.h()},h(){r(e,"class","w-12 h-12")},m(p,b){O(p,e,b),n(e,t),n(e,l),c||(o=ie(e,"click",h),c=!0)},p(p,b){a=p,b&8&&s!==(s=a[16]+"")&&F(t,s)},d(p){p&&f(e),c=!1,o()}}}function wt(a){let e,s,t,l,c,o,h,p,b,w,v,u,_,i,m,T,V,N,g,J,I,A,z,L,R,W,fe,K,Q,he,q,X,P=a[0]&&!a[2].visible&&He(a),D=a[2]&&a[2].visible&&Pe(a),x=a[4]&&xe(a),H=a[3]&&ye(a),y=a[3]&&Ce(a);return{c(){e=k("div"),s=k("div"),t=k("div"),l=k("div"),c=k("div"),o=Z("svg"),h=Z("g"),p=Z("path"),b=Z("defs"),w=Z("clipPath"),v=Z("path"),u=C(),_=k("div"),i=k("div"),m=k("input"),T=C(),V=Z("svg"),N=Z("circle"),g=Z("path"),J=C(),I=k("div"),P&&P.c(),A=C(),D&&D.c(),z=C(),L=k("div"),R=k("div"),x&&x.c(),W=C(),H&&H.c(),fe=C(),K=k("div"),Q=k("div"),he=C(),q=k("div"),y&&y.c(),this.h()},l(j){e=E(j,"DIV",{class:!0,style:!0});var B=d(e);s=E(B,"DIV",{class:!0});var Y=d(s);t=E(Y,"DIV",{class:!0});var $=d(t);l=E($,"DIV",{class:!0});var ee=d(l);c=E(ee,"DIV",{class:!0});var pe=d(c);o=U(pe,"svg",{class:!0,fill:!0,xmlns:!0,viewBox:!0});var ue=d(o);h=U(ue,"g",{"clip-path":!0,fill:!0});var be=d(h);p=U(be,"path",{d:!0}),d(p).forEach(f),be.forEach(f),b=U(ue,"defs",{});var me=d(b);w=U(me,"clipPath",{id:!0});var ge=d(w);v=U(ge,"path",{fill:!0,transform:!0,d:!0}),d(v).forEach(f),ge.forEach(f),me.forEach(f),ue.forEach(f),pe.forEach(f),u=M(ee),_=E(ee,"DIV",{class:!0});var ke=d(_);i=E(ke,"DIV",{class:!0});var te=d(i);m=E(te,"INPUT",{placeholder:!0,type:!0,class:!0}),T=M(te),V=U(te,"svg",{stroke:!0,class:!0,"stroke-width":!0,fill:!0,"stroke-linecap":!0,"stroke-linejoin":!0,viewBox:!0});var _e=d(V);N=U(_e,"circle",{cx:!0,cy:!0,r:!0}),d(N).forEach(f),g=U(_e,"path",{d:!0}),d(g).forEach(f),_e.forEach(f),te.forEach(f),ke.forEach(f),ee.forEach(f),J=M($),I=E($,"DIV",{class:!0});var le=d(I);P&&P.l(le),A=M(le),D&&D.l(le),le.forEach(f),$.forEach(f),z=M(Y),L=E(Y,"DIV",{class:!0});var se=d(L);R=E(se,"DIV",{class:!0});var oe=d(R);x&&x.l(oe),W=M(oe),H&&H.l(oe),oe.forEach(f),fe=M(se),K=E(se,"DIV",{class:!0});var re=d(K);Q=E(re,"DIV",{class:!0}),d(Q).forEach(f),he=M(re),q=E(re,"DIV",{class:!0});var Ee=d(q);y&&y.l(Ee),Ee.forEach(f),re.forEach(f),se.forEach(f),Y.forEach(f),B.forEach(f),this.h()},h(){r(p,"d","M92 33H79v46h13V33Zm43 22 5-4a12 12 0 0 0 1-11l-2-3c-1-2-2-3-4-3l-4-1h-26v46h22l6-1 6-2a10 10 0 0 0 4-9c1-3 0-6-2-8-1-2-4-3-6-4Zm-18-12h9l2 1a3 3 0 0 1 1 3l-1 3-2 1h-9v-8Zm13 24-3 1h-10v-8h10a3 3 0 0 1 3 1l1 3a4 4 0 0 1-1 3Zm36-34h-12v46h33V68h-21V33Zm43 27h17V50h-17v-6h19V33h-32v46h33V68h-20v-8Zm58-5 5-4 2-7a13 13 0 0 0-3-7l-3-3-4-1h-22v46h21l5-1a12 12 0 0 0 7-7l1-4-2-8-7-4Zm4 14-2 3a8 8 0 0 1-6 3h-17V37h19l2 2 2 3a10 10 0 0 1 0 6 8 8 0 0 1-4 5l-3 1h-6l-5 3h13l3 1 2 2a9 9 0 0 1 2 6v3Zm45-10 3-3 3-4a16 16 0 0 0-1-10c0-2-1-3-3-5l-4-3-5-1h-20v46h5V37h14l4 1 3 2a11 11 0 0 1 3 7 12 12 0 0 1-3 7l-2 3-4 1h-4l2 4 9 13 2 4h5l-11-18 4-2Zm35-26-20 46h5l16-41 17 41h4l-19-46h-3Zm38 0h-4v46h4V33Zm82 23a6 6 0 0 0-10 2l-6-1a9 9 0 0 0-3-7l4-5a7 7 0 1 0-1-1l-5 5c-2-1-4-2-6-1V33h-4v38l-31-38h-3v46h4V41l30 38h4V66l5-1 3 5a5 5 0 1 0 2-1l-3-5c2-1 3-3 3-5l7 1 1 3a6 6 0 1 0 9-7ZM60 55l5-4a12 12 0 0 0-4-17l-4-1H30v52a3 3 0 0 0 5 3l14-9h3l7-1 5-2a10 10 0 0 0 5-9l-2-8-7-4ZM43 43h9l2 1a3 3 0 0 1 1 3l-1 3-3 1h-8v-8Zm12 24-3 1h-9v-8h10a3 3 0 0 1 2 1l1 3a4 4 0 0 1-1 3Z"),r(h,"clip-path","url(#a)"),r(h,"fill","#fff"),r(v,"fill","#fff"),r(v,"transform","translate(30 32)"),r(v,"d","M0 0h442v56H0z"),r(w,"id","a"),r(o,"class","h-10 block mx-auto object-cover object-top"),r(o,"fill","none"),r(o,"xmlns","http://www.w3.org/2000/svg"),r(o,"viewBox","0 0 501 120"),r(c,"class","items-center hidden"),r(m,"placeholder","Search"),r(m,"type","text"),r(m,"class","w-full border rounded border-stone-400 h-full focus:outline-none pl-4 pr-8 text-stone-700 text-sm text-stone-500"),r(N,"cx","11"),r(N,"cy","11"),r(N,"r","8"),r(g,"d","M21 21l-4.35-4.35"),r(V,"stroke","currentColor"),r(V,"class","w-4 h-4 absolute right-0 top-0 mt-3 mr-2 text-stone-500"),r(V,"stroke-width","2"),r(V,"fill","none"),r(V,"stroke-linecap","round"),r(V,"stroke-linejoin","round"),r(V,"viewBox","0 0 24 24"),r(i,"class","relative ml-auto flex-1 pl-8 sm:block hidden"),r(_,"class","mt-6 flex"),r(l,"class","p-8 shadow-md relative bg-stone-600 text-white"),r(I,"class","overflow-y-scroll flex-grow"),r(t,"class","lg:w-1/2 text-stone-800 flex flex-col"),r(R,"class","p-8 bg-stone-700"),r(Q,"class","flex-shrink-0 text-sm sticky top-0"),r(q,"class","flex-1 pl-10"),r(K,"class","p-8 flex flex-1 items-start overflow-auto"),r(L,"class","lg:w-1/2 bg-stone-600 text-white flex flex-col"),r(s,"class","flex w-full rounded-lg h-full lg:overflow-hidden overflow-auto flex-row shadow-2xl"),r(e,"class","container mx-auto py-12 px-8 relative"),Oe(e,"height","calc(100vh - 8rem)")},m(j,B){O(j,e,B),n(e,s),n(s,t),n(t,l),n(l,c),n(c,o),n(o,h),n(h,p),n(o,b),n(b,w),n(w,v),n(l,u),n(l,_),n(_,i),n(i,m),n(i,T),n(i,V),n(V,N),n(V,g),n(t,J),n(t,I),P&&P.m(I,null),n(I,A),D&&D.m(I,null),n(s,z),n(s,L),n(L,R),x&&x.m(R,null),n(R,W),H&&H.m(R,null),n(L,fe),n(L,K),n(K,Q),n(K,he),n(K,q),y&&y.m(q,null),X=!0},p(j,[B]){j[0]&&!j[2].visible?P?P.p(j,B):(P=He(j),P.c(),P.m(I,A)):P&&(P.d(1),P=null),j[2]&&j[2].visible?D?D.p(j,B):(D=Pe(j),D.c(),D.m(I,null)):D&&(D.d(1),D=null),j[4]?x?x.p(j,B):(x=xe(j),x.c(),x.m(R,W)):x&&(x.d(1),x=null),j[3]?H?(H.p(j,B),B&8&&ae(H,1)):(H=ye(j),H.c(),ae(H,1),H.m(R,null)):H&&(Se(),de(H,1,1,()=>{H=null}),Be()),j[3]?y?y.p(j,B):(y=Ce(j),y.c(),y.m(q,null)):y&&(y.d(1),y=null)},i(j){X||(ae(H),X=!0)},o(j){de(H),X=!1},d(j){j&&f(e),P&&P.d(),D&&D.d(),x&&x.d(),H&&H.d(),y&&y.d()}}}function jt(a,e,s){let{key:t}=e,{country_id:l}=e,c,o,h={visible:!1,data:[]},p,b,w;Ze(async()=>{let g=`https://4.dbt.io/api/bibles?v=4&key=${t}&media=audio`;l&&(g+="&country="+l),s(0,c=await fetch(g).then(function(z){return z.json()}));let J=c.meta.pagination.last_page,I=1,A;for(;I>=J;)I++,A=await fetch(g+"page="+I).then(function(z){return z.json()}),c.data.concat(A.data)});async function v(g,J){for(const A of J)if(A.codec==="mp3"){s(1,o=A.id);break}let I=await fetch(`https://4.dbt.io/api/bibles/${g}/book?v=4&key=${t}`).then(function(A){return A.json()});s(2,h.data=I.data,h),s(2,h.visible=!0,h)}function u(g){s(3,p=null),s(3,p=g)}async function _(g,J,I){s(4,b=await fetch(`https://4.dbt.io/api/bibles/filesets/${g}/${J}/${I}?v=4&key=${t}`).then(function(A){return A.json()})),s(4,b=b.data[0].path)}const i=g=>v(g.abbr,g.filesets["dbp-prod"]),m=()=>s(2,h.visible=!1,h),T=g=>u(g);function V(g){Ge[g?"unshift":"push"](()=>{w=g,s(5,w)})}const N=g=>_(o,p.book_id,g);return a.$$set=g=>{"key"in g&&s(9,t=g.key),"country_id"in g&&s(10,l=g.country_id)},[c,o,h,p,b,w,v,u,_,t,l,i,m,T,V,N]}class Vt extends Ne{constructor(e){super(),Ae(this,e,jt,wt,Je,{key:9,country_id:10})}}export{Vt as default};
