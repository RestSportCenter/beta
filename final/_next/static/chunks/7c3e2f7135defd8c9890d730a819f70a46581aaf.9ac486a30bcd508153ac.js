(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[3],{"2qu3":function(e,t,r){"use strict";var n=r("lSNA"),o=r("lwsE"),a=r("W8MJ");function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function u(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){var r;if("undefined"===typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(r=function(e,t){if(!e)return;if("string"===typeof e)return s(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return s(e,t)}(e))||t&&e&&"number"===typeof e.length){r&&(e=r);var n=0,o=function(){};return{s:o,n:function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}},e:function(e){throw e},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,i=!0,u=!1;return{s:function(){r=e[Symbol.iterator]()},n:function(){var e=r.next();return i=e.done,e},e:function(e){u=!0,a=e},f:function(){try{i||null==r.return||r.return()}finally{if(u)throw a}}}}function s(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}t.__esModule=!0,t.default=void 0;var c,d=(c=r("q1tI"))&&c.__esModule?c:{default:c},f=r("8L3h"),p=r("jwwS");var b=[],h=[],m=!1;function y(e){var t=e(),r={loading:!0,loaded:null,error:null};return r.promise=t.then((function(e){return r.loading=!1,r.loaded=e,e})).catch((function(e){throw r.loading=!1,r.error=e,e})),r}function _(e){var t={loading:!1,loaded:{},error:null},r=[];try{Object.keys(e).forEach((function(n){var o=y(e[n]);o.loading?t.loading=!0:(t.loaded[n]=o.loaded,t.error=o.error),r.push(o.promise),o.promise.then((function(e){t.loaded[n]=e})).catch((function(e){t.error=e}))}))}catch(n){t.error=n}return t.promise=Promise.all(r).then((function(e){return t.loading=!1,e})).catch((function(e){throw t.loading=!1,e})),t}function j(e,t){return d.default.createElement(function(e){return e&&e.__esModule?e.default:e}(e),t)}function v(e,t){var r=Object.assign({loader:null,loading:null,delay:200,timeout:null,render:j,webpack:null,modules:null},t),n=null;function o(){if(!n){var t=new g(e,r);n={getCurrentValue:t.getCurrentValue.bind(t),subscribe:t.subscribe.bind(t),retry:t.retry.bind(t),promise:t.promise.bind(t)}}return n.promise()}if(!m&&"function"===typeof r.webpack){var a=r.webpack();h.push((function(e){var t,r=l(a);try{for(r.s();!(t=r.n()).done;){var n=t.value;if(-1!==e.indexOf(n))return o()}}catch(i){r.e(i)}finally{r.f()}}))}var i=function(e,t){o();var a=d.default.useContext(p.LoadableContext),i=(0,f.useSubscription)(n);return d.default.useImperativeHandle(t,(function(){return{retry:n.retry}}),[]),a&&Array.isArray(r.modules)&&r.modules.forEach((function(e){a(e)})),d.default.useMemo((function(){return i.loading||i.error?d.default.createElement(r.loading,{isLoading:i.loading,pastDelay:i.pastDelay,timedOut:i.timedOut,error:i.error,retry:n.retry}):i.loaded?r.render(i.loaded,e):null}),[e,i])};return i.preload=function(){return o()},i.displayName="LoadableComponent",d.default.forwardRef(i)}var g=function(){function e(t,r){o(this,e),this._loadFn=t,this._opts=r,this._callbacks=new Set,this._delay=null,this._timeout=null,this.retry()}return a(e,[{key:"promise",value:function(){return this._res.promise}},{key:"retry",value:function(){var e=this;this._clearTimeouts(),this._res=this._loadFn(this._opts.loader),this._state={pastDelay:!1,timedOut:!1};var t=this._res,r=this._opts;t.loading&&("number"===typeof r.delay&&(0===r.delay?this._state.pastDelay=!0:this._delay=setTimeout((function(){e._update({pastDelay:!0})}),r.delay)),"number"===typeof r.timeout&&(this._timeout=setTimeout((function(){e._update({timedOut:!0})}),r.timeout))),this._res.promise.then((function(){e._update({}),e._clearTimeouts()})).catch((function(t){e._update({}),e._clearTimeouts()})),this._update({})}},{key:"_update",value:function(e){this._state=u(u({},this._state),{},{error:this._res.error,loaded:this._res.loaded,loading:this._res.loading},e),this._callbacks.forEach((function(e){return e()}))}},{key:"_clearTimeouts",value:function(){clearTimeout(this._delay),clearTimeout(this._timeout)}},{key:"getCurrentValue",value:function(){return this._state}},{key:"subscribe",value:function(e){var t=this;return this._callbacks.add(e),function(){t._callbacks.delete(e)}}}]),e}();function O(e){return v(y,e)}function w(e,t){for(var r=[];e.length;){var n=e.pop();r.push(n(t))}return Promise.all(r).then((function(){if(e.length)return w(e,t)}))}O.Map=function(e){if("function"!==typeof e.render)throw new Error("LoadableMap requires a `render(loaded, props)` function");return v(_,e)},O.preloadAll=function(){return new Promise((function(e,t){w(b).then(e,t)}))},O.preloadReady=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return new Promise((function(t){var r=function(){return m=!0,t()};w(h,e).then(r,r)}))},window.__NEXT_PRELOADREADY=O.preloadReady;var x=O;t.default=x},BoB8:function(e,t,r){e.exports={hero:"Hero_hero__9F_fp",pButton:"Hero_pButton__3p-wk",pulse:"Hero_pulse__3x7XB",text:"Hero_text__3BKIB",saibaMais:"Hero_saibaMais__1AEey",saibaMaisIcon:"Hero_saibaMaisIcon__1zDwm",heroFade:"Hero_heroFade__wOLvt",logo:"Hero_logo__1-Vgh",fader:"Hero_fader__3QkH7",fader__slide:"Hero_fader__slide__1BVua",fadeOut:"Hero_fadeOut__G8c9a",fadeIn:"Hero_fadeIn__2EWZw"}},CafY:function(e,t,r){"use strict";var n=r("nKUr"),o=r("Vvt1"),a=r.n(o),i=r("Tred"),u=r.n(i),l=r("BoB8"),s=r.n(l);function c(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}var d=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}var t,r,n;return t=e,(r=[{key:"getImages",value:function(){var e=[];return[1,2,3].forEach((function(t){e.push({src:"/hero/".concat(t,"r-min.jpg")})})),e}}])&&c(t.prototype,r),n&&c(t,n),e}(),f=a()((function(){return r.e(17).then(r.t.bind(null,"QSGA",7)),r.e(19).then(r.t.bind(null,"COvE",7)),r.e(18).then(r.t.bind(null,"Rs88",7)),Promise.all([r.e(1),r.e(5)]).then(r.t.bind(null,"sbjA",7)).then((function(e){return e.Button}))}),{loadableGenerated:{webpack:function(){return["QSGA","COvE","Rs88","sbjA"]},modules:["primeicons/primeicons.css","primereact/resources/themes/saga-blue/theme.css","primereact/resources/primereact.min.css","primereact/button"]}}),p=(new d).getImages(),b=function(){return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsxs)("div",{className:s.a.hero,children:[Object(n.jsx)("img",{className:s.a.logo,src:"/logor-min.png"}),Object(n.jsxs)("h1",{children:["Restaurante",Object(n.jsx)("br",{})," Sport Center"]}),Object(n.jsxs)("h4",{children:["Refei\xe7\xf5es Coletivas ",Object(n.jsx)("br",{})," Refei\xe7\xf5es Transportadas"]}),Object(n.jsxs)("div",{children:[Object(n.jsx)(f,{className:"".concat(s.a.pButton," p-button-outlined p-button-rounded "),label:"Restaurantes para Condom\xednios"}),Object(n.jsx)(f,{className:"".concat(s.a.pButton," p-button-outlined p-button-rounded "),label:"Cozinha Industrial para Empresas"})]})]}),Object(n.jsx)("div",{id:"fader",className:s.a.fader,children:Object(n.jsx)("img",{className:s.a.heroFade,src:p[1].src})}),Object(n.jsx)("div",{className:s.a.saibaMais,children:Object(n.jsx)(f,{onClick:function(){window.scrollBy({left:0,top:window.innerHeight,behavior:"smooth"})},icon:"pi pi-angle-double-down",className:"".concat(s.a.saibaMaisIcon," ")})})]})},h=a()((function(){return Promise.all([r.e(0),r.e(13)]).then(r.t.bind(null,"g4pe",7))}),{loadableGenerated:{webpack:function(){return["g4pe"]},modules:["next/head"]}}),m=a()((function(){return Promise.all([r.e(0),r.e(16)]).then(r.bind(null,"zYID"))}),{loadableGenerated:{webpack:function(){return["zYID"]},modules:["./Navbar.js"]}}),y=a()((function(){return Promise.all([r.e(1),r.e(4),r.e(15)]).then(r.bind(null,"eyrL"))}),{loadableGenerated:{webpack:function(){return["eyrL"]},modules:["./Whatsapp.js"]}}),_=a()((function(){return Promise.all([r.e(1),r.e(4),r.e(6),r.e(0),r.e(14)]).then(r.bind(null,"1ra8"))}),{loadableGenerated:{webpack:function(){return["1ra8"]},modules:["./Footpage.js"]}});t.a=function(e){var t=e.showHero?Object(n.jsx)(b,{}):"";return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsxs)(h,{children:[Object(n.jsx)("link",{href:"https://fonts.gstatic.com"}),Object(n.jsx)("link",{href:"https://fonts.googleapis.com/css2?family=Dancing+Script:wght@500&family=Titillium+Web:wght@200&display=swap",rel:"stylesheet"})]},"roboto"),Object(n.jsxs)("div",{className:u.a.layout,children:[Object(n.jsx)(y,{}),t,Object(n.jsx)(m,{pageName:e.pageName}),Object(n.jsx)("div",{className:u.a.children,children:e.children}),Object(n.jsx)(_,{})]})]})}},Tred:function(e,t,r){e.exports={layout:"layout_layout__2P3NG"}},Vvt1:function(e,t,r){e.exports=r("a6RD")},a6RD:function(e,t,r){"use strict";var n=r("lSNA");function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}t.__esModule=!0,t.noSSR=l,t.default=function(e,t){var r=i.default,n={loading:function(e){e.error,e.isLoading;return e.pastDelay,null}};e instanceof Promise?n.loader=function(){return e}:"function"===typeof e?n.loader=e:"object"===typeof e&&(n=a(a({},n),e));if(n=a(a({},n),t),"object"===typeof e&&!(e instanceof Promise)&&(e.render&&(n.render=function(t,r){return e.render(r,t)}),e.modules)){r=i.default.Map;var o={},u=e.modules();Object.keys(u).forEach((function(e){var t=u[e];"function"!==typeof t.then?o[e]=t:o[e]=function(){return t.then((function(e){return e.default||e}))}})),n.loader=o}n.loadableGenerated&&delete(n=a(a({},n),n.loadableGenerated)).loadableGenerated;if("boolean"===typeof n.ssr){if(!n.ssr)return delete n.ssr,l(r,n);delete n.ssr}return r(n)};u(r("q1tI"));var i=u(r("2qu3"));function u(e){return e&&e.__esModule?e:{default:e}}function l(e,t){return delete t.webpack,delete t.modules,e(t)}},jwwS:function(e,t,r){"use strict";var n;t.__esModule=!0,t.LoadableContext=void 0;var o=((n=r("q1tI"))&&n.__esModule?n:{default:n}).default.createContext(null);t.LoadableContext=o},lSNA:function(e,t){e.exports=function(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}}}]);