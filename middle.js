const eqArrays = require('./eqArrays.js');

const middle = function(array) {
  let mid = 0;
  let result = [];
  let size = array.length;
  if (size <= 2) {
    return [];
  }
  if (size % 2 !== 0) {
    mid = array[Math.floor(size/2)];
    result [0] = mid;
    return result;
  }
  if (size % 2 === 0) {
    mid = size/2;
    result [1] = array[mid];
    result [0] =  array[mid - 1];
    return result;
  } 
};
module.exports = middle;



 








