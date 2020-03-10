const chainMaker = {
  len: 0,
  chain: "",

  getLength() {
    return this.len;
  },

  addLink(value) {
    if(this.len > 0) this.chain +="~~";
    if(arguments.length==0) this.chain += "( )";
    else this.chain += "( " + value + " )";
    this.len++;

    return this;
  },

  removeLink(position) {
    if(typeof(position)!="number") {
      this.finishChain();
      throw "Error"
    };

    if(Math.ceil(position)-position>0){
      this.finishChain();
      throw "Error";
    };

    if(position<1||position>this.len) {
      this.finishChain();
      throw "Error";
    }

    var chainLen = this.chain.length;
    var numSc = 0;
    var i = -1;
    var j;

    while(numSc<position){
      i++;
      if (this.chain[i]=="(") {
        if((i==0) || (i>0 && this.chain[i-1]=="~")) numSc++;
      }  
    }

    j=i+2;
    while(this.chain[j]!=")" || (j<chainLen-1 && this.chain[j]==")" && this.chain[j+1]!="~")) {j++;}

    this.chain = this.chain.slice(0,i) + this.chain.slice(j+3,chainLen); 
    this.len--;

    return this;
  },

  reverseChain() {
    var chainLen=this.chain.length;
    let newChain = "";

    var start=chainLen-1;
    var finish;

    while(start>-1){
      finish=start + 1;

      while((this.chain[start]!="(")||(start>0 && this.chain[start]=="(" && this.chain[start-1]!="~")) {start--;}

      newChain += this.chain.slice(start,finish);
      if(start>0) newChain += "~~";
      start -= 3;
      
    }

    this.chain = newChain;
    return this;
  },

  finishChain() {
    var newChain = this.chain;
    this.chain= "";
    this.len = 0;
    return newChain;
  }
};

module.exports = chainMaker;
