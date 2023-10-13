import { toUpperCase, stringInfo, getStringInfo } from '../app/Utils';

describe('Utils test suite', () => {
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

    /**
     * @nota_bene
     * use .toBe() for primitive types
     * use .toEqual() for object types
     */

    describe("getStringInfo for argument 'hello'", () => {
        test('return right length', () => {
            // Arrange - SUT = System Under Test
            const SUT = getStringInfo;
            // Act
            const actual = SUT('hello');
            // Assert
            expect(actual).toHaveLength(5);
        });
        test('return right lower case', () => {
            // Arrange - SUT = System Under Test
            const SUT = getStringInfo;
            // Act
            const actual = SUT('hello');
            // Assert
            expect(actual.lowerCase).toBe('hello');
        });

        test('return right upper case', () => {
            // Arrange - SUT = System Under Test
            const SUT = getStringInfo;
            // Act
            const actual = SUT('hello');
            // Assert
            expect(actual.upperCase).toBe('HELLO');
        });

        test('return right characters', () => {
            // Arrange - SUT = System Under Test
            const SUT = getStringInfo;
            // Act
            const actual = SUT('hello');
            // Assert
            expect(actual.characters).toEqual(['h', 'e', 'l', 'l', 'o']);
        });

        test('return characters contains right right character', () => {
          // Arrange - SUT = System Under Test
          const SUT = getStringInfo;
          // Act
          const actual = SUT('hello');
          // Assert
          expect(actual.characters).toContain<string>('h');
      });
        

        test('return defined extraInfo', () => {
            // Arrange - SUT = System Under Test
            const SUT = getStringInfo;
            // Act
            const actual = SUT('hello');
            // Assert
            expect(actual.extraInfo).toEqual({});
        });

        test('return expected string info', () => {
          // Arrange - SUT = System Under Test
          const SUT = getStringInfo;
          const expected: stringInfo = {
            lowerCase: 'hello',
            upperCase: 'HELLO',
            characters: ['h', 'e', 'l', 'l', 'o'],
            length: 5,
            extraInfo: {},
        };
          // Act
          const actual = SUT('hello');
          // Assert
          expect(actual.extraInfo).toEqual(expected.extraInfo);
      });
    });
});
