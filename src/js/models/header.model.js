import StoreLoader from '../modules/moto-state/store-loader';
import { modelGettersSetters } from '../modules/moto-state/model';
import { Model } from '../modules/moto-state/model';
import Utils from '../modules/moto-state/utils';
export let header = {};
const headerData = {
    browsers: ['Internet Explorer', 'Netscape']
}

export class Header extends Model {
    constructor() {
        super();
    }

    getType() {
        return this.constructor.name.toLowerCase();
    }

    getModel() {
        return new Proxy({
            type: this.getType(),
            ...headerData
        }, this.getModelGettersSetters())
    }
}

document.addEventListener('dispatch-store-created', (event) => {
    console.log('Init actions');
    header = new Header();
    StoreLoader.setModel(header);
    Utils.triggerEvent('dispatch-model-created', {});
});
