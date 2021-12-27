function countingValleys(steps, path) {
    return path.split('').reduce((prev, curr) => {
        if (curr === 'U') {
            prev.level++;
            if (prev.level == 0) prev.valleys++;
        } else {
            prev.level--;
        }
        return prev
    }, {
        level: 0,
        valleys: 0
    }).valleys
}
console.log(countingValleys(8, 'UDDDUDUU'))
module.exports = countingValleys