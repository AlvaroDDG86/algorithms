const subarrayDivision = require('./subarrayDivision')
/**
 * Two children, Lily and Ron, want to share a chocolate bar. Each of the squares has an integer on it
 * Lily decides to share a contiguous segment of the bar selected such that:
 * The length of the segment matches Ron's birth month, and,
 * The sum of the integers on the squares is equal to his birth day.
 * Determine how many ways she can divide the chocolate.
 * 
 * Input [int], int, int
 * Return int (the number of ways the bar can be divided)
 */
describe('subarrayDivision', () => {
    it('sShould return 2', () => {
        expect(subarrayDivision([1, 2, 1, 3, 2], 3, 2)).toBe(2)
    });
    it('sShould return 0', () => {
        expect(subarrayDivision([1, 1, 1, 1, 1, 1], 3, 2)).toBe(0)
    });
    it('sShould return 1', () => {
        expect(subarrayDivision([4], 4, 1)).toBe(1)
    });
    it('sShould return 0', () => {
        expect(subarrayDivision([4, 3], 4, 0)).toBe(0)
    });
    it('sShould return 3', () => {
        expect(subarrayDivision([2, 5, 1, 3, 4, 4, 3, 5, 1, 1, 2, 1, 4, 1, 3, 3, 4, 2, 1], 18, 7)).toBe(3)
    });
});