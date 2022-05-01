const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
 const chainMaker = {
  itog:[],
  getLength() {
    return this.itog.length;
  },
  addLink(item) {
    this.itog.push(`( ${item} )`);
    return this;
  },
  removeLink(position) {
   if(this._strok(position)){
     if(position<1 || position>this.getLength()){
       this._pos()
       throw new Error("Removing link position is out of range!");
     }
     let index =position - 1;
     this.itog.splice(index ,1);
     return this;
   }
   this._pos();
   throw new Error("Position must be intager number!")
  },
  reverseChain() {
    this.itog.reverse();
    return this
  },
  finishChain() {
    let chain=this._getChain();
    this._pos();
    return chain;
  },
_strok(sum){
return typeof sum === "number" && (sum ^ 0) === sum ;
},
_pos(){
  this.itog.length = 0;
},
_getChain(){
  return this.itog.join("~~");
}
};

module.exports = {
  chainMaker
};
