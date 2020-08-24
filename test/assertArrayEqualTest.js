const assertEqual = require('../assertEqual');
const assertArrayEqual = require('../assertArrayEqual');

console.log(assertArrayEqual([1, 2, 3], [2, 4, 5]));
console.log(assertArrayEqual(["1", "2", "3"], ["2", "4", "5"]));
console.log(assertArrayEqual(["1", "2", "3"], ["1", "2", "3"]));
console.log(assertArrayEqual([2, 4, 5], [2, 4, 5]));