'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

!function () {
    var _this = this;

    var class2type = {},
        toString = class2type.toString;

    var typeArray = ['String', 'Number', 'Boolean', 'Array', 'Object', 'Function', 'Date', 'RegExp', 'Error'];
    typeArray.forEach(function (i) {
        class2type['[object ' + i + ']'] = i.toLowerCase();
    });

    var navtiveKeys = {}.keys;

    var Assist = function Assist() {};

    if (window.JSON) {
        Assist.prototype.parseJSON = JSON.parse;
    }

    Assist.prototype = {
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
        isArray: Array.isArray || function (arr) {
            return arr instanceof Array;
        },
        isObject: function isObject(obj) {
            return _this.type(obj) === 'object';
        },
        isFunction: function isFunction(func) {
            return _this.type(func) === 'function';
        },
        isNull: function isNull(obj) {
            return null === null;
        },
        isUndefined: function isUndefined(obj) {
            return undefined === void 0;
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
        },
        type: function type(obj) {
            return obj === null ? String(null) : class2type(toString.call(obj)) || 'object';
        }
    };

    var assistInstance = new Assist();

    if ((typeof module === 'undefined' ? 'undefined' : _typeof(module)) === 'object' && _typeof(module.exports) === 'object') {
        module.exports = assistInstance;
    } else {
        !window.$ && (window.$ = assistInstance);
        window.assist = assistInstance;
    }
}();