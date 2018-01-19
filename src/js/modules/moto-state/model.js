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
            state[obj.type][prop] = value;
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
        console.log(key)
        
        return new Proxy({
            type: key[0],
            model[key[0]]
        }, getModelGettersSetters())
    }

    getType() {
        return this.constructor.name.toLowerCase();
    }
}
