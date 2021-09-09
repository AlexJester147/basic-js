import { NotImplementedError } from '../extensions/index.js';

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
 export default function transform(arr) {
  let tran = 0;
  for (let i=0; i < arr.length; i++){


    if (arr === Array) {
      throw new Error("'arr' parameter must be an instance of the Array!");
    }

    else {

    

    switch(arr[i]){
      case '--double-prev':
        arr[i]=arr[i-1];
        break;
      case '--double-next':
        arr[i]=arr[i+1];
        break;
      case '--discard-next':
        arr.splice(i,2);
        break;
      case '--discard-prev':
        arr.splice(i-1,2);
        break;
    }
  }

  }

return arr;

}