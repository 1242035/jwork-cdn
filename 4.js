(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[4],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/SignUp.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/SignUp.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _SignUpCandidate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SignUpCandidate */ "./resources/js/components/SignUpCandidate.vue");
/* harmony import */ var _SignUpEmployee__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SignUpEmployee */ "./resources/js/components/SignUpEmployee.vue");
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = ({
  props: {
    type: {
      type: String,
      "default": ''
    }
  },
  name: 'SignUp',
  components: {
    SignUpEmployee: _SignUpEmployee__WEBPACK_IMPORTED_MODULE_1__["default"],
    SignUpCandidate: _SignUpCandidate__WEBPACK_IMPORTED_MODULE_0__["default"]
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/SignUpCandidate.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/SignUpCandidate.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vuelidate/lib/validators */ "./node_modules/vuelidate/lib/validators/index.js");
/* harmony import */ var vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_1__);
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



var onlyTrue = function onlyTrue(value) {
  return value !== null && value == true;
};

/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'SignUpCandidate',
  validations: {
    email: {
      required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_1__["required"],
      email: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_1__["email"]
    },
    password: {
      required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_1__["required"]
    },
    confirm_password: {
      sameAs: Object(vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_1__["sameAs"])('password')
    },
    term_ok: {
      onlyTrue: onlyTrue
    }
  },
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapState"])({
    alert: function alert(state) {
      return state.alert;
    }
  })),
  data: function data() {
    return {
      email: '',
      password: '',
      confirm_password: '',
      term_ok: true
    };
  },
  methods: {
    signUp: function signUp() {
      var invalid = this.$v.$invalid;

      if (invalid) {
        this.$v.$touch();
        return;
      }

      this.$store.dispatch('account/candidateSignUp', {
        email: this.email,
        password: this.password,
        confirm_password: this.confirm_password,
        term_ok: this.term_ok
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/SignUpEmployee.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/SignUpEmployee.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vuelidate/lib/validators */ "./node_modules/vuelidate/lib/validators/index.js");
/* harmony import */ var vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_1__);
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



var onlyTrue = function onlyTrue(value) {
  return value !== null && value == true;
};

var onlyPositiveInteger = function onlyPositiveInteger(value) {
  return value !== null && value > 0;
};

var phone = function phone(value) {
  return value !== null && /^[+]*[(]{0,1}[0-9]{1,3}[)]{0,1}[-\s\./0-9]*$/g.test(value);
};

/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'SignUpEmployee',
  validations: {
    email: {
      required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_1__["required"],
      email: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_1__["email"]
    },
    password: {
      required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_1__["required"]
    },
    confirmPassword: {
      sameAs: Object(vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_1__["sameAs"])('password')
    },
    contactName: {
      required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_1__["required"]
    },
    mobile: {
      phone: phone
    },
    companyName: {
      required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_1__["required"]
    },
    address: {
      required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_1__["required"]
    },
    street: {
      required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_1__["required"]
    },
    provinceId: {
      onlyPositiveInteger: onlyPositiveInteger
    },
    districtId: {
      onlyPositiveInteger: onlyPositiveInteger
    },
    term: {
      onlyTrue: onlyTrue
    }
  },
  data: function data() {
    return {
      email: '',
      password: '',
      confirmPassword: '',
      contactName: '',
      mobile: '',
      companyName: '',
      address: '',
      street: '',
      provinceId: 0,
      districtId: 0,
      buildingName: '',
      term: true
    };
  },
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapState"])({
    provinces: function provinces(state) {
      return state.resource.provinces;
    },
    districts: function districts(state) {
      return state.resource.districts;
    },
    alert: function alert(state) {
      return state.alert;
    }
  }), {
    arrProvince: function arrProvince() {
      var arr = _.clone(this.provinces.data);

      var me = this;
      var arrClone = [];

      _.map(arr, function (o) {
        if (o.status == 1) {
          arrClone.push(o);
          return o;
        }
      });

      return arrClone;
    },
    arrDistrict: function arrDistrict() {
      var arr = _.clone(this.districts.data);

      var me = this;

      if (this.provinceId != null && this.provinceId > 0) {
        var arrClone = [];

        _.map(arr, function (o) {
          if (o.provinceId == me.provinceId) {
            arrClone.push(o);
            return o;
          }
        });

        return arrClone;
      }

      return [];
    }
  }),
  mounted: function mounted() {
    this.getAllProvince();
    this.getAllDistrict();
  },
  methods: {
    getAllProvince: function getAllProvince() {
      this.$store.dispatch('resource/getAllProvince');
    },
    getAllDistrict: function getAllDistrict() {
      var params = {
        province_id: this.province_id
      };
      this.$store.dispatch('resource/getAllDistrict', params);
    },
    signUp: function signUp() {
      var invalid = this.$v.$invalid;

      if (invalid) {
        this.$v.$touch();
        return;
      }

      var params = {
        email: this.email,
        password: this.password,
        confirmPassword: this.confirmPassword,
        contactName: this.contactName,
        mobile: this.mobile,
        companyName: this.companyName,
        address: this.address,
        street: this.street,
        provinceId: this.provinceId,
        districtId: this.districtId,
        buildingName: this.buildingName,
        term: this.term
      };
      this.$store.dispatch('account/employeeSignUp', params);
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/SignUp.vue?vue&type=template&id=2573bf63&":
/*!*********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/SignUp.vue?vue&type=template&id=2573bf63& ***!
  \*********************************************************************************************************************************************************************************************************/
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
      _vm.type == "candidate"
        ? _c("SignUpCandidate", { attrs: { type: _vm.type } })
        : _c("SignUpEmployee", { attrs: { type: _vm.type } })
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/SignUpCandidate.vue?vue&type=template&id=998fb3e0&":
/*!******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/SignUpCandidate.vue?vue&type=template&id=998fb3e0& ***!
  \******************************************************************************************************************************************************************************************************************/
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
  return _c("section", { staticClass: "wrap-sign-in-company" }, [
    _c("div", { staticClass: "row" }, [
      _c("div", { staticClass: "col-lg-5 col-md-6 col-sm-6 col-12 m-auto" }, [
        _c("div", { staticClass: "form-sign-in-company" }, [
          _c(
            "form",
            { staticClass: "form", attrs: { action: "", method: "" } },
            [
              _c("h2", { staticClass: "title" }, [
                _vm._v(_vm._s(_vm.$t("jwork.web_signup_title")))
              ]),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "row" },
                [
                  _vm.alert.message
                    ? _c("el-alert", {
                        attrs: {
                          title: _vm.alert.message,
                          type: _vm.alert.type
                        }
                      })
                    : _vm._e(),
                  _vm._v(" "),
                  _c(
                    "div",
                    { staticClass: "col-12 col-lg-12 col-md-12 col-sm-12" },
                    [
                      _c(
                        "div",
                        {
                          staticClass: "form-group",
                          class: {
                            "is-invalid has-danger":
                              _vm.$v.email.$dirty && _vm.$v.email.$invalid
                          }
                        },
                        [
                          _c(
                            "label",
                            {
                              staticClass: "label-company",
                              attrs: { for: "label-sign-up-1" }
                            },
                            [_vm._v(_vm._s(_vm.$t("jwork.email")))]
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
                            attrs: { autocomplete: "off", type: "text" },
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
                        ]
                      )
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    { staticClass: "col-12 col-lg-12 col-md-12 col-sm-12" },
                    [
                      _c(
                        "div",
                        {
                          staticClass: "form-group",
                          class: {
                            "is-invalid has-danger":
                              _vm.$v.password.$dirty && _vm.$v.password.$invalid
                          }
                        },
                        [
                          _c(
                            "label",
                            {
                              staticClass: "label-company",
                              attrs: { for: "label-sign-up-2" }
                            },
                            [_vm._v(_vm._s(_vm.$t("jwork.Password")))]
                          ),
                          _vm._v(" "),
                          _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.password,
                                expression: "password"
                              }
                            ],
                            staticClass: "form-control input-text",
                            attrs: { autocomplete: "off", type: "password" },
                            domProps: { value: _vm.password },
                            on: {
                              input: [
                                function($event) {
                                  if ($event.target.composing) {
                                    return
                                  }
                                  _vm.password = $event.target.value
                                },
                                function($event) {
                                  return _vm.$v.password.$touch()
                                }
                              ]
                            }
                          })
                        ]
                      )
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    { staticClass: "col-12 col-lg-12 col-md-12 col-sm-12" },
                    [
                      _c(
                        "div",
                        {
                          staticClass: "form-group",
                          class: {
                            "is-invalid has-danger":
                              _vm.$v.confirm_password.$dirty &&
                              _vm.$v.confirm_password.$invalid
                          }
                        },
                        [
                          _c(
                            "label",
                            {
                              staticClass: "label-company",
                              attrs: { for: "label-sign-up-3" }
                            },
                            [_vm._v(_vm._s(_vm.$t("jwork.confirm_password")))]
                          ),
                          _vm._v(" "),
                          _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.confirm_password,
                                expression: "confirm_password"
                              }
                            ],
                            staticClass: "form-control input-text",
                            attrs: { autocomplete: "off", type: "password" },
                            domProps: { value: _vm.confirm_password },
                            on: {
                              input: [
                                function($event) {
                                  if ($event.target.composing) {
                                    return
                                  }
                                  _vm.confirm_password = $event.target.value
                                },
                                function($event) {
                                  return _vm.$v.confirm_password.$touch()
                                }
                              ]
                            }
                          })
                        ]
                      )
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    { staticClass: "col-12 col-lg-12 col-md-12 col-sm-12" },
                    [
                      _c(
                        "div",
                        {
                          staticClass: "form-group d-flex",
                          class: {
                            "is-invalid has-danger":
                              _vm.$v.term_ok.$dirty && _vm.$v.term_ok.$invalid
                          }
                        },
                        [
                          _c(
                            "label",
                            {
                              staticClass:
                                "container label label-checkbox form-agree"
                            },
                            [
                              _vm._v(
                                "\r\n                                    " +
                                  _vm._s(_vm.$t("jwork.web_me")) +
                                  " "
                              ),
                              _c("span", { staticClass: "text-color" }, [
                                _vm._v(_vm._s(_vm.$t("jwork.web_term")))
                              ]),
                              _vm._v(
                                " " +
                                  _vm._s(_vm.$t("jwork.web_i_agree_with")) +
                                  "\r\n                                    "
                              ),
                              _c("input", {
                                directives: [
                                  {
                                    name: "model",
                                    rawName: "v-model",
                                    value: _vm.term_ok,
                                    expression: "term_ok"
                                  }
                                ],
                                staticClass: "input-text",
                                attrs: { type: "checkbox" },
                                domProps: {
                                  checked: Array.isArray(_vm.term_ok)
                                    ? _vm._i(_vm.term_ok, null) > -1
                                    : _vm.term_ok
                                },
                                on: {
                                  input: function($event) {
                                    return _vm.$v.term_ok.$touch()
                                  },
                                  change: function($event) {
                                    var $$a = _vm.term_ok,
                                      $$el = $event.target,
                                      $$c = $$el.checked ? true : false
                                    if (Array.isArray($$a)) {
                                      var $$v = null,
                                        $$i = _vm._i($$a, $$v)
                                      if ($$el.checked) {
                                        $$i < 0 &&
                                          (_vm.term_ok = $$a.concat([$$v]))
                                      } else {
                                        $$i > -1 &&
                                          (_vm.term_ok = $$a
                                            .slice(0, $$i)
                                            .concat($$a.slice($$i + 1)))
                                      }
                                    } else {
                                      _vm.term_ok = $$c
                                    }
                                  }
                                }
                              }),
                              _vm._v(" "),
                              _c("span", { staticClass: "checkmark" })
                            ]
                          )
                        ]
                      )
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
                            on: {
                              click: function($event) {
                                $event.preventDefault()
                                return _vm.signUp($event)
                              }
                            }
                          },
                          [_vm._v(_vm._s(_vm.$t("jwork.signup")))]
                        )
                      ])
                    ]
                  )
                ],
                1
              )
            ]
          )
        ])
      ])
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/SignUpEmployee.vue?vue&type=template&id=3aea0f9e&":
/*!*****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/SignUpEmployee.vue?vue&type=template&id=3aea0f9e& ***!
  \*****************************************************************************************************************************************************************************************************************/
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
                  _vm._v(_vm._s(_vm.$t("jwork.web_signup_title")))
                ]),
                _vm._v(" "),
                _c("h3", { staticClass: "name-sign-in" }, [
                  _vm._v(_vm._s(_vm.$t("jwork.account")))
                ]),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "row" },
                  [
                    _vm.alert.message
                      ? _c("el-alert", {
                          attrs: {
                            title: _vm.alert.message,
                            type: _vm.alert.type
                          }
                        })
                      : _vm._e(),
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticClass: "col-12 col-lg-12 col-md-12 col-sm-12" },
                      [
                        _c(
                          "div",
                          {
                            staticClass: "form-group",
                            class: {
                              "is-invalid has-danger":
                                _vm.$v.email.$dirty && _vm.$v.email.$invalid
                            }
                          },
                          [
                            _c(
                              "label",
                              {
                                staticClass: "label-company",
                                attrs: { for: "label-sign-in-1" }
                              },
                              [
                                _vm._v(
                                  _vm._s(_vm.$t("jwork.account_email")) + " "
                                ),
                                _c("span", { staticClass: "red" }, [
                                  _vm._v("*")
                                ])
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
                              attrs: { autocomplete: "off", type: "text" },
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
                          ]
                        )
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticClass: "col-12 col-lg-12 col-md-12 col-sm-12" },
                      [
                        _c(
                          "div",
                          {
                            staticClass: "form-group",
                            class: {
                              "is-invalid has-danger":
                                _vm.$v.password.$dirty &&
                                _vm.$v.password.$invalid
                            }
                          },
                          [
                            _c(
                              "label",
                              {
                                staticClass: "label-company",
                                attrs: { for: "label-sign-in-2" }
                              },
                              [
                                _vm._v(_vm._s(_vm.$t("jwork.Password")) + " "),
                                _c("span", { staticClass: "red" }, [
                                  _vm._v("*")
                                ])
                              ]
                            ),
                            _vm._v(" "),
                            _c("input", {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value: _vm.password,
                                  expression: "password"
                                }
                              ],
                              staticClass: "form-control input-text",
                              attrs: { autocomplete: "off", type: "password" },
                              domProps: { value: _vm.password },
                              on: {
                                input: [
                                  function($event) {
                                    if ($event.target.composing) {
                                      return
                                    }
                                    _vm.password = $event.target.value
                                  },
                                  function($event) {
                                    return _vm.$v.password.$touch()
                                  }
                                ]
                              }
                            })
                          ]
                        )
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticClass: "col-12 col-lg-12 col-md-12 col-sm-12" },
                      [
                        _c(
                          "div",
                          {
                            staticClass: "form-group",
                            class: {
                              "is-invalid has-danger":
                                _vm.$v.confirmPassword.$dirty &&
                                _vm.$v.confirmPassword.$invalid
                            }
                          },
                          [
                            _c(
                              "label",
                              {
                                staticClass: "label-company",
                                attrs: { for: "label-sign-up-3" }
                              },
                              [
                                _vm._v(
                                  _vm._s(_vm.$t("jwork.confirm_password")) + " "
                                ),
                                _c("span", { staticClass: "red" }, [
                                  _vm._v("*")
                                ])
                              ]
                            ),
                            _vm._v(" "),
                            _c("input", {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value: _vm.confirmPassword,
                                  expression: "confirmPassword"
                                }
                              ],
                              staticClass: "form-control input-text",
                              attrs: { autocomplete: "off", type: "password" },
                              domProps: { value: _vm.confirmPassword },
                              on: {
                                input: [
                                  function($event) {
                                    if ($event.target.composing) {
                                      return
                                    }
                                    _vm.confirmPassword = $event.target.value
                                  },
                                  function($event) {
                                    return _vm.$v.confirmPassword.$touch()
                                  }
                                ]
                              }
                            })
                          ]
                        )
                      ]
                    ),
                    _vm._v(" "),
                    _vm._m(0),
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticClass: "col-12 col-lg-12 col-md-12 col-sm-12" },
                      [
                        _c("div", { staticClass: "form-group" }, [
                          _c("h3", { staticClass: "name-sign-in" }, [
                            _vm._v(_vm._s(_vm.$t("jwork.company_info")))
                          ])
                        ])
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticClass: "col-12 col-lg-12 col-md-12 col-sm-12" },
                      [
                        _c(
                          "div",
                          {
                            staticClass: "form-group",
                            class: {
                              "is-invalid has-danger":
                                _vm.$v.contactName.$dirty &&
                                _vm.$v.contactName.$invalid
                            }
                          },
                          [
                            _c(
                              "label",
                              {
                                staticClass: "label-company",
                                attrs: { for: "label-sign-in-3" }
                              },
                              [
                                _vm._v(
                                  _vm._s(_vm.$t("jwork.contact_name")) + " "
                                ),
                                _c("span", { staticClass: "red" }, [
                                  _vm._v("*")
                                ])
                              ]
                            ),
                            _vm._v(" "),
                            _c("input", {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value: _vm.contactName,
                                  expression: "contactName"
                                }
                              ],
                              staticClass: "form-control input-text",
                              attrs: { autocomplete: "off", type: "text" },
                              domProps: { value: _vm.contactName },
                              on: {
                                input: [
                                  function($event) {
                                    if ($event.target.composing) {
                                      return
                                    }
                                    _vm.contactName = $event.target.value
                                  },
                                  function($event) {
                                    return _vm.$v.contactName.$touch()
                                  }
                                ]
                              }
                            })
                          ]
                        )
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticClass: "col-12 col-lg-12 col-md-12 col-sm-12" },
                      [
                        _c(
                          "div",
                          {
                            staticClass: "form-group",
                            class: {
                              "is-invalid has-danger":
                                _vm.$v.mobile.$dirty && _vm.$v.mobile.$invalid
                            }
                          },
                          [
                            _c(
                              "label",
                              {
                                staticClass: "label-company",
                                attrs: { for: "label-sign-in-4" }
                              },
                              [
                                _vm._v(_vm._s(_vm.$t("jwork.phone")) + " "),
                                _c("span", { staticClass: "red" }, [
                                  _vm._v("*")
                                ])
                              ]
                            ),
                            _vm._v(" "),
                            _c("input", {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value: _vm.mobile,
                                  expression: "mobile"
                                }
                              ],
                              staticClass: "form-control input-text",
                              attrs: { autocomplete: "off", type: "text" },
                              domProps: { value: _vm.mobile },
                              on: {
                                input: [
                                  function($event) {
                                    if ($event.target.composing) {
                                      return
                                    }
                                    _vm.mobile = $event.target.value
                                  },
                                  function($event) {
                                    return _vm.$v.mobile.$touch()
                                  }
                                ]
                              }
                            })
                          ]
                        )
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticClass: "col-12 col-lg-12 col-md-12 col-sm-12" },
                      [
                        _c(
                          "div",
                          {
                            staticClass: "form-group",
                            class: {
                              "is-invalid has-danger":
                                _vm.$v.companyName.$dirty &&
                                _vm.$v.companyName.$invalid
                            }
                          },
                          [
                            _c(
                              "label",
                              {
                                staticClass: "label-company",
                                attrs: { for: "label-sign-in-5" }
                              },
                              [
                                _vm._v(
                                  _vm._s(_vm.$t("jwork.company_name")) + " "
                                ),
                                _c("span", { staticClass: "red" }, [
                                  _vm._v("*")
                                ])
                              ]
                            ),
                            _vm._v(" "),
                            _c("input", {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value: _vm.companyName,
                                  expression: "companyName"
                                }
                              ],
                              staticClass: "form-control input-text",
                              attrs: { autocomplete: "off", type: "text" },
                              domProps: { value: _vm.companyName },
                              on: {
                                input: [
                                  function($event) {
                                    if ($event.target.composing) {
                                      return
                                    }
                                    _vm.companyName = $event.target.value
                                  },
                                  function($event) {
                                    return _vm.$v.companyName.$touch()
                                  }
                                ]
                              }
                            })
                          ]
                        )
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticClass: "col-12 col-lg-12 col-md-12 col-sm-12" },
                      [
                        _c(
                          "div",
                          {
                            staticClass: "form-group",
                            class: {
                              "is-invalid has-danger":
                                _vm.$v.address.$dirty && _vm.$v.address.$invalid
                            }
                          },
                          [
                            _c(
                              "label",
                              {
                                staticClass: "label-company",
                                attrs: { for: "label-sign-in-6" }
                              },
                              [
                                _vm._v(
                                  _vm._s(_vm.$t("jwork.company_address")) + " "
                                ),
                                _c("span", { staticClass: "red" }, [
                                  _vm._v("*")
                                ])
                              ]
                            ),
                            _vm._v(" "),
                            _c("input", {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value: _vm.address,
                                  expression: "address"
                                }
                              ],
                              staticClass: "form-control input-text",
                              attrs: { autocomplete: "off", type: "text" },
                              domProps: { value: _vm.address },
                              on: {
                                input: [
                                  function($event) {
                                    if ($event.target.composing) {
                                      return
                                    }
                                    _vm.address = $event.target.value
                                  },
                                  function($event) {
                                    return _vm.$v.address.$touch()
                                  }
                                ]
                              }
                            })
                          ]
                        )
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticClass: "col-12 col-lg-12 col-md-12 col-sm-12" },
                      [
                        _c(
                          "div",
                          {
                            staticClass: "form-group",
                            class: {
                              "is-invalid has-danger":
                                _vm.$v.provinceId.$dirty &&
                                _vm.$v.provinceId.$invalid
                            }
                          },
                          [
                            _c(
                              "label",
                              {
                                staticClass: "label-company",
                                attrs: { for: "label-sign-in-7" }
                              },
                              [
                                _vm._v(_vm._s(_vm.$t("jwork.Province")) + " "),
                                _c("span", { staticClass: "red" }, [
                                  _vm._v("*")
                                ])
                              ]
                            ),
                            _vm._v(" "),
                            _c(
                              "select",
                              {
                                directives: [
                                  {
                                    name: "model",
                                    rawName: "v-model.number",
                                    value: _vm.provinceId,
                                    expression: "provinceId",
                                    modifiers: { number: true }
                                  }
                                ],
                                staticClass: "form-control",
                                attrs: { autocomplete: "off" },
                                on: {
                                  change: [
                                    function($event) {
                                      var $$selectedVal = Array.prototype.filter
                                        .call($event.target.options, function(
                                          o
                                        ) {
                                          return o.selected
                                        })
                                        .map(function(o) {
                                          var val =
                                            "_value" in o ? o._value : o.value
                                          return _vm._n(val)
                                        })
                                      _vm.provinceId = $event.target.multiple
                                        ? $$selectedVal
                                        : $$selectedVal[0]
                                    },
                                    function($event) {
                                      return _vm.$v.provinceId.$touch()
                                    }
                                  ]
                                }
                              },
                              [
                                _c("option", { domProps: { value: 0 } }, [
                                  _vm._v(_vm._s(_vm.$t("jwork.Province")))
                                ]),
                                _vm._v(" "),
                                _vm._l(_vm.arrProvince, function(p, i) {
                                  return _c(
                                    "option",
                                    { key: i, domProps: { value: p.id } },
                                    [_vm._v(_vm._s(p.name))]
                                  )
                                })
                              ],
                              2
                            )
                          ]
                        )
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticClass: "col-12 col-lg-12 col-md-12 col-sm-12" },
                      [
                        _c(
                          "div",
                          {
                            staticClass: "form-group",
                            class: {
                              "is-invalid has-danger":
                                _vm.$v.districtId.$dirty &&
                                _vm.$v.districtId.$invalid
                            }
                          },
                          [
                            _c(
                              "label",
                              {
                                staticClass: "label-company",
                                attrs: { for: "label-sign-in-7" }
                              },
                              [
                                _vm._v(_vm._s(_vm.$t("jwork.city")) + " "),
                                _c("span", { staticClass: "red" }, [
                                  _vm._v("*")
                                ])
                              ]
                            ),
                            _vm._v(" "),
                            _c(
                              "select",
                              {
                                directives: [
                                  {
                                    name: "model",
                                    rawName: "v-model.number",
                                    value: _vm.districtId,
                                    expression: "districtId",
                                    modifiers: { number: true }
                                  }
                                ],
                                staticClass: "form-control",
                                attrs: { autocomplete: "off" },
                                on: {
                                  change: [
                                    function($event) {
                                      var $$selectedVal = Array.prototype.filter
                                        .call($event.target.options, function(
                                          o
                                        ) {
                                          return o.selected
                                        })
                                        .map(function(o) {
                                          var val =
                                            "_value" in o ? o._value : o.value
                                          return _vm._n(val)
                                        })
                                      _vm.districtId = $event.target.multiple
                                        ? $$selectedVal
                                        : $$selectedVal[0]
                                    },
                                    function($event) {
                                      return _vm.$v.districtId.$touch()
                                    }
                                  ]
                                }
                              },
                              [
                                _c("option", { domProps: { value: 0 } }, [
                                  _vm._v(_vm._s(_vm.$t("jwork.city")))
                                ]),
                                _vm._v(" "),
                                _vm._l(_vm.arrDistrict, function(d, j) {
                                  return _c(
                                    "option",
                                    { key: j, domProps: { value: d.id } },
                                    [_vm._v(_vm._s(d.name))]
                                  )
                                })
                              ],
                              2
                            )
                          ]
                        )
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticClass: "col-12 col-lg-12 col-md-12 col-sm-12" },
                      [
                        _c(
                          "div",
                          {
                            staticClass: "form-group",
                            class: {
                              "is-invalid has-danger":
                                _vm.$v.street.$dirty && _vm.$v.street.$invalid
                            }
                          },
                          [
                            _c(
                              "label",
                              {
                                staticClass: "label-company",
                                attrs: { for: "label-sign-in-7" }
                              },
                              [
                                _vm._v(
                                  _vm._s(
                                    _vm.$t("jwork.web_signup_street_address")
                                  ) + " "
                                ),
                                _c("span", { staticClass: "red" }, [
                                  _vm._v("*")
                                ])
                              ]
                            ),
                            _vm._v(" "),
                            _c("input", {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value: _vm.street,
                                  expression: "street"
                                }
                              ],
                              staticClass: "form-control input-text",
                              attrs: { autocomplete: "off", type: "text" },
                              domProps: { value: _vm.street },
                              on: {
                                input: [
                                  function($event) {
                                    if ($event.target.composing) {
                                      return
                                    }
                                    _vm.street = $event.target.value
                                  },
                                  function($event) {
                                    return _vm.$v.street.$touch()
                                  }
                                ]
                              }
                            })
                          ]
                        )
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticClass: "col-12 col-lg-12 col-md-12 col-sm-12" },
                      [
                        _c("div", { staticClass: "form-group" }, [
                          _c(
                            "label",
                            {
                              staticClass: "label-company",
                              attrs: { for: "label-sign-in-7" }
                            },
                            [_vm._v(_vm._s(_vm.$t("jwork.building_name")))]
                          ),
                          _vm._v(" "),
                          _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.buildingName,
                                expression: "buildingName"
                              }
                            ],
                            staticClass: "form-control input-text",
                            attrs: { autocomplete: "off", type: "text" },
                            domProps: { value: _vm.buildingName },
                            on: {
                              input: function($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.buildingName = $event.target.value
                              }
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
                        _c(
                          "div",
                          {
                            staticClass: "form-group clearfix",
                            class: {
                              "is-invalid has-danger":
                                _vm.$v.term.$dirty && _vm.$v.term.$invalid
                            }
                          },
                          [
                            _c(
                              "label",
                              {
                                staticClass:
                                  "container label label-checkbox form-agree"
                              },
                              [
                                _vm._v(
                                  _vm._s(_vm.$t("jwork.term_agreement")) +
                                    "\r\n                                    "
                                ),
                                _c("input", {
                                  directives: [
                                    {
                                      name: "model",
                                      rawName: "v-model",
                                      value: _vm.term,
                                      expression: "term"
                                    }
                                  ],
                                  staticClass: "input-text",
                                  attrs: {
                                    autocomplete: "off",
                                    type: "checkbox"
                                  },
                                  domProps: {
                                    checked: Array.isArray(_vm.term)
                                      ? _vm._i(_vm.term, null) > -1
                                      : _vm.term
                                  },
                                  on: {
                                    input: function($event) {
                                      return _vm.$v.term.$touch()
                                    },
                                    change: function($event) {
                                      var $$a = _vm.term,
                                        $$el = $event.target,
                                        $$c = $$el.checked ? true : false
                                      if (Array.isArray($$a)) {
                                        var $$v = null,
                                          $$i = _vm._i($$a, $$v)
                                        if ($$el.checked) {
                                          $$i < 0 &&
                                            (_vm.term = $$a.concat([$$v]))
                                        } else {
                                          $$i > -1 &&
                                            (_vm.term = $$a
                                              .slice(0, $$i)
                                              .concat($$a.slice($$i + 1)))
                                        }
                                      } else {
                                        _vm.term = $$c
                                      }
                                    }
                                  }
                                }),
                                _vm._v(" "),
                                _c("span", { staticClass: "checkmark" })
                              ]
                            )
                          ]
                        )
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
                              on: {
                                click: function($event) {
                                  $event.preventDefault()
                                  return _vm.signUp($event)
                                }
                              }
                            },
                            [_vm._v(_vm._s(_vm.$t("jwork.register_use_labor")))]
                          )
                        ])
                      ]
                    )
                  ],
                  1
                )
              ]
            )
          ])
        ])
      ])
    ]
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-12 col-lg-12 col-md-12 col-sm-12" }, [
      _c("div", { staticClass: "form-group" }, [_c("hr")])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/SignUp.vue":
/*!********************************************!*\
  !*** ./resources/js/components/SignUp.vue ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _SignUp_vue_vue_type_template_id_2573bf63___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SignUp.vue?vue&type=template&id=2573bf63& */ "./resources/js/components/SignUp.vue?vue&type=template&id=2573bf63&");
/* harmony import */ var _SignUp_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SignUp.vue?vue&type=script&lang=js& */ "./resources/js/components/SignUp.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _SignUp_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _SignUp_vue_vue_type_template_id_2573bf63___WEBPACK_IMPORTED_MODULE_0__["render"],
  _SignUp_vue_vue_type_template_id_2573bf63___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/SignUp.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/SignUp.vue?vue&type=script&lang=js&":
/*!*********************************************************************!*\
  !*** ./resources/js/components/SignUp.vue?vue&type=script&lang=js& ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SignUp_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./SignUp.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/SignUp.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SignUp_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/SignUp.vue?vue&type=template&id=2573bf63&":
/*!***************************************************************************!*\
  !*** ./resources/js/components/SignUp.vue?vue&type=template&id=2573bf63& ***!
  \***************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SignUp_vue_vue_type_template_id_2573bf63___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./SignUp.vue?vue&type=template&id=2573bf63& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/SignUp.vue?vue&type=template&id=2573bf63&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SignUp_vue_vue_type_template_id_2573bf63___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SignUp_vue_vue_type_template_id_2573bf63___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/SignUpCandidate.vue":
/*!*****************************************************!*\
  !*** ./resources/js/components/SignUpCandidate.vue ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _SignUpCandidate_vue_vue_type_template_id_998fb3e0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SignUpCandidate.vue?vue&type=template&id=998fb3e0& */ "./resources/js/components/SignUpCandidate.vue?vue&type=template&id=998fb3e0&");
/* harmony import */ var _SignUpCandidate_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SignUpCandidate.vue?vue&type=script&lang=js& */ "./resources/js/components/SignUpCandidate.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _SignUpCandidate_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _SignUpCandidate_vue_vue_type_template_id_998fb3e0___WEBPACK_IMPORTED_MODULE_0__["render"],
  _SignUpCandidate_vue_vue_type_template_id_998fb3e0___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/SignUpCandidate.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/SignUpCandidate.vue?vue&type=script&lang=js&":
/*!******************************************************************************!*\
  !*** ./resources/js/components/SignUpCandidate.vue?vue&type=script&lang=js& ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SignUpCandidate_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./SignUpCandidate.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/SignUpCandidate.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SignUpCandidate_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/SignUpCandidate.vue?vue&type=template&id=998fb3e0&":
/*!************************************************************************************!*\
  !*** ./resources/js/components/SignUpCandidate.vue?vue&type=template&id=998fb3e0& ***!
  \************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SignUpCandidate_vue_vue_type_template_id_998fb3e0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./SignUpCandidate.vue?vue&type=template&id=998fb3e0& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/SignUpCandidate.vue?vue&type=template&id=998fb3e0&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SignUpCandidate_vue_vue_type_template_id_998fb3e0___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SignUpCandidate_vue_vue_type_template_id_998fb3e0___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/SignUpEmployee.vue":
/*!****************************************************!*\
  !*** ./resources/js/components/SignUpEmployee.vue ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _SignUpEmployee_vue_vue_type_template_id_3aea0f9e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SignUpEmployee.vue?vue&type=template&id=3aea0f9e& */ "./resources/js/components/SignUpEmployee.vue?vue&type=template&id=3aea0f9e&");
/* harmony import */ var _SignUpEmployee_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SignUpEmployee.vue?vue&type=script&lang=js& */ "./resources/js/components/SignUpEmployee.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _SignUpEmployee_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _SignUpEmployee_vue_vue_type_template_id_3aea0f9e___WEBPACK_IMPORTED_MODULE_0__["render"],
  _SignUpEmployee_vue_vue_type_template_id_3aea0f9e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/SignUpEmployee.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/SignUpEmployee.vue?vue&type=script&lang=js&":
/*!*****************************************************************************!*\
  !*** ./resources/js/components/SignUpEmployee.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SignUpEmployee_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./SignUpEmployee.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/SignUpEmployee.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SignUpEmployee_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/SignUpEmployee.vue?vue&type=template&id=3aea0f9e&":
/*!***********************************************************************************!*\
  !*** ./resources/js/components/SignUpEmployee.vue?vue&type=template&id=3aea0f9e& ***!
  \***********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SignUpEmployee_vue_vue_type_template_id_3aea0f9e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./SignUpEmployee.vue?vue&type=template&id=3aea0f9e& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/SignUpEmployee.vue?vue&type=template&id=3aea0f9e&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SignUpEmployee_vue_vue_type_template_id_3aea0f9e___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SignUpEmployee_vue_vue_type_template_id_3aea0f9e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);