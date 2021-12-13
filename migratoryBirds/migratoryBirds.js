function migratoryBirds(arr) {
    // Write your code here
    return parseInt(Object.entries(arr.reduce((prev, current) => {
        prev[current] = prev[current] ? prev[current] += 1 : 1
        return prev;
    }, {})).sort((a, b) => b[1] - a[1])[0][0])
}
migratoryBirds([1, 2, 3, 4, 5, 4, 3, 2, 1, 3, 4])
module.exports = migratoryBirds