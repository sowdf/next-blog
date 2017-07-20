"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _getPrototypeOf = require("babel-runtime/core-js/object/get-prototype-of");

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require("babel-runtime/helpers/createClass");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require("babel-runtime/helpers/possibleConstructorReturn");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require("babel-runtime/helpers/inherits");

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Article = function (_React$Component) {
    (0, _inherits3.default)(Article, _React$Component);

    function Article() {
        (0, _classCallCheck3.default)(this, Article);

        return (0, _possibleConstructorReturn3.default)(this, (Article.__proto__ || (0, _getPrototypeOf2.default)(Article)).apply(this, arguments));
    }

    (0, _createClass3.default)(Article, [{
        key: "render",
        value: function render() {
            var _props = this.props,
                title = _props.title,
                showTime = _props.showTime,
                description = _props.description;

            return _react2.default.createElement("article", null, _react2.default.createElement("h2", null, _react2.default.createElement("a", { href: "" }, title)), _react2.default.createElement("p", { className: "info" }, "\u65F6\u95F4: ", showTime, "| ", _react2.default.createElement("a", null, "\u8BC4\u8BBA")), _react2.default.createElement("div", { className: "view" }, description), _react2.default.createElement("div", { className: "read_more" }, _react2.default.createElement("a", { href: "" }, " >> \u9605\u8BFB\u5269\u4F59\u90E8\u5206  ")));
        }
    }]);

    return Article;
}(_react2.default.Component);

exports.default = Article;