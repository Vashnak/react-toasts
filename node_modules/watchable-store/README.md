# watchable-store

Data model with observer / observable pattern for front-end purpose

## How to use it

```javascript
const WatchableStore = require('watchable-store');
const CounterStore = () => {
  const store = WatchableStore(0 /* Initial Data */);
  store.increment = function () {
    // modifing data here notify all watchers
    this.data = this.data + 1;
  };
  store.decrement = function () {
    this.data = this.data + 1;
  };
  return store;
};

// subscribe to data change
const subcription = CounterStore.watch(counter => console.log('new value : ' + counter));

CounterStore.increment();
CounterStore.increment();
CounterStore.decrement();

// unsubscribe when you're done with it
CounterStore.unwatch(subscription);
```

DeepFreeze is used by default in order to manipulate immutable data, to disable it just initialize your store like this :
```javascript
  const store = WatchableStore(0, {disableDeepFreeze: true});
```
