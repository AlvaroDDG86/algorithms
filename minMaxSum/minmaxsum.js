function minmaxsum(arr) {
    arr.sort()
    const min = arr.reduce((prev, current, index, collect) => {
        return (index !== collect.length - 1) ? prev + current : prev
    }, 0)
    const max = arr.reduce((prev, current, index) => {
        return (index > 0) ? prev + current : 0
    }, 0)
    return `${min} ${max}`;
}
// minmaxsum([1, 2, 3, 4, 5]);

module.exports = minmaxsum;