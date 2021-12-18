const dayOfProgrammer = require('./dayOfProgrammer')
describe('dayOfProgrammer', () => {
    it('should return correct day before transition', () => {
        expect(dayOfProgrammer(1800)).toBe('12.09.1800')
    });
    it('should return correct day after transition', () => {
        expect(dayOfProgrammer(2016)).toBe('12.09.2016')
    });
    it('should return correct day after transition', () => {
        expect(dayOfProgrammer(2100)).toBe('13.09.2100')
    });
    it('should return correct day in 1918', () => {
        expect(dayOfProgrammer(1918)).toBe('26.09.1918')
    });
    it('should return correct day in 2400', () => {
        expect(dayOfProgrammer(2400)).toBe('12.09.2400')
    });
});