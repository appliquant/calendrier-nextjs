"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./utils/load-calendar2.ts":
/*!*********************************!*\
  !*** ./utils/load-calendar2.ts ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ LoadCalendar2; }\n/* harmony export */ });\n/**\n * Retourne les informations nécessaire pour render le calendrier\n * @param nav - Objet TypeNav contenant le mois et l'année\n * @returns Retourne les jours dans le mois ainsi que le titre du header\n * @example\n * const [daysInMonth, headerText] = GetCalendarInfo({ month: 0, year: 2021 });\n */ function LoadCalendar2(nav) {\n    var dt = new Date();\n    dt.setFullYear(nav.year);\n    dt.setMonth(nav.month);\n    var calendarStartingDay = \"Sy\";\n    var daysInCalendar = 5 * 7; // 5 rangées (semaines) * 7 jours par semaine  = 35 jours à afficher sur le calendrier\n    var daysInMonth = [];\n    for(var i = 0; i < daysInCalendar; i++){\n        var today = new Date(dt.getFullYear(), dt.getMonth(), i + 1);\n        var dayName = today.toLocaleString(\"en-CA\", {\n            weekday: \"long\"\n        });\n        var day = {\n            date: today.getDate(),\n            month: today.getMonth(),\n            year: today.getFullYear(),\n            dayName: dayName,\n            isCurrentDay: today.getDate() === dt.getDate() && today.getMonth() === dt.getMonth(),\n            isPadding: today.getMonth() !== dt.getMonth()\n        };\n        daysInMonth.push(day);\n    }\n    // Header texte (barre de navigation)\n    var header = \"\".concat(dt.toLocaleString(\"en-CA\", {\n        month: \"long\"\n    }), \" \").concat(dt.getFullYear());\n    return [\n        daysInMonth,\n        header\n    ];\n};\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi91dGlscy9sb2FkLWNhbGVuZGFyMi50cy5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBSUE7Ozs7OztDQU1DLEdBQ2MsU0FBU0EsYUFBYSxDQUFDQyxHQUFZLEVBQXVCO0lBQ3ZFLElBQU1DLEVBQUUsR0FBRyxJQUFJQyxJQUFJLEVBQUU7SUFDckJELEVBQUUsQ0FBQ0UsV0FBVyxDQUFDSCxHQUFHLENBQUNJLElBQUksQ0FBQyxDQUFDO0lBQ3pCSCxFQUFFLENBQUNJLFFBQVEsQ0FBQ0wsR0FBRyxDQUFDTSxLQUFLLENBQUMsQ0FBQztJQUV2QixJQUFNQyxtQkFBbUIsR0FBRyxJQUFJO0lBRWhDLElBQU1DLGNBQWMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxFQUFFLHNGQUFzRjtJQUNwSCxJQUFNQyxXQUFXLEdBQWMsRUFBRTtJQUVqQyxJQUFLLElBQUlDLENBQUMsR0FBRyxDQUFDLEVBQUVBLENBQUMsR0FBR0YsY0FBYyxFQUFFRSxDQUFDLEVBQUUsQ0FBRTtRQUN2QyxJQUFNQyxLQUFLLEdBQUcsSUFBSVQsSUFBSSxDQUFDRCxFQUFFLENBQUNXLFdBQVcsRUFBRSxFQUFFWCxFQUFFLENBQUNZLFFBQVEsRUFBRSxFQUFFSCxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQzlELElBQU1JLE9BQU8sR0FBR0gsS0FBSyxDQUFDSSxjQUFjLENBQUMsT0FBTyxFQUFFO1lBQUVDLE9BQU8sRUFBRSxNQUFNO1NBQUUsQ0FBQztRQUVsRSxJQUFNQyxHQUFHLEdBQVk7WUFDbkJDLElBQUksRUFBRVAsS0FBSyxDQUFDUSxPQUFPLEVBQUU7WUFDckJiLEtBQUssRUFBRUssS0FBSyxDQUFDRSxRQUFRLEVBQUU7WUFDdkJULElBQUksRUFBRU8sS0FBSyxDQUFDQyxXQUFXLEVBQUU7WUFDekJFLE9BQU8sRUFBRUEsT0FBTztZQUNoQk0sWUFBWSxFQUFFVCxLQUFLLENBQUNRLE9BQU8sRUFBRSxLQUFLbEIsRUFBRSxDQUFDa0IsT0FBTyxFQUFFLElBQUlSLEtBQUssQ0FBQ0UsUUFBUSxFQUFFLEtBQUtaLEVBQUUsQ0FBQ1ksUUFBUSxFQUFFO1lBQ3BGUSxTQUFTLEVBQUVWLEtBQUssQ0FBQ0UsUUFBUSxFQUFFLEtBQUtaLEVBQUUsQ0FBQ1ksUUFBUSxFQUFFO1NBQzlDO1FBRURKLFdBQVcsQ0FBQ2EsSUFBSSxDQUFDTCxHQUFHLENBQUMsQ0FBQztLQUN2QjtJQUVELHFDQUFxQztJQUNyQyxJQUFNTSxNQUFNLEdBQUcsRUFBQyxDQUFtRHRCLE1BQWdCLENBQWpFQSxFQUFFLENBQUNjLGNBQWMsQ0FBQyxPQUFPLEVBQUU7UUFBRVQsS0FBSyxFQUFFLE1BQU07S0FBRSxDQUFDLEVBQUMsR0FBQyxDQUFtQixRQUFqQkwsRUFBRSxDQUFDVyxXQUFXLEVBQUUsQ0FBRTtJQUVyRixPQUFPO1FBQUNILFdBQVc7UUFBRWMsTUFBTTtLQUFDLENBQUM7Q0FDOUIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vdXRpbHMvbG9hZC1jYWxlbmRhcjIudHM/MmRiMCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBUeXBlRGF5IH0gZnJvbSBcIi4uL3R5cGVzL1R5cGVEYXlcIjtcbmltcG9ydCB7IFR5cGVOYXYgfSBmcm9tIFwiLi4vdHlwZXMvVHlwZU5hdlwiO1xuaW1wb3J0IHsgVHlwZVdlZWtEYXlzIH0gZnJvbSBcIi4uL3R5cGVzL1R5cGVXZWVrRGF5c1wiO1xuXG4vKipcbiAqIFJldG91cm5lIGxlcyBpbmZvcm1hdGlvbnMgbsOpY2Vzc2FpcmUgcG91ciByZW5kZXIgbGUgY2FsZW5kcmllclxuICogQHBhcmFtIG5hdiAtIE9iamV0IFR5cGVOYXYgY29udGVuYW50IGxlIG1vaXMgZXQgbCdhbm7DqWVcbiAqIEByZXR1cm5zIFJldG91cm5lIGxlcyBqb3VycyBkYW5zIGxlIG1vaXMgYWluc2kgcXVlIGxlIHRpdHJlIGR1IGhlYWRlclxuICogQGV4YW1wbGVcbiAqIGNvbnN0IFtkYXlzSW5Nb250aCwgaGVhZGVyVGV4dF0gPSBHZXRDYWxlbmRhckluZm8oeyBtb250aDogMCwgeWVhcjogMjAyMSB9KTtcbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTG9hZENhbGVuZGFyMihuYXY6IFR5cGVOYXYpOiBbVHlwZURheVtdLCBzdHJpbmddIHtcbiAgY29uc3QgZHQgPSBuZXcgRGF0ZSgpO1xuICBkdC5zZXRGdWxsWWVhcihuYXYueWVhcik7XG4gIGR0LnNldE1vbnRoKG5hdi5tb250aCk7XG5cbiAgY29uc3QgY2FsZW5kYXJTdGFydGluZ0RheSA9IFwiU3lcIlxuXG4gIGNvbnN0IGRheXNJbkNhbGVuZGFyID0gNSAqIDc7IC8vIDUgcmFuZ8OpZXMgKHNlbWFpbmVzKSAqIDcgam91cnMgcGFyIHNlbWFpbmUgID0gMzUgam91cnMgw6AgYWZmaWNoZXIgc3VyIGxlIGNhbGVuZHJpZXJcbiAgY29uc3QgZGF5c0luTW9udGg6IFR5cGVEYXlbXSA9IFtdO1xuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgZGF5c0luQ2FsZW5kYXI7IGkrKykge1xuICAgIGNvbnN0IHRvZGF5ID0gbmV3IERhdGUoZHQuZ2V0RnVsbFllYXIoKSwgZHQuZ2V0TW9udGgoKSwgaSArIDEpO1xuICAgIGNvbnN0IGRheU5hbWUgPSB0b2RheS50b0xvY2FsZVN0cmluZyhcImVuLUNBXCIsIHsgd2Vla2RheTogXCJsb25nXCIgfSkgYXMgVHlwZVdlZWtEYXlzO1xuXG4gICAgY29uc3QgZGF5OiBUeXBlRGF5ID0ge1xuICAgICAgZGF0ZTogdG9kYXkuZ2V0RGF0ZSgpLFxuICAgICAgbW9udGg6IHRvZGF5LmdldE1vbnRoKCksXG4gICAgICB5ZWFyOiB0b2RheS5nZXRGdWxsWWVhcigpLFxuICAgICAgZGF5TmFtZTogZGF5TmFtZSxcbiAgICAgIGlzQ3VycmVudERheTogdG9kYXkuZ2V0RGF0ZSgpID09PSBkdC5nZXREYXRlKCkgJiYgdG9kYXkuZ2V0TW9udGgoKSA9PT0gZHQuZ2V0TW9udGgoKSxcbiAgICAgIGlzUGFkZGluZzogdG9kYXkuZ2V0TW9udGgoKSAhPT0gZHQuZ2V0TW9udGgoKSxcbiAgICB9O1xuXG4gICAgZGF5c0luTW9udGgucHVzaChkYXkpO1xuICB9XG5cbiAgLy8gSGVhZGVyIHRleHRlIChiYXJyZSBkZSBuYXZpZ2F0aW9uKVxuICBjb25zdCBoZWFkZXIgPSBgJHtkdC50b0xvY2FsZVN0cmluZyhcImVuLUNBXCIsIHsgbW9udGg6IFwibG9uZ1wiIH0pfSAke2R0LmdldEZ1bGxZZWFyKCl9YDtcblxuICByZXR1cm4gW2RheXNJbk1vbnRoLCBoZWFkZXJdO1xufVxuIl0sIm5hbWVzIjpbIkxvYWRDYWxlbmRhcjIiLCJuYXYiLCJkdCIsIkRhdGUiLCJzZXRGdWxsWWVhciIsInllYXIiLCJzZXRNb250aCIsIm1vbnRoIiwiY2FsZW5kYXJTdGFydGluZ0RheSIsImRheXNJbkNhbGVuZGFyIiwiZGF5c0luTW9udGgiLCJpIiwidG9kYXkiLCJnZXRGdWxsWWVhciIsImdldE1vbnRoIiwiZGF5TmFtZSIsInRvTG9jYWxlU3RyaW5nIiwid2Vla2RheSIsImRheSIsImRhdGUiLCJnZXREYXRlIiwiaXNDdXJyZW50RGF5IiwiaXNQYWRkaW5nIiwicHVzaCIsImhlYWRlciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./utils/load-calendar2.ts\n"));

/***/ })

});