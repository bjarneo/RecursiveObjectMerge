/* jshint node:true */
var should = require('chai').should(),
    recursiveObjectMerge = require('./');

describe('#RecursiveObjectMerge', function() {
    it('Should merge multiple objects to one', function() {
        var merged = recursiveObjectMerge(
            { a: 'a', b: 'b', c: ['a', 'b', 'c'] },
            { a: { a: 'a', b: 'b', c: ['a', 'b', 'c'] }, d: 'd'},
            { b: { a: { a: 'a', b: 'b', c: ['a', 'b', 'c'] } } },
            { b: { a: { a: 'a', e: 'e', c: ['c', 'a', 'b'] } } }
        );

        merged.should.deep.equal({
            a: { a: 'a', b: 'b', c: [ 'a', 'b', 'c' ] },
            b: { a: { a: 'a', b: 'b', c: ['c', 'a', 'b'], e: 'e' } },
            c: [ 'a', 'b', 'c' ],
            d: 'd'
        });
    });
});
