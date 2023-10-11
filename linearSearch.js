// loop through n
// compare each key to search search param
// return when found
// 
// initialization
//   i is equal to zero
// 
// maintenance
//   i continues when less than the length of the array
// 
// termination
//   i ends when item found or we reach length of array
// 

const linearSearch = (array, item) => {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === item) {
      console.log(`found ${array[i]} at position ${i}`)
      return array[i];
    }   
  }
  console.log('not here bruh')
}

linearSearch([1,2,3], 2)
linearSearch([1,2,3, 'cat'], 'cat')
linearSearch([1,2,3, 'cat'], 'dog')