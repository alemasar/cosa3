import StoreLoader from './store-loader';

export let model = function (model, args) {
    //   const l = new Language();
    const descomposedArgs = { ...args }
    console.log(new model(descomposedArgs))

    const proxy = new Proxy(new model(descomposedArgs), {
        setPrototypeOf: function (target, prototype) {
            console.log(target)
            console.log(prototype)
            StoreLoader.setModel(prototype);
            const keys = Object.keys(prototype);
            console.log(keys)
    
            keys.forEach((prop) => {
                console.log(prop)
                target[prop] = prototype[prop];
            });
            //target = new Language({...prototype});
            console.log(target)
            return new model({...prototype});
        },
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
            const obj = {}
            obj[prop] = value;
            const m = new model({...obj});
            StoreLoader.initState(m);
            console.log(StoreLoader.getState());
            target[prop] = m;
            return true;
        }

    });
    Reflect.setPrototypeOf(proxy, new model(descomposedArgs))
    return proxy;
};
