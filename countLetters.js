// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

// TEST CODE
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);

const countLetters = function(sentence) {
  const result = {};
  let array = sentence.split('');
  // console.log(array);
  for (const item of array) {
    if (item !== ' ') {
      result[item] = 0;
    }
  }
  for (const item of array) {
    if (item !== ' ') {
      result[item] += 1;
    }
  }
  return result;

};

module.exports = countLetters;

// console.log(countLetters("lighthouse in the house"));

/*{
  l: 1,
  i: 2,
  g: 1,
  h: 4,
  t: 2,
  o: 2,
  u: 2,
  s: 2,
  e: 3,
  n: 1,
} */



