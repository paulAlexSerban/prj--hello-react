import play from '../app/RockPaperScissors';

describe('RockPaperScissors test suite', () => {
  it('rock vs paper should return paper', () => {
    const actual = play('rock', 'paper');
    expect(actual).toBe('paper');
  });

  it('rock vs scissors should return rock', () => {
    const actual = play('rock', 'scissors');
    expect(actual).toBe('rock');
  });

  it('paper vs scissors should return scissors', () => {
    const actual = play('paper', 'scissors');
    expect(actual).toBe('scissors');
  });

  it('paper vs rock should return paper', () => {
    const actual = play('paper', 'rock');
    expect(actual).toBe('paper');
  });

  it('scissors vs rock should return rock', () => {
    const actual = play('scissors', 'rock');
    expect(actual).toBe('rock');
  });

  it('scissors vs paper should return scissors', () => {
    const actual = play('scissors', 'paper');
    expect(actual).toBe('scissors');
  });

  it('rock vs rock should return draw', () => {
    const actual = play('rock', 'rock');
    expect(actual).toBe('draw');
  });

  it('paper vs paper should return draw', () => {
    const actual = play('paper', 'paper');
    expect(actual).toBe('draw');
  });

  it('scissors vs scissors should return draw', () => {
    const actual = play('scissors', 'scissors');
    expect(actual).toBe('draw');
  });

  it('invalid argument should return undefined', () => {
    const actual = play('scissors', 'invalid');
    expect(actual).toBeUndefined();
  });

  it('invalid argument should return undefined', () => {
    const actual = play('invalid', 'scissors');
    expect(actual).toBeUndefined();
  });

  it('invalid argument should return undefined', () => {
    const actual = play('invalid', 'invalid');
    expect(actual).toBeUndefined();
  });
});