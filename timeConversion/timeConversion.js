/**
 * 
 * @param { String } s
 * @returns formated Date
 */
function timeConversion(s) {
    const isPM = s.substring(8, 10) === 'PM'
    const isMid = s.substring(0, 2) === '12'
    if (isPM) {
        return (isMid ? s : s.replace(/^[0-9]{2}/, (m) => parseInt(m) + 12)).substring(0, 8)
    } else {
        return (isMid ? s.replace(/^[0-9]{2}/, '00') : s).substring(0, 8)
    }
}
// timeConversion('07:05:45PM')


module.exports = timeConversion