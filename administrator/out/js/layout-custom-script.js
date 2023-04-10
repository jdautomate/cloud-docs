!function(n){function r(t){var e;return(o[t]||(e=o[t]={i:t,l:!1,exports:{}},n[t].call(e.exports,e,e.exports,r),e.l=!0,e)).exports}var o={};r.m=n,r.c=o,r.i=function(t){return t},r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{configurable:!1,enumerable:!0,get:n})},r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="",r(r.s=6)}([function(t,e){"use strict";e.a=function(){var t=document.createElement("template");return t.innerHTML="\n      ".concat('\n      <div class="site-sidebar__actions">\n        <a href="https://support.openvpn.com/hc/en-us/requests/new?ticket_form_id=5476060028315&subject=Request+Demo&product" target="_blank" class="ov-button ov-button--primary-base">Request A Demo</a>\n      </div>\n    ',"\n    "),t.content.cloneNode(!0)}},function(t,e){"use strict";e.a=function(){function n(){return"feedbackHelpful_"+document.querySelector(".breadcrumb-node span strong").textContent.replace(/[^a-zA-Z0-9]/g,"_")}function t(t){var e=n();document.cookie=e+"="+t+";path=/;max-age=2592000",r.style.display="none",o.style.display="none",i.style.display="block"}var r=document.getElementById("feedback-yes-btn"),o=document.getElementById("feedback-no-btn"),i=document.createElement("div");i.innerText="Thank you for your feedback!",i.style.display="none",r.addEventListener("click",function(){t(!0)}),o.addEventListener("click",function(){t(!1)}),r.parentElement.appendChild(i),void 0!==function(t){if(2===(t=("; "+document.cookie).split("; "+t+"=")).length)return t.pop().split(";").shift()}(n())&&(r.style.display="none",o.style.display="none",i.style.display="block")}},function(t,e){"use strict";e.a=function(){var t=document.createElement("template"),r=window.location.href,e="/cloud-docs",e=[{text:"Knowledge Base",active:["/developer","/owner","/user","/administrator"],url:"".concat(e,"/")},{text:"Tutorials",active:"/tutorials",url:"".concat(e,"/tutorials")},{text:"Videos",active:"/videos",url:"".concat(e,"/videos")},{text:"Support",url:"https://support.openvpn.com"}],e='\n    <div class="navigation">\n      <ul class="navigation-list">\n        '.concat(e.map(function(t){var e=Array.isArray(t.active)?t.active.some(function(t){return r.includes(t)}):r.includes(t.active);e&&(n=Array.isArray(t.active)?t.active.find(function(t){return r.includes(t)}):t.active,window.role=n.replace(/[^a-zA-Z]/g,"").toLowerCase());var n=t.url.startsWith("http")?"_blank":"",n='<a href="'.concat(t.url,'" target="').concat(n,'">').concat(t.text,"</a>");return'<li class="navigation-item'.concat(e?" is-active":"",'">').concat(n,"</li>")}).join(""),'\n      </ul>\n      <div class="search">\n        <form class="header-search form-inline" autocomplete="off">\n          <input id="search" type="search" class="form-control search-field" placeholder="Search">\n          <button type="submit" class="btn" disabled="">\n            <i class="fa fa-search"></i>\n          </button>\n        </form>\n      </div>\n    </div>\n  ');return t.innerHTML="\n    ".concat(e,"\n  "),t.content.cloneNode(!0)}},function(t,e){"use strict";e.a=function(){var t=document.createElement("template");return t.innerHTML="\n      ".concat('\n      <div class="outro__support">\n        <div class="outro__support-card">\n            <div class="outro__support-card-content">\n            <h3 class="h1">Can\'t find what you\'re looking for?</h3>\n            <p>Our support team will be happy to assist you.</p>\n            </div>\n            <div class="outro__support-card-actions">\n                <a href="https://support.openvpn.com/hc/en-us/requests/new" target="_blank" class="ov-button ov-button--primary-base">Open a Support Ticket</a>\n            </div>\n        </div>\n      </div>\n    ',"\n    "),t.content.cloneNode(!0)}},function(){"use strict";function r(t){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function n(t,e,n){(e=o(e))in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n}function o(t){t=function(t,e){if("object"!==r(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0===n)return("string"===e?String:Number)(t);n=n.call(t,e||"default");if("object"!==r(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}(t,"string");return"symbol"===r(t)?t:t+""}var t;t=function t(e){var r=this;if(!(this instanceof t))throw new TypeError("Cannot call a class as a function");n(this,"init",function(){r.updateHrefTags()}),n(this,"updateHrefTags",function(){r.elem.querySelectorAll("a[href]").forEach(function(t){var e=t.getAttribute("href"),n=new RegExp("/".concat(r.currentRole,"/").concat(r.currentRole,"/"),"g"),e=e.replace(n,"/".concat(r.currentRole,"/"));t.setAttribute("href",e)})}),this.elem=e,this.currentRole=window.role,this.availableRoles=["owner","developer","administrator","user"],this.init()},Object.defineProperty(t,"prototype",{writable:!1})},function(t,e,n){"use strict";function r(t){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function c(t){t=function(t,e){if("object"!==r(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0===n)return("string"===e?String:Number)(t);n=n.call(t,e||"default");if("object"!==r(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}(t,"string");return"symbol"===r(t)?t:t+""}n.d(e,"a",function(){return o});n=function t(e){var n,r,o,i=this;if(!(this instanceof t))throw new TypeError("Cannot call a class as a function");n=this,o=function(){var t=i.ui.dropdownContent,t=Array.from(t.childNodes).find(function(t){return t.nodeType===Node.TEXT_NODE&&"Select version"===t.textContent.trim()});t&&(i.availableRoles.includes(i.currentRole)?t.textContent="".concat(i.currentRole.charAt(0).toUpperCase()).concat(i.currentRole.slice(1)," Documentation"):t.textContent="Select Role")},(r=c(r="init"))in n?Object.defineProperty(n,r,{value:o,enumerable:!0,configurable:!0,writable:!0}):n[r]=o,this.elem=e,this.currentRole=window.role,this.ui={dropdownContent:this.elem.querySelector("a")},this.availableRoles=["owner","developer","administrator","user"],this.init()},Object.defineProperty(n,"prototype",{writable:!1});var o=n},function(t,e,f){"use strict";function j(t){return(j="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function _(){function n(t,e,n){return Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}),t[e]}function c(t,e,n,r){var o,i,c,a,e=e&&e.prototype instanceof s?e:s,e=Object.create(e.prototype),r=new l(r||[]);return m(e,"_invoke",{value:(o=t,i=n,c=r,a="suspendedStart",function(t,e){if("executing"==a)throw new Error("Generator is already running");if("completed"==a){if("throw"===t)throw e;return d()}for(c.method=t,c.arg=e;;){var n=c.delegate;if(n){n=function t(e,n){var r=n.method,o=e.iterator[r];if(void 0===o)return n.delegate=null,"throw"===r&&e.iterator.return&&(n.method="return",n.arg=void 0,t(e,n),"throw"===n.method)||"return"!==r&&(n.method="throw",n.arg=new TypeError("The iterator does not provide a '"+r+"' method")),x;r=u(o,e.iterator,n.arg);if("throw"===r.type)return n.method="throw",n.arg=r.arg,n.delegate=null,x;o=r.arg;return o?o.done?(n[e.resultName]=o.value,n.next=e.nextLoc,"return"!==n.method&&(n.method="next",n.arg=void 0),n.delegate=null,x):o:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,x)}(n,c);if(n){if(n===x)continue;return n}}if("next"===c.method)c.sent=c._sent=c.arg;else if("throw"===c.method){if("suspendedStart"==a)throw a="completed",c.arg;c.dispatchException(c.arg)}else"return"===c.method&&c.abrupt("return",c.arg);a="executing";n=u(o,i,c);if("normal"===n.type){if(a=c.done?"completed":"suspendedYield",n.arg===x)continue;return{value:n.arg,done:c.done}}"throw"===n.type&&(a="completed",c.method="throw",c.arg=n.arg)}})}),e}function u(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(t){return{type:"throw",arg:t}}}function s(){}function e(){}function r(){}function t(t){["next","throw","return"].forEach(function(e){n(t,e,function(t){return this._invoke(e,t)})})}function a(c,a){var e;m(this,"_invoke",{value:function(n,r){function t(){return new a(function(t,e){!function e(t,n,r,o){var i,t=u(c[t],c,n);if("throw"!==t.type)return(n=(i=t.arg).value)&&"object"==j(n)&&y.call(n,"__await")?a.resolve(n.__await).then(function(t){e("next",t,r,o)},function(t){e("throw",t,r,o)}):a.resolve(n).then(function(t){i.value=t,r(i)},function(t){return e("throw",t,r,o)});o(t.arg)}(n,r,t,e)})}return e=e?e.then(t,t):t()}})}function o(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function i(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function l(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(o,this),this.reset(!0)}function f(e){if(e){var n,t=e[b];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length))return n=-1,(t=function t(){for(;++n<e.length;)if(y.call(e,n))return t.value=e[n],t.done=!1,t;return t.value=void 0,t.done=!0,t}).next=t}return{next:d}}function d(){return{value:void 0,done:!0}}_=function(){return p};var p={},h=Object.prototype,y=h.hasOwnProperty,m=Object.defineProperty||function(t,e,n){t[e]=n.value},v="function"==typeof Symbol?Symbol:{},b=v.iterator||"@@iterator",g=v.asyncIterator||"@@asyncIterator",w=v.toStringTag||"@@toStringTag";try{n({},"")}catch(t){n=function(t,e,n){return t[e]=n}}p.wrap=c;var x={},v={},S=(n(v,b,function(){return this}),Object.getPrototypeOf),S=S&&S(S(f([]))),E=(S&&S!==h&&y.call(S,b)&&(v=S),r.prototype=s.prototype=Object.create(v));return m(E,"constructor",{value:e.prototype=r,configurable:!0}),m(r,"constructor",{value:e,configurable:!0}),e.displayName=n(r,w,"GeneratorFunction"),p.isGeneratorFunction=function(t){t="function"==typeof t&&t.constructor;return!!t&&(t===e||"GeneratorFunction"===(t.displayName||t.name))},p.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,r):(t.__proto__=r,n(t,w,"GeneratorFunction")),t.prototype=Object.create(E),t},p.awrap=function(t){return{__await:t}},t(a.prototype),n(a.prototype,g,function(){return this}),p.AsyncIterator=a,p.async=function(t,e,n,r,o){void 0===o&&(o=Promise);var i=new a(c(t,e,n,r),o);return p.isGeneratorFunction(e)?i:i.next().then(function(t){return t.done?t.value:i.next()})},t(E),n(E,w,"Generator"),n(E,b,function(){return this}),n(E,"toString",function(){return"[object Generator]"}),p.keys=function(t){var e,n=Object(t),r=[];for(e in n)r.push(e);return r.reverse(),function t(){for(;r.length;){var e=r.pop();if(e in n)return t.value=e,t.done=!1,t}return t.done=!0,t}},p.values=f,l.prototype={constructor:l,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(i),!t)for(var e in this)"t"===e.charAt(0)&&y.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(n){function t(t,e){return i.type="throw",i.arg=n,r.next=t,e&&(r.method="next",r.arg=void 0),!!e}if(this.done)throw n;for(var r=this,e=this.tryEntries.length-1;0<=e;--e){var o=this.tryEntries[e],i=o.completion;if("root"===o.tryLoc)return t("end");if(o.tryLoc<=this.prev){var c=y.call(o,"catchLoc"),a=y.call(o,"finallyLoc");if(c&&a){if(this.prev<o.catchLoc)return t(o.catchLoc,!0);if(this.prev<o.finallyLoc)return t(o.finallyLoc)}else if(c){if(this.prev<o.catchLoc)return t(o.catchLoc,!0)}else{if(!a)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return t(o.finallyLoc)}}}},abrupt:function(t,e){for(var n,r=this.tryEntries.length-1;0<=r;--r)if((n=this.tryEntries[r]).tryLoc<=this.prev&&y.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var o=n;break}var i=(o=o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc?null:o)?o.completion:{};return i.type=t,i.arg=e,o?(this.method="next",this.next=o.finallyLoc,x):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),x},finish:function(t){for(var e,n=this.tryEntries.length-1;0<=n;--n)if((e=this.tryEntries[n]).finallyLoc===t)return this.complete(e.completion,e.afterLoc),i(e),x},catch:function(t){for(var e,n,r,o=this.tryEntries.length-1;0<=o;--o)if((r=this.tryEntries[o]).tryLoc===t)return"throw"===(e=r.completion).type&&(n=e.arg,i(r)),n;throw new Error("illegal catch attempt")},delegateYield:function(t,e,n){return this.delegate={iterator:f(t),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=void 0),x}},p}function u(t,e,n,r,o,i,c){try{var a=t[i](c),u=a.value}catch(t){return n(t)}a.done?e(u):Promise.resolve(u).then(r,o)}function n(a){return function(){var t=this,c=arguments;return new Promise(function(e,n){function r(t){u(i,e,n,r,o,"next",t)}function o(t){u(i,e,n,r,o,"throw",t)}var i=a.apply(t,c);r(void 0)})}}function r(){return(r=n(_().mark(function t(e){var n,r;return _().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,fetch(e);case 3:if((n=t.sent).ok)return t.next=7,n.text();t.next=14;break;case 7:n=t.sent,(r=document.createElement("script")).textContent=n,document.body.appendChild(r),console.log("Loaded script: ".concat(e)),t.next=15;break;case 14:console.error("Failed to fetch script: ".concat(e));case 15:t.next=20;break;case 17:t.prev=17,t.t0=t.catch(0),console.error("Error while fetching and loading ".concat(e,":"),t.t0);case 20:case"end":return t.stop()}},t,null,[[0,17]])}))).apply(this,arguments)}Object.defineProperty(e,"__esModule",{value:!0});var o,i,c,d=f(2),p=f(0),h=f(3),y=f(5),m=(f(4),f(1));o=n(_().mark(function t(){var e,n,r,o,i,c,a,u,s,l;return _().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:e=document.getElementById("navbar"),n=document.querySelector(".site-sidebar"),r=document.querySelector(".site-content"),o=document.querySelector(".portal-body-container"),i=document.querySelector(".site-body"),c=document.querySelector(".breadcrumb-container"),a=document.querySelector(".site-body-container"),u=document.querySelector(".site-footer"),s=document.querySelector(".breadcrumb-link:first-of-type a"),l=document.querySelector(".breadcrumb-link:nth-of-type(2) a"),e&&e.insertBefore(f.i(d.a)(),e.firstChild),n&&n.insertBefore(f.i(p.a)(),n.lastChild.nextSibling),r?r.insertBefore(f.i(h.a)(),r.lastChild.nextSibling):o&&o.insertBefore(f.i(h.a)(),o.lastChild.nextSibling),a&&a.appendChild(u),i&&c&&s&&(s&&(s.href="/cloud-docs/index.html"),l&&(l.href="/cloud-docs/".concat(window.role,"/index.html")),i.insertBefore(c,i.firstChild)),new y.a(document.querySelector(".version-dropdown")),new m.a(document.querySelector(".feedback-panel"));case 17:case"end":return t.stop()}},t)})),function(){o.apply(this,arguments)}(),function(){r.apply(this,arguments)}("https://cmp.osano.com/16BV95T11hbIe1XG6/026fdb63-41c2-4520-bcdd-fdf6d73a2ea0/osano.js"),i=window,e=document,i.hj=i.hj||function(){(i.hj.q=i.hj.q||[]).push(arguments)},i._hjSettings={hjid:1060371,hjsv:6},c=e.getElementsByTagName("head")[0],(e=e.createElement("script")).async=1,e.src="https://static.hotjar.com/c/hotjar-"+i._hjSettings.hjid+".js?sv="+i._hjSettings.hjsv,c.appendChild(e)}]);