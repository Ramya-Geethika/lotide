const assert = require('chai').assert;
const tail = require('../tail');

describe("#tail", () => {
  it("returns 2 for ['Hello','Lighthouse','Labs']", () => {
    assert.deepEqual(tail(['Hello','Lighthouse','Labs']).length, 2);
  }); 
  it("Check the length of the  original array " , () => {
   assert.deepEqual(["Yo Yo", "Lighthouse", "Labs"].length, 3); 
  });
});