module.exports = function createDreamTeam(members) {
  if(!Array.isArray(members)) return false;

  let DTname = "";
  let arr = new Array();
  let j;
  let st;

  for(let i=0; i< members.length; i++){

    if(typeof(members[i])=="string"){
      j = 0;
      while(members[i][j]==" ") {j++;}
      st = members[i][j].toUpperCase();
      arr.push(st.charCodeAt(0));
    }
  }

  QuickSort(arr,0,arr.length-1);

  for (let i=0;i<arr.length; i++){
    DTname += String.fromCharCode(arr[i]);
  }

  return DTname;
};



function QuickSort(a,left0,right0){
  var left = left0;
  var right = right0;

  if(left < right) {
    
    var mid = a[Math.floor(left + (right-left)/2)];

    while(left <= right){
      
      
      while(a[left]<mid) {left++;}
      while(a[right]>mid) {right--;}

      if(left<=right){
        var temp = a[left];
        a[left] = a[right];
        a[right] = temp;
        left++;
        right--;
      }
    }

    if(left0<left-1) QuickSort(a,left0,left-1);
    if(left<right0) QuickSort(a,left,right0);

  }
  
    return a;
  };
