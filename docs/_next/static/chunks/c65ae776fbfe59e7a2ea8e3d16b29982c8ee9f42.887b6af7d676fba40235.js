(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[4],{"1ccW":function(e,t){function n(){return e.exports=n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},n.apply(this,arguments)}e.exports=n},"2qu3":function(e,t,n){"use strict";var r=n("lSNA"),i=n("lwsE"),o=n("W8MJ");function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){var n;if("undefined"===typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(n=function(e,t){if(!e)return;if("string"===typeof e)return l(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return l(e,t)}(e))||t&&e&&"number"===typeof e.length){n&&(e=n);var r=0,i=function(){};return{s:i,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,a=!0,u=!1;return{s:function(){n=e[Symbol.iterator]()},n:function(){var e=n.next();return a=e.done,e},e:function(e){u=!0,o=e},f:function(){try{a||null==n.return||n.return()}finally{if(u)throw o}}}}function l(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}t.__esModule=!0,t.default=void 0;var s,d=(s=n("q1tI"))&&s.__esModule?s:{default:s},f=n("8L3h"),p=n("jwwS");var b=[],h=[],m=!1;function y(e){var t=e(),n={loading:!0,loaded:null,error:null};return n.promise=t.then((function(e){return n.loading=!1,n.loaded=e,e})).catch((function(e){throw n.loading=!1,n.error=e,e})),n}function v(e){var t={loading:!1,loaded:{},error:null},n=[];try{Object.keys(e).forEach((function(r){var i=y(e[r]);i.loading?t.loading=!0:(t.loaded[r]=i.loaded,t.error=i.error),n.push(i.promise),i.promise.then((function(e){t.loaded[r]=e})).catch((function(e){t.error=e}))}))}catch(r){t.error=r}return t.promise=Promise.all(n).then((function(e){return t.loading=!1,e})).catch((function(e){throw t.loading=!1,e})),t}function g(e,t){return d.default.createElement(function(e){return e&&e.__esModule?e.default:e}(e),t)}function w(e,t){var n=Object.assign({loader:null,loading:null,delay:200,timeout:null,render:g,webpack:null,modules:null},t),r=null;function i(){if(!r){var t=new _(e,n);r={getCurrentValue:t.getCurrentValue.bind(t),subscribe:t.subscribe.bind(t),retry:t.retry.bind(t),promise:t.promise.bind(t)}}return r.promise()}if(!m&&"function"===typeof n.webpack){var o=n.webpack();h.push((function(e){var t,n=c(o);try{for(n.s();!(t=n.n()).done;){var r=t.value;if(-1!==e.indexOf(r))return i()}}catch(a){n.e(a)}finally{n.f()}}))}var a=function(e,t){i();var o=d.default.useContext(p.LoadableContext),a=(0,f.useSubscription)(r);return d.default.useImperativeHandle(t,(function(){return{retry:r.retry}}),[]),o&&Array.isArray(n.modules)&&n.modules.forEach((function(e){o(e)})),d.default.useMemo((function(){return a.loading||a.error?d.default.createElement(n.loading,{isLoading:a.loading,pastDelay:a.pastDelay,timedOut:a.timedOut,error:a.error,retry:r.retry}):a.loaded?n.render(a.loaded,e):null}),[e,a])};return a.preload=function(){return i()},a.displayName="LoadableComponent",d.default.forwardRef(a)}var _=function(){function e(t,n){i(this,e),this._loadFn=t,this._opts=n,this._callbacks=new Set,this._delay=null,this._timeout=null,this.retry()}return o(e,[{key:"promise",value:function(){return this._res.promise}},{key:"retry",value:function(){var e=this;this._clearTimeouts(),this._res=this._loadFn(this._opts.loader),this._state={pastDelay:!1,timedOut:!1};var t=this._res,n=this._opts;t.loading&&("number"===typeof n.delay&&(0===n.delay?this._state.pastDelay=!0:this._delay=setTimeout((function(){e._update({pastDelay:!0})}),n.delay)),"number"===typeof n.timeout&&(this._timeout=setTimeout((function(){e._update({timedOut:!0})}),n.timeout))),this._res.promise.then((function(){e._update({}),e._clearTimeouts()})).catch((function(t){e._update({}),e._clearTimeouts()})),this._update({})}},{key:"_update",value:function(e){this._state=u(u({},this._state),{},{error:this._res.error,loaded:this._res.loaded,loading:this._res.loading},e),this._callbacks.forEach((function(e){return e()}))}},{key:"_clearTimeouts",value:function(){clearTimeout(this._delay),clearTimeout(this._timeout)}},{key:"getCurrentValue",value:function(){return this._state}},{key:"subscribe",value:function(e){var t=this;return this._callbacks.add(e),function(){t._callbacks.delete(e)}}}]),e}();function j(e){return w(y,e)}function O(e,t){for(var n=[];e.length;){var r=e.pop();n.push(r(t))}return Promise.all(n).then((function(){if(e.length)return O(e,t)}))}j.Map=function(e){if("function"!==typeof e.render)throw new Error("LoadableMap requires a `render(loaded, props)` function");return w(v,e)},j.preloadAll=function(){return new Promise((function(e,t){O(b).then(e,t)}))},j.preloadReady=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return new Promise((function(t){var n=function(){return m=!0,t()};O(h,e).then(n,n)}))},window.__NEXT_PRELOADREADY=j.preloadReady;var x=j;t.default=x},"98FW":function(e,t){e.exports=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}},Aiso:function(e,t,n){e.exports=n("dQHF")},CafY:function(e,t,n){"use strict";var r=n("nKUr"),i=n("Vvt1"),o=n.n(i),a=n("Tred"),u=n.n(a),c=n("jdeN"),l=o()((function(){return Promise.resolve().then(n.t.bind(null,"g4pe",7))}),{loadableGenerated:{webpack:function(){return["g4pe"]},modules:["next/head"]}}),s=o()((function(){return Promise.all([n.e(0),n.e(19)]).then(n.bind(null,"zYID"))}),{loadableGenerated:{webpack:function(){return["zYID"]},modules:["./Navbar.js"]}}),d=o()((function(){return Promise.all([n.e(6),n.e(0),n.e(7),n.e(24)]).then(n.bind(null,"eyrL"))}),{loadableGenerated:{webpack:function(){return["eyrL"]},modules:["./Whatsapp.js"]}}),f=o()((function(){return Promise.all([n.e(6),n.e(10),n.e(0),n.e(7),n.e(20)]).then(n.bind(null,"1ra8"))}),{loadableGenerated:{webpack:function(){return["1ra8"]},modules:["./Footpage.js"]}});t.a=function(e){return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(c.a,{title:" Restaurante Sport Center | ".concat(e.pageName),description:e.description,canonical:"",images:e.images}),Object(r.jsxs)(l,{children:[Object(r.jsx)("link",{rel:"preconnect",href:"https://fonts.gstatic.com"}),Object(r.jsx)("link",{href:"https://fonts.googleapis.com/css2?family=Dancing+Script:wght@500&family=Titillium+Web:wght@200&display=swap",rel:"stylesheet"})]},"roboto"),Object(r.jsxs)("div",{className:u.a.layout,children:[Object(r.jsx)(d,{}),e.hero,Object(r.jsx)(s,{pageName:e.pageName}),Object(r.jsx)("div",{className:u.a.children,children:e.children}),Object(r.jsx)(f,{})]})]})}},Tred:function(e,t,n){e.exports={layout:"layout_layout__2P3NG"}},UWYU:function(e,t,n){"use strict";t.__esModule=!0,t.imageConfigDefault=t.VALID_LOADERS=void 0;t.VALID_LOADERS=["default","imgix","cloudinary","akamai"];t.imageConfigDefault={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",domains:[]}},Vvt1:function(e,t,n){e.exports=n("a6RD")},a6RD:function(e,t,n){"use strict";var r=n("lSNA");function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}t.__esModule=!0,t.noSSR=c,t.default=function(e,t){var n=a.default,r={loading:function(e){e.error,e.isLoading;return e.pastDelay,null}};e instanceof Promise?r.loader=function(){return e}:"function"===typeof e?r.loader=e:"object"===typeof e&&(r=o(o({},r),e));if(r=o(o({},r),t),"object"===typeof e&&!(e instanceof Promise)&&(e.render&&(r.render=function(t,n){return e.render(n,t)}),e.modules)){n=a.default.Map;var i={},u=e.modules();Object.keys(u).forEach((function(e){var t=u[e];"function"!==typeof t.then?i[e]=t:i[e]=function(){return t.then((function(e){return e.default||e}))}})),r.loader=i}r.loadableGenerated&&delete(r=o(o({},r),r.loadableGenerated)).loadableGenerated;if("boolean"===typeof r.ssr){if(!r.ssr)return delete r.ssr,c(n,r);delete r.ssr}return n(r)};u(n("q1tI"));var a=u(n("2qu3"));function u(e){return e&&e.__esModule?e:{default:e}}function c(e,t){return delete t.webpack,delete t.modules,e(t)}},dEHY:function(e,t,n){"use strict";t.__esModule=!0,t.toBase64=function(e){return window.btoa(e)}},dQHF:function(e,t,n){"use strict";var r=n("J4zp"),i=n("RIqP"),o=n("AroE");t.__esModule=!0,t.default=function(e){var t=e.src,n=e.sizes,o=e.unoptimized,u=void 0!==o&&o,d=e.priority,p=void 0!==d&&d,b=e.loading,m=e.className,y=e.quality,v=e.width,j=e.height,O=e.objectFit,x=e.objectPosition,A=e.loader,k=void 0===A?_:A,S=(0,a.default)(e,["src","sizes","unoptimized","priority","loading","className","quality","width","height","objectFit","objectPosition","loader"]),z=n?"responsive":"intrinsic",E=!1;"unsized"in S?(E=Boolean(S.unsized),delete S.unsized):"layout"in S&&(S.layout&&(z=S.layout),delete S.layout);0;var P=!p&&("lazy"===b||"undefined"===typeof b);t&&t.startsWith("data:")&&(u=!0,P=!1);var D,I,M,N=(0,f.useIntersection)({rootMargin:"200px",disabled:!P}),q=r(N,2),C=q[0],R=q[1],L=!P||R,W=w(v),T=w(j),F=w(y),G={visibility:L?"inherit":"hidden",position:"absolute",top:0,left:0,bottom:0,right:0,boxSizing:"border-box",padding:0,border:"none",margin:"auto",display:"block",width:0,height:0,minWidth:"100%",maxWidth:"100%",minHeight:"100%",maxHeight:"100%",objectFit:O,objectPosition:x};if("undefined"!==typeof W&&"undefined"!==typeof T&&"fill"!==z){var V=T/W,U=isNaN(V)?"100%":"".concat(100*V,"%");"responsive"===z?(D={display:"block",overflow:"hidden",position:"relative",boxSizing:"border-box",margin:0},I={display:"block",boxSizing:"border-box",paddingTop:U}):"intrinsic"===z?(D={display:"inline-block",maxWidth:"100%",overflow:"hidden",position:"relative",boxSizing:"border-box",margin:0},I={boxSizing:"border-box",display:"block",maxWidth:"100%"},M='<svg width="'.concat(W,'" height="').concat(T,'" xmlns="http://www.w3.org/2000/svg" version="1.1"/>')):"fixed"===z&&(D={overflow:"hidden",boxSizing:"border-box",display:"inline-block",position:"relative",width:W,height:T})}else"undefined"===typeof W&&"undefined"===typeof T&&"fill"===z&&(D={display:"block",overflow:"hidden",position:"absolute",top:0,left:0,bottom:0,right:0,boxSizing:"border-box",margin:0});var H={src:"data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",srcSet:void 0,sizes:void 0};L&&(H=function(e){var t=e.src,n=e.unoptimized,r=e.layout,o=e.width,a=e.quality,u=e.sizes,c=e.loader;if(n)return{src:t,srcSet:void 0,sizes:void 0};var l=function(e,t,n){if(n&&("fill"===t||"responsive"===t)){var r=i(n.matchAll(/(^|\s)(1?\d?\d)vw/g)).map((function(e){return parseInt(e[2])}));if(r.length){var o=.01*Math.min.apply(Math,i(r));return{widths:g.filter((function(e){return e>=h[0]*o})),kind:"w"}}return{widths:g,kind:"w"}}if("number"!==typeof e||"fill"===t||"responsive"===t)return{widths:h,kind:"w"};return{widths:i(new Set([e,2*e].map((function(e){return g.find((function(t){return t>=e}))||g[g.length-1]})))),kind:"x"}}(o,r,u),s=l.widths,d=l.kind,f=s.length-1;return{sizes:u||"w"!==d?u:"100vw",srcSet:s.map((function(e,n){return"".concat(c({src:t,quality:a,width:e})," ").concat("w"===d?e:n+1).concat(d)})).join(", "),src:c({src:t,quality:a,width:s[f]})}}({src:t,unoptimized:u,layout:z,width:W,quality:F,sizes:n,loader:k}));E&&(D=void 0,I=void 0,G=void 0);return c.default.createElement("div",{style:D},I?c.default.createElement("div",{style:I},M?c.default.createElement("img",{style:{maxWidth:"100%",display:"block",margin:0,border:"none",padding:0},alt:"","aria-hidden":!0,role:"presentation",src:"data:image/svg+xml;base64,".concat((0,s.toBase64)(M))}):null):null,c.default.createElement("img",Object.assign({},S,H,{decoding:"async",className:m,ref:C,style:G})),p?c.default.createElement(l.default,null,c.default.createElement("link",{key:"__nimg-"+H.src+H.srcSet+H.sizes,rel:"preload",as:"image",href:H.srcSet?void 0:H.src,imagesrcset:H.srcSet,imagesizes:H.sizes})):null)};var a=o(n("98FW")),u=o(n("1ccW")),c=o(n("q1tI")),l=o(n("8Kt/")),s=n("dEHY"),d=n("UWYU"),f=n("vNVm");var p=new Map([["imgix",function(e){var t=e.root,n=e.src,r=e.width,i=e.quality,o=["auto=format","fit=max","w="+r],a="";i&&o.push("q="+i);o.length&&(a="?"+o.join("&"));return"".concat(t).concat(j(n)).concat(a)}],["cloudinary",function(e){var t=e.root,n=e.src,r=e.width,i=e.quality,o=["f_auto","c_limit","w_"+r,"q_"+(i||"auto")].join(",")+"/";return"".concat(t).concat(o).concat(j(n))}],["akamai",function(e){var t=e.root,n=e.src,r=e.width;return"".concat(t).concat(j(n),"?imwidth=").concat(r)}],["default",function(e){var t=e.root,n=e.src,r=e.width,i=e.quality;0;return"".concat(t,"?url=").concat(encodeURIComponent(n),"&w=").concat(r,"&q=").concat(i||75)}]]),b={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/beta/",loader:"imgix"}||d.imageConfigDefault,h=b.deviceSizes,m=b.imageSizes,y=b.loader,v=b.path,g=(b.domains,[].concat(i(h),i(m)));function w(e){return"number"===typeof e?e:"string"===typeof e?parseInt(e,10):void 0}function _(e){var t=p.get(y);if(t)return t((0,u.default)({root:v},e));throw new Error('Unknown "loader" found in "next.config.js". Expected: '.concat(d.VALID_LOADERS.join(", "),". Received: ").concat(y))}function j(e){return"/"===e[0]?e.slice(1):e}h.sort((function(e,t){return e-t})),g.sort((function(e,t){return e-t}))},jdeN:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var r=n("nKUr"),i=n("9ixD");function o(e){var t="https://www.restaurantesportcenter.com.br/".concat(e.canonical);return Object(r.jsx)(i.b,{title:e.title,description:e.description,canonical:t,openGraph:{url:t,title:e.title,description:e.description,images:e.images}})}},jwwS:function(e,t,n){"use strict";var r;t.__esModule=!0,t.LoadableContext=void 0;var i=((r=n("q1tI"))&&r.__esModule?r:{default:r}).default.createContext(null);t.LoadableContext=i},vNVm:function(e,t,n){"use strict";var r=n("J4zp");t.__esModule=!0,t.useIntersection=function(e){var t=e.rootMargin,n=e.disabled||!a,c=(0,i.useRef)(),l=(0,i.useState)(!1),s=r(l,2),d=s[0],f=s[1],p=(0,i.useCallback)((function(e){c.current&&(c.current(),c.current=void 0),n||d||e&&e.tagName&&(c.current=function(e,t,n){var r=function(e){var t=e.rootMargin||"",n=u.get(t);if(n)return n;var r=new Map,i=new IntersectionObserver((function(e){e.forEach((function(e){var t=r.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)}))}),e);return u.set(t,n={id:t,observer:i,elements:r}),n}(n),i=r.id,o=r.observer,a=r.elements;return a.set(e,t),o.observe(e),function(){a.delete(e),o.unobserve(e),0===a.size&&(o.disconnect(),u.delete(i))}}(e,(function(e){return e&&f(e)}),{rootMargin:t}))}),[n,t,d]);return(0,i.useEffect)((function(){if(!a&&!d){var e=(0,o.requestIdleCallback)((function(){return f(!0)}));return function(){return(0,o.cancelIdleCallback)(e)}}}),[d]),[p,d]};var i=n("q1tI"),o=n("0G5g"),a="undefined"!==typeof IntersectionObserver;var u=new Map}}]);