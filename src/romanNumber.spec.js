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
        expect(romanNumber(50)).toBe('L');
    });

    test('converts 79 to LXXIX', () => {
        expect(romanNumber(79)).toBe('LXXIX');
    });

    test('converts 99 to XCIX', () => {
        expect(romanNumber(99)).toBe('XCIX');
    });

    test('converts 100 to C', () => {
        expect(romanNumber(100)).toBe('C');
    });

    test('converts 299 to CCXCIX', () => {
        expect(romanNumber(299)).toBe('CCXCIX');
    });
    
    test('converts 399 to CCCXCIX', () => {
        expect(romanNumber(399)).toBe('CCCXCIX');
    });
});