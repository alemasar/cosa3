import StoreLoader from './store-loader';

function getModelGettersSetters(){
    return {
        get: function (obj, prop) {
            console.log(prop)
            return obj[prop];
        },
        set: function (obj, prop, value) {
            console.log(obj);
            console.log(prop);
            console.log(value);
            if (prop==='instance'){
                let state = StoreLoader.getState();
                state[value] = obj;
                obj[prop] = value;
            }else{
                let state = StoreLoader.getState();
                state[obj.instance] = value;
                obj[prop] = value;
            }
            return true;
        }
    }
}

export class Model {
    constructor() {
    }

    static getModel(model) {
        const key = Object.keys(model).filter(key => key !== 'instance');
        let obj = {};
        obj[key[0]] = model[key[0]];
        obj.instance = key[0];
        console.log(obj)
        
        return new Proxy(obj, getModelGettersSetters())
    }
    static setData(name, obj){
        let data = {};
        data[name] = obj;
        return data;
    }
}
