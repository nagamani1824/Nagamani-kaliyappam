


function firstNOdds(a) {
  a = Number(a);
  if (!Number.isInteger(a) || a < 1) return [];
  const result = [];
  for (let i = 0; i < a; i++) {
    result.push(2 * i + 1);
  }
  return result;
}


const input = 5; 
const arr = firstNOdds(input);
console.log(arr.join(',')); 
