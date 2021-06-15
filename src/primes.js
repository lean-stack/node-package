function isPrime(n) {
  if (n < 2) return false;
  if (n === 2) return true;
  if (n % 2 === 0) return false;

  const maxDivisor = Math.floor(Math.sqrt(n));
  for (let divisor = 3; divisor <= maxDivisor; divisor++) {
    if (n % divisor === 0) {
      return false;
    }
  }
  return true;
}

function countPrimes(fromInclusive, toExclusive) {
  let count = 0;
  for (let z = fromInclusive; z < toExclusive; z++) {
    isPrime(z) && ++count;
  }
  return count;
}

module.exports = { isPrime, countPrimes };
