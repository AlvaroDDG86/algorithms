function dayOfProgrammer(year) {
    let day = 0
    if (year <= 1917) {
        day = year % 4 === 0 ? 244 : 243
    } else if (year === 1918) {
        day = 230 // 14 
    } else {
        day = year % 400 == 0 || (year % 4 === 0 && year % 100 !== 0) ? 244 : 243
    }
    return `${256 - day}.09.${year}`
}
console.log(dayOfProgrammer(2400))
module.exports = dayOfProgrammer