/**
 * Problem-4:
 * Get the total count of numbers listed in the dictionary which are multiples of [1,2,3,4,5,6,7,8,9]
 *
 * Example:
 * input: [1,2,8,9,12,46,76,82,15,20,30]
 * Output:
 * {1:11, 2:8, 3:4, 4:4, 5:3, 6:2, 7:0, 8:1, 9:1}
 *
 * Usage (CLI):
 *  node Problem-4.js 1,2,8,9,12,46,76,82,15,20,30
 *  (comma-separated list, no spaces)
 */

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

/* CLI */
if (require.main === module) {
  const [, , arg] = process.argv;
  if (!arg) {
    console.log('Usage: node Problem-4.js <comma-separated-numbers>');
    console.log('Example: node Problem-4.js 1,2,8,9,12,46,76,82,15,20,30');
    process.exit(1);
  }
  const arr = arg.split(',').map(s => s.trim()).filter(s => s.length > 0).map(Number);
  const result = countMultiples(arr, 9);
  console.log(JSON.stringify(result));
}

module.exports = countMultiples;