//  http://github.com/bjarneo/RecursiveObjectMerge
//  (c) 2014- Bjarne Øverli

var isObject = function (object) {
    'use strict';

    return Object.prototype.toString.call(object) === '[object Object]';
};

/* jshint node:true */
var RecursiveObjectMerge = function (object) {
    'use strict';

    var i = 1, key;

    if (!arguments.length) {
        throw 'Error: No objects added to merge method!';
    }

    for (; i < arguments.length; i++) {
        for (key in arguments[i]) {
            if (arguments[i].hasOwnProperty(key)) {
                if (isObject(arguments[i][key])) {
                    if (!isObject(object[key])) {
                        object[key] = {};
                    }

                    object[key] = RecursiveObjectMerge(object[key], arguments[i][key]);
                } else {
                    object[key] = arguments[i][key];
                }
            }
        }
    }

    return object;
};

// Expose Recursive Object Merge
module.exports = RecursiveObjectMerge;
