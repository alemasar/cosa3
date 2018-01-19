import StoreLoader from './store-loader';

function getModelGettersSetters(){
    return {
        get: function (obj, prop) {
            console.log(prop)
            return obj[prop];
        },
        set: function (obj, prop, value) {
            console.log(obj)
            let state = StoreLoader.getState();
            state[obj.type] = value;
            obj[prop] = value;
            return true;
        }
    }
}

export class Model {
    constructor() {
    }

    static getModel(model) {
        const key = Object.keys(model).filter(key => key !== 'type');
        let obj = {};
        obj[key[0]] = model[key[0]];
        obj.type = key[0];
        console.log(obj)
        
        return new Proxy(obj, getModelGettersSetters())
    }

}
