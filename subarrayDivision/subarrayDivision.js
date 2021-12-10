function subarrayDivision(s, d, m) {
    const length = s.length === m ? m : s.length - m;
    let result = 0
    for (let index = 0; index <= length; index++) {
        if (s.slice(index, (index + m)).reduce((prev, current) => {
            return prev + current
        }, 0) === d) {
            result++;
        }
    }
    return result;
}
console.log(subarrayDivision([2, 5, 1, 3, 4, 4, 3, 5, 1, 1, 2, 1, 4, 1, 3, 3, 4, 2, 1], 18, 7))
module.exports = subarrayDivision