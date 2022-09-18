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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ LoadCalendar2; }\n/* harmony export */ });\n/**\n * Retourne les informations nécessaire pour render le calendrier\n * @param nav - Objet TypeNav contenant le mois et l'année\n * @returns Retourne les jours dans le mois ainsi que le titre du header\n * @example\n * const [daysInMonth, headerText] = GetCalendarInfo({ month: 0, year: 2021 });\n */ function LoadCalendar2(nav) {\n    var dt = new Date();\n    dt.setFullYear(nav.year);\n    dt.setMonth(nav.month);\n    var calendarStartingDay = \"Sunday\";\n    var nbDaysInMonth = new Date(nav.year, nav.month + 1, 0).getDate();\n    var nbDaysInCalendar = 5 * 7 - nbDaysInMonth; // 5 rangées * 7 colonnes - nb de jours dans le mois = nb de jours avant le 1er du mois\n    var daysInMonth = [];\n    for(var i = 0; i < nbDaysInCalendar; i++){\n        var today = new Date(dt.getFullYear(), dt.getMonth(), i + 1);\n        var dayName = today.toLocaleString(\"en-CA\", {\n            weekday: \"long\"\n        });\n        var day = {\n            date: today.getDate(),\n            month: today.getMonth(),\n            year: today.getFullYear(),\n            dayName: dayName,\n            isCurrentDay: today.getDate() === dt.getDate() && today.getMonth() === dt.getMonth(),\n            isPadding: today.getMonth() !== dt.getMonth()\n        };\n        daysInMonth.push(day);\n    }\n    // Header texte (barre de navigation)\n    var header = \"\".concat(dt.toLocaleString(\"en-CA\", {\n        month: \"long\"\n    }), \" \").concat(dt.getFullYear());\n    return [\n        daysInMonth,\n        header\n    ];\n};\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi91dGlscy9sb2FkLWNhbGVuZGFyMi50cy5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBSUE7Ozs7OztDQU1DLEdBQ2MsU0FBU0EsYUFBYSxDQUFDQyxHQUFZLEVBQXVCO0lBQ3ZFLElBQU1DLEVBQUUsR0FBRyxJQUFJQyxJQUFJLEVBQUU7SUFDckJELEVBQUUsQ0FBQ0UsV0FBVyxDQUFDSCxHQUFHLENBQUNJLElBQUksQ0FBQyxDQUFDO0lBQ3pCSCxFQUFFLENBQUNJLFFBQVEsQ0FBQ0wsR0FBRyxDQUFDTSxLQUFLLENBQUMsQ0FBQztJQUV2QixJQUFNQyxtQkFBbUIsR0FBRyxRQUFRO0lBQ3BDLElBQU1DLGFBQWEsR0FBRyxJQUFJTixJQUFJLENBQUNGLEdBQUcsQ0FBQ0ksSUFBSSxFQUFFSixHQUFHLENBQUNNLEtBQUssR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUNHLE9BQU8sRUFBRTtJQUNwRSxJQUFNQyxnQkFBZ0IsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHRixhQUFhLEVBQUUsdUZBQXVGO0lBRXZJLElBQU1HLFdBQVcsR0FBYyxFQUFFO0lBRWpDLElBQUssSUFBSUMsQ0FBQyxHQUFHLENBQUMsRUFBRUEsQ0FBQyxHQUFHRixnQkFBZ0IsRUFBRUUsQ0FBQyxFQUFFLENBQUU7UUFDekMsSUFBTUMsS0FBSyxHQUFHLElBQUlYLElBQUksQ0FBQ0QsRUFBRSxDQUFDYSxXQUFXLEVBQUUsRUFBRWIsRUFBRSxDQUFDYyxRQUFRLEVBQUUsRUFBRUgsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUM5RCxJQUFNSSxPQUFPLEdBQUdILEtBQUssQ0FBQ0ksY0FBYyxDQUFDLE9BQU8sRUFBRTtZQUFFQyxPQUFPLEVBQUUsTUFBTTtTQUFFLENBQUM7UUFFbEUsSUFBTUMsR0FBRyxHQUFZO1lBQ25CQyxJQUFJLEVBQUVQLEtBQUssQ0FBQ0osT0FBTyxFQUFFO1lBQ3JCSCxLQUFLLEVBQUVPLEtBQUssQ0FBQ0UsUUFBUSxFQUFFO1lBQ3ZCWCxJQUFJLEVBQUVTLEtBQUssQ0FBQ0MsV0FBVyxFQUFFO1lBQ3pCRSxPQUFPLEVBQUVBLE9BQU87WUFDaEJLLFlBQVksRUFBRVIsS0FBSyxDQUFDSixPQUFPLEVBQUUsS0FBS1IsRUFBRSxDQUFDUSxPQUFPLEVBQUUsSUFBSUksS0FBSyxDQUFDRSxRQUFRLEVBQUUsS0FBS2QsRUFBRSxDQUFDYyxRQUFRLEVBQUU7WUFDcEZPLFNBQVMsRUFBRVQsS0FBSyxDQUFDRSxRQUFRLEVBQUUsS0FBS2QsRUFBRSxDQUFDYyxRQUFRLEVBQUU7U0FDOUM7UUFFREosV0FBVyxDQUFDWSxJQUFJLENBQUNKLEdBQUcsQ0FBQyxDQUFDO0tBQ3ZCO0lBRUQscUNBQXFDO0lBQ3JDLElBQU1LLE1BQU0sR0FBRyxFQUFDLENBQW1EdkIsTUFBZ0IsQ0FBakVBLEVBQUUsQ0FBQ2dCLGNBQWMsQ0FBQyxPQUFPLEVBQUU7UUFBRVgsS0FBSyxFQUFFLE1BQU07S0FBRSxDQUFDLEVBQUMsR0FBQyxDQUFtQixRQUFqQkwsRUFBRSxDQUFDYSxXQUFXLEVBQUUsQ0FBRTtJQUVyRixPQUFPO1FBQUNILFdBQVc7UUFBRWEsTUFBTTtLQUFDLENBQUM7Q0FDOUIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vdXRpbHMvbG9hZC1jYWxlbmRhcjIudHM/MmRiMCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBUeXBlRGF5IH0gZnJvbSBcIi4uL3R5cGVzL1R5cGVEYXlcIjtcbmltcG9ydCB7IFR5cGVOYXYgfSBmcm9tIFwiLi4vdHlwZXMvVHlwZU5hdlwiO1xuaW1wb3J0IHsgVHlwZVdlZWtEYXlzIH0gZnJvbSBcIi4uL3R5cGVzL1R5cGVXZWVrRGF5c1wiO1xuXG4vKipcbiAqIFJldG91cm5lIGxlcyBpbmZvcm1hdGlvbnMgbsOpY2Vzc2FpcmUgcG91ciByZW5kZXIgbGUgY2FsZW5kcmllclxuICogQHBhcmFtIG5hdiAtIE9iamV0IFR5cGVOYXYgY29udGVuYW50IGxlIG1vaXMgZXQgbCdhbm7DqWVcbiAqIEByZXR1cm5zIFJldG91cm5lIGxlcyBqb3VycyBkYW5zIGxlIG1vaXMgYWluc2kgcXVlIGxlIHRpdHJlIGR1IGhlYWRlclxuICogQGV4YW1wbGVcbiAqIGNvbnN0IFtkYXlzSW5Nb250aCwgaGVhZGVyVGV4dF0gPSBHZXRDYWxlbmRhckluZm8oeyBtb250aDogMCwgeWVhcjogMjAyMSB9KTtcbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTG9hZENhbGVuZGFyMihuYXY6IFR5cGVOYXYpOiBbVHlwZURheVtdLCBzdHJpbmddIHtcbiAgY29uc3QgZHQgPSBuZXcgRGF0ZSgpO1xuICBkdC5zZXRGdWxsWWVhcihuYXYueWVhcik7XG4gIGR0LnNldE1vbnRoKG5hdi5tb250aCk7XG5cbiAgY29uc3QgY2FsZW5kYXJTdGFydGluZ0RheSA9IFwiU3VuZGF5XCI7XG4gIGNvbnN0IG5iRGF5c0luTW9udGggPSBuZXcgRGF0ZShuYXYueWVhciwgbmF2Lm1vbnRoICsgMSwgMCkuZ2V0RGF0ZSgpO1xuICBjb25zdCBuYkRheXNJbkNhbGVuZGFyID0gNSAqIDcgLSBuYkRheXNJbk1vbnRoOyAvLyA1IHJhbmfDqWVzICogNyBjb2xvbm5lcyAtIG5iIGRlIGpvdXJzIGRhbnMgbGUgbW9pcyA9IG5iIGRlIGpvdXJzIGF2YW50IGxlIDFlciBkdSBtb2lzXG5cbiAgY29uc3QgZGF5c0luTW9udGg6IFR5cGVEYXlbXSA9IFtdO1xuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgbmJEYXlzSW5DYWxlbmRhcjsgaSsrKSB7XG4gICAgY29uc3QgdG9kYXkgPSBuZXcgRGF0ZShkdC5nZXRGdWxsWWVhcigpLCBkdC5nZXRNb250aCgpLCBpICsgMSk7XG4gICAgY29uc3QgZGF5TmFtZSA9IHRvZGF5LnRvTG9jYWxlU3RyaW5nKFwiZW4tQ0FcIiwgeyB3ZWVrZGF5OiBcImxvbmdcIiB9KSBhcyBUeXBlV2Vla0RheXM7XG5cbiAgICBjb25zdCBkYXk6IFR5cGVEYXkgPSB7XG4gICAgICBkYXRlOiB0b2RheS5nZXREYXRlKCksXG4gICAgICBtb250aDogdG9kYXkuZ2V0TW9udGgoKSxcbiAgICAgIHllYXI6IHRvZGF5LmdldEZ1bGxZZWFyKCksXG4gICAgICBkYXlOYW1lOiBkYXlOYW1lLFxuICAgICAgaXNDdXJyZW50RGF5OiB0b2RheS5nZXREYXRlKCkgPT09IGR0LmdldERhdGUoKSAmJiB0b2RheS5nZXRNb250aCgpID09PSBkdC5nZXRNb250aCgpLFxuICAgICAgaXNQYWRkaW5nOiB0b2RheS5nZXRNb250aCgpICE9PSBkdC5nZXRNb250aCgpLFxuICAgIH07XG5cbiAgICBkYXlzSW5Nb250aC5wdXNoKGRheSk7XG4gIH1cblxuICAvLyBIZWFkZXIgdGV4dGUgKGJhcnJlIGRlIG5hdmlnYXRpb24pXG4gIGNvbnN0IGhlYWRlciA9IGAke2R0LnRvTG9jYWxlU3RyaW5nKFwiZW4tQ0FcIiwgeyBtb250aDogXCJsb25nXCIgfSl9ICR7ZHQuZ2V0RnVsbFllYXIoKX1gO1xuXG4gIHJldHVybiBbZGF5c0luTW9udGgsIGhlYWRlcl07XG59XG4iXSwibmFtZXMiOlsiTG9hZENhbGVuZGFyMiIsIm5hdiIsImR0IiwiRGF0ZSIsInNldEZ1bGxZZWFyIiwieWVhciIsInNldE1vbnRoIiwibW9udGgiLCJjYWxlbmRhclN0YXJ0aW5nRGF5IiwibmJEYXlzSW5Nb250aCIsImdldERhdGUiLCJuYkRheXNJbkNhbGVuZGFyIiwiZGF5c0luTW9udGgiLCJpIiwidG9kYXkiLCJnZXRGdWxsWWVhciIsImdldE1vbnRoIiwiZGF5TmFtZSIsInRvTG9jYWxlU3RyaW5nIiwid2Vla2RheSIsImRheSIsImRhdGUiLCJpc0N1cnJlbnREYXkiLCJpc1BhZGRpbmciLCJwdXNoIiwiaGVhZGVyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./utils/load-calendar2.ts\n"));

/***/ })

});