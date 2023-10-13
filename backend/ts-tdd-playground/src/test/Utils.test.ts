import { toUpperCase } from '../app/Utils';

describe('toUpperCase', () => {
    it('should return upper case of a valid string', () => {
        // Arrange
        // - SUT = System Under Test
        const SUT = toUpperCase;
        const expected = 'HELLO';
        // Act
        const actual = SUT('hello');
        // Assert
        expect(actual).toEqual(expected);
    });
});
