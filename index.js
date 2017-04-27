import React from 'react';
import WatchableStore from 'watchable-store';
import { CSSTransitionGroup } from 'react-transition-group';

import './animate.css';
import './styles.css';

const Store = function () {
  const store = WatchableStore({
    action: '',
    message: ''
  }, { disableDeepFreeze: true });

  store.success = function (message, timer) {
    store.data = {
      status: 'success',
      message,
      timer
    };
  };

  store.info = function (message, timer) {
    this.data = {
      status: 'info',
      message,
      timer
    };
  };

  store.warning = function (message, timer) {
    this.data = {
      status: 'warning',
      message,
      timer
    };
  };

  store.error = function (message, timer) {
    this.data = {
      status: 'error',
      message,
      timer
    };
  };

  return store;
};

export let ToastStore = Store();

export let ToastContainer = React.createClass({
  getInitialState: function () {
    return {
      toasts: [],
      styles: {}
    };
  },

  componentDidMount() {
    let store = this.props.store;
    this.storeSubscription = store.watch(data => {
      let id = Math.random();
      let toasts = this.state.toasts;
      data.id = id;
      toasts.push(data);
      this.setState({ toasts: toasts });
      setTimeout(() => {
        this.setState({ toasts: this.state.toasts.filter(toast => toast.id !== id) });
      }, data.timer || 3000);
    });

    let styles = {};
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
  },

  componentWillUnmount() {
    this.props.store.unwatch(this.storeSubscription);
  },

  render() {
    return React.createElement(
      'div',
      { className: 'react-toasts-container', style: this.state.styles },
      this.state.toasts.map(toast => {
        return React.createElement(
          'div',
          { key: toast.id },
          React.createElement(
            CSSTransitionGroup,
            {
              transitionName: 'react-toasts-animation',
              transitionAppear: true,
              transitionAppearTimeout: 500,
              transitionEnter: false,
              transitionLeave: false },
            React.createElement(
              'div',
              { className: "react-toasts " + toast.status },
              toast.message
            )
          )
        );
      })
    );
  }
});
