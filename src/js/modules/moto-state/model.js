import { Store, store } from './store';

let state = store;

export let model = function (model, args) {
    //   const l = new Language();
    //console.log(new model(descomposedArgs))
    const m = new model({ ...args });
    const proxy = new Proxy({ "index": -1, "modelo": { ...m } }, {
        get: function (target, propKey, receiver) {
            if (!(propKey in target)) {
                throw new ReferenceError('Unknown property: ' + propKey);
            }
            return Reflect.get(target, propKey, receiver);
            //return obj[prop];
        },
        set: function (target, prop, value) {
            console.log(target);
            //       console.log(store.modelo);
            console.log(store.index)
            store.modelo = {
                "modelo": m,
                "index": store.index
            };
            console.log(store.index)
            let obj = {};
            obj["modelo"] = target;
            obj["modelo"][prop] = value;
            obj["index"] = store.index;
            /* const m = new Proxy(new model({...obj}), {
                get:function (target, propKey, receiver){
                    console.log(target);
                    console.log(prop);
                    return Reflect.get(target, propKey, receiver);
                },
                set: function (target, prop, value){
                    console.log(target);
                    console.log(prop);
                    console.log(value);
                    return true;
                }
            });
            StoreLoader.setState(m);*/
            //console.log(StoreLoader.getState());
            //target[prop] = m;
            return true;
        }

    });

    Reflect.setPrototypeOf(proxy, {});
    console.log(state)
    return proxy;
};
