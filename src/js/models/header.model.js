import StoreLoader from '../modules/moto-state/store-loader';
import { modelGettersSetters } from '../modules/moto-state/model';
import { Model } from '../modules/moto-state/model';
import Utils from '../modules/moto-state/utils';
// export let header = {};
export let header = {
    header: ['Internet Explorer', 'Netscape']
}

header = Model.getModel(header);
console.log(header)

document.addEventListener('dispatch-store-created', (event) => {
    console.log('Init actions');
    //header = new Header();
    console.log(header)
    StoreLoader.setModel(header);
    Utils.triggerEvent('dispatch-model-created', {});
});
