import Ajax from './common/ajax';
import { addModule } from './modules/moto-state/module';
import { language } from './models/language.model';
import { header } from './models/header.model';

console.log('------------ MAIN ---------------')

export default class HeaderModule {
    constructor() {
        //        console.log(header)
    }
}
let calculatorMixin = Base => class extends Base {
    calc() { }
};

let randomizerMixin = Base => class extends Base {
    randomize() { }
};
class Foo { }
class Bar extends calculatorMixin(randomizerMixin(Foo)) {
    constructor() {
        super();
    }
    calc() {
        console.log(this)
    }
}

document.addEventListener('header-created', function (e) {
    console.log('Init the process from main.js');
    let language1 = language('language', { 'language': ['Javascript in main.js', 'PHP'] });
    let language2 = language('language', { 'language': ['Coffee in main.js', 'PHP'] });
    let language3 = language('language1', { 'language': ['Coffee in main.js', 'PHP'] });
    language1.language = ['Coffee script in main.js', 'PHP'];
    language3.language = ['Javascript in main.js', 'PHP'];
    console.log(language('language'))
    console.log(language3)
});

document.addEventListener('DOMContentLoaded', function (e) {
    console.log('------------------------ Header -------------------------')
    addModule('header', new HeaderModule());
});
