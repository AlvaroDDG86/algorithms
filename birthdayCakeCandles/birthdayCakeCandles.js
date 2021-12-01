const big = require('./bigArray')
function birthdayCakeCandles(arr) {
    const max = Math.max(...arr);
    return arr.filter(item => item == max).length
}
// birthdayCakeCandles(big)

module.exports = birthdayCakeCandles;