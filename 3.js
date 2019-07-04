(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[3],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/candidatePage/BasicInfo.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/candidatePage/BasicInfo.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var vue_fast_select__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue-fast-select */ "./node_modules/vue-fast-select/dist/vue-fast-select.js");
/* harmony import */ var vue_fast_select__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(vue_fast_select__WEBPACK_IMPORTED_MODULE_1__);
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//import { required, email } from 'vuelidate/lib/validators'



var onlyPositiveInteger = function onlyPositiveInteger(value) {
  return value !== null && value >= 0;
};

/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'CandidateBasicInfo',
  props: {
    item: {
      type: Object,
      required: true
    }
  },
  components: {
    VueFastSelect: vue_fast_select__WEBPACK_IMPORTED_MODULE_1___default.a
  },
  validations: {
    /*item:{
        fullName: {
            required
        },
        gender: {
            onlyPositiveInteger
        },
        birthday: {
            required
        },
        address: {
            required
        },
        stationId: {
            onlyPositiveInteger
        },
        nationalId: {
            onlyPositiveInteger
        },
        provinceId: {
            onlyPositiveInteger
        },
        districtId: {
            onlyPositiveInteger
        }
    }*/
  },
  watch: {
    elem: function elem(val) {
      this.item = _.merge(this.item, this.elem);
    }
  },
  data: function data() {
    return {};
  },
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapState"])({
    nationals: function nationals(state) {
      return state.resource.resources.data.national;
    },
    stations: function stations(state) {
      return state.resource.stations.data;
    },
    provinces: function provinces(state) {
      return state.resource.resources.data.province;
    },
    districts: function districts(state) {
      return state.resource.resources.data.district;
    }
  }), {
    arrNational: function arrNational() {
      var me = this;

      var arr = _.clone(this.nationals);

      var arrClone = [];

      _.map(arr, function (o) {
        if (o.status == 1) {
          arrClone.push(o);
          return o;
        }
      });

      return arrClone;
    },
    arrStation: function arrStation() {
      var me = this;

      if (this.item.provinceId != null && this.item.provinceId > 0) {
        var arr = _.clone(this.stations);

        var arrClone = [];

        _.map(arr, function (o) {
          if (o.status == 1 && o.provinceId == me.item.provinceId) {
            arrClone.push(o);
            return o;
          }
        });

        return arrClone;
      }

      return [];
    },
    arrProvince: function arrProvince() {
      var me = this;

      if (this.item.areaId != null && this.item.areaId > 0) {
        var arr = _.clone(this.provinces);

        var arrClone = [];

        _.map(arr, function (o) {
          if (o.status == 1 && o.areaId == me.item.areaId) {
            arrClone.push(o);
            return o;
          }
        });

        return arrClone;
      }

      return _.clone(this.provinces);
    },
    arrDistrict: function arrDistrict() {
      var me = this;

      if (this.item.provinceId != null && this.item.provinceId > 0) {
        var arr = _.clone(this.districts);

        var arrClone = [];

        _.map(arr, function (o) {
          if (o.status == 1 && o.provinceId == me.item.provinceId) {
            arrClone.push(o);
            return o;
          }
        });

        return arrClone;
      }

      return [];
    },
    location: function location() {
      var arr = [];
      var me = this;

      if (this.item.provinceId > 0) {
        var i = _.findIndex(this.arrProvince, function (o) {
          return o.id == me.item.provinceId;
        });

        if (i >= 0) {
          arr.push(this.arrProvince[i].name);
        }
      }

      if (this.item.districtId > 0) {
        var ii = _.findIndex(this.arrDistrict, function (o) {
          return o.id == me.item.districtId;
        });

        if (ii >= 0) {
          arr.push(this.arrDistrict[ii].name);
        }
      }

      if (this.item.address != null && this.item.address.length > 0) {
        arr.push(this.item.address);
      }

      return arr.length > 0 ? arr.join(', ') : $t('jwork.japan_address');
    }
  }),
  mounted: function mounted() {//this.getNationals();
    //this.getProvinces();
    //this.getDistricts();
  },
  methods: {
    getProvinces: function getProvinces() {
      this.$store.dispatch('resource/getAllProvince', {});
    },
    getDistricts: function getDistricts() {
      this.$store.dispatch('resource/getAllDistrict', {});
    },
    getNationals: function getNationals() {
      this.$store.dispatch('resource/getAllNational', {});
    },
    saveBasicInfo: function saveBasicInfo() {
      /*if( this.$v.item.$invalid){
          this.$v.item.$touch();
          return;
      }*/
      this.$emit('onSave', this.item);
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/CandidatePage.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/CandidatePage.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_candidatePage_BasicInfo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/candidatePage/BasicInfo */ "./resources/js/components/candidatePage/BasicInfo.vue");
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _services_upload_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/upload.service */ "./resources/js/services/upload.service.js");
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/*
import CandidateChatList from '../components/candidatePage/ChatList';
import CandidateContactInfo from '../components/candidatePage/ContactInfo';
import CandidateLanguageSkill from '../components/candidatePage/LanguageSkill';
import CandidateMemberCard from '../components/candidatePage/MemberCard';
import CandidateHopeWork from '../components/candidatePage/HopeWork';
import CandidateLearningHistory from '../components/candidatePage/LearningHistory';
import CandidateCareerHistory from '../components/candidatePage/CareerHistory';
import CandidateIntroVideo from '../components/candidatePage/IntroVideo';

import AcceptJob from '../components/candidatePage/AcceptJob';
import RecruitmentJob from '../components/candidatePage/RecruitmentJob';
import FollowJob from '../components/candidatePage/FollowJob';
import AppChatManager from '../components/AppChatManager';
*/



/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'CandidatePage',
  components: {
    CandidateBasicInfo: _components_candidatePage_BasicInfo__WEBPACK_IMPORTED_MODULE_0__["default"],
    CandidateChatList: function CandidateChatList() {
      return Promise.all(/*! import() */[__webpack_require__.e("/js/vendor"), __webpack_require__.e(20)]).then(__webpack_require__.bind(null, /*! ../components/candidatePage/ChatList */ "./resources/js/components/candidatePage/ChatList.vue"));
    },
    CandidateContactInfo: function CandidateContactInfo() {
      return Promise.all(/*! import() */[__webpack_require__.e("/js/vendor"), __webpack_require__.e(21)]).then(__webpack_require__.bind(null, /*! ../components/candidatePage/ContactInfo */ "./resources/js/components/candidatePage/ContactInfo.vue"));
    },
    CandidateLanguageSkill: function CandidateLanguageSkill() {
      return Promise.all(/*! import() */[__webpack_require__.e("/js/vendor"), __webpack_require__.e(24)]).then(__webpack_require__.bind(null, /*! ../components/candidatePage/LanguageSkill */ "./resources/js/components/candidatePage/LanguageSkill.vue"));
    },
    CandidateMemberCard: function CandidateMemberCard() {
      return Promise.all(/*! import() */[__webpack_require__.e("/js/vendor"), __webpack_require__.e(9)]).then(__webpack_require__.bind(null, /*! ../components/candidatePage/MemberCard */ "./resources/js/components/candidatePage/MemberCard.vue"));
    },
    CandidateHopeWork: function CandidateHopeWork() {
      return __webpack_require__.e(/*! import() */ 23).then(__webpack_require__.bind(null, /*! ../components/candidatePage/HopeWork */ "./resources/js/components/candidatePage/HopeWork.vue"));
    },
    CandidateLearningHistory: function CandidateLearningHistory() {
      return __webpack_require__.e(/*! import() */ 0).then(__webpack_require__.bind(null, /*! ../components/candidatePage/LearningHistory */ "./resources/js/components/candidatePage/LearningHistory.vue"));
    },
    CandidateCareerHistory: function CandidateCareerHistory() {
      return __webpack_require__.e(/*! import() */ 0).then(__webpack_require__.bind(null, /*! ../components/candidatePage/LearningHistory */ "./resources/js/components/candidatePage/LearningHistory.vue"));
    },
    CandidateIntroVideo: function CandidateIntroVideo() {
      return Promise.all(/*! import() */[__webpack_require__.e("/js/vendor"), __webpack_require__.e(8)]).then(__webpack_require__.bind(null, /*! ../components/candidatePage/IntroVideo */ "./resources/js/components/candidatePage/IntroVideo.vue"));
    },
    AcceptJob: function AcceptJob() {
      return Promise.all(/*! import() */[__webpack_require__.e("/js/vendor"), __webpack_require__.e(19)]).then(__webpack_require__.bind(null, /*! ../components/candidatePage/AcceptJob */ "./resources/js/components/candidatePage/AcceptJob.vue"));
    },
    RecruitmentJob: function RecruitmentJob() {
      return Promise.all(/*! import() */[__webpack_require__.e("/js/vendor"), __webpack_require__.e(25)]).then(__webpack_require__.bind(null, /*! ../components/candidatePage/RecruitmentJob */ "./resources/js/components/candidatePage/RecruitmentJob.vue"));
    },
    FollowJob: function FollowJob() {
      return Promise.all(/*! import() */[__webpack_require__.e("/js/vendor"), __webpack_require__.e(22)]).then(__webpack_require__.bind(null, /*! ../components/candidatePage/FollowJob */ "./resources/js/components/candidatePage/FollowJob.vue"));
    },
    AppChatManager: function AppChatManager() {
      return __webpack_require__.e(/*! import() */ "/js/vendor").then(__webpack_require__.bind(null, /*! ../components/AppChatManager */ "./resources/js/components/AppChatManager.vue"));
    }
  },
  data: function data() {
    return {
      index: 1,
      uploadFieldName: 'file',
      isUploading: false,
      receiverId: 129,
      name: 'candidate'
    };
  },
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_1__["mapState"])({
    basicInfo: function basicInfo(state) {
      return state.candidate.basicInfo;
    },
    alert: function alert(state) {
      return state.alert;
    },
    accountId: function accountId(state) {
      return state.account.id;
    }
  }), {
    userName: function userName() {
      return this.basicInfo.data.fullName || this.basicInfo.data.email || this.basicInfo.data.contactEmail;
    },
    backLink: function backLink() {
      return window.__ENV__.previous || getRouteLink('listJob');
    }
  }),
  mounted: function mounted() {
    this.getBasicInfo();
    this.getAllResource();
    this.getStations(); //this.onChat()
  },
  methods: {
    onChat: function onChat() {
      this.$store.dispatch('chat/setReceiverId', {
        receiverId: 129,
        name: 129,
        status: 1
      }); //this.$store.dispatch('chat/setActiveWindow', { receiverId: 123, status: 1 });
    },
    onChangeAvatar: function onChangeAvatar() {
      this.$refs.file.click();
    },
    onFileChange: function onFileChange(fieldName, file) {
      var _this = this;

      var maxSize = 1024;
      var imageFile = file[0];

      if (file.length > 0) {
        var size = imageFile.size / maxSize / maxSize;

        if (!imageFile.type.match('image.*')) {
          this.$store.dispatch('alert/error', 'Please choose an image file');
        } else if (size > 1) {
          this.$store.dispatch('alert/error', 'Your file is too big! Please select an image under 1MB');
        } else {
          // Append file into FormData and turn file into image URL
          var formData = new FormData(); //let imageURL = URL.createObjectURL(imageFile)

          formData.append(fieldName, imageFile); // Emit the FormData and image URL to the parent component
          //this.$emit('input', { formData, imageURL })

          this.isUploading = true;
          _services_upload_service__WEBPACK_IMPORTED_MODULE_2__["uploadService"].upload(formData).then(function (response) {
            if (response != null && response.data != null && response.data.code != null && response.data.code == 200) {
              //this.item.avatar = response.data.url;
              _this.isUploading = false;

              _this.$store.dispatch('candidate/updateAvatar', response.data.url);

              _this.$nextTick(function () {
                this.$store.dispatch('candidate/updateInfo', this.basicInfo.data);
              });
            }
          })["catch"](function (error) {
            _this.isUploading = false;
          });
        }
      }
    },
    getBasicInfo: function getBasicInfo() {
      this.$store.dispatch('candidate/getInfo', {
        id: this.accountId
      });
    },
    getAllResource: function getAllResource() {
      this.$store.dispatch('resource/getAllResource', {});
    },
    getStations: function getStations() {
      this.$store.dispatch('resource/getAllStation', {});
    },
    onTabClick: function onTabClick(ind) {
      this.index = ind;
    },
    onSave: function onSave(item) {
      var params = item;
      var callback = this.onUpdateUserInfoCallback;
      this.$store.dispatch('candidate/updateUserInfo', {
        params: params,
        callback: callback
      });
    },
    onUpdateUserInfoCallback: function onUpdateUserInfoCallback(response) {
      var fullName = this.userName;

      try {
        $('.header-nav-name').text(fullName);
      } catch (e) {
        console.log(e);
      }
    },
    onSaveLanguageSkill: function onSaveLanguageSkill(item) {
      if (item != null) {
        var action = item.id != null && item.id > 0 ? 'languageUpdate' : 'languageAdd';
        this.$store.dispatch('candidate/' + action, item);
      }
    },
    getAvatar: function getAvatar() {
      return this.basicInfo.data != null && this.basicInfo.data.avatar != null ? this.basicInfo.data.avatar : window.__ENV__.default_img;
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/candidatePage/BasicInfo.vue?vue&type=style&index=0&lang=css&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--5-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--5-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/candidatePage/BasicInfo.vue?vue&type=style&index=0&lang=css& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.el-input__prefix{\r\n    right:5px !important;\r\n    left: unset;\n}\n.el-date-editor.el-input, .el-date-editor.el-input__inner {\r\n    width: 100% !important;\n}\n.el-input__inner{\r\n    border: none !important;\n}\n.el-input--prefix .el-input__inner {\r\n    padding-left: 0px;\r\n    margin-left: 0px;\n}\r\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/CandidatePage.vue?vue&type=style&index=0&lang=css&":
/*!**************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--5-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--5-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/CandidatePage.vue?vue&type=style&index=0&lang=css& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.candi-profile .acticle-new-candidate .img-thumb div{\r\n    top:18px !important;\r\n    background: none;\n}\n.acticle-new-candidate .info{\r\n    margin:auto;\n}\n.candidate-page .detail{\r\n    height: 64px;\r\n    overflow: hidden;\n}\n.acticle-new-candidate .info .title > span {\r\n    color: #1e1e1e;\r\n    font-size: 16px;\r\n    font-weight: 600;\n}\r\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/candidatePage/BasicInfo.vue?vue&type=style&index=0&lang=css&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--5-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--5-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/candidatePage/BasicInfo.vue?vue&type=style&index=0&lang=css& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader??ref--5-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--5-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./BasicInfo.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/candidatePage/BasicInfo.vue?vue&type=style&index=0&lang=css&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/CandidatePage.vue?vue&type=style&index=0&lang=css&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--5-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--5-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/CandidatePage.vue?vue&type=style&index=0&lang=css& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader??ref--5-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--5-2!../../../node_modules/vue-loader/lib??vue-loader-options!./CandidatePage.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/CandidatePage.vue?vue&type=style&index=0&lang=css&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/candidatePage/BasicInfo.vue?vue&type=template&id=e825d278&":
/*!**************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/candidatePage/BasicInfo.vue?vue&type=template&id=e825d278& ***!
  \**************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _c("div", { staticClass: "ab" }, [
      _c("div", { staticClass: "head text-center" }, [
        _c("img", {
          staticClass: "img-fluid mb-3",
          attrs: { src: "/imgs-fix/about1.png" }
        }),
        _vm._v(" "),
        _c("p", [_vm._v(_vm._s(_vm.$t("jwork.basic_information")))])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "content" }, [
        _c(
          "div",
          {
            staticClass: "form-group about col-md-12 col-lg-12 col-sm-12 col-12"
          },
          [
            _c("label", { attrs: { for: "" } }, [
              _vm._v(_vm._s(_vm.$t("jwork.Name")))
            ]),
            _vm._v(" "),
            _c("input", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.item.fullName,
                  expression: "item.fullName"
                }
              ],
              staticClass: "form-control about input-text",
              attrs: { type: "text" },
              domProps: { value: _vm.item.fullName },
              on: {
                input: function($event) {
                  if ($event.target.composing) {
                    return
                  }
                  _vm.$set(_vm.item, "fullName", $event.target.value)
                }
              }
            })
          ]
        ),
        _vm._v(" "),
        _c(
          "div",
          {
            staticClass: "form-group about col-md-12 col-lg-12 col-sm-12 col-12"
          },
          [
            _c("label", { attrs: { for: "" } }, [
              _vm._v(_vm._s(_vm.$t("jwork.gender")))
            ]),
            _vm._v(" "),
            _c(
              "select",
              {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model.number",
                    value: _vm.item.gender,
                    expression: "item.gender",
                    modifiers: { number: true }
                  }
                ],
                staticClass: "form-control",
                attrs: { type: "text" },
                on: {
                  change: function($event) {
                    var $$selectedVal = Array.prototype.filter
                      .call($event.target.options, function(o) {
                        return o.selected
                      })
                      .map(function(o) {
                        var val = "_value" in o ? o._value : o.value
                        return _vm._n(val)
                      })
                    _vm.$set(
                      _vm.item,
                      "gender",
                      $event.target.multiple ? $$selectedVal : $$selectedVal[0]
                    )
                  }
                }
              },
              [
                _c("option", { attrs: { value: "0" } }, [
                  _vm._v(_vm._s(_vm.$t("jwork.web_please_select")))
                ]),
                _vm._v(" "),
                _c("option", { attrs: { value: "1" } }, [
                  _vm._v(_vm._s(_vm.$t("jwork.male")))
                ]),
                _vm._v(" "),
                _c("option", { attrs: { value: "2" } }, [
                  _vm._v(_vm._s(_vm.$t("jwork.female")))
                ]),
                _vm._v(" "),
                _c("option", { attrs: { value: "3" } }, [
                  _vm._v(_vm._s(_vm.$t("jwork.web_gender_other")))
                ])
              ]
            )
          ]
        ),
        _vm._v(" "),
        _c(
          "div",
          {
            staticClass: "form-group about col-md-12 col-lg-12 col-sm-12 col-12"
          },
          [
            _c("label", { attrs: { for: "" } }, [
              _vm._v(_vm._s(_vm.$t("jwork.birthday")))
            ]),
            _vm._v(" "),
            _c("el-date-picker", {
              staticClass: "form-control about input-text",
              attrs: { type: "date", placeholder: "" },
              model: {
                value: _vm.item.birthday,
                callback: function($$v) {
                  _vm.$set(_vm.item, "birthday", $$v)
                },
                expression: "item.birthday"
              }
            })
          ],
          1
        ),
        _vm._v(" "),
        _c(
          "div",
          {
            staticClass: "form-group about col-md-12 col-lg-12 col-sm-12 col-12"
          },
          [
            _c("label", { attrs: { for: "" } }, [
              _vm._v(_vm._s(_vm.$t("jwork.National")))
            ]),
            _vm._v(" "),
            _c(
              "select",
              {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model.number",
                    value: _vm.item.nationalId,
                    expression: "item.nationalId",
                    modifiers: { number: true }
                  }
                ],
                staticClass: "form-control",
                attrs: { type: "text" },
                on: {
                  change: function($event) {
                    var $$selectedVal = Array.prototype.filter
                      .call($event.target.options, function(o) {
                        return o.selected
                      })
                      .map(function(o) {
                        var val = "_value" in o ? o._value : o.value
                        return _vm._n(val)
                      })
                    _vm.$set(
                      _vm.item,
                      "nationalId",
                      $event.target.multiple ? $$selectedVal : $$selectedVal[0]
                    )
                  }
                }
              },
              [
                _c("option", { attrs: { value: "0" } }, [
                  _vm._v(_vm._s(_vm.$t("jwork.web_please_select")))
                ]),
                _vm._v(" "),
                _vm._l(_vm.arrNational, function(na, n) {
                  return _c("option", { key: n, domProps: { value: na.id } }, [
                    _vm._v(_vm._s(na.name))
                  ])
                })
              ],
              2
            )
          ]
        ),
        _vm._v(" "),
        _c(
          "div",
          {
            staticClass: "form-group about col-md-12 col-lg-12 col-sm-12 col-12"
          },
          [
            _c("label", { attrs: { for: "" } }, [
              _vm._v(_vm._s(_vm.$t("jwork.japan_address")))
            ]),
            _vm._v(" "),
            _c(
              "button",
              {
                staticClass: "form-control location text-left",
                attrs: {
                  type: "button",
                  "data-toggle": "modal",
                  "data-target": "#candidateLocation"
                }
              },
              [
                _vm._v(
                  "\n                    " +
                    _vm._s(_vm.location) +
                    "\n                "
                )
              ]
            )
          ]
        ),
        _vm._v(" "),
        _c(
          "div",
          {
            staticClass: "form-group about col-md-12 col-lg-12 col-sm-12 col-12"
          },
          [
            _c("label", { attrs: { for: "" } }, [
              _vm._v(_vm._s(_vm.$t("jwork.nearest_station")))
            ]),
            _vm._v(" "),
            _c("vue-fast-select", {
              staticClass: "form-control train",
              attrs: {
                defaultText: _vm.$t("jwork.web_please_select"),
                items: _vm.arrStation,
                "key-field": "id",
                "value-field": "name"
              },
              model: {
                value: _vm.item.stationId,
                callback: function($$v) {
                  _vm.$set(_vm.item, "stationId", $$v)
                },
                expression: "item.stationId"
              }
            })
          ],
          1
        )
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "text-center save" }, [
        _c(
          "button",
          {
            staticClass: "btn btn-view-more",
            attrs: { role: "button" },
            on: {
              click: function($event) {
                $event.preventDefault()
                return _vm.saveBasicInfo($event)
              }
            }
          },
          [
            _c("i", { staticClass: "fas fa-check mr-2" }),
            _vm._v("  " + _vm._s(_vm.$t("jwork.Save")) + " \n            ")
          ]
        )
      ])
    ]),
    _vm._v(" "),
    _c(
      "div",
      {
        staticClass: "modal fade",
        attrs: { id: "candidateLocation", role: "dialog" }
      },
      [
        _c(
          "div",
          { staticClass: "modal-dialog modal-lg", attrs: { role: "document" } },
          [
            _c("div", { staticClass: "modal-content" }, [
              _c(
                "div",
                {
                  staticClass: "modal-header",
                  staticStyle: { background: "#f4f6f9" }
                },
                [
                  _c("h5", { staticClass: "modal-title" }, [
                    _vm._v(_vm._s(_vm.$t("jwork.select_location")))
                  ]),
                  _vm._v(" "),
                  _vm._m(0)
                ]
              ),
              _vm._v(" "),
              _c("div", { staticClass: "modal-body " }, [
                _c(
                  "div",
                  {
                    staticClass:
                      "form-group col-md-12 col-lg-12 col-sm-12 col-12 form-inline"
                  },
                  [
                    _c("div", { staticClass: "col-6 pl-0" }, [
                      _c(
                        "select",
                        {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model.number",
                              value: _vm.item.provinceId,
                              expression: "item.provinceId",
                              modifiers: { number: true }
                            }
                          ],
                          staticClass: "form-control  w-100",
                          on: {
                            change: function($event) {
                              var $$selectedVal = Array.prototype.filter
                                .call($event.target.options, function(o) {
                                  return o.selected
                                })
                                .map(function(o) {
                                  var val = "_value" in o ? o._value : o.value
                                  return _vm._n(val)
                                })
                              _vm.$set(
                                _vm.item,
                                "provinceId",
                                $event.target.multiple
                                  ? $$selectedVal
                                  : $$selectedVal[0]
                              )
                            }
                          }
                        },
                        [
                          _c("option", { attrs: { value: "0" } }, [
                            _vm._v(_vm._s(_vm.$t("jwork.web_please_select")))
                          ]),
                          _vm._v(" "),
                          _vm._l(_vm.arrProvince, function(pr, p) {
                            return _c(
                              "option",
                              { key: p, domProps: { value: pr.id } },
                              [_vm._v(_vm._s(pr.name))]
                            )
                          })
                        ],
                        2
                      )
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-6 pr-0" }, [
                      _c(
                        "select",
                        {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model.number",
                              value: _vm.item.districtId,
                              expression: "item.districtId",
                              modifiers: { number: true }
                            }
                          ],
                          staticClass: "form-control w-100",
                          attrs: { type: "text" },
                          on: {
                            change: function($event) {
                              var $$selectedVal = Array.prototype.filter
                                .call($event.target.options, function(o) {
                                  return o.selected
                                })
                                .map(function(o) {
                                  var val = "_value" in o ? o._value : o.value
                                  return _vm._n(val)
                                })
                              _vm.$set(
                                _vm.item,
                                "districtId",
                                $event.target.multiple
                                  ? $$selectedVal
                                  : $$selectedVal[0]
                              )
                            }
                          }
                        },
                        [
                          _c("option", { attrs: { value: "0" } }, [
                            _vm._v(_vm._s(_vm.$t("jwork.web_please_select")))
                          ]),
                          _vm._v(" "),
                          _vm._l(_vm.arrDistrict, function(di, d) {
                            return _c(
                              "option",
                              { key: d, domProps: { value: di.id } },
                              [_vm._v(_vm._s(di.name))]
                            )
                          })
                        ],
                        2
                      )
                    ])
                  ]
                ),
                _vm._v(" "),
                _c(
                  "div",
                  {
                    staticClass:
                      "form-group col-md-12 col-lg-12 col-sm-12 col-12"
                  },
                  [
                    _c("div", { staticClass: "mb-3" }, [
                      _c("textarea", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.item.address,
                            expression: "item.address"
                          }
                        ],
                        staticClass: "form-control p-3",
                        attrs: {
                          rows: "8",
                          placeholder: _vm.$t("jwork.candidateAddress")
                        },
                        domProps: { value: _vm.item.address },
                        on: {
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(_vm.item, "address", $event.target.value)
                          }
                        }
                      })
                    ])
                  ]
                ),
                _vm._v(" "),
                _c("p", [
                  _vm._v(_vm._s(_vm.$t("jwork.candidate_location_tip")))
                ])
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "modal-footer border-0" }, [
                _c(
                  "div",
                  {
                    staticClass:
                      "form-group col-md-12 col-lg-12 col-sm-12 col-12"
                  },
                  [
                    _c(
                      "button",
                      {
                        staticClass: "btn btn-save",
                        attrs: { "data-dismiss": "modal" }
                      },
                      [_vm._v(_vm._s(_vm.$t("jwork.Save")))]
                    )
                  ]
                )
              ])
            ])
          ]
        )
      ]
    )
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "button",
      {
        staticClass: "close",
        attrs: { type: "button", "data-dismiss": "modal" }
      },
      [_c("i", { staticClass: "fas fa-times" })]
    )
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/CandidatePage.vue?vue&type=template&id=e556f1ba&":
/*!***********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/CandidatePage.vue?vue&type=template&id=e556f1ba& ***!
  \***********************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c("section", { staticClass: "page-name py-4 mb-5" }, [
        _c("div", { staticClass: "container" }, [
          _c("div", { staticClass: "row" }, [
            _c("div", { staticClass: "col-md-12 col-lg-12 col-sm-2 col-12" }, [
              _c("div", { staticClass: "back" }, [
                _c("a", { attrs: { href: _vm.backLink } }, [
                  _c("img", { attrs: { src: "/imgs-fix/fa-angle-right.svg" } }),
                  _vm._v(
                    " " +
                      _vm._s(_vm.$t("jwork.return")) +
                      "\r\n                        "
                  )
                ])
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "title" }, [
                _c("h3", [_vm._v(_vm._s(_vm.$t("jwork.my_page")))])
              ])
            ])
          ])
        ])
      ]),
      _vm._v(" "),
      _c("section", { staticClass: "candi-profile" }, [
        _c("div", { staticClass: "container" }, [
          _c("div", { staticClass: "row mb-4" }, [
            _c(
              "div",
              { staticClass: "col-lg-4 col-md-4 col-sm-4 col-12" },
              [
                _c("div", { staticClass: "tab-profile" }, [
                  _c("h5", { staticClass: "mb-4" }, [
                    _vm._v(_vm._s(_vm.$t("jwork.web_my_profile")))
                  ]),
                  _vm._v(" "),
                  _c(
                    "article",
                    { staticClass: "acticle-new-candidate clearfix" },
                    [
                      _c(
                        "div",
                        {
                          directives: [
                            {
                              name: "loading",
                              rawName: "v-loading",
                              value: _vm.isUploading,
                              expression: "isUploading"
                            }
                          ],
                          staticClass: "img-thumb"
                        },
                        [
                          _c(
                            "a",
                            {
                              staticClass: "image",
                              attrs: { href: "#", title: "" },
                              on: {
                                click: function($event) {
                                  $event.preventDefault()
                                  return _vm.onChangeAvatar($event)
                                }
                              }
                            },
                            [
                              _c("img", {
                                staticClass: "img-fluid h-100 w-100",
                                attrs: { src: _vm.getAvatar(), alt: "" }
                              })
                            ]
                          ),
                          _vm._v(" "),
                          _c("input", {
                            ref: "file",
                            staticStyle: { display: "none" },
                            attrs: { type: "file", name: _vm.uploadFieldName },
                            on: {
                              change: function($event) {
                                return _vm.onFileChange(
                                  $event.target.name,
                                  $event.target.files
                                )
                              }
                            }
                          })
                        ]
                      ),
                      _vm._v(" "),
                      _c("div", { staticClass: "info" }, [
                        _c("h3", { staticClass: "title" }, [
                          _c(
                            "a",
                            {
                              attrs: {
                                href: _vm.getRouteLink("profile"),
                                title: ""
                              }
                            },
                            [_vm._v(_vm._s(_vm.userName))]
                          )
                        ])
                      ])
                    ]
                  ),
                  _vm._v(" "),
                  _c("hr"),
                  _vm._v(" "),
                  _c("ul", { staticClass: "list-info" }, [
                    _c(
                      "li",
                      {
                        on: {
                          click: function($event) {
                            $event.preventDefault()
                            return _vm.onTabClick(1)
                          }
                        }
                      },
                      [
                        _c("img", {
                          staticClass: "img-fluid mr-3",
                          attrs: { src: "/imgs-fix/about1.png" }
                        }),
                        _vm._v(" "),
                        _c("span", [
                          _vm._v(_vm._s(_vm.$t("jwork.basic_information")))
                        ]),
                        _vm._v(" "),
                        _c("i", { staticClass: "fas fa-angle-right" })
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "li",
                      {
                        on: {
                          click: function($event) {
                            $event.preventDefault()
                            return _vm.onTabClick(2)
                          }
                        }
                      },
                      [
                        _c("img", {
                          staticClass: "img-fluid mr-3",
                          attrs: { src: "/imgs-fix/about2.png" }
                        }),
                        _vm._v(" "),
                        _c("span", [
                          _vm._v(
                            " " +
                              _vm._s(_vm.$t("jwork.web_contact_information"))
                          )
                        ]),
                        _vm._v(" "),
                        _c("i", { staticClass: "fas fa-angle-right" })
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "li",
                      {
                        on: {
                          click: function($event) {
                            $event.preventDefault()
                            return _vm.onTabClick(3)
                          }
                        }
                      },
                      [
                        _c("img", {
                          staticClass: "img-fluid mr-3",
                          attrs: { src: "/imgs-fix/about3.png" }
                        }),
                        _vm._v(" "),
                        _c("span", [
                          _vm._v(_vm._s(_vm.$t("jwork.language_skills")))
                        ]),
                        _vm._v(" "),
                        _c("i", { staticClass: "fas fa-angle-right" })
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "li",
                      {
                        on: {
                          click: function($event) {
                            $event.preventDefault()
                            return _vm.onTabClick(4)
                          }
                        }
                      },
                      [
                        _c("img", {
                          staticClass: "img-fluid mr-3",
                          attrs: { src: "/imgs-fix/about4.png" }
                        }),
                        _vm._v(" "),
                        _c("span", [
                          _vm._v(
                            _vm._s(_vm.$t("jwork.web_residence_card_info"))
                          )
                        ]),
                        _vm._v(" "),
                        _c("i", { staticClass: "fas fa-angle-right" })
                      ]
                    ),
                    _vm._v(" "),
                    _c("hr"),
                    _vm._v(" "),
                    _c(
                      "li",
                      {
                        on: {
                          click: function($event) {
                            $event.preventDefault()
                            return _vm.onTabClick(5)
                          }
                        }
                      },
                      [
                        _c("img", {
                          staticClass: "img-fluid mr-3",
                          attrs: { src: "/imgs-fix/about5.png" }
                        }),
                        _vm._v(" "),
                        _c("span", [
                          _vm._v(
                            _vm._s(_vm.$t("jwork.web_hope_for_work")) + " "
                          )
                        ]),
                        _vm._v(" "),
                        _c("i", { staticClass: "fas fa-angle-right" })
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "li",
                      {
                        on: {
                          click: function($event) {
                            $event.preventDefault()
                            return _vm.onTabClick(6)
                          }
                        }
                      },
                      [
                        _c("img", {
                          staticClass: "img-fluid mr-3",
                          attrs: { src: "/imgs-fix/about6.png" }
                        }),
                        _vm._v(" "),
                        _c("span", [
                          _vm._v(
                            _vm._s(_vm.$t("jwork.web_academic_background"))
                          )
                        ]),
                        _vm._v(" "),
                        _c("i", { staticClass: "fas fa-angle-right" })
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "li",
                      {
                        on: {
                          click: function($event) {
                            $event.preventDefault()
                            return _vm.onTabClick(7)
                          }
                        }
                      },
                      [
                        _c("img", {
                          staticClass: "img-fluid mr-3",
                          attrs: { src: "/imgs-fix/about7.png" }
                        }),
                        _vm._v(" "),
                        _c("span", [
                          _vm._v(_vm._s(_vm.$t("jwork.web_career_history")))
                        ]),
                        _vm._v(" "),
                        _c("i", { staticClass: "fas fa-angle-right" })
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "li",
                      {
                        on: {
                          click: function($event) {
                            $event.preventDefault()
                            return _vm.onTabClick(8)
                          }
                        }
                      },
                      [
                        _c("img", {
                          staticClass: "img-fluid mr-3",
                          attrs: { src: "/imgs-fix/about8.png" }
                        }),
                        _vm._v(" "),
                        _c("span", [
                          _vm._v(
                            _vm._s(_vm.$t("jwork.web_self_introduction_video"))
                          )
                        ]),
                        _vm._v(" "),
                        _c("i", { staticClass: "fas fa-angle-right" })
                      ]
                    )
                  ])
                ]),
                _vm._v(" "),
                _c("CandidateChatList")
              ],
              1
            ),
            _vm._v(" "),
            _c(
              "div",
              {
                staticClass: "col-lg-8 col-md-8 col-sm-8 col-12 candidate-page"
              },
              [
                _vm.alert.message
                  ? _c(
                      "div",
                      { staticClass: "mt-2 mb-2" },
                      [
                        _c("el-alert", {
                          attrs: {
                            title: _vm.alert.message,
                            type: _vm.alert.type
                          }
                        })
                      ],
                      1
                    )
                  : _vm._e(),
                _vm._v(" "),
                _vm.index == 1
                  ? _c("CandidateBasicInfo", {
                      attrs: { item: _vm.basicInfo.data },
                      on: {
                        onSave: _vm.onSave,
                        "update:item": function($event) {
                          return _vm.$set(_vm.basicInfo, "data", $event)
                        }
                      }
                    })
                  : _vm._e(),
                _vm._v(" "),
                _vm.index == 2
                  ? _c("CandidateContactInfo", {
                      attrs: { item: _vm.basicInfo.data },
                      on: {
                        onSave: _vm.onSave,
                        "update:item": function($event) {
                          return _vm.$set(_vm.basicInfo, "data", $event)
                        }
                      }
                    })
                  : _vm._e(),
                _vm._v(" "),
                _vm.index == 3
                  ? _c("CandidateLanguageSkill", {
                      on: { onSave: _vm.onSaveLanguageSkill }
                    })
                  : _vm._e(),
                _vm._v(" "),
                _vm.index == 4 ? _c("CandidateMemberCard") : _vm._e(),
                _vm._v(" "),
                _vm.index == 5
                  ? _c("CandidateHopeWork", {
                      attrs: { item: _vm.basicInfo.data },
                      on: { onSave: _vm.onSave }
                    })
                  : _vm._e(),
                _vm._v(" "),
                _vm.index == 6 ? _c("CandidateLearningHistory") : _vm._e(),
                _vm._v(" "),
                _vm.index == 7 ? _c("CandidateCareerHistory") : _vm._e(),
                _vm._v(" "),
                _vm.index == 8
                  ? _c("CandidateIntroVideo", {
                      attrs: { item: _vm.basicInfo.data },
                      on: {
                        onSave: _vm.onSave,
                        "update:item": function($event) {
                          return _vm.$set(_vm.basicInfo, "data", $event)
                        }
                      }
                    })
                  : _vm._e(),
                _vm._v(" "),
                _c("AcceptJob"),
                _vm._v(" "),
                _c("FollowJob"),
                _vm._v(" "),
                _c("RecruitmentJob")
              ],
              1
            )
          ])
        ])
      ]),
      _vm._v(" "),
      _c("AppChatManager")
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/candidatePage/BasicInfo.vue":
/*!*************************************************************!*\
  !*** ./resources/js/components/candidatePage/BasicInfo.vue ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _BasicInfo_vue_vue_type_template_id_e825d278___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BasicInfo.vue?vue&type=template&id=e825d278& */ "./resources/js/components/candidatePage/BasicInfo.vue?vue&type=template&id=e825d278&");
/* harmony import */ var _BasicInfo_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./BasicInfo.vue?vue&type=script&lang=js& */ "./resources/js/components/candidatePage/BasicInfo.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _BasicInfo_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./BasicInfo.vue?vue&type=style&index=0&lang=css& */ "./resources/js/components/candidatePage/BasicInfo.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _BasicInfo_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _BasicInfo_vue_vue_type_template_id_e825d278___WEBPACK_IMPORTED_MODULE_0__["render"],
  _BasicInfo_vue_vue_type_template_id_e825d278___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/candidatePage/BasicInfo.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/candidatePage/BasicInfo.vue?vue&type=script&lang=js&":
/*!**************************************************************************************!*\
  !*** ./resources/js/components/candidatePage/BasicInfo.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BasicInfo_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./BasicInfo.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/candidatePage/BasicInfo.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BasicInfo_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/candidatePage/BasicInfo.vue?vue&type=style&index=0&lang=css&":
/*!**********************************************************************************************!*\
  !*** ./resources/js/components/candidatePage/BasicInfo.vue?vue&type=style&index=0&lang=css& ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_BasicInfo_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader??ref--5-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--5-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./BasicInfo.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/candidatePage/BasicInfo.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_BasicInfo_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_BasicInfo_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_BasicInfo_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_BasicInfo_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_BasicInfo_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/components/candidatePage/BasicInfo.vue?vue&type=template&id=e825d278&":
/*!********************************************************************************************!*\
  !*** ./resources/js/components/candidatePage/BasicInfo.vue?vue&type=template&id=e825d278& ***!
  \********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_BasicInfo_vue_vue_type_template_id_e825d278___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./BasicInfo.vue?vue&type=template&id=e825d278& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/candidatePage/BasicInfo.vue?vue&type=template&id=e825d278&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_BasicInfo_vue_vue_type_template_id_e825d278___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_BasicInfo_vue_vue_type_template_id_e825d278___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/views/CandidatePage.vue":
/*!**********************************************!*\
  !*** ./resources/js/views/CandidatePage.vue ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _CandidatePage_vue_vue_type_template_id_e556f1ba___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CandidatePage.vue?vue&type=template&id=e556f1ba& */ "./resources/js/views/CandidatePage.vue?vue&type=template&id=e556f1ba&");
/* harmony import */ var _CandidatePage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CandidatePage.vue?vue&type=script&lang=js& */ "./resources/js/views/CandidatePage.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _CandidatePage_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./CandidatePage.vue?vue&type=style&index=0&lang=css& */ "./resources/js/views/CandidatePage.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _CandidatePage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _CandidatePage_vue_vue_type_template_id_e556f1ba___WEBPACK_IMPORTED_MODULE_0__["render"],
  _CandidatePage_vue_vue_type_template_id_e556f1ba___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/CandidatePage.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/CandidatePage.vue?vue&type=script&lang=js&":
/*!***********************************************************************!*\
  !*** ./resources/js/views/CandidatePage.vue?vue&type=script&lang=js& ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CandidatePage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./CandidatePage.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/CandidatePage.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CandidatePage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/CandidatePage.vue?vue&type=style&index=0&lang=css&":
/*!*******************************************************************************!*\
  !*** ./resources/js/views/CandidatePage.vue?vue&type=style&index=0&lang=css& ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CandidatePage_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader!../../../node_modules/css-loader??ref--5-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--5-2!../../../node_modules/vue-loader/lib??vue-loader-options!./CandidatePage.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/CandidatePage.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CandidatePage_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CandidatePage_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CandidatePage_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CandidatePage_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CandidatePage_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/views/CandidatePage.vue?vue&type=template&id=e556f1ba&":
/*!*****************************************************************************!*\
  !*** ./resources/js/views/CandidatePage.vue?vue&type=template&id=e556f1ba& ***!
  \*****************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CandidatePage_vue_vue_type_template_id_e556f1ba___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./CandidatePage.vue?vue&type=template&id=e556f1ba& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/CandidatePage.vue?vue&type=template&id=e556f1ba&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CandidatePage_vue_vue_type_template_id_e556f1ba___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CandidatePage_vue_vue_type_template_id_e556f1ba___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);