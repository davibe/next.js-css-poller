'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = require('/Users/dade/work/next.js-css-poller/node_modules/babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('/Users/dade/work/next.js-css-poller/node_modules/babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _getPrototypeOf = require('/Users/dade/work/next.js-css-poller/node_modules/babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('/Users/dade/work/next.js-css-poller/node_modules/babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('/Users/dade/work/next.js-css-poller/node_modules/babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('/Users/dade/work/next.js-css-poller/node_modules/babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('/Users/dade/work/next.js-css-poller/node_modules/babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('/Users/dade/work/next.js-css-poller/node_modules/react/react.js');

var _react2 = _interopRequireDefault(_react);

var _isomorphicFetch = require('isomorphic-fetch');

var _isomorphicFetch2 = _interopRequireDefault(_isomorphicFetch);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CssPoller = function (_React$Component) {
  (0, _inherits3.default)(CssPoller, _React$Component);

  function CssPoller(props) {
    (0, _classCallCheck3.default)(this, CssPoller);

    var _this = (0, _possibleConstructorReturn3.default)(this, (CssPoller.__proto__ || (0, _getPrototypeOf2.default)(CssPoller)).call(this));

    _this.state = {};
    _this.timeout = null;
    return _this;
  }

  (0, _createClass3.default)(CssPoller, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.refresh();
    }
  }, {
    key: 'refresh',
    value: function () {
      var _ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee() {
        var url, style;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                url = this.props.href;
                style = "";
                _context.prev = 2;
                _context.next = 5;
                return (0, _isomorphicFetch2.default)(url);

              case 5:
                _context.next = 7;
                return _context.sent.text();

              case 7:
                style = _context.sent;
                _context.next = 13;
                break;

              case 10:
                _context.prev = 10;
                _context.t0 = _context['catch'](2);

                console.error(_context.t0);

              case 13:

                if (this.state.style != style) {
                  this.setState({ style: style });
                }

                if (this.timeout) {
                  clearTimeout(this.timeout);
                }
                this.timeout = setTimeout(this.refresh.bind(this), 1000);

              case 16:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this, [[2, 10]]);
      }));

      function refresh() {
        return _ref.apply(this, arguments);
      }

      return refresh;
    }()
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'style',
        null,
        ' ' + (this.state.style || "") + ' '
      );
    }
  }]);
  return CssPoller;
}(_react2.default.Component);

exports.default = CssPoller;
