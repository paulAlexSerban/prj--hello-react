export enum PasswordErrors {
    SHORT = 'Password is too short',
    NO_LOWER_CASE = 'Password must contain at least one lowercase character',
    NO_UPPER_CASE = 'Password must contain at least one uppercase character',
    NO_NUMBER = 'Password must contain at least one number',
}

export interface CheckResult {
    password: string;
    valid: boolean;
    reasons: PasswordErrors[];
}

export class PasswordChecker {
    public checkPassword(password: string): CheckResult {
        const reasons: PasswordErrors[] = [];

        this.checkForLength(password, reasons);
        this.checkForLowerCase(password, reasons);
        this.checkForUpperCase(password, reasons);

        return {
            password,
            valid: reasons.length > 0 ? false : true,
            reasons,
        };
    }

    private checkForLength(password: string, reasons: PasswordErrors[]): void {
        if (password.length < 12) {
            reasons.push(PasswordErrors.SHORT);
        }
    }

    /**
     *
     * This is a regular expression. It's a way to check if a string matches a pattern.
     * In this case, we're checking if the string contains a lowercase letter.
     * @param password
     * @param reasons
     */
    private checkForLowerCase(password: string, reasons: PasswordErrors[]): void {
        const hasLowerCase = /[a-z]/;
        if (!hasLowerCase.test(password)) {
            reasons.push(PasswordErrors.NO_LOWER_CASE);
        }
    }

    private checkForUpperCase(password: string, reasons: PasswordErrors[]): void {
        const hasUpperCase = /[A-Z]/;
        if (!hasUpperCase.test(password)) {
            reasons.push(PasswordErrors.NO_UPPER_CASE);
        }
    }

    private checkForNumber(password: string, reasons: PasswordErrors[]) {
        const hasNumber = /\d/;
        if (!hasNumber.test(password)) {
            reasons.push(PasswordErrors.NO_NUMBER);
        }
    }

    public checkAdminPassword(password: string): CheckResult {
        const basicCheck = this.checkPassword(password);
        this.checkForNumber(password, basicCheck.reasons);

        return {
            password,
            valid: basicCheck.reasons.length > 0 ? false : true,
            reasons: basicCheck.reasons,
        };
    }
}
