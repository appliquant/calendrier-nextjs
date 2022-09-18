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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ LoadCalendar2; }\n/* harmony export */ });\n/**\n * Retourne les informations nécessaire pour render le calendrier\n * @param nav - Objet TypeNav contenant le mois et l'année\n * @param calendarStartingDay - Jour de la semaine où commence le calendrier\n * @returns Retourne les jours dans le mois ainsi que le titre du header\n * @example\n * const [daysInMonth, headerText] = GetCalendarInfo({ month: 0, year: 2021 });\n */ function LoadCalendar2(nav) {\n    var calendarStartingDay = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : \"Sunday\";\n    var dt = new Date();\n    dt.setFullYear(nav.year);\n    dt.setMonth(nav.month);\n    var nbOfDaysInMonth = new Date(nav.year, nav.month + 1, 0).getDate();\n    // const nbOfDaysBeforeFirstDayOfMonth = NumOfPaddingDays(dt, calendarStartingDay);\n    var daysInMonth = [];\n    // Ajoute les jours du mois\n    for(var i = 0; i < nbOfDaysInMonth; i++){\n        var today = new Date(dt.getFullYear(), dt.getMonth(), i + 1);\n        var dayName = today.toLocaleString(\"en-CA\", {\n            weekday: \"long\"\n        });\n        var day = {\n            date: today.getDate(),\n            month: today.getMonth(),\n            year: today.getFullYear(),\n            dayName: dayName,\n            isCurrentDay: today.getDate() === dt.getDate() && today.getMonth() === dt.getMonth(),\n            isPadding: today.getMonth() !== dt.getMonth()\n        };\n        daysInMonth.push(day);\n    }\n    // Header texte (barre de navigation)\n    var header = \"\".concat(dt.toLocaleString(\"en-CA\", {\n        month: \"long\"\n    }), \" \").concat(dt.getFullYear());\n    return [\n        daysInMonth,\n        header\n    ];\n};\n/**\n * Trouve la date où dois commencer le calendrier en fonction du premier jour de la semaine\n * @param dt - Date contenant le mois et l'année à calculer\n * @param calendarStartingDay Premier jour de la semaine @default \"Sunday\"\n */ function FindFirstDayToStartCalendar(dt) {\n    var calendarStartingDay = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : \"Sunday\";\n    var firstDayOfMonth = new Date(dt.getFullYear(), dt.getMonth(), 1);\n    var firstDayOfMonthName = firstDayOfMonth.toLocaleString(\"en-CA\", {\n        weekday: \"long\"\n    });\n    // Véri\n    if (firstDayOfMonthName === calendarStartingDay) {\n        return firstDayOfMonth;\n    }\n}\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi91dGlscy9sb2FkLWNhbGVuZGFyMi50cy5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBSUE7Ozs7Ozs7Q0FPQyxHQUNjLFNBQVNBLGFBQWEsQ0FBQ0MsR0FBWSxFQUFxRTtRQUFuRUMsbUJBQWlDLEdBQWpDQSwrQ0FBNEMsa0JBQVIsUUFBUTtJQUM5RixJQUFNQyxFQUFFLEdBQUcsSUFBSUMsSUFBSSxFQUFFO0lBQ3JCRCxFQUFFLENBQUNFLFdBQVcsQ0FBQ0osR0FBRyxDQUFDSyxJQUFJLENBQUMsQ0FBQztJQUN6QkgsRUFBRSxDQUFDSSxRQUFRLENBQUNOLEdBQUcsQ0FBQ08sS0FBSyxDQUFDLENBQUM7SUFFdkIsSUFBTUMsZUFBZSxHQUFHLElBQUlMLElBQUksQ0FBQ0gsR0FBRyxDQUFDSyxJQUFJLEVBQUVMLEdBQUcsQ0FBQ08sS0FBSyxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQ0UsT0FBTyxFQUFFO0lBQ3RFLG1GQUFtRjtJQUVuRixJQUFNQyxXQUFXLEdBQWMsRUFBRTtJQUVqQywyQkFBMkI7SUFDM0IsSUFBSyxJQUFJQyxDQUFDLEdBQUcsQ0FBQyxFQUFFQSxDQUFDLEdBQUdILGVBQWUsRUFBRUcsQ0FBQyxFQUFFLENBQUU7UUFDeEMsSUFBTUMsS0FBSyxHQUFHLElBQUlULElBQUksQ0FBQ0QsRUFBRSxDQUFDVyxXQUFXLEVBQUUsRUFBRVgsRUFBRSxDQUFDWSxRQUFRLEVBQUUsRUFBRUgsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUM5RCxJQUFNSSxPQUFPLEdBQUdILEtBQUssQ0FBQ0ksY0FBYyxDQUFDLE9BQU8sRUFBRTtZQUFFQyxPQUFPLEVBQUUsTUFBTTtTQUFFLENBQUM7UUFFbEUsSUFBTUMsR0FBRyxHQUFZO1lBQ25CQyxJQUFJLEVBQUVQLEtBQUssQ0FBQ0gsT0FBTyxFQUFFO1lBQ3JCRixLQUFLLEVBQUVLLEtBQUssQ0FBQ0UsUUFBUSxFQUFFO1lBQ3ZCVCxJQUFJLEVBQUVPLEtBQUssQ0FBQ0MsV0FBVyxFQUFFO1lBQ3pCRSxPQUFPLEVBQUVBLE9BQU87WUFDaEJLLFlBQVksRUFBRVIsS0FBSyxDQUFDSCxPQUFPLEVBQUUsS0FBS1AsRUFBRSxDQUFDTyxPQUFPLEVBQUUsSUFBSUcsS0FBSyxDQUFDRSxRQUFRLEVBQUUsS0FBS1osRUFBRSxDQUFDWSxRQUFRLEVBQUU7WUFDcEZPLFNBQVMsRUFBRVQsS0FBSyxDQUFDRSxRQUFRLEVBQUUsS0FBS1osRUFBRSxDQUFDWSxRQUFRLEVBQUU7U0FDOUM7UUFFREosV0FBVyxDQUFDWSxJQUFJLENBQUNKLEdBQUcsQ0FBQyxDQUFDO0tBQ3ZCO0lBRUQscUNBQXFDO0lBQ3JDLElBQU1LLE1BQU0sR0FBRyxFQUFDLENBQW1EckIsTUFBZ0IsQ0FBakVBLEVBQUUsQ0FBQ2MsY0FBYyxDQUFDLE9BQU8sRUFBRTtRQUFFVCxLQUFLLEVBQUUsTUFBTTtLQUFFLENBQUMsRUFBQyxHQUFDLENBQW1CLFFBQWpCTCxFQUFFLENBQUNXLFdBQVcsRUFBRSxDQUFFO0lBRXJGLE9BQU87UUFBQ0gsV0FBVztRQUFFYSxNQUFNO0tBQUMsQ0FBQztDQUM5QjtBQUVEOzs7O0NBSUMsR0FDRCxTQUFTQywyQkFBMkIsQ0FBQ3RCLEVBQVEsRUFBc0Q7UUFBcERELG1CQUFpQyxHQUFqQ0EsK0NBQTRDLGtCQUFSLFFBQVE7SUFDekYsSUFBTXdCLGVBQWUsR0FBRyxJQUFJdEIsSUFBSSxDQUFDRCxFQUFFLENBQUNXLFdBQVcsRUFBRSxFQUFFWCxFQUFFLENBQUNZLFFBQVEsRUFBRSxFQUFFLENBQUMsQ0FBQztJQUNwRSxJQUFNWSxtQkFBbUIsR0FBR0QsZUFBZSxDQUFDVCxjQUFjLENBQUMsT0FBTyxFQUFFO1FBQUVDLE9BQU8sRUFBRSxNQUFNO0tBQUUsQ0FBQztJQUV4RixPQUFPO0lBQ1AsSUFBSVMsbUJBQW1CLEtBQUt6QixtQkFBbUIsRUFBRTtRQUMvQyxPQUFPd0IsZUFBZSxDQUFDO0tBQ3hCO0NBR0YiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vdXRpbHMvbG9hZC1jYWxlbmRhcjIudHM/MmRiMCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBUeXBlRGF5IH0gZnJvbSBcIi4uL3R5cGVzL1R5cGVEYXlcIjtcbmltcG9ydCB7IFR5cGVOYXYgfSBmcm9tIFwiLi4vdHlwZXMvVHlwZU5hdlwiO1xuaW1wb3J0IHsgVHlwZVdlZWtEYXlzIH0gZnJvbSBcIi4uL3R5cGVzL1R5cGVXZWVrRGF5c1wiO1xuXG4vKipcbiAqIFJldG91cm5lIGxlcyBpbmZvcm1hdGlvbnMgbsOpY2Vzc2FpcmUgcG91ciByZW5kZXIgbGUgY2FsZW5kcmllclxuICogQHBhcmFtIG5hdiAtIE9iamV0IFR5cGVOYXYgY29udGVuYW50IGxlIG1vaXMgZXQgbCdhbm7DqWVcbiAqIEBwYXJhbSBjYWxlbmRhclN0YXJ0aW5nRGF5IC0gSm91ciBkZSBsYSBzZW1haW5lIG/DuSBjb21tZW5jZSBsZSBjYWxlbmRyaWVyXG4gKiBAcmV0dXJucyBSZXRvdXJuZSBsZXMgam91cnMgZGFucyBsZSBtb2lzIGFpbnNpIHF1ZSBsZSB0aXRyZSBkdSBoZWFkZXJcbiAqIEBleGFtcGxlXG4gKiBjb25zdCBbZGF5c0luTW9udGgsIGhlYWRlclRleHRdID0gR2V0Q2FsZW5kYXJJbmZvKHsgbW9udGg6IDAsIHllYXI6IDIwMjEgfSk7XG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIExvYWRDYWxlbmRhcjIobmF2OiBUeXBlTmF2LCBjYWxlbmRhclN0YXJ0aW5nRGF5OiBUeXBlV2Vla0RheXMgPSBcIlN1bmRheVwiKTogW1R5cGVEYXlbXSwgc3RyaW5nXSB7XG4gIGNvbnN0IGR0ID0gbmV3IERhdGUoKTtcbiAgZHQuc2V0RnVsbFllYXIobmF2LnllYXIpO1xuICBkdC5zZXRNb250aChuYXYubW9udGgpO1xuXG4gIGNvbnN0IG5iT2ZEYXlzSW5Nb250aCA9IG5ldyBEYXRlKG5hdi55ZWFyLCBuYXYubW9udGggKyAxLCAwKS5nZXREYXRlKCk7XG4gIC8vIGNvbnN0IG5iT2ZEYXlzQmVmb3JlRmlyc3REYXlPZk1vbnRoID0gTnVtT2ZQYWRkaW5nRGF5cyhkdCwgY2FsZW5kYXJTdGFydGluZ0RheSk7XG5cbiAgY29uc3QgZGF5c0luTW9udGg6IFR5cGVEYXlbXSA9IFtdO1xuXG4gIC8vIEFqb3V0ZSBsZXMgam91cnMgZHUgbW9pc1xuICBmb3IgKGxldCBpID0gMDsgaSA8IG5iT2ZEYXlzSW5Nb250aDsgaSsrKSB7XG4gICAgY29uc3QgdG9kYXkgPSBuZXcgRGF0ZShkdC5nZXRGdWxsWWVhcigpLCBkdC5nZXRNb250aCgpLCBpICsgMSk7XG4gICAgY29uc3QgZGF5TmFtZSA9IHRvZGF5LnRvTG9jYWxlU3RyaW5nKFwiZW4tQ0FcIiwgeyB3ZWVrZGF5OiBcImxvbmdcIiB9KSBhcyBUeXBlV2Vla0RheXM7XG5cbiAgICBjb25zdCBkYXk6IFR5cGVEYXkgPSB7XG4gICAgICBkYXRlOiB0b2RheS5nZXREYXRlKCksXG4gICAgICBtb250aDogdG9kYXkuZ2V0TW9udGgoKSxcbiAgICAgIHllYXI6IHRvZGF5LmdldEZ1bGxZZWFyKCksXG4gICAgICBkYXlOYW1lOiBkYXlOYW1lLFxuICAgICAgaXNDdXJyZW50RGF5OiB0b2RheS5nZXREYXRlKCkgPT09IGR0LmdldERhdGUoKSAmJiB0b2RheS5nZXRNb250aCgpID09PSBkdC5nZXRNb250aCgpLFxuICAgICAgaXNQYWRkaW5nOiB0b2RheS5nZXRNb250aCgpICE9PSBkdC5nZXRNb250aCgpLFxuICAgIH07XG5cbiAgICBkYXlzSW5Nb250aC5wdXNoKGRheSk7XG4gIH1cblxuICAvLyBIZWFkZXIgdGV4dGUgKGJhcnJlIGRlIG5hdmlnYXRpb24pXG4gIGNvbnN0IGhlYWRlciA9IGAke2R0LnRvTG9jYWxlU3RyaW5nKFwiZW4tQ0FcIiwgeyBtb250aDogXCJsb25nXCIgfSl9ICR7ZHQuZ2V0RnVsbFllYXIoKX1gO1xuXG4gIHJldHVybiBbZGF5c0luTW9udGgsIGhlYWRlcl07XG59XG5cbi8qKlxuICogVHJvdXZlIGxhIGRhdGUgb8O5IGRvaXMgY29tbWVuY2VyIGxlIGNhbGVuZHJpZXIgZW4gZm9uY3Rpb24gZHUgcHJlbWllciBqb3VyIGRlIGxhIHNlbWFpbmVcbiAqIEBwYXJhbSBkdCAtIERhdGUgY29udGVuYW50IGxlIG1vaXMgZXQgbCdhbm7DqWUgw6AgY2FsY3VsZXJcbiAqIEBwYXJhbSBjYWxlbmRhclN0YXJ0aW5nRGF5IFByZW1pZXIgam91ciBkZSBsYSBzZW1haW5lIEBkZWZhdWx0IFwiU3VuZGF5XCJcbiAqL1xuZnVuY3Rpb24gRmluZEZpcnN0RGF5VG9TdGFydENhbGVuZGFyKGR0OiBEYXRlLCBjYWxlbmRhclN0YXJ0aW5nRGF5OiBUeXBlV2Vla0RheXMgPSBcIlN1bmRheVwiKTogRGF0ZSB7XG4gIGNvbnN0IGZpcnN0RGF5T2ZNb250aCA9IG5ldyBEYXRlKGR0LmdldEZ1bGxZZWFyKCksIGR0LmdldE1vbnRoKCksIDEpO1xuICBjb25zdCBmaXJzdERheU9mTW9udGhOYW1lID0gZmlyc3REYXlPZk1vbnRoLnRvTG9jYWxlU3RyaW5nKFwiZW4tQ0FcIiwgeyB3ZWVrZGF5OiBcImxvbmdcIiB9KSBhcyBUeXBlV2Vla0RheXM7XG5cbiAgLy8gVsOpcmlcbiAgaWYgKGZpcnN0RGF5T2ZNb250aE5hbWUgPT09IGNhbGVuZGFyU3RhcnRpbmdEYXkpIHtcbiAgICByZXR1cm4gZmlyc3REYXlPZk1vbnRoO1xuICB9XG5cbiAgXG59XG4iXSwibmFtZXMiOlsiTG9hZENhbGVuZGFyMiIsIm5hdiIsImNhbGVuZGFyU3RhcnRpbmdEYXkiLCJkdCIsIkRhdGUiLCJzZXRGdWxsWWVhciIsInllYXIiLCJzZXRNb250aCIsIm1vbnRoIiwibmJPZkRheXNJbk1vbnRoIiwiZ2V0RGF0ZSIsImRheXNJbk1vbnRoIiwiaSIsInRvZGF5IiwiZ2V0RnVsbFllYXIiLCJnZXRNb250aCIsImRheU5hbWUiLCJ0b0xvY2FsZVN0cmluZyIsIndlZWtkYXkiLCJkYXkiLCJkYXRlIiwiaXNDdXJyZW50RGF5IiwiaXNQYWRkaW5nIiwicHVzaCIsImhlYWRlciIsIkZpbmRGaXJzdERheVRvU3RhcnRDYWxlbmRhciIsImZpcnN0RGF5T2ZNb250aCIsImZpcnN0RGF5T2ZNb250aE5hbWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./utils/load-calendar2.ts\n"));

/***/ })

});