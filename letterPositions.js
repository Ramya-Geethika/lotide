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
const letterPositions = function(sentence) {
  const results = {};
  for (let letter of sentence) {
    if (letter != ' ') {
      results[letter] = [];
    }
  }
  for (let i = 0; i < sentence.length; i ++) {
    if (sentence[i] != ' ') {
      results[sentence[i]].push(i);

    }
  }
  return results;
};
 

console.log(letterPositions("hello"));
assertArraysEqual(letterPositions("hello").e, [1]);





