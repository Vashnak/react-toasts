'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactToasts = require('react-toasts');

require('./index.css');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _react2.default.createClass({
  displayName: 'example',
  componentDidMount: function componentDidMount() {},
  render: function render() {
    return _react2.default.createElement(
      'div',
      { className: 'root' },
      _react2.default.createElement(
        'div',
        { className: 'bc' },
        _react2.default.createElement(_reactToasts.ToastContainer, { store: _reactToasts.ToastStore }),
        _react2.default.createElement(
          'div',
          { className: 'text' },
          _react2.default.createElement(
            'h1',
            null,
            'Welcome to react-toasts test page'
          ),
          _react2.default.createElement(
            'span',
            null,
            'This page is currently using the component default values. ',
            _react2.default.createElement('br', null),
            'Check my page ',
            _react2.default.createElement(
              'a',
              { href: 'https://github.com/Vashnak/react-toasts' },
              'https://github.com/Vashnak/react-toasts'
            ),
            ' to know what options you can use.'
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'buttons' },
          _react2.default.createElement(
            'div',
            { className: 'button buttonSuccess', onClick: function onClick() {
                _reactToasts.ToastStore.success("It works !");
              } },
            'Success'
          ),
          _react2.default.createElement(
            'div',
            { className: 'button buttonInfo', onClick: function onClick() {
                _reactToasts.ToastStore.info("It's pretty cool :)");
              } },
            'Info'
          ),
          _react2.default.createElement(
            'div',
            { className: 'button buttonWarning', onClick: function onClick() {
                _reactToasts.ToastStore.warning("Ho, I found a bug :/");
              } },
            'Warning'
          ),
          _react2.default.createElement(
            'div',
            { className: 'button buttonError', onClick: function onClick() {
                _reactToasts.ToastStore.error("Haaa it doesn't work anymore x(");
              } },
            'Error'
          )
        )
      )
    );
  }
});