import { NotImplementedError } from '../extensions/index.js';

/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */
export default function getSumOfDigits(n) {

  let figures = '' + n;
  let sum = 0;
  let newSum = 0;
  
  // function getSum()
  for (let i=0; i < figures.length; i++){
  sum+=+figures[i];
  }
   let result = sum.toString().replace('0','');
  
   if (result.length<=3){
    for (let i=0; i < result.length; i++){
      newSum+=+result[i];
      }
      result = newSum.toString();

   }
   
   return parseInt(result);
    
    }
