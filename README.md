RecursiveObjectMerge
==

Merge as many objects you want to one object recursive.

#Install:
```bash
npm install recursiveobjectmerge
```

##Documentation:

####RecursiveObjectMerge();
```javascript
var RecursiveObjectMerge = require('recursiveobjectmerge');

RecursiveObjectMerge(
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
