import { calculateComplexity, toUpperCaseWithCallback } from '../../app/doubles/OtherUtils';

describe('OtherUtils test suite', () => {
    describe('Tracking callback', () => {
        // simple implementation of a callback mock
        let callbackArgs: string[] = [];
        let timesCalled = 0;

        const callbackMock = (arg: string) => {
            callbackArgs.push(arg);
            timesCalled++;
        };

        // clearing tracking fields so test would not fail if we run multiple tests
        // this way we are according to the AAA pattern, we are setting up the test before running it
        // and cleaning up after the test is done
        afterEach(() => {
            callbackArgs = [];
            timesCalled = 0;
        });

        it('ToUpperCase calls callback for invalid argument', () => {
            // `() => {}` is a function that does nothing, thi is a fake, just a simplified implementation of the callback or external services
            // using fakes help us achieve 100% code coverage even if we did not assert anything in the callback
            const actual = toUpperCaseWithCallback('', callbackMock);
            expect(actual).toBeUndefined();
            expect(callbackArgs).toContain('invalid argument');
            expect(timesCalled).toBe(1);
        });

        it('ToUpperCase calls callback for valid argument', () => {
            // `() => {}` is a function that does nothing, thi is a fake, just a simplified implementation of the callback or external services
            // using fakes help us achieve 100% code coverage even if we did not assert anything in the callback
            const actual = toUpperCaseWithCallback('abc', callbackMock);
            expect(actual).toBe('ABC');
            expect(callbackArgs).toContain('called function with arg abc');
            expect(timesCalled).toBe(1);
        });
    });

    describe('Tracking callback with jest.fn()', () => {
      const callbackMock = jest.fn();

      // clearing tracking fields so test would not fail if we run multiple tests
      // this way we are according to the AAA pattern, we are setting up the test before running it
      // and cleaning up after the test is done
      afterEach(() => {
          jest.clearAllMocks();
      });

      it('ToUpperCase calls callback for invalid argument', () => {
        // `() => {}` is a function that does nothing, thi is a fake, just a simplified implementation of the callback or external services
        // using fakes help us achieve 100% code coverage even if we did not assert anything in the callback
        const actual = toUpperCaseWithCallback('', callbackMock);
        expect(actual).toBeUndefined();
        expect(callbackMock).toBeCalledWith('invalid argument');
        expect(callbackMock).toBeCalledTimes(1);
    });

    it('ToUpperCase calls callback for valid argument', () => {
        // `() => {}` is a function that does nothing, thi is a fake, just a simplified implementation of the callback or external services
        // using fakes help us achieve 100% code coverage even if we did not assert anything in the callback
        const actual = toUpperCaseWithCallback('abc', callbackMock);
        expect(actual).toBe('ABC');
        expect(callbackMock).toBeCalledWith('called function with arg abc');
        expect(callbackMock).toBeCalledTimes(1);
    });
    })

    it('Calculates complexity', () => {
        // this is the stub for the stringInfo object
        // stubs are helper objects to help us test our code
        const someInfo = {
            length: 5,
            extraInfo: {
                field1: 'someInfo',
                field2: 'someOtherInfo',
            },
        };

        // with `as any` we are telling the compiler to ignore the type of the object by casting it to `any`
        const actual = calculateComplexity(someInfo as any);

        expect(actual).toBe(10);
    });

    it('ToUpperCase calls callback for invalid argument', () => {
        // `() => {}` is a function that does nothing, thi is a fake, just a simplified implementation of the callback or external services
        // using fakes help us achieve 100% code coverage even if we did not assert anything in the callback
        const actual = toUpperCaseWithCallback('', () => {});
        expect(actual).toBeUndefined();
    });

    it('ToUpperCase calls callback for valid argument', () => {
        // `() => {}` is a function that does nothing, thi is a fake, just a simplified implementation of the callback or external services
        // using fakes help us achieve 100% code coverage even if we did not assert anything in the callback
        const actual = toUpperCaseWithCallback('abc', () => {});
        expect(actual).toBe('ABC');
    });
});
