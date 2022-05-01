const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
 if(!(members instanceof Array))return false;
 let sum = [];
 let z = members.length;
 for(let i=0;i<z;i++){
   if(typeof members[i]=="string"){
     let rew = members[i].trim();
     sum.push(rew[0].toUpperCase());

   }
 }
 return sum.sort().join("");
}

module.exports = {
  createDreamTeam
};
