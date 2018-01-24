import StoreLoader from './store-loader';

export let model = function (model, args) {
    //   const l = new Language();
    const descomposedArgs = { ...args }
    console.log(new model(descomposedArgs))

    const proxy = new Proxy({}, {
        get: function (target, propKey, receiver) {
            if (!(propKey in target)) {
                throw new ReferenceError('Unknown property: '+propKey);
            }
            return Reflect.get(target, propKey, receiver);
            //return obj[prop];
        },
        set: function (target, prop, value) {
            console.log(target);
            console.log(prop);
            console.log(value);
            const obj = target;
            obj[prop] = value;
            const m = new model({...obj});
            StoreLoader.setState(m);
            //console.log(StoreLoader.getState());
            //target[prop] = m;
            return true;
        }

    });
    Reflect.setPrototypeOf(proxy, new model(descomposedArgs))
    return proxy;
};
