
// give an array, find the smallest element then swap at array[1]
// continue until you find the next smallest and swap at arrray[2]

// let smallestNumber;

// for (let i  = 0; i < array.length; i++) {
//   smallestNumber = array[i];
//   for (let j = 0; j < array.length - i; j++) {
//     if (array[j] < smallestNumber) {
//       smallestNumber = array[j]; 
//     }
//     if (array[j + 1] === undefined) {
//       array[i] = smallestNumber
//     }
//   }
// }

// ...

//select the first 
//loop through the array
//create sub loop comparing each next to it
//save smallest each time
//swap smallest with array[i], putting index there..


// GPT PSUEDO CODE
// SelectionSort(A)
// 1. for i = 1 to length(A) - 1
// 2.     min_index = i
// 3.     for j = i + 1 to length(A)
// 4.         if A[j] < A[min_index]
// 5.             min_index = j
// 6.     exchange A[i] with A[min_index]

// O(n^2) Quadratic time

// implementation

function selectionSort(array) {
  console.log(array);
  for (let i = 0; i < array.length - 1; i++) {
    let min_index = i;
    for(let j = i + 1; j < array.length; j++) {
      if (array[j] < array[min_index]) {          
        min_index = j;
      }
    }
    let swapNumber = array[i];
    array[i] = array[min_index];
    array[min_index] = swapNumber;
  }
  console.log(array);
}


selectionSort([1,2,1,3,4,5,1,23,45])
selectionSort([1,2,1])

// inner loop changes min_index, then swaps
// don't have to compare last element bc already sorted (only one left)