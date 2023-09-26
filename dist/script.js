/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/burger.js":
/*!**************************!*\
  !*** ./src/js/burger.js ***!
  \**************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   burgerMenu: () => (/* binding */ burgerMenu)
/* harmony export */ });
var burgerMenu = function burgerMenu(btnSelector, menuSelector, overlaySelector, btnActive, menuActive, overlayActive, closeSelector) {
  var offset = arguments.length > 7 && arguments[7] !== undefined ? arguments[7] : '10px';
  var burgerBtn = document.querySelector(btnSelector),
    burgerMenu = document.querySelector(menuSelector),
    overlay = document.querySelector(overlaySelector),
    close = document.querySelector(closeSelector),
    body = document.querySelector('body');
  burgerBtn.addEventListener('click', function () {
    if (!this.classList.contains(btnActive)) {
      this.classList.add(btnActive);
      burgerMenu.classList.add(menuActive);
      overlay === null || overlay === void 0 || overlay.classList.add(overlayActive);
      body.style.overflow = "hidden";
      body.style.paddingRight = "".concat(offset, "px");
    } else {
      this.classList.remove(btnActive);
      burgerMenu.classList.remove(menuActive);
      overlay === null || overlay === void 0 || overlay.classList.remove(overlayActive);
      body.style.overflow = 'unset';
      body.style.paddingRight = 'unset';
    }
  });
  close.addEventListener('click', function () {
    burgerBtn.classList.remove(btnActive);
    burgerMenu.classList.remove(menuActive);
    overlay === null || overlay === void 0 || overlay.classList.remove(overlayActive);
    body.style.overflow = 'unset';
    body.style.paddingRight = 'unset';
  });
};


/***/ }),

/***/ "./src/js/slider.js":
/*!**************************!*\
  !*** ./src/js/slider.js ***!
  \**************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   slider: () => (/* binding */ slider)
/* harmony export */ });
// import Swiper from 'swiper';
// import 'swiper/css';

var slider = function slider() {
  try {
    var swiper = new Swiper('.comments-swiper', {
      centeredSlides: true,
      initialSlide: 1,
      slideClass: 'comments-swiper-slide',
      navigation: {
        nextEl: '.next',
        prevEl: '.prev'
      },
      breakpoints: {
        320: {
          slidesPerView: 1
        },
        992: {
          slidesPerView: 3
        },
        1200: {
          slidesPerView: 3
        }
      }
    });
  } catch (error) {
    console.log(error);
  }
};

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _burger_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./burger.js */ "./src/js/burger.js");
/* harmony import */ var _slider_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./slider.js */ "./src/js/slider.js");




window.addEventListener('DOMContentLoaded', function () {
  (0,_burger_js__WEBPACK_IMPORTED_MODULE_0__.burgerMenu)('.burger-btn', '.burger-menu', null, 'burger-btn_active', 'burger-menu_active', null, '.burger-close');
  (0,_slider_js__WEBPACK_IMPORTED_MODULE_1__.slider)();
});
})();

/******/ })()
;
//# sourceMappingURL=script.js.map