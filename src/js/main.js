import Ajax from './common/ajax';
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
    let language1 = language({'language': ['Coffee Script', 'PHP']});
    let language2 = language({'language': ['Javascript', 'PHP']});
    console.log(language1);
    language1.language = ['language1'];
    console.log(language1);
    //language2.instance = 'language2';
    language2.language = ['Hola'];
    console.log(language2);
    //language.language = ["Ha cambiado?"];
    //console.log(language);
    //console.log(state);
});
