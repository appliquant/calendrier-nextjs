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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ LoadCalendar2; }\n/* harmony export */ });\n/**\n * Retourne les informations nécessaire pour render le calendrier\n * @param nav - Objet TypeNav contenant le mois et l'année\n * @returns Retourne les jours dans le mois ainsi que le titre du header\n * @example\n * const [daysInMonth, headerText] = GetCalendarInfo({ month: 0, year: 2021 });\n */ function LoadCalendar2(nav) {\n    var dt = new Date();\n    dt.setFullYear(nav.year);\n    dt.setMonth(nav.month);\n    var calendarStartingDay = \"Sunday\";\n    var nbOfDaysInMonth = new Date(nav.year, nav.month + 1, 0).getDate();\n    var nbOfDaysBeforeFirstDay = 5 * 7 - nbOfDaysInMonth; // 5 rangées * 7 colonnes - nb de jours dans le mois = nb de jours avant le 1er du mois\n    console.log();\n    var daysInMonth = [];\n    for(var i = 0; i < nbDaysInMonth; i++){\n        var today = new Date(dt.getFullYear(), dt.getMonth(), i);\n        var dayName = today.toLocaleString(\"en-CA\", {\n            weekday: \"long\"\n        });\n        var day = {\n            date: today.getDate(),\n            month: today.getMonth(),\n            year: today.getFullYear(),\n            dayName: dayName,\n            isCurrentDay: today.getDate() === dt.getDate() && today.getMonth() === dt.getMonth(),\n            isPadding: today.getMonth() !== dt.getMonth()\n        };\n        daysInMonth.push(day);\n    }\n    // Header texte (barre de navigation)\n    var header = \"\".concat(dt.toLocaleString(\"en-CA\", {\n        month: \"long\"\n    }), \" \").concat(dt.getFullYear());\n    return [\n        daysInMonth,\n        header\n    ];\n};\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi91dGlscy9sb2FkLWNhbGVuZGFyMi50cy5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBSUE7Ozs7OztDQU1DLEdBQ2MsU0FBU0EsYUFBYSxDQUFDQyxHQUFZLEVBQXVCO0lBQ3ZFLElBQU1DLEVBQUUsR0FBRyxJQUFJQyxJQUFJLEVBQUU7SUFDckJELEVBQUUsQ0FBQ0UsV0FBVyxDQUFDSCxHQUFHLENBQUNJLElBQUksQ0FBQyxDQUFDO0lBQ3pCSCxFQUFFLENBQUNJLFFBQVEsQ0FBQ0wsR0FBRyxDQUFDTSxLQUFLLENBQUMsQ0FBQztJQUV2QixJQUFNQyxtQkFBbUIsR0FBRyxRQUFRO0lBQ3BDLElBQU1DLGVBQWUsR0FBRyxJQUFJTixJQUFJLENBQUNGLEdBQUcsQ0FBQ0ksSUFBSSxFQUFFSixHQUFHLENBQUNNLEtBQUssR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUNHLE9BQU8sRUFBRTtJQUN0RSxJQUFNQyxzQkFBc0IsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHRixlQUFlLEVBQUUsdUZBQXVGO0lBRy9JRyxPQUFPLENBQUNDLEdBQUcsRUFBRTtJQUViLElBQU1DLFdBQVcsR0FBYyxFQUFFO0lBRWpDLElBQUssSUFBSUMsQ0FBQyxHQUFHLENBQUMsRUFBRUEsQ0FBQyxHQUFHQyxhQUFhLEVBQUVELENBQUMsRUFBRSxDQUFFO1FBQ3RDLElBQU1FLEtBQUssR0FBRyxJQUFJZCxJQUFJLENBQUNELEVBQUUsQ0FBQ2dCLFdBQVcsRUFBRSxFQUFFaEIsRUFBRSxDQUFDaUIsUUFBUSxFQUFFLEVBQUVKLENBQUMsQ0FBQztRQUMxRCxJQUFNSyxPQUFPLEdBQUdILEtBQUssQ0FBQ0ksY0FBYyxDQUFDLE9BQU8sRUFBRTtZQUFFQyxPQUFPLEVBQUUsTUFBTTtTQUFFLENBQUM7UUFFbEUsSUFBTUMsR0FBRyxHQUFZO1lBQ25CQyxJQUFJLEVBQUVQLEtBQUssQ0FBQ1AsT0FBTyxFQUFFO1lBQ3JCSCxLQUFLLEVBQUVVLEtBQUssQ0FBQ0UsUUFBUSxFQUFFO1lBQ3ZCZCxJQUFJLEVBQUVZLEtBQUssQ0FBQ0MsV0FBVyxFQUFFO1lBQ3pCRSxPQUFPLEVBQUVBLE9BQU87WUFDaEJLLFlBQVksRUFBRVIsS0FBSyxDQUFDUCxPQUFPLEVBQUUsS0FBS1IsRUFBRSxDQUFDUSxPQUFPLEVBQUUsSUFBSU8sS0FBSyxDQUFDRSxRQUFRLEVBQUUsS0FBS2pCLEVBQUUsQ0FBQ2lCLFFBQVEsRUFBRTtZQUNwRk8sU0FBUyxFQUFFVCxLQUFLLENBQUNFLFFBQVEsRUFBRSxLQUFLakIsRUFBRSxDQUFDaUIsUUFBUSxFQUFFO1NBQzlDO1FBRURMLFdBQVcsQ0FBQ2EsSUFBSSxDQUFDSixHQUFHLENBQUMsQ0FBQztLQUN2QjtJQUVELHFDQUFxQztJQUNyQyxJQUFNSyxNQUFNLEdBQUcsRUFBQyxDQUFtRDFCLE1BQWdCLENBQWpFQSxFQUFFLENBQUNtQixjQUFjLENBQUMsT0FBTyxFQUFFO1FBQUVkLEtBQUssRUFBRSxNQUFNO0tBQUUsQ0FBQyxFQUFDLEdBQUMsQ0FBbUIsUUFBakJMLEVBQUUsQ0FBQ2dCLFdBQVcsRUFBRSxDQUFFO0lBRXJGLE9BQU87UUFBQ0osV0FBVztRQUFFYyxNQUFNO0tBQUMsQ0FBQztDQUM5QiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi91dGlscy9sb2FkLWNhbGVuZGFyMi50cz8yZGIwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFR5cGVEYXkgfSBmcm9tIFwiLi4vdHlwZXMvVHlwZURheVwiO1xuaW1wb3J0IHsgVHlwZU5hdiB9IGZyb20gXCIuLi90eXBlcy9UeXBlTmF2XCI7XG5pbXBvcnQgeyBUeXBlV2Vla0RheXMgfSBmcm9tIFwiLi4vdHlwZXMvVHlwZVdlZWtEYXlzXCI7XG5cbi8qKlxuICogUmV0b3VybmUgbGVzIGluZm9ybWF0aW9ucyBuw6ljZXNzYWlyZSBwb3VyIHJlbmRlciBsZSBjYWxlbmRyaWVyXG4gKiBAcGFyYW0gbmF2IC0gT2JqZXQgVHlwZU5hdiBjb250ZW5hbnQgbGUgbW9pcyBldCBsJ2FubsOpZVxuICogQHJldHVybnMgUmV0b3VybmUgbGVzIGpvdXJzIGRhbnMgbGUgbW9pcyBhaW5zaSBxdWUgbGUgdGl0cmUgZHUgaGVhZGVyXG4gKiBAZXhhbXBsZVxuICogY29uc3QgW2RheXNJbk1vbnRoLCBoZWFkZXJUZXh0XSA9IEdldENhbGVuZGFySW5mbyh7IG1vbnRoOiAwLCB5ZWFyOiAyMDIxIH0pO1xuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBMb2FkQ2FsZW5kYXIyKG5hdjogVHlwZU5hdik6IFtUeXBlRGF5W10sIHN0cmluZ10ge1xuICBjb25zdCBkdCA9IG5ldyBEYXRlKCk7XG4gIGR0LnNldEZ1bGxZZWFyKG5hdi55ZWFyKTtcbiAgZHQuc2V0TW9udGgobmF2Lm1vbnRoKTtcblxuICBjb25zdCBjYWxlbmRhclN0YXJ0aW5nRGF5ID0gXCJTdW5kYXlcIjtcbiAgY29uc3QgbmJPZkRheXNJbk1vbnRoID0gbmV3IERhdGUobmF2LnllYXIsIG5hdi5tb250aCArIDEsIDApLmdldERhdGUoKTtcbiAgY29uc3QgbmJPZkRheXNCZWZvcmVGaXJzdERheSA9IDUgKiA3IC0gbmJPZkRheXNJbk1vbnRoOyAvLyA1IHJhbmfDqWVzICogNyBjb2xvbm5lcyAtIG5iIGRlIGpvdXJzIGRhbnMgbGUgbW9pcyA9IG5iIGRlIGpvdXJzIGF2YW50IGxlIDFlciBkdSBtb2lzXG5cblxuICBjb25zb2xlLmxvZygpXG5cbiAgY29uc3QgZGF5c0luTW9udGg6IFR5cGVEYXlbXSA9IFtdO1xuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgbmJEYXlzSW5Nb250aDsgaSsrKSB7XG4gICAgY29uc3QgdG9kYXkgPSBuZXcgRGF0ZShkdC5nZXRGdWxsWWVhcigpLCBkdC5nZXRNb250aCgpLCBpKTtcbiAgICBjb25zdCBkYXlOYW1lID0gdG9kYXkudG9Mb2NhbGVTdHJpbmcoXCJlbi1DQVwiLCB7IHdlZWtkYXk6IFwibG9uZ1wiIH0pIGFzIFR5cGVXZWVrRGF5cztcblxuICAgIGNvbnN0IGRheTogVHlwZURheSA9IHtcbiAgICAgIGRhdGU6IHRvZGF5LmdldERhdGUoKSxcbiAgICAgIG1vbnRoOiB0b2RheS5nZXRNb250aCgpLFxuICAgICAgeWVhcjogdG9kYXkuZ2V0RnVsbFllYXIoKSxcbiAgICAgIGRheU5hbWU6IGRheU5hbWUsXG4gICAgICBpc0N1cnJlbnREYXk6IHRvZGF5LmdldERhdGUoKSA9PT0gZHQuZ2V0RGF0ZSgpICYmIHRvZGF5LmdldE1vbnRoKCkgPT09IGR0LmdldE1vbnRoKCksXG4gICAgICBpc1BhZGRpbmc6IHRvZGF5LmdldE1vbnRoKCkgIT09IGR0LmdldE1vbnRoKCksXG4gICAgfTtcblxuICAgIGRheXNJbk1vbnRoLnB1c2goZGF5KTtcbiAgfVxuXG4gIC8vIEhlYWRlciB0ZXh0ZSAoYmFycmUgZGUgbmF2aWdhdGlvbilcbiAgY29uc3QgaGVhZGVyID0gYCR7ZHQudG9Mb2NhbGVTdHJpbmcoXCJlbi1DQVwiLCB7IG1vbnRoOiBcImxvbmdcIiB9KX0gJHtkdC5nZXRGdWxsWWVhcigpfWA7XG5cbiAgcmV0dXJuIFtkYXlzSW5Nb250aCwgaGVhZGVyXTtcbn1cbiJdLCJuYW1lcyI6WyJMb2FkQ2FsZW5kYXIyIiwibmF2IiwiZHQiLCJEYXRlIiwic2V0RnVsbFllYXIiLCJ5ZWFyIiwic2V0TW9udGgiLCJtb250aCIsImNhbGVuZGFyU3RhcnRpbmdEYXkiLCJuYk9mRGF5c0luTW9udGgiLCJnZXREYXRlIiwibmJPZkRheXNCZWZvcmVGaXJzdERheSIsImNvbnNvbGUiLCJsb2ciLCJkYXlzSW5Nb250aCIsImkiLCJuYkRheXNJbk1vbnRoIiwidG9kYXkiLCJnZXRGdWxsWWVhciIsImdldE1vbnRoIiwiZGF5TmFtZSIsInRvTG9jYWxlU3RyaW5nIiwid2Vla2RheSIsImRheSIsImRhdGUiLCJpc0N1cnJlbnREYXkiLCJpc1BhZGRpbmciLCJwdXNoIiwiaGVhZGVyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./utils/load-calendar2.ts\n"));

/***/ })

});