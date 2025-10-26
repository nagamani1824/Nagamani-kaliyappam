

function oddSequenceOddOrFloor(a) {
  a = Number(a);
  if (!Number.isInteger(a) || a < 1) return [];
  const terms = (a % 2 === 1) ? a : (a - 1);
  const result = [];
  for (let i = 0; i < terms; i++) result.push(2 * i + 1);
  return result;
}


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
