const betweenTwoSets = require('./betweenTwoSets')
/**
 * There will be two arrays of integers. Determine all integers that satisfy the following two conditions
 * 1. The elements of the first array are all factors of the integer being considered
 * 2. The integer being considered is a factor of all elements of the second array
 * 
 * These numbers are referred to as being between the two arrays. Determine how many such numbers exist.
 */
describe('betweenTwoSets suite test', () => {
    it('betweenTwoSets first test', () => {
        expect(betweenTwoSets([2, 4], [16, 32, 96])).toBe(3)
    });
    it('betweenTwoSets second test', () => {
        expect(betweenTwoSets([3, 4], [24, 48])).toBe(2)
    });
});