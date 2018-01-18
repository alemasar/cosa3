import { Store, store } from './store';
import Utils from '../moto-state/utils';

const models = [];

export default class StoreLoader {
    constructor() { }

    static setModel(type, model) {
        models.push({
            model: model,
            type: type
        });
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
})
