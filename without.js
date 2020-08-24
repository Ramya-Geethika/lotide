const assertArraysEqual = function(arr1, arr2) {
  if (eqArrays(arr1, arr2)) {
    return console.log(`✅✅✅ Assertion Passed: ${arr1} === ${arr2}`);
  } else {
     return console.log(`🛑🛑🛑 Assertion Failed: ${arr1} !== ${arr2}`);
  }
};

const eqArrays = function(arr1, arr2) {
  if(arr1.length != arr2.length) {
    return false;
  } else {
    for(let i = 0; i < arr1.length; i ++){
      if (arr1[i] != arr2[i])  {
        return false;
      }
    }
    return true;
  }
};

const without = function(source, itemsToRemove){
  let arr = source.slice(0);
  for (let i=0; i< arr.length; i++){
    for (let item of itemsToRemove){
      if(item === arr[i]){
        arr.splice(i, 1);
      }
    }
  }
  return arr;
};
module.exports = without;

/*console.log(without([1, 2, 3], [1])); 
console.log(without(["1", "2", "3"], [1, 2, "3"]) );
console.log(without([1, 2, 3], [1,2]));
console.log(assertArraysEqual(without([1,2,3],[1,2]),[3]));
const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); 
assertArraysEqual(words, ["hello", "world", "lighthouse"]);*/

