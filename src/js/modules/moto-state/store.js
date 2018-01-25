import Utils from '../moto-state/utils';

let t = [];
const mh = {
    get: function (dummyTarget, trapName) {
        console.log(trapName)
        return Reflect[trapName];
    }
}
const dummy = {};
const bh = new Proxy(dummy, mh);
export const store = new Proxy(t, bh);
const getObjHandler = function (e) {
    console.log(store)
    e.detail.action.call(this);
}
document.addEventListener('get-state', getObjHandler.bind(store));

