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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ LoadCalendar2; }\n/* harmony export */ });\n/**\n * Retourne les informations nécessaire pour render le calendrier\n * @param nav - Objet TypeNav contenant le mois et l'année\n * @param calendarStartingDay - Jour de la semaine où commence le calendrier\n * @returns Retourne les jours dans le mois ainsi que le titre du header\n * @example\n * const [daysInMonth, headerText] = GetCalendarInfo({ month: 0, year: 2021 });\n */ function LoadCalendar2(nav) {\n    var calendarStartingDay = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : \"Sunday\";\n    var dt = new Date();\n    dt.setFullYear(nav.year);\n    dt.setMonth(nav.month);\n    var nbDaysInMonth = new Date(nav.year, nav.month + 1, 0).getDate();\n    var nbDaysBeforeFirstDayOfMonth = FindNumberOfDaysBeforeFirstDayOfMonth(dt);\n    console.log(\"nbDaysBeforeFirstDayOfMonth\", nbDaysBeforeFirstDayOfMonth);\n    var daysInMonth = [];\n    // Ajoute les jours du mois\n    for(var i = -nbDaysBeforeFirstDayOfMonth; i < nbDaysInMonth; i++){\n        var today = new Date(dt.getFullYear(), dt.getMonth(), i + 1);\n        var dayName = today.toLocaleString(\"en-CA\", {\n            weekday: \"long\"\n        });\n        var day = {\n            date: today.getDate(),\n            month: today.getMonth(),\n            year: today.getFullYear(),\n            dayName: dayName,\n            isCurrentDay: today.getDate() === dt.getDate() && today.getMonth() === dt.getMonth(),\n            isPadding: today.getMonth() !== dt.getMonth()\n        };\n        daysInMonth.push(day);\n    }\n    // Header texte (barre de navigation)\n    var header = \"\".concat(dt.toLocaleString(\"en-CA\", {\n        month: \"long\"\n    }), \" \").concat(dt.getFullYear());\n    return [\n        daysInMonth,\n        header\n    ];\n};\n/**\n * Trouve le nombre de jours avant le premier jours du mois en fonction du premier jour de la semaine du calendrier\n * @param dt - Date contenant le mois et l'année à calculer\n * @param calendarStartingDay - Premier jour de la semaine @default \"Sunday\"\n * @returns Trouve le nombre de jours avant le premier jours du mois\n */ function FindNumberOfDaysBeforeFirstDayOfMonth(dt, calendarStartingDay) {\n    var firstDayToStartCalendar = FindFirstDayToStartCalendar(dt, calendarStartingDay); // ex: 28 juin 2021\n    var nbOfDaysInMonth = new Date(firstDayToStartCalendar.getFullYear(), firstDayToStartCalendar.getMonth() + 1, 0).getDate(); // ex: 30 jours dans le mois de juin 2021\n    return nbOfDaysInMonth - firstDayToStartCalendar.getDate() + 1; // ex: 3 jours avant le 1er juillet 2021\n}\n/**\n * Trouve la date où dois commencer le calendrier en fonction du premier jour de la semaine\n * @param dt - Date contenant le mois et l'année à calculer\n * @param calendarStartingDay Premier jour de la semaine @default \"Sunday\"\n */ function FindFirstDayToStartCalendar(dt, calendarStartingDay) {\n    var firstDayOfMonth = new Date(dt.getFullYear(), dt.getMonth(), 1);\n    var firstDayOfMonthName = firstDayOfMonth.toLocaleString(\"en-CA\", {\n        weekday: \"long\"\n    });\n    // Vérifier si le premier jours du mois correspond au premier jour de la semaine du calendrier\n    if (firstDayOfMonthName === calendarStartingDay) {\n        return firstDayOfMonth;\n    }\n    // Trouver le premier jours du mois qui correspond au premier jour de la semaine du calendrier\n    var i = 0; // pour ne pas faire plus de 10 itérations (pour éviter une boucle infinie)\n    while(i <= 10){\n        var day = new Date(dt.getFullYear(), dt.getMonth(), 1 - i);\n        var dayName = day.toLocaleString(\"en-CA\", {\n            weekday: \"long\"\n        });\n        if (dayName === calendarStartingDay) {\n            return day;\n        }\n        i++;\n    }\n    // Si on ne trouve pas le premier jours du mois qui correspond au premier jour de la semaine du calendrier\n    return firstDayOfMonth;\n}\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QixPQUFPLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQyx3Q0FBd0M7Q0FDekc7QUFFRDs7OztDQUlDLEdBQ0QsU0FBU29CLDJCQUEyQixDQUFDM0IsRUFBUSxFQUFFRCxtQkFBNkMsRUFBUTtJQUNsRyxJQUFNOEIsZUFBZSxHQUFHLElBQUk1QixJQUFJLENBQUNELEVBQUUsQ0FBQ2UsV0FBVyxFQUFFLEVBQUVmLEVBQUUsQ0FBQ2dCLFFBQVEsRUFBRSxFQUFFLENBQUMsQ0FBQztJQUNwRSxJQUFNYyxtQkFBbUIsR0FBR0QsZUFBZSxDQUFDWCxjQUFjLENBQUMsT0FBTyxFQUFFO1FBQUVDLE9BQU8sRUFBRSxNQUFNO0tBQUUsQ0FBQztJQUV4Riw4RkFBOEY7SUFDOUYsSUFBSVcsbUJBQW1CLEtBQUsvQixtQkFBbUIsRUFBRTtRQUMvQyxPQUFPOEIsZUFBZSxDQUFDO0tBQ3hCO0lBRUQsOEZBQThGO0lBQzlGLElBQUloQixDQUFDLEdBQUcsQ0FBQyxFQUFFLDJFQUEyRTtJQUN0RixNQUFPQSxDQUFDLElBQUksRUFBRSxDQUFFO1FBQ2QsSUFBTU8sR0FBRyxHQUFHLElBQUluQixJQUFJLENBQUNELEVBQUUsQ0FBQ2UsV0FBVyxFQUFFLEVBQUVmLEVBQUUsQ0FBQ2dCLFFBQVEsRUFBRSxFQUFFLENBQUMsR0FBR0gsQ0FBQyxDQUFDO1FBQzVELElBQU1JLE9BQU8sR0FBR0csR0FBRyxDQUFDRixjQUFjLENBQUMsT0FBTyxFQUFFO1lBQUVDLE9BQU8sRUFBRSxNQUFNO1NBQUUsQ0FBQztRQUVoRSxJQUFJRixPQUFPLEtBQUtsQixtQkFBbUIsRUFBRTtZQUNuQyxPQUFPcUIsR0FBRyxDQUFDO1NBQ1o7UUFFRFAsQ0FBQyxFQUFFLENBQUM7S0FDTDtJQUVELDBHQUEwRztJQUMxRyxPQUFPZ0IsZUFBZSxDQUFDO0NBQ3hCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3V0aWxzL2xvYWQtY2FsZW5kYXIyLnRzPzJkYjAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVHlwZURheSB9IGZyb20gXCIuLi90eXBlcy9UeXBlRGF5XCI7XG5pbXBvcnQgeyBUeXBlTmF2IH0gZnJvbSBcIi4uL3R5cGVzL1R5cGVOYXZcIjtcbmltcG9ydCB7IFR5cGVXZWVrRGF5cyB9IGZyb20gXCIuLi90eXBlcy9UeXBlV2Vla0RheXNcIjtcblxuLyoqXG4gKiBKb3VycyBzdXIgbGVzcXVlbHMgbGUgY2FsZW5kcmllciBwZXV0IGNvbW1lbmNlclxuICovXG50eXBlIFR5cGVTdGFydGluZ0RheXNDYWxlbmRhciA9IFwiU2F0dXJkYXlcIiB8IFwiU3VuZGF5XCIgfCBcIk1vbmRheVwiO1xuXG4vKipcbiAqIFJldG91cm5lIGxlcyBpbmZvcm1hdGlvbnMgbsOpY2Vzc2FpcmUgcG91ciByZW5kZXIgbGUgY2FsZW5kcmllclxuICogQHBhcmFtIG5hdiAtIE9iamV0IFR5cGVOYXYgY29udGVuYW50IGxlIG1vaXMgZXQgbCdhbm7DqWVcbiAqIEBwYXJhbSBjYWxlbmRhclN0YXJ0aW5nRGF5IC0gSm91ciBkZSBsYSBzZW1haW5lIG/DuSBjb21tZW5jZSBsZSBjYWxlbmRyaWVyXG4gKiBAcmV0dXJucyBSZXRvdXJuZSBsZXMgam91cnMgZGFucyBsZSBtb2lzIGFpbnNpIHF1ZSBsZSB0aXRyZSBkdSBoZWFkZXJcbiAqIEBleGFtcGxlXG4gKiBjb25zdCBbZGF5c0luTW9udGgsIGhlYWRlclRleHRdID0gR2V0Q2FsZW5kYXJJbmZvKHsgbW9udGg6IDAsIHllYXI6IDIwMjEgfSk7XG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIExvYWRDYWxlbmRhcjIoXG4gIG5hdjogVHlwZU5hdixcbiAgY2FsZW5kYXJTdGFydGluZ0RheTogVHlwZVN0YXJ0aW5nRGF5c0NhbGVuZGFyID0gXCJTdW5kYXlcIlxuKTogW1R5cGVEYXlbXSwgc3RyaW5nXSB7XG4gIGNvbnN0IGR0ID0gbmV3IERhdGUoKTtcbiAgZHQuc2V0RnVsbFllYXIobmF2LnllYXIpO1xuICBkdC5zZXRNb250aChuYXYubW9udGgpO1xuXG4gIGNvbnN0IG5iRGF5c0luTW9udGggPSBuZXcgRGF0ZShuYXYueWVhciwgbmF2Lm1vbnRoICsgMSwgMCkuZ2V0RGF0ZSgpO1xuICBjb25zdCBuYkRheXNCZWZvcmVGaXJzdERheU9mTW9udGggPSBGaW5kTnVtYmVyT2ZEYXlzQmVmb3JlRmlyc3REYXlPZk1vbnRoKGR0LCApO1xuXG4gIGNvbnNvbGUubG9nKFwibmJEYXlzQmVmb3JlRmlyc3REYXlPZk1vbnRoXCIsIG5iRGF5c0JlZm9yZUZpcnN0RGF5T2ZNb250aCk7XG5cbiAgY29uc3QgZGF5c0luTW9udGg6IFR5cGVEYXlbXSA9IFtdO1xuXG4gIC8vIEFqb3V0ZSBsZXMgam91cnMgZHUgbW9pc1xuICBmb3IgKGxldCBpID0gLW5iRGF5c0JlZm9yZUZpcnN0RGF5T2ZNb250aDsgaSA8IG5iRGF5c0luTW9udGg7IGkrKykge1xuICAgIGNvbnN0IHRvZGF5ID0gbmV3IERhdGUoZHQuZ2V0RnVsbFllYXIoKSwgZHQuZ2V0TW9udGgoKSwgaSArIDEpO1xuICAgIGNvbnN0IGRheU5hbWUgPSB0b2RheS50b0xvY2FsZVN0cmluZyhcImVuLUNBXCIsIHsgd2Vla2RheTogXCJsb25nXCIgfSkgYXMgVHlwZVdlZWtEYXlzO1xuXG4gICAgY29uc3QgZGF5OiBUeXBlRGF5ID0ge1xuICAgICAgZGF0ZTogdG9kYXkuZ2V0RGF0ZSgpLFxuICAgICAgbW9udGg6IHRvZGF5LmdldE1vbnRoKCksXG4gICAgICB5ZWFyOiB0b2RheS5nZXRGdWxsWWVhcigpLFxuICAgICAgZGF5TmFtZTogZGF5TmFtZSxcbiAgICAgIGlzQ3VycmVudERheTogdG9kYXkuZ2V0RGF0ZSgpID09PSBkdC5nZXREYXRlKCkgJiYgdG9kYXkuZ2V0TW9udGgoKSA9PT0gZHQuZ2V0TW9udGgoKSxcbiAgICAgIGlzUGFkZGluZzogdG9kYXkuZ2V0TW9udGgoKSAhPT0gZHQuZ2V0TW9udGgoKSxcbiAgICB9O1xuXG4gICAgZGF5c0luTW9udGgucHVzaChkYXkpO1xuICB9XG5cbiAgLy8gSGVhZGVyIHRleHRlIChiYXJyZSBkZSBuYXZpZ2F0aW9uKVxuICBjb25zdCBoZWFkZXIgPSBgJHtkdC50b0xvY2FsZVN0cmluZyhcImVuLUNBXCIsIHsgbW9udGg6IFwibG9uZ1wiIH0pfSAke2R0LmdldEZ1bGxZZWFyKCl9YDtcblxuICByZXR1cm4gW2RheXNJbk1vbnRoLCBoZWFkZXJdO1xufVxuXG4vKipcbiAqIFRyb3V2ZSBsZSBub21icmUgZGUgam91cnMgYXZhbnQgbGUgcHJlbWllciBqb3VycyBkdSBtb2lzIGVuIGZvbmN0aW9uIGR1IHByZW1pZXIgam91ciBkZSBsYSBzZW1haW5lIGR1IGNhbGVuZHJpZXJcbiAqIEBwYXJhbSBkdCAtIERhdGUgY29udGVuYW50IGxlIG1vaXMgZXQgbCdhbm7DqWUgw6AgY2FsY3VsZXJcbiAqIEBwYXJhbSBjYWxlbmRhclN0YXJ0aW5nRGF5IC0gUHJlbWllciBqb3VyIGRlIGxhIHNlbWFpbmUgQGRlZmF1bHQgXCJTdW5kYXlcIlxuICogQHJldHVybnMgVHJvdXZlIGxlIG5vbWJyZSBkZSBqb3VycyBhdmFudCBsZSBwcmVtaWVyIGpvdXJzIGR1IG1vaXNcbiAqL1xuZnVuY3Rpb24gRmluZE51bWJlck9mRGF5c0JlZm9yZUZpcnN0RGF5T2ZNb250aChkdDogRGF0ZSwgY2FsZW5kYXJTdGFydGluZ0RheTogVHlwZVN0YXJ0aW5nRGF5c0NhbGVuZGFyKTogbnVtYmVyIHtcbiAgY29uc3QgZmlyc3REYXlUb1N0YXJ0Q2FsZW5kYXIgPSBGaW5kRmlyc3REYXlUb1N0YXJ0Q2FsZW5kYXIoZHQsIGNhbGVuZGFyU3RhcnRpbmdEYXkpOyAvLyBleDogMjgganVpbiAyMDIxXG4gIGNvbnN0IG5iT2ZEYXlzSW5Nb250aCA9IG5ldyBEYXRlKFxuICAgIGZpcnN0RGF5VG9TdGFydENhbGVuZGFyLmdldEZ1bGxZZWFyKCksXG4gICAgZmlyc3REYXlUb1N0YXJ0Q2FsZW5kYXIuZ2V0TW9udGgoKSArIDEsXG4gICAgMFxuICApLmdldERhdGUoKTsgLy8gZXg6IDMwIGpvdXJzIGRhbnMgbGUgbW9pcyBkZSBqdWluIDIwMjFcblxuICByZXR1cm4gbmJPZkRheXNJbk1vbnRoIC0gZmlyc3REYXlUb1N0YXJ0Q2FsZW5kYXIuZ2V0RGF0ZSgpICsgMTsgLy8gZXg6IDMgam91cnMgYXZhbnQgbGUgMWVyIGp1aWxsZXQgMjAyMVxufVxuXG4vKipcbiAqIFRyb3V2ZSBsYSBkYXRlIG/DuSBkb2lzIGNvbW1lbmNlciBsZSBjYWxlbmRyaWVyIGVuIGZvbmN0aW9uIGR1IHByZW1pZXIgam91ciBkZSBsYSBzZW1haW5lXG4gKiBAcGFyYW0gZHQgLSBEYXRlIGNvbnRlbmFudCBsZSBtb2lzIGV0IGwnYW5uw6llIMOgIGNhbGN1bGVyXG4gKiBAcGFyYW0gY2FsZW5kYXJTdGFydGluZ0RheSBQcmVtaWVyIGpvdXIgZGUgbGEgc2VtYWluZSBAZGVmYXVsdCBcIlN1bmRheVwiXG4gKi9cbmZ1bmN0aW9uIEZpbmRGaXJzdERheVRvU3RhcnRDYWxlbmRhcihkdDogRGF0ZSwgY2FsZW5kYXJTdGFydGluZ0RheTogVHlwZVN0YXJ0aW5nRGF5c0NhbGVuZGFyKTogRGF0ZSB7XG4gIGNvbnN0IGZpcnN0RGF5T2ZNb250aCA9IG5ldyBEYXRlKGR0LmdldEZ1bGxZZWFyKCksIGR0LmdldE1vbnRoKCksIDEpO1xuICBjb25zdCBmaXJzdERheU9mTW9udGhOYW1lID0gZmlyc3REYXlPZk1vbnRoLnRvTG9jYWxlU3RyaW5nKFwiZW4tQ0FcIiwgeyB3ZWVrZGF5OiBcImxvbmdcIiB9KSBhcyBUeXBlV2Vla0RheXM7XG5cbiAgLy8gVsOpcmlmaWVyIHNpIGxlIHByZW1pZXIgam91cnMgZHUgbW9pcyBjb3JyZXNwb25kIGF1IHByZW1pZXIgam91ciBkZSBsYSBzZW1haW5lIGR1IGNhbGVuZHJpZXJcbiAgaWYgKGZpcnN0RGF5T2ZNb250aE5hbWUgPT09IGNhbGVuZGFyU3RhcnRpbmdEYXkpIHtcbiAgICByZXR1cm4gZmlyc3REYXlPZk1vbnRoO1xuICB9XG5cbiAgLy8gVHJvdXZlciBsZSBwcmVtaWVyIGpvdXJzIGR1IG1vaXMgcXVpIGNvcnJlc3BvbmQgYXUgcHJlbWllciBqb3VyIGRlIGxhIHNlbWFpbmUgZHUgY2FsZW5kcmllclxuICBsZXQgaSA9IDA7IC8vIHBvdXIgbmUgcGFzIGZhaXJlIHBsdXMgZGUgMTAgaXTDqXJhdGlvbnMgKHBvdXIgw6l2aXRlciB1bmUgYm91Y2xlIGluZmluaWUpXG4gIHdoaWxlIChpIDw9IDEwKSB7XG4gICAgY29uc3QgZGF5ID0gbmV3IERhdGUoZHQuZ2V0RnVsbFllYXIoKSwgZHQuZ2V0TW9udGgoKSwgMSAtIGkpO1xuICAgIGNvbnN0IGRheU5hbWUgPSBkYXkudG9Mb2NhbGVTdHJpbmcoXCJlbi1DQVwiLCB7IHdlZWtkYXk6IFwibG9uZ1wiIH0pIGFzIFR5cGVXZWVrRGF5cztcblxuICAgIGlmIChkYXlOYW1lID09PSBjYWxlbmRhclN0YXJ0aW5nRGF5KSB7XG4gICAgICByZXR1cm4gZGF5O1xuICAgIH1cblxuICAgIGkrKztcbiAgfVxuXG4gIC8vIFNpIG9uIG5lIHRyb3V2ZSBwYXMgbGUgcHJlbWllciBqb3VycyBkdSBtb2lzIHF1aSBjb3JyZXNwb25kIGF1IHByZW1pZXIgam91ciBkZSBsYSBzZW1haW5lIGR1IGNhbGVuZHJpZXJcbiAgcmV0dXJuIGZpcnN0RGF5T2ZNb250aDtcbn1cbiJdLCJuYW1lcyI6WyJMb2FkQ2FsZW5kYXIyIiwibmF2IiwiY2FsZW5kYXJTdGFydGluZ0RheSIsImR0IiwiRGF0ZSIsInNldEZ1bGxZZWFyIiwieWVhciIsInNldE1vbnRoIiwibW9udGgiLCJuYkRheXNJbk1vbnRoIiwiZ2V0RGF0ZSIsIm5iRGF5c0JlZm9yZUZpcnN0RGF5T2ZNb250aCIsIkZpbmROdW1iZXJPZkRheXNCZWZvcmVGaXJzdERheU9mTW9udGgiLCJjb25zb2xlIiwibG9nIiwiZGF5c0luTW9udGgiLCJpIiwidG9kYXkiLCJnZXRGdWxsWWVhciIsImdldE1vbnRoIiwiZGF5TmFtZSIsInRvTG9jYWxlU3RyaW5nIiwid2Vla2RheSIsImRheSIsImRhdGUiLCJpc0N1cnJlbnREYXkiLCJpc1BhZGRpbmciLCJwdXNoIiwiaGVhZGVyIiwiZmlyc3REYXlUb1N0YXJ0Q2FsZW5kYXIiLCJGaW5kRmlyc3REYXlUb1N0YXJ0Q2FsZW5kYXIiLCJuYk9mRGF5c0luTW9udGgiLCJmaXJzdERheU9mTW9udGgiLCJmaXJzdERheU9mTW9udGhOYW1lIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./utils/load-calendar2.ts\n"));

/***/ })

});