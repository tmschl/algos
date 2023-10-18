let array = [5,2,4,6,1,3,99,23,4,3,1,532,4234,2,432,4,2,1,1,1,1,324,2,432,33333333,0, -4]


function insertionSort (arr, n) {
  // initialization, termination & maintenance (induction and base case)
  // go through the array
  for (let i = 0; i < n; i++) {
    // save current value in mem
    let key = arr[i];
    //set a new iterator to compare with current mem
    let j = i - 1;
    // create a while loop that says as long as new iterator
    // is abouve zero and the value of it compared to key value
    // is greater, continuing looping through sub-array
    // so we can find where to put key (smallest to largets
    // so the key goes the right of arr[j] which is smaller than it...)
    while (j >= 0 && arr[j] > key) {
      arr[j + 1] = arr[j];
      j = j - 1;
    }
    arr[j + 1] = key;
    console.log(arr);
  }
}

insertionSort(array, 6);
insertionSort(array, array.length);


function invertedInsertionSort(A) {
  for (i = A.length - 1; i >= 0; i--) {
    let key = A[i];
    let j = i + 1; 
    while ( j < A.length && A[j] > key) {
      A[j-1] = A[j];
      j = j + 1;
    }
    A[j - 1 ] = key;
  }
  console.log('inverted', A);
}

invertedInsertionSort(array);


// pseudo linear search
// arr to n; find x
// . if arr[i] === x return arr[i]
