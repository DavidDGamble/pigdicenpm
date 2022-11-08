import {roll} from  "../src/pigdice.js";

describe("roll", () => {

  test('should return a random number', () => {
    let randomNum = roll();
    expect(randomNum).toBeGreaterThanOrEqual(1);
    expect(randomNum).toBeLessThan(6);  });
});

