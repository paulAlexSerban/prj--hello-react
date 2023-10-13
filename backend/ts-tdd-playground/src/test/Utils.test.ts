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

    it('should return string info of a valid string', () => {
        // Arrange
        // - SUT = System Under Test
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
        expect(actual.lowerCase).toEqual(expected.lowerCase);
        expect(actual.upperCase).toEqual(expected.upperCase);

        expect(actual.extraInfo).toEqual(expected.extraInfo);

        expect(actual.characters).toHaveLength(expected.characters.length);

        expect(actual.characters).toEqual(expected.characters);
        expect(actual.characters).toContain<string>('h');
        expect(actual.characters).toEqual(expect.arrayContaining<string>(['h', 'e', 'l', 'l', 'o']));

        expect(actual.length).toEqual(expected.length);

        expect(actual.extraInfo).not.toBe(undefined);
        expect(actual.characters).not.toBeUndefined();
        expect(actual.extraInfo).toBeDefined();
        expect(actual.extraInfo).toBeTruthy();
        expect(actual.characters).not.toBeNull();
    });
});
