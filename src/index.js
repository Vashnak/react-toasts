'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.ToastContainer = exports.ToastStore = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _watchableStores = require('watchable-stores');

var _watchableStores2 = _interopRequireDefault(_watchableStores);

var _reactTransitionGroup = require('react-transition-group');

require('./animate.css');

require('./styles.css');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Store = function Store() {
    var store = (0, _watchableStores2.default)({
        action: '',
        message: ''
    }, { disableDeepFreeze: true });

    store.success = function (message, timer) {
        store.data = {
            status: 'success',
            message: message,
            timer: timer
        };
    };

    store.info = function (message, timer) {
        this.data = {
            status: 'info',
            message: message,
            timer: timer
        };
    };

    store.warning = function (message, timer) {
        this.data = {
            status: 'warning',
            message: message,
            timer: timer
        };
    };

    store.error = function (message, timer) {
        this.data = {
            status: 'error',
            message: message,
            timer: timer
        };
    };

    return store;
};

var Container = function (_Component) {
    _inherits(Container, _Component);

    function Container(props) {
        _classCallCheck(this, Container);

        var _this = _possibleConstructorReturn(this, (Container.__proto__ || Object.getPrototypeOf(Container)).call(this, props));

        _this.state = {
            toasts: [],
            styles: {}
        };
        return _this;
    }

    _createClass(Container, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            var _this2 = this;

            var store = this.props.store;
            this.storeSubscription = store.watch(function (data) {
                var id = Math.random();
                var toasts = _this2.state.toasts;
                data.id = id;
                toasts.push(data);
                _this2.setState({ toasts: toasts });
                setTimeout(function () {
                    _this2.setState({ toasts: _this2.state.toasts.filter(function (toast) {
                            return toast.id !== id;
                        }) });
                }, data.timer || 3000);
            });

            var styles = {};
            switch (this.props.style) {
                case "top left":
                    styles.top = 10;
                    styles.left = 10;
                    break;
                case "top right":
                    styles.top = 10;
                    styles.right = 10;
                    break;
                case "bottom left":
                    styles.bottom = 10;
                    styles.left = 10;
                    break;
                case "bottom right":
                    styles.bottom = 10;
                    styles.right = 10;
                    break;
                default:
                    styles.top = 10;
                    styles.right = 10;
                    break;
            }
            this.setState({ styles: styles });
        }
    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            this.props.store.unwatch(this.storeSubscription);
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement('div', { className: 'react-toasts-container', style: this.state.styles }, this.state.toasts.map(function (toast) {
                return _react2.default.createElement('div', { key: toast.id }, _react2.default.createElement(_reactTransitionGroup.CSSTransitionGroup, {
                    transitionName: 'react-toasts-animation',
                    transitionAppear: true,
                    transitionAppearTimeout: 500,
                    transitionEnter: false,
                    transitionLeave: false
                }, _react2.default.createElement('div', { className: "react-toasts " + toast.status }, toast.message)));
            }));
        }
    }]);

    return Container;
}(_react.Component);

var ToastStore = exports.ToastStore = Store();

var ToastContainer = exports.ToastContainer = Container;