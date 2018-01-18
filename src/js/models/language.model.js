import StoreLoader from '../modules/moto-state/store-loader';
import { modelGettersSetters } from '../modules/moto-state/model';
import { Model } from '../modules/moto-state/model';
import Utils from '../modules/moto-state/utils';
export let language = {};
const languageData = {
    language: ['Javascript', 'PHP']
}

export class Language extends Model{
    constructor(){
        super();
        console.log(this.constructor.name.toLowerCase())
    }

    getType(){
        return this.constructor.name.toLowerCase();
    }

    getModel() {
        return new Proxy({
            type: this.getType(),
            ...languageData
        },this.getModelGettersSetters())
    }
}

document.addEventListener('dispatch-store-created', (event) => {
    console.log('Init actions');
    language = new Language();
    StoreLoader.setModel(language);
    Utils.triggerEvent('dispatch-model-created', {});
});
