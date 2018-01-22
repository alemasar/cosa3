import StoreLoader from './store-loader';

function model(model) {
    console.log(model)
    this.model = new Proxy(model,{
        get: function (obj, prop) {
            console.log(prop)
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
};
