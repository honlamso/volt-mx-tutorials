_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[44],{"1w02":function(n,t){n.exports=function(n,t,e){for(var a=-1,r=n.length,c=t.length,o={};++a<r;){var s=a<c?t[a]:void 0;e(o,n[a],s)}return o}},"6EMX":function(n,t,e){"use strict";e.d(t,"b",(function(){return _})),e.d(t,"a",(function(){return k}));var a=e("o0o1"),r=e.n(a),c=e("HaE+"),o=e("vDqi"),s=e.n(o),u=e("mOvS"),i=e.n(u),l=e("mwIZ"),f=e.n(l),p=e("QkVN"),d=e.n(p),b=e("JBE3"),h=e.n(b),j=e("VJLA"),m=e.n(j),v=e("Z0cm"),x=e.n(v),O=e("8SHQ"),g=e("k7Sn"),w=i()().publicRuntimeConfig,N=function(n,t,e){if("categoryTours"===e&&x()(n)&&x()(t))return n.map((function(n){var e=t.find((function(t){return t.nid===n.nid}));return d()({},n,e)}))},y=function(){var n=Object(c.a)(r.a.mark((function n(t){var e,a,o;return r.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e=function(){var n=Object(c.a)(r.a.mark((function n(t){var e;return r.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Promise.all(g.c.map((function(n){return s.a.get("".concat(O.e,"/contents/").concat(t,"/tours_").concat(n,".json")).catch((function(){return{}}))})));case 2:return e=n.sent.map((function(n){return n.data})),n.abrupt("return",m()(g.c,e));case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),n.next=3,Promise.all(t.map((function(n){return s.a.get("".concat(O.e,"/contents/").concat(n,"/tours.json"))})));case 3:return a=n.sent.map((function(n){return n.data})),n.next=6,Promise.all(t.map((function(n){return e(n)})));case 6:return o=n.sent.map((function(n){return{localization:n}})),n.abrupt("return",h()([],a,o,N));case 8:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),_=function(n,t){return h()({},n,f()(n,["localization",t||g.a.language],{}),N)},k=function(){var n=Object(c.a)(r.a.mark((function n(){var t,e,a,c=arguments;return r.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t=!(c.length>0&&void 0!==c[0])||c[0],e=w.hikesData,n.next=4,y(e);case 4:if(a=n.sent,!t){n.next=7;break}return n.abrupt("return",a.map((function(n){return _(n)})));case 7:return n.abrupt("return",a);case 8:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}()},JBE3:function(n,t,e){var a=e("+Qka"),r=e("LsHQ")((function(n,t,e,r){a(n,t,e,r)}));n.exports=r},MrPd:function(n,t,e){var a=e("hypo"),r=e("ljhN"),c=Object.prototype.hasOwnProperty;n.exports=function(n,t,e){var o=n[t];c.call(n,t)&&r(o,e)&&(void 0!==e||t in n)||a(n,t,e)}},VJLA:function(n,t,e){var a=e("MrPd"),r=e("1w02");n.exports=function(n,t){return r(n||[],t||[],a)}},"e+nY":function(n,t,e){"use strict";e.r(t);var a=e("nKUr"),r=e("o0o1"),c=e.n(r),o=e("HaE+"),s=e("q1tI"),u=e("20a2"),i=e("Djov"),l=e("9xET"),f=e.n(l),p=e("mOvS"),d=e.n(p),b=e("whbN"),h=e("4CzQ"),j=e.n(h),m=e("k7Sn"),v=d()().publicRuntimeConfig,x=function(n){var t=n.title,e=n.desc,r=n.tours;return Object(a.jsxs)("div",{children:[Object(a.jsx)(f.a,{className:j.a.domainTitleWrapper,children:Object(a.jsxs)("div",{children:["dbx"===t.toLowerCase()?Object(a.jsx)("img",{src:"".concat(v.asset,"/static/dist/images/dbx_logo.png"),className:j.a.title}):Object(a.jsx)("h1",{className:j.a.title,children:m.a.t(t).toUpperCase()}),Object(a.jsx)("div",{className:j.a.desc,dangerouslySetInnerHTML:{__html:m.a.t(e)}})]})}),Object(a.jsx)(f.a,{type:"flex",className:j.a.assetsContainer,children:r.map((function(n){return Object(a.jsx)(b.a,{tour:n,dbx:"dbx"===t.toLowerCase()},n.nid)}))})]})};x.defaultProps={title:"",desc:""};var O=x,g=e("PGnZ"),w=e.n(g),N=e("6EMX");t.default=function(){var n=Object(s.useState)([]),t=n[0],e=n[1],r=Object(u.useRouter)(),l=function(){var n=Object(o.a)(c.a.mark((function n(){var t;return c.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Object(N.a)();case 2:t=n.sent,e(t);case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}();return Object(s.useEffect)((function(){return l(),function(){}}),[m.a.language,r.asPath]),Object(s.useEffect)((function(){var n=r.asPath.split(/\?/),t=new URLSearchParams(n[1]).get("lang");t?t!==m.a.language&&r.push(r.asPath):r.push({pathname:n[0]||r.pathname,query:{lang:"en-US"}})}),[]),Object(a.jsxs)("div",{className:w.a.hikeBody,children:[Object(a.jsx)(i.a,{}),Object(a.jsx)("div",{className:w.a.hikeContainer,children:t.map((function(n){return null!==n.categoryTours?Object(a.jsx)(O,{title:n.categoryName,desc:n.categoryDescription,alias:n.categoryAlias||n.categoryName,tours:n.categoryTours},n.categoryName):null}))})]})}},hypo:function(n,t,e){var a=e("O0oS");n.exports=function(n,t,e){"__proto__"==t&&a?a(n,t,{configurable:!0,enumerable:!0,value:e,writable:!0}):n[t]=e}},whbN:function(n,t,e){"use strict";(function(n){var a=e("nKUr"),r=(e("q1tI"),e("ZPTe")),c=e.n(r),o=e("YFqc"),s=e.n(o),u=e("JviU"),i=e.n(u),l=e("7Qib"),f=e("8SHQ"),p=e("k7Sn"),d="production"===(n&&n.env,"production")?"".concat(f.b,"/"):"",b=function(n){var t=n.tour,e=n.dbx,r=(n.search,n.isComposer);return Object(a.jsx)(c.a,{sm:r?8:6,xs:24,children:Object(a.jsx)("div",{className:i.a.tour,children:Object(a.jsx)(s.a,{href:{pathname:"".concat(d).concat(t.alias),query:{lang:p.a.language}},children:Object(a.jsxs)("div",{className:i.a.info,children:[Object(a.jsx)("h2",{className:"".concat(i.a.title," ").concat(e?i.a.dbxColor:""," "),children:Object(l.f)(t.title,50)}),Object(a.jsx)("p",{className:i.a.desc,children:t.description}),Object(a.jsx)("p",{className:i.a.meta,children:"".concat(p.a.t("step",{count:t.cards})," / ").concat(t.time)})]})})})})};b.defaultProps={tour:{},dbx:!1,search:"",isComposer:!1},t.a=b}).call(this,e("8oxB"))},yAYO:function(n,t,e){(window.__NEXT_P=window.__NEXT_P||[]).push(["/hikes",function(){return e("e+nY")}])}},[["yAYO",1,2,6,9,0,3,4,5,8,17,19,21,7]]]);