'use strict';

!function () {

    var class2type = {};
    var typeArray = ['String', 'Number', 'Boolean', 'Array', 'Object', 'Function', 'Date', 'RegExp', 'Error'];
    typeArray.forEach(function (i) {
        class2type['[object ' + i + ']'] = i.toLowerCase();
    });

    var Utils = function Utils() {
        return new Utils.fn.init();
    };

    Utils.fn = Utils.prototype = {
        constructor: Utils,
        init: function init() {
            return this;
        },

        /**
         * 将一个URL字符串转化成对象并返回
         * @param {string} url 
         * @returns {object}
         */
        parseUrlQuery: function parseUrlQuery(url) {
            var query = {};
            var urlToParse = url || window.location.href;
            var params = void 0;
            if (typeof urlToParse === 'string' && urlToParse.length) {
                urlToParse = urlToParse.indexOf('?') > -1 ? urlToParse.replace(/\S*\?/, '') : '';
                params = urlToParse.split('&').filter(function (paramsPart) {
                    return paramsPart !== '';
                });
                params.forEach(function (param) {
                    param = param[i].replace(/#\S+/g, '').split('=');
                    query[decodeURIComponent(param[0])] = typeof param[1] === 'undefined' ? undefined : decodeURIComponent(param[i]) || '';
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
        isArray: Array.isArray || function (object) {
            return object instanceof Array;
        },
        /**
         * 数组去重
         * @param {array} arr - 要去重的数组
         * @returns {array} 返回去重后的数组
         * @example
         * // returns [1,2]
         * Utils.unique([1,2,1,2]);
         */
        unique: function unique(arr) {
            var uniqueArray = [];
            arr.forEach(function (arrayItem) {
                if (uniqueArray.indexOf(arrayItem) === -1) {
                    uniqueArray.push(arrayItem);
                }
            });
            return uniqueArray;
        }
    };

    Utils.fn.init.prototype = Utils.fn;

    if(typeof module === 'object' && typeof module.exports === 'object'){
        module.exports = Utils;
    }else{
        return Utils;
    }

}();