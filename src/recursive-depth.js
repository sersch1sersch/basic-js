const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class itogCalculator with method calculateitog
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const itogCalc = new itogCalculator();
 * itogCalc.calculateitog([1, 2, 3, 4, 5]) => 1
 * itogCalc.calculateitog([1, 2, 3, [4, 5]]) => 2
 * itogCalc.calculateitog([[[]]]) => 3
 *
 */
let hasNestedArray  = (arr)=> arr.some(x=>Array.isArray(x));
class DepthCalculator {
  
  calculateDepth(arr ) {
    let itog=1;
    if(hasNestedArray(arr)){
      let summ=arr.reduce((y,z)=>y.concat(z),[]);
      return itog + this.calculateDepth(summ);
    }
    return itog
  }
}

module.exports = {
  DepthCalculator
};
