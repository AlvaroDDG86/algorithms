const appleAndOrange = require('./appleAndOrange')

describe('apple and oranges suite', () => {
    it('Should return the number of each kind of fruit', () => {
        expect(appleAndOrange(7, 10, 4, 12, [2, 3, -4], [3, -2, -4])).toBe('1 2');
    });
});