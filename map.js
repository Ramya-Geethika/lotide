const assertArraysEqual = function(arr1, arr2) {
  if (eqArrays(arr1, arr2)) {
    return console.log(`✅✅✅ Assertion Passed: ${arr1} === ${arr2}`);
  } else {
     return console.log(`🛑🛑🛑 Assertion Failed: ${arr1} !== ${arr2}`);
  }
};

const eqArrays = function(arr1, arr2){
  if(arr1.length != arr2.length){
    return false;
  } else {
    for(let i=0; i< arr1.length; i++){
      if(arr1[i] != arr2[i]){
        return false;
      }
    }
    return true;
  }
}
 
const words = ["ground", "control", "to", "major", "tom"];
const words1 = ["Ontario", "Quebec", "BritishColombia", "Alberta", "Manitoba", "NewBrunswick", "Newfoundland"];


const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
}

const results1 = map(words, word => word[0]);
console.log(results1);
console.log(assertArraysEqual(results1, ['g', 'c', 't', 'm', 't']));

const results2 = map(words1, word => word[5]);
console.log(results2);
console.log(assertArraysEqual(results2, ['i', 'c', 's', 't', 'o', 'u', 'u']));

const results3 = map(words, word => word.length);
console.log(results3);
console.log(assertArraysEqual(results2, [6, 7, 2, 5, 3]));

