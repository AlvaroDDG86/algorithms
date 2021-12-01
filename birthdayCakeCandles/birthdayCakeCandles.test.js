const birthdayCakeCandles = require('./birthdayCakeCandles')
const big = require('./bigArray')

/**
 * You are in charge of the cake for a child's birthday. 
 * You have decided the cake will have one candle for each year of their total age.
 * They will only be able to blow out the tallest of the candles. Count how many candles are tallest
 * Input Int[]
 * return Int
 */

describe('birthdayCakeCandles suite', () => {
    it('Should return number of times that biggets item is ', () => {
        expect(birthdayCakeCandles([3, 2, 1, 3])).toBe(2)
    });
    it('Should return number of times that biggets item is with bigger array', () => {
        expect(birthdayCakeCandles([11, 3, 11, 11, 3, 6, 8])).toBe(3)
    });
    it('Should return number of times that biggets item is with bigest array', () => {
        expect(birthdayCakeCandles(big)).toBe(12443)
    });
});