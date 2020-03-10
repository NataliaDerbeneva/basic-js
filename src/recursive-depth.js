module.exports = class DepthCalculator {
    constructor() {
        this.depth = 0;
        this.inDepth = 0;
        this.len = 0;
    }
    
    calculateDepth(arr) {
  
        this.inDepth++;
        for(let i=0;i<arr.length;i++){
            if(Array.isArray(arr[i])) this.calculateDepth(arr[i]);
        }
        
        if(this.depth < this.inDepth) this.depth = this.inDepth;
        this.inDepth--;
    
        if(this.inDepth==0){
          var res = this.depth;
          this.depth = 0;
          this.len = 0;
          return res;
        }
    
        return     
    }
    };