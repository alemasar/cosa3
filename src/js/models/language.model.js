import { model } from '../modules/moto-state/model';

export default class Language {
    constructor(instance, args) {
        //console.log(args)
        const keys = Object.keys(args);
        keys.forEach((key)=>{
            this[key]=args[key];
        });
        //this.instance = instance;
    }
}

export let language = function (instance, args){
    let l=new model(Language, instance, args);
//console.log(l);
    return l;
}
/*Object.defineProperty( Object.prototype, "__proto__", {
	get: function() {
        console.log(this)
		return Object.getPrototypeOf( this );
	},
	set: function(o) {
		// setPrototypeOf(..) as of ES6
		Object.setPrototypeOf( this, o );
		return o;
	}
} );*/

/*export let language = function (){
    console.log(language.name)
    return new Language();
}*/

/*

const handler1 = {
    setPrototypeOf(language, Language) {
        console.log(language)
        console.log(Language)
        return true;
    }
};

const monsterProto = {};
const monster1 = {
    geneticallyModified: false
};

const proxy1 = new Proxy(monster1, handler1);
// Object.setPrototypeOf(proxy1, monsterProto); // throws a TypeError

console.log(Reflect.setPrototypeOf(proxy1, new Language(monster1)));
// expected output: false

//console.log(monster1.geneticallyModified);
// expected output: true
*/





