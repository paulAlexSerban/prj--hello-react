export type stringInfo = {
    lowerCase: string;
    upperCase: string;
    characters: string[];
    length: number;
    extraInfo: {} | undefined;
};

export const calculateComplexity = (stringInfo: stringInfo) => {
    return Object.keys(stringInfo.extraInfo).length * stringInfo.length;
};

type LoggerServiceCallback = (message: string) => void;

export const toUpperCaseWithCallback = (arg: string, callback: LoggerServiceCallback) => {
    if (!arg) {
        callback('invalid argument');
        return;
    }
    callback(`called function with arg ${arg}`);
    return arg.toUpperCase();
};

export class OtherStringUtils {
    private callExternalServiceMethod() {
        console.log('called external service');
    }

    public toUpperCase(arg: string) {
        return arg.toUpperCase();
    }

    public logString(arg: string) {
        console.log(arg);
    }
}
