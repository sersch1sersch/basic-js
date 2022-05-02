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
function encodeLine(str ) {
  var arr = [],
  counter=1;
let t='';
for (var i = 0; i < str.length; i++) {
  if (str[i] === str[i + 1]) {
      counter++;
  }
   else {
      arr.push([counter, str[i]]);
      counter=1;
  }
}

for(z=0;z<arr.length;z++){
let e=arr[z];
t+=e.join('')
}
console.log(t)
return t;
}

module.exports = {
  encodeLine
};
