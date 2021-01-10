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
  return arr.sort((a,b)=> a - b);
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

function pivot (array,left=0,right=array.length-1) {
    let pivotValue = array[left];
    let shift = left;
    for(let i = left+1; i <= right; i++){
        if(array[i] < pivotValue) {
            shift++;
            [array[shift],array[i]] = [array[i],array[shift]];  
        }
    }
    [array[shift],array[left]] = [array[left],array[shift]];
    return shift;
}

function quickSort(array,left=0,right=array.length-1) {
    if(left < right) {
    let pivotIndex = pivot(array,left,right);
    quickSort(array,left,pivotIndex-1);
    quickSort(array,pivotIndex+1,right);
    }
    return array;
}


