_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[50],{H3WJ:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=_(r("iCc5")),a=_(r("V7oC")),o=_(r("FYw3")),u=_(r("mRg0")),l=r("q1tI"),i=d(l),s=d(r("17x9")),p=_(r("aVg8")),f=_(r("wzuP")),c=_(r("TSYQ"));function d(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t.default=e,t}function _(e){return e&&e.__esModule?e:{default:e}}function m(e,t,r,n){var a=r.indexOf(e)===r.length-1,o=function(e,t){if(!e.breadcrumbName)return null;var r=Object.keys(t).join("|");return e.breadcrumbName.replace(new RegExp(":("+r+")","g"),(function(e,r){return t[r]||e}))}(e,t);return a?i.createElement("span",null,o):i.createElement("a",{href:"#/"+n.join("/")},o)}var y=function(e){function t(){return(0,n.default)(this,t),(0,o.default)(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return(0,u.default)(t,e),(0,a.default)(t,[{key:"componentDidMount",value:function(){var e=this.props;(0,p.default)(!("linkRender"in e||"nameRender"in e),"`linkRender` and `nameRender` are removed, please use `itemRender` instead, see: https://u.ant.design/item-render.")}},{key:"render",value:function(){var e=void 0,t=this.props,r=t.separator,n=t.prefixCls,a=t.style,o=t.className,u=t.routes,s=t.params,d=void 0===s?{}:s,_=t.children,y=t.itemRender,h=void 0===y?m:y;if(u&&u.length>0){var v=[];e=u.map((function(e){e.path=e.path||"";var t=e.path.replace(/^\//,"");return Object.keys(d).forEach((function(e){t=t.replace(":"+e,d[e])})),t&&v.push(t),i.createElement(f.default,{separator:r,key:e.breadcrumbName||t},h(e,d,u,v))}))}else _&&(e=i.Children.map(_,(function(e,t){return e?((0,p.default)(e.type&&e.type.__ANT_BREADCRUMB_ITEM,"Breadcrumb only accepts Breadcrumb.Item as it's children"),(0,l.cloneElement)(e,{separator:r,key:t})):e})));return i.createElement("div",{className:(0,c.default)(o,n),style:a},e)}}]),t}(i.Component);t.default=y,y.defaultProps={prefixCls:"ant-breadcrumb",separator:"/"},y.propTypes={prefixCls:s.string,separator:s.node,routes:s.array,params:s.object,linkRender:s.func,nameRender:s.func},e.exports=t.default},MrPd:function(e,t,r){var n=r("hypo"),a=r("ljhN"),o=Object.prototype.hasOwnProperty;e.exports=function(e,t,r){var u=e[t];o.call(e,t)&&a(u,r)&&(void 0!==r||t in e)||n(e,t,r)}},"Y/VR":function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=o(r("H3WJ")),a=o(r("wzuP"));function o(e){return e&&e.__esModule?e:{default:e}}n.default.Item=a.default,t.default=n.default,e.exports=t.default},hypo:function(e,t,r){var n=r("O0oS");e.exports=function(e,t,r){"__proto__"==t&&n?n(e,t,{configurable:!0,enumerable:!0,value:r,writable:!0}):e[t]=r}},wzuP:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=f(r("QbLZ")),a=f(r("iCc5")),o=f(r("V7oC")),u=f(r("FYw3")),l=f(r("mRg0")),i=p(r("q1tI")),s=p(r("17x9"));function p(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t.default=e,t}function f(e){return e&&e.__esModule?e:{default:e}}var c=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var a=0;for(n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&(r[n[a]]=e[n[a]])}return r},d=function(e){function t(){return(0,a.default)(this,t),(0,u.default)(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return(0,l.default)(t,e),(0,o.default)(t,[{key:"render",value:function(){var e=this.props,t=e.prefixCls,r=e.separator,a=e.children,o=c(e,["prefixCls","separator","children"]),u=void 0;return u="href"in this.props?i.createElement("a",(0,n.default)({className:t+"-link"},o),a):i.createElement("span",(0,n.default)({className:t+"-link"},o),a),a?i.createElement("span",null,u,i.createElement("span",{className:t+"-separator"},r)):null}}]),t}(i.Component);t.default=d,d.__ANT_BREADCRUMB_ITEM=!0,d.defaultProps={prefixCls:"ant-breadcrumb",separator:"/"},d.propTypes={prefixCls:s.string,separator:s.oneOfType([s.string,s.element]),href:s.string},e.exports=t.default},zJMs:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/tour",function(){return r("kACj")}])}},[["zJMs",1,2,6,0,3,4,5,17,19,21,31,7]]]);