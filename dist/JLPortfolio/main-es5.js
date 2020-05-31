function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
  /*!**************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAppComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<app-main></app-main>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/honors/honors.component.html":
  /*!************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/honors/honors.component.html ***!
    \************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppHonorsHonorsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<section class=\"honors-container\">\n    <app-section-header title=\"Honors, Scholarships, Grants and Awards\"></app-section-header>\n    <div class=\"mat-body honors-awards-info\">2018 Scholarship for Conference (Fall Semester) funded by the department of economics in University of Illinois at Urbana-Champaign</div>\n    <div class=\"mat-body honors-awards-info\">2017 Scholarship for Conference (Fall Semester) funded by the department of economics in University of Illinois at Urbana-Champaign</div>\n    <div class=\"mat-body honors-awards-info\">Fellowship for Ph.D Students (Spring Semester) funded by the department of economics in University of Illinois at Urbana-Champaign</div>\n    <div class=\"mat-body honors-awards-info\">2016 Fellowship for Ph.D Students (Fall Semester) funded by the department of economics in University of Illinois at Urbana-Champaign</div>\n    <div class=\"mat-body honors-awards-info\">2014 Graduate Research Scholarship for Humanities and Social Sciences funded by Korea Student Aid Foundation</div>\n    <div class=\"mat-body honors-awards-info\">2014 <em>Award in Paper Competition for the Market Economy</em>, ‘How to Lower the Barrier to Entry for Women in Korean Labor Market by Game Theory’, bestowed by KB Financial Group Inc. Chairman and organized by Market Economic Research Institute</div>\n    <div class=\"mat-body honors-awards-info\">2012 <em>Award in Economic Universiade</em>, ‘A Far-Sighted Policies to Develop Human Resources for the Economic Growth in Korea’, bestowed and organized by Edaily, Korea Association of Economic Education, SK communications and sponsored by Ministry of Strategy and Finance, Ministry of Knowledge Economy, Ministry of Education, Science and Technology, Ministry of Employment and Labor, Ministry of Environment</div>\n</section>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/main/main.component.html":
  /*!********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/main/main.component.html ***!
    \********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppMainMainComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<header>\n  <mat-toolbar color=\"primary\">\n    <mat-toolbar-row>\n      <a class=\"header-name\" routerLink=\"\">Jieun Lee</a>\n    </mat-toolbar-row>\n  </mat-toolbar>\n</header>\n\n<mat-sidenav-container class=\"main-container\">\n  <mat-sidenav mode=\"side\" opened>\n    <ng-container *ngFor=\"let item of navListItems\">\n      <app-nav-list-item  [link]=item.link [title]=\"item.title\"></app-nav-list-item>\n    </ng-container>\n  </mat-sidenav>\n  <mat-sidenav-content>\n    <router-outlet></router-outlet>\n  </mat-sidenav-content>\n</mat-sidenav-container>\n\n<footer>\n  <mat-toolbar class=\"footer-container\" color=\"primary\">\n    <mat-toolbar-row class=\"footer-contents\">\n      <div class=\"mat-small name-email\">\n        Jieun Lee  |  jieun2@illinois.edu\n      </div>\n    </mat-toolbar-row>\n  </mat-toolbar>\n</footer>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/nav-list-item/nav-list-item.component.html":
  /*!**************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/nav-list-item/nav-list-item.component.html ***!
    \**************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppNavListItemNavListItemComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<a class=\"nav-link\" mat-list-item [routerLink]=link routerLinkActive=\"active\">{{ title }}</a>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/personal-info/personal-info.component.html":
  /*!**************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/personal-info/personal-info.component.html ***!
    \**************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPersonalInfoPersonalInfoComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<section class=\"mat-typography contact-info-container\">\n    <app-section-header title=\"Contact & Personal Information\"></app-section-header> \n    <div class=\"image-container\">\n        <img src=\"./assets/images/jieunlee.jpg\" alt=\"Profile\">\n    </div>  \n    <div class=\"mat-body email-info\">\n        Email: <a href=\"mailto:jieun2@illinois.edu\">jieun2@illinois.edu</a>\n    </div>\n    <div class=\"mat-body nationality-info\">\n        Nationality: South Korea\n    </div>\n    <div class=\"mat-body language-info\">\n        Language: Korean(native), English(fluent)\n    </div>\n</section>\n\n<section class=\"education-container\">\n    <app-section-header title=\"Education\"></app-section-header>    \n    <div class=\"mat-body\">\n        <div class=\"education-info\">\n            <div class=\"education\">2016-2022 (Expected) University of Illinois at Urbana-Champaign, Ph.D in Economics</div>\n            <div class=\"education\">2013-2016 Ewha Womans University, MA in Economics</div>\n            <div class=\"education\">2010-2013 Ewha Womans University, Bachelor of Economics</div>\n        </div>\n    </div>\n</section>\n\n<section class=\"softwares-container\">\n    <app-section-header title=\"Softwares\"></app-section-header>    \n    <div class=\"mat-body softwares-info\">\n        Matlab, R, Python, Stata, LaTex\n    </div>\n</section>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/research-info/research-info.component.html":
  /*!**************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/research-info/research-info.component.html ***!
    \**************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppResearchInfoResearchInfoComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<section class=\"research-interest-container\">\n    <app-section-header title=\"Research Interest\"></app-section-header>\n    <div class=\"mat-body research-interest-info\">\n        Spatial econometrics, Applied econometrics\n    </div>\n</section>\n\n<section class=\"publication-container\">\n    <app-section-header title=\"Publication\"></app-section-header>\n    <div class=\"mat-body publication-info\">\n        Vladimir Hlasny, Jieun Lee. (2020). Investment in Social Capital by the Korean Elderly and Baby-Boomers. <em>The Journal of the Economics of Ageing</em>, Available online 15 April 2020, 100256.\n    </div>\n</section>\n\n<section class=\"research-in-progress-container\">\n    <app-section-header title=\"Research in Progress\"></app-section-header>\n    <div class=\"mat-body in-progress-info\">Fixed effects model with the endogenous spatial weight matrix</div>\n    <div class=\"mat-body in-progress-info\">Growth, technological interdependence, and spatial externalities with the endogenous spatial weight matrix</div>\n    <div class=\"mat-body in-progress-info\">The Effect of Social Capital on Individuals’ Economic Outcomes in the MENA Region (cowork with Prof.Hlasny, first author)</div>\n</section>\n\n<section class=\"conference-presentation-container\">\n    <app-section-header title=\"Conference Presentation\"></app-section-header>\n    <div class=\"mat-body presentation-info\"><em>The Effect of Social Capital on Individuals’ Economic Outcomes in the MENA Region</em>\n        <ul class=\"presentation-info-details\">\n            <li>39th Annual MEEA Meeting in conjunction with the Allied Social Sciences Association (ASSA), Atlanta, Georgia, January 3-7, 2019</li>\n        </ul>\n    </div>\n    <div class=\"mat-body presentation-info\">\n        <em>Investment in Social Capital by Korean Baby-Boomers and the Elderly</em>\n        <ul class=\"persentation-info-details\">\n            <li>\n                Aging & Society: Seventh Interdisciplinary Conference at University of California at Berkeley, Berkeley, USA, November 3-4, 2017\n            </li>\n            <li>\n                Korea and the World Economy(15th) ‘New Economic Paradigm and Sustainable Development’ at Korea Federation of Banks, Seoul, Korea, August 5-6, 2016\n            </li>\n            <li>\n                The 13th East Asian Social Policy Network International Annual Conference at Ewha Womans University, Seoul, Korea, July 1-2, 2016\n            </li>\n        </ul>\n    </div>\n</section>\n\n<section class=\"research-assistant-container\">\n    <app-section-header title=\"Research Assistant\"></app-section-header>\n    <div class=\"mat-body research-assistant-info\">2019 (Fall) ~ Present Prof.Anil K Bera, Department of Economics in University of Illinois at Urbana-Champaign</div>\n    <div class=\"mat-body research-assistant-info\">2018 (Spring) Prof.Eun Yi Chung, Department of Economics in University of Illinois at Urbana-Champaign</div>\n    <div class=\"mat-body research-assistant-info\">2015.7.-2015.12. Programs for vitalization of industrial mathematics based on mathematics2technology map, supervised by Prof.June Yub Lee, Department of Mathematics in Ewha Womans University, funded by Ewha University-Industry Collaboration Foundation, Seoul, Korea, supported by National Institute for Mathematical Sciences, Daejeon, Korea</div>\n    <div class=\"mat-body research-assistant-info\">2015.3.-2015.7. Gender budgets and macroeconomics, supervised by Prof.Soonhyun Kwon, Department of Economics in Ewha Womans University, funded by Ewha University-Industry Collaboration Foundation, Seoul, Korea, supported by Korean Women’s Development Institute, Seoul, Korea</div>\n    <div class=\"mat-body research-assistant-info\">2014.10.-2014.12. Consignment Business of Employment Insurance Center(Employment Stability and Local Employment Support Work Group), supervised by Dr.Sangho Lee, Korea Labor Institute, funded by Korea labor Institute, Seoul, Korea</div>\n</section>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/section-header/section-header.component.html":
  /*!****************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/section-header/section-header.component.html ***!
    \****************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppSectionHeaderSectionHeaderComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<h3 class=\"section-header mat-h3\">\n    {{ title }}\n</h3>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/teaching/teaching.component.html":
  /*!****************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/teaching/teaching.component.html ***!
    \****************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppTeachingTeachingComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<section class=\"teaching-container\">\n    <app-section-header title=\"Teaching Experiences\"></app-section-header>\n    <div class=\"mat-body teaching-info\">2019 (Spring), 2020 (Spring) <em>Macroeconomic Principles (Undergraduate, Econ103)</em>, Discussion Section Instructor and Teaching Assistant, Prof.Joseph A Petry, Department of Economics in University of Illinois at Urbana-Champaign</div>\n    <div class=\"mat-body teaching-info\">2018 (Spring and Fall) <em>Statistics in Economics (Undergraduate, Econ202)</em>, Discussion Section Instructor and Teaching Assistant, Prof.Colleen Schultz, Department of Economics in University of Illinois at Urbana-Champaign</div>\n    <div class=\"mat-body teaching-info\">2017 (Fall) <em>Statistics in Economics (Undergraduate, Econ202)</em>, Discussion Section Instructor and Teaching Assistant, Prof.Colleen Schultz, Department of Economics in University of Illinois at Urbana-Champaign</div>\n    <div class=\"mat-body teaching-info\">2015 (Spring) <em>Microeconometrics (Graduate)</em>, Teaching Assistant, Prof.Hosin Song, Department of Economics in Ewha Womans University</div>\n    <div class=\"mat-body teaching-info\">2014 (Spring), 2015 (Spring) <em>Applied Econometrics (Undergraduate)</em>, Teaching Assistant, Prof.Hosin Song, Department of Economics in Ewha Womans University</div>\n    <div class=\"mat-body teaching-info\">2014 (Fall), 2015 (Spring) <em>Statistics in Economics (Undergraduate)</em>, Teaching Assistant, Prof.Hosin Song, Department of Economics in Ewha Womans University</div>\n</section>";
    /***/
  },

  /***/
  "./node_modules/tslib/tslib.es6.js":
  /*!*****************************************!*\
    !*** ./node_modules/tslib/tslib.es6.js ***!
    \*****************************************/

  /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */

  /***/
  function node_modulesTslibTslibEs6Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__extends", function () {
      return __extends;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__assign", function () {
      return _assign;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__rest", function () {
      return __rest;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__decorate", function () {
      return __decorate;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__param", function () {
      return __param;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__metadata", function () {
      return __metadata;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__awaiter", function () {
      return __awaiter;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__generator", function () {
      return __generator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__exportStar", function () {
      return __exportStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__values", function () {
      return __values;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__read", function () {
      return __read;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spread", function () {
      return __spread;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () {
      return __spreadArrays;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__await", function () {
      return __await;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () {
      return __asyncGenerator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () {
      return __asyncDelegator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncValues", function () {
      return __asyncValues;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () {
      return __makeTemplateObject;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importStar", function () {
      return __importStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importDefault", function () {
      return __importDefault;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function () {
      return __classPrivateFieldGet;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function () {
      return __classPrivateFieldSet;
    });
    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation.
    
    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.
    
    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */

    /* global Reflect, Promise */


    var _extendStatics = function extendStatics(d, b) {
      _extendStatics = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (d, b) {
        d.__proto__ = b;
      } || function (d, b) {
        for (var p in b) {
          if (b.hasOwnProperty(p)) d[p] = b[p];
        }
      };

      return _extendStatics(d, b);
    };

    function __extends(d, b) {
      _extendStatics(d, b);

      function __() {
        this.constructor = d;
      }

      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var _assign = function __assign() {
      _assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];

          for (var p in s) {
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
          }
        }

        return t;
      };

      return _assign.apply(this, arguments);
    };

    function __rest(s, e) {
      var t = {};

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
      }

      if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
      }
      return t;
    }

    function __decorate(decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
      return function (target, key) {
        decorator(target, key, paramIndex);
      };
    }

    function __metadata(metadataKey, metadataValue) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
      function adopt(value) {
        return value instanceof P ? value : new P(function (resolve) {
          resolve(value);
        });
      }

      return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }

        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }

        function step(result) {
          result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }

        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    }

    function __generator(thisArg, body) {
      var _ = {
        label: 0,
        sent: function sent() {
          if (t[0] & 1) throw t[1];
          return t[1];
        },
        trys: [],
        ops: []
      },
          f,
          y,
          t,
          g;
      return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
      }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
        return this;
      }), g;

      function verb(n) {
        return function (v) {
          return step([n, v]);
        };
      }

      function step(op) {
        if (f) throw new TypeError("Generator is already executing.");

        while (_) {
          try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];

            switch (op[0]) {
              case 0:
              case 1:
                t = op;
                break;

              case 4:
                _.label++;
                return {
                  value: op[1],
                  done: false
                };

              case 5:
                _.label++;
                y = op[1];
                op = [0];
                continue;

              case 7:
                op = _.ops.pop();

                _.trys.pop();

                continue;

              default:
                if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                  _ = 0;
                  continue;
                }

                if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                  _.label = op[1];
                  break;
                }

                if (op[0] === 6 && _.label < t[1]) {
                  _.label = t[1];
                  t = op;
                  break;
                }

                if (t && _.label < t[2]) {
                  _.label = t[2];

                  _.ops.push(op);

                  break;
                }

                if (t[2]) _.ops.pop();

                _.trys.pop();

                continue;
            }

            op = body.call(thisArg, _);
          } catch (e) {
            op = [6, e];
            y = 0;
          } finally {
            f = t = 0;
          }
        }

        if (op[0] & 5) throw op[1];
        return {
          value: op[0] ? op[1] : void 0,
          done: true
        };
      }
    }

    function __exportStar(m, exports) {
      for (var p in m) {
        if (!exports.hasOwnProperty(p)) exports[p] = m[p];
      }
    }

    function __values(o) {
      var s = typeof Symbol === "function" && Symbol.iterator,
          m = s && o[s],
          i = 0;
      if (m) return m.call(o);
      if (o && typeof o.length === "number") return {
        next: function next() {
          if (o && i >= o.length) o = void 0;
          return {
            value: o && o[i++],
            done: !o
          };
        }
      };
      throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    }

    function __read(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m) return o;
      var i = m.call(o),
          r,
          ar = [],
          e;

      try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
          ar.push(r.value);
        }
      } catch (error) {
        e = {
          error: error
        };
      } finally {
        try {
          if (r && !r.done && (m = i["return"])) m.call(i);
        } finally {
          if (e) throw e.error;
        }
      }

      return ar;
    }

    function __spread() {
      for (var ar = [], i = 0; i < arguments.length; i++) {
        ar = ar.concat(__read(arguments[i]));
      }

      return ar;
    }

    function __spreadArrays() {
      for (var s = 0, i = 0, il = arguments.length; i < il; i++) {
        s += arguments[i].length;
      }

      for (var r = Array(s), k = 0, i = 0; i < il; i++) {
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) {
          r[k] = a[j];
        }
      }

      return r;
    }

    ;

    function __await(v) {
      return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var g = generator.apply(thisArg, _arguments || []),
          i,
          q = [];
      return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i;

      function verb(n) {
        if (g[n]) i[n] = function (v) {
          return new Promise(function (a, b) {
            q.push([n, v, a, b]) > 1 || resume(n, v);
          });
        };
      }

      function resume(n, v) {
        try {
          step(g[n](v));
        } catch (e) {
          settle(q[0][3], e);
        }
      }

      function step(r) {
        r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
      }

      function fulfill(value) {
        resume("next", value);
      }

      function reject(value) {
        resume("throw", value);
      }

      function settle(f, v) {
        if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
      }
    }

    function __asyncDelegator(o) {
      var i, p;
      return i = {}, verb("next"), verb("throw", function (e) {
        throw e;
      }), verb("return"), i[Symbol.iterator] = function () {
        return this;
      }, i;

      function verb(n, f) {
        i[n] = o[n] ? function (v) {
          return (p = !p) ? {
            value: __await(o[n](v)),
            done: n === "return"
          } : f ? f(v) : v;
        } : f;
      }
    }

    function __asyncValues(o) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var m = o[Symbol.asyncIterator],
          i;
      return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i);

      function verb(n) {
        i[n] = o[n] && function (v) {
          return new Promise(function (resolve, reject) {
            v = o[n](v), settle(resolve, reject, v.done, v.value);
          });
        };
      }

      function settle(resolve, reject, d, v) {
        Promise.resolve(v).then(function (v) {
          resolve({
            value: v,
            done: d
          });
        }, reject);
      }
    }

    function __makeTemplateObject(cooked, raw) {
      if (Object.defineProperty) {
        Object.defineProperty(cooked, "raw", {
          value: raw
        });
      } else {
        cooked.raw = raw;
      }

      return cooked;
    }

    ;

    function __importStar(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) for (var k in mod) {
        if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
      }
      result["default"] = mod;
      return result;
    }

    function __importDefault(mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    }

    function __classPrivateFieldGet(receiver, privateMap) {
      if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
      }

      return privateMap.get(receiver);
    }

    function __classPrivateFieldSet(receiver, privateMap, value) {
      if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
      }

      privateMap.set(receiver, value);
      return value;
    }
    /***/

  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _personal_info_personal_info_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./personal-info/personal-info.component */
    "./src/app/personal-info/personal-info.component.ts");
    /* harmony import */


    var _research_info_research_info_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./research-info/research-info.component */
    "./src/app/research-info/research-info.component.ts");
    /* harmony import */


    var _honors_honors_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./honors/honors.component */
    "./src/app/honors/honors.component.ts");
    /* harmony import */


    var _teaching_teaching_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./teaching/teaching.component */
    "./src/app/teaching/teaching.component.ts");

    var routes = [{
      path: '',
      component: _personal_info_personal_info_component__WEBPACK_IMPORTED_MODULE_3__["PersonalInfoComponent"]
    }, {
      path: 'personalInfo',
      component: _personal_info_personal_info_component__WEBPACK_IMPORTED_MODULE_3__["PersonalInfoComponent"]
    }, {
      path: 'research',
      component: _research_info_research_info_component__WEBPACK_IMPORTED_MODULE_4__["ResearchInfoComponent"]
    }, {
      path: 'honors',
      component: _honors_honors_component__WEBPACK_IMPORTED_MODULE_5__["HonorsComponent"]
    }, {
      path: 'teaching',
      component: _teaching_teaching_component__WEBPACK_IMPORTED_MODULE_6__["TeachingComponent"]
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], AppRoutingModule);
    /***/
  },

  /***/
  "./src/app/app.component.scss":
  /*!************************************!*\
    !*** ./src/app/app.component.scss ***!
    \************************************/

  /*! exports provided: default */

  /***/
  function srcAppAppComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "app-main {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQzpcXFVzZXJzXFxZZW9uc3VuZyBLaW1cXERlc2t0b3BcXEpMUG9ydGZvbGlvL3NyY1xcYXBwXFxhcHAuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQUE7RUFDQSxzQkFBQTtFQUNBLFlBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImFwcC1tYWluIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG59IiwiYXBwLW1haW4ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBoZWlnaHQ6IDEwMCU7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var AppComponent = function AppComponent() {
      _classCallCheck(this, AppComponent);

      this.title = 'JLPortfolio';
    };

    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-root',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./app.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./app.component.scss */
      "./src/app/app.component.scss"))["default"]]
    })], AppComponent);
    /***/
  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material */
    "./node_modules/@angular/material/esm2015/material.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/fesm2015/animations.js");
    /* harmony import */


    var _main_main_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./main/main.component */
    "./src/app/main/main.component.ts");
    /* harmony import */


    var _personal_info_personal_info_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./personal-info/personal-info.component */
    "./src/app/personal-info/personal-info.component.ts");
    /* harmony import */


    var _nav_list_item_nav_list_item_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./nav-list-item/nav-list-item.component */
    "./src/app/nav-list-item/nav-list-item.component.ts");
    /* harmony import */


    var _section_header_section_header_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./section-header/section-header.component */
    "./src/app/section-header/section-header.component.ts");
    /* harmony import */


    var _research_info_research_info_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./research-info/research-info.component */
    "./src/app/research-info/research-info.component.ts");
    /* harmony import */


    var _honors_honors_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./honors/honors.component */
    "./src/app/honors/honors.component.ts");
    /* harmony import */


    var _teaching_teaching_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./teaching/teaching.component */
    "./src/app/teaching/teaching.component.ts");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"], _main_main_component__WEBPACK_IMPORTED_MODULE_7__["MainComponent"], _personal_info_personal_info_component__WEBPACK_IMPORTED_MODULE_8__["PersonalInfoComponent"], _nav_list_item_nav_list_item_component__WEBPACK_IMPORTED_MODULE_9__["NavListItemComponent"], _section_header_section_header_component__WEBPACK_IMPORTED_MODULE_10__["SectionHeaderComponent"], _research_info_research_info_component__WEBPACK_IMPORTED_MODULE_11__["ResearchInfoComponent"], _honors_honors_component__WEBPACK_IMPORTED_MODULE_12__["HonorsComponent"], _teaching_teaching_component__WEBPACK_IMPORTED_MODULE_13__["TeachingComponent"]],
      imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["NoopAnimationsModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSidenavModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatIconModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatListModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatToolbarModule"]],
      providers: [],
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
    })], AppModule);
    /***/
  },

  /***/
  "./src/app/honors/honors.component.scss":
  /*!**********************************************!*\
    !*** ./src/app/honors/honors.component.scss ***!
    \**********************************************/

  /*! exports provided: default */

  /***/
  function srcAppHonorsHonorsComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbm9ycy9ob25vcnMuY29tcG9uZW50LnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/honors/honors.component.ts":
  /*!********************************************!*\
    !*** ./src/app/honors/honors.component.ts ***!
    \********************************************/

  /*! exports provided: HonorsComponent */

  /***/
  function srcAppHonorsHonorsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HonorsComponent", function () {
      return HonorsComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var HonorsComponent = /*#__PURE__*/function () {
      function HonorsComponent() {
        _classCallCheck(this, HonorsComponent);
      }

      _createClass(HonorsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return HonorsComponent;
    }();

    HonorsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-honors',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./honors.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/honors/honors.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./honors.component.scss */
      "./src/app/honors/honors.component.scss"))["default"]]
    })], HonorsComponent);
    /***/
  },

  /***/
  "./src/app/main/main.component.scss":
  /*!******************************************!*\
    !*** ./src/app/main/main.component.scss ***!
    \******************************************/

  /*! exports provided: default */

  /***/
  function srcAppMainMainComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".header-name {\n  margin-left: 1rem;\n  display: block;\n  text-decoration: none;\n  color: white;\n  padding: 1rem;\n  font-size: 1.5rem;\n}\n\n.main-container {\n  flex-grow: 1;\n}\n\n.main-container mat-sidenav {\n  width: 200px;\n}\n\n.main-container mat-sidenav-content {\n  display: block;\n  height: 100%;\n  padding: 1rem;\n}\n\n.main-container mat-sidenav-content section[class$=-container] {\n  padding-bottom: 1rem;\n  width: 70%;\n}\n\n.main-container mat-sidenav-content div[class$=-info] {\n  margin-bottom: 0.5rem;\n}\n\nfooter .footer-container {\n  min-height: 2rem;\n}\n\nfooter .footer-container .footer-contents {\n  height: 2rem;\n}\n\nfooter .footer-container .footer-contents .name-email {\n  width: 100%;\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbi9DOlxcVXNlcnNcXFllb25zdW5nIEtpbVxcRGVza3RvcFxcSkxQb3J0Zm9saW8vc3JjXFxhcHBcXG1haW5cXG1haW4uY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL21haW4vbWFpbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLHFCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxpQkFBQTtBQ0NKOztBRENBO0VBQ0ksWUFBQTtBQ0VKOztBRERJO0VBQ0ksWUFBQTtBQ0dSOztBRERJO0VBQ0ksY0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0FDR1I7O0FERFE7RUFDSSxvQkFBQTtFQUNBLFVBQUE7QUNHWjs7QURBUTtFQUNJLHFCQUFBO0FDRVo7O0FESUk7RUFDSSxnQkFBQTtBQ0RSOztBREVRO0VBQ0ksWUFBQTtBQ0FaOztBRENZO0VBQ0ksV0FBQTtFQUNBLGtCQUFBO0FDQ2hCIiwiZmlsZSI6InNyYy9hcHAvbWFpbi9tYWluLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmhlYWRlci1uYW1lIHtcclxuICAgIG1hcmdpbi1sZWZ0OiAxcmVtO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBwYWRkaW5nOiAxcmVtO1xyXG4gICAgZm9udC1zaXplOiAxLjVyZW07XHJcbn1cclxuLm1haW4tY29udGFpbmVyIHtcclxuICAgIGZsZXgtZ3JvdzogMTtcclxuICAgIG1hdC1zaWRlbmF2IHtcclxuICAgICAgICB3aWR0aDogMjAwcHg7XHJcbiAgICB9XHJcbiAgICBtYXQtc2lkZW5hdi1jb250ZW50IHtcclxuICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgcGFkZGluZzogMXJlbTtcclxuXHJcbiAgICAgICAgc2VjdGlvbltjbGFzcyQ9Jy1jb250YWluZXInXSB7XHJcbiAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAxcmVtO1xyXG4gICAgICAgICAgICB3aWR0aDogNzAlO1xyXG4gICAgICAgIH1cclxuICAgIFxyXG4gICAgICAgIGRpdltjbGFzcyQ9Jy1pbmZvJ10ge1xyXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAwLjVyZW07XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5mb290ZXIge1xyXG4gICAgLmZvb3Rlci1jb250YWluZXIgeyBcclxuICAgICAgICBtaW4taGVpZ2h0OiAycmVtO1xyXG4gICAgICAgIC5mb290ZXItY29udGVudHMge1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDJyZW07XHJcbiAgICAgICAgICAgIC5uYW1lLWVtYWlsIHtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiIsIi5oZWFkZXItbmFtZSB7XG4gIG1hcmdpbi1sZWZ0OiAxcmVtO1xuICBkaXNwbGF5OiBibG9jaztcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBjb2xvcjogd2hpdGU7XG4gIHBhZGRpbmc6IDFyZW07XG4gIGZvbnQtc2l6ZTogMS41cmVtO1xufVxuXG4ubWFpbi1jb250YWluZXIge1xuICBmbGV4LWdyb3c6IDE7XG59XG4ubWFpbi1jb250YWluZXIgbWF0LXNpZGVuYXYge1xuICB3aWR0aDogMjAwcHg7XG59XG4ubWFpbi1jb250YWluZXIgbWF0LXNpZGVuYXYtY29udGVudCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHBhZGRpbmc6IDFyZW07XG59XG4ubWFpbi1jb250YWluZXIgbWF0LXNpZGVuYXYtY29udGVudCBzZWN0aW9uW2NsYXNzJD0tY29udGFpbmVyXSB7XG4gIHBhZGRpbmctYm90dG9tOiAxcmVtO1xuICB3aWR0aDogNzAlO1xufVxuLm1haW4tY29udGFpbmVyIG1hdC1zaWRlbmF2LWNvbnRlbnQgZGl2W2NsYXNzJD0taW5mb10ge1xuICBtYXJnaW4tYm90dG9tOiAwLjVyZW07XG59XG5cbmZvb3RlciAuZm9vdGVyLWNvbnRhaW5lciB7XG4gIG1pbi1oZWlnaHQ6IDJyZW07XG59XG5mb290ZXIgLmZvb3Rlci1jb250YWluZXIgLmZvb3Rlci1jb250ZW50cyB7XG4gIGhlaWdodDogMnJlbTtcbn1cbmZvb3RlciAuZm9vdGVyLWNvbnRhaW5lciAuZm9vdGVyLWNvbnRlbnRzIC5uYW1lLWVtYWlsIHtcbiAgd2lkdGg6IDEwMCU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/main/main.component.ts":
  /*!****************************************!*\
    !*** ./src/app/main/main.component.ts ***!
    \****************************************/

  /*! exports provided: MainComponent */

  /***/
  function srcAppMainMainComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MainComponent", function () {
      return MainComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var MainComponent = /*#__PURE__*/function () {
      function MainComponent() {
        _classCallCheck(this, MainComponent);

        this.navListItems = [{
          title: "Personal Info",
          link: "personalInfo"
        }, {
          title: "Research",
          link: "research"
        }, {
          title: "Honors",
          link: "honors"
        }, {
          title: "Teaching",
          link: "teaching"
        }];
      }

      _createClass(MainComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return MainComponent;
    }();

    MainComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-main',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./main.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/main/main.component.html"))["default"],
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./main.component.scss */
      "./src/app/main/main.component.scss"))["default"]]
    })], MainComponent);
    /***/
  },

  /***/
  "./src/app/nav-list-item/nav-list-item.component.scss":
  /*!************************************************************!*\
    !*** ./src/app/nav-list-item/nav-list-item.component.scss ***!
    \************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppNavListItemNavListItemComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ":host .nav-link {\n  font-family: Caladea, \"Helvetica Neue\", sans-serif !important;\n  display: block;\n  text-decoration: none;\n  text-align: center;\n  color: white;\n  padding: 1rem;\n  border: 1px solid transparent;\n}\n:host .nav-link:hover {\n  border: 1px solid white;\n}\n:host .nav-link.active {\n  border: 1px solid white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmF2LWxpc3QtaXRlbS9DOlxcVXNlcnNcXFllb25zdW5nIEtpbVxcRGVza3RvcFxcSkxQb3J0Zm9saW8vc3JjXFxhcHBcXG5hdi1saXN0LWl0ZW1cXG5hdi1saXN0LWl0ZW0uY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL25hdi1saXN0LWl0ZW0vbmF2LWxpc3QtaXRlbS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDSTtFQUNJLDZEQUFBO0VBQ0EsY0FBQTtFQUNBLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLDZCQUFBO0FDQVI7QURFUTtFQUNJLHVCQUFBO0FDQVo7QURHUTtFQUNJLHVCQUFBO0FDRFoiLCJmaWxlIjoic3JjL2FwcC9uYXYtbGlzdC1pdGVtL25hdi1saXN0LWl0ZW0uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XHJcbiAgICAubmF2LWxpbmsge1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiBDYWxhZGVhLFwiSGVsdmV0aWNhIE5ldWVcIixzYW5zLXNlcmlmICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgcGFkZGluZzogMXJlbTtcclxuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcclxuXHJcbiAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgJi5hY3RpdmUge1xyXG4gICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iLCI6aG9zdCAubmF2LWxpbmsge1xuICBmb250LWZhbWlseTogQ2FsYWRlYSwgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBzYW5zLXNlcmlmICFpbXBvcnRhbnQ7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY29sb3I6IHdoaXRlO1xuICBwYWRkaW5nOiAxcmVtO1xuICBib3JkZXI6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcbn1cbjpob3N0IC5uYXYtbGluazpob3ZlciB7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xufVxuOmhvc3QgLm5hdi1saW5rLmFjdGl2ZSB7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/nav-list-item/nav-list-item.component.ts":
  /*!**********************************************************!*\
    !*** ./src/app/nav-list-item/nav-list-item.component.ts ***!
    \**********************************************************/

  /*! exports provided: NavListItemComponent */

  /***/
  function srcAppNavListItemNavListItemComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NavListItemComponent", function () {
      return NavListItemComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var NavListItemComponent = /*#__PURE__*/function () {
      function NavListItemComponent() {
        _classCallCheck(this, NavListItemComponent);
      }

      _createClass(NavListItemComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return NavListItemComponent;
    }();

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], NavListItemComponent.prototype, "link", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], NavListItemComponent.prototype, "title", void 0);
    NavListItemComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-nav-list-item',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./nav-list-item.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/nav-list-item/nav-list-item.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./nav-list-item.component.scss */
      "./src/app/nav-list-item/nav-list-item.component.scss"))["default"]]
    })], NavListItemComponent);
    /***/
  },

  /***/
  "./src/app/personal-info/personal-info.component.scss":
  /*!************************************************************!*\
    !*** ./src/app/personal-info/personal-info.component.scss ***!
    \************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPersonalInfoPersonalInfoComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ":host .image-container {\n  margin-bottom: 1rem;\n}\n:host .image-container img {\n  width: 200px;\n  height: auto;\n}\n:host .email-info a {\n  color: white;\n  text-decoration: none;\n}\n:host .education-info .education {\n  padding-bottom: 0.5rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGVyc29uYWwtaW5mby9DOlxcVXNlcnNcXFllb25zdW5nIEtpbVxcRGVza3RvcFxcSkxQb3J0Zm9saW8vc3JjXFxhcHBcXHBlcnNvbmFsLWluZm9cXHBlcnNvbmFsLWluZm8uY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3BlcnNvbmFsLWluZm8vcGVyc29uYWwtaW5mby5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDSTtFQUNJLG1CQUFBO0FDQVI7QURDUTtFQUNJLFlBQUE7RUFDQSxZQUFBO0FDQ1o7QURJUTtFQUNJLFlBQUE7RUFDQSxxQkFBQTtBQ0ZaO0FET1E7RUFDSSxzQkFBQTtBQ0xaIiwiZmlsZSI6InNyYy9hcHAvcGVyc29uYWwtaW5mby9wZXJzb25hbC1pbmZvLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xyXG4gICAgLmltYWdlLWNvbnRhaW5lciB7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcclxuICAgICAgICBpbWcge1xyXG4gICAgICAgICAgICB3aWR0aDogMjAwcHg7XHJcbiAgICAgICAgICAgIGhlaWdodDogYXV0bztcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLmVtYWlsLWluZm8ge1xyXG4gICAgICAgIGEge1xyXG4gICAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLmVkdWNhdGlvbi1pbmZvIHtcclxuICAgICAgICAuZWR1Y2F0aW9uIHtcclxuICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDAuNXJlbTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iLCI6aG9zdCAuaW1hZ2UtY29udGFpbmVyIHtcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbn1cbjpob3N0IC5pbWFnZS1jb250YWluZXIgaW1nIHtcbiAgd2lkdGg6IDIwMHB4O1xuICBoZWlnaHQ6IGF1dG87XG59XG46aG9zdCAuZW1haWwtaW5mbyBhIHtcbiAgY29sb3I6IHdoaXRlO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG46aG9zdCAuZWR1Y2F0aW9uLWluZm8gLmVkdWNhdGlvbiB7XG4gIHBhZGRpbmctYm90dG9tOiAwLjVyZW07XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/personal-info/personal-info.component.ts":
  /*!**********************************************************!*\
    !*** ./src/app/personal-info/personal-info.component.ts ***!
    \**********************************************************/

  /*! exports provided: PersonalInfoComponent */

  /***/
  function srcAppPersonalInfoPersonalInfoComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PersonalInfoComponent", function () {
      return PersonalInfoComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var PersonalInfoComponent = /*#__PURE__*/function () {
      function PersonalInfoComponent() {
        _classCallCheck(this, PersonalInfoComponent);
      }

      _createClass(PersonalInfoComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return PersonalInfoComponent;
    }();

    PersonalInfoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-personal-info',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./personal-info.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/personal-info/personal-info.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./personal-info.component.scss */
      "./src/app/personal-info/personal-info.component.scss"))["default"]]
    })], PersonalInfoComponent);
    /***/
  },

  /***/
  "./src/app/research-info/research-info.component.scss":
  /*!************************************************************!*\
    !*** ./src/app/research-info/research-info.component.scss ***!
    \************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppResearchInfoResearchInfoComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Jlc2VhcmNoLWluZm8vcmVzZWFyY2gtaW5mby5jb21wb25lbnQuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/research-info/research-info.component.ts":
  /*!**********************************************************!*\
    !*** ./src/app/research-info/research-info.component.ts ***!
    \**********************************************************/

  /*! exports provided: ResearchInfoComponent */

  /***/
  function srcAppResearchInfoResearchInfoComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ResearchInfoComponent", function () {
      return ResearchInfoComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var ResearchInfoComponent = /*#__PURE__*/function () {
      function ResearchInfoComponent() {
        _classCallCheck(this, ResearchInfoComponent);
      }

      _createClass(ResearchInfoComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ResearchInfoComponent;
    }();

    ResearchInfoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-research-info',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./research-info.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/research-info/research-info.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./research-info.component.scss */
      "./src/app/research-info/research-info.component.scss"))["default"]]
    })], ResearchInfoComponent);
    /***/
  },

  /***/
  "./src/app/section-header/section-header.component.scss":
  /*!**************************************************************!*\
    !*** ./src/app/section-header/section-header.component.scss ***!
    \**************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppSectionHeaderSectionHeaderComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ":host .section-header {\n  border-bottom: 1px solid white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2VjdGlvbi1oZWFkZXIvQzpcXFVzZXJzXFxZZW9uc3VuZyBLaW1cXERlc2t0b3BcXEpMUG9ydGZvbGlvL3NyY1xcYXBwXFxzZWN0aW9uLWhlYWRlclxcc2VjdGlvbi1oZWFkZXIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3NlY3Rpb24taGVhZGVyL3NlY3Rpb24taGVhZGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNJO0VBQ0ksOEJBQUE7QUNBUiIsImZpbGUiOiJzcmMvYXBwL3NlY3Rpb24taGVhZGVyL3NlY3Rpb24taGVhZGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xyXG4gICAgLnNlY3Rpb24taGVhZGVyIHtcclxuICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgd2hpdGU7XHJcbiAgICB9XHJcbn0iLCI6aG9zdCAuc2VjdGlvbi1oZWFkZXIge1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgd2hpdGU7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/section-header/section-header.component.ts":
  /*!************************************************************!*\
    !*** ./src/app/section-header/section-header.component.ts ***!
    \************************************************************/

  /*! exports provided: SectionHeaderComponent */

  /***/
  function srcAppSectionHeaderSectionHeaderComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SectionHeaderComponent", function () {
      return SectionHeaderComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var SectionHeaderComponent = /*#__PURE__*/function () {
      function SectionHeaderComponent() {
        _classCallCheck(this, SectionHeaderComponent);
      }

      _createClass(SectionHeaderComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return SectionHeaderComponent;
    }();

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], SectionHeaderComponent.prototype, "title", void 0);
    SectionHeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-section-header',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./section-header.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/section-header/section-header.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./section-header.component.scss */
      "./src/app/section-header/section-header.component.scss"))["default"]]
    })], SectionHeaderComponent);
    /***/
  },

  /***/
  "./src/app/teaching/teaching.component.scss":
  /*!**************************************************!*\
    !*** ./src/app/teaching/teaching.component.scss ***!
    \**************************************************/

  /*! exports provided: default */

  /***/
  function srcAppTeachingTeachingComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RlYWNoaW5nL3RlYWNoaW5nLmNvbXBvbmVudC5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/teaching/teaching.component.ts":
  /*!************************************************!*\
    !*** ./src/app/teaching/teaching.component.ts ***!
    \************************************************/

  /*! exports provided: TeachingComponent */

  /***/
  function srcAppTeachingTeachingComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TeachingComponent", function () {
      return TeachingComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var TeachingComponent = /*#__PURE__*/function () {
      function TeachingComponent() {
        _classCallCheck(this, TeachingComponent);
      }

      _createClass(TeachingComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return TeachingComponent;
    }();

    TeachingComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-teaching',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./teaching.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/teaching/teaching.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./teaching.component.scss */
      "./src/app/teaching/teaching.component.scss"))["default"]]
    })], TeachingComponent);
    /***/
  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js"); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/platform-browser-dynamic */
    "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
    }

    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/
  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! C:\Users\Yeonsung Kim\Desktop\JLPortfolio\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map