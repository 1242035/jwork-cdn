(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{"5u4H":function(t,e,r){var s=r("CFnI");"string"==typeof s&&(s=[[t.i,s,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};r("aET+")(s,o);s.locals&&(t.exports=s.locals)},BPU7:function(t,e,r){"use strict";r.r(e);var s=r("ta7f"),o=r("L2JU");function n(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}var a={name:"SignIn",props:{type:{type:String,default:"candidate"},redirect:{type:Boolean,default:!1}},validations:{email:{required:s.required,email:s.email},password:{required:s.required}},computed:function(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{},s=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(s=s.concat(Object.getOwnPropertySymbols(r).filter(function(t){return Object.getOwnPropertyDescriptor(r,t).enumerable}))),s.forEach(function(e){n(t,e,r[e])})}return t}({},Object(o.b)({alert:function(t){return t.alert}}),{memberType:function(){return"candidate"===this.type?2:"employee"===this.type?1:0},currentLink:function(){return window.location.href}}),data:function(){return{email:"",password:"",remember:1,googleSignInParams:{client_id:window.__ENV__.google.client_id},fbSignInParams:{scope:"email,user_likes",return_scopes:!0}}},mounted:function(){},methods:{login:function(){this.$v.$invalid?this.$v.$touch():this.$store.dispatch("account/login",{email:this.email,password:this.password,remember:this.remember,memberType:this.memberType,redirect:!!this.redirect&&this.currentLink})},onSignInGoogleSuccess:function(t){var e=t.getAuthResponse().id_token,r=t.getId();null!=r&&null!=e&&this.$store.dispatch("account/loginGoogle",{userId:r,token:e,memberType:this.memberType,redirect:!!this.redirect&&this.currentLink})},onSignInGoogleError:function(t){},onSignInFacebookSuccess:function(t){var e=this;FB.api("/me",function(t){var r=t.id,s=FB.getAuthResponse().accessToken;null!=r&&null!=s&&e.$store.dispatch("account/loginFacebook",{userId:r,token:s,memberType:e.memberType,redirect:!!e.redirect&&e.currentLink})})},onSignInFacebookError:function(t){}}},i=(r("XZhv"),r("KHd+")),c=Object(i.a)(a,function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"form-sign-in-company"},[r("form",{staticClass:"form",attrs:{action:"",method:""}},[r("h2",{staticClass:"title"},[t._v(t._s(t.$t("jwork.jwork_login")))]),t._v(" "),r("div",{staticClass:"row"},[t.alert.message?r("el-alert",{attrs:{title:t.alert.message,type:t.alert.type}}):t._e(),t._v(" "),r("div",{staticClass:"col-12 col-lg-12 col-md-12 col-sm-12"},[r("div",{staticClass:"form-group",class:{"is-invalid has-danger":t.$v.email.$dirty&&t.$v.email.$invalid}},[r("label",{staticClass:"label-company",attrs:{for:"label-sign-in-1"}},[t._v(t._s(t.$t("jwork.email")))]),t._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:t.email,expression:"email"}],staticClass:"form-control input-text",attrs:{type:"text"},domProps:{value:t.email},on:{input:[function(e){e.target.composing||(t.email=e.target.value)},function(e){return t.$v.email.$touch()}]}})])]),t._v(" "),r("div",{staticClass:"col-12 col-lg-12 col-md-12 col-sm-12"},[r("div",{staticClass:"form-group",class:{"is-invalid has-danger":t.$v.password.$dirty&&t.$v.password.$invalid}},[r("label",{staticClass:"label-company",attrs:{for:"label-sign-in-2"}},[t._v(t._s(t.$t("jwork.Password")))]),t._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],staticClass:"form-control input-text",attrs:{type:"password"},domProps:{value:t.password},on:{input:[function(e){e.target.composing||(t.password=e.target.value)},function(e){return t.$v.password.$touch()}]}})])]),t._v(" "),r("div",{staticClass:"col-12 col-lg-12 col-md-12 col-sm-12"},[r("div",{staticClass:"form-group"},[r("div",{staticClass:"wrap-check mr-auto"},[r("label",{staticClass:"container label form-check-label label-checkbox"},[t._v(t._s(t.$t("jwork.web_remember_me"))+"\r\n                            "),r("input",{directives:[{name:"model",rawName:"v-model",value:t.remember,expression:"remember"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(t.remember)?t._i(t.remember,null)>-1:t.remember},on:{change:function(e){var r=t.remember,s=e.target,o=!!s.checked;if(Array.isArray(r)){var n=t._i(r,null);s.checked?n<0&&(t.remember=r.concat([null])):n>-1&&(t.remember=r.slice(0,n).concat(r.slice(n+1)))}else t.remember=o}}}),t._v(" "),r("span",{staticClass:"checkmark"})])]),t._v(" "),r("a",{staticClass:"forgot-pass forgot-password text-color",attrs:{href:t.getRouteLink("forgotPassword"),title:""}},[t._v(t._s(t.$t("jwork.forgot_password")))])])]),t._v(" "),r("div",{staticClass:"col-12 col-lg-12 col-md-12 col-sm-12"},[r("div",{staticClass:"form-group",staticStyle:{"text-align":"center"}},[r("button",{staticClass:"btn btn-submit btn-access cursor",staticStyle:{width:"220px"},on:{click:function(e){return e.preventDefault(),t.login(e)}}},[t._v(t._s(t.$t("jwork.Login")))])])]),t._v(" "),r("div",{staticClass:"col-12 col-lg-12 col-md-12 col-sm-12"},[r("div",{staticClass:"form-group"},[r("div",{staticClass:"mataha"},[t._v(t._s(t.$t("jwork.or")))])])]),t._v(" "),r("div",{staticClass:"col-12 col-lg-12 col-md-12 col-sm-12"},[r("div",{staticClass:"col-12 col-lg-7 col-md-7 col-sm-12 m-auto"},[r("fb-signin-button",{staticClass:"btn btn-submit btn-facebook cursor mr-2 mb-2",attrs:{params:t.fbSignInParams},on:{success:t.onSignInFacebookSuccess,error:t.onSignInFacebookError}},[t._v("\r\n                        "+t._s(t.$t("jwork.facebook_login"))+"\r\n                    ")]),t._v(" "),r("g-signin-button",{staticClass:"btn btn-submit btn-google cursor",attrs:{params:t.googleSignInParams},on:{success:t.onSignInGoogleSuccess,error:t.onSignInGoogleError}},[t._v("\r\n                        "+t._s(t.$t("jwork.google_login"))+"\r\n                    ")])],1)]),t._v(" "),r("div",{staticClass:"col-12 col-lg-12 col-md-12 col-sm-12"},[r("div",{staticClass:"form-group"},[r("p",{staticClass:"intro-form-sign-in text-center"},[t._v("\r\n                        ("),r("span",{staticClass:"text-color"},[t._v("*")]),t._v(")"+t._s(t.$t("jwork.create_account"))+":"),r("a",{attrs:{href:t.getRouteLink("register",{type:t.type})}},[r("span",{staticClass:"text-color"},[t._v(t._s(t.$t("jwork.signupNew")))])])])])])],1)])])},[],!1,null,null,null);e.default=c.exports},CFnI:function(t,e,r){(t.exports=r("I1BE")(!1)).push([t.i,"\n.forgot-password {\r\n    position: relative;\r\n    z-index: 1000;\r\n    margin-top: -33px;\n}\n.cursor{\r\n    cursor: pointer;\n}\r\n",""])},XZhv:function(t,e,r){"use strict";var s=r("5u4H");r.n(s).a}}]);