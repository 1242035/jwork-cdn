(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{"+B6k":function(t,e,a){(t.exports=a("I1BE")(!1)).push([t.i,"\n.candi-profile .acticle-new-candidate .img-thumb div{\r\n    top:18px !important;\r\n    background: none;\n}\n.acticle-new-candidate .info{\r\n    margin:auto;\n}\n.candidate-page .detail{\r\n    height: 64px;\r\n    overflow: hidden;\n}\n.acticle-new-candidate .info .title > span {\r\n    color: #1e1e1e;\r\n    font-size: 16px;\r\n    font-weight: 600;\n}\r\n",""])},"+m01":function(t,e,a){"use strict";var i=a("mXVi");a.n(i).a},LKl1:function(t,e,a){var i=a("+B6k");"string"==typeof i&&(i=[[t.i,i,""]]);var n={hmr:!0,transform:void 0,insertInto:void 0};a("aET+")(i,n);i.locals&&(t.exports=i.locals)},LdDB:function(t,e,a){(t.exports=a("I1BE")(!1)).push([t.i,"\n.el-input__prefix{\r\n    right:5px !important;\r\n    left: unset;\n}\n.el-date-editor.el-input, .el-date-editor.el-input__inner {\r\n    width: 100% !important;\n}\n.el-input__inner{\r\n    border: none !important;\n}\n.el-input--prefix .el-input__inner {\r\n    padding-left: 0px;\r\n    margin-left: 0px;\n}\r\n",""])},ZUKF:function(t,e,a){"use strict";var i=a("LKl1");a.n(i).a},mXVi:function(t,e,a){var i=a("LdDB");"string"==typeof i&&(i=[[t.i,i,""]]);var n={hmr:!0,transform:void 0,insertInto:void 0};a("aET+")(i,n);i.locals&&(t.exports=i.locals)},vS54:function(t,e,a){"use strict";a.r(e);var i=a("L2JU"),n=a("QIwM");function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}var s={name:"CandidateBasicInfo",props:{item:{type:Object,required:!0}},components:{VueFastSelect:a.n(n).a},validations:{},watch:{elem:function(t){this.item=_.merge(this.item,this.elem)}},data:function(){return{}},computed:function(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{},i=Object.keys(a);"function"==typeof Object.getOwnPropertySymbols&&(i=i.concat(Object.getOwnPropertySymbols(a).filter(function(t){return Object.getOwnPropertyDescriptor(a,t).enumerable}))),i.forEach(function(e){r(t,e,a[e])})}return t}({},Object(i.b)({nationals:function(t){return t.resource.resources.data.national},stations:function(t){return t.resource.stations.data},provinces:function(t){return t.resource.resources.data.province},districts:function(t){return t.resource.resources.data.district}}),{arrNational:function(){var t=_.clone(this.nationals),e=[];return _.map(t,function(t){if(1==t.status)return e.push(t),t}),e},arrStation:function(){var t=this;if(null!=this.item.provinceId&&this.item.provinceId>0){var e=_.clone(this.stations),a=[];return _.map(e,function(e){if(1==e.status&&e.provinceId==t.item.provinceId)return a.push(e),e}),a}return[]},arrProvince:function(){var t=this;if(null!=this.item.areaId&&this.item.areaId>0){var e=_.clone(this.provinces),a=[];return _.map(e,function(e){if(1==e.status&&e.areaId==t.item.areaId)return a.push(e),e}),a}return _.clone(this.provinces)},arrDistrict:function(){var t=this;if(null!=this.item.provinceId&&this.item.provinceId>0){var e=_.clone(this.districts),a=[];return _.map(e,function(e){if(1==e.status&&e.provinceId==t.item.provinceId)return a.push(e),e}),a}return[]},location:function(){var t=[],e=this;if(this.item.provinceId>0){var a=_.findIndex(this.arrProvince,function(t){return t.id==e.item.provinceId});a>=0&&t.push(this.arrProvince[a].name)}if(this.item.districtId>0){var i=_.findIndex(this.arrDistrict,function(t){return t.id==e.item.districtId});i>=0&&t.push(this.arrDistrict[i].name)}return null!=this.item.address&&this.item.address.length>0&&t.push(this.item.address),t.length>0?t.join(", "):$t("jwork.japan_address")}}),mounted:function(){},methods:{getProvinces:function(){this.$store.dispatch("resource/getAllProvince",{})},getDistricts:function(){this.$store.dispatch("resource/getAllDistrict",{})},getNationals:function(){this.$store.dispatch("resource/getAllNational",{})},saveBasicInfo:function(){this.$emit("onSave",this.item)}}},o=(a("+m01"),a("KHd+")),l=Object(o.a)(s,function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"ab"},[a("div",{staticClass:"head text-center"},[a("img",{staticClass:"img-fluid mb-3",attrs:{src:"/imgs-fix/about1.png"}}),t._v(" "),a("p",[t._v(t._s(t.$t("jwork.basic_information")))])]),t._v(" "),a("div",{staticClass:"content"},[a("div",{staticClass:"form-group about col-md-12 col-lg-12 col-sm-12 col-12"},[a("label",{attrs:{for:""}},[t._v(t._s(t.$t("jwork.Name")))]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.item.fullName,expression:"item.fullName"}],staticClass:"form-control about input-text",attrs:{type:"text"},domProps:{value:t.item.fullName},on:{input:function(e){e.target.composing||t.$set(t.item,"fullName",e.target.value)}}})]),t._v(" "),a("div",{staticClass:"form-group about col-md-12 col-lg-12 col-sm-12 col-12"},[a("label",{attrs:{for:""}},[t._v(t._s(t.$t("jwork.gender")))]),t._v(" "),a("select",{directives:[{name:"model",rawName:"v-model.number",value:t.item.gender,expression:"item.gender",modifiers:{number:!0}}],staticClass:"form-control",attrs:{type:"text"},on:{change:function(e){var a=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(e){var a="_value"in e?e._value:e.value;return t._n(a)});t.$set(t.item,"gender",e.target.multiple?a:a[0])}}},[a("option",{attrs:{value:"0"}},[t._v(t._s(t.$t("jwork.web_please_select")))]),t._v(" "),a("option",{attrs:{value:"1"}},[t._v(t._s(t.$t("jwork.male")))]),t._v(" "),a("option",{attrs:{value:"2"}},[t._v(t._s(t.$t("jwork.female")))]),t._v(" "),a("option",{attrs:{value:"3"}},[t._v(t._s(t.$t("jwork.web_gender_other")))])])]),t._v(" "),a("div",{staticClass:"form-group about col-md-12 col-lg-12 col-sm-12 col-12"},[a("label",{attrs:{for:""}},[t._v(t._s(t.$t("jwork.birthday")))]),t._v(" "),a("el-date-picker",{staticClass:"form-control about input-text",attrs:{type:"date",placeholder:""},model:{value:t.item.birthday,callback:function(e){t.$set(t.item,"birthday",e)},expression:"item.birthday"}})],1),t._v(" "),a("div",{staticClass:"form-group about col-md-12 col-lg-12 col-sm-12 col-12"},[a("label",{attrs:{for:""}},[t._v(t._s(t.$t("jwork.National")))]),t._v(" "),a("select",{directives:[{name:"model",rawName:"v-model.number",value:t.item.nationalId,expression:"item.nationalId",modifiers:{number:!0}}],staticClass:"form-control",attrs:{type:"text"},on:{change:function(e){var a=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(e){var a="_value"in e?e._value:e.value;return t._n(a)});t.$set(t.item,"nationalId",e.target.multiple?a:a[0])}}},[a("option",{attrs:{value:"0"}},[t._v(t._s(t.$t("jwork.web_please_select")))]),t._v(" "),t._l(t.arrNational,function(e,i){return a("option",{key:i,domProps:{value:e.id}},[t._v(t._s(e.name))])})],2)]),t._v(" "),a("div",{staticClass:"form-group about col-md-12 col-lg-12 col-sm-12 col-12"},[a("label",{attrs:{for:""}},[t._v(t._s(t.$t("jwork.japan_address")))]),t._v(" "),a("button",{staticClass:"form-control location text-left",attrs:{type:"button","data-toggle":"modal","data-target":"#candidateLocation"}},[t._v("\n                    "+t._s(t.location)+"\n                ")])]),t._v(" "),a("div",{staticClass:"form-group about col-md-12 col-lg-12 col-sm-12 col-12"},[a("label",{attrs:{for:""}},[t._v(t._s(t.$t("jwork.nearest_station")))]),t._v(" "),a("vue-fast-select",{staticClass:"form-control train",attrs:{defaultText:t.$t("jwork.web_please_select"),items:t.arrStation,"key-field":"id","value-field":"name"},model:{value:t.item.stationId,callback:function(e){t.$set(t.item,"stationId",e)},expression:"item.stationId"}})],1)]),t._v(" "),a("div",{staticClass:"text-center save"},[a("button",{staticClass:"btn btn-view-more",attrs:{role:"button"},on:{click:function(e){return e.preventDefault(),t.saveBasicInfo(e)}}},[a("i",{staticClass:"fas fa-check mr-2"}),t._v("  "+t._s(t.$t("jwork.Save"))+" \n            ")])])]),t._v(" "),a("div",{staticClass:"modal fade",attrs:{id:"candidateLocation",role:"dialog"}},[a("div",{staticClass:"modal-dialog modal-lg",attrs:{role:"document"}},[a("div",{staticClass:"modal-content"},[a("div",{staticClass:"modal-header",staticStyle:{background:"#f4f6f9"}},[a("h5",{staticClass:"modal-title"},[t._v(t._s(t.$t("jwork.select_location")))]),t._v(" "),t._m(0)]),t._v(" "),a("div",{staticClass:"modal-body "},[a("div",{staticClass:"form-group col-md-12 col-lg-12 col-sm-12 col-12 form-inline"},[a("div",{staticClass:"col-6 pl-0"},[a("select",{directives:[{name:"model",rawName:"v-model.number",value:t.item.provinceId,expression:"item.provinceId",modifiers:{number:!0}}],staticClass:"form-control  w-100",on:{change:function(e){var a=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(e){var a="_value"in e?e._value:e.value;return t._n(a)});t.$set(t.item,"provinceId",e.target.multiple?a:a[0])}}},[a("option",{attrs:{value:"0"}},[t._v(t._s(t.$t("jwork.web_please_select")))]),t._v(" "),t._l(t.arrProvince,function(e,i){return a("option",{key:i,domProps:{value:e.id}},[t._v(t._s(e.name))])})],2)]),t._v(" "),a("div",{staticClass:"col-6 pr-0"},[a("select",{directives:[{name:"model",rawName:"v-model.number",value:t.item.districtId,expression:"item.districtId",modifiers:{number:!0}}],staticClass:"form-control w-100",attrs:{type:"text"},on:{change:function(e){var a=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(e){var a="_value"in e?e._value:e.value;return t._n(a)});t.$set(t.item,"districtId",e.target.multiple?a:a[0])}}},[a("option",{attrs:{value:"0"}},[t._v(t._s(t.$t("jwork.web_please_select")))]),t._v(" "),t._l(t.arrDistrict,function(e,i){return a("option",{key:i,domProps:{value:e.id}},[t._v(t._s(e.name))])})],2)])]),t._v(" "),a("div",{staticClass:"form-group col-md-12 col-lg-12 col-sm-12 col-12"},[a("div",{staticClass:"mb-3"},[a("textarea",{directives:[{name:"model",rawName:"v-model",value:t.item.address,expression:"item.address"}],staticClass:"form-control p-3",attrs:{rows:"8",placeholder:t.$t("jwork.candidateAddress")},domProps:{value:t.item.address},on:{input:function(e){e.target.composing||t.$set(t.item,"address",e.target.value)}}})])]),t._v(" "),a("p",[t._v(t._s(t.$t("jwork.candidate_location_tip")))])]),t._v(" "),a("div",{staticClass:"modal-footer border-0"},[a("div",{staticClass:"form-group col-md-12 col-lg-12 col-sm-12 col-12"},[a("button",{staticClass:"btn btn-save",attrs:{"data-dismiss":"modal"}},[t._v(t._s(t.$t("jwork.Save")))])])])])])])])},[function(){var t=this.$createElement,e=this._self._c||t;return e("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal"}},[e("i",{staticClass:"fas fa-times"})])}],!1,null,null,null).exports,c=a("inFS");function d(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}var u={name:"CandidatePage",components:{CandidateBasicInfo:l,CandidateChatList:function(){return Promise.all([a.e(0),a.e(23)]).then(a.bind(null,"dtc6"))},CandidateContactInfo:function(){return Promise.all([a.e(0),a.e(24)]).then(a.bind(null,"7dS9"))},CandidateLanguageSkill:function(){return Promise.all([a.e(0),a.e(27)]).then(a.bind(null,"GuMZ"))},CandidateMemberCard:function(){return a.e(9).then(a.bind(null,"tsLD"))},CandidateHopeWork:function(){return a.e(26).then(a.bind(null,"fumN"))},CandidateLearningHistory:function(){return a.e(1).then(a.bind(null,"C1bL"))},CandidateCareerHistory:function(){return a.e(1).then(a.bind(null,"C1bL"))},CandidateIntroVideo:function(){return Promise.all([a.e(0),a.e(8)]).then(a.bind(null,"ULh8"))},AcceptJob:function(){return Promise.all([a.e(0),a.e(22)]).then(a.bind(null,"KRaJ"))},RecruitmentJob:function(){return Promise.all([a.e(0),a.e(28)]).then(a.bind(null,"vF5n"))},FollowJob:function(){return Promise.all([a.e(0),a.e(25)]).then(a.bind(null,"ZmXC"))},AppChatManager:function(){return a.e(0).then(a.bind(null,"VMTC"))}},data:function(){return{index:1,uploadFieldName:"file",isUploading:!1,receiverId:129,name:"candidate"}},computed:function(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{},i=Object.keys(a);"function"==typeof Object.getOwnPropertySymbols&&(i=i.concat(Object.getOwnPropertySymbols(a).filter(function(t){return Object.getOwnPropertyDescriptor(a,t).enumerable}))),i.forEach(function(e){d(t,e,a[e])})}return t}({},Object(i.b)({basicInfo:function(t){return t.candidate.basicInfo},alert:function(t){return t.alert},accountId:function(t){return t.account.id}}),{userName:function(){return this.basicInfo.data.fullName||this.basicInfo.data.email||this.basicInfo.data.contactEmail},backLink:function(){return window.__ENV__.previous||getRouteLink("listJob")}}),mounted:function(){this.getBasicInfo(),this.getAllResource(),this.getStations()},methods:{onChat:function(){this.$store.dispatch("chat/setReceiverId",{receiverId:129,name:129,status:1})},onChangeAvatar:function(){this.$refs.file.click()},onFileChange:function(t,e){var a=this,i=e[0];if(e.length>0){var n=i.size/1024/1024;if(i.type.match("image.*"))if(n>1)this.$store.dispatch("alert/error","Your file is too big! Please select an image under 1MB");else{var r=new FormData;r.append(t,i),this.isUploading=!0,c.a.upload(r).then(function(t){null!=t&&null!=t.data&&null!=t.data.code&&200==t.data.code&&(a.isUploading=!1,a.$store.dispatch("candidate/updateAvatar",t.data.url),a.$nextTick(function(){this.$store.dispatch("candidate/updateInfo",this.basicInfo.data)}))}).catch(function(t){a.isUploading=!1})}else this.$store.dispatch("alert/error","Please choose an image file")}},getBasicInfo:function(){this.$store.dispatch("candidate/getInfo",{id:this.accountId})},getAllResource:function(){this.$store.dispatch("resource/getAllResource",{})},getStations:function(){this.$store.dispatch("resource/getAllStation",{})},onTabClick:function(t){this.index=t},onSave:function(t){var e=t,a=this.onUpdateUserInfoCallback;this.$store.dispatch("candidate/updateUserInfo",{params:e,callback:a})},onUpdateUserInfoCallback:function(t){var e=this.userName;try{$(".header-nav-name").text(e)}catch(t){console.log(t)}},onSaveLanguageSkill:function(t){if(null!=t){var e=null!=t.id&&t.id>0?"languageUpdate":"languageAdd";this.$store.dispatch("candidate/"+e,t)}},getAvatar:function(){return null!=this.basicInfo.data&&null!=this.basicInfo.data.avatar?this.basicInfo.data.avatar:window.__ENV__.default_img}}},m=(a("ZUKF"),Object(o.a)(u,function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("section",{staticClass:"page-name py-4 mb-5"},[a("div",{staticClass:"container"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-12 col-lg-12 col-sm-2 col-12"},[a("div",{staticClass:"back"},[a("a",{attrs:{href:t.backLink}},[a("img",{attrs:{src:"/imgs-fix/fa-angle-right.svg"}}),t._v(" "+t._s(t.$t("jwork.return"))+"\r\n                        ")])]),t._v(" "),a("div",{staticClass:"title"},[a("h3",[t._v(t._s(t.$t("jwork.my_page")))])])])])])]),t._v(" "),a("section",{staticClass:"candi-profile"},[a("div",{staticClass:"container"},[a("div",{staticClass:"row mb-4"},[a("div",{staticClass:"col-lg-4 col-md-4 col-sm-4 col-12"},[a("div",{staticClass:"tab-profile"},[a("h5",{staticClass:"mb-4"},[t._v(t._s(t.$t("jwork.web_my_profile")))]),t._v(" "),a("article",{staticClass:"acticle-new-candidate clearfix"},[a("div",{directives:[{name:"loading",rawName:"v-loading",value:t.isUploading,expression:"isUploading"}],staticClass:"img-thumb"},[a("a",{staticClass:"image",attrs:{href:"#",title:""},on:{click:function(e){return e.preventDefault(),t.onChangeAvatar(e)}}},[a("img",{staticClass:"img-fluid h-100 w-100",attrs:{src:t.getAvatar(),alt:""}})]),t._v(" "),a("input",{ref:"file",staticStyle:{display:"none"},attrs:{type:"file",name:t.uploadFieldName},on:{change:function(e){return t.onFileChange(e.target.name,e.target.files)}}})]),t._v(" "),a("div",{staticClass:"info"},[a("h3",{staticClass:"title"},[a("a",{attrs:{href:t.getRouteLink("profile"),title:""}},[t._v(t._s(t.userName))])])])]),t._v(" "),a("hr"),t._v(" "),a("ul",{staticClass:"list-info"},[a("li",{on:{click:function(e){return e.preventDefault(),t.onTabClick(1)}}},[a("img",{staticClass:"img-fluid mr-3",attrs:{src:"/imgs-fix/about1.png"}}),t._v(" "),a("span",[t._v(t._s(t.$t("jwork.basic_information")))]),t._v(" "),a("i",{staticClass:"fas fa-angle-right"})]),t._v(" "),a("li",{on:{click:function(e){return e.preventDefault(),t.onTabClick(2)}}},[a("img",{staticClass:"img-fluid mr-3",attrs:{src:"/imgs-fix/about2.png"}}),t._v(" "),a("span",[t._v(" "+t._s(t.$t("jwork.web_contact_information")))]),t._v(" "),a("i",{staticClass:"fas fa-angle-right"})]),t._v(" "),a("li",{on:{click:function(e){return e.preventDefault(),t.onTabClick(3)}}},[a("img",{staticClass:"img-fluid mr-3",attrs:{src:"/imgs-fix/about3.png"}}),t._v(" "),a("span",[t._v(t._s(t.$t("jwork.language_skills")))]),t._v(" "),a("i",{staticClass:"fas fa-angle-right"})]),t._v(" "),a("li",{on:{click:function(e){return e.preventDefault(),t.onTabClick(4)}}},[a("img",{staticClass:"img-fluid mr-3",attrs:{src:"/imgs-fix/about4.png"}}),t._v(" "),a("span",[t._v(t._s(t.$t("jwork.web_residence_card_info")))]),t._v(" "),a("i",{staticClass:"fas fa-angle-right"})]),t._v(" "),a("hr"),t._v(" "),a("li",{on:{click:function(e){return e.preventDefault(),t.onTabClick(5)}}},[a("img",{staticClass:"img-fluid mr-3",attrs:{src:"/imgs-fix/about5.png"}}),t._v(" "),a("span",[t._v(t._s(t.$t("jwork.web_hope_for_work"))+" ")]),t._v(" "),a("i",{staticClass:"fas fa-angle-right"})]),t._v(" "),a("li",{on:{click:function(e){return e.preventDefault(),t.onTabClick(6)}}},[a("img",{staticClass:"img-fluid mr-3",attrs:{src:"/imgs-fix/about6.png"}}),t._v(" "),a("span",[t._v(t._s(t.$t("jwork.web_academic_background")))]),t._v(" "),a("i",{staticClass:"fas fa-angle-right"})]),t._v(" "),a("li",{on:{click:function(e){return e.preventDefault(),t.onTabClick(7)}}},[a("img",{staticClass:"img-fluid mr-3",attrs:{src:"/imgs-fix/about7.png"}}),t._v(" "),a("span",[t._v(t._s(t.$t("jwork.web_career_history")))]),t._v(" "),a("i",{staticClass:"fas fa-angle-right"})]),t._v(" "),a("li",{on:{click:function(e){return e.preventDefault(),t.onTabClick(8)}}},[a("img",{staticClass:"img-fluid mr-3",attrs:{src:"/imgs-fix/about8.png"}}),t._v(" "),a("span",[t._v(t._s(t.$t("jwork.web_self_introduction_video")))]),t._v(" "),a("i",{staticClass:"fas fa-angle-right"})])])]),t._v(" "),a("CandidateChatList")],1),t._v(" "),a("div",{staticClass:"col-lg-8 col-md-8 col-sm-8 col-12 candidate-page"},[t.alert.message?a("div",{staticClass:"mt-2 mb-2"},[a("el-alert",{attrs:{title:t.alert.message,type:t.alert.type}})],1):t._e(),t._v(" "),1==t.index?a("CandidateBasicInfo",{attrs:{item:t.basicInfo.data},on:{onSave:t.onSave,"update:item":function(e){return t.$set(t.basicInfo,"data",e)}}}):t._e(),t._v(" "),2==t.index?a("CandidateContactInfo",{attrs:{item:t.basicInfo.data},on:{onSave:t.onSave,"update:item":function(e){return t.$set(t.basicInfo,"data",e)}}}):t._e(),t._v(" "),3==t.index?a("CandidateLanguageSkill",{on:{onSave:t.onSaveLanguageSkill}}):t._e(),t._v(" "),4==t.index?a("CandidateMemberCard"):t._e(),t._v(" "),5==t.index?a("CandidateHopeWork",{attrs:{item:t.basicInfo.data},on:{onSave:t.onSave}}):t._e(),t._v(" "),6==t.index?a("CandidateLearningHistory"):t._e(),t._v(" "),7==t.index?a("CandidateCareerHistory"):t._e(),t._v(" "),8==t.index?a("CandidateIntroVideo",{attrs:{item:t.basicInfo.data},on:{onSave:t.onSave,"update:item":function(e){return t.$set(t.basicInfo,"data",e)}}}):t._e(),t._v(" "),a("AcceptJob"),t._v(" "),a("FollowJob"),t._v(" "),a("RecruitmentJob")],1)])])]),t._v(" "),a("AppChatManager")],1)},[],!1,null,null,null));e.default=m.exports}}]);