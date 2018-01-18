import StoreLoader from '../modules/moto-state/store-loader';
import Utils from '../modules/moto-state/utils';

export let language = {
    languages: ['Javascript', 'PHP']
};

document.addEventListener('dispatch-store-created', (event) => {
    console.log('Init actions');
    StoreLoader.setModel('language', language);
    Utils.triggerEvent('dispatch-model-created', {});
});
