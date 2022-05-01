const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  
  var namber = String(n).split('').map(Number)
    return Math
    .max(...namber
      .map((el,x)=>{var sum = namber
        .slice(); sum
        .splice(x,1); return Number( sum
          .join(''))}))
}



module.exports = {
  deleteDigit
};
