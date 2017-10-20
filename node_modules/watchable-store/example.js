'use strict';

const BaseStore = require('./_BaseStore');
const CounterStore = (function () {

    const store = BaseStore(0);
    store.increment = function () {
        this.data = this.data + 1;
    };
    store.decrement = function () {
        this.data = this.data - 1;
    };
    return store;

})();

const subscription = CounterStore.watch(counter => {
    console.log('1', counter);
});

CounterStore.watch(counter => {
    console.log('2', counter);
});

CounterStore.increment();
CounterStore.unwatch(subscription);
CounterStore.decrement();