let array = [5,2,4,6,1,3,99,23,4,3,1,532,4234,2,432,4,2,1,1,1,1,324,2,432,33333333,0, -4]


function insertionSort (arr, n) {
  for (let i = 0; i < n; i++) {
    let key = arr[i];
    let j = i - 1;
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