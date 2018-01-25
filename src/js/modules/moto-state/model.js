import { Store, store } from './store';

let state = store();
class prova {
    constructor(disposition){
       // this.disposition = disposition;
       console.log(disposition);
    }

  }
  
  const handler1 = {
    construct(target, args) {
      console.log(target);
      // expected output: "monster1 constructor called"
  
      return new target(...args);
    }
  };
  
export const model = function (){
    return new Proxy(prova, handler1);
}
  
  console.log(new model('fierce'));
/*export let model = function (model, instance, args) {
    //   const l = new Language();
    console.log({ ...args })
    const m = new model(instance, { ...args });
    const proxy = new Proxy({}, {
        setPrototypeOf: function (target, prototype) {
            target = { ...prototype }
            console.log(target);
            return target;
        },
        get: function (target, propKey, receiver) {
            console.log(target);
            if (!(propKey in target.model)) {
                throw new ReferenceError('Unknown property: ' + propKey);
            }
            //            target.model[propKey];
            return Reflect.get(target, propKey, receiver);
            //return obj[prop];
        },
        set: function (target, prop, value) {
            console.log(target.instance);
            //       console.log(store.modelo);
            state.push({ ...value });
            console.log(target.instance)

            target.model = value;
            return true;
        }

    });

    Reflect.setPrototypeOf(proxy, m.data);
    console.log(state)
    return proxy;
};
*/