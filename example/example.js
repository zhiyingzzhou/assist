let U = require('../src');

console.log(U.parseUrlQuery('http://localhost?id=1&name=assist'));
console.log(U.isArray(new Array()));
console.log(U.isObject(new Object()));
console.log(U.isFunction(new Function()));
console.log(U.isNull(null));
console.log(U.isUndefined(undefined));
console.log(U.unique([1,2,1,2]));
['string',[],function(){},{},0].forEach(item=>{
    console.log(U.type(item));
});