(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[4],{"/0+H":function(e,t,o){"use strict";t.__esModule=!0,t.isInAmpMode=i,t.useAmp=function(){return i(r.default.useContext(n.AmpStateContext))};var a,r=(a=o("q1tI"))&&a.__esModule?a:{default:a},n=o("lwAK");function i(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.ampFirst,o=void 0!==t&&t,a=e.hybrid,r=void 0!==a&&a,n=e.hasQuery,i=void 0!==n&&n;return o||r&&i}},"7W2i":function(e,t,o){var a=o("SksO");e.exports=function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&a(e,t)},e.exports.default=e.exports,e.exports.__esModule=!0},"8Kt/":function(e,t,o){"use strict";o("lSNA");t.__esModule=!0,t.defaultHead=s,t.default=void 0;var a,r=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var t=c();if(t&&t.has(e))return t.get(e);var o={},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){var n=a?Object.getOwnPropertyDescriptor(e,r):null;n&&(n.get||n.set)?Object.defineProperty(o,r,n):o[r]=e[r]}o.default=e,t&&t.set(e,o);return o}(o("q1tI")),n=(a=o("Xuae"))&&a.__esModule?a:{default:a},i=o("lwAK"),p=o("FYa8"),l=o("/0+H");function c(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return c=function(){return e},e}function s(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=[r.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(r.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function u(e,t){return"string"===typeof t||"number"===typeof t?e:t.type===r.default.Fragment?e.concat(r.default.Children.toArray(t.props.children).reduce((function(e,t){return"string"===typeof t||"number"===typeof t?e:e.concat(t)}),[])):e.concat(t)}var d=["name","httpEquiv","charSet","itemProp"];function h(e,t){return e.reduce((function(e,t){var o=r.default.Children.toArray(t.props.children);return e.concat(o)}),[]).reduce(u,[]).reverse().concat(s(t.inAmpMode)).filter(function(){var e=new Set,t=new Set,o=new Set,a={};return function(r){var n=!0,i=!1;if(r.key&&"number"!==typeof r.key&&r.key.indexOf("$")>0){i=!0;var p=r.key.slice(r.key.indexOf("$")+1);e.has(p)?n=!1:e.add(p)}switch(r.type){case"title":case"base":t.has(r.type)?n=!1:t.add(r.type);break;case"meta":for(var l=0,c=d.length;l<c;l++){var s=d[l];if(r.props.hasOwnProperty(s))if("charSet"===s)o.has(s)?n=!1:o.add(s);else{var u=r.props[s],h=a[s]||new Set;"name"===s&&i||!h.has(u)?(h.add(u),a[s]=h):n=!1}}}return n}}()).reverse().map((function(e,t){var o=e.key||t;return r.default.cloneElement(e,{key:o})}))}function f(e){var t=e.children,o=(0,r.useContext)(i.AmpStateContext),a=(0,r.useContext)(p.HeadManagerContext);return r.default.createElement(n.default,{reduceComponentsToState:h,headManager:a,inAmpMode:(0,l.isInAmpMode)(o)},t)}f.rewind=function(){};var m=f;t.default=m},"9ixD":function(e,t,o){"use strict";o.d(t,"a",(function(){return s})),o.d(t,"b",(function(){return u}));var a=o("g4pe"),r=o.n(a),n=o("q1tI"),i=o.n(n);function p(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,e.__proto__=t}var l={templateTitle:"",noindex:!1,nofollow:!1,defaultOpenGraphImageWidth:0,defaultOpenGraphImageHeight:0,defaultOpenGraphVideoWidth:0,defaultOpenGraphVideoHeight:0},c=function(e){var t,o=[];e.titleTemplate&&(l.templateTitle=e.titleTemplate);var a="";e.title?(a=e.title,l.templateTitle&&(a=l.templateTitle.replace(/%s/g,(function(){return a})))):e.defaultTitle&&(a=e.defaultTitle),a&&o.push(i.a.createElement("title",{key:"title"},a));var r=e.noindex||l.noindex||e.dangerouslySetAllPagesToNoIndex,n=e.nofollow||l.nofollow||e.dangerouslySetAllPagesToNoFollow,p="";if(e.robotsProps){var c=e.robotsProps,s=c.nosnippet,u=c.maxSnippet,d=c.maxImagePreview,h=c.maxVideoPreview,f=c.noarchive,m=c.noimageindex,g=c.notranslate,y=c.unavailableAfter;p=(s?",nosnippet":"")+(u?",max-snippet:"+u:"")+(d?",max-image-preview:"+d:"")+(f?",noarchive":"")+(y?",unavailable_after:"+y:"")+(m?",noimageindex":"")+(h?",max-video-preview:"+h:"")+(g?",notranslate":"")}if(r||n?(e.dangerouslySetAllPagesToNoIndex&&(l.noindex=!0),e.dangerouslySetAllPagesToNoFollow&&(l.nofollow=!0),o.push(i.a.createElement("meta",{key:"robots",name:"robots",content:(r?"noindex":"index")+","+(n?"nofollow":"follow")+p})),o.push(i.a.createElement("meta",{key:"googlebot",name:"googlebot",content:(r?"noindex":"index")+","+(n?"nofollow":"follow")+p}))):(o.push(i.a.createElement("meta",{key:"robots",name:"robots",content:"index,follow"+p})),o.push(i.a.createElement("meta",{key:"googlebot",name:"googlebot",content:"index,follow"+p}))),e.description&&o.push(i.a.createElement("meta",{key:"description",name:"description",content:e.description})),e.mobileAlternate&&o.push(i.a.createElement("link",{rel:"alternate",key:"mobileAlternate",media:e.mobileAlternate.media,href:e.mobileAlternate.href})),e.languageAlternates&&e.languageAlternates.length>0&&e.languageAlternates.forEach((function(e){o.push(i.a.createElement("link",{rel:"alternate",key:"languageAlternate-"+e.hrefLang,hrefLang:e.hrefLang,href:e.href}))})),e.twitter&&(e.twitter.cardType&&o.push(i.a.createElement("meta",{key:"twitter:card",name:"twitter:card",content:e.twitter.cardType})),e.twitter.site&&o.push(i.a.createElement("meta",{key:"twitter:site",name:"twitter:site",content:e.twitter.site})),e.twitter.handle&&o.push(i.a.createElement("meta",{key:"twitter:creator",name:"twitter:creator",content:e.twitter.handle}))),e.facebook&&e.facebook.appId&&o.push(i.a.createElement("meta",{key:"fb:app_id",property:"fb:app_id",content:e.facebook.appId})),e.openGraph){if((e.openGraph.url||e.canonical)&&o.push(i.a.createElement("meta",{key:"og:url",property:"og:url",content:e.openGraph.url||e.canonical})),e.openGraph.type){var v=e.openGraph.type.toLowerCase();o.push(i.a.createElement("meta",{key:"og:type",property:"og:type",content:v})),"profile"===v&&e.openGraph.profile?(e.openGraph.profile.firstName&&o.push(i.a.createElement("meta",{key:"profile:first_name",property:"profile:first_name",content:e.openGraph.profile.firstName})),e.openGraph.profile.lastName&&o.push(i.a.createElement("meta",{key:"profile:last_name",property:"profile:last_name",content:e.openGraph.profile.lastName})),e.openGraph.profile.username&&o.push(i.a.createElement("meta",{key:"profile:username",property:"profile:username",content:e.openGraph.profile.username})),e.openGraph.profile.gender&&o.push(i.a.createElement("meta",{key:"profile:gender",property:"profile:gender",content:e.openGraph.profile.gender}))):"book"===v&&e.openGraph.book?(e.openGraph.book.authors&&e.openGraph.book.authors.length&&e.openGraph.book.authors.forEach((function(e,t){o.push(i.a.createElement("meta",{key:"book:author:0"+t,property:"book:author",content:e}))})),e.openGraph.book.isbn&&o.push(i.a.createElement("meta",{key:"book:isbn",property:"book:isbn",content:e.openGraph.book.isbn})),e.openGraph.book.releaseDate&&o.push(i.a.createElement("meta",{key:"book:release_date",property:"book:release_date",content:e.openGraph.book.releaseDate})),e.openGraph.book.tags&&e.openGraph.book.tags.length&&e.openGraph.book.tags.forEach((function(e,t){o.push(i.a.createElement("meta",{key:"book:tag:0"+t,property:"book:tag",content:e}))}))):"article"===v&&e.openGraph.article?(e.openGraph.article.publishedTime&&o.push(i.a.createElement("meta",{key:"article:published_time",property:"article:published_time",content:e.openGraph.article.publishedTime})),e.openGraph.article.modifiedTime&&o.push(i.a.createElement("meta",{key:"article:modified_time",property:"article:modified_time",content:e.openGraph.article.modifiedTime})),e.openGraph.article.expirationTime&&o.push(i.a.createElement("meta",{key:"article:expiration_time",property:"article:expiration_time",content:e.openGraph.article.expirationTime})),e.openGraph.article.authors&&e.openGraph.article.authors.length&&e.openGraph.article.authors.forEach((function(e,t){o.push(i.a.createElement("meta",{key:"article:author:0"+t,property:"article:author",content:e}))})),e.openGraph.article.section&&o.push(i.a.createElement("meta",{key:"article:section",property:"article:section",content:e.openGraph.article.section})),e.openGraph.article.tags&&e.openGraph.article.tags.length&&e.openGraph.article.tags.forEach((function(e,t){o.push(i.a.createElement("meta",{key:"article:tag:0"+t,property:"article:tag",content:e}))}))):"video.movie"!==v&&"video.episode"!==v&&"video.tv_show"!==v&&"video.other"!==v||!e.openGraph.video||(e.openGraph.video.actors&&e.openGraph.video.actors.length&&e.openGraph.video.actors.forEach((function(e,t){e.profile&&o.push(i.a.createElement("meta",{key:"video:actor:0"+t,property:"video:actor",content:e.profile})),e.role&&o.push(i.a.createElement("meta",{key:"video:actor:role:0"+t,property:"video:actor:role",content:e.role}))})),e.openGraph.video.directors&&e.openGraph.video.directors.length&&e.openGraph.video.directors.forEach((function(e,t){o.push(i.a.createElement("meta",{key:"video:director:0"+t,property:"video:director",content:e}))})),e.openGraph.video.writers&&e.openGraph.video.writers.length&&e.openGraph.video.writers.forEach((function(e,t){o.push(i.a.createElement("meta",{key:"video:writer:0"+t,property:"video:writer",content:e}))})),e.openGraph.video.duration&&o.push(i.a.createElement("meta",{key:"video:duration",property:"video:duration",content:e.openGraph.video.duration.toString()})),e.openGraph.video.releaseDate&&o.push(i.a.createElement("meta",{key:"video:release_date",property:"video:release_date",content:e.openGraph.video.releaseDate})),e.openGraph.video.tags&&e.openGraph.video.tags.length&&e.openGraph.video.tags.forEach((function(e,t){o.push(i.a.createElement("meta",{key:"video:tag:0"+t,property:"video:tag",content:e}))})),e.openGraph.video.series&&o.push(i.a.createElement("meta",{key:"video:series",property:"video:series",content:e.openGraph.video.series})))}(e.openGraph.title||e.title)&&o.push(i.a.createElement("meta",{key:"og:title",property:"og:title",content:e.openGraph.title||a})),(e.openGraph.description||e.description)&&o.push(i.a.createElement("meta",{key:"og:description",property:"og:description",content:e.openGraph.description||e.description})),e.defaultOpenGraphImageWidth&&(l.defaultOpenGraphImageWidth=e.defaultOpenGraphImageWidth),e.defaultOpenGraphImageHeight&&(l.defaultOpenGraphImageHeight=e.defaultOpenGraphImageHeight),e.openGraph.images&&e.openGraph.images.length&&e.openGraph.images.forEach((function(e,t){o.push(i.a.createElement("meta",{key:"og:image:0"+t,property:"og:image",content:e.url})),e.alt&&o.push(i.a.createElement("meta",{key:"og:image:alt0"+t,property:"og:image:alt",content:e.alt})),e.width?o.push(i.a.createElement("meta",{key:"og:image:width0"+t,property:"og:image:width",content:e.width.toString()})):l.defaultOpenGraphImageWidth&&o.push(i.a.createElement("meta",{key:"og:image:width0"+t,property:"og:image:width",content:l.defaultOpenGraphImageWidth.toString()})),e.height?o.push(i.a.createElement("meta",{key:"og:image:height"+t,property:"og:image:height",content:e.height.toString()})):l.defaultOpenGraphImageHeight&&o.push(i.a.createElement("meta",{key:"og:image:height"+t,property:"og:image:height",content:l.defaultOpenGraphImageHeight.toString()}))})),e.defaultOpenGraphVideoWidth&&(l.defaultOpenGraphVideoWidth=e.defaultOpenGraphVideoWidth),e.defaultOpenGraphVideoHeight&&(l.defaultOpenGraphVideoHeight=e.defaultOpenGraphVideoHeight),e.openGraph.videos&&e.openGraph.videos.length&&e.openGraph.videos.forEach((function(e,t){o.push(i.a.createElement("meta",{key:"og:video:0"+t,property:"og:video",content:e.url})),e.alt&&o.push(i.a.createElement("meta",{key:"og:video:alt0"+t,property:"og:video:alt",content:e.alt})),e.width?o.push(i.a.createElement("meta",{key:"og:video:width0"+t,property:"og:video:width",content:e.width.toString()})):l.defaultOpenGraphVideoWidth&&o.push(i.a.createElement("meta",{key:"og:video:width0"+t,property:"og:video:width",content:l.defaultOpenGraphVideoWidth.toString()})),e.height?o.push(i.a.createElement("meta",{key:"og:video:height"+t,property:"og:video:height",content:e.height.toString()})):l.defaultOpenGraphVideoHeight&&o.push(i.a.createElement("meta",{key:"og:video:height"+t,property:"og:video:height",content:l.defaultOpenGraphVideoHeight.toString()})),e.secureUrl&&o.push(i.a.createElement("meta",{key:"og:video:secure_url"+t,property:"og:video:secure_url",content:e.secureUrl.toString()})),e.type&&o.push(i.a.createElement("meta",{key:"og:video:type"+t,property:"og:video:type",content:e.type.toString()}))})),e.openGraph.locale&&o.push(i.a.createElement("meta",{key:"og:locale",property:"og:locale",content:e.openGraph.locale})),e.openGraph.site_name&&o.push(i.a.createElement("meta",{key:"og:site_name",property:"og:site_name",content:e.openGraph.site_name}))}return e.canonical&&o.push(i.a.createElement("link",{rel:"canonical",href:e.canonical,key:"canonical"})),e.additionalMetaTags&&e.additionalMetaTags.length>0&&e.additionalMetaTags.forEach((function(e){var t,a,r;o.push(i.a.createElement("meta",Object.assign({key:"meta:"+(null!=(t=null!=(a=null!=(r=e.keyOverride)?r:e.name)?a:e.property)?t:e.httpEquiv)},e)))})),null!=(t=e.additionalLinkTags)&&t.length&&e.additionalLinkTags.forEach((function(e){var t;o.push(i.a.createElement("link",Object.assign({key:"link"+(null!=(t=e.keyOverride)?t:e.href)+e.rel},e)))})),o},s=function(e){function t(){return e.apply(this,arguments)||this}return p(t,e),t.prototype.render=function(){var e=this.props,t=e.title,o=e.titleTemplate,a=e.defaultTitle,n=e.dangerouslySetAllPagesToNoIndex,p=void 0!==n&&n,l=e.dangerouslySetAllPagesToNoFollow,s=void 0!==l&&l,u=e.description,d=e.canonical,h=e.facebook,f=e.openGraph,m=e.additionalMetaTags,g=e.twitter,y=e.defaultOpenGraphImageWidth,v=e.defaultOpenGraphImageHeight,k=e.defaultOpenGraphVideoWidth,G=e.defaultOpenGraphVideoHeight,b=e.mobileAlternate,x=e.languageAlternates,w=e.additionalLinkTags;return i.a.createElement(r.a,null,c({title:t,titleTemplate:o,defaultTitle:a,dangerouslySetAllPagesToNoIndex:p,dangerouslySetAllPagesToNoFollow:s,description:u,canonical:d,facebook:h,openGraph:f,additionalMetaTags:m,twitter:g,defaultOpenGraphImageWidth:y,defaultOpenGraphImageHeight:v,defaultOpenGraphVideoWidth:k,defaultOpenGraphVideoHeight:G,mobileAlternate:b,languageAlternates:x,additionalLinkTags:w}))},t}(n.Component),u=function(e){function t(){return e.apply(this,arguments)||this}return p(t,e),t.prototype.render=function(){var e=this.props,t=e.title,o=e.noindex,a=void 0!==o&&o,n=e.nofollow,p=e.robotsProps,l=e.description,s=e.canonical,u=e.openGraph,d=e.facebook,h=e.twitter,f=e.additionalMetaTags,m=e.titleTemplate,g=e.mobileAlternate,y=e.languageAlternates,v=e.additionalLinkTags;return i.a.createElement(r.a,null,c({title:t,noindex:a,nofollow:n,robotsProps:p,description:l,canonical:s,facebook:d,openGraph:u,additionalMetaTags:f,twitter:h,titleTemplate:m,mobileAlternate:g,languageAlternates:y,additionalLinkTags:v}))},t}(n.Component)},Bnag:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")},e.exports.default=e.exports,e.exports.__esModule=!0},EbDI:function(e,t){e.exports=function(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)},e.exports.default=e.exports,e.exports.__esModule=!0},FYa8:function(e,t,o){"use strict";var a;t.__esModule=!0,t.HeadManagerContext=void 0;var r=((a=o("q1tI"))&&a.__esModule?a:{default:a}).default.createContext({});t.HeadManagerContext=r},Ijbi:function(e,t,o){var a=o("WkPL");e.exports=function(e){if(Array.isArray(e))return a(e)},e.exports.default=e.exports,e.exports.__esModule=!0},Nsbk:function(e,t){function o(t){return e.exports=o=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},e.exports.default=e.exports,e.exports.__esModule=!0,o(t)}e.exports=o,e.exports.default=e.exports,e.exports.__esModule=!0},PJYZ:function(e,t){e.exports=function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e},e.exports.default=e.exports,e.exports.__esModule=!0},RIqP:function(e,t,o){var a=o("Ijbi"),r=o("EbDI"),n=o("ZhPi"),i=o("Bnag");e.exports=function(e){return a(e)||r(e)||n(e)||i()},e.exports.default=e.exports,e.exports.__esModule=!0},Xuae:function(e,t,o){"use strict";var a=o("RIqP"),r=o("lwsE"),n=o("W8MJ"),i=(o("PJYZ"),o("7W2i")),p=o("a1gu"),l=o("Nsbk");function c(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var o,a=l(e);if(t){var r=l(this).constructor;o=Reflect.construct(a,arguments,r)}else o=a.apply(this,arguments);return p(this,o)}}t.__esModule=!0,t.default=void 0;var s=o("q1tI"),u=function(e){i(o,e);var t=c(o);function o(e){var n;return r(this,o),(n=t.call(this,e))._hasHeadManager=void 0,n.emitChange=function(){n._hasHeadManager&&n.props.headManager.updateHead(n.props.reduceComponentsToState(a(n.props.headManager.mountedInstances),n.props))},n._hasHeadManager=n.props.headManager&&n.props.headManager.mountedInstances,n}return n(o,[{key:"componentDidMount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.add(this),this.emitChange()}},{key:"componentDidUpdate",value:function(){this.emitChange()}},{key:"componentWillUnmount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.delete(this),this.emitChange()}},{key:"render",value:function(){return null}}]),o}(s.Component);t.default=u},a1gu:function(e,t,o){var a=o("cDf5").default,r=o("PJYZ");e.exports=function(e,t){return!t||"object"!==a(t)&&"function"!==typeof t?r(e):t},e.exports.default=e.exports,e.exports.__esModule=!0},cDf5:function(e,t){function o(t){return"function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?(e.exports=o=function(e){return typeof e},e.exports.default=e.exports,e.exports.__esModule=!0):(e.exports=o=function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e.exports.default=e.exports,e.exports.__esModule=!0),o(t)}e.exports=o,e.exports.default=e.exports,e.exports.__esModule=!0},g4pe:function(e,t,o){e.exports=o("8Kt/")},lwAK:function(e,t,o){"use strict";var a;t.__esModule=!0,t.AmpStateContext=void 0;var r=((a=o("q1tI"))&&a.__esModule?a:{default:a}).default.createContext({});t.AmpStateContext=r}}]);