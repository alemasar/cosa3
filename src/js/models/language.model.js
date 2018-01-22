import StoreLoader from '../modules/moto-state/store-loader';
import { modelGettersSetters } from '../modules/moto-state/model';
import { Model } from '../modules/moto-state/model';
import Utils from '../modules/moto-state/utils';


function lang(language) {
    console.log(language)
    this.language = language;
}

const handler1 = {
    construct(target, args) {
        console.log('monster1 constructor called');
        // expected output: "monster1 constructor called"

        return new target(...args);
    }
};

// const proxy1 = new Proxy(monster1, handler1);

//  console.log(new proxy1('fierce').disposition);

const l = new Proxy(lang, {
    construct: function (target, args) {
        console.log(args);
        return new target(...args);
    }
});


export let language = function (args) {
    return new l(args).language;
};

//Model.setData('language', ['Javascript', 'PHP']);

//language = Model.getModel(language);
console.log(language)

document.addEventListener('dispatch-store-created', (event) => {
    console.log('Init actions');
    console.log(language)
    // StoreLoader.setModel(new language().lang);
    Utils.triggerEvent('dispatch-model-created', {});
});
