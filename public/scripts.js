"use strict";

var _react = _interopRequireDefault(require("react"));

var _reactDom = _interopRequireDefault(require("react-dom"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var template = _react["default"].createElement('p', {}, 'testing 123');

_reactDom["default"].render(template, document.getElementById('app'));
