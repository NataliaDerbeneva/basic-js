module.exports = function transform(arr) {
    
    var arrayClass={}.toString.call(arr).slice(8,-1);
    if(arrayClass!="Array") throw "Error";

    let len = arr.length;
    let arr2 = new Array();
    var elem;
    var i=0;


    while (i<len) {
        elem = arr[i];

        if(elem=="--discard-prev") {
            if(i>0) {
                if(arr[i-1]!="--discard-prev" && arr[i-1]!="--discard-next" && arr[i-1]!="--double-prev" && arr[i-1]!="--double-next") arr2.pop();
            } 
        } else if(elem=="--double-prev") {
            if(i>0) {
                if(arr[i-1]!="--discard-prev" && arr[i-1]!="--discard-next" && arr[i-1]!="--double-prev" && arr[i-1]!="--double-next") arr2.push(arr[i-1]);
            }
        } else if(elem=="--discard-next") {
           if(i+1<len && arr[i+1]!="--discard-prev" && arr[i+1]!="--discard-next" && arr[i+1]!="--double-prev" && arr[i+1]!="--double-next") {i++;}
        } else if(elem=="--double-next") {
            if(i+1<len && arr[i+1]!="--discard-prev" && arr[i+1]!="--discard-next" && arr[i+1]!="--double-prev" && arr[i+1]!="--double-next") {arr2.push(arr[i+1]);}
        } 
         else arr2.push(elem);

        i++;
    }

    return arr2;
};
