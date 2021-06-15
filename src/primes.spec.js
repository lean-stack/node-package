const { isPrime, countPrimes } = require("./primes.js");

describe("Prime number tester", () => {
  it("reports 1 as no prime number", () => {
    expect(isPrime(1)).toBe(false);
  });

  it("reports 2 as prime number", () => {
    expect(isPrime(2)).toBe(true);
  });

  it("reports 3 as prime number", () => {
    expect(isPrime(3)).toBe(true);
  });

  it("reports even numbers as no prime number", () => {
    const number = Math.floor(Math.random() * 10000) + 1 * 2;
    expect(isPrime(number)).toBe(false);
  });

  it("reports well known primes", () => {
    // Three non-primes: 25, 39 and 77
    const numbers = [3, 7, 11, 13, 19, 23, 25, 29, 39, 71, 77, 173];

    const primes = numbers.reduce(
      (count, nr) => (isPrime(nr) ? count + 1 : count),
      0
    );
    expect(primes).toBe(numbers.length - 3);
  });
});

describe("Prime number counter", () => {
  it("reports known counts", () => {
    // See https://en.wikipedia.org/wiki/Prime_number_theorem
    // or https://www.michael-holzapfel.de/themen/primzahlen/pz-anzahl.htm
    const counts = {
      10: 4,
      100: 25,
      1000: 168,
      10000: 1229,
      100000: 9592,
    };

    for (const max in counts) {
      expect(countPrimes(1, max)).toBe(counts[max]);
    }
  });
});
