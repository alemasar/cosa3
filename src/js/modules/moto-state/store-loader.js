import { Store, store } from './store';
import Utils from '../moto-state/utils';

const models = [];

export default class StoreLoader {
    constructor() { }
    static initState(initialState){
        console.log(store)
        store.initStore(initialState);
    }

    static setModel(model) {
        models.push(model);
    }

    static getModel() {
        return models;
    }

    static getStore() {
        return store;
    }

    static getState() {
        return store.getState();
    }
}
console.log('store loader created')
document.addEventListener('DOMContentLoaded', (event) => {
    Utils.triggerEvent('dispatch-store-created', {});
    Utils.triggerEvent('dispatch-models-created', {});
})
