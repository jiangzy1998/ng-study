"use strict";
exports.__esModule = true;
var rxjs_1 = require("../../node_modules/rxjs");
function f1() {
    var observable = rxjs_1.of(1, 2, 3);
    observable.subscribe({ next: function (num) { return console.log(num); } });
}
f1();
