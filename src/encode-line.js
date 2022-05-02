const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
 function encodeLine(str) {
  let itog = '';
  let index = 0;
  while (index < str.length) {
    let bukva = str[index];
    let koef = 1;
    let indexElem = str[index + koef];
    while (bukva === indexElem) {
      koef += 1;
      indexElem = str[index + koef];
    }
    index += koef;
    if (koef > 1) {
      itog += `${koef}`;
    }
    itog += `${bukva}`;
  }
  return itog;
}

module.exports = {
  encodeLine
};
