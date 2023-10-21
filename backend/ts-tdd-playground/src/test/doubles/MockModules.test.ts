jest.mock('../../app/doubles/OtherUtils', () => ({
    // this will keep the original implementation for all functions except calculateComplexity
    ...jest.requireActual('../../app/doubles/OtherUtils'),
    // this is a mock implementation of the calculateComplexity function
    calculateComplexity: () => 10,
}));

jest.mock('uuid', () => ({
    v4: () => '1234',
}));

import * as OtherUtils from '../../app/doubles/OtherUtils';

describe('modules tests', () => {
    test('calculate complexity', () => {
        const result = OtherUtils.calculateComplexity({} as any);
        expect(result).toBe(10);
    });

    test('keep other functions', () => {
        const result = OtherUtils.toUpperCase('abc');
        expect(result).toBe('ABC');
    });

    test('string with id', () => {
        const result = OtherUtils.toLowerCaseWithId('abc');
        expect(result).toBe('abc 1234');
    });

    // // this test will fail because the mock implementation of the v4 function returns a fixed value
    // test('string with id - with regex', () => {
    //     const result = OtherUtils.toLowerCaseWithId('abc');
    //     expect(result).toMatch(/abc [a-z0-9-]{36}/);
    // });
});
