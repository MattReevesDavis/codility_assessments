function solution(A) {
    let Q = 0;
    let numberOfHillsAndValleys = 0;

    for (let i = 0; i < A.length; i++) {
        // Get current value of P
        // Get next value of P
        // If values are the same, check if next value of P increases
        // If so, we have a valley
        let currentElement = A[i];
        let nextElement = A[i + 1];

        if (currentElement === nextElement) {
            if (A[i + 2] > nextElement) {
                // Valley
                numberOfHillsAndValleys++;
            }
        }

        if (nextElement > currentElement) {
            if (A[i + 2] < nextElement) {
                // Hill
                numberOfHillsAndValleys++;
            }
        }

        if (Q === A.length - 1) {
            if (currentElement > A[i - 1]) {
                // Hill
                numberOfHillsAndValleys++;
            }
        }

        Q++;
    }

    // This is so very wrong, just running out of time!
    return numberOfHillsAndValleys;

}

solution([2, 2, 3, 4, 3, 3, 2, 2, 1, 1, 2, 5]);