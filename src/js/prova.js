import Ajax from './common/ajax';
//import Language from './models/language.model';
import { language } from './models/language.model';
//import Header from './models/header.model';
import { header } from './models/header.model';


/*export default class HeaderModule {
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
}*/

window.addEventListener('DOMContentLoaded', function (e) {
   // let state = StoreLoader.getState();
    console.log('Init the process in prova.js');
    //let l = language();
    //l.language = ['Coffee Script', 'PHP'];
   /* let returnName = function (target) {
        console.log(this)
        return this.name;
    }

    let prova = new Bar();*/
    //console.log(prova.calc())
    //  let language1 = new Language(language1, { 'language': ['Javascript', 'PHP'] });

    //let language1 = function (){}
    // return language(language1, {'language': ['Javascript', 'PHP']});
    /*(function(){
        let language1 = function (){
            console.log(this)
            return language(language1, {'language': ['Javascript', 'PHP']})
        }
        language1()
    })()*/
    //language1 = language1();
    let language1 = language('language');
    //console.log();
    console.log(language1)
    let language2 = language('language', { 'language': ['Coffee desde prova.js', 'PHP'] });
    let language3 = language('language1', { 'language': ['Coffee desde prova.js', 'PHP'] });
    //console.log();
    //console.log(language3)
   // language1.language = ['Coffee script desde prova.js', 'PHP'];
  //  language3.language = ['Javascript desde prova.js', 'PHP'];
    console.log(language2)
    console.log(language3)
    //console.log('------------------ Creo Header ------------------')
    //let header1 = header({ 'header': ['Javascript', 'PHP'] });
    //console.log();
   // console.log(header1)
  //  header1.header = ['Coffee Script', 'PHP'];
  //  console.log(StoreLoader.getState());
    //let language2 = language({ 'language': ['Coffee Script', 'PHP'] });
    /*let language2 = {};
    language2 = language2.apply(language({ 'language': ['Coffee Script', 'PHP'] }));*/

    /*for (const prop in language2) {
        if (language2.hasOwnProperty(prop)) {
            console.log(prop)
        }
    }


    console.log(language1 instanceof Language);
    language1.language = ['language1'];
    console.log(language1);
    //language2.instance = 'language2';
    language2.language = ['Hola'];
    console.log(language2);
    //language.language = ["Ha cambiado?"];
    //console.log(language);
    //console.log(state);*/
});
