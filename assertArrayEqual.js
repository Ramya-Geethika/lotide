const eqArrays = require('./eqArrays.js');


const assertArrayEqual = function(actual, expected) {
  let result = "";
  result = eqArrays(actual, expected);
  if (result) {
    console.log(`✅✅✅  Assertion Passed: ${actual} === ${expected}`);
  } else  {
    console.log(`🔴🔴🔴  Assertion Failed: ${actual} !== ${expected}`);
  }
};
  
  module.exports = assertArrayEqual;







