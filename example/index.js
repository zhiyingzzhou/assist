const chalk = require('chalk');
const U = require('../src');
const log = console.log;

log(chalk.green(
    `parse url 'http://localhost?id=1&name=assist' : ${
        JSON.stringify(U.parseUrlQuery('http://localhost?id=1&name=assist'))
    }`
));
log(chalk.green(
    `new Array() is Array: ${U.isArray(new Array())}`
));
log(chalk.green(
    `new Object() is Object: ${U.isObject(new Object())}`
));
log(chalk.green(
    `new Function() is Function: ${U.isFunction(new Function())}`
));
log(chalk.green(
    `null is null: ${U.isNull(null)}`
));
log(chalk.green(
    `undefined is undefined: ${U.isUndefined(undefined)}`
));
log(chalk.green(
    `new Object() is Empty: ${U.isEmptyObject(new Object())}`
));
log(U.unique([1,2,1,2]));
['string',[],function(){},{},0].forEach(item=>{
    log(chalk.green(
        `${item} is : ${U.type(item)}`
    ));
});