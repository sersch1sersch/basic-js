const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix 
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
 
function countCats(/* matrix */) {
  
  let namber=0;
  for(let i=0;i<countCats.length;i++){
    let w=countCats[i];
    let e=countCats[i].join(' ')
    for(let z=0;z<e.length;z++){
    let v = e[z];
    if(!isFinite(v)){
      namber++
    }
  }
  }
  
  return namber/2
  }
  


module.exports = {
  countCats
};
