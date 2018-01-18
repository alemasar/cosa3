import StoreLoader from './store-loader';
import Utils from '../moto-state/utils';

let state = {};
export let store;


export class Store {
    constructor() { }

    initStore() {
        const models = StoreLoader.getModel();

        if (!Array.isArray(models)) {
            throw new Error('model should be an object or an Array of objects');
        }
        models.forEach((model) => {
            console.log(model.model)
            state[model.type] = { ...model.model };
        }, this)
    }

    getState() {
        return state;
    }
}

document.addEventListener('dispatch-store-created', (event) => {
    console.log('Instance of store');
    store = new Store();
});

document.addEventListener('DOMContentLoaded', (event) => {
    document.addEventListener('dispatch-model-created', (event) => {
        console.log('Init store');
        store.initStore();
        console.log(store.getState())
        Utils.triggerEvent('dispatch-store-ready', {});
    });
});
