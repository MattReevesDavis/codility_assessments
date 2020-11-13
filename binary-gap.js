function solution(N) {

  // Assumption checks
  if (N < 1 || N > 2147483647) {
    console.log(`Invalid number provided.`);
    return false;
  }

  // Convert int to binary
  const binVal = N.toString(2);

  // Split the string
  const gapArray = binVal.split("1");
  // console.log(gapArray);
  // Now check if string ends in a 0
  // If it does, remove the last element of the array as it is not a valid binary gap
  const endOfBinVal = binVal.substring(binVal.length - 1);

  if (endOfBinVal === '0') {
    // Remove the last element of gapArray
    gapArray.pop();
  }

  // Initialise binaryGap variable to 0
  let binaryGap = 0;

  // Now we loop through and set the binaryGap variable to the maximum binary gap
  gapArray.forEach((gap) => {
    if (gap.length > binaryGap) {
      binaryGap = gap.length;
    }
  });

  if (binaryGap > 0) {
    console.log(`Binary representation of ${N} is ${binVal}. Maximum binary gap: ${binaryGap}`);
  } else if (binaryGap === 0) {
    console.log(`${binVal} has no valid binary gaps`);
  }

  // Uncomment to complete codility assessment
  // return binaryGap;
}

solution(22909);
