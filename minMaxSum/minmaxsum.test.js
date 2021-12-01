const minmaxsum = require('./minmaxsum')
/**
 * Given five positive integers, find the minimum and maximum values that can be calculated by summing exactly four of the five integers. 
 * Then print the respective minimum and maximum values as a single line of two space-separated long integers.
 * Input Number[]
 * Return String
 */
describe('minmaxsum test', () => {
    it('Print the max and min sum for given order array', () => {
        expect(minmaxsum([1, 2, 3, 4, 5])).toBe('10 14');
    });
    it('Print the max and min sum for given unorder array', () => {
        expect(minmaxsum([3, 1, 8, 2, 4])).toBe('10 17');
    });
});