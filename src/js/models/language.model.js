import StoreLoader from '../modules/moto-state/store-loader';
import { modelGettersSetters } from '../modules/moto-state/model';
import { Model } from '../modules/moto-state/model';
import Utils from '../modules/moto-state/utils';

export let language = Model.setData('language', ['Javascript', 'PHP']);

language = Model.getModel(language);
console.log(language)

document.addEventListener('dispatch-store-created', (event) => {
    console.log('Init actions');
    console.log(language)
    StoreLoader.setModel(language);
    Utils.triggerEvent('dispatch-model-created', {});
});
