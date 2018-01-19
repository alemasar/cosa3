import Ajax from './common/ajax';
//import Actions from './actions';
import StoreLoader from './modules/moto-state/store-loader';
import { header } from './models/header.model';
import { language } from './models/language.model';
//import * as header from './components/header.component';


export default class HeaderModule {
    constructor() {
        //        console.log(header)
    }
}

window.addEventListener('dispatch-store-ready', function (e) {
    let state = StoreLoader.getState();
    console.log('Init the process');
    //    console.log(state.language)
    //const ml = new ModuleLoader();
    //const cm=new ComponentModel();
    //new Actions();

    //header.browsers = ['hola'];
    //    language.data = ['hola'];
    //state.language.languages = ['adeu'];
    //let l = language.getModel(language);

    console.log(language);
    language.language = ['Adeu'];
    console.log(language);
    console.log(state);
});
