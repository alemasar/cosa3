import StoreLoader from './store-loader';
import Utils from '../moto-state/utils';

let state = [];
export let store;
const models = [];

export class Store {
    constructor() { 
        /*console.log(args)
        const keys = Object.keys(args);
        keys.forEach((key)=>{
            this[key]=args[key];
        })*/
    }

    /*initStore(initialState) {
        console.log(this.getState())
        const models = StoreLoader.getModel();
        console.log(models)
        if (!Array.isArray(models)) {
            throw new Error('model should be an object or an Array of objects');
        }
        models.forEach((model) => {
            console.log(model)
            state[model.instance] = model[model.instance];
        }, this);

        state = {
            ...state,
            ...initialState
        }

    }

    getState() {
        return state;
    }*/
}

store = function (value) {
    //   const l = new Language();
    let modelIndex = -1;
    const proxy = new Proxy(state, {
        setPrototypeOf: function (target, prototype) {
            console.log(value.constructor.name)
            console.log(target)
            if (!(value.constructor.name in models)) {
                models[value.constructor.name] = [];
            }
            
            /*StoreLoader.setModel(prototype);
            const keys = Object.keys(prototype);
            console.log(keys)
    
            keys.forEach((prop) => {
                console.log(prop)
                target[prop] = prototype[prop];
            });
            //target = new Language({...prototype});
            console.log(target)*/
            /*const keys = Object.keys(value);
   
            keys.forEach((prop) => {
                console.log(prop)
                target[prop] = value[prop];
            });*/

            //console.log(state.push(value));
            console.log('--------- Hago Push ----------------')
            modelIndex = target.push(value);
            models[value.constructor.name].push(modelIndex);
            return true;
        },
        get: function (target, propKey, receiver) {
            console.log(models);
            /*if (!(propKey in target)) {
                throw new ReferenceError('Unknown property: '+propKey);
            }*/
            return Reflect.get(target, propKey, receiver);
            //return obj[prop];
        },
        set: function (target, prop, value) {
            console.log(modelIndex);
            console.log(prop);
            console.log(value);
           /* const obj = {}
            obj[prop] = value;
            const m = new model({...obj});
            StoreLoader.initState(m);
            console.log(StoreLoader.getState());*/
            console.log('--------- Substituio Valor ----------------')
            state[modelIndex-1]={...value};
            console.log(state)
            return true;
        }

    });
    Reflect.setPrototypeOf(proxy, {
        ...value
    });
    /*if (modelIndex!=-1){
        console.log('--------------- ENTRO ------------------')
        Reflect.get(proxy, '');
        Reflect.set(proxy, '', value);
    }*/
    console.log(modelIndex);
    return proxy;
};
/*
document.addEventListener('dispatch-store-created', (event) => {
    console.log('Instance of store');
    store = new Store();
    store.initStore({});
});*/

/*document.addEventListener('DOMContentLoaded', (event) => {
    document.addEventListener('dispatch-models-created', (event) => {
        console.log('Init store');
        store.initStore();
        console.log(store.getState())
        Utils.triggerEvent('dispatch-store-ready', {});
    });
});*/
