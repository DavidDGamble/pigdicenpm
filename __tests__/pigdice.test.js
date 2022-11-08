import { roll, Player } from "../src/pigdice.js";

describe("roll", () => {

  test('should return a random number', () => {
    let randomNum = roll();
    expect(randomNum).toBeGreaterThanOrEqual(1);
    expect(randomNum).toBeLessThanOrEqual(6);
  });
});

describe("Player", () => {

  test('should create a player object with score, turn, and currentScore properties', () => {
    let newPlayer = new Player(0, true, 0);
    expect(newPlayer.score).toEqual(0);
    expect(newPlayer.turn).toEqual(true);
    expect(newPlayer.currentScore).toEqual(0);
  });

  test('Should update current score to 0 after a roll of 1.', () => {
    let player1 = new Player(0, true, 4);
    player1.turnScore(1);
    expect(player1.currentScore).toEqual(0);
  });

  test('Should update current score to 5 after a roll of 5.', () => {
    let player1 = new Player(0, true, 0);
    player1.turnScore(5);
    expect(player1.currentScore).toEqual(5);
  });

  test('Should add current score to score.', () => {
    let player1 = new Player(0, true, 12);
    player1.totalScore();
    expect(player1.score).toEqual(12);
    expect(player1.currentScore).toEqual(0);
  });

  test('Should check to see if score is winning.', () => {
    let player1 = new Player(50, true, 0);
    expect(player1.checkScore()).toEqual(false);
  });

  test('Should check to see if score is winning.', () => {
    let player1 = new Player(106, true, 0);
    expect(player1.checkScore()).toEqual(true);
  });
});



