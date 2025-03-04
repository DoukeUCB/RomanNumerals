import romanNumber from './romanNumber';

describe('Roman Number Converter', () => {

    test('converts 1 to I', () => {
        expect(romanNumber(1)).toBe('I');
    });

    test('converts 9 to IX', () => {
        expect(romanNumber(9)).toBe('IX');
    });

    test('converts 10 to X', () => {
        expect(romanNumber(10)).toBe('X');
    });

    test('converts 49 to XLIX', () => {
        expect(romanNumber(49)).toBe('XLIX');
    });

    test('converts 50 to L', () => {
        expect(romanNumber(50)).toBe('Invalid input');
    });
});