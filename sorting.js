function bubbleSort(array) {
    const arr = array.slice();
    for(let i = 0; i < arr.length-1; i++) {
        for(let j = 0; j < arr.length-1-i; j++) {
            if(arr[j] > arr[j+1]) {
                [arr[j],arr[j+1]] = [arr[j+1],arr[j]];
            }
        }
    }
    return arr;
}

function selectionSort(array) {
    if(array.length > 0) {
        let arr = array.slice();
        for(let i = 0; i <= arr.length - 1; i++) {
            let min = arr[i];
            for(let j = i; j <= arr.length - 1; j++) {
                if(min > arr[j]) {
                    min = arr[j];
                    if(min !== arr[i]) {
                        [arr[i],arr[j]] = [arr[j],arr[i]];
                    }
                }
            }
        }
        return arr;
    }
    return [];
}




function insertionSort(array) {
   if(array.length > 0) {
       let arr = [array[0]];
       for(let i = 1; i <= array.length-1; i++) {
           arr[i] = array[i];
           for(let j = arr.length -1; j >= 0; j--) {
               if(arr[j] < arr[j-1]) {
                   [arr[j-1],arr[j]] = [arr[j],arr[j-1]];
               }
           }
       }
       return arr;
   }
   return [];
}


function merge(arr1,arr2) {
    const arr = [...arr1,...arr2];
  return bubbleSort(arr);
}

function mergeSort(array) {
    if(array.length <= 1) {
        return array;
    } 
    let midPoint = Math.floor(array.length/2);
    let lhsArray = mergeSort(array.slice(0,midPoint));
    let rhsArray = mergeSort(array.slice(midPoint));
    
    return merge(lhsArray,rhsArray);
}

//Swapping array elements via ES6 array destructuring
function swap(arr, x, y) {
    [arr[x], arr[y]] = [arr[y], arr[x]];
  }
  
  //Pivot function returns the fixed pivot point
  function pivot(arr, left = 0, right = arr.length - 1) {
    let shift = left;
    for (let i = left + 1; i <= right; i++) {
      //Move all the small elements on the left side
      if (arr[i] < arr[left]){
          shift++;
        swap(arr, i, shift);
      } 
    }
  
    //Finally swapping the last element with the left
    swap(arr, left, shift);
    return shift;
  }
  
  function quickSort(array, left = 0, right = array.length - 1) {
    if (left < right) {
      let pivotIndex = pivot(array, left, right);
  
      //Recusrively calling the function to the left of the pivot and to the right of the pivot
      quickSort(array, left, pivotIndex - 1);
      quickSort(array, pivotIndex + 1, right);
    }
    return array;
  }