function isPrime(n) {
  if (n < 2) return false;
  if (n == 2) return true;
  if (n % 2 == 0) return false;

  return true;
}

export { isPrime };
