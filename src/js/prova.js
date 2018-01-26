import Ajax from './common/ajax';
import { addModule } from './modules/moto-state/module';
import { language } from './models/language.model';
import { header } from './models/header.model';

console.log('------------ PROVA ---------------')

export default class FooterModule {
    constructor() {
        //        console.log(header)
    }
}

document.addEventListener('footer-created', function (e) {
    console.log('Init the process in prova.js');
    let language1 = language('language');
/*    let language2 = language('language', { 'language': ['Coffee desde prova.js', 'PHP'] });*/
    let language3 = language('language1');
    console.log(language1)
    console.log(language3)
});

document.addEventListener('DOMContentLoaded', function (e) {
    console.log('------------------------ Footer -------------------------')
    addModule('footer', new FooterModule());
});
