const migratoryBirds = require('./migratoryBirds')
/**
 * Given an array of bird sightings where every element represents a bird type id, 
 * determine the id of the most frequently sighted type. 
 * If more than 1 type has been spotted that maximum amount, return the smallest of their ids.
 */
describe('migratoryBirds', () => {
    it('should return 4', () => {
        expect(migratoryBirds([1, 4, 4, 4, 5, 3])).toBe(4)
    });
    it('should return 3', () => {
        expect(migratoryBirds([1, 2, 3, 4, 5, 4, 3, 2, 1, 3, 4])).toBe(3)
    });
});