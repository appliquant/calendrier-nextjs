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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ LoadCalendar2; }\n/* harmony export */ });\n/**\n * Retourne les informations nécessaire pour render le calendrier\n * @param nav - Objet TypeNav contenant le mois et l'année\n * @param calendarStartingDay - Jour de la semaine où commence le calendrier\n * @returns Retourne les jours dans le mois ainsi que le titre du header\n * @example\n * const [daysInMonth, headerText] = GetCalendarInfo({ month: 0, year: 2021 });\n */ function LoadCalendar2(nav) {\n    var calendarStartingDay = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : \"Sunday\";\n    var dt = new Date();\n    dt.setFullYear(nav.year);\n    dt.setMonth(nav.month);\n    var nbDaysInMonth = new Date(nav.year, nav.month + 1, 0).getDate();\n    var nbDaysBeforeFirstDayOfMonth = FindNumberOfDaysBeforeFirstDayOfMonth(dt, calendarStartingDay);\n    console.log(\"nbDaysBeforeFirstDayOfMonth\", nbDaysBeforeFirstDayOfMonth);\n    var daysInMonth = [];\n    // Ajoute les jours du mois\n    for(var i = 0; i < nbDaysInMonth; i++){\n        var today = new Date(dt.getFullYear(), dt.getMonth(), i + 1);\n        var dayName = today.toLocaleString(\"en-CA\", {\n            weekday: \"long\"\n        });\n        var day = {\n            date: today.getDate(),\n            month: today.getMonth(),\n            year: today.getFullYear(),\n            dayName: dayName,\n            isCurrentDay: today.getDate() === dt.getDate() && today.getMonth() === dt.getMonth(),\n            isPadding: today.getMonth() !== dt.getMonth()\n        };\n        daysInMonth.push(day);\n    }\n    // Header texte (barre de navigation)\n    var header = \"\".concat(dt.toLocaleString(\"en-CA\", {\n        month: \"long\"\n    }), \" \").concat(dt.getFullYear());\n    return [\n        daysInMonth,\n        header\n    ];\n};\n/**\n * \n * @param dt \n * @param calendarStartingDay \n * @returns \n */ function FindNumberOfDaysBeforeFirstDayOfMonth(dt, calendarStartingDay) {\n    var firstDayToStartCalendar = FindFirstDayToStartCalendar(dt, calendarStartingDay); // ex: 28 juin 2021\n    var nbOfDaysInMonth = new Date(firstDayToStartCalendar.getFullYear(), firstDayToStartCalendar.getMonth() + 1, 0).getDate(); // ex: 30 jours dans le mois de juin 2021\n    return nbOfDaysInMonth - firstDayToStartCalendar.getDate() + 1; // ex: 3 jours avant le 1er juillet 2021\n}\n/**\n * Trouve la date où dois commencer le calendrier en fonction du premier jour de la semaine\n * @param dt - Date contenant le mois et l'année à calculer\n * @param calendarStartingDay Premier jour de la semaine @default \"Sunday\"\n */ function FindFirstDayToStartCalendar(dt, calendarStartingDay) {\n    var firstDayOfMonth = new Date(dt.getFullYear(), dt.getMonth(), 1);\n    var firstDayOfMonthName = firstDayOfMonth.toLocaleString(\"en-CA\", {\n        weekday: \"long\"\n    });\n    // Vérifier si le premier jours du mois correspond au premier jour de la semaine du calendrier\n    if (firstDayOfMonthName === calendarStartingDay) {\n        return firstDayOfMonth;\n    }\n    // Trouver le premier jours du mois qui correspond au premier jour de la semaine du calendrier\n    var i = 0; // pour ne pas faire plus de 10 itérations (pour éviter une boucle infinie)\n    while(i <= 10){\n        var day = new Date(dt.getFullYear(), dt.getMonth(), 1 - i);\n        var dayName = day.toLocaleString(\"en-CA\", {\n            weekday: \"long\"\n        });\n        if (dayName === calendarStartingDay) {\n            return day;\n        }\n        i++;\n    }\n    // Si on ne trouve pas le premier jours du mois qui correspond au premier jour de la semaine du calendrier\n    return firstDayOfMonth;\n}\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi91dGlscy9sb2FkLWNhbGVuZGFyMi50cy5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBSUE7Ozs7Ozs7Q0FPQyxHQUNjLFNBQVNBLGFBQWEsQ0FBQ0MsR0FBWSxFQUFxRTtRQUFuRUMsbUJBQWlDLEdBQWpDQSwrQ0FBNEMsa0JBQVIsUUFBUTtJQUM5RixJQUFNQyxFQUFFLEdBQUcsSUFBSUMsSUFBSSxFQUFFO0lBQ3JCRCxFQUFFLENBQUNFLFdBQVcsQ0FBQ0osR0FBRyxDQUFDSyxJQUFJLENBQUMsQ0FBQztJQUN6QkgsRUFBRSxDQUFDSSxRQUFRLENBQUNOLEdBQUcsQ0FBQ08sS0FBSyxDQUFDLENBQUM7SUFFdkIsSUFBTUMsYUFBYSxHQUFHLElBQUlMLElBQUksQ0FBQ0gsR0FBRyxDQUFDSyxJQUFJLEVBQUVMLEdBQUcsQ0FBQ08sS0FBSyxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQ0UsT0FBTyxFQUFFO0lBQ3BFLElBQU1DLDJCQUEyQixHQUFHQyxxQ0FBcUMsQ0FBQ1QsRUFBRSxFQUFFRCxtQkFBbUIsQ0FBQztJQUVsR1csT0FBTyxDQUFDQyxHQUFHLENBQUMsNkJBQTZCLEVBQUVILDJCQUEyQixDQUFDLENBQUM7SUFFeEUsSUFBTUksV0FBVyxHQUFjLEVBQUU7SUFFakMsMkJBQTJCO0lBQzNCLElBQUssSUFBSUMsQ0FBQyxHQUFHLENBQUMsRUFBRUEsQ0FBQyxHQUFHUCxhQUFhLEVBQUVPLENBQUMsRUFBRSxDQUFFO1FBQ3RDLElBQU1DLEtBQUssR0FBRyxJQUFJYixJQUFJLENBQUNELEVBQUUsQ0FBQ2UsV0FBVyxFQUFFLEVBQUVmLEVBQUUsQ0FBQ2dCLFFBQVEsRUFBRSxFQUFFSCxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQzlELElBQU1JLE9BQU8sR0FBR0gsS0FBSyxDQUFDSSxjQUFjLENBQUMsT0FBTyxFQUFFO1lBQUVDLE9BQU8sRUFBRSxNQUFNO1NBQUUsQ0FBQztRQUVsRSxJQUFNQyxHQUFHLEdBQVk7WUFDbkJDLElBQUksRUFBRVAsS0FBSyxDQUFDUCxPQUFPLEVBQUU7WUFDckJGLEtBQUssRUFBRVMsS0FBSyxDQUFDRSxRQUFRLEVBQUU7WUFDdkJiLElBQUksRUFBRVcsS0FBSyxDQUFDQyxXQUFXLEVBQUU7WUFDekJFLE9BQU8sRUFBRUEsT0FBTztZQUNoQkssWUFBWSxFQUFFUixLQUFLLENBQUNQLE9BQU8sRUFBRSxLQUFLUCxFQUFFLENBQUNPLE9BQU8sRUFBRSxJQUFJTyxLQUFLLENBQUNFLFFBQVEsRUFBRSxLQUFLaEIsRUFBRSxDQUFDZ0IsUUFBUSxFQUFFO1lBQ3BGTyxTQUFTLEVBQUVULEtBQUssQ0FBQ0UsUUFBUSxFQUFFLEtBQUtoQixFQUFFLENBQUNnQixRQUFRLEVBQUU7U0FDOUM7UUFFREosV0FBVyxDQUFDWSxJQUFJLENBQUNKLEdBQUcsQ0FBQyxDQUFDO0tBQ3ZCO0lBRUQscUNBQXFDO0lBQ3JDLElBQU1LLE1BQU0sR0FBRyxFQUFDLENBQW1EekIsTUFBZ0IsQ0FBakVBLEVBQUUsQ0FBQ2tCLGNBQWMsQ0FBQyxPQUFPLEVBQUU7UUFBRWIsS0FBSyxFQUFFLE1BQU07S0FBRSxDQUFDLEVBQUMsR0FBQyxDQUFtQixRQUFqQkwsRUFBRSxDQUFDZSxXQUFXLEVBQUUsQ0FBRTtJQUVyRixPQUFPO1FBQUNILFdBQVc7UUFBRWEsTUFBTTtLQUFDLENBQUM7Q0FDOUI7QUFFRDs7Ozs7Q0FLQyxHQUNELFNBQVNoQixxQ0FBcUMsQ0FBQ1QsRUFBUSxFQUFFRCxtQkFBaUMsRUFBVTtJQUNsRyxJQUFNMkIsdUJBQXVCLEdBQUdDLDJCQUEyQixDQUFDM0IsRUFBRSxFQUFFRCxtQkFBbUIsQ0FBQyxFQUFFLG1CQUFtQjtJQUN6RyxJQUFNNkIsZUFBZSxHQUFHLElBQUkzQixJQUFJLENBQzlCeUIsdUJBQXVCLENBQUNYLFdBQVcsRUFBRSxFQUNyQ1csdUJBQXVCLENBQUNWLFFBQVEsRUFBRSxHQUFHLENBQUMsRUFDdEMsQ0FBQyxDQUNGLENBQUNULE9BQU8sRUFBRSxFQUFFLHlDQUF5QztJQUV0RCxPQUFPcUIsZUFBZSxHQUFHRix1QkFBdUIsQ0FBQ25CLE9BQU8sRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDLHdDQUF3QztDQUN6RztBQUVEOzs7O0NBSUMsR0FDRCxTQUFTb0IsMkJBQTJCLENBQUMzQixFQUFRLEVBQUVELG1CQUFpQyxFQUFRO0lBQ3RGLElBQU04QixlQUFlLEdBQUcsSUFBSTVCLElBQUksQ0FBQ0QsRUFBRSxDQUFDZSxXQUFXLEVBQUUsRUFBRWYsRUFBRSxDQUFDZ0IsUUFBUSxFQUFFLEVBQUUsQ0FBQyxDQUFDO0lBQ3BFLElBQU1jLG1CQUFtQixHQUFHRCxlQUFlLENBQUNYLGNBQWMsQ0FBQyxPQUFPLEVBQUU7UUFBRUMsT0FBTyxFQUFFLE1BQU07S0FBRSxDQUFDO0lBRXhGLDhGQUE4RjtJQUM5RixJQUFJVyxtQkFBbUIsS0FBSy9CLG1CQUFtQixFQUFFO1FBQy9DLE9BQU84QixlQUFlLENBQUM7S0FDeEI7SUFFRCw4RkFBOEY7SUFDOUYsSUFBSWhCLENBQUMsR0FBRyxDQUFDLEVBQUUsMkVBQTJFO0lBQ3RGLE1BQU9BLENBQUMsSUFBSSxFQUFFLENBQUU7UUFDZCxJQUFNTyxHQUFHLEdBQUcsSUFBSW5CLElBQUksQ0FBQ0QsRUFBRSxDQUFDZSxXQUFXLEVBQUUsRUFBRWYsRUFBRSxDQUFDZ0IsUUFBUSxFQUFFLEVBQUUsQ0FBQyxHQUFHSCxDQUFDLENBQUM7UUFDNUQsSUFBTUksT0FBTyxHQUFHRyxHQUFHLENBQUNGLGNBQWMsQ0FBQyxPQUFPLEVBQUU7WUFBRUMsT0FBTyxFQUFFLE1BQU07U0FBRSxDQUFDO1FBRWhFLElBQUlGLE9BQU8sS0FBS2xCLG1CQUFtQixFQUFFO1lBQ25DLE9BQU9xQixHQUFHLENBQUM7U0FDWjtRQUVEUCxDQUFDLEVBQUUsQ0FBQztLQUNMO0lBRUQsMEdBQTBHO0lBQzFHLE9BQU9nQixlQUFlLENBQUM7Q0FDeEIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vdXRpbHMvbG9hZC1jYWxlbmRhcjIudHM/MmRiMCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBUeXBlRGF5IH0gZnJvbSBcIi4uL3R5cGVzL1R5cGVEYXlcIjtcbmltcG9ydCB7IFR5cGVOYXYgfSBmcm9tIFwiLi4vdHlwZXMvVHlwZU5hdlwiO1xuaW1wb3J0IHsgVHlwZVdlZWtEYXlzIH0gZnJvbSBcIi4uL3R5cGVzL1R5cGVXZWVrRGF5c1wiO1xuXG4vKipcbiAqIFJldG91cm5lIGxlcyBpbmZvcm1hdGlvbnMgbsOpY2Vzc2FpcmUgcG91ciByZW5kZXIgbGUgY2FsZW5kcmllclxuICogQHBhcmFtIG5hdiAtIE9iamV0IFR5cGVOYXYgY29udGVuYW50IGxlIG1vaXMgZXQgbCdhbm7DqWVcbiAqIEBwYXJhbSBjYWxlbmRhclN0YXJ0aW5nRGF5IC0gSm91ciBkZSBsYSBzZW1haW5lIG/DuSBjb21tZW5jZSBsZSBjYWxlbmRyaWVyXG4gKiBAcmV0dXJucyBSZXRvdXJuZSBsZXMgam91cnMgZGFucyBsZSBtb2lzIGFpbnNpIHF1ZSBsZSB0aXRyZSBkdSBoZWFkZXJcbiAqIEBleGFtcGxlXG4gKiBjb25zdCBbZGF5c0luTW9udGgsIGhlYWRlclRleHRdID0gR2V0Q2FsZW5kYXJJbmZvKHsgbW9udGg6IDAsIHllYXI6IDIwMjEgfSk7XG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIExvYWRDYWxlbmRhcjIobmF2OiBUeXBlTmF2LCBjYWxlbmRhclN0YXJ0aW5nRGF5OiBUeXBlV2Vla0RheXMgPSBcIlN1bmRheVwiKTogW1R5cGVEYXlbXSwgc3RyaW5nXSB7XG4gIGNvbnN0IGR0ID0gbmV3IERhdGUoKTtcbiAgZHQuc2V0RnVsbFllYXIobmF2LnllYXIpO1xuICBkdC5zZXRNb250aChuYXYubW9udGgpO1xuXG4gIGNvbnN0IG5iRGF5c0luTW9udGggPSBuZXcgRGF0ZShuYXYueWVhciwgbmF2Lm1vbnRoICsgMSwgMCkuZ2V0RGF0ZSgpO1xuICBjb25zdCBuYkRheXNCZWZvcmVGaXJzdERheU9mTW9udGggPSBGaW5kTnVtYmVyT2ZEYXlzQmVmb3JlRmlyc3REYXlPZk1vbnRoKGR0LCBjYWxlbmRhclN0YXJ0aW5nRGF5KTtcblxuICBjb25zb2xlLmxvZyhcIm5iRGF5c0JlZm9yZUZpcnN0RGF5T2ZNb250aFwiLCBuYkRheXNCZWZvcmVGaXJzdERheU9mTW9udGgpO1xuXG4gIGNvbnN0IGRheXNJbk1vbnRoOiBUeXBlRGF5W10gPSBbXTtcblxuICAvLyBBam91dGUgbGVzIGpvdXJzIGR1IG1vaXNcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBuYkRheXNJbk1vbnRoOyBpKyspIHtcbiAgICBjb25zdCB0b2RheSA9IG5ldyBEYXRlKGR0LmdldEZ1bGxZZWFyKCksIGR0LmdldE1vbnRoKCksIGkgKyAxKTtcbiAgICBjb25zdCBkYXlOYW1lID0gdG9kYXkudG9Mb2NhbGVTdHJpbmcoXCJlbi1DQVwiLCB7IHdlZWtkYXk6IFwibG9uZ1wiIH0pIGFzIFR5cGVXZWVrRGF5cztcblxuICAgIGNvbnN0IGRheTogVHlwZURheSA9IHtcbiAgICAgIGRhdGU6IHRvZGF5LmdldERhdGUoKSxcbiAgICAgIG1vbnRoOiB0b2RheS5nZXRNb250aCgpLFxuICAgICAgeWVhcjogdG9kYXkuZ2V0RnVsbFllYXIoKSxcbiAgICAgIGRheU5hbWU6IGRheU5hbWUsXG4gICAgICBpc0N1cnJlbnREYXk6IHRvZGF5LmdldERhdGUoKSA9PT0gZHQuZ2V0RGF0ZSgpICYmIHRvZGF5LmdldE1vbnRoKCkgPT09IGR0LmdldE1vbnRoKCksXG4gICAgICBpc1BhZGRpbmc6IHRvZGF5LmdldE1vbnRoKCkgIT09IGR0LmdldE1vbnRoKCksXG4gICAgfTtcblxuICAgIGRheXNJbk1vbnRoLnB1c2goZGF5KTtcbiAgfVxuXG4gIC8vIEhlYWRlciB0ZXh0ZSAoYmFycmUgZGUgbmF2aWdhdGlvbilcbiAgY29uc3QgaGVhZGVyID0gYCR7ZHQudG9Mb2NhbGVTdHJpbmcoXCJlbi1DQVwiLCB7IG1vbnRoOiBcImxvbmdcIiB9KX0gJHtkdC5nZXRGdWxsWWVhcigpfWA7XG5cbiAgcmV0dXJuIFtkYXlzSW5Nb250aCwgaGVhZGVyXTtcbn1cblxuLyoqXG4gKiBcbiAqIEBwYXJhbSBkdCBcbiAqIEBwYXJhbSBjYWxlbmRhclN0YXJ0aW5nRGF5IFxuICogQHJldHVybnMgXG4gKi9cbmZ1bmN0aW9uIEZpbmROdW1iZXJPZkRheXNCZWZvcmVGaXJzdERheU9mTW9udGgoZHQ6IERhdGUsIGNhbGVuZGFyU3RhcnRpbmdEYXk6IFR5cGVXZWVrRGF5cyk6IG51bWJlciB7XG4gIGNvbnN0IGZpcnN0RGF5VG9TdGFydENhbGVuZGFyID0gRmluZEZpcnN0RGF5VG9TdGFydENhbGVuZGFyKGR0LCBjYWxlbmRhclN0YXJ0aW5nRGF5KTsgLy8gZXg6IDI4IGp1aW4gMjAyMVxuICBjb25zdCBuYk9mRGF5c0luTW9udGggPSBuZXcgRGF0ZShcbiAgICBmaXJzdERheVRvU3RhcnRDYWxlbmRhci5nZXRGdWxsWWVhcigpLFxuICAgIGZpcnN0RGF5VG9TdGFydENhbGVuZGFyLmdldE1vbnRoKCkgKyAxLFxuICAgIDBcbiAgKS5nZXREYXRlKCk7IC8vIGV4OiAzMCBqb3VycyBkYW5zIGxlIG1vaXMgZGUganVpbiAyMDIxXG5cbiAgcmV0dXJuIG5iT2ZEYXlzSW5Nb250aCAtIGZpcnN0RGF5VG9TdGFydENhbGVuZGFyLmdldERhdGUoKSArIDE7IC8vIGV4OiAzIGpvdXJzIGF2YW50IGxlIDFlciBqdWlsbGV0IDIwMjFcbn1cblxuLyoqXG4gKiBUcm91dmUgbGEgZGF0ZSBvw7kgZG9pcyBjb21tZW5jZXIgbGUgY2FsZW5kcmllciBlbiBmb25jdGlvbiBkdSBwcmVtaWVyIGpvdXIgZGUgbGEgc2VtYWluZVxuICogQHBhcmFtIGR0IC0gRGF0ZSBjb250ZW5hbnQgbGUgbW9pcyBldCBsJ2FubsOpZSDDoCBjYWxjdWxlclxuICogQHBhcmFtIGNhbGVuZGFyU3RhcnRpbmdEYXkgUHJlbWllciBqb3VyIGRlIGxhIHNlbWFpbmUgQGRlZmF1bHQgXCJTdW5kYXlcIlxuICovXG5mdW5jdGlvbiBGaW5kRmlyc3REYXlUb1N0YXJ0Q2FsZW5kYXIoZHQ6IERhdGUsIGNhbGVuZGFyU3RhcnRpbmdEYXk6IFR5cGVXZWVrRGF5cyk6IERhdGUge1xuICBjb25zdCBmaXJzdERheU9mTW9udGggPSBuZXcgRGF0ZShkdC5nZXRGdWxsWWVhcigpLCBkdC5nZXRNb250aCgpLCAxKTtcbiAgY29uc3QgZmlyc3REYXlPZk1vbnRoTmFtZSA9IGZpcnN0RGF5T2ZNb250aC50b0xvY2FsZVN0cmluZyhcImVuLUNBXCIsIHsgd2Vla2RheTogXCJsb25nXCIgfSkgYXMgVHlwZVdlZWtEYXlzO1xuXG4gIC8vIFbDqXJpZmllciBzaSBsZSBwcmVtaWVyIGpvdXJzIGR1IG1vaXMgY29ycmVzcG9uZCBhdSBwcmVtaWVyIGpvdXIgZGUgbGEgc2VtYWluZSBkdSBjYWxlbmRyaWVyXG4gIGlmIChmaXJzdERheU9mTW9udGhOYW1lID09PSBjYWxlbmRhclN0YXJ0aW5nRGF5KSB7XG4gICAgcmV0dXJuIGZpcnN0RGF5T2ZNb250aDtcbiAgfVxuXG4gIC8vIFRyb3V2ZXIgbGUgcHJlbWllciBqb3VycyBkdSBtb2lzIHF1aSBjb3JyZXNwb25kIGF1IHByZW1pZXIgam91ciBkZSBsYSBzZW1haW5lIGR1IGNhbGVuZHJpZXJcbiAgbGV0IGkgPSAwOyAvLyBwb3VyIG5lIHBhcyBmYWlyZSBwbHVzIGRlIDEwIGl0w6lyYXRpb25zIChwb3VyIMOpdml0ZXIgdW5lIGJvdWNsZSBpbmZpbmllKVxuICB3aGlsZSAoaSA8PSAxMCkge1xuICAgIGNvbnN0IGRheSA9IG5ldyBEYXRlKGR0LmdldEZ1bGxZZWFyKCksIGR0LmdldE1vbnRoKCksIDEgLSBpKTtcbiAgICBjb25zdCBkYXlOYW1lID0gZGF5LnRvTG9jYWxlU3RyaW5nKFwiZW4tQ0FcIiwgeyB3ZWVrZGF5OiBcImxvbmdcIiB9KSBhcyBUeXBlV2Vla0RheXM7XG5cbiAgICBpZiAoZGF5TmFtZSA9PT0gY2FsZW5kYXJTdGFydGluZ0RheSkge1xuICAgICAgcmV0dXJuIGRheTtcbiAgICB9XG5cbiAgICBpKys7XG4gIH1cblxuICAvLyBTaSBvbiBuZSB0cm91dmUgcGFzIGxlIHByZW1pZXIgam91cnMgZHUgbW9pcyBxdWkgY29ycmVzcG9uZCBhdSBwcmVtaWVyIGpvdXIgZGUgbGEgc2VtYWluZSBkdSBjYWxlbmRyaWVyXG4gIHJldHVybiBmaXJzdERheU9mTW9udGg7XG59XG4iXSwibmFtZXMiOlsiTG9hZENhbGVuZGFyMiIsIm5hdiIsImNhbGVuZGFyU3RhcnRpbmdEYXkiLCJkdCIsIkRhdGUiLCJzZXRGdWxsWWVhciIsInllYXIiLCJzZXRNb250aCIsIm1vbnRoIiwibmJEYXlzSW5Nb250aCIsImdldERhdGUiLCJuYkRheXNCZWZvcmVGaXJzdERheU9mTW9udGgiLCJGaW5kTnVtYmVyT2ZEYXlzQmVmb3JlRmlyc3REYXlPZk1vbnRoIiwiY29uc29sZSIsImxvZyIsImRheXNJbk1vbnRoIiwiaSIsInRvZGF5IiwiZ2V0RnVsbFllYXIiLCJnZXRNb250aCIsImRheU5hbWUiLCJ0b0xvY2FsZVN0cmluZyIsIndlZWtkYXkiLCJkYXkiLCJkYXRlIiwiaXNDdXJyZW50RGF5IiwiaXNQYWRkaW5nIiwicHVzaCIsImhlYWRlciIsImZpcnN0RGF5VG9TdGFydENhbGVuZGFyIiwiRmluZEZpcnN0RGF5VG9TdGFydENhbGVuZGFyIiwibmJPZkRheXNJbk1vbnRoIiwiZmlyc3REYXlPZk1vbnRoIiwiZmlyc3REYXlPZk1vbnRoTmFtZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./utils/load-calendar2.ts\n"));

/***/ })

});