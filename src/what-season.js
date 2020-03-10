module.exports = function getSeason(date) {
  if(arguments.length==0) return "Unable to determine the time of year!";
  if(typeof(date)!="object") throw "Error";
  if(!date.getFullYear) throw "Error";
  if(date.toDateString()=="Invalid Date") throw "Error";
  
  
  let month=date.getMonth();

  if(month>=0&&month<2||month==11) return "winter";
  if(month>=2&&month<5) return "spring";
  if(month>=5&&month<8) return "summer";
  if(month>=8&&month<11) return "autumn";

};
