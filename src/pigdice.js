export function roll() {
  let randNum = Math.floor(Math.random() * 6) + 1;
  return randNum;
}

export function Player(score, turn, currentScore) {
  this.score = score;
  this.turn = turn;
  this.currentScore = currentScore;
}

Player.prototype.turnScore = function(roll) {
  if (roll === 1) {
    this.currentScore = 0;
  } else {
    this.currentScore += roll;
  }
}