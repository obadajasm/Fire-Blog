(function(){"use strict";var e={1434:function(e,t,n){var r=n(8935),a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},s=[],o=n(1001),i={},c=(0,o.Z)(i,a,s,!1,null,null,null),u=c.exports,l=n(4665);function d(){let e;try{return e=JSON.parse(localStorage.getItem("user"))||null,e}catch{return e={},e}}function g(){return{user:d()}}var f={namespaced:!0,state:g,getters:{loading(e){return e.loading},user(e){return e.user}},mutations:{setUser(e,t){e.user=t},resetState(e){Object.assign(e,g())}},actions:{storeUser({commit:e},t){e("setUser",t),localStorage.setItem("user",JSON.stringify(t))}}},p=(n(1703),n(6166)),m=n.n(p),h=n(4549),y=n.n(h);function v(e){function t(e){if(e.config.hideNotification)return;let t,n=Object.entries(e.data?.errors??{})?.[0]?.join(" ")??"";""===n&&"string"===typeof e?.data&&(n=e?.data??""),""===n||e.status<200||e.status>=300&&e.status<400||(e.status>=200&&e.status<300?t="success":e.status>=400&&(t="error"),b(n,t))}e.interceptors.response.use((e=>(t(e),Promise.resolve(e))),(e=>(e.response&&t(e.response),Promise.reject(e))))}function b(e,t){(0,h.Notification)({message:`${e}`,type:t,duration:5e3})}class A{setAccessToken(e){localStorage.setItem("accessToken",e),k.defaults.headers.common.Authorization=`Bearer ${e}`}getAccessToken(){let e=localStorage.getItem("accessToken");return e}reset(){localStorage.removeItem("accessToken")}}const T=new A;var w=T;const k=m().create({baseURL:"https://api.realworld.io/api/",headers:{Authorization:`Bearer ${w.getAccessToken()}`}}),S=m().create({baseURL:"https://api.realworld.io/api/"});v(k),v(S);const L="users/login",C="users";class O{static async login(e={}){const t=await S.post(L,e);return t.data}static async signup(e={}){const t=await S.post(C,e);return t.data}}var j={namespaced:!0,state(){return{loading:!1}},getters:{loading(e){return e.loading}},mutations:{setLoading(e,t){e.loading=t}},actions:{async login({commit:e,dispatch:t},n){e("setLoading",!0);try{const{user:r}=await O.login(n);t("User/storeUser",r,{root:!0}),e("Auth/setAccessToken",r.token,{root:!0})}finally{e("setLoading",!1)}}}},E={namespaced:!0,state(){return{loading:!1}},getters:{loading(e){return e.loading}},mutations:{setLoading(e,t){e.loading=t}},actions:{async signup({commit:e,dispatch:t},n){e("setLoading",!0);try{const{user:r}=await O.signup(n);t("User/storeUser",r,{root:!0}),e("Auth/setAccessToken",r.token,{root:!0})}finally{e("setLoading",!1)}}}};function _(){return{loading:!1,accessToken:w.getAccessToken()}}var P={namespaced:!0,modules:{Login:j,Signup:E},state:_,getters:{loading(e){return e.loading},isLoggedIn(e){return e.accessToken}},mutations:{setLoading(e,t){e.loading=t},setAccessToken(e,t){e.accessToken=t,w.setAccessToken(t),k.defaults.headers.Authorization="Bearer "+w.getAccessToken()},resetState(e){Object.assign(e,_())}},actions:{getAccessToken(){const e=w.getAccessToken();return e&&""!==e?Promise.resolve(e):Promise.reject(new Error("No access token"))},async isLoggedIn({dispatch:e}){try{return await e("getAccessToken"),!0}catch(t){return!1}}}};const N="articles/feed",U="articles",x=e=>`articles/${e}`;class B{static async getArticlesFeed(e={}){const t=await k.get(N,{params:e});return t.data}static async getAllArticles(e={}){const t=await S.get(U,{params:e});return t.data}static async createArticle(e={}){const t=await k.post(U,e);return t.data}static async getArticleBySlug(e,t={}){const n=await S.get(x(e),t);return n.data}}var I={namespaced:!0,state(){return{loading:!1,articles:[]}},getters:{loading(e){return e.loading},articles(e){return e.articles}},mutations:{setLoading(e,t){e.loading=t},setArticles(e,t){e.articles=t}},actions:{async createArticle({commit:e},t){e("setLoading",!0);try{let n=await B.createArticle(t);return n}finally{e("setLoading",!1)}}}};function Z(){return{loading:!1,article:null,articles:[],articlesCount:0}}var $={namespaced:!0,modules:{CreateArticle:I},state:Z,getters:{loading(e){return e.loading},articles(e){return e.articles},article(e){return e.article},articlesCount(e){return e.articlesCount}},mutations:{setLoading(e,t){e.loading=t},setArticles(e,t){e.articles=t},setArticle(e,t){e.article=t},setArticlesCount(e,t){e.articlesCount=t},resetState(e){Object.assign(e,Z())}},actions:{async getArticles({commit:e,dispatch:t},n={}){t("resetState"),e("setLoading",!0);try{const r=await t("Auth/isLoggedIn",null,{root:!0}),a=r&&!n?.getAll?B.getArticlesFeed(n):B.getAllArticles(n);let s=await a;return e("setArticles",s.articles),e("setArticlesCount",s.articlesCount),s}finally{e("setLoading",!1)}},async getArticleBySlug({commit:e},t){e("setLoading",!0);try{let{article:n}=await B.getArticleBySlug(t);return e("setArticle",n),n}finally{e("setLoading",!1)}},resetState({commit:e}){e("resetState")}}};const F="tags";class M{static async getTags(){let e=await k.get(F);return e.data}}function z(){return{loading:!1,tags:[],selectedTag:null}}var q={namespaced:!0,state:z,getters:{loading(e){return e.loading},tags(e){return e.tags},selectedTag(e){return e.selectedTag}},mutations:{setLoading(e,t){e.loading=t},setTags(e,t){e.tags=t},setSelectedTag(e,t){e.selectedTag=t},resetState(e){Object.assign(e,z())}},actions:{async getTags({commit:e}){e("setLoading",!0);try{let t=await M.getTags();return e("setTags",t.tags),t.tags}finally{e("setLoading",!1)}},setSelectedTag({commit:e},t){e("setSelectedTag",t)},resetState({commit:e}){e("resetState")}}};r["default"].use(l.ZP);var D=new l.ZP.Store({modules:{User:f,Auth:P,Articles:$,Tags:q}}),J=n(2809),R=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"flex justify-center items-center"},[n("router-view")],1)},W=[],H={},K=H,G=(0,o.Z)(K,R,W,!1,null,null,null),Q=G.exports,V={path:"/",component:Q,redirect:"login",children:[{path:"login",component:()=>n.e(727).then(n.bind(n,6727))},{path:"signup",component:()=>n.e(219).then(n.bind(n,2219))},{path:"home",component:()=>n.e(975).then(n.bind(n,7975))}]},X=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("router-view")},Y=[],ee={},te=ee,ne=(0,o.Z)(te,X,Y,!1,null,null,null),re=ne.exports,ae={path:"/",component:re,redirect:"feed",children:[{path:"feed",component:()=>n.e(773).then(n.bind(n,5773))},{path:"articles/create",component:()=>n.e(358).then(n.bind(n,358))}]};const se=[{path:"/",component:()=>n.e(585).then(n.bind(n,1542)),children:[ae]},{path:"/",component:()=>n.e(756).then(n.bind(n,619)),children:[V]},{path:"*",component:()=>n.e(320).then(n.bind(n,7917))}];var oe=se;r["default"].use(J.Z);const ie=new J.Z({routes:oe}),ce=["/login","/signup","/home"],ue=[...ce,"/articles"];ie.beforeEach((async(e,t,n)=>{try{await D.dispatch("Auth/getAccessToken"),ce.some((t=>e.path.startsWith(t)))?n("/feed"):n()}catch(r){ue.some((t=>e.path.startsWith(t)))?n():(w.reset(),n("/home"))}}));var le=ie,de=n(187);r["default"].use(y(),{locale:de.Z}),r["default"].config.productionTip=!1,new r["default"]({store:D,router:le,render:e=>e(u)}).$mount("#app")}},t={};function n(r){var a=t[r];if(void 0!==a)return a.exports;var s=t[r]={exports:{}};return e[r](s,s.exports,n),s.exports}n.m=e,function(){var e=[];n.O=function(t,r,a,s){if(!r){var o=1/0;for(l=0;l<e.length;l++){r=e[l][0],a=e[l][1],s=e[l][2];for(var i=!0,c=0;c<r.length;c++)(!1&s||o>=s)&&Object.keys(n.O).every((function(e){return n.O[e](r[c])}))?r.splice(c--,1):(i=!1,s<o&&(o=s));if(i){e.splice(l--,1);var u=a();void 0!==u&&(t=u)}}return t}s=s||0;for(var l=e.length;l>0&&e[l-1][2]>s;l--)e[l]=e[l-1];e[l]=[r,a,s]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){n.d=function(e,t){for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}}(),function(){n.f={},n.e=function(e){return Promise.all(Object.keys(n.f).reduce((function(t,r){return n.f[r](e,t),t}),[]))}}(),function(){n.u=function(e){return"js/"+({585:"MainLayout",756:"AuthLayout"}[e]||e)+"."+{219:"cab4687e",320:"eedaa288",358:"c2038eae",585:"8017cc3b",727:"7a409c96",756:"0e976f86",773:"e4336c98",975:"b9cd8153"}[e]+".js"}}(),function(){n.miniCssF=function(e){return"css/"+e+"."+{219:"85ea23c1",358:"a2218a26",727:"80819286"}[e]+".css"}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={},t="fire_blog:";n.l=function(r,a,s,o){if(e[r])e[r].push(a);else{var i,c;if(void 0!==s)for(var u=document.getElementsByTagName("script"),l=0;l<u.length;l++){var d=u[l];if(d.getAttribute("src")==r||d.getAttribute("data-webpack")==t+s){i=d;break}}i||(c=!0,i=document.createElement("script"),i.charset="utf-8",i.timeout=120,n.nc&&i.setAttribute("nonce",n.nc),i.setAttribute("data-webpack",t+s),i.src=r),e[r]=[a];var g=function(t,n){i.onerror=i.onload=null,clearTimeout(f);var a=e[r];if(delete e[r],i.parentNode&&i.parentNode.removeChild(i),a&&a.forEach((function(e){return e(n)})),t)return t(n)},f=setTimeout(g.bind(null,void 0,{type:"timeout",target:i}),12e4);i.onerror=g.bind(null,i.onerror),i.onload=g.bind(null,i.onload),c&&document.head.appendChild(i)}}}(),function(){n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){n.p="/"}(),function(){var e=function(e,t,n,r){var a=document.createElement("link");a.rel="stylesheet",a.type="text/css";var s=function(s){if(a.onerror=a.onload=null,"load"===s.type)n();else{var o=s&&("load"===s.type?"missing":s.type),i=s&&s.target&&s.target.href||t,c=new Error("Loading CSS chunk "+e+" failed.\n("+i+")");c.code="CSS_CHUNK_LOAD_FAILED",c.type=o,c.request=i,a.parentNode.removeChild(a),r(c)}};return a.onerror=a.onload=s,a.href=t,document.head.appendChild(a),a},t=function(e,t){for(var n=document.getElementsByTagName("link"),r=0;r<n.length;r++){var a=n[r],s=a.getAttribute("data-href")||a.getAttribute("href");if("stylesheet"===a.rel&&(s===e||s===t))return a}var o=document.getElementsByTagName("style");for(r=0;r<o.length;r++){a=o[r],s=a.getAttribute("data-href");if(s===e||s===t)return a}},r=function(r){return new Promise((function(a,s){var o=n.miniCssF(r),i=n.p+o;if(t(o,i))return a();e(r,i,a,s)}))},a={143:0};n.f.miniCss=function(e,t){var n={219:1,358:1,727:1};a[e]?t.push(a[e]):0!==a[e]&&n[e]&&t.push(a[e]=r(e).then((function(){a[e]=0}),(function(t){throw delete a[e],t})))}}(),function(){var e={143:0};n.f.j=function(t,r){var a=n.o(e,t)?e[t]:void 0;if(0!==a)if(a)r.push(a[2]);else{var s=new Promise((function(n,r){a=e[t]=[n,r]}));r.push(a[2]=s);var o=n.p+n.u(t),i=new Error,c=function(r){if(n.o(e,t)&&(a=e[t],0!==a&&(e[t]=void 0),a)){var s=r&&("load"===r.type?"missing":r.type),o=r&&r.target&&r.target.src;i.message="Loading chunk "+t+" failed.\n("+s+": "+o+")",i.name="ChunkLoadError",i.type=s,i.request=o,a[1](i)}};n.l(o,c,"chunk-"+t,t)}},n.O.j=function(t){return 0===e[t]};var t=function(t,r){var a,s,o=r[0],i=r[1],c=r[2],u=0;if(o.some((function(t){return 0!==e[t]}))){for(a in i)n.o(i,a)&&(n.m[a]=i[a]);if(c)var l=c(n)}for(t&&t(r);u<o.length;u++)s=o[u],n.o(e,s)&&e[s]&&e[s][0](),e[s]=0;return n.O(l)},r=self["webpackChunkfire_blog"]=self["webpackChunkfire_blog"]||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))}();var r=n.O(void 0,[998],(function(){return n(1434)}));r=n.O(r)})();
//# sourceMappingURL=app.a99370fe.js.map