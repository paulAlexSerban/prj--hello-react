export enum RockPaperScissors {
  ROCK = 'rock',
  PAPER = 'paper',
  SCISSORS = 'scissors',
  DRAW = 'draw',
}

// Return the winning argument
// If arguments are the same, return 'draw'
const play = (arg1: string, arg2: string): string | undefined => {
  const isInvalidArgument =
      (arg1 !== RockPaperScissors.ROCK && arg1 !== RockPaperScissors.PAPER && arg1 !== RockPaperScissors.SCISSORS) ||
      (arg2 !== RockPaperScissors.ROCK && arg2 !== RockPaperScissors.PAPER && arg2 !== RockPaperScissors.SCISSORS);
  if (isInvalidArgument) {
      return undefined;
  }
  // check for arguments equality and return draw
  const isDraw = arg1 === arg2;
  if (isDraw) {
      return RockPaperScissors.DRAW;
  }

  // paper covers rock
  const isPaperCoveringRock =
      (arg1 === RockPaperScissors.PAPER && arg2 === RockPaperScissors.ROCK) ||
      (arg2 === RockPaperScissors.PAPER && arg1 === RockPaperScissors.ROCK);
  if (isPaperCoveringRock) {
      return RockPaperScissors.PAPER;
  }

  // rock breaks scissors
  const isRockBreakingScissors =
      (arg1 === RockPaperScissors.ROCK && arg2 === RockPaperScissors.SCISSORS) ||
      (arg2 === RockPaperScissors.ROCK && arg1 === RockPaperScissors.SCISSORS);
  if (isRockBreakingScissors) {
      return RockPaperScissors.ROCK;
  }

  // scissors cuts paper
  const isScissorsCuttingPaper =
      (arg1 === RockPaperScissors.SCISSORS && arg2 === RockPaperScissors.PAPER) ||
      (arg2 === RockPaperScissors.SCISSORS && arg1 === RockPaperScissors.PAPER);
  if (isScissorsCuttingPaper) {
      return RockPaperScissors.SCISSORS;
  }
};

export default play;