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


const eqObjects = function(object1, object2) {
  if(Object.keys(object1).length !== Object.keys(object2).length){
    return false;
  }
  for(let obj in object1){
    if(Array.isArray(object1[obj]) && Array.isArray(object2[obj])){
      if(!eqArrays(object1[obj], object2[obj])){
        return false;
      }  
    } else {
      if(object1[obj] !== object2[obj]){
        return false;
      }
    }
  }
  return true;
};
const assertObjectsEqual = function(object1, object2) {
  // Implement me!
  const inspect = require('util').inspect;
  if (eqObjects(object1, object2)) {
    return (console.log(`✅✅✅Assertion Passed: [${inspect(object1)}] === [${inspect(object2)}]`));
  } else {
    return (console.log(`🛑🛑🛑Assertion failed: [${inspect(object1)}] !== [${inspect(object2)}]`));
  }
};
assertObjectsEqual({l:'1', h:'2', b:'r'},{l:'1', h:'2', b:'r'});
assertObjectsEqual({l:'1', h:'2', b:'r'},{l:'1', h:'2'});
assertObjectsEqual({l:'1', h:'2', b:'r'},{l:'1', h:'2', b:'t'});
assertObjectsEqual({l:'1', h:'2'},{l:'1', h:'2', b:'r'});
assertObjectsEqual({l:'4', h:'2', b:'r'},{l:'1', h:'2', b:'r'});
assertObjectsEqual({l:'a', h:['v','t'], b:'t'},{l:'a', h:['v','t'], b:'t'});
assertObjectsEqual({l:'a', h:['v','t'], b:'t'},{l:'a', h:['y','t'], b:'t'});