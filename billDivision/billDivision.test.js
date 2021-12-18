const bonAppetit = require('./billDivision')
describe('bonAppetit', () => {
    it('bonAppetit', () => {
        expect(bonAppetit()).toBe(5)
    });
});