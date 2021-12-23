function pageCount(n, p) {
    const currentTimes = Math.floor(p / 2);
    const currentTotal = Math.floor(n / 2);
    return Math.min(currentTimes, currentTotal - currentTimes);
}
console.log(pageCount(6, 2))
module.exports = pageCount