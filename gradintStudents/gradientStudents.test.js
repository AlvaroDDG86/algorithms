const gradientStudents = require('./gradientStudents')
/**
 * Requeriments
 * If the difference between the grade and the next multiple of 5 is less than 3, round grade up to the next multiple of 5.
 * If the value of grade is less than 38, no rounding occurs as the result will still be a failing grade.
 * Input int[]
 * Return int[]
 */
describe('gradientStudents suite', () => {
    it('should return the notes rounded', () => {
        expect(gradientStudents([73, 67, 38, 33])).toEqual([75, 67, 40, 33])
    });
    it('should return the notes rounded', () => {
        expect(gradientStudents([80, 82, 81, 84, 83])).toEqual([80, 82, 81, 85, 85])
    });
});