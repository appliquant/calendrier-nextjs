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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ LoadCalendar2; }\n/* harmony export */ });\n/**\n * Retourne les informations nécessaire pour render le calendrier\n * @param nav - Objet TypeNav contenant le mois et l'année\n * @param calendarStartingDay - Jour de la semaine où commence le calendrier\n * @returns Retourne les jours dans le mois ainsi que le titre du header\n * @example\n * const [daysInMonth, headerText] = GetCalendarInfo({ month: 0, year: 2021 });\n */ function LoadCalendar2(nav) {\n    var calendarStartingDay = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : \"Sunday\";\n    var dt = new Date();\n    dt.setFullYear(nav.year);\n    dt.setMonth(nav.month);\n    var nbOfDaysInMonth = new Date(nav.year, nav.month + 1, 0).getDate();\n    // const nbOfDaysBeforeFirstDayOfMonth = NumOfPaddingDays(dt, calendarStartingDay);\n    var daysInMonth = [];\n    // Ajoute les jours du mois\n    for(var i = 0; i < nbOfDaysInMonth; i++){\n        var today = new Date(dt.getFullYear(), dt.getMonth(), i + 1);\n        var dayName = today.toLocaleString(\"en-CA\", {\n            weekday: \"long\"\n        });\n        var day = {\n            date: today.getDate(),\n            month: today.getMonth(),\n            year: today.getFullYear(),\n            dayName: dayName,\n            isCurrentDay: today.getDate() === dt.getDate() && today.getMonth() === dt.getMonth(),\n            isPadding: today.getMonth() !== dt.getMonth()\n        };\n        daysInMonth.push(day);\n    }\n    // Header texte (barre de navigation)\n    var header = \"\".concat(dt.toLocaleString(\"en-CA\", {\n        month: \"long\"\n    }), \" \").concat(dt.getFullYear());\n    return [\n        daysInMonth,\n        header\n    ];\n};\n/**\n * Trouve la date où dois commencer le calendrier en fonction du premier jour de la semaine\n * @param dt - Date contenant le mois et l'année à calculer\n * @param calendarStartingDay Premier jour de la semaine\n */ function FindFirstDayToStartCalendar(dt) {\n    var calendarStartingDay = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : \"Sunday\";\n}\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi91dGlscy9sb2FkLWNhbGVuZGFyMi50cy5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBSUE7Ozs7Ozs7Q0FPQyxHQUNjLFNBQVNBLGFBQWEsQ0FBQ0MsR0FBWSxFQUFxRTtRQUFuRUMsbUJBQWlDLEdBQWpDQSwrQ0FBNEMsa0JBQVIsUUFBUTtJQUM5RixJQUFNQyxFQUFFLEdBQUcsSUFBSUMsSUFBSSxFQUFFO0lBQ3JCRCxFQUFFLENBQUNFLFdBQVcsQ0FBQ0osR0FBRyxDQUFDSyxJQUFJLENBQUMsQ0FBQztJQUN6QkgsRUFBRSxDQUFDSSxRQUFRLENBQUNOLEdBQUcsQ0FBQ08sS0FBSyxDQUFDLENBQUM7SUFFdkIsSUFBTUMsZUFBZSxHQUFHLElBQUlMLElBQUksQ0FBQ0gsR0FBRyxDQUFDSyxJQUFJLEVBQUVMLEdBQUcsQ0FBQ08sS0FBSyxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQ0UsT0FBTyxFQUFFO0lBQ3RFLG1GQUFtRjtJQUVuRixJQUFNQyxXQUFXLEdBQWMsRUFBRTtJQUVqQywyQkFBMkI7SUFDM0IsSUFBSyxJQUFJQyxDQUFDLEdBQUcsQ0FBQyxFQUFFQSxDQUFDLEdBQUdILGVBQWUsRUFBRUcsQ0FBQyxFQUFFLENBQUU7UUFDeEMsSUFBTUMsS0FBSyxHQUFHLElBQUlULElBQUksQ0FBQ0QsRUFBRSxDQUFDVyxXQUFXLEVBQUUsRUFBRVgsRUFBRSxDQUFDWSxRQUFRLEVBQUUsRUFBRUgsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUM5RCxJQUFNSSxPQUFPLEdBQUdILEtBQUssQ0FBQ0ksY0FBYyxDQUFDLE9BQU8sRUFBRTtZQUFFQyxPQUFPLEVBQUUsTUFBTTtTQUFFLENBQUM7UUFFbEUsSUFBTUMsR0FBRyxHQUFZO1lBQ25CQyxJQUFJLEVBQUVQLEtBQUssQ0FBQ0gsT0FBTyxFQUFFO1lBQ3JCRixLQUFLLEVBQUVLLEtBQUssQ0FBQ0UsUUFBUSxFQUFFO1lBQ3ZCVCxJQUFJLEVBQUVPLEtBQUssQ0FBQ0MsV0FBVyxFQUFFO1lBQ3pCRSxPQUFPLEVBQUVBLE9BQU87WUFDaEJLLFlBQVksRUFBRVIsS0FBSyxDQUFDSCxPQUFPLEVBQUUsS0FBS1AsRUFBRSxDQUFDTyxPQUFPLEVBQUUsSUFBSUcsS0FBSyxDQUFDRSxRQUFRLEVBQUUsS0FBS1osRUFBRSxDQUFDWSxRQUFRLEVBQUU7WUFDcEZPLFNBQVMsRUFBRVQsS0FBSyxDQUFDRSxRQUFRLEVBQUUsS0FBS1osRUFBRSxDQUFDWSxRQUFRLEVBQUU7U0FDOUM7UUFFREosV0FBVyxDQUFDWSxJQUFJLENBQUNKLEdBQUcsQ0FBQyxDQUFDO0tBQ3ZCO0lBRUQscUNBQXFDO0lBQ3JDLElBQU1LLE1BQU0sR0FBRyxFQUFDLENBQW1EckIsTUFBZ0IsQ0FBakVBLEVBQUUsQ0FBQ2MsY0FBYyxDQUFDLE9BQU8sRUFBRTtRQUFFVCxLQUFLLEVBQUUsTUFBTTtLQUFFLENBQUMsRUFBQyxHQUFDLENBQW1CLFFBQWpCTCxFQUFFLENBQUNXLFdBQVcsRUFBRSxDQUFFO0lBRXJGLE9BQU87UUFBQ0gsV0FBVztRQUFFYSxNQUFNO0tBQUMsQ0FBQztDQUM5QjtBQUVEOzs7O0NBSUMsR0FDRCxTQUFTQywyQkFBMkIsQ0FBQ3RCLEVBQVEsRUFBc0Q7UUFBcERELG1CQUFpQyxHQUFqQ0EsK0NBQTRDLGtCQUFSLFFBQVE7Q0FBVSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi91dGlscy9sb2FkLWNhbGVuZGFyMi50cz8yZGIwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFR5cGVEYXkgfSBmcm9tIFwiLi4vdHlwZXMvVHlwZURheVwiO1xuaW1wb3J0IHsgVHlwZU5hdiB9IGZyb20gXCIuLi90eXBlcy9UeXBlTmF2XCI7XG5pbXBvcnQgeyBUeXBlV2Vla0RheXMgfSBmcm9tIFwiLi4vdHlwZXMvVHlwZVdlZWtEYXlzXCI7XG5cbi8qKlxuICogUmV0b3VybmUgbGVzIGluZm9ybWF0aW9ucyBuw6ljZXNzYWlyZSBwb3VyIHJlbmRlciBsZSBjYWxlbmRyaWVyXG4gKiBAcGFyYW0gbmF2IC0gT2JqZXQgVHlwZU5hdiBjb250ZW5hbnQgbGUgbW9pcyBldCBsJ2FubsOpZVxuICogQHBhcmFtIGNhbGVuZGFyU3RhcnRpbmdEYXkgLSBKb3VyIGRlIGxhIHNlbWFpbmUgb8O5IGNvbW1lbmNlIGxlIGNhbGVuZHJpZXJcbiAqIEByZXR1cm5zIFJldG91cm5lIGxlcyBqb3VycyBkYW5zIGxlIG1vaXMgYWluc2kgcXVlIGxlIHRpdHJlIGR1IGhlYWRlclxuICogQGV4YW1wbGVcbiAqIGNvbnN0IFtkYXlzSW5Nb250aCwgaGVhZGVyVGV4dF0gPSBHZXRDYWxlbmRhckluZm8oeyBtb250aDogMCwgeWVhcjogMjAyMSB9KTtcbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTG9hZENhbGVuZGFyMihuYXY6IFR5cGVOYXYsIGNhbGVuZGFyU3RhcnRpbmdEYXk6IFR5cGVXZWVrRGF5cyA9IFwiU3VuZGF5XCIpOiBbVHlwZURheVtdLCBzdHJpbmddIHtcbiAgY29uc3QgZHQgPSBuZXcgRGF0ZSgpO1xuICBkdC5zZXRGdWxsWWVhcihuYXYueWVhcik7XG4gIGR0LnNldE1vbnRoKG5hdi5tb250aCk7XG5cbiAgY29uc3QgbmJPZkRheXNJbk1vbnRoID0gbmV3IERhdGUobmF2LnllYXIsIG5hdi5tb250aCArIDEsIDApLmdldERhdGUoKTtcbiAgLy8gY29uc3QgbmJPZkRheXNCZWZvcmVGaXJzdERheU9mTW9udGggPSBOdW1PZlBhZGRpbmdEYXlzKGR0LCBjYWxlbmRhclN0YXJ0aW5nRGF5KTtcblxuICBjb25zdCBkYXlzSW5Nb250aDogVHlwZURheVtdID0gW107XG5cbiAgLy8gQWpvdXRlIGxlcyBqb3VycyBkdSBtb2lzXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgbmJPZkRheXNJbk1vbnRoOyBpKyspIHtcbiAgICBjb25zdCB0b2RheSA9IG5ldyBEYXRlKGR0LmdldEZ1bGxZZWFyKCksIGR0LmdldE1vbnRoKCksIGkgKyAxKTtcbiAgICBjb25zdCBkYXlOYW1lID0gdG9kYXkudG9Mb2NhbGVTdHJpbmcoXCJlbi1DQVwiLCB7IHdlZWtkYXk6IFwibG9uZ1wiIH0pIGFzIFR5cGVXZWVrRGF5cztcblxuICAgIGNvbnN0IGRheTogVHlwZURheSA9IHtcbiAgICAgIGRhdGU6IHRvZGF5LmdldERhdGUoKSxcbiAgICAgIG1vbnRoOiB0b2RheS5nZXRNb250aCgpLFxuICAgICAgeWVhcjogdG9kYXkuZ2V0RnVsbFllYXIoKSxcbiAgICAgIGRheU5hbWU6IGRheU5hbWUsXG4gICAgICBpc0N1cnJlbnREYXk6IHRvZGF5LmdldERhdGUoKSA9PT0gZHQuZ2V0RGF0ZSgpICYmIHRvZGF5LmdldE1vbnRoKCkgPT09IGR0LmdldE1vbnRoKCksXG4gICAgICBpc1BhZGRpbmc6IHRvZGF5LmdldE1vbnRoKCkgIT09IGR0LmdldE1vbnRoKCksXG4gICAgfTtcblxuICAgIGRheXNJbk1vbnRoLnB1c2goZGF5KTtcbiAgfVxuXG4gIC8vIEhlYWRlciB0ZXh0ZSAoYmFycmUgZGUgbmF2aWdhdGlvbilcbiAgY29uc3QgaGVhZGVyID0gYCR7ZHQudG9Mb2NhbGVTdHJpbmcoXCJlbi1DQVwiLCB7IG1vbnRoOiBcImxvbmdcIiB9KX0gJHtkdC5nZXRGdWxsWWVhcigpfWA7XG5cbiAgcmV0dXJuIFtkYXlzSW5Nb250aCwgaGVhZGVyXTtcbn1cblxuLyoqXG4gKiBUcm91dmUgbGEgZGF0ZSBvw7kgZG9pcyBjb21tZW5jZXIgbGUgY2FsZW5kcmllciBlbiBmb25jdGlvbiBkdSBwcmVtaWVyIGpvdXIgZGUgbGEgc2VtYWluZVxuICogQHBhcmFtIGR0IC0gRGF0ZSBjb250ZW5hbnQgbGUgbW9pcyBldCBsJ2FubsOpZSDDoCBjYWxjdWxlclxuICogQHBhcmFtIGNhbGVuZGFyU3RhcnRpbmdEYXkgUHJlbWllciBqb3VyIGRlIGxhIHNlbWFpbmVcbiAqL1xuZnVuY3Rpb24gRmluZEZpcnN0RGF5VG9TdGFydENhbGVuZGFyKGR0OiBEYXRlLCBjYWxlbmRhclN0YXJ0aW5nRGF5OiBUeXBlV2Vla0RheXMgPSBcIlN1bmRheVwiKTogRGF0ZSB7fVxuIl0sIm5hbWVzIjpbIkxvYWRDYWxlbmRhcjIiLCJuYXYiLCJjYWxlbmRhclN0YXJ0aW5nRGF5IiwiZHQiLCJEYXRlIiwic2V0RnVsbFllYXIiLCJ5ZWFyIiwic2V0TW9udGgiLCJtb250aCIsIm5iT2ZEYXlzSW5Nb250aCIsImdldERhdGUiLCJkYXlzSW5Nb250aCIsImkiLCJ0b2RheSIsImdldEZ1bGxZZWFyIiwiZ2V0TW9udGgiLCJkYXlOYW1lIiwidG9Mb2NhbGVTdHJpbmciLCJ3ZWVrZGF5IiwiZGF5IiwiZGF0ZSIsImlzQ3VycmVudERheSIsImlzUGFkZGluZyIsInB1c2giLCJoZWFkZXIiLCJGaW5kRmlyc3REYXlUb1N0YXJ0Q2FsZW5kYXIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./utils/load-calendar2.ts\n"));

/***/ })

});