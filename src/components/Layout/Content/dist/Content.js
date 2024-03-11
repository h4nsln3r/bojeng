"use strict";
exports.__esModule = true;
var react_1 = require("react");
var classnames_1 = require("classnames");
exports["default"] = (function (_a) {
    var _b = _a.direction, direction = _b === void 0 ? 'column' : _b, _c = _a.padding, padding = _c === void 0 ? false : _c, _d = _a.width, width = _d === void 0 ? 'l' : _d, className = _a.className, children = _a.children, style = _a.style;
    return (react_1["default"].createElement("div", { className: classnames_1["default"](className, 'content', "content--" + [direction], { 'content--padding': padding }, ["content--width--" + width]), style: style }, children));
});
