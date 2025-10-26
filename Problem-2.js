

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
