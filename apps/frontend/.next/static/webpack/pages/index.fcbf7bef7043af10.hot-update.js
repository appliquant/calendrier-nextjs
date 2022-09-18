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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ LoadCalendar2; }\n/* harmony export */ });\n/**\n * Retourne les informations nécessaire pour render le calendrier\n * @param nav - Objet TypeNav contenant le mois et l'année\n * @param calendarStartingDay - Jour de la semaine où commence le calendrier\n * @returns Retourne les jours dans le mois ainsi que le titre du header\n * @example\n * const [daysInMonth, headerText] = GetCalendarInfo({ month: 0, year: 2021 });\n */ function LoadCalendar2(nav) {\n    var calendarStartingDay = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : \"Sunday\";\n    var dt = new Date();\n    dt.setFullYear(nav.year);\n    dt.setMonth(nav.month);\n    var nbOfDaysInMonth = new Date(nav.year, nav.month + 1, 0).getDate();\n    // const nbOfDaysBeforeFirstDayOfMonth = NumOfPaddingDays(dt, calendarStartingDay);\n    var daysInMonth = [];\n    // Ajoute les jours du mois\n    for(var i = 0; i < nbOfDaysInMonth; i++){\n        var today = new Date(dt.getFullYear(), dt.getMonth(), i + 1);\n        var dayName = today.toLocaleString(\"en-CA\", {\n            weekday: \"long\"\n        });\n        var day = {\n            date: today.getDate(),\n            month: today.getMonth(),\n            year: today.getFullYear(),\n            dayName: dayName,\n            isCurrentDay: today.getDate() === dt.getDate() && today.getMonth() === dt.getMonth(),\n            isPadding: today.getMonth() !== dt.getMonth()\n        };\n        daysInMonth.push(day);\n    }\n    // Header texte (barre de navigation)\n    var header = \"\".concat(dt.toLocaleString(\"en-CA\", {\n        month: \"long\"\n    }), \" \").concat(dt.getFullYear());\n    return [\n        daysInMonth,\n        header\n    ];\n};\n/**\n * Trouve la date où dois commencer le calendrier en fonction du premier jour de la semaine\n * @param dt - Date contenant le mois et l'année à calculer\n * @param calendarStartingDay Premier jour de la semaine @default \"Sunday\"\n */ function FindFirstDayToStartCalendar(dt) {\n    var calendarStartingDay = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : \"Sunday\";\n    var firstDayOfMonth = new Date(dt.getFullYear(), dt.getMonth(), 1);\n    var firstDayOfMonthName = firstDayOfMonth.toLocaleString(\"en-CA\", {\n        weekday: \"long\"\n    });\n    // Vérifier si le premier jours du mois correspond au premier jour de la semaine du calendrier\n    if (firstDayOfMonthName === calendarStartingDay) {\n        return firstDayOfMonth;\n    }\n    // Trouver le premier jours du mois qui correspond au premier jour de la semaine du calendrier\n    var firstDayToStartCalendar = firstDayOfMonth;\n}\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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X05fRS8uL3V0aWxzL2xvYWQtY2FsZW5kYXIyLnRzPzJkYjAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVHlwZURheSB9IGZyb20gXCIuLi90eXBlcy9UeXBlRGF5XCI7XG5pbXBvcnQgeyBUeXBlTmF2IH0gZnJvbSBcIi4uL3R5cGVzL1R5cGVOYXZcIjtcbmltcG9ydCB7IFR5cGVXZWVrRGF5cyB9IGZyb20gXCIuLi90eXBlcy9UeXBlV2Vla0RheXNcIjtcblxuLyoqXG4gKiBSZXRvdXJuZSBsZXMgaW5mb3JtYXRpb25zIG7DqWNlc3NhaXJlIHBvdXIgcmVuZGVyIGxlIGNhbGVuZHJpZXJcbiAqIEBwYXJhbSBuYXYgLSBPYmpldCBUeXBlTmF2IGNvbnRlbmFudCBsZSBtb2lzIGV0IGwnYW5uw6llXG4gKiBAcGFyYW0gY2FsZW5kYXJTdGFydGluZ0RheSAtIEpvdXIgZGUgbGEgc2VtYWluZSBvw7kgY29tbWVuY2UgbGUgY2FsZW5kcmllclxuICogQHJldHVybnMgUmV0b3VybmUgbGVzIGpvdXJzIGRhbnMgbGUgbW9pcyBhaW5zaSBxdWUgbGUgdGl0cmUgZHUgaGVhZGVyXG4gKiBAZXhhbXBsZVxuICogY29uc3QgW2RheXNJbk1vbnRoLCBoZWFkZXJUZXh0XSA9IEdldENhbGVuZGFySW5mbyh7IG1vbnRoOiAwLCB5ZWFyOiAyMDIxIH0pO1xuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBMb2FkQ2FsZW5kYXIyKG5hdjogVHlwZU5hdiwgY2FsZW5kYXJTdGFydGluZ0RheTogVHlwZVdlZWtEYXlzID0gXCJTdW5kYXlcIik6IFtUeXBlRGF5W10sIHN0cmluZ10ge1xuICBjb25zdCBkdCA9IG5ldyBEYXRlKCk7XG4gIGR0LnNldEZ1bGxZZWFyKG5hdi55ZWFyKTtcbiAgZHQuc2V0TW9udGgobmF2Lm1vbnRoKTtcblxuICBjb25zdCBuYk9mRGF5c0luTW9udGggPSBuZXcgRGF0ZShuYXYueWVhciwgbmF2Lm1vbnRoICsgMSwgMCkuZ2V0RGF0ZSgpO1xuICAvLyBjb25zdCBuYk9mRGF5c0JlZm9yZUZpcnN0RGF5T2ZNb250aCA9IE51bU9mUGFkZGluZ0RheXMoZHQsIGNhbGVuZGFyU3RhcnRpbmdEYXkpO1xuXG4gIGNvbnN0IGRheXNJbk1vbnRoOiBUeXBlRGF5W10gPSBbXTtcblxuICAvLyBBam91dGUgbGVzIGpvdXJzIGR1IG1vaXNcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBuYk9mRGF5c0luTW9udGg7IGkrKykge1xuICAgIGNvbnN0IHRvZGF5ID0gbmV3IERhdGUoZHQuZ2V0RnVsbFllYXIoKSwgZHQuZ2V0TW9udGgoKSwgaSArIDEpO1xuICAgIGNvbnN0IGRheU5hbWUgPSB0b2RheS50b0xvY2FsZVN0cmluZyhcImVuLUNBXCIsIHsgd2Vla2RheTogXCJsb25nXCIgfSkgYXMgVHlwZVdlZWtEYXlzO1xuXG4gICAgY29uc3QgZGF5OiBUeXBlRGF5ID0ge1xuICAgICAgZGF0ZTogdG9kYXkuZ2V0RGF0ZSgpLFxuICAgICAgbW9udGg6IHRvZGF5LmdldE1vbnRoKCksXG4gICAgICB5ZWFyOiB0b2RheS5nZXRGdWxsWWVhcigpLFxuICAgICAgZGF5TmFtZTogZGF5TmFtZSxcbiAgICAgIGlzQ3VycmVudERheTogdG9kYXkuZ2V0RGF0ZSgpID09PSBkdC5nZXREYXRlKCkgJiYgdG9kYXkuZ2V0TW9udGgoKSA9PT0gZHQuZ2V0TW9udGgoKSxcbiAgICAgIGlzUGFkZGluZzogdG9kYXkuZ2V0TW9udGgoKSAhPT0gZHQuZ2V0TW9udGgoKSxcbiAgICB9O1xuXG4gICAgZGF5c0luTW9udGgucHVzaChkYXkpO1xuICB9XG5cbiAgLy8gSGVhZGVyIHRleHRlIChiYXJyZSBkZSBuYXZpZ2F0aW9uKVxuICBjb25zdCBoZWFkZXIgPSBgJHtkdC50b0xvY2FsZVN0cmluZyhcImVuLUNBXCIsIHsgbW9udGg6IFwibG9uZ1wiIH0pfSAke2R0LmdldEZ1bGxZZWFyKCl9YDtcblxuICByZXR1cm4gW2RheXNJbk1vbnRoLCBoZWFkZXJdO1xufVxuXG4vKipcbiAqIFRyb3V2ZSBsYSBkYXRlIG/DuSBkb2lzIGNvbW1lbmNlciBsZSBjYWxlbmRyaWVyIGVuIGZvbmN0aW9uIGR1IHByZW1pZXIgam91ciBkZSBsYSBzZW1haW5lXG4gKiBAcGFyYW0gZHQgLSBEYXRlIGNvbnRlbmFudCBsZSBtb2lzIGV0IGwnYW5uw6llIMOgIGNhbGN1bGVyXG4gKiBAcGFyYW0gY2FsZW5kYXJTdGFydGluZ0RheSBQcmVtaWVyIGpvdXIgZGUgbGEgc2VtYWluZSBAZGVmYXVsdCBcIlN1bmRheVwiXG4gKi9cbmZ1bmN0aW9uIEZpbmRGaXJzdERheVRvU3RhcnRDYWxlbmRhcihkdDogRGF0ZSwgY2FsZW5kYXJTdGFydGluZ0RheTogVHlwZVdlZWtEYXlzID0gXCJTdW5kYXlcIik6IERhdGUge1xuICBjb25zdCBmaXJzdERheU9mTW9udGggPSBuZXcgRGF0ZShkdC5nZXRGdWxsWWVhcigpLCBkdC5nZXRNb250aCgpLCAxKTtcbiAgY29uc3QgZmlyc3REYXlPZk1vbnRoTmFtZSA9IGZpcnN0RGF5T2ZNb250aC50b0xvY2FsZVN0cmluZyhcImVuLUNBXCIsIHsgd2Vla2RheTogXCJsb25nXCIgfSkgYXMgVHlwZVdlZWtEYXlzO1xuXG4gIC8vIFbDqXJpZmllciBzaSBsZSBwcmVtaWVyIGpvdXJzIGR1IG1vaXMgY29ycmVzcG9uZCBhdSBwcmVtaWVyIGpvdXIgZGUgbGEgc2VtYWluZSBkdSBjYWxlbmRyaWVyXG4gIGlmIChmaXJzdERheU9mTW9udGhOYW1lID09PSBjYWxlbmRhclN0YXJ0aW5nRGF5KSB7XG4gICAgcmV0dXJuIGZpcnN0RGF5T2ZNb250aDtcbiAgfVxuXG4gIC8vIFRyb3V2ZXIgbGUgcHJlbWllciBqb3VycyBkdSBtb2lzIHF1aSBjb3JyZXNwb25kIGF1IHByZW1pZXIgam91ciBkZSBsYSBzZW1haW5lIGR1IGNhbGVuZHJpZXJcbiAgbGV0IGZpcnN0RGF5VG9TdGFydENhbGVuZGFyID0gZmlyc3REYXlPZk1vbnRoO1xuICBcblxuICBcbn1cbiJdLCJuYW1lcyI6WyJMb2FkQ2FsZW5kYXIyIiwibmF2IiwiY2FsZW5kYXJTdGFydGluZ0RheSIsImR0IiwiRGF0ZSIsInNldEZ1bGxZZWFyIiwieWVhciIsInNldE1vbnRoIiwibW9udGgiLCJuYk9mRGF5c0luTW9udGgiLCJnZXREYXRlIiwiZGF5c0luTW9udGgiLCJpIiwidG9kYXkiLCJnZXRGdWxsWWVhciIsImdldE1vbnRoIiwiZGF5TmFtZSIsInRvTG9jYWxlU3RyaW5nIiwid2Vla2RheSIsImRheSIsImRhdGUiLCJpc0N1cnJlbnREYXkiLCJpc1BhZGRpbmciLCJwdXNoIiwiaGVhZGVyIiwiRmluZEZpcnN0RGF5VG9TdGFydENhbGVuZGFyIiwiZmlyc3REYXlPZk1vbnRoIiwiZmlyc3REYXlPZk1vbnRoTmFtZSIsImZpcnN0RGF5VG9TdGFydENhbGVuZGFyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./utils/load-calendar2.ts\n"));

/***/ })

});