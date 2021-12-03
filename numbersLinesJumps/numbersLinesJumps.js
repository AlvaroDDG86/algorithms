function numbersLinesJumps(x1, v1, x2, v2) {
    if ((x1 < x2) && (v1 < v2)) return 'NO' // second kangoo runs faster
    return (x2 - x1) % (v1 - v2) == 0 ? 'YES' : 'NO'
}
const res = numbersLinesJumps(1408, 6689, 6730, 4028)

module.exports = numbersLinesJumps