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
