/**
 * Problem-2:
 * With a single integer as the input, generate the following until a = x
 *
 * Output examples:
 *  input a = 1 -> 1
 *  input a = 2 -> 1, 3
 *  input a = 3 -> 1, 3, 5
 *  input a = 4 -> 1, 3, 5, 7
 *
 * Interpretation:
 * Print the first `a` odd numbers starting from 1.
 *
 * Usage:
 *  node Problem-2.js <a>
 * Example:
 *  node Problem-2.js 4
 *  -> 1,3,5,7
 */

function firstNOdds(a) {
  a = Number(a);
  if (!Number.isInteger(a) || a < 1) return [];
  const result = [];
  for (let i = 0; i < a; i++) {
    result.push(2 * i + 1);
  }
  return result;
}

/* CLI */
if (require.main === module) {
  const [, , a] = process.argv;
  if (a === undefined) {
    console.log('Usage: node Problem-2.js <a>');
    process.exit(1);
  }
  const arr = firstNOdds(a);
  console.log(arr.join(','));
}

module.exports = firstNOdds;