function countMultiples(arr, maxDivisor = 9) {
  if (!Array.isArray(arr)) throw new Error('arr must be an array of numbers');
  
  const counts = {};
  for (let d = 1; d <= maxDivisor; d++) counts[d] = 0;
  
  for (const item of arr) {
    const n = Number(item);
    if (Number.isNaN(n)) continue;
    for (let d = 1; d <= maxDivisor; d++) {
      if (n % d === 0) counts[d] += 1;
    }
  }
  
  return counts;
}


const input = [1, 2, 8, 9, 12, 46, 76, 82, 15, 20, 30];
const result = countMultiples(input, 9);
console.log(result);

