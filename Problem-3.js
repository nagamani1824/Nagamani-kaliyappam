function oddSequenceOddOrFloor(a) {
  a = Number(a);

  if (!Number.isInteger(a) || a < 1) return [];

  // If a is even, make it a-1; else keep it same
  const terms = (a % 2 === 1) ? a : (a - 1);

  const result = [];
  for (let i = 1; i <= terms; i += 2) {
    result.push(i);
  }

  return result;
}

// Example:
console.log(oddSequenceOddOrFloor(7)); // [1,3,5,7]
console.log(oddSequenceOddOrFloor(6)); // [1,3,5]
