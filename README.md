RecursiveObjectMerge
==

Merge as many objects you want to one object recursive.

#Install:
```bash
npm install --save recursiveobjectmerge
```

##Documentation:

####recursiveObjectMerge();
```javascript
var recursiveObjectMerge = require('recursiveobjectmerge');

recursiveObjectMerge(
    { a: 'a', b: 'b', c: ['a', 'b', 'c'] },
    { a: { a: 'a', b: 'b', c: ['a', 'b', 'c'] }, d: 'd'},
    { b: { a: { a: 'a', b: 'b', c: ['a', 'b', 'c'] } } },
    { b: { a: { a: 'a', e: 'e', c: ['c', 'a', 'b'] } } }
);
/*
a: { a: 'a', b: 'b', c: [ 'a', 'b', 'c' ] },
b: { a: { a: 'a', b: 'b', c: ['c', 'a', 'b'], e: 'e' } },
c: [ 'a', 'b', 'c' ],
d: 'd'
*/
```
