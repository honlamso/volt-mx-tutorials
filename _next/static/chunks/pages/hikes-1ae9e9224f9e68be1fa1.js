_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[44],{"1w02":function(t,n){t.exports=function(t,n,e){for(var a=-1,r=t.length,c=n.length,o={};++a<r;){var s=a<c?n[a]:void 0;e(o,t[a],s)}return o}},"2Dw/":function(t){t.exports=JSON.parse('{"g":"qa","e":"GTM-KKDR5XT","h":"https://community.qa-kony.com","a":"https://community.qa-kony.com","c":"","b":"https://basecamp.kony.com/","f":{"key":"","secret":""},"d":false}')},"6EMX":function(t,n,e){"use strict";e.d(n,"b",(function(){return k})),e.d(n,"a",(function(){return _}));var a=e("o0o1"),r=e.n(a),c=e("HaE+"),o=e("vDqi"),s=e.n(o),u=e("mOvS"),i=e.n(u),l=e("mwIZ"),p=e.n(l),f=e("QkVN"),d=e.n(f),m=e("JBE3"),h=e.n(m),b=e("VJLA"),j=e.n(b),x=e("Z0cm"),v=e.n(x),O=e("8SHQ"),g=e("k7Sn"),w=i()().publicRuntimeConfig,y=function(t,n,e){if("categoryTours"===e&&v()(t)&&v()(n))return t.map((function(t){var e=n.find((function(n){return n.nid===t.nid}));return d()({},t,e)}))},N=function(){var t=Object(c.a)(r.a.mark((function t(n){var e,a,o;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=function(){var t=Object(c.a)(r.a.mark((function t(n){var e;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Promise.all(g.c.map((function(t){return s.a.get("".concat(O.e,"/contents/").concat(n,"/tours_").concat(t,".json")).catch((function(){return{}}))})));case 2:return e=t.sent.map((function(t){return t.data})),t.abrupt("return",j()(g.c,e));case 4:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}(),t.next=3,Promise.all(n.map((function(t){return s.a.get("".concat(O.e,"/contents/").concat(t,"/tours.json"))})));case 3:return a=t.sent.map((function(t){return t.data})),t.next=6,Promise.all(n.map((function(t){return e(t)})));case 6:return o=t.sent.map((function(t){return{localization:t}})),t.abrupt("return",h()([],a,o,y));case 8:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}(),k=function(t,n){return h()({},t,p()(t,["localization",n||g.a.language],{}),y)},_=function(){var t=Object(c.a)(r.a.mark((function t(){var n,e,a,c=arguments;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=!(c.length>0&&void 0!==c[0])||c[0],e=w.hikesData,t.next=4,N(e);case 4:if(a=t.sent,!n){t.next=7;break}return t.abrupt("return",a.map((function(t){return k(t)})));case 7:return t.abrupt("return",a);case 8:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}()},JBE3:function(t,n,e){var a=e("+Qka"),r=e("LsHQ")((function(t,n,e,r){a(t,n,e,r)}));t.exports=r},MrPd:function(t,n,e){var a=e("hypo"),r=e("ljhN"),c=Object.prototype.hasOwnProperty;t.exports=function(t,n,e){var o=t[n];c.call(t,n)&&r(o,e)&&(void 0!==e||n in t)||a(t,n,e)}},VJLA:function(t,n,e){var a=e("MrPd"),r=e("1w02");t.exports=function(t,n){return r(t||[],n||[],a)}},"e+nY":function(t,n,e){"use strict";e.r(n);var a=e("nKUr"),r=e("o0o1"),c=e.n(r),o=e("HaE+"),s=e("q1tI"),u=e("20a2"),i=e("Djov"),l=e("9xET"),p=e.n(l),f=e("mOvS"),d=e.n(f),m=e("whbN"),h=e("4CzQ"),b=e.n(h),j=e("k7Sn"),x=d()().publicRuntimeConfig,v=function(t){var n=t.title,e=t.desc,r=t.tours;return Object(a.jsxs)("div",{children:[Object(a.jsx)(p.a,{className:b.a.domainTitleWrapper,children:Object(a.jsxs)("div",{children:["dbx"===n.toLowerCase()?Object(a.jsx)("img",{src:"".concat(x.asset,"/static/dist/images/dbx_logo.png"),className:b.a.title}):Object(a.jsx)("h1",{className:b.a.title,children:j.a.t(n).toUpperCase()}),Object(a.jsx)("div",{className:b.a.desc,dangerouslySetInnerHTML:{__html:j.a.t(e)}})]})}),Object(a.jsx)(p.a,{type:"flex",className:b.a.assetsContainer,children:r.map((function(t){return Object(a.jsx)(m.a,{tour:t,dbx:"dbx"===n.toLowerCase()},t.nid)}))})]})};v.defaultProps={title:"",desc:""};var O=v,g=e("PGnZ"),w=e.n(g),y=e("6EMX"),N=e("2Dw/");n.default=function(){var t=Object(s.useState)([]),n=t[0],e=t[1],r=Object(u.useRouter)(),l=function(){var t=Object(o.a)(c.a.mark((function t(){var n;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(y.a)();case 2:n=t.sent,e(n);case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return Object(s.useEffect)((function(){return l(),function(){}}),[j.a.language,r.asPath]),Object(s.useEffect)((function(){var t=r.asPath.split(/\?/),n=new URLSearchParams(t[1]).get("lang");n?n!==j.a.language&&r.push(r.asPath):r.push({pathname:t[0]||r.pathname,query:{lang:"en-US"}})}),[]),Object(a.jsxs)("div",{className:w.a.hikeBody,children:[Object(a.jsx)(i.a,{enableLocales:N.d}),Object(a.jsx)("div",{className:w.a.hikeContainer,children:n.map((function(t){return null!==t.categoryTours?Object(a.jsx)(O,{title:t.categoryName,desc:t.categoryDescription,alias:t.categoryAlias||t.categoryName,tours:t.categoryTours},t.categoryName):null}))})]})}},hypo:function(t,n,e){var a=e("O0oS");t.exports=function(t,n,e){"__proto__"==n&&a?a(t,n,{configurable:!0,enumerable:!0,value:e,writable:!0}):t[n]=e}},whbN:function(t,n,e){"use strict";(function(t){var a=e("nKUr"),r=(e("q1tI"),e("ZPTe")),c=e.n(r),o=e("YFqc"),s=e.n(o),u=e("JviU"),i=e.n(u),l=e("7Qib"),p=e("8SHQ"),f=e("k7Sn"),d="production"===(t&&t.env,"production")?"".concat(p.b,"/"):"",m=function(t){var n=t.tour,e=t.dbx,r=(t.search,t.isComposer);return Object(a.jsx)(c.a,{sm:r?8:6,xs:24,children:Object(a.jsx)("div",{className:i.a.tour,children:Object(a.jsx)(s.a,{href:{pathname:"".concat(d).concat(n.alias),query:{lang:f.a.language}},children:Object(a.jsxs)("div",{className:i.a.info,children:[Object(a.jsx)("h2",{className:"".concat(i.a.title," ").concat(e?i.a.dbxColor:""," "),children:Object(l.f)(n.title,50)}),Object(a.jsx)("p",{className:i.a.desc,children:n.description}),Object(a.jsx)("p",{className:i.a.meta,children:"".concat(f.a.t("step",{count:n.cards})," / ").concat(n.time)})]})})})})};m.defaultProps={tour:{},dbx:!1,search:"",isComposer:!1},n.a=m}).call(this,e("8oxB"))},yAYO:function(t,n,e){(window.__NEXT_P=window.__NEXT_P||[]).push(["/hikes",function(){return e("e+nY")}])}},[["yAYO",1,2,6,9,0,3,4,5,8,17,19,21,7]]]);