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

const assertArraysEqual = function(arr1, arr2) {
  if (eqArrays(arr1, arr2)) {
    return console.log(`✅✅✅ Assertion Passed: ${arr1} === ${arr2}`);
  } else {
     return console.log(`🛑🛑🛑 Assertion Failed: ${arr1} !== ${arr2}`);
  }
};

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



 
assertArraysEqual(middle([1, 2, 3, 4]),[2,3]);
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]),[3, 4]); 
assertArraysEqual(middle([]),[]); 
assertArraysEqual(middle([1,2]),[]); 
assertArraysEqual(middle([1]),[]); 
assertArraysEqual(middle([1, 3, 4, 5, 6 ,7, 8, 9]),[5, 6]);







