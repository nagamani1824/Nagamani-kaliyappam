/**
 * Problem-3:
 * With a single integer as the input, generate the following until a = x
 *
 * Output examples:
 *  input a = 1 -> 1
 *  input a = 2 -> 1
 *  input a = 3 -> 1, 3, 5
 *  input a = 4 -> 1, 3, 5
 *  input a = 5 -> 1, 3, 5, 7, 9
 *  input a = 6 -> 1, 3, 5, 7, 9
 *
 * Interpretation:
 * - If a is odd -> print first a odd numbers.
 * - If a is even -> print first (a - 1) odd numbers.
 *
 * Usage:
 *  node Problem-3.js <a>
 */

function oddSequenceOddOrFloor(a) {
  a = Number(a);
  if (!Number.isInteger(a) || a < 1) return [];
  const terms = (a % 2 === 1) ? a : (a - 1);
  const result = [];
  for (let i = 0; i < terms; i++) result.push(2 * i + 1);
  return result;
}

/* CLI */
if (require.main === module) {
  const [, , a] = process.argv;
  if (a === undefined) {
    console.log('Usage: node Problem-3.js <a>');
    process.exit(1);
  }
  const arr = oddSequenceOddOrFloor(a);
  console.log(arr.join(','));
}

module.exports = oddSequenceOddOrFloor;