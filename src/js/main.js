import Ajax from './common/ajax';
import StoreLoader from './modules/moto-state/store-loader';
import Language from './models/language.model';
import { language } from './models/language.model';
import { Model } from './modules/moto-state/model';
//import * as header from './components/header.component';


export default class HeaderModule {
    constructor() {
        //        console.log(header)
    }
}

window.addEventListener('dispatch-store-created', function (e) {
    let state = StoreLoader.getState();
    console.log('Init the process');
    //let l = language();
    //l.language = ['Coffee Script', 'PHP'];

    let language1 = language({'language': ['Javascript', 'PHP']});
    let language2 = language({'language': ['Coffee Script', 'PHP']});
    console.log(language1 instanceof Language);
    language1.language = ['language1'];
    console.log(language1);
    //language2.instance = 'language2';
    language2.language = ['Hola'];
    console.log(language2);
    //language.language = ["Ha cambiado?"];
    //console.log(language);
    //console.log(state);
});
