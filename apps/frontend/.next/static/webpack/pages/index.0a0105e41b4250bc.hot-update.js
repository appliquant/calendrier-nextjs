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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ LoadCalendar2; }\n/* harmony export */ });\n/**\n * Retourne les informations nécessaire pour render le calendrier\n * @param nav - Objet TypeNav contenant le mois et l'année\n * @param calendarStartingDay - Jour de la semaine où commence le calendrier\n * @returns Retourne les jours dans le mois ainsi que le titre du header\n * @example\n * const [daysInMonth, headerText] = GetCalendarInfo({ month: 0, year: 2021 });\n */ function LoadCalendar2(nav) {\n    var calendarStartingDay = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : \"Sunday\";\n    var dt = new Date();\n    dt.setFullYear(nav.year);\n    dt.setMonth(nav.month);\n    var nbDaysInMonth = new Date(nav.year, nav.month + 1, 0).getDate();\n    var nbDaysBeforeFirstDayOfMonth = FindNumberOfDaysBeforeFirstDayOfMonth(dt, calendarStartingDay);\n    console.log(\"firstDayToStartCalendar\", nbDaysBeforeFirstDayOfMonth);\n    var daysInMonth = [];\n    // Ajoute les jours du mois\n    for(var i = 0; i < nbOfDaysInMonth; i++){\n        var today = new Date(dt.getFullYear(), dt.getMonth(), i + 1);\n        var dayName = today.toLocaleString(\"en-CA\", {\n            weekday: \"long\"\n        });\n        var day = {\n            date: today.getDate(),\n            month: today.getMonth(),\n            year: today.getFullYear(),\n            dayName: dayName,\n            isCurrentDay: today.getDate() === dt.getDate() && today.getMonth() === dt.getMonth(),\n            isPadding: today.getMonth() !== dt.getMonth()\n        };\n        daysInMonth.push(day);\n    }\n    // Header texte (barre de navigation)\n    var header = \"\".concat(dt.toLocaleString(\"en-CA\", {\n        month: \"long\"\n    }), \" \").concat(dt.getFullYear());\n    return [\n        daysInMonth,\n        header\n    ];\n};\n/**\n * Trouve la date où dois commencer le calendrier en fonction du premier jour de la semaine\n * @param dt - Date contenant le mois et l'année à calculer\n * @param calendarStartingDay Premier jour de la semaine @default \"Sunday\"\n */ function FindFirstDayToStartCalendar(dt, calendarStartingDay) {\n    var firstDayOfMonth = new Date(dt.getFullYear(), dt.getMonth(), 1);\n    var firstDayOfMonthName = firstDayOfMonth.toLocaleString(\"en-CA\", {\n        weekday: \"long\"\n    });\n    // Vérifier si le premier jours du mois correspond au premier jour de la semaine du calendrier\n    if (firstDayOfMonthName === calendarStartingDay) {\n        return firstDayOfMonth;\n    }\n    // Trouver le premier jours du mois qui correspond au premier jour de la semaine du calendrier\n    var i = 0; // pour ne pas faire plus de 10 itérations (pour éviter une boucle infinie)\n    while(i <= 10){\n        var day = new Date(dt.getFullYear(), dt.getMonth(), 1 - i);\n        var dayName = day.toLocaleString(\"en-CA\", {\n            weekday: \"long\"\n        });\n        if (dayName === calendarStartingDay) {\n            return day;\n        }\n        i++;\n    }\n    // Si on ne trouve pas le premier jours du mois qui correspond au premier jour de la semaine du calendrier\n    return firstDayOfMonth;\n}\nfunction FindNumberOfDaysBeforeFirstDayOfMonth(dt, calendarStartingDay) {\n    var firstDayToStartCalendar = FindFirstDayToStartCalendar(dt, calendarStartingDay); // ex: 28 juin 2021\n    var nbOfDaysInMonth1 = new Date(firstDayToStartCalendar.getFullYear(), firstDayToStartCalendar.getMonth() + 1, 0).getDate(); // ex: 30 jours dans le mois de juin 2021\n    return nbOfDaysInMonth1 - firstDayToStartCalendar.getDate();\n}\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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TzZCLGVBQWUsQ0FBQztLQUN4QjtJQUVELDhGQUE4RjtJQUM5RixJQUFJZixDQUFDLEdBQUcsQ0FBQyxFQUFFLDJFQUEyRTtJQUN0RixNQUFPQSxDQUFDLElBQUksRUFBRSxDQUFFO1FBQ2QsSUFBTVEsR0FBRyxHQUFHLElBQUlwQixJQUFJLENBQUNELEVBQUUsQ0FBQ2dCLFdBQVcsRUFBRSxFQUFFaEIsRUFBRSxDQUFDaUIsUUFBUSxFQUFFLEVBQUUsQ0FBQyxHQUFHSixDQUFDLENBQUM7UUFDNUQsSUFBTUssT0FBTyxHQUFHRyxHQUFHLENBQUNGLGNBQWMsQ0FBQyxPQUFPLEVBQUU7WUFBRUMsT0FBTyxFQUFFLE1BQU07U0FBRSxDQUFDO1FBRWhFLElBQUlGLE9BQU8sS0FBS25CLG1CQUFtQixFQUFFO1lBQ25DLE9BQU9zQixHQUFHLENBQUM7U0FDWjtRQUVEUixDQUFDLEVBQUUsQ0FBQztLQUNMO0lBRUQsMEdBQTBHO0lBQzFHLE9BQU9lLGVBQWUsQ0FBQztDQUN4QjtBQUVELFNBQVNuQixxQ0FBcUMsQ0FBQ1QsRUFBUSxFQUFFRCxtQkFBaUMsRUFBVTtJQUNsRyxJQUFNK0IsdUJBQXVCLEdBQUdILDJCQUEyQixDQUFDM0IsRUFBRSxFQUFFRCxtQkFBbUIsQ0FBQyxFQUFFLG1CQUFtQjtJQUN6RyxJQUFNZSxnQkFBZSxHQUFHLElBQUliLElBQUksQ0FDOUI2Qix1QkFBdUIsQ0FBQ2QsV0FBVyxFQUFFLEVBQ3JDYyx1QkFBdUIsQ0FBQ2IsUUFBUSxFQUFFLEdBQUcsQ0FBQyxFQUN0QyxDQUFDLENBQ0YsQ0FBQ1YsT0FBTyxFQUFFLEVBQUUseUNBQXlDO0lBRXRELE9BQU9PLGdCQUFlLEdBQUdnQix1QkFBdUIsQ0FBQ3ZCLE9BQU8sRUFBRSxDQUFDO0NBQzVEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3V0aWxzL2xvYWQtY2FsZW5kYXIyLnRzPzJkYjAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVHlwZURheSB9IGZyb20gXCIuLi90eXBlcy9UeXBlRGF5XCI7XG5pbXBvcnQgeyBUeXBlTmF2IH0gZnJvbSBcIi4uL3R5cGVzL1R5cGVOYXZcIjtcbmltcG9ydCB7IFR5cGVXZWVrRGF5cyB9IGZyb20gXCIuLi90eXBlcy9UeXBlV2Vla0RheXNcIjtcblxuLyoqXG4gKiBSZXRvdXJuZSBsZXMgaW5mb3JtYXRpb25zIG7DqWNlc3NhaXJlIHBvdXIgcmVuZGVyIGxlIGNhbGVuZHJpZXJcbiAqIEBwYXJhbSBuYXYgLSBPYmpldCBUeXBlTmF2IGNvbnRlbmFudCBsZSBtb2lzIGV0IGwnYW5uw6llXG4gKiBAcGFyYW0gY2FsZW5kYXJTdGFydGluZ0RheSAtIEpvdXIgZGUgbGEgc2VtYWluZSBvw7kgY29tbWVuY2UgbGUgY2FsZW5kcmllclxuICogQHJldHVybnMgUmV0b3VybmUgbGVzIGpvdXJzIGRhbnMgbGUgbW9pcyBhaW5zaSBxdWUgbGUgdGl0cmUgZHUgaGVhZGVyXG4gKiBAZXhhbXBsZVxuICogY29uc3QgW2RheXNJbk1vbnRoLCBoZWFkZXJUZXh0XSA9IEdldENhbGVuZGFySW5mbyh7IG1vbnRoOiAwLCB5ZWFyOiAyMDIxIH0pO1xuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBMb2FkQ2FsZW5kYXIyKG5hdjogVHlwZU5hdiwgY2FsZW5kYXJTdGFydGluZ0RheTogVHlwZVdlZWtEYXlzID0gXCJTdW5kYXlcIik6IFtUeXBlRGF5W10sIHN0cmluZ10ge1xuICBjb25zdCBkdCA9IG5ldyBEYXRlKCk7XG4gIGR0LnNldEZ1bGxZZWFyKG5hdi55ZWFyKTtcbiAgZHQuc2V0TW9udGgobmF2Lm1vbnRoKTtcblxuICBjb25zdCBuYkRheXNJbk1vbnRoID0gbmV3IERhdGUobmF2LnllYXIsIG5hdi5tb250aCArIDEsIDApLmdldERhdGUoKTtcbiAgY29uc3QgbmJEYXlzQmVmb3JlRmlyc3REYXlPZk1vbnRoID0gRmluZE51bWJlck9mRGF5c0JlZm9yZUZpcnN0RGF5T2ZNb250aChkdCwgY2FsZW5kYXJTdGFydGluZ0RheSk7XG5cbiAgY29uc29sZS5sb2coXCJmaXJzdERheVRvU3RhcnRDYWxlbmRhclwiLCBuYkRheXNCZWZvcmVGaXJzdERheU9mTW9udGgpO1xuXG4gIGNvbnN0IGRheXNJbk1vbnRoOiBUeXBlRGF5W10gPSBbXTtcblxuICAvLyBBam91dGUgbGVzIGpvdXJzIGR1IG1vaXNcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBuYk9mRGF5c0luTW9udGg7IGkrKykge1xuICAgIGNvbnN0IHRvZGF5ID0gbmV3IERhdGUoZHQuZ2V0RnVsbFllYXIoKSwgZHQuZ2V0TW9udGgoKSwgaSArIDEpO1xuICAgIGNvbnN0IGRheU5hbWUgPSB0b2RheS50b0xvY2FsZVN0cmluZyhcImVuLUNBXCIsIHsgd2Vla2RheTogXCJsb25nXCIgfSkgYXMgVHlwZVdlZWtEYXlzO1xuXG4gICAgY29uc3QgZGF5OiBUeXBlRGF5ID0ge1xuICAgICAgZGF0ZTogdG9kYXkuZ2V0RGF0ZSgpLFxuICAgICAgbW9udGg6IHRvZGF5LmdldE1vbnRoKCksXG4gICAgICB5ZWFyOiB0b2RheS5nZXRGdWxsWWVhcigpLFxuICAgICAgZGF5TmFtZTogZGF5TmFtZSxcbiAgICAgIGlzQ3VycmVudERheTogdG9kYXkuZ2V0RGF0ZSgpID09PSBkdC5nZXREYXRlKCkgJiYgdG9kYXkuZ2V0TW9udGgoKSA9PT0gZHQuZ2V0TW9udGgoKSxcbiAgICAgIGlzUGFkZGluZzogdG9kYXkuZ2V0TW9udGgoKSAhPT0gZHQuZ2V0TW9udGgoKSxcbiAgICB9O1xuXG4gICAgZGF5c0luTW9udGgucHVzaChkYXkpO1xuICB9XG5cbiAgLy8gSGVhZGVyIHRleHRlIChiYXJyZSBkZSBuYXZpZ2F0aW9uKVxuICBjb25zdCBoZWFkZXIgPSBgJHtkdC50b0xvY2FsZVN0cmluZyhcImVuLUNBXCIsIHsgbW9udGg6IFwibG9uZ1wiIH0pfSAke2R0LmdldEZ1bGxZZWFyKCl9YDtcblxuICByZXR1cm4gW2RheXNJbk1vbnRoLCBoZWFkZXJdO1xufVxuXG4vKipcbiAqIFRyb3V2ZSBsYSBkYXRlIG/DuSBkb2lzIGNvbW1lbmNlciBsZSBjYWxlbmRyaWVyIGVuIGZvbmN0aW9uIGR1IHByZW1pZXIgam91ciBkZSBsYSBzZW1haW5lXG4gKiBAcGFyYW0gZHQgLSBEYXRlIGNvbnRlbmFudCBsZSBtb2lzIGV0IGwnYW5uw6llIMOgIGNhbGN1bGVyXG4gKiBAcGFyYW0gY2FsZW5kYXJTdGFydGluZ0RheSBQcmVtaWVyIGpvdXIgZGUgbGEgc2VtYWluZSBAZGVmYXVsdCBcIlN1bmRheVwiXG4gKi9cbmZ1bmN0aW9uIEZpbmRGaXJzdERheVRvU3RhcnRDYWxlbmRhcihkdDogRGF0ZSwgY2FsZW5kYXJTdGFydGluZ0RheTogVHlwZVdlZWtEYXlzKTogRGF0ZSB7XG4gIGNvbnN0IGZpcnN0RGF5T2ZNb250aCA9IG5ldyBEYXRlKGR0LmdldEZ1bGxZZWFyKCksIGR0LmdldE1vbnRoKCksIDEpO1xuICBjb25zdCBmaXJzdERheU9mTW9udGhOYW1lID0gZmlyc3REYXlPZk1vbnRoLnRvTG9jYWxlU3RyaW5nKFwiZW4tQ0FcIiwgeyB3ZWVrZGF5OiBcImxvbmdcIiB9KSBhcyBUeXBlV2Vla0RheXM7XG5cbiAgLy8gVsOpcmlmaWVyIHNpIGxlIHByZW1pZXIgam91cnMgZHUgbW9pcyBjb3JyZXNwb25kIGF1IHByZW1pZXIgam91ciBkZSBsYSBzZW1haW5lIGR1IGNhbGVuZHJpZXJcbiAgaWYgKGZpcnN0RGF5T2ZNb250aE5hbWUgPT09IGNhbGVuZGFyU3RhcnRpbmdEYXkpIHtcbiAgICByZXR1cm4gZmlyc3REYXlPZk1vbnRoO1xuICB9XG5cbiAgLy8gVHJvdXZlciBsZSBwcmVtaWVyIGpvdXJzIGR1IG1vaXMgcXVpIGNvcnJlc3BvbmQgYXUgcHJlbWllciBqb3VyIGRlIGxhIHNlbWFpbmUgZHUgY2FsZW5kcmllclxuICBsZXQgaSA9IDA7IC8vIHBvdXIgbmUgcGFzIGZhaXJlIHBsdXMgZGUgMTAgaXTDqXJhdGlvbnMgKHBvdXIgw6l2aXRlciB1bmUgYm91Y2xlIGluZmluaWUpXG4gIHdoaWxlIChpIDw9IDEwKSB7XG4gICAgY29uc3QgZGF5ID0gbmV3IERhdGUoZHQuZ2V0RnVsbFllYXIoKSwgZHQuZ2V0TW9udGgoKSwgMSAtIGkpO1xuICAgIGNvbnN0IGRheU5hbWUgPSBkYXkudG9Mb2NhbGVTdHJpbmcoXCJlbi1DQVwiLCB7IHdlZWtkYXk6IFwibG9uZ1wiIH0pIGFzIFR5cGVXZWVrRGF5cztcblxuICAgIGlmIChkYXlOYW1lID09PSBjYWxlbmRhclN0YXJ0aW5nRGF5KSB7XG4gICAgICByZXR1cm4gZGF5O1xuICAgIH1cblxuICAgIGkrKztcbiAgfVxuXG4gIC8vIFNpIG9uIG5lIHRyb3V2ZSBwYXMgbGUgcHJlbWllciBqb3VycyBkdSBtb2lzIHF1aSBjb3JyZXNwb25kIGF1IHByZW1pZXIgam91ciBkZSBsYSBzZW1haW5lIGR1IGNhbGVuZHJpZXJcbiAgcmV0dXJuIGZpcnN0RGF5T2ZNb250aDtcbn1cblxuZnVuY3Rpb24gRmluZE51bWJlck9mRGF5c0JlZm9yZUZpcnN0RGF5T2ZNb250aChkdDogRGF0ZSwgY2FsZW5kYXJTdGFydGluZ0RheTogVHlwZVdlZWtEYXlzKTogbnVtYmVyIHtcbiAgY29uc3QgZmlyc3REYXlUb1N0YXJ0Q2FsZW5kYXIgPSBGaW5kRmlyc3REYXlUb1N0YXJ0Q2FsZW5kYXIoZHQsIGNhbGVuZGFyU3RhcnRpbmdEYXkpOyAvLyBleDogMjgganVpbiAyMDIxXG4gIGNvbnN0IG5iT2ZEYXlzSW5Nb250aCA9IG5ldyBEYXRlKFxuICAgIGZpcnN0RGF5VG9TdGFydENhbGVuZGFyLmdldEZ1bGxZZWFyKCksXG4gICAgZmlyc3REYXlUb1N0YXJ0Q2FsZW5kYXIuZ2V0TW9udGgoKSArIDEsXG4gICAgMFxuICApLmdldERhdGUoKTsgLy8gZXg6IDMwIGpvdXJzIGRhbnMgbGUgbW9pcyBkZSBqdWluIDIwMjFcblxuICByZXR1cm4gbmJPZkRheXNJbk1vbnRoIC0gZmlyc3REYXlUb1N0YXJ0Q2FsZW5kYXIuZ2V0RGF0ZSgpO1xufVxuIl0sIm5hbWVzIjpbIkxvYWRDYWxlbmRhcjIiLCJuYXYiLCJjYWxlbmRhclN0YXJ0aW5nRGF5IiwiZHQiLCJEYXRlIiwic2V0RnVsbFllYXIiLCJ5ZWFyIiwic2V0TW9udGgiLCJtb250aCIsIm5iRGF5c0luTW9udGgiLCJnZXREYXRlIiwibmJEYXlzQmVmb3JlRmlyc3REYXlPZk1vbnRoIiwiRmluZE51bWJlck9mRGF5c0JlZm9yZUZpcnN0RGF5T2ZNb250aCIsImNvbnNvbGUiLCJsb2ciLCJkYXlzSW5Nb250aCIsImkiLCJuYk9mRGF5c0luTW9udGgiLCJ0b2RheSIsImdldEZ1bGxZZWFyIiwiZ2V0TW9udGgiLCJkYXlOYW1lIiwidG9Mb2NhbGVTdHJpbmciLCJ3ZWVrZGF5IiwiZGF5IiwiZGF0ZSIsImlzQ3VycmVudERheSIsImlzUGFkZGluZyIsInB1c2giLCJoZWFkZXIiLCJGaW5kRmlyc3REYXlUb1N0YXJ0Q2FsZW5kYXIiLCJmaXJzdERheU9mTW9udGgiLCJmaXJzdERheU9mTW9udGhOYW1lIiwiZmlyc3REYXlUb1N0YXJ0Q2FsZW5kYXIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./utils/load-calendar2.ts\n"));

/***/ })

});