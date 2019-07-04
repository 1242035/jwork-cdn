(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/candidatePage/LearningHistory.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/candidatePage/LearningHistory.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
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
//import { required } from 'vuelidate/lib/validators'

/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'CandidateLearningHistory',
  validations: {},
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapState"])({
    learningHistories: function learningHistories(state) {
      return state.candidate.learningHistories;
    }
  })),
  data: function data() {
    return {
      arrLearning: [{
        description: ''
      }]
    };
  },
  watch: {
    'learningHistories.data': function learningHistoriesData(newValue) {
      this.arrLearning = [];

      if (newValue != null && _.isArray(newValue)) {
        for (var i = 0; i < newValue.length; i++) {
          this.arrLearning.push(newValue[i].description);
        }
      }

      this.arrLearning.push('');
    }
  },
  mounted: function mounted() {
    this.learningHistoryGet();
  },
  methods: {
    learningHistoryGet: function learningHistoryGet() {
      this.$store.dispatch('candidate/learningHistoryGet', {});
    },
    addMore: function addMore() {
      var allow = true;

      for (var i = 0; i < this.arrLearning.length; i++) {
        if (this.arrLearning[i] == null || this.arrLearning[i].length <= 0) {
          allow = false;
          break;
        }
      }

      if (allow) {
        this.arrLearning.push('');
      }
    },
    onSave: function onSave() {
      var arr = [];

      for (var i = 0; i < this.arrLearning.length; i++) {
        var str = this.arrLearning[i];

        if (str != null && str.trim().length > 0) {
          arr.push({
            'description': str.trim()
          });
        }
      } //if( arr.length > 0 ){


      this.$store.dispatch('candidate/learningHistorySave', {
        'learningHistorys': arr
      }); //}
    },
    onRemove: function onRemove(index) {
      this.arrLearning.splice(index, 1);
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/candidatePage/LearningHistory.vue?vue&type=style&index=0&lang=css&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--5-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--5-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/candidatePage/LearningHistory.vue?vue&type=style&index=0&lang=css& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.about button.btn-circle{\r\n    display: none;\n}\n.about:hover button.btn-circle{\r\n    display: block;\n}\n.wrap{\r\n    position: relative;\n}\n.btn-circle {\r\n    width: 30px;\r\n    height: 30px;\r\n    border-radius: 15px;\r\n    text-align: center;\r\n    font-size: 12px;\r\n    line-height: 15px;\r\n    margin: -15px;\r\n    position: absolute;\r\n    right: 5px;\r\n    top: 16px;\n}\r\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/candidatePage/LearningHistory.vue?vue&type=style&index=0&lang=css&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--5-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--5-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/candidatePage/LearningHistory.vue?vue&type=style&index=0&lang=css& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader??ref--5-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--5-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./LearningHistory.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/candidatePage/LearningHistory.vue?vue&type=style&index=0&lang=css&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/candidatePage/LearningHistory.vue?vue&type=template&id=402edb5e&":
/*!********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/candidatePage/LearningHistory.vue?vue&type=template&id=402edb5e& ***!
  \********************************************************************************************************************************************************************************************************************************/
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
  return _c("div", { staticClass: "ab" }, [
    _c("div", { staticClass: "head text-center" }, [
      _c("img", {
        staticClass: "img-fluid mb-3",
        attrs: { src: "/imgs-fix/about7.png" }
      }),
      _vm._v(" "),
      _c("p", [_vm._v(" " + _vm._s(_vm.$t("jwork.academy_background")))])
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "content px-4" }, [
      _c(
        "div",
        { staticClass: "about" },
        [
          _vm._l(_vm.arrLearning, function(wk, w) {
            return _c("div", { key: w, staticClass: "wrap" }, [
              _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.arrLearning[w],
                    expression: "arrLearning[w]"
                  }
                ],
                staticClass: "form-control about input-text",
                attrs: {
                  placeholder: _vm.$t("jwork.academy_background"),
                  type: "text"
                },
                domProps: { value: _vm.arrLearning[w] },
                on: {
                  input: function($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.$set(_vm.arrLearning, w, $event.target.value)
                  }
                }
              }),
              _vm._v(" "),
              _vm.arrLearning[w] != null && _vm.arrLearning[w].length > 0
                ? _c(
                    "button",
                    {
                      staticClass: "close btn-circle btn-danger",
                      attrs: { type: "button", "aria-label": "Close" },
                      on: {
                        click: function($event) {
                          $event.preventDefault()
                          return _vm.onRemove(w)
                        }
                      }
                    },
                    [
                      _c("span", { attrs: { "aria-hidden": "true" } }, [
                        _vm._v("×")
                      ])
                    ]
                  )
                : _vm._e()
            ])
          }),
          _vm._v(" "),
          _c(
            "div",
            {
              staticClass: "add",
              on: {
                click: function($event) {
                  $event.preventDefault()
                  return _vm.addMore($event)
                }
              }
            },
            [
              _c("i", { staticClass: "fas fa-plus-circle" }),
              _vm._v(" "),
              _c("span", [
                _vm._v(_vm._s(_vm.$t("jwork.more_learning_history")))
              ])
            ]
          )
        ],
        2
      )
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "text-center save" }, [
      _c(
        "button",
        {
          staticClass: "btn btn-view-more",
          attrs: { role: "button" },
          on: { click: _vm.onSave }
        },
        [
          _c("i", { staticClass: "fas fa-check mr-2" }),
          _vm._v("  " + _vm._s(_vm.$t("jwork.Save")) + " \n        ")
        ]
      )
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/candidatePage/LearningHistory.vue":
/*!*******************************************************************!*\
  !*** ./resources/js/components/candidatePage/LearningHistory.vue ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _LearningHistory_vue_vue_type_template_id_402edb5e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./LearningHistory.vue?vue&type=template&id=402edb5e& */ "./resources/js/components/candidatePage/LearningHistory.vue?vue&type=template&id=402edb5e&");
/* harmony import */ var _LearningHistory_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./LearningHistory.vue?vue&type=script&lang=js& */ "./resources/js/components/candidatePage/LearningHistory.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _LearningHistory_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./LearningHistory.vue?vue&type=style&index=0&lang=css& */ "./resources/js/components/candidatePage/LearningHistory.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _LearningHistory_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _LearningHistory_vue_vue_type_template_id_402edb5e___WEBPACK_IMPORTED_MODULE_0__["render"],
  _LearningHistory_vue_vue_type_template_id_402edb5e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/candidatePage/LearningHistory.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/candidatePage/LearningHistory.vue?vue&type=script&lang=js&":
/*!********************************************************************************************!*\
  !*** ./resources/js/components/candidatePage/LearningHistory.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LearningHistory_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./LearningHistory.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/candidatePage/LearningHistory.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LearningHistory_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/candidatePage/LearningHistory.vue?vue&type=style&index=0&lang=css&":
/*!****************************************************************************************************!*\
  !*** ./resources/js/components/candidatePage/LearningHistory.vue?vue&type=style&index=0&lang=css& ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_LearningHistory_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader??ref--5-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--5-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./LearningHistory.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/candidatePage/LearningHistory.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_LearningHistory_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_LearningHistory_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_LearningHistory_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_LearningHistory_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_LearningHistory_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/components/candidatePage/LearningHistory.vue?vue&type=template&id=402edb5e&":
/*!**************************************************************************************************!*\
  !*** ./resources/js/components/candidatePage/LearningHistory.vue?vue&type=template&id=402edb5e& ***!
  \**************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_LearningHistory_vue_vue_type_template_id_402edb5e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./LearningHistory.vue?vue&type=template&id=402edb5e& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/candidatePage/LearningHistory.vue?vue&type=template&id=402edb5e&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_LearningHistory_vue_vue_type_template_id_402edb5e___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_LearningHistory_vue_vue_type_template_id_402edb5e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);