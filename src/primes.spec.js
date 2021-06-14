const { isPrime } = require("./primes.js");

describe("Prime number helper", () => {
  it("reports 1 as no prime number", () => {
    expect(isPrime(1)).toBe(false);
  });
});
