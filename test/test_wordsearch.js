const chai = require('chai');
const assert = chai.assert;

const wordSearch = require('../wordsearch.js');

describe("#wordSearch()", () => {
  it("should return false if the word is not present", () => {
    const result = wordSearch([
      ['A', 'W', 'C', 'F', 'Q', 'U', 'A', 'L'],
      ['S', 'E', 'I', 'N', 'F', 'E', 'L', 'D'],
      ['Y', 'F', 'C', 'F', 'Q', 'U', 'A', 'L'],
      ['H', 'M', 'J', 'T', 'E', 'V', 'R', 'G'],
      ['W', 'H', 'C', 'S', 'Y', 'E', 'R', 'L'],
      ['B', 'F', 'R', 'E', 'N', 'E', 'Y', 'B'],
      ['U', 'B', 'T', 'W', 'A', 'P', 'A', 'I'],
      ['O', 'D', 'C', 'A', 'K', 'U', 'A', 'S'],
      ['E', 'Z', 'K', 'F', 'Q', 'U', 'A', 'L'],
    ], 'FRANK');

    assert.isFalse(result);
  });

  it("should return true if the word is present horizontally", () => {
    const result = wordSearch([
      ['A', 'W', 'C', 'F', 'Q', 'U', 'A', 'L'],
      ['S', 'E', 'I', 'N', 'F', 'E', 'L', 'D'],
      ['Y', 'F', 'C', 'F', 'Q', 'U', 'A', 'L'],
      ['H', 'M', 'J', 'T', 'E', 'V', 'R', 'G'],
      ['W', 'H', 'C', 'S', 'Y', 'E', 'R', 'L'],
      ['B', 'F', 'R', 'E', 'N', 'E', 'Y', 'B'],
      ['U', 'B', 'T', 'W', 'A', 'P', 'A', 'I'],
      ['O', 'D', 'C', 'A', 'K', 'U', 'A', 'S'],
      ['E', 'Z', 'K', 'F', 'Q', 'U', 'A', 'L'],
    ], 'SEINFELD');

    assert.isTrue(result);
  });

  it("should return true if the word is present vertically", () => {
    const result = wordSearch([
      ['A', 'W', 'C', 'A', 'Q', 'U', 'A', 'L'],
      ['S', 'E', 'I', 'R', 'F', 'E', 'L', 'D'],
      ['Y', 'A', 'L', 'R', 'L', 'Y', 'A', 'L'],
      ['H', 'M', 'J', 'A', 'E', 'V', 'R', 'G'],
      ['W', 'H', 'C', 'Y', 'Y', 'E', 'R', 'L'],
      ['B', 'F', 'R', 'E', 'N', 'E', 'A', 'B'],
      ['U', 'B', 'T', 'W', 'A', 'P', 'Y', 'I'],
      ['O', 'D', 'C', 'A', 'K', 'U', 'A', 'S'],
      ['E', 'Z', 'K', 'F', 'Q', 'U', 'A', 'L'],
    ], 'ARRAY');

    assert.isTrue(result);
  });

  it("should return true if the word is present vertically (backwards)", () => {
    const result = wordSearch([
      ['A', 'W', 'C', 'A', 'Q', 'U', 'A', 'L'],
      ['S', 'E', 'I', 'R', 'F', 'E', 'L', 'D'],
      ['Y', 'A', 'L', 'R', 'S', 'Y', 'A', 'L'],
      ['H', 'M', 'J', 'A', 'R', 'V', 'R', 'G'],
      ['W', 'H', 'C', 'Y', 'E', 'E', 'R', 'L'],
      ['B', 'F', 'R', 'E', 'G', 'E', 'A', 'B'],
      ['U', 'B', 'T', 'W', 'G', 'P', 'Y', 'I'],
      ['O', 'D', 'C', 'A', 'O', 'U', 'A', 'S'],
      ['E', 'Z', 'K', 'F', 'P', 'U', 'A', 'L'],
    ], 'POGGERS');

    assert.isTrue(result);
  });

  it("should return true if the word is present horizontally (backwards)", () => {
    const result = wordSearch([
      ['A', 'W', 'C', 'A', 'Q', 'U', 'A', 'L'],
      ['S', 'E', 'I', 'R', 'F', 'E', 'L', 'D'],
      ['Y', 'A', 'Y', 'A', 'R', 'R', 'A', 'L'],
      ['H', 'M', 'J', 'A', 'E', 'V', 'R', 'G'],
      ['W', 'H', 'C', 'L', 'L', 'E', 'R', 'L'],
      ['B', 'F', 'R', 'E', 'N', 'E', 'A', 'B'],
      ['U', 'B', 'T', 'W', 'A', 'P', 'L', 'I'],
      ['O', 'D', 'C', 'A', 'K', 'U', 'A', 'S'],
      ['E', 'Z', 'K', 'F', 'Q', 'U', 'A', 'L'],
    ], 'ARRAY');

    assert.isTrue(result);
  });

});