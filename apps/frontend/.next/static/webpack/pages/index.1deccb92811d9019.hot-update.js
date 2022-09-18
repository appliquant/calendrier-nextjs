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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ LoadCalendar2; }\n/* harmony export */ });\n/**\n * Retourne les informations nécessaire pour render le calendrier\n * @param nav - Objet TypeNav contenant le mois et l'année\n * @param calendarStartingDay - Jour de la semaine où commence le calendrier\n * @returns Retourne les jours dans le mois ainsi que le titre du header\n * @example\n * const [daysInMonth, headerText] = GetCalendarInfo({ month: 0, year: 2021 });\n */ function LoadCalendar2(nav) {\n    var calendarStartingDay = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : \"Sunday\";\n    var dt = new Date();\n    dt.setFullYear(nav.year);\n    dt.setMonth(nav.month);\n    var nbDaysInMonth = new Date(nav.year, nav.month + 1, 0).getDate();\n    var nbDaysBeforeFirstDayOfMonth = FindNumberOfDaysBeforeFirstDayOfMonth(dt, calendarStartingDay);\n    console.log(\"nbDaysInMonth: \".concat(nbDaysInMonth));\n    console.log(\"nbDaysBeforeFirstDayOfMonth: \".concat(nbDaysBeforeFirstDayOfMonth));\n    var daysInMonth = [];\n    // Ajoute les jours du mois\n    for(var i = -nbDaysBeforeFirstDayOfMonth; i < nbDaysInMonth; i++){\n        var today = new Date(dt.getFullYear(), dt.getMonth(), i + 1);\n        var dayName = today.toLocaleString(\"en-CA\", {\n            weekday: \"long\"\n        });\n        var day = {\n            date: today.getDate(),\n            month: today.getMonth(),\n            year: today.getFullYear(),\n            dayName: dayName,\n            isCurrentDay: today.getDate() === dt.getDate() && today.getMonth() === dt.getMonth(),\n            isPadding: today.getMonth() !== dt.getMonth()\n        };\n        daysInMonth.push(day);\n    }\n    // Header texte (barre de navigation)\n    var header = \"\".concat(dt.toLocaleString(\"en-CA\", {\n        month: \"long\"\n    }), \" \").concat(dt.getFullYear());\n    return [\n        daysInMonth,\n        header\n    ];\n};\n/**\n * Trouve le nombre de jours avant le premier jours du mois en fonction du premier jour de la semaine du calendrier\n * @param dt - Date contenant le mois et l'année à calculer\n * @param calendarStartingDay - Premier jour de la semaine @default \"Sunday\"\n * @returns Trouve le nombre de jours avant le premier jours du mois\n */ function FindNumberOfDaysBeforeFirstDayOfMonth(dt, calendarStartingDay) {\n    var firstDayToStartCalendar = FindFirstDayToStartCalendar(dt, calendarStartingDay); // ex: 28 juin 2021\n    var nbOfDaysInMonth = new Date(firstDayToStartCalendar.getFullYear(), firstDayToStartCalendar.getMonth() + 1, 0).getDate(); // ex: 30 jours dans le mois de juin 2021\n    return nbOfDaysInMonth - firstDayToStartCalendar.getDate() + 1; // ex: 3 jours avant le 1er juillet 2021\n}\n/**\n * Trouve la date où dois commencer le calendrier en fonction du premier jour de la semaine\n * @param dt - Date contenant le mois et l'année à calculer\n * @param calendarStartingDay Premier jour de la semaine @default \"Sunday\"\n */ function FindFirstDayToStartCalendar(dt, calendarStartingDay) {\n    var firstDayOfMonth = new Date(dt.getFullYear(), dt.getMonth(), 1);\n    console.log(\"firstDayOfMonth: \".concat(firstDayOfMonth));\n    var firstDayOfMonthName = firstDayOfMonth.toLocaleString(\"en-CA\", {\n        weekday: \"long\"\n    });\n    console.log(\"firstDayOfMonthName: \".concat(firstDayOfMonthName));\n    console.log(\"\".concat(firstDayOfMonthName));\n    // Vérifier si le premier jours du mois correspond au premier jour de la semaine du calendrier\n    if (firstDayOfMonthName === calendarStartingDay) {\n        return firstDayOfMonth;\n    }\n    // Trouver le premier jours du mois qui correspond au premier jour de la semaine du calendrier\n    var i = 0; // pour ne pas faire plus de 10 itérations (pour éviter une boucle infinie)\n    while(i <= 10){\n        var day = new Date(dt.getFullYear(), dt.getMonth(), 1 - i);\n        var dayName = day.toLocaleString(\"en-CA\", {\n            weekday: \"long\"\n        });\n        if (dayName === calendarStartingDay) {\n            return day;\n        }\n        i++;\n    }\n    // Si on ne trouve pas le premier jours du mois qui correspond au premier jour de la semaine du calendrier\n    return firstDayOfMonth;\n}\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RyxDQUFDRixjQUFjLENBQUMsT0FBTyxFQUFFO1lBQUVDLE9BQU8sRUFBRSxNQUFNO1NBQUUsQ0FBQztRQUVoRSxJQUFJRixPQUFPLEtBQUtsQixtQkFBbUIsRUFBRTtZQUNuQyxPQUFPcUIsR0FBRyxDQUFDO1NBQ1o7UUFFRFAsQ0FBQyxFQUFFLENBQUM7S0FDTDtJQUVELDBHQUEwRztJQUMxRyxPQUFPZ0IsZUFBZSxDQUFDO0NBQ3hCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3V0aWxzL2xvYWQtY2FsZW5kYXIyLnRzPzJkYjAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVHlwZURheSB9IGZyb20gXCIuLi90eXBlcy9UeXBlRGF5XCI7XG5pbXBvcnQgeyBUeXBlTmF2IH0gZnJvbSBcIi4uL3R5cGVzL1R5cGVOYXZcIjtcbmltcG9ydCB7IFR5cGVXZWVrRGF5cyB9IGZyb20gXCIuLi90eXBlcy9UeXBlV2Vla0RheXNcIjtcblxuLyoqXG4gKiBKb3VycyBzdXIgbGVzcXVlbHMgbGUgY2FsZW5kcmllciBwZXV0IGNvbW1lbmNlclxuICovXG50eXBlIFR5cGVTdGFydGluZ0RheXNDYWxlbmRhciA9IFwiU2F0dXJkYXlcIiB8IFwiU3VuZGF5XCIgfCBcIk1vbmRheVwiO1xuXG4vKipcbiAqIFJldG91cm5lIGxlcyBpbmZvcm1hdGlvbnMgbsOpY2Vzc2FpcmUgcG91ciByZW5kZXIgbGUgY2FsZW5kcmllclxuICogQHBhcmFtIG5hdiAtIE9iamV0IFR5cGVOYXYgY29udGVuYW50IGxlIG1vaXMgZXQgbCdhbm7DqWVcbiAqIEBwYXJhbSBjYWxlbmRhclN0YXJ0aW5nRGF5IC0gSm91ciBkZSBsYSBzZW1haW5lIG/DuSBjb21tZW5jZSBsZSBjYWxlbmRyaWVyXG4gKiBAcmV0dXJucyBSZXRvdXJuZSBsZXMgam91cnMgZGFucyBsZSBtb2lzIGFpbnNpIHF1ZSBsZSB0aXRyZSBkdSBoZWFkZXJcbiAqIEBleGFtcGxlXG4gKiBjb25zdCBbZGF5c0luTW9udGgsIGhlYWRlclRleHRdID0gR2V0Q2FsZW5kYXJJbmZvKHsgbW9udGg6IDAsIHllYXI6IDIwMjEgfSk7XG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIExvYWRDYWxlbmRhcjIoXG4gIG5hdjogVHlwZU5hdixcbiAgY2FsZW5kYXJTdGFydGluZ0RheTogVHlwZVN0YXJ0aW5nRGF5c0NhbGVuZGFyID0gXCJTdW5kYXlcIlxuKTogW1R5cGVEYXlbXSwgc3RyaW5nXSB7XG4gIGNvbnN0IGR0ID0gbmV3IERhdGUoKTtcbiAgZHQuc2V0RnVsbFllYXIobmF2LnllYXIpO1xuICBkdC5zZXRNb250aChuYXYubW9udGgpO1xuXG4gIGNvbnN0IG5iRGF5c0luTW9udGggPSBuZXcgRGF0ZShuYXYueWVhciwgbmF2Lm1vbnRoICsgMSwgMCkuZ2V0RGF0ZSgpO1xuICBjb25zdCBuYkRheXNCZWZvcmVGaXJzdERheU9mTW9udGggPSBGaW5kTnVtYmVyT2ZEYXlzQmVmb3JlRmlyc3REYXlPZk1vbnRoKGR0LCBjYWxlbmRhclN0YXJ0aW5nRGF5KTtcblxuICBjb25zb2xlLmxvZyhgbmJEYXlzSW5Nb250aDogJHtuYkRheXNJbk1vbnRofWApO1xuICBjb25zb2xlLmxvZyhgbmJEYXlzQmVmb3JlRmlyc3REYXlPZk1vbnRoOiAke25iRGF5c0JlZm9yZUZpcnN0RGF5T2ZNb250aH1gKTtcblxuICBjb25zdCBkYXlzSW5Nb250aDogVHlwZURheVtdID0gW107XG5cbiAgLy8gQWpvdXRlIGxlcyBqb3VycyBkdSBtb2lzXG4gIGZvciAobGV0IGkgPSAtbmJEYXlzQmVmb3JlRmlyc3REYXlPZk1vbnRoOyBpIDwgbmJEYXlzSW5Nb250aDsgaSsrKSB7XG4gICAgY29uc3QgdG9kYXkgPSBuZXcgRGF0ZShkdC5nZXRGdWxsWWVhcigpLCBkdC5nZXRNb250aCgpLCBpICsgMSk7XG4gICAgY29uc3QgZGF5TmFtZSA9IHRvZGF5LnRvTG9jYWxlU3RyaW5nKFwiZW4tQ0FcIiwgeyB3ZWVrZGF5OiBcImxvbmdcIiB9KSBhcyBUeXBlV2Vla0RheXM7XG5cbiAgICBjb25zdCBkYXk6IFR5cGVEYXkgPSB7XG4gICAgICBkYXRlOiB0b2RheS5nZXREYXRlKCksXG4gICAgICBtb250aDogdG9kYXkuZ2V0TW9udGgoKSxcbiAgICAgIHllYXI6IHRvZGF5LmdldEZ1bGxZZWFyKCksXG4gICAgICBkYXlOYW1lOiBkYXlOYW1lLFxuICAgICAgaXNDdXJyZW50RGF5OiB0b2RheS5nZXREYXRlKCkgPT09IGR0LmdldERhdGUoKSAmJiB0b2RheS5nZXRNb250aCgpID09PSBkdC5nZXRNb250aCgpLFxuICAgICAgaXNQYWRkaW5nOiB0b2RheS5nZXRNb250aCgpICE9PSBkdC5nZXRNb250aCgpLFxuICAgIH07XG5cbiAgICBkYXlzSW5Nb250aC5wdXNoKGRheSk7XG4gIH1cblxuICAvLyBIZWFkZXIgdGV4dGUgKGJhcnJlIGRlIG5hdmlnYXRpb24pXG4gIGNvbnN0IGhlYWRlciA9IGAke2R0LnRvTG9jYWxlU3RyaW5nKFwiZW4tQ0FcIiwgeyBtb250aDogXCJsb25nXCIgfSl9ICR7ZHQuZ2V0RnVsbFllYXIoKX1gO1xuXG4gIHJldHVybiBbZGF5c0luTW9udGgsIGhlYWRlcl07XG59XG5cbi8qKlxuICogVHJvdXZlIGxlIG5vbWJyZSBkZSBqb3VycyBhdmFudCBsZSBwcmVtaWVyIGpvdXJzIGR1IG1vaXMgZW4gZm9uY3Rpb24gZHUgcHJlbWllciBqb3VyIGRlIGxhIHNlbWFpbmUgZHUgY2FsZW5kcmllclxuICogQHBhcmFtIGR0IC0gRGF0ZSBjb250ZW5hbnQgbGUgbW9pcyBldCBsJ2FubsOpZSDDoCBjYWxjdWxlclxuICogQHBhcmFtIGNhbGVuZGFyU3RhcnRpbmdEYXkgLSBQcmVtaWVyIGpvdXIgZGUgbGEgc2VtYWluZSBAZGVmYXVsdCBcIlN1bmRheVwiXG4gKiBAcmV0dXJucyBUcm91dmUgbGUgbm9tYnJlIGRlIGpvdXJzIGF2YW50IGxlIHByZW1pZXIgam91cnMgZHUgbW9pc1xuICovXG5mdW5jdGlvbiBGaW5kTnVtYmVyT2ZEYXlzQmVmb3JlRmlyc3REYXlPZk1vbnRoKGR0OiBEYXRlLCBjYWxlbmRhclN0YXJ0aW5nRGF5OiBUeXBlU3RhcnRpbmdEYXlzQ2FsZW5kYXIpOiBudW1iZXIge1xuICBjb25zdCBmaXJzdERheVRvU3RhcnRDYWxlbmRhciA9IEZpbmRGaXJzdERheVRvU3RhcnRDYWxlbmRhcihkdCwgY2FsZW5kYXJTdGFydGluZ0RheSk7IC8vIGV4OiAyOCBqdWluIDIwMjFcbiAgY29uc3QgbmJPZkRheXNJbk1vbnRoID0gbmV3IERhdGUoXG4gICAgZmlyc3REYXlUb1N0YXJ0Q2FsZW5kYXIuZ2V0RnVsbFllYXIoKSxcbiAgICBmaXJzdERheVRvU3RhcnRDYWxlbmRhci5nZXRNb250aCgpICsgMSxcbiAgICAwXG4gICkuZ2V0RGF0ZSgpOyAvLyBleDogMzAgam91cnMgZGFucyBsZSBtb2lzIGRlIGp1aW4gMjAyMVxuXG4gIHJldHVybiBuYk9mRGF5c0luTW9udGggLSBmaXJzdERheVRvU3RhcnRDYWxlbmRhci5nZXREYXRlKCkgKyAxOyAvLyBleDogMyBqb3VycyBhdmFudCBsZSAxZXIganVpbGxldCAyMDIxXG59XG5cbi8qKlxuICogVHJvdXZlIGxhIGRhdGUgb8O5IGRvaXMgY29tbWVuY2VyIGxlIGNhbGVuZHJpZXIgZW4gZm9uY3Rpb24gZHUgcHJlbWllciBqb3VyIGRlIGxhIHNlbWFpbmVcbiAqIEBwYXJhbSBkdCAtIERhdGUgY29udGVuYW50IGxlIG1vaXMgZXQgbCdhbm7DqWUgw6AgY2FsY3VsZXJcbiAqIEBwYXJhbSBjYWxlbmRhclN0YXJ0aW5nRGF5IFByZW1pZXIgam91ciBkZSBsYSBzZW1haW5lIEBkZWZhdWx0IFwiU3VuZGF5XCJcbiAqL1xuZnVuY3Rpb24gRmluZEZpcnN0RGF5VG9TdGFydENhbGVuZGFyKGR0OiBEYXRlLCBjYWxlbmRhclN0YXJ0aW5nRGF5OiBUeXBlU3RhcnRpbmdEYXlzQ2FsZW5kYXIpOiBEYXRlIHtcbiAgY29uc3QgZmlyc3REYXlPZk1vbnRoID0gbmV3IERhdGUoZHQuZ2V0RnVsbFllYXIoKSwgZHQuZ2V0TW9udGgoKSwgMSk7XG4gIGNvbnNvbGUubG9nKGBmaXJzdERheU9mTW9udGg6ICR7Zmlyc3REYXlPZk1vbnRofWApO1xuICBjb25zdCBmaXJzdERheU9mTW9udGhOYW1lID0gZmlyc3REYXlPZk1vbnRoLnRvTG9jYWxlU3RyaW5nKFwiZW4tQ0FcIiwgeyB3ZWVrZGF5OiBcImxvbmdcIiB9KSBhcyBUeXBlV2Vla0RheXM7XG4gIGNvbnNvbGUubG9nKGBmaXJzdERheU9mTW9udGhOYW1lOiAke2ZpcnN0RGF5T2ZNb250aE5hbWV9YCk7XG4gIGNvbnNvbGUubG9nKGAke2ZpcnN0RGF5T2ZNb250aE5hbWV9YClcbiAgLy8gVsOpcmlmaWVyIHNpIGxlIHByZW1pZXIgam91cnMgZHUgbW9pcyBjb3JyZXNwb25kIGF1IHByZW1pZXIgam91ciBkZSBsYSBzZW1haW5lIGR1IGNhbGVuZHJpZXJcbiAgaWYgKGZpcnN0RGF5T2ZNb250aE5hbWUgPT09IGNhbGVuZGFyU3RhcnRpbmdEYXkpIHtcbiAgICByZXR1cm4gZmlyc3REYXlPZk1vbnRoO1xuICB9XG5cbiAgLy8gVHJvdXZlciBsZSBwcmVtaWVyIGpvdXJzIGR1IG1vaXMgcXVpIGNvcnJlc3BvbmQgYXUgcHJlbWllciBqb3VyIGRlIGxhIHNlbWFpbmUgZHUgY2FsZW5kcmllclxuICBsZXQgaSA9IDA7IC8vIHBvdXIgbmUgcGFzIGZhaXJlIHBsdXMgZGUgMTAgaXTDqXJhdGlvbnMgKHBvdXIgw6l2aXRlciB1bmUgYm91Y2xlIGluZmluaWUpXG4gIHdoaWxlIChpIDw9IDEwKSB7XG4gICAgY29uc3QgZGF5ID0gbmV3IERhdGUoZHQuZ2V0RnVsbFllYXIoKSwgZHQuZ2V0TW9udGgoKSwgMSAtIGkpO1xuICAgIGNvbnN0IGRheU5hbWUgPSBkYXkudG9Mb2NhbGVTdHJpbmcoXCJlbi1DQVwiLCB7IHdlZWtkYXk6IFwibG9uZ1wiIH0pIGFzIFR5cGVXZWVrRGF5cztcblxuICAgIGlmIChkYXlOYW1lID09PSBjYWxlbmRhclN0YXJ0aW5nRGF5KSB7XG4gICAgICByZXR1cm4gZGF5O1xuICAgIH1cblxuICAgIGkrKztcbiAgfVxuXG4gIC8vIFNpIG9uIG5lIHRyb3V2ZSBwYXMgbGUgcHJlbWllciBqb3VycyBkdSBtb2lzIHF1aSBjb3JyZXNwb25kIGF1IHByZW1pZXIgam91ciBkZSBsYSBzZW1haW5lIGR1IGNhbGVuZHJpZXJcbiAgcmV0dXJuIGZpcnN0RGF5T2ZNb250aDtcbn1cbiJdLCJuYW1lcyI6WyJMb2FkQ2FsZW5kYXIyIiwibmF2IiwiY2FsZW5kYXJTdGFydGluZ0RheSIsImR0IiwiRGF0ZSIsInNldEZ1bGxZZWFyIiwieWVhciIsInNldE1vbnRoIiwibW9udGgiLCJuYkRheXNJbk1vbnRoIiwiZ2V0RGF0ZSIsIm5iRGF5c0JlZm9yZUZpcnN0RGF5T2ZNb250aCIsIkZpbmROdW1iZXJPZkRheXNCZWZvcmVGaXJzdERheU9mTW9udGgiLCJjb25zb2xlIiwibG9nIiwiZGF5c0luTW9udGgiLCJpIiwidG9kYXkiLCJnZXRGdWxsWWVhciIsImdldE1vbnRoIiwiZGF5TmFtZSIsInRvTG9jYWxlU3RyaW5nIiwid2Vla2RheSIsImRheSIsImRhdGUiLCJpc0N1cnJlbnREYXkiLCJpc1BhZGRpbmciLCJwdXNoIiwiaGVhZGVyIiwiZmlyc3REYXlUb1N0YXJ0Q2FsZW5kYXIiLCJGaW5kRmlyc3REYXlUb1N0YXJ0Q2FsZW5kYXIiLCJuYk9mRGF5c0luTW9udGgiLCJmaXJzdERheU9mTW9udGgiLCJmaXJzdERheU9mTW9udGhOYW1lIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./utils/load-calendar2.ts\n"));

/***/ })

});