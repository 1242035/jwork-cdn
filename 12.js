(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{cA1W:function(t,a,i){"use strict";var e=i("mv8Q");i.n(e).a},mv8Q:function(t,a,i){var e=i("pYDe");"string"==typeof e&&(e=[[t.i,e,""]]);var s={hmr:!0,transform:void 0,insertInto:void 0};i("aET+")(e,s);e.locals&&(t.exports=e.locals)},pYDe:function(t,a,i){(t.exports=i("I1BE")(!1)).push([t.i,"\n.acticle-new-candidate .info .title > span {\r\n    color: #1e1e1e;\r\n    font-size: 16px;\r\n    font-weight: 600;\n}\r\n",""])},ti2E:function(t,a,i){"use strict";i.r(a);var e=i("gR0X"),s=(i("L2JU"),{name:"EmployListChat",props:["job","onStateChange"],components:{Avatar:i("m/BY").default},data:function(){return{activeTab:1,arrChat:[],isShowChildrenTab:1}},watch:{onStateChange:function(t){null!=t&&this.getChatListByPost()}},mounted:function(){this.getChatListByPost()},computed:{arrApplication:function(){if(null!=this.arrChat){var t=[];return this.arrChat.map(function(a){1==a.postApplyStatus&&t.push(a)}),t}return[]},arrReception:function(){if(null!=this.arrChat){var t=[];return this.arrChat.map(function(a){2==a.postApplyStatus&&t.push(a)}),t}return[]},arrRecruiting:function(){if(null!=this.arrChat){var t=[];return this.arrChat.map(function(a){3==a.postApplyStatus&&t.push(a)}),t}return[]},arrReject:function(){if(null!=this.arrChat){var t=[];return this.arrChat.map(function(a){4==a.postApplyStatus&&t.push(a)}),t}return[]}},methods:{getListConversion:function(){var t=this.getListConversionComplete;this.$store.dispatch("chat/getListConversationByMemberid",{params:{pageIndex:1,pageSize:1e3},callback:t})},getListConversionComplete:function(t,a){if(null==t&&null!=a&&null!=a.data&&0==a.data.errorCode)a.data.data},getChatListByPost:function(){var t=this;this.getChatList(0,function(a,i){null==a&&null!=i&&null!=i.data&&0==i.data.errorCode&&(t.arrChat=i.data.data,null!=t.arrChat&&t.arrChat.length>0&&null!=t.arrApplication[0]&&t.$emit("onInterview",t.arrApplication[0]))})},getApplicationList:function(){status=1;var t=this;this.getChatList(status,function(a,i){null==a&&null!=i&&null!=i.data&&0==i.data.errorCode&&(t.arrApplication=i.data.data,null!=t.arrApplication&&t.arrApplication.length>0&&t.onItemProfile(t.arrApplication[0]))})},getReceptionList:function(){status=2;var t=this;this.getChatList(status,function(a,i){null==a&&null!=i&&null!=i.data&&0==i.data.errorCode&&(t.arrReception=i.data.data)})},getRecruitingList:function(){status=3;var t=this;this.getChatList(status,function(a,i){null==a&&null!=i&&null!=i.data&&0==i.data.errorCode&&(t.arrRecruiting=i.data.data)})},getRecjectList:function(){status=4;var t=this;this.getChatList(status,function(a,i){null==a&&null!=i&&null!=i.data&&0==i.data.errorCode&&(t.arrReject=i.data.data)})},getChatList:function(t,a){e.e.searchCandidateEmployerPostApplyByEmployer({pageIndex:1,pageSize:1e3},a)},getCountDown:function(t){var a="";if(null!=t&&null!=t.lastMessage&&null!=t.lastMessage.lastSend){var i=remainTimeAgo(t.lastMessage.lastSend);i.seconds>0&&(a=i.seconds+" "+$t("jwork.web_second_ago")),i.minutes>0&&(a=i.minutes+" "+$t("jwork.web_minute_ago")),i.hours>0&&(a=i.hours+" "+$t("jwork.web_hour_ago")),i.days>0&&(a=i.days+" "+$t("jwork.web_day_ago"))}return a},onChat:function(t){this.$emit("onChat",t);var a={receiverId:t.id,activeWindow:1,name:t.fullName||t.contactEmail,avatar:t.avatar};this.$store.dispatch("chat/setReceiverId",a)},onItemProfile:function(t,a){this.$emit("onInterview",t),this.onChat(t)},onToCommit:function(){}}}),n=(i("cA1W"),i("KHd+")),r=Object(n.a)(s,function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("div",{staticClass:"wrap-new-candidate",attrs:{id:"rap-new-candidate"}},[i("div",{staticClass:"row list-candi text-center"},[i("div",{staticClass:"col-md-4"},[i("a",{staticClass:"item",class:{active:1==t.activeTab},attrs:{href:"#new"},on:{click:function(a){a.preventDefault(),t.activeTab=1}}},[t._v(t._s(t.$t("jwork.web_application_list")))])]),t._v(" "),i("div",{staticClass:"col-md-4 "},[i("a",{staticClass:"item",class:{active:2==t.activeTab},attrs:{href:"#interview"},on:{click:function(a){a.preventDefault(),t.activeTab=2}}},[t._v(t._s(t.$t("jwork.web_reception_list")))])]),t._v(" "),i("div",{staticClass:"col-md-4 "},[i("a",{staticClass:"item",class:{active:3==t.activeTab},attrs:{href:"#decline"},on:{click:function(a){a.preventDefault(),t.activeTab=3}}},[t._v(t._s(t.$t("jwork.web_recruiting_list")))])])]),t._v(" "),i("hr"),t._v(" "),i("ul",{directives:[{name:"show",rawName:"v-show",value:1==t.activeTab,expression:"activeTab == 1"}],staticClass:"p-0 list",attrs:{id:"new"}},t._l(t.arrApplication,function(a,e){return i("li",{key:"arrApplication-"+e,on:{click:function(i){return t.onItemProfile(a)}}},[i("article",{staticClass:"acticle-new-candidate clearfix"},[i("div",{staticClass:"img-thumb"},[i("span",{staticClass:"image",attrs:{title:""}},[i("Avatar",{attrs:{avatar:a.avatar,name:a.fullName}})],1)]),t._v(" "),i("div",{staticClass:"info pt-1"},[i("h3",{staticClass:"title mb-2",attrs:{"data-id":a.id}},[i("span",[t._v(t._s(a.fullName?a.fullName:a.contactEmail?a.contactEmail:" "))])]),t._v(" "),i("div",{staticClass:"wrap-meta d-flex"},[i("div",{staticClass:"star-rating mr-auto"},[i("p",{staticClass:"intro"},[t._v(t._s(a.employerPostTitle?a.employerPostTitle:""))])]),t._v(" "),i("div",{staticClass:"time-cmt"},[t._v(t._s(t.getCountDown(a)))])])])])])}),0),t._v(" "),i("ul",{directives:[{name:"show",rawName:"v-show",value:2==t.activeTab,expression:"activeTab == 2"}],staticClass:"p-0 list",attrs:{id:"interview"}},t._l(t.arrReception,function(a,e){return i("li",{key:"arrReception-"+e,on:{click:function(i){return t.onItemProfile(a)}}},[i("article",{staticClass:"acticle-new-candidate clearfix"},[i("div",{staticClass:"img-thumb"},[i("span",{staticClass:"image",attrs:{title:""}},[i("Avatar",{attrs:{avatar:a.avatar,name:a.fullName}})],1)]),t._v(" "),i("div",{staticClass:"info pt-1"},[i("h3",{staticClass:"title mb-2",attrs:{"data-id":a.id}},[i("span",[t._v(t._s(a.fullName?a.fullName:a.contactEmail?a.contactEmail:" "))])]),t._v(" "),i("div",{staticClass:"wrap-meta d-flex"},[i("div",{staticClass:"star-rating mr-auto"},[i("p",{staticClass:"intro"},[t._v(t._s(a.employerPostTitle?a.employerPostTitle:""))])]),t._v(" "),i("div",{staticClass:"time-cmt"},[t._v(t._s(t.getCountDown(a)))])])])])])}),0),t._v(" "),i("ul",{directives:[{name:"show",rawName:"v-show",value:3==t.activeTab,expression:"activeTab == 3"}],staticClass:"p-0 list",attrs:{id:"decline"}},[i("li",{staticClass:"d-flex pb-3"},[i("label",{staticClass:"label-checkbox m-auto "},[t._v(t._s(t.$t("jwork.web_job_recruiting"))+"\n                "),i("input",{directives:[{name:"model",rawName:"v-model.number",value:t.isShowChildrenTab,expression:"isShowChildrenTab",modifiers:{number:!0}}],attrs:{type:"radio",value:"1"},domProps:{checked:t._q(t.isShowChildrenTab,t._n("1"))},on:{change:function(a){t.isShowChildrenTab=t._n("1")}}}),t._v(" "),i("span",{staticClass:"checkmark"})]),t._v(" "),i("label",{staticClass:"label-checkbox m-auto "},[t._v(t._s(t.$t("jwork.web_job_reject"))+"\n                "),i("input",{directives:[{name:"model",rawName:"v-model.number",value:t.isShowChildrenTab,expression:"isShowChildrenTab",modifiers:{number:!0}}],attrs:{type:"radio",value:"2"},domProps:{checked:t._q(t.isShowChildrenTab,t._n("2"))},on:{change:function(a){t.isShowChildrenTab=t._n("2")}}}),t._v(" "),i("span",{staticClass:"checkmark"})])]),t._v(" "),t._l(t.arrRecruiting,function(a,e){return i("li",{directives:[{name:"show",rawName:"v-show",value:1==t.isShowChildrenTab,expression:"isShowChildrenTab == 1"}],key:"arrRecruiting-"+e,on:{click:function(i){return t.onItemProfile(a)}}},[i("article",{staticClass:"acticle-new-candidate clearfix"},[i("div",{staticClass:"img-thumb"},[i("span",{staticClass:"image",attrs:{title:""}},[i("Avatar",{attrs:{avatar:a.avatar,name:a.fullName}})],1)]),t._v(" "),i("div",{staticClass:"info pt-1"},[i("h3",{staticClass:"title mb-2",attrs:{"data-id":a.id}},[i("span",[t._v(t._s(a.fullName?a.fullName:a.contactEmail?a.contactEmail:" "))])]),t._v(" "),i("div",{staticClass:"wrap-meta d-flex"},[i("div",{staticClass:"star-rating mr-auto"},[i("p",{staticClass:"intro"},[t._v(t._s(a.employerPostTitle?a.employerPostTitle:""))])]),t._v(" "),i("div",{staticClass:"time-cmt"},[t._v(t._s(t.getCountDown(a)))])])])])])}),t._v(" "),t._l(t.arrReject,function(a,e){return i("li",{directives:[{name:"show",rawName:"v-show",value:2==t.isShowChildrenTab,expression:"isShowChildrenTab == 2"}],key:e,on:{click:function(i){return t.onItemProfile(a)}}},[i("article",{staticClass:"acticle-new-candidate clearfix"},[i("div",{staticClass:"img-thumb"},[i("span",{staticClass:"image",attrs:{title:""}},[i("Avatar",{attrs:{avatar:a.avatar,name:a.fullName}})],1)]),t._v(" "),i("div",{staticClass:"info pt-1"},[i("h3",{staticClass:"title mb-2",attrs:{"data-id":a.id}},[i("span",[t._v(t._s(a.fullName?a.fullName:a.contactEmail?a.contactEmail:" "))])]),t._v(" "),i("div",{staticClass:"wrap-meta d-flex"},[i("div",{staticClass:"star-rating mr-auto"},[i("p",{staticClass:"intro"},[t._v(t._s(a.employerPostTitle?a.employerPostTitle:""))])]),t._v(" "),i("div",{staticClass:"time-cmt"},[t._v(t._s(t.getCountDown(a)))])])])])])})],2)])},[],!1,null,null,null);a.default=r.exports}}]);