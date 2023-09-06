function binarySearch(list, element) {
  let indexstart = 0; //start of the index
  let indexend = list.length - 1; //end of the index 

  while (indexstart <= indexend) {
    let indexmid = Math.floor((indexstart + indexend) / 2); //middle index 

    if (list[indexmid] === element) {
        //return true;
	return indexmid;
    }

    if (list[indexmid] < element) {
      indexstart = indexmid + 1;//checking the left side
    } else {
      indexend = indexmid - 1;//checking the right side
    }
  }
  return -1;
}
/*
// Example usage:
const sortedList = [1, 3, 5, 7, 9, 11, 13, 15];
const elementToFind = 7;
const index = binarySearch(sortedList, elementToFind);

if (index !== -1) {
  console.log(`Element ${elementToFind} found at index ${index}`);
} else {
  console.log(`Element ${elementToFind} not found in the list.`);
}
*/

//referenced: https://www.geeksforgeeks.org/binary-search-in-javascript/
//https://medium.com/@jeffrey.allen.lewis/javascript-algorithms-explained-binary-search-25064b896470
