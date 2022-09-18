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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ LoadCalendar2; }\n/* harmony export */ });\n/**\n * Retourne les informations nécessaire pour render le calendrier\n * @param nav - Objet TypeNav contenant le mois et l'année\n * @param calendarStartingDay - Jour de la semaine où commence le calendrier\n * @returns Retourne les jours dans le mois ainsi que le titre du header\n * @example\n * const [daysInMonth, headerText] = GetCalendarInfo({ month: 0, year: 2021 });\n */ function LoadCalendar2(nav) {\n    var calendarStartingDay = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : \"Sunday\";\n    var dt = new Date();\n    dt.setFullYear(nav.year);\n    dt.setMonth(nav.month);\n    var nbDaysInMonth = new Date(nav.year, nav.month + 1, 0).getDate();\n    var nbDaysBeforeFirstDayOfMonth = FindNumberOfDaysBeforeFirstDayOfMonth(dt, calendarStartingDay);\n    console.log(\"nbDaysBeforeFirstDayOfMonth\", nbDaysBeforeFirstDayOfMonth);\n    var daysInMonth = [];\n    // Ajoute les jours du mois\n    for(var i = -nbDaysBeforeFirstDayOfMonth; i < nbDaysInMonth; i++){\n        var today = new Date(dt.getFullYear(), dt.getMonth(), i + 1);\n        var dayName = today.toLocaleString(\"en-CA\", {\n            weekday: \"long\"\n        });\n        var day = {\n            date: today.getDate(),\n            month: today.getMonth(),\n            year: today.getFullYear(),\n            dayName: dayName,\n            isCurrentDay: today.getDate() === dt.getDate() && today.getMonth() === dt.getMonth(),\n            isPadding: today.getMonth() !== dt.getMonth()\n        };\n        daysInMonth.push(day);\n    }\n    // Header texte (barre de navigation)\n    var header = \"\".concat(dt.toLocaleString(\"en-CA\", {\n        month: \"long\"\n    }), \" \").concat(dt.getFullYear());\n    return [\n        daysInMonth,\n        header\n    ];\n};\n/**\n * Trouve le nombre de jours avant le premier jours du mois en fonction du premier jour de la semaine du calendrier\n * @param dt - Date contenant le mois et l'année à calculer\n * @param calendarStartingDay - Premier jour de la semaine @default \"Sunday\"\n * @returns Trouve le nombre de jours avant le premier jours du mois\n */ function FindNumberOfDaysBeforeFirstDayOfMonth(dt, calendarStartingDay) {\n    var firstDayToStartCalendar = FindFirstDayToStartCalendar(dt, calendarStartingDay); // ex: 28 juin 2021\n    var nbOfDaysInMonth = new Date(firstDayToStartCalendar.getFullYear(), firstDayToStartCalendar.getMonth() + 1, 0).getDate(); // ex: 30 jours dans le mois de juin 2021\n    return nbOfDaysInMonth - firstDayToStartCalendar.getDate() + 1; // ex: 3 jours avant le 1er juillet 2021\n}\n/**\n * Trouve la date où dois commencer le calendrier en fonction du premier jour de la semaine\n * @param dt - Date contenant le mois et l'année à calculer\n * @param calendarStartingDay Premier jour de la semaine @default \"Sunday\"\n */ function FindFirstDayToStartCalendar(dt, calendarStartingDay) {\n    var firstDayOfMonth = new Date(dt.getFullYear(), dt.getMonth(), 1);\n    var firstDayOfMonthName = firstDayOfMonth.toLocaleString(\"en-CA\", {\n        weekday: \"long\"\n    });\n    // Vérifier si le premier jours du mois correspond au premier jour de la semaine du calendrier\n    if (firstDayOfMonthName === calendarStartingDay) {\n        return firstDayOfMonth;\n    }\n    // Trouver le premier jours du mois qui correspond au premier jour de la semaine du calendrier\n    var i = 0; // pour ne pas faire plus de 10 itérations (pour éviter une boucle infinie)\n    while(i <= 10){\n        var day = new Date(dt.getFullYear(), dt.getMonth(), 1 - i);\n        var dayName = day.toLocaleString(\"en-CA\", {\n            weekday: \"long\"\n        });\n        if (dayName === calendarStartingDay) {\n            return day;\n        }\n        i++;\n    }\n    // Si on ne trouve pas le premier jours du mois qui correspond au premier jour de la semaine du calendrier\n    return firstDayOfMonth;\n}\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LHVCQUF1QixDQUFDbkIsT0FBTyxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUMsd0NBQXdDO0NBQ3pHO0FBRUQ7Ozs7Q0FJQyxHQUNELFNBQVNvQiwyQkFBMkIsQ0FBQzNCLEVBQVEsRUFBRUQsbUJBQTZDLEVBQVE7SUFDbEcsSUFBTThCLGVBQWUsR0FBRyxJQUFJNUIsSUFBSSxDQUFDRCxFQUFFLENBQUNlLFdBQVcsRUFBRSxFQUFFZixFQUFFLENBQUNnQixRQUFRLEVBQUUsRUFBRSxDQUFDLENBQUM7SUFDcEUsSUFBTWMsbUJBQW1CLEdBQUdELGVBQWUsQ0FBQ1gsY0FBYyxDQUFDLE9BQU8sRUFBRTtRQUFFQyxPQUFPLEVBQUUsTUFBTTtLQUFFLENBQUM7SUFFeEYsOEZBQThGO0lBQzlGLElBQUlXLG1CQUFtQixLQUFLL0IsbUJBQW1CLEVBQUU7UUFDL0MsT0FBTzhCLGVBQWUsQ0FBQztLQUN4QjtJQUVELDhGQUE4RjtJQUM5RixJQUFJaEIsQ0FBQyxHQUFHLENBQUMsRUFBRSwyRUFBMkU7SUFDdEYsTUFBT0EsQ0FBQyxJQUFJLEVBQUUsQ0FBRTtRQUNkLElBQU1PLEdBQUcsR0FBRyxJQUFJbkIsSUFBSSxDQUFDRCxFQUFFLENBQUNlLFdBQVcsRUFBRSxFQUFFZixFQUFFLENBQUNnQixRQUFRLEVBQUUsRUFBRSxDQUFDLEdBQUdILENBQUMsQ0FBQztRQUM1RCxJQUFNSSxPQUFPLEdBQUdHLEdBQUcsQ0FBQ0YsY0FBYyxDQUFDLE9BQU8sRUFBRTtZQUFFQyxPQUFPLEVBQUUsTUFBTTtTQUFFLENBQUM7UUFFaEUsSUFBSUYsT0FBTyxLQUFLbEIsbUJBQW1CLEVBQUU7WUFDbkMsT0FBT3FCLEdBQUcsQ0FBQztTQUNaO1FBRURQLENBQUMsRUFBRSxDQUFDO0tBQ0w7SUFFRCwwR0FBMEc7SUFDMUcsT0FBT2dCLGVBQWUsQ0FBQztDQUN4QiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi91dGlscy9sb2FkLWNhbGVuZGFyMi50cz8yZGIwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFR5cGVEYXkgfSBmcm9tIFwiLi4vdHlwZXMvVHlwZURheVwiO1xuaW1wb3J0IHsgVHlwZU5hdiB9IGZyb20gXCIuLi90eXBlcy9UeXBlTmF2XCI7XG5pbXBvcnQgeyBUeXBlV2Vla0RheXMgfSBmcm9tIFwiLi4vdHlwZXMvVHlwZVdlZWtEYXlzXCI7XG5cbi8qKlxuICogSm91cnMgc3VyIGxlc3F1ZWxzIGxlIGNhbGVuZHJpZXIgcGV1dCBjb21tZW5jZXJcbiAqL1xudHlwZSBUeXBlU3RhcnRpbmdEYXlzQ2FsZW5kYXIgPSBcIlNhdHVyZGF5XCIgfCBcIlN1bmRheVwiIHwgXCJNb25kYXlcIjtcblxuLyoqXG4gKiBSZXRvdXJuZSBsZXMgaW5mb3JtYXRpb25zIG7DqWNlc3NhaXJlIHBvdXIgcmVuZGVyIGxlIGNhbGVuZHJpZXJcbiAqIEBwYXJhbSBuYXYgLSBPYmpldCBUeXBlTmF2IGNvbnRlbmFudCBsZSBtb2lzIGV0IGwnYW5uw6llXG4gKiBAcGFyYW0gY2FsZW5kYXJTdGFydGluZ0RheSAtIEpvdXIgZGUgbGEgc2VtYWluZSBvw7kgY29tbWVuY2UgbGUgY2FsZW5kcmllclxuICogQHJldHVybnMgUmV0b3VybmUgbGVzIGpvdXJzIGRhbnMgbGUgbW9pcyBhaW5zaSBxdWUgbGUgdGl0cmUgZHUgaGVhZGVyXG4gKiBAZXhhbXBsZVxuICogY29uc3QgW2RheXNJbk1vbnRoLCBoZWFkZXJUZXh0XSA9IEdldENhbGVuZGFySW5mbyh7IG1vbnRoOiAwLCB5ZWFyOiAyMDIxIH0pO1xuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBMb2FkQ2FsZW5kYXIyKFxuICBuYXY6IFR5cGVOYXYsXG4gIGNhbGVuZGFyU3RhcnRpbmdEYXk6IFR5cGVTdGFydGluZ0RheXNDYWxlbmRhciA9IFwiU3VuZGF5XCJcbik6IFtUeXBlRGF5W10sIHN0cmluZ10ge1xuICBjb25zdCBkdCA9IG5ldyBEYXRlKCk7XG4gIGR0LnNldEZ1bGxZZWFyKG5hdi55ZWFyKTtcbiAgZHQuc2V0TW9udGgobmF2Lm1vbnRoKTtcblxuICBjb25zdCBuYkRheXNJbk1vbnRoID0gbmV3IERhdGUobmF2LnllYXIsIG5hdi5tb250aCArIDEsIDApLmdldERhdGUoKTtcbiAgY29uc3QgbmJEYXlzQmVmb3JlRmlyc3REYXlPZk1vbnRoID0gRmluZE51bWJlck9mRGF5c0JlZm9yZUZpcnN0RGF5T2ZNb250aChkdCwgY2FsZW5kYXJTdGFydGluZ0RheSk7XG5cbiAgY29uc29sZS5sb2coXCJuYkRheXNCZWZvcmVGaXJzdERheU9mTW9udGhcIiwgbmJEYXlzQmVmb3JlRmlyc3REYXlPZk1vbnRoKTtcblxuICBjb25zdCBkYXlzSW5Nb250aDogVHlwZURheVtdID0gW107XG5cbiAgLy8gQWpvdXRlIGxlcyBqb3VycyBkdSBtb2lzXG4gIGZvciAobGV0IGkgPSAtbmJEYXlzQmVmb3JlRmlyc3REYXlPZk1vbnRoOyBpIDwgbmJEYXlzSW5Nb250aDsgaSsrKSB7XG4gICAgY29uc3QgdG9kYXkgPSBuZXcgRGF0ZShkdC5nZXRGdWxsWWVhcigpLCBkdC5nZXRNb250aCgpLCBpICsgMSk7XG4gICAgY29uc3QgZGF5TmFtZSA9IHRvZGF5LnRvTG9jYWxlU3RyaW5nKFwiZW4tQ0FcIiwgeyB3ZWVrZGF5OiBcImxvbmdcIiB9KSBhcyBUeXBlV2Vla0RheXM7XG5cbiAgICBjb25zdCBkYXk6IFR5cGVEYXkgPSB7XG4gICAgICBkYXRlOiB0b2RheS5nZXREYXRlKCksXG4gICAgICBtb250aDogdG9kYXkuZ2V0TW9udGgoKSxcbiAgICAgIHllYXI6IHRvZGF5LmdldEZ1bGxZZWFyKCksXG4gICAgICBkYXlOYW1lOiBkYXlOYW1lLFxuICAgICAgaXNDdXJyZW50RGF5OiB0b2RheS5nZXREYXRlKCkgPT09IGR0LmdldERhdGUoKSAmJiB0b2RheS5nZXRNb250aCgpID09PSBkdC5nZXRNb250aCgpLFxuICAgICAgaXNQYWRkaW5nOiB0b2RheS5nZXRNb250aCgpICE9PSBkdC5nZXRNb250aCgpLFxuICAgIH07XG5cbiAgICBkYXlzSW5Nb250aC5wdXNoKGRheSk7XG4gIH1cblxuICAvLyBIZWFkZXIgdGV4dGUgKGJhcnJlIGRlIG5hdmlnYXRpb24pXG4gIGNvbnN0IGhlYWRlciA9IGAke2R0LnRvTG9jYWxlU3RyaW5nKFwiZW4tQ0FcIiwgeyBtb250aDogXCJsb25nXCIgfSl9ICR7ZHQuZ2V0RnVsbFllYXIoKX1gO1xuXG4gIHJldHVybiBbZGF5c0luTW9udGgsIGhlYWRlcl07XG59XG5cbi8qKlxuICogVHJvdXZlIGxlIG5vbWJyZSBkZSBqb3VycyBhdmFudCBsZSBwcmVtaWVyIGpvdXJzIGR1IG1vaXMgZW4gZm9uY3Rpb24gZHUgcHJlbWllciBqb3VyIGRlIGxhIHNlbWFpbmUgZHUgY2FsZW5kcmllclxuICogQHBhcmFtIGR0IC0gRGF0ZSBjb250ZW5hbnQgbGUgbW9pcyBldCBsJ2FubsOpZSDDoCBjYWxjdWxlclxuICogQHBhcmFtIGNhbGVuZGFyU3RhcnRpbmdEYXkgLSBQcmVtaWVyIGpvdXIgZGUgbGEgc2VtYWluZSBAZGVmYXVsdCBcIlN1bmRheVwiXG4gKiBAcmV0dXJucyBUcm91dmUgbGUgbm9tYnJlIGRlIGpvdXJzIGF2YW50IGxlIHByZW1pZXIgam91cnMgZHUgbW9pc1xuICovXG5mdW5jdGlvbiBGaW5kTnVtYmVyT2ZEYXlzQmVmb3JlRmlyc3REYXlPZk1vbnRoKGR0OiBEYXRlLCBjYWxlbmRhclN0YXJ0aW5nRGF5OiBUeXBlU3RhcnRpbmdEYXlzQ2FsZW5kYXIpOiBudW1iZXIge1xuICBjb25zdCBmaXJzdERheVRvU3RhcnRDYWxlbmRhciA9IEZpbmRGaXJzdERheVRvU3RhcnRDYWxlbmRhcihkdCwgY2FsZW5kYXJTdGFydGluZ0RheSk7IC8vIGV4OiAyOCBqdWluIDIwMjFcbiAgY29uc3QgbmJPZkRheXNJbk1vbnRoID0gbmV3IERhdGUoXG4gICAgZmlyc3REYXlUb1N0YXJ0Q2FsZW5kYXIuZ2V0RnVsbFllYXIoKSxcbiAgICBmaXJzdERheVRvU3RhcnRDYWxlbmRhci5nZXRNb250aCgpICsgMSxcbiAgICAwXG4gICkuZ2V0RGF0ZSgpOyAvLyBleDogMzAgam91cnMgZGFucyBsZSBtb2lzIGRlIGp1aW4gMjAyMVxuXG4gIHJldHVybiBuYk9mRGF5c0luTW9udGggLSBmaXJzdERheVRvU3RhcnRDYWxlbmRhci5nZXREYXRlKCkgKyAxOyAvLyBleDogMyBqb3VycyBhdmFudCBsZSAxZXIganVpbGxldCAyMDIxXG59XG5cbi8qKlxuICogVHJvdXZlIGxhIGRhdGUgb8O5IGRvaXMgY29tbWVuY2VyIGxlIGNhbGVuZHJpZXIgZW4gZm9uY3Rpb24gZHUgcHJlbWllciBqb3VyIGRlIGxhIHNlbWFpbmVcbiAqIEBwYXJhbSBkdCAtIERhdGUgY29udGVuYW50IGxlIG1vaXMgZXQgbCdhbm7DqWUgw6AgY2FsY3VsZXJcbiAqIEBwYXJhbSBjYWxlbmRhclN0YXJ0aW5nRGF5IFByZW1pZXIgam91ciBkZSBsYSBzZW1haW5lIEBkZWZhdWx0IFwiU3VuZGF5XCJcbiAqL1xuZnVuY3Rpb24gRmluZEZpcnN0RGF5VG9TdGFydENhbGVuZGFyKGR0OiBEYXRlLCBjYWxlbmRhclN0YXJ0aW5nRGF5OiBUeXBlU3RhcnRpbmdEYXlzQ2FsZW5kYXIpOiBEYXRlIHtcbiAgY29uc3QgZmlyc3REYXlPZk1vbnRoID0gbmV3IERhdGUoZHQuZ2V0RnVsbFllYXIoKSwgZHQuZ2V0TW9udGgoKSwgMSk7XG4gIGNvbnN0IGZpcnN0RGF5T2ZNb250aE5hbWUgPSBmaXJzdERheU9mTW9udGgudG9Mb2NhbGVTdHJpbmcoXCJlbi1DQVwiLCB7IHdlZWtkYXk6IFwibG9uZ1wiIH0pIGFzIFR5cGVXZWVrRGF5cztcblxuICAvLyBWw6lyaWZpZXIgc2kgbGUgcHJlbWllciBqb3VycyBkdSBtb2lzIGNvcnJlc3BvbmQgYXUgcHJlbWllciBqb3VyIGRlIGxhIHNlbWFpbmUgZHUgY2FsZW5kcmllclxuICBpZiAoZmlyc3REYXlPZk1vbnRoTmFtZSA9PT0gY2FsZW5kYXJTdGFydGluZ0RheSkge1xuICAgIHJldHVybiBmaXJzdERheU9mTW9udGg7XG4gIH1cblxuICAvLyBUcm91dmVyIGxlIHByZW1pZXIgam91cnMgZHUgbW9pcyBxdWkgY29ycmVzcG9uZCBhdSBwcmVtaWVyIGpvdXIgZGUgbGEgc2VtYWluZSBkdSBjYWxlbmRyaWVyXG4gIGxldCBpID0gMDsgLy8gcG91ciBuZSBwYXMgZmFpcmUgcGx1cyBkZSAxMCBpdMOpcmF0aW9ucyAocG91ciDDqXZpdGVyIHVuZSBib3VjbGUgaW5maW5pZSlcbiAgd2hpbGUgKGkgPD0gMTApIHtcbiAgICBjb25zdCBkYXkgPSBuZXcgRGF0ZShkdC5nZXRGdWxsWWVhcigpLCBkdC5nZXRNb250aCgpLCAxIC0gaSk7XG4gICAgY29uc3QgZGF5TmFtZSA9IGRheS50b0xvY2FsZVN0cmluZyhcImVuLUNBXCIsIHsgd2Vla2RheTogXCJsb25nXCIgfSkgYXMgVHlwZVdlZWtEYXlzO1xuXG4gICAgaWYgKGRheU5hbWUgPT09IGNhbGVuZGFyU3RhcnRpbmdEYXkpIHtcbiAgICAgIHJldHVybiBkYXk7XG4gICAgfVxuXG4gICAgaSsrO1xuICB9XG5cbiAgLy8gU2kgb24gbmUgdHJvdXZlIHBhcyBsZSBwcmVtaWVyIGpvdXJzIGR1IG1vaXMgcXVpIGNvcnJlc3BvbmQgYXUgcHJlbWllciBqb3VyIGRlIGxhIHNlbWFpbmUgZHUgY2FsZW5kcmllclxuICByZXR1cm4gZmlyc3REYXlPZk1vbnRoO1xufVxuIl0sIm5hbWVzIjpbIkxvYWRDYWxlbmRhcjIiLCJuYXYiLCJjYWxlbmRhclN0YXJ0aW5nRGF5IiwiZHQiLCJEYXRlIiwic2V0RnVsbFllYXIiLCJ5ZWFyIiwic2V0TW9udGgiLCJtb250aCIsIm5iRGF5c0luTW9udGgiLCJnZXREYXRlIiwibmJEYXlzQmVmb3JlRmlyc3REYXlPZk1vbnRoIiwiRmluZE51bWJlck9mRGF5c0JlZm9yZUZpcnN0RGF5T2ZNb250aCIsImNvbnNvbGUiLCJsb2ciLCJkYXlzSW5Nb250aCIsImkiLCJ0b2RheSIsImdldEZ1bGxZZWFyIiwiZ2V0TW9udGgiLCJkYXlOYW1lIiwidG9Mb2NhbGVTdHJpbmciLCJ3ZWVrZGF5IiwiZGF5IiwiZGF0ZSIsImlzQ3VycmVudERheSIsImlzUGFkZGluZyIsInB1c2giLCJoZWFkZXIiLCJmaXJzdERheVRvU3RhcnRDYWxlbmRhciIsIkZpbmRGaXJzdERheVRvU3RhcnRDYWxlbmRhciIsIm5iT2ZEYXlzSW5Nb250aCIsImZpcnN0RGF5T2ZNb250aCIsImZpcnN0RGF5T2ZNb250aE5hbWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./utils/load-calendar2.ts\n"));

/***/ })

});