module.exports = function calculateHanoi(disksNumber, turnsSpeed) {

  var rsTurnsNum,turnsNum;
  var secondsNum;
  var num;
  var s;
  
  turnsNum = power(disksNumber,2);
  
  secondsNum = turnsNum/(turnsSpeed/3600.0);
    
  var result = {
    turns: turnsNum,
    seconds: secondsNum
  };
  
  return result;
}
  
function power(step,osn){
  if(step == 0) return 1;
  return osn * power(step-1,osn);
}