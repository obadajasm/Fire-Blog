(self["webpackChunkfire_blog"]=self["webpackChunkfire_blog"]||[]).push([[169],{2169:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return y}});var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"p-6"},[r("signupForm",{attrs:{"is-loading":e.loading},on:{submit:e.handleSubmit,login:function(t){return e.$router.push("/login")}}})],1)},o=[],i=r(6198),a=r(3019),s=(r(8975),r(4665)),u=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("el-form",{ref:"form",staticClass:"custom-form",attrs:{model:e.form,rules:e.rules}},[r("el-form-item",{attrs:{label:"Username",prop:"username","label-width":"80px"}},[r("el-input",{model:{value:e.form.username,callback:function(t){e.$set(e.form,"username",t)},expression:"form.username"}})],1),r("el-form-item",{attrs:{label:"Email",prop:"email","label-width":"80px"}},[r("el-input",{model:{value:e.form.email,callback:function(t){e.$set(e.form,"email",t)},expression:"form.email"}})],1),r("el-form-item",{attrs:{label:"Password",prop:"password","label-width":"80px"}},[r("el-input",{attrs:{type:"password","show-password":""},model:{value:e.form.password,callback:function(t){e.$set(e.form,"password",t)},expression:"form.password"}})],1),r("el-form-item",{staticClass:"mt-10"},[r("el-button",{attrs:{type:"primary"},on:{click:e.onSubmit}},[e._v("Signup")])],1),r("div",{staticClass:"gap-x-1 text-sm"},[r("span",{staticClass:"text-gray-500"},[e._v("Already registered?")]),r("el-button",{attrs:{type:"text"},on:{click:function(t){return e.$emit("login")}}},[e._v(" Login ")])],1)],1)],1)},l=[],c=r(5851),f=r(4484),p={props:{isLoading:{type:Boolean,default:!1}},mixins:[f.Z],data:function(){return{form:{username:"",email:"",password:""},rules:{username:[{validator:c.UE,trigger:"blur"}],email:[{validator:c.vV,trigger:"blur"}],password:[{validator:c.eW,trigger:"blur"}]},passwordVisible:!1}},computed:(0,a.Z)({},(0,s.Se)("Auth/Login",["loading"])),methods:{onSubmit:function(){var e=this;this.$refs.form.validate(function(){var t=(0,i.Z)(regeneratorRuntime.mark((function t(r){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:r&&e.$emit("submit",{user:e.form});case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}())}}},m=p,d=r(1001),g=(0,d.Z)(m,u,l,!1,null,"3b94d662",null),b=g.exports,h={components:{SignupForm:b},computed:(0,a.Z)({},(0,s.Se)("Auth/Signup",["loading"])),methods:(0,a.Z)((0,a.Z)({},(0,s.nv)("Auth/Signup",["signup"])),{},{handleSubmit:function(e){var t=this;return(0,i.Z)(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.next=2,t.signup(e);case 2:t.$router.push("/");case 3:case"end":return r.stop()}}),r)})))()}})},w=h,v=(0,d.Z)(w,n,o,!1,null,null,null),y=v.exports},1038:function(e,t,r){var n=r(2109),o=r(8457),i=r(7072),a=!i((function(e){Array.from(e)}));n({target:"Array",stat:!0,forced:a},{from:o})},9337:function(e,t,r){var n=r(2109),o=r(9781),i=r(3887),a=r(5656),s=r(1236),u=r(6135);n({target:"Object",stat:!0,sham:!o},{getOwnPropertyDescriptors:function(e){var t,r,n=a(e),o=s.f,l=i(n),c={},f=0;while(l.length>f)r=o(n,t=l[f++]),void 0!==r&&u(c,t,r);return c}})},4484:function(e,t){"use strict";t["Z"]={data:function(){return{loader:null}},watch:{isLoading:function(e){this.handleLoader(e)},loading:function(e){this.handleLoader(e)}},methods:{handleLoader:function(e){var t;e?this.loader=this.$loading({lock:!0,text:"Loading",spinner:"el-icon-loading"}):null===(t=this.loader)||void 0===t||t.close()}}}},5851:function(e,t,r){"use strict";r.d(t,{UE:function(){return n},vV:function(){return o},eW:function(){return i}});r(2526),r(1817),r(1539),r(2165),r(8783),r(3948);r(7042),r(8309),r(1038),r(4916),r(7601);r(1703);r(9726),r(7941),r(3123),r(1249),r(9653);function n(e,t,r){""===t&&r(new Error("Field cannot be empty")),r()}function o(e,t,r){if(""===t)r(new Error("Please input email field"));else{var n=/^(?=[a-zA-Z0-9@._%+-]{6,254}$)[a-zA-Z0-9._%+-]{1,64}@(?:[a-zA-Z0-9-]{1,63}\.){1,8}[a-zA-Z]{2,63}$/;n.test(t)?r():r(new Error("Please input a valid email"))}}function i(e,t,r){""===t?r(new Error("Please input password field")):t.length<6?r(new Error("Password must be at least 6 characters")):r()}},3019:function(e,t,r){"use strict";r.d(t,{Z:function(){return i}});r(7941),r(2526),r(7327),r(1539),r(5003),r(4747),r(9337);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}}}]);
//# sourceMappingURL=169-legacy.e86b49a1.js.map