const bonAppetit = require('./billDivision')
describe('bonAppetit', () => {
    it('bonAppetit', () => {
        expect(bonAppetit([3, 10, 2, 9], 1, 12)).toBe(5)
    });
    it('bonAppetit', () => {
        expect(bonAppetit([3, 10, 2, 9], 1, 7)).toBe('Bon Appetit')
    });
});