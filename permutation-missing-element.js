// An array A consisting of N different integers is given.The array contains integers in the range[1..(N + 1)], which means that exactly one element is missing.

// Your goal is to find that missing element.

// Write a function:

//   function solution(A);

// that, given an array A, returns the value of the missing element.

// For example, given array A such that:

// A[0] = 2
// A[1] = 3
// A[2] = 1
// A[3] = 5
// the function should return 4, as it is the missing element.

// Write an efficient algorithm for the following assumptions:

//   N is an integer within the range[0..100, 000];
// the elements of A are all distinct;
// each element of array A is an integer within the range[1..(N + 1)].

// My solution that scores 50% lel

// function solution(A) {

//   if (A.length === 0) {
//     return 1;
//   }

//   let sortedArray = A.sort((a, b) => {
//     return a - b;
//   });

//   let missingElement;

//   // Now we compare the sorted elements to determing the missing element
//   for (let i = 0; i < sortedArray.length; i++) {
//     let currentElement = sortedArray[i];
//     let nextElement = sortedArray[i + 1];

//     if (i === (sortedArray.length - 1)) {
//       break;
//     }

//     if ((nextElement - currentElement) !== 1) {
//       missingElement = currentElement + 1;
//     }
//   }

//   return missingElement;

// }

// solution([1, 5, 2, 4, 3, 7, 10, 9, 8]);

// Somebody else's very succinct solution
// Scores 100%
function newSolution(A) {
  // If array is empty, return 1
  if (A.length === 0) return 1;

  // Use reduce function on array
  // All this does is it adds all of the numbers inside the array
  // actualSum holds the value of the added numbers and i is the next element in the array
  let actualSum = A.reduce(function (actualSum, i) {
    return actualSum + i;
  });

  // This is some magic
  let requiredSum = (A.length + 1) * (A.length + 2) / 2;

  return requiredSum - actualSum;
}

newSolution([1, 5, 2, 4, 3, 7, 10, 9, 8]);