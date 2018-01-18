import StoreLoader from '../modules/moto-state/store-loader';
import Utils from '../modules/moto-state/utils';

export let header = {
    browsers: ['Internet Explorer', 'Netscape']
};

document.addEventListener('dispatch-store-created', (event) => {
    console.log('Init actions');
    StoreLoader.setModel('header', header);
    Utils.triggerEvent('dispatch-model-created', {});
});
