import { model, setModule } from '../modules/moto-state/model';
import Utils from '../modules/moto-state/utils';
console.log('------------------ Language Model ---------------------');
export default class Language {
    constructor(instance, args) {
        //console.log(args)
        const keys = Object.keys(args);
        keys.forEach((key) => {
            this[key] = args[key];
        });
        //this.instance = instance;
    }
}

export let language = function (instance, values) {
    let state;

    const func = function (e) {
        console.log(this)
        console.log(this.target)
        this.target = this;
        console.log(state);
    }
    Utils.triggerEvent('get-element', { action: func, target: state });
    console.log(state)
    let m = {};
    if (!state[instance]) {
        m = model(instance, values);
    }else{
        m = state[instance];
    }

    return m;
}


