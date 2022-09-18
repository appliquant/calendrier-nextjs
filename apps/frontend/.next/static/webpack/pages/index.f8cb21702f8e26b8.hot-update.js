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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ LoadCalendar2; }\n/* harmony export */ });\n/**\n * Retourne les informations nécessaire pour render le calendrier\n * @param nav - Objet TypeNav contenant le mois et l'année\n * @param calendarStartingDay - Jour de la semaine où commence le calendrier\n * @returns Retourne les jours dans le mois ainsi que le titre du header\n * @example\n * const [daysInMonth, headerText] = GetCalendarInfo({ month: 0, year: 2021 });\n */ function LoadCalendar2(nav) {\n    var calendarStartingDay = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : \"Sunday\";\n    var dt = new Date();\n    dt.setFullYear(nav.year);\n    dt.setMonth(nav.month);\n    var nbOfDaysInMonth = new Date(nav.year, nav.month + 1, 0).getDate();\n    var firstDayToStartCalendar = FindFirstDayToStartCalendar(dt, \"\");\n    console.log(\"firstDayToStartCalendar\", firstDayToStartCalendar);\n    var daysInMonth = [];\n    // Ajoute les jours du mois\n    for(var i = 0; i < nbOfDaysInMonth; i++){\n        var today = new Date(dt.getFullYear(), dt.getMonth(), i + 1);\n        var dayName = today.toLocaleString(\"en-CA\", {\n            weekday: \"long\"\n        });\n        var day = {\n            date: today.getDate(),\n            month: today.getMonth(),\n            year: today.getFullYear(),\n            dayName: dayName,\n            isCurrentDay: today.getDate() === dt.getDate() && today.getMonth() === dt.getMonth(),\n            isPadding: today.getMonth() !== dt.getMonth()\n        };\n        daysInMonth.push(day);\n    }\n    // Header texte (barre de navigation)\n    var header = \"\".concat(dt.toLocaleString(\"en-CA\", {\n        month: \"long\"\n    }), \" \").concat(dt.getFullYear());\n    return [\n        daysInMonth,\n        header\n    ];\n};\n/**\n * Trouve la date où dois commencer le calendrier en fonction du premier jour de la semaine\n * @param dt - Date contenant le mois et l'année à calculer\n * @param calendarStartingDay Premier jour de la semaine @default \"Sunday\"\n */ function FindFirstDayToStartCalendar(dt) {\n    var calendarStartingDay = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : \"Sunday\";\n    var firstDayOfMonth = new Date(dt.getFullYear(), dt.getMonth(), 1);\n    var firstDayOfMonthName = firstDayOfMonth.toLocaleString(\"en-CA\", {\n        weekday: \"long\"\n    });\n    // Vérifier si le premier jours du mois correspond au premier jour de la semaine du calendrier\n    if (firstDayOfMonthName === calendarStartingDay) {\n        return firstDayOfMonth;\n    }\n    // Trouver le premier jours du mois qui correspond au premier jour de la semaine du calendrier\n    var i = 0; // pour ne pas faire plus de 10 itérations (pour éviter une boucle infinie)\n    while(i <= 10){\n        var day = new Date(dt.getFullYear(), dt.getMonth(), 1 - i);\n        var dayName = day.toLocaleString(\"en-CA\", {\n            weekday: \"long\"\n        });\n        if (dayName === calendarStartingDay) {\n            return day;\n        }\n        i++;\n    }\n}\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFtQixFQUFFO1FBQy9DLE9BQU8yQixlQUFlLENBQUM7S0FDeEI7SUFFRCw4RkFBOEY7SUFDOUYsSUFBSWIsQ0FBQyxHQUFHLENBQUMsRUFBRSwyRUFBMkU7SUFDdEYsTUFBT0EsQ0FBQyxJQUFJLEVBQUUsQ0FBRTtRQUNkLElBQU1PLEdBQUcsR0FBRyxJQUFJbkIsSUFBSSxDQUFDRCxFQUFFLENBQUNlLFdBQVcsRUFBRSxFQUFFZixFQUFFLENBQUNnQixRQUFRLEVBQUUsRUFBRSxDQUFDLEdBQUdILENBQUMsQ0FBQztRQUM1RCxJQUFNSSxPQUFPLEdBQUdHLEdBQUcsQ0FBQ0YsY0FBYyxDQUFDLE9BQU8sRUFBRTtZQUFFQyxPQUFPLEVBQUUsTUFBTTtTQUFFLENBQUM7UUFFaEUsSUFBSUYsT0FBTyxLQUFLbEIsbUJBQW1CLEVBQUU7WUFDbkMsT0FBT3FCLEdBQUcsQ0FBQztTQUNaO1FBRURQLENBQUMsRUFBRSxDQUFDO0tBQ0w7Q0FDRiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi91dGlscy9sb2FkLWNhbGVuZGFyMi50cz8yZGIwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFR5cGVEYXkgfSBmcm9tIFwiLi4vdHlwZXMvVHlwZURheVwiO1xuaW1wb3J0IHsgVHlwZU5hdiB9IGZyb20gXCIuLi90eXBlcy9UeXBlTmF2XCI7XG5pbXBvcnQgeyBUeXBlV2Vla0RheXMgfSBmcm9tIFwiLi4vdHlwZXMvVHlwZVdlZWtEYXlzXCI7XG5cbi8qKlxuICogUmV0b3VybmUgbGVzIGluZm9ybWF0aW9ucyBuw6ljZXNzYWlyZSBwb3VyIHJlbmRlciBsZSBjYWxlbmRyaWVyXG4gKiBAcGFyYW0gbmF2IC0gT2JqZXQgVHlwZU5hdiBjb250ZW5hbnQgbGUgbW9pcyBldCBsJ2FubsOpZVxuICogQHBhcmFtIGNhbGVuZGFyU3RhcnRpbmdEYXkgLSBKb3VyIGRlIGxhIHNlbWFpbmUgb8O5IGNvbW1lbmNlIGxlIGNhbGVuZHJpZXJcbiAqIEByZXR1cm5zIFJldG91cm5lIGxlcyBqb3VycyBkYW5zIGxlIG1vaXMgYWluc2kgcXVlIGxlIHRpdHJlIGR1IGhlYWRlclxuICogQGV4YW1wbGVcbiAqIGNvbnN0IFtkYXlzSW5Nb250aCwgaGVhZGVyVGV4dF0gPSBHZXRDYWxlbmRhckluZm8oeyBtb250aDogMCwgeWVhcjogMjAyMSB9KTtcbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTG9hZENhbGVuZGFyMihuYXY6IFR5cGVOYXYsIGNhbGVuZGFyU3RhcnRpbmdEYXk6IFR5cGVXZWVrRGF5cyA9IFwiU3VuZGF5XCIpOiBbVHlwZURheVtdLCBzdHJpbmddIHtcbiAgY29uc3QgZHQgPSBuZXcgRGF0ZSgpO1xuICBkdC5zZXRGdWxsWWVhcihuYXYueWVhcik7XG4gIGR0LnNldE1vbnRoKG5hdi5tb250aCk7XG5cbiAgY29uc3QgbmJPZkRheXNJbk1vbnRoID0gbmV3IERhdGUobmF2LnllYXIsIG5hdi5tb250aCArIDEsIDApLmdldERhdGUoKTtcbiAgY29uc3QgZmlyc3REYXlUb1N0YXJ0Q2FsZW5kYXIgPSBGaW5kRmlyc3REYXlUb1N0YXJ0Q2FsZW5kYXIoZHQsIFwiXCIpO1xuXG4gIGNvbnNvbGUubG9nKFwiZmlyc3REYXlUb1N0YXJ0Q2FsZW5kYXJcIiwgZmlyc3REYXlUb1N0YXJ0Q2FsZW5kYXIpO1xuXG4gIGNvbnN0IGRheXNJbk1vbnRoOiBUeXBlRGF5W10gPSBbXTtcblxuICAvLyBBam91dGUgbGVzIGpvdXJzIGR1IG1vaXNcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBuYk9mRGF5c0luTW9udGg7IGkrKykge1xuICAgIGNvbnN0IHRvZGF5ID0gbmV3IERhdGUoZHQuZ2V0RnVsbFllYXIoKSwgZHQuZ2V0TW9udGgoKSwgaSArIDEpO1xuICAgIGNvbnN0IGRheU5hbWUgPSB0b2RheS50b0xvY2FsZVN0cmluZyhcImVuLUNBXCIsIHsgd2Vla2RheTogXCJsb25nXCIgfSkgYXMgVHlwZVdlZWtEYXlzO1xuXG4gICAgY29uc3QgZGF5OiBUeXBlRGF5ID0ge1xuICAgICAgZGF0ZTogdG9kYXkuZ2V0RGF0ZSgpLFxuICAgICAgbW9udGg6IHRvZGF5LmdldE1vbnRoKCksXG4gICAgICB5ZWFyOiB0b2RheS5nZXRGdWxsWWVhcigpLFxuICAgICAgZGF5TmFtZTogZGF5TmFtZSxcbiAgICAgIGlzQ3VycmVudERheTogdG9kYXkuZ2V0RGF0ZSgpID09PSBkdC5nZXREYXRlKCkgJiYgdG9kYXkuZ2V0TW9udGgoKSA9PT0gZHQuZ2V0TW9udGgoKSxcbiAgICAgIGlzUGFkZGluZzogdG9kYXkuZ2V0TW9udGgoKSAhPT0gZHQuZ2V0TW9udGgoKSxcbiAgICB9O1xuXG4gICAgZGF5c0luTW9udGgucHVzaChkYXkpO1xuICB9XG5cbiAgLy8gSGVhZGVyIHRleHRlIChiYXJyZSBkZSBuYXZpZ2F0aW9uKVxuICBjb25zdCBoZWFkZXIgPSBgJHtkdC50b0xvY2FsZVN0cmluZyhcImVuLUNBXCIsIHsgbW9udGg6IFwibG9uZ1wiIH0pfSAke2R0LmdldEZ1bGxZZWFyKCl9YDtcblxuICByZXR1cm4gW2RheXNJbk1vbnRoLCBoZWFkZXJdO1xufVxuXG4vKipcbiAqIFRyb3V2ZSBsYSBkYXRlIG/DuSBkb2lzIGNvbW1lbmNlciBsZSBjYWxlbmRyaWVyIGVuIGZvbmN0aW9uIGR1IHByZW1pZXIgam91ciBkZSBsYSBzZW1haW5lXG4gKiBAcGFyYW0gZHQgLSBEYXRlIGNvbnRlbmFudCBsZSBtb2lzIGV0IGwnYW5uw6llIMOgIGNhbGN1bGVyXG4gKiBAcGFyYW0gY2FsZW5kYXJTdGFydGluZ0RheSBQcmVtaWVyIGpvdXIgZGUgbGEgc2VtYWluZSBAZGVmYXVsdCBcIlN1bmRheVwiXG4gKi9cbmZ1bmN0aW9uIEZpbmRGaXJzdERheVRvU3RhcnRDYWxlbmRhcihkdDogRGF0ZSwgY2FsZW5kYXJTdGFydGluZ0RheTogVHlwZVdlZWtEYXlzID0gXCJTdW5kYXlcIik6IERhdGUge1xuICBjb25zdCBmaXJzdERheU9mTW9udGggPSBuZXcgRGF0ZShkdC5nZXRGdWxsWWVhcigpLCBkdC5nZXRNb250aCgpLCAxKTtcbiAgY29uc3QgZmlyc3REYXlPZk1vbnRoTmFtZSA9IGZpcnN0RGF5T2ZNb250aC50b0xvY2FsZVN0cmluZyhcImVuLUNBXCIsIHsgd2Vla2RheTogXCJsb25nXCIgfSkgYXMgVHlwZVdlZWtEYXlzO1xuXG4gIC8vIFbDqXJpZmllciBzaSBsZSBwcmVtaWVyIGpvdXJzIGR1IG1vaXMgY29ycmVzcG9uZCBhdSBwcmVtaWVyIGpvdXIgZGUgbGEgc2VtYWluZSBkdSBjYWxlbmRyaWVyXG4gIGlmIChmaXJzdERheU9mTW9udGhOYW1lID09PSBjYWxlbmRhclN0YXJ0aW5nRGF5KSB7XG4gICAgcmV0dXJuIGZpcnN0RGF5T2ZNb250aDtcbiAgfVxuXG4gIC8vIFRyb3V2ZXIgbGUgcHJlbWllciBqb3VycyBkdSBtb2lzIHF1aSBjb3JyZXNwb25kIGF1IHByZW1pZXIgam91ciBkZSBsYSBzZW1haW5lIGR1IGNhbGVuZHJpZXJcbiAgbGV0IGkgPSAwOyAvLyBwb3VyIG5lIHBhcyBmYWlyZSBwbHVzIGRlIDEwIGl0w6lyYXRpb25zIChwb3VyIMOpdml0ZXIgdW5lIGJvdWNsZSBpbmZpbmllKVxuICB3aGlsZSAoaSA8PSAxMCkge1xuICAgIGNvbnN0IGRheSA9IG5ldyBEYXRlKGR0LmdldEZ1bGxZZWFyKCksIGR0LmdldE1vbnRoKCksIDEgLSBpKTtcbiAgICBjb25zdCBkYXlOYW1lID0gZGF5LnRvTG9jYWxlU3RyaW5nKFwiZW4tQ0FcIiwgeyB3ZWVrZGF5OiBcImxvbmdcIiB9KSBhcyBUeXBlV2Vla0RheXM7XG5cbiAgICBpZiAoZGF5TmFtZSA9PT0gY2FsZW5kYXJTdGFydGluZ0RheSkge1xuICAgICAgcmV0dXJuIGRheTtcbiAgICB9XG5cbiAgICBpKys7XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJMb2FkQ2FsZW5kYXIyIiwibmF2IiwiY2FsZW5kYXJTdGFydGluZ0RheSIsImR0IiwiRGF0ZSIsInNldEZ1bGxZZWFyIiwieWVhciIsInNldE1vbnRoIiwibW9udGgiLCJuYk9mRGF5c0luTW9udGgiLCJnZXREYXRlIiwiZmlyc3REYXlUb1N0YXJ0Q2FsZW5kYXIiLCJGaW5kRmlyc3REYXlUb1N0YXJ0Q2FsZW5kYXIiLCJjb25zb2xlIiwibG9nIiwiZGF5c0luTW9udGgiLCJpIiwidG9kYXkiLCJnZXRGdWxsWWVhciIsImdldE1vbnRoIiwiZGF5TmFtZSIsInRvTG9jYWxlU3RyaW5nIiwid2Vla2RheSIsImRheSIsImRhdGUiLCJpc0N1cnJlbnREYXkiLCJpc1BhZGRpbmciLCJwdXNoIiwiaGVhZGVyIiwiZmlyc3REYXlPZk1vbnRoIiwiZmlyc3REYXlPZk1vbnRoTmFtZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./utils/load-calendar2.ts\n"));

/***/ })

});