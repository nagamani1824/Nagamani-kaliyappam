function oddSequenceOddOrFloor(a) {
  a = Number(a);

  if (!Number.isInteger(a) || a < 1) return [];

  
  const terms = (a % 2 === 1) ? a : (a - 1);

  const result = [];
  for (let i = 1; i <= terms; i += 2) {
    result.push(i);
  }

  return result;
}

console.log(oddSequenceOddOrFloor(7)); 
console.log(oddSequenceOddOrFloor(6)); 
console.log(oddSequenceOddOrFloor(1)); 
console.log(oddSequenceOddOrFloor(0)); 
