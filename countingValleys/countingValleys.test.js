const countingValleys = require('./countingValleys')
/**
 * An avid hiker keeps meticulous records of their hikes.
 * During the last hike that took exactly steps, for every step it was noted if it was an uphill U
 * , or a downhill, D step.
 * Hikes always start and end at sea level, and each step up or down represents a 1 unit change in altitude. 
 */
describe('countingValleys', () => {
    it('should ', () => {
        expect(countingValleys(8, 'UDDDUDUU')).toBe(1)
    });
    it('should ', () => {
        expect(countingValleys(12, 'DDUUDDUDUUUD')).toBe(2)
    });
});