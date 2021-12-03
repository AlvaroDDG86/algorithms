const numbersLinesJumps = require('./numbersLinesJumps')
describe('numbersLinesJumps suite', () => {
    it('should return NO', () => {
        expect(numbersLinesJumps(0, 2, 5, 3)).toBe('NO')
    });
    it('should return NO starting from NOZERO value', () => {
        expect(numbersLinesJumps(1, 2, 2, 2)).toBe('NO')
    });
    it('should return YES', () => {
        expect(numbersLinesJumps(0, 3, 4, 2)).toBe('YES')
    });
    it('should return YES bigger numbers', () => {
        expect(numbersLinesJumps(1408, 6689, 6730, 4028)).toBe('YES')
    });
    it('if v1 is less than 0', () => {
        expect(numbersLinesJumps(-1, 6689, 6730, 4028)).toBe('NO')
    });
    it('if v1 is bigger than 10000', () => {
        expect(numbersLinesJumps(100001, 6689, 6730, 4028)).toBe('NO')
    });
    it('if v2 is less than 0', () => {
        expect(numbersLinesJumps(1, 6689, -1, 4028)).toBe('NO')
    });
    it('if v2 is bigger than 10000', () => {
        expect(numbersLinesJumps(1, 6689, 16730, 4028)).toBe('NO')
    });
});