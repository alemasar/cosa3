export default class Language {
    constructor(props) {
        //this.languages = [];
        const keys = Object.keys(props);
        console.log(keys)

        keys.forEach((prop) => {
            console.log(prop)
            this[prop] = props[prop];
        });
    }
}

export let language = function (args) {
 //   const l = new Language();
    const descomposedArgs = { ...args }
    console.log(new Language(descomposedArgs))
    return new Proxy(new Language(descomposedArgs), {
        getPrototypeOf: function (target) {
            console.log(target)
            return Language.prototype;
        }
    })
};
