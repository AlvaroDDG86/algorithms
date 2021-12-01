const timeConversion = require('./timeConversion')
/**
 *  12:00:00AM on a 12-hour clock is 00:00:00 on a 24-hour clock.
 *  12:00:00PM on a 12-hour clock is 12:00:00 on a 24-hour clock.ç
 *  Input String
 * Return String
 */
describe('timeConversion Suite', () => {
    it('Should return formated date when is PM', () => {
        expect(timeConversion('07:05:45PM')).toBe('19:05:45')
    });
    it('Should return formated date when is AM', () => {
        expect(timeConversion('07:05:45AM')).toBe('07:05:45')
    });
    it('Should return formated date when is 12 AM', () => {
        expect(timeConversion('12:05:45AM')).toBe('00:05:45')
    });
    it('Should return formated date when is 12 PM', () => {
        expect(timeConversion('12:05:45PM')).toBe('12:05:45')
    });
});