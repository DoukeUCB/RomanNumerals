import romanNumber from './romanNumber';

describe('Roman Number Converter', () => {
    test('converts 1 to I', () => {
        expect(romanNumber(1)).toBe('I');
    });
});