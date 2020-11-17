// A small frog wants to get to the other side of a river. The frog is initially located on one bank of the river (position 0) and wants to get to the opposite bank (position X+1). Leaves fall from a tree onto the surface of the river.

// You are given an array A consisting of N integers representing the falling leaves. A[K] represents the position where one leaf falls at time K, measured in seconds.

// The goal is to find the earliest time when the frog can jump to the other side of the river. The frog can cross only when leaves appear at every position across the river from 1 to X (that is, we want to find the earliest moment when all the positions from 1 to X are covered by leaves). You may assume that the speed of the current in the river is negligibly small, i.e. the leaves do not change their positions once they fall in the river.

// For example, you are given integer X = 5 and array A such that:

//   A[0] = 1
//   A[1] = 3
//   A[2] = 1
//   A[3] = 4
//   A[4] = 2
//   A[5] = 3
//   A[6] = 5
//   A[7] = 4
// In second 6, a leaf falls into position 5. This is the earliest time when leaves appear in every position across the river.

// Write a function:

// function solution(X, A);

// that, given a non-empty array A consisting of N integers and integer X, returns the earliest time when the frog can jump to the other side of the river.

// If the frog is never able to jump to the other side of the river, the function should return −1.

// For example, given X = 5 and array A such that:

//   A[0] = 1
//   A[1] = 3
//   A[2] = 1
//   A[3] = 4
//   A[4] = 2
//   A[5] = 3
//   A[6] = 5
//   A[7] = 4
// the function should return 6, as explained above.

// Write an efficient algorithm for the following assumptions:

// N and X are integers within the range [1..100,000];
// each element of array A is an integer within the range [1..X].

function solution(X, A) {
    // X is the position of the opposite river bank
    // A is an array of N integers representing fallen leaves
    // Write an algorithm that returns the earliest time (index of A = seconds) the frog can jump onto the opposite bank

    // Either we assume the starting leaf will be 1 or we isolate the lowest integer in A
    // This step probably isn't necessary
    // Not necessary at all
    // let firstLeaf = Math.min(...A);

    // Now we can use a couple of flags to check if X is found and if previous leaves have already fallen
    let xFound = false;
    let leafCount = 0;
    let earliestTimeToJump = 0;

    for (let i = 0; i < A.length; i++) {
        // Probably a bloated if statement coming up
        // Check if X is encountered
        if (A[i] === X) {
            xFound = true;
        }

        // Check if all leaves have fallen
        // So we check if all leaves are present before X is encountered
        if (A[i] < (X - 1) && !xFound) {
            // console.log(firstLeaf);
            // Idea here is that leafCount should never be more than X - 1, that's why we implement this check
            if (leafCount < (X - 1)) {
                leafCount++;
            }
        }

        // Now we just check if leafCount = X - 1 and if xFound is true
        // If so, return i, if not return -1 because the jump can't happen
        if (leafCount === (X - 1) && xFound) {
            earliestTimeToJump = i;
        } else if (leafCount < (X - 1) && xFound) {
            earliestTimeToJump = -1;
        }

        // Break out of the loop as soon as one of our conditions are met
        if (earliestTimeToJump !== 0) {
            break;
        }
    }

    // return earliestTimeToJump;
    console.log(earliestTimeToJump);
}

solution(5, [1, 3, 1, 4, 2, 3, 5, 4]);