const divisibleSumPairs = require('./divisibleSumPairs')
describe('divisibleSumPairs', () => {
    it('should return 5', () => {
        expect(divisibleSumPairs(6, 3, [1, 3, 2, 6, 1, 2])).toBe(5)
    });
});