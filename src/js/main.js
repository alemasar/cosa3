import Ajax from './common/ajax';
//import Actions from './actions';
import { header } from './models/header.model';
import { language } from './models/language.model';
//import * as header from './components/header.component';
import StoreLoader from './modules/moto-state/store-loader';

export default class HeaderModule {
    constructor() {
//        console.log(header)
    }
}

window.addEventListener('dispatch-model-created', function (e) {
    console.log('Init the process');
    console.log(StoreLoader.getState());
    //const ml = new ModuleLoader();
    //const cm=new ComponentModel();
    //new Actions();
    header.browsers = ['hola'];
    language.languages = ['hola'];
    console.log(StoreLoader.getState());
});
