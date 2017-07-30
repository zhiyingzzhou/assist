!function(){

    let class2type = {},
    {toString} = class2type;
    let typeArray = ['String','Number','Boolean','Array','Object','Function','Date','RegExp','Error'];
    typeArray.forEach(i=>{
        class2type[`[object ${i}]`] = i.toLowerCase();
    });

    let navtiveKeys = {}.keys;

    function type(obj) {
        return obj === null ? String(obj) : class2type[toString.call(obj)] || 'object';
    }

    let Assist = function() {};

    if(typeof window === 'object' && window.JSON) {
        Assist.prototype.parseJSON = JSON.parse;
    }

    Assist.prototype = {
        /**
         * 将一个URL字符串转化成对象并返回
         * @param {string} url 
         * @returns {object}
         */
        parseUrlQuery(url) {
            let query = {};
            let urlToParse = url || window.location.href;
            let params;
            if(typeof urlToParse === 'string' && urlToParse.length) {
                urlToParse = urlToParse.indexOf('?') > -1 ? urlToParse.replace(/\S*\?/,'') : '';
                params = urlToParse.split('&').filter(paramsPart=>paramsPart !== '');
                params.forEach(param=>{
                    param = param.replace(/#\S+/g, '').split('=');
                    query[decodeURIComponent(param[0])] = typeof param[1] === 'undefined' ? undefined : decodeURIComponent(param[1]) || '';
                });
            }
            return query;
        },
        /**
         * 判断一个对象是否为数组
         * @param {array} arr - 要去重的数组
         * @returns {boolean} 如果传入的对象是一个数组,返回true,否则返回false
         * @example
         * // returns true
         * Utils.isArray(new Aarray());
         */
        isArray: Array.isArray || (arr => arr instanceof Array),
        /**
         * 判断是否为对象
         * @param {*} obj
         * @returns {boolean}
         */
        isObject: obj => type(obj) === 'object',
        /**
         * 判断是否为函数
         * @param {*} 
         * @returns {boolean}
         */
        isFunction: func => type(func) === 'function',
        /**
         * 判断是否为null
         * @param {*}
         * @returns {boolean}
         */
        isNull: obj => null === null,
        /**
         * 判断是否为undefined
         * @param {*}
         * @returns {boolean}
         */
        isUndefined: obj => undefined === void 0,
        /**
         * 数组去重
         * @param {array} arr - 要去重的数组
         * @returns {array} 返回去重后的数组
         * @example
         * // returns [1,2]
         * Utils.unique([1,2,1,2]);
         */
        unique(arr) {
            let uniqueArray = [];
            arr.forEach(arrayItem=>{
                if(uniqueArray.indexOf(arrayItem) === -1) {
                    uniqueArray.push(arrayItem);
                }
            });
            return uniqueArray;
        },
        type: type
    }
   
    const assistInstance = new Assist();

    if(typeof module === 'object' && typeof module.exports === 'object'){
        module.exports = assistInstance;
    }else{
        !window.$ && (window.$ = assistInstance);
        window.assist = assistInstance;
    }

}();