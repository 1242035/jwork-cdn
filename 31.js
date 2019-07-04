(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[31],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/ForgotPassword.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/ForgotPassword.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuelidate/lib/validators */ "./node_modules/vuelidate/lib/validators/index.js");
/* harmony import */ var vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_0__);
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

/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'ForgotPassword',
  validations: {
    email: {
      email: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_0__["email"]
    }
  },
  data: function data() {
    return {
      email: '',
      message: '',
      type: '',
      isReseted: false
    };
  },
  methods: {
    forgotPassword: function forgotPassword() {
      var email = {
        email: this.email
      };
      var callback = this.onResponse;
      this.$store.dispatch('account/resetPassword', {
        email: email,
        callback: callback
      });
    },
    onResponse: function onResponse(error, response) {
      this.type = 'error';

      if (error) {
        if (error.message) {
          this.message = error.message;
        } else {
          this.message = $t('jwork.web_reset_password_unknown_error');
        }
      } else {
        if (response != null && response.data != null && response.data.errorCode == 0) {
          this.type = 'success';
          this.message = $t('jwork.web_reset_password_sent', {
            email: this.email
          });
          this.isReseted = true;
        } else {
          this.message = response.data.message || $t('jwork.web_reset_password_unknown_error');
        }
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/ForgotPassword.vue?vue&type=template&id=5aa612bd&":
/*!************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/ForgotPassword.vue?vue&type=template&id=5aa612bd& ***!
  \************************************************************************************************************************************************************************************************************/
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
    "section",
    {
      staticClass: "wrap-sign-in-company",
      attrs: { id: "wrap-sign-in-company" }
    },
    [
      _c("div", { staticClass: "row" }, [
        _c("div", { staticClass: "col-lg-5 col-md-6 col-sm-6 col-12 m-auto" }, [
          _c("div", { staticClass: "form-sign-in-company" }, [
            _c(
              "form",
              { staticClass: "form", attrs: { action: "", method: "" } },
              [
                _c("h2", { staticClass: "title" }, [
                  _vm._v(_vm._s(_vm.$t("jwork.web_restore_password_title")))
                ]),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "row" },
                  [
                    _c("el-alert", {
                      attrs: { title: _vm.message, type: _vm.type }
                    })
                  ],
                  1
                ),
                _vm._v(" "),
                _c(
                  "div",
                  {
                    directives: [
                      {
                        name: "show",
                        rawName: "v-show",
                        value: !_vm.isReseted,
                        expression: "!isReseted"
                      }
                    ],
                    staticClass: "row"
                  },
                  [
                    _c(
                      "div",
                      { staticClass: "col-12 col-lg-12 col-md-12 col-sm-12" },
                      [
                        _c("div", { staticClass: "form-group" }, [
                          _c(
                            "label",
                            {
                              staticClass: "label-company",
                              attrs: { for: "label-sign-up-1" }
                            },
                            [
                              _vm._v(
                                _vm._s(
                                  _vm.$t("jwork.web_email_restore_password")
                                )
                              )
                            ]
                          ),
                          _vm._v(" "),
                          _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.email,
                                expression: "email"
                              }
                            ],
                            staticClass: "form-control input-text",
                            domProps: { value: _vm.email },
                            on: {
                              input: [
                                function($event) {
                                  if ($event.target.composing) {
                                    return
                                  }
                                  _vm.email = $event.target.value
                                },
                                function($event) {
                                  return _vm.$v.email.$touch()
                                }
                              ]
                            }
                          })
                        ])
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticClass: "col-12 col-lg-12 col-md-12 col-sm-12" },
                      [
                        _c("div", { staticClass: "form-group text-center" }, [
                          _c(
                            "button",
                            {
                              staticClass: "btn btn-submit btn-register",
                              staticStyle: { width: "220px" },
                              attrs: { disabled: _vm.$v.$invalid },
                              on: {
                                click: function($event) {
                                  $event.preventDefault()
                                  return _vm.forgotPassword($event)
                                }
                              }
                            },
                            [_vm._v(_vm._s(_vm.$t("jwork.send")))]
                          )
                        ])
                      ]
                    )
                  ]
                )
              ]
            )
          ])
        ])
      ])
    ]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/views/ForgotPassword.vue":
/*!***********************************************!*\
  !*** ./resources/js/views/ForgotPassword.vue ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ForgotPassword_vue_vue_type_template_id_5aa612bd___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ForgotPassword.vue?vue&type=template&id=5aa612bd& */ "./resources/js/views/ForgotPassword.vue?vue&type=template&id=5aa612bd&");
/* harmony import */ var _ForgotPassword_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ForgotPassword.vue?vue&type=script&lang=js& */ "./resources/js/views/ForgotPassword.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ForgotPassword_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ForgotPassword_vue_vue_type_template_id_5aa612bd___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ForgotPassword_vue_vue_type_template_id_5aa612bd___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/ForgotPassword.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/ForgotPassword.vue?vue&type=script&lang=js&":
/*!************************************************************************!*\
  !*** ./resources/js/views/ForgotPassword.vue?vue&type=script&lang=js& ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ForgotPassword_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./ForgotPassword.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/ForgotPassword.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ForgotPassword_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/ForgotPassword.vue?vue&type=template&id=5aa612bd&":
/*!******************************************************************************!*\
  !*** ./resources/js/views/ForgotPassword.vue?vue&type=template&id=5aa612bd& ***!
  \******************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ForgotPassword_vue_vue_type_template_id_5aa612bd___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./ForgotPassword.vue?vue&type=template&id=5aa612bd& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/ForgotPassword.vue?vue&type=template&id=5aa612bd&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ForgotPassword_vue_vue_type_template_id_5aa612bd___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ForgotPassword_vue_vue_type_template_id_5aa612bd___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);