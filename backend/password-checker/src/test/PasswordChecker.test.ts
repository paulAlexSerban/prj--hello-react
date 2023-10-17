import { PasswordChecker, PasswordErrors } from '../app/PasswordChecker';
describe('PassowrdChecker test suite', () => {
    let SUT: PasswordChecker;

    beforeEach(() => {
        SUT = new PasswordChecker();
    });

    it('password with less than 12 chars is invalid', () => {
        const actual = SUT.checkPassword('1234567');
        expect(actual.valid).toBe(false);
        expect(actual.reasons).toContain(PasswordErrors.SHORT);
    });

    it('password with more than 12 chars is valid', () => {
        const actual = SUT.checkPassword('1234567890123');
        expect(actual.reasons).not.toContain(PasswordErrors.SHORT);
    });

    it('password with no lower case is invalid', () => {
        const actual = SUT.checkPassword('12312312AAASADA');
        expect(actual.reasons).toContain(PasswordErrors.NO_LOWER_CASE);
    });
    it('password with lower case is valid', () => {
        const actual = SUT.checkPassword('121212312334Abcd');

        expect(actual.reasons).not.toContain(PasswordErrors.NO_LOWER_CASE);
    });

    it('password with no upper case is invalid', () => {
        const actual = SUT.checkPassword('123123534abcd');
        expect(actual.reasons).toContain(PasswordErrors.NO_UPPER_CASE);
    });

    it('password with an upper case is valid', () => {
        const actual = SUT.checkPassword('12312313334Abcd');
        expect(actual.reasons).not.toContain(PasswordErrors.NO_UPPER_CASE);
    });

    it('complex password is valid', () => {
        const actual = SUT.checkPassword('123123123123Abcd');
        expect(actual.valid).toBe(true);
        expect(actual.reasons).toHaveLength(0);
    });

    it('admin password with no number is invalid', () => {
        const actual = SUT.checkAdminPassword('adminABCD');
        expect(actual.valid).toBe(false);
        expect(actual.reasons).toContain(PasswordErrors.NO_NUMBER);
    });

    it('admin password with number is valid', () => {
        const actual = SUT.checkAdminPassword('adminABCD123');
        expect(actual.valid).toBe(true);
        expect(actual.reasons).not.toContain(PasswordErrors.NO_NUMBER);
    });
});
