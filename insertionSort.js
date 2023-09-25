let array = [5,2,4,6,1,3]

function insertionSort(A) {
  console.log(A);
  i = 0;


  // this iterates through the given array
  for (i = 0; i < A.length; i++) {
    let key = A[i];
    let j = i - 1;
    
    // this iterates through current cards
    // compare the current old card in hand to current card just picked up
    // if old card bigger, push it right one position
    // go back one in hand and check again
    while (j >= 0 && A[j] > key) {
      A[j+1] = A[j];
      j = j - 1;
    }
    A[j + 1] = key;
  }

  console.log(A);
}

insertionSort(array);


function invertedInsertionSort() {
  
}