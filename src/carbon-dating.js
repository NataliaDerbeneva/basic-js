const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  
  if(sampleActivity==""||typeof(sampleActivity)!="string") return false;
  if( !(/^[0-9]+/.test(sampleActivity))) return false;
  var sample=parseFloat(sampleActivity);
  if(sample<=0||sample>15) return false;

  let k = 0.693/HALF_LIFE_PERIOD;
  let t = Math.log(MODERN_ACTIVITY/sample) / k; 
  return Math.ceil(t);
};
