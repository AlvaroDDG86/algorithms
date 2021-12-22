function sockMerchant(n, ar) {
    return Object.entries(ar.reduce((prev, current) => {
        prev[current] = prev[current] ? prev[current] + 1 : 1
        return prev
    }, {})).reduce((prev, current) => (
        prev + Math.floor(current[1]/2)
    ), 0)
}
console.log(sockMerchant(9, [10, 20, 20, 10, 10, 30, 50, 10, 20]))
module.exports = sockMerchant