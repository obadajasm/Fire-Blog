"use strict";(self["webpackChunkfire_blog"]=self["webpackChunkfire_blog"]||[]).push([[727],{6727:function(e,t,n){n.r(t),n.d(t,{default:function(){return b}});var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"p-6"},[n("loginForm",{attrs:{"is-loading":e.loading},on:{submit:e.handleSubmit,signup:function(t){return e.$router.push("/signup")}}})],1)},o=[],a=n(4665),s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("el-form",{ref:"form",staticClass:"custom-form",attrs:{model:e.form,rules:e.rules}},[n("el-form-item",{attrs:{label:"Email",prop:"email","label-width":"80px"}},[n("el-input",{model:{value:e.form.email,callback:function(t){e.$set(e.form,"email",t)},expression:"form.email"}})],1),n("el-form-item",{attrs:{label:"Password",prop:"password","label-width":"80px"}},[n("el-input",{attrs:{type:"password","show-password":""},model:{value:e.form.password,callback:function(t){e.$set(e.form,"password",t)},expression:"form.password"}})],1),n("el-form-item",{staticClass:"mt-4"},[n("el-button",{attrs:{type:"primary"},on:{click:e.onSubmit}},[e._v("Login")])],1),n("div",{staticClass:"flex justify-center items-center"},[n("span",{staticClass:"text-gray-500"},[e._v("Don't have an account? ")]),n("el-button",{attrs:{type:"text"},on:{click:function(t){return e.$emit("signup")}}},[e._v(" Signup ")])],1)],1)},i=[],l=n(5879),u=n(4484),c={props:{isLoading:{type:Boolean,default:!1}},mixins:[u.Z],data(){return{form:{email:"",password:""},rules:{email:[{validator:l.vV,trigger:"blur"}],password:[{validator:l.eW,trigger:"blur"}]},passwordVisible:!1}},computed:{...(0,a.Se)("Auth/Login",["loading"])},methods:{onSubmit(){this.$refs.form.validate((async e=>{e&&this.$emit("submit",{user:this.form})}))}}},d=c,m=n(1001),p=(0,m.Z)(d,s,i,!1,null,"457386c5",null),f=p.exports,h={components:{LoginForm:f},computed:{...(0,a.Se)("Auth/Login",["loading"])},methods:{...(0,a.nv)("Auth/Login",["login"]),async handleSubmit(e){await this.login(e),this.$router.push("/")}}},g=h,w=(0,m.Z)(g,r,o,!1,null,null,null),b=w.exports},4484:function(e,t){t["Z"]={data(){return{loader:null}},watch:{isLoading(e){this.handleLoader(e)},loading(e){this.handleLoader(e)}},methods:{handleLoader(e){e?this.loader=this.$loading({lock:!0,text:"Loading",spinner:"el-icon-loading"}):this.loader?.close()}}}},5879:function(e,t,n){n.d(t,{UE:function(){return r},eW:function(){return a},vV:function(){return o}});n(1703);function r(e,t,n){""===t&&n(new Error("Field cannot be empty")),n()}function o(e,t,n){if(""===t)n(new Error("Please input email field"));else{const e=/^(?=[a-zA-Z0-9@._%+-]{6,254}$)[a-zA-Z0-9._%+-]{1,64}@(?:[a-zA-Z0-9-]{1,63}\.){1,8}[a-zA-Z]{2,63}$/;e.test(t)?n():n(new Error("Please input a valid email"))}}function a(e,t,n){if(""===t)n(new Error("Please input password field"));else{const e=/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;e.test(t)?n():n(new Error("Password must contain at least 8 characters, one uppercase, one lowercase, one number and one special character"))}}}}]);
//# sourceMappingURL=727.7a409c96.js.map