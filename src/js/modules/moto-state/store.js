import Utils from '../moto-state/utils';


const setState = function (trapName) {
    let state;
    const funcGet = function (e) {
        console.log(this.target)
        this.target = this;
    }
    Utils.triggerEvent('get-element', { action: funcGet, target: state });

    const func = function (e) {
        this.target = this.values;
        console.log(store);
    }
    Utils.triggerEvent('get-element', { action: func, target: store, values: state });
}

export let store = Utils.getProxy(new Map(), setState);

const getObjHandler = function (e) {
    //    console.log(store)
    e.detail.action.call(e.detail);
}
document.addEventListener('get-element', getObjHandler.bind(store));

window.addEventListener('DOMContentLoaded', (event) => {
    let state;

    const func = function () {
        //        console.log(this)
        state = this;
        //        console.log(state);
    }
    Utils.triggerEvent('get-state', { action: func });
    //    console.log(state)
});
