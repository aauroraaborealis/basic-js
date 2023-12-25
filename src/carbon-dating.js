const { NotImplementedError } = require('../extensions/index.js');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 * 
 * @param {String} sampleActivity string representation of current activity 
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 * 
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
function dateSample(sampleActivity) {
  if (typeof sampleActivity !== 'string') {
    return false;
  }
 
  let SAMPLE_ACTIVITY = parseFloat(sampleActivity);

  if (isNaN(SAMPLE_ACTIVITY) || SAMPLE_ACTIVITY <= 0 || SAMPLE_ACTIVITY >= 15 || SAMPLE_ACTIVITY > 9000) {
   return false;
  }
 
  const MODERN_ACTIVITY = 15;
  const HALF_LIFE_PERIOD = 5730;
 
  let age = Math.log(MODERN_ACTIVITY / SAMPLE_ACTIVITY) / (0.693 / HALF_LIFE_PERIOD);
 
  return Math.abs(Math.ceil(age));
 }


module.exports = {
  dateSample
};
