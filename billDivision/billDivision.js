function bonAppetit(bill, k, b) {
    const sum = bill.reduce((prev, current, index) => {
        if (index !== k) prev += current
        return prev
    }, 0)
    return sum / 2 === b ? 'Bon Appetit' : (b - sum / 2)
}
console.log(bonAppetit([3, 10, 2, 9], 1, 12))
module.exports = bonAppetit