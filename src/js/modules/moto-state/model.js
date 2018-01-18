import StoreLoader from './store-loader';
export class Model {
    constructor() {
    }

    getModelGettersSetters() {
        return {
            get: function (obj, prop) {
                console.log(obj[prop])
                return obj[prop];
            },
            set: function (obj, prop, value) {
                //console.log(obj.prop)
                let state = StoreLoader.getState();
                state[obj.type][prop] = value;
                obj[prop] = value;
                return true;
            }
        }
    }
}
