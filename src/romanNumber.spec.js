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

    test('converts 400 to CD', () => {
        expect(romanNumber(400)).toBe('CD');
    });
    
    test('converts 499 to CDXCIX', () => {
        expect(romanNumber(499)).toBe('CDXCIX');
    });

    test('converts 500 to D', () => {
        expect(romanNumber(500)).toBe('D');
    });
    
    test('converts 670 to DCLXX', () => {
        expect(romanNumber(670)).toBe('DCLXX');
    });

    test('converts 783 to DCCLXXXIII', () => {
        expect(romanNumber(783)).toBe('DCCLXXXIII');
    });

    test('converts 900 to CM', () => {
        expect(romanNumber(900)).toBe('CM');
    });
    
    test('converts 999 to CMXCIX', () => {
        expect(romanNumber(999)).toBe('CMXCIX');
    });

    test('converts 1000 to M', () => {
        expect(romanNumber(1000)).toBe('Invalid input');
    });
});