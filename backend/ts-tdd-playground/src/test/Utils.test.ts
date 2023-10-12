import { toUpperCase } from '../app/Utils';

describe('toUpperCase', () => {
  it('should convert string to uppercase', () => {
    const result = toUpperCase('hello');
    expect(result).toBe('HELLO');
  });
});
