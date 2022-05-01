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
 
 function countCats(countCats) {
  let namber=0;
  let cat='^^';
for(let i=0;i<countCats.length;i++){
  let w=countCats[i];
  console.log(w)
  for(let z=0;z<w.length;z++){
    let p=w[z];
    console.log(p)
    if(p===(cat)){
    namber+=1
  }
  }
}
return namber
}
  


module.exports = {
  countCats
};
