'use strict';

/**
 *
 * @param o the object to deep freeze
 * @returns {*}
 */
function deepFreeze(o) {
    Object.freeze(o);

    Object.getOwnPropertyNames(o).forEach(function (prop) {
        if (o.hasOwnProperty(prop)
            && o[prop] !== null
            && (typeof o[prop] === "object" || typeof o[prop] === "function")
            && !Object.isFrozen(o[prop])) {
            deepFreeze(o[prop]);
        }
    });

    return o;
}

/**
 *
 * Base Store to extend
 *
 * data attribute contains the state of the store
 *
 * You can subscribe to data$ to be notified when data change
 * Example :
 * let subscription = store.watch(cb)
 * store.unwatch(subscription) // when you're done with it
 *
 */
function BaseStore(initialData, options = {}) {
    const handlers = [];
    let nextHandlerId = 0;

    return {
        get data() {
            return initialData;
        },
        set data(t) {
            initialData = options.disableDeepFreeze ? t : deepFreeze(t);
            handlers.forEach(handler => {
                handler.handler(initialData);
            });
        },
        watch(cb) {
            let ID = nextHandlerId++;
            handlers.push({
                id: ID,
                handler: cb
            });
            return ID;
        },
        unwatch(id) {
            for (let i = 0; i < handlers.length; i++) {
                if (handlers[i].id === id) {
                    handlers.splice(i, 1);
                    break;
                }
            }
        }
    };
}

module.exports = BaseStore;
