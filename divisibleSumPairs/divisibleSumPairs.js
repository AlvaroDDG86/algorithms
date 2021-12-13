function divisibleSumPairs(n, k, ar) {
    return ar.reduce((prev, item, index, array) => {
        for (let i = (index + 1); i < array.length; i++) {
            if ((item + array[i])% k === 0) prev += 1;
        }
        return prev
    }, 0)
}
divisibleSumPairs(6, 3, [1, 3, 2, 6, 1, 2])

module.exports = divisibleSumPairs