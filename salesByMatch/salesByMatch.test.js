const sockMerchant = require('./salesByMatch')
/**
 * There is a large pile of socks that must be paired by color.
 * Given an array of integers representing the color of each sock,
 * determine how many pairs of socks with matching colors there are.
 */
describe('sockMechant', () => {
    it('Should return the correct pairs', () => {
        expect(sockMerchant(9, [10, 20, 20, 10, 10, 30, 50, 10, 20])).toBe(3)
    })
    it('Should return the correct pairs', () => {
        expect(sockMerchant(9, [1, 1, 3, 1, 2, 1, 3, 3, 3, 3])).toBe(4)
    })
});