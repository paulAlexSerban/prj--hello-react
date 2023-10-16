import { toUpperCase, stringInfo, getStringInfo, StringUtils } from '../app/Utils';

describe('Utils test suite', () => {
    describe('StringUtils tests', () => {

        let SUT: StringUtils;

        beforeEach(() => {
            console.log('[ setup ] mocking dependencies');
            SUT = new StringUtils();
        })

        afterEach(() => {
            // clearing mocks
            console.log('[ teardown ] clearing mocks');
        })

        it('should return ok upperCase', () => {
            const actual = SUT.toUpperCase('abc');

            console.log('[ test ] asserting');
            expect(actual).toBe('ABC');
        })
    })



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

    /**
     * Parameterized tests
     */
    describe('ToUpperCase parametrized tests', () => {
        it.each([
            { input: 'hello', expected: 'HELLO' },
            { input: 'world', expected: 'WORLD' },
            { input: 'hello world', expected: 'HELLO WORLD' },
            { input: 'my name is john', expected: 'MY NAME IS JOHN' },
        ])('$input toUpperCase should be $expected', ({ input, expected }) => {
            // Arrange - SUT = System Under Test
            const SUT = toUpperCase;
            // Act
            const actual = SUT(input);
            // Assert
            expect(actual).toEqual(expected);
        });
    });

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
