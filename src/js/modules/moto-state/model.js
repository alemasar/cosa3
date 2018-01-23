import StoreLoader from './store-loader';

/*
function model(model) {
    console.log(model)
    this.model = new Proxy(model,{
        get: function (obj, prop) {
            console.log(prop)
            if (!(propKey in target)) {
                throw new ReferenceError('Unknown property: '+propKey);
            }
            //return Reflect.get(target, propKey, receiver);
            return obj[prop];
        },
        set: function (obj, prop, value) {
            console.log(obj);
            console.log(prop);
            console.log(value);
            obj[prop] = value;
            return true;
        }
    });
}

const m = new Proxy(model, {
    construct: function (target, args) {
        console.log(args);
        return new target(...args);
    }
});

export let Model = function (args) {
    return new m(args).model;
};*/

export let model = function (model, args) {
    //   const l = new Language();
    const descomposedArgs = { ...args }
    console.log(new model(descomposedArgs))

    const proxy = new Proxy(new model(descomposedArgs), {
        construct: function (target, args) {
            console.log(args);
            return new target(...args);
        },
        setPrototypeOf: function (target, prototype) {
            console.log(prototype.name)
            console.log(prototype)
            const keys = Object.keys(prototype);
            console.log(keys)
    
            keys.forEach((prop) => {
                console.log(prop)
                target[prop] = prototype[prop];
            });
            //target = new Language({...prototype});
            return target;
        }
    });
    Reflect.setPrototypeOf(proxy, new model(descomposedArgs))
    return proxy;
};


