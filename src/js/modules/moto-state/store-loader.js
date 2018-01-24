import { Store, store } from './store';
import Utils from '../moto-state/utils';

const models = [];
let storeProxy = store({});


export default class StoreLoader {
    constructor() { }
    static initState(initialState) {
        console.log(store)
        //store.initStore(initialState);
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

    static setState(value) {
        console.log(storeProxy)
        Reflect.set(storeProxy, '', value);
        return true;
    }

    /*static initState(value) {
        // console.log(store(value))
        storeProxy = store(value);
    }*/
}
console.log('store loader created')
document.addEventListener('DOMContentLoaded', (event) => {
    //Utils.triggerEvent('dispatch-store-created', {});
    Utils.triggerEvent('dispatch-models-created', {});
})
