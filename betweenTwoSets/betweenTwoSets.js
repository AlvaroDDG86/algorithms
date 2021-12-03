function betweenTwoSets(a, b) {
    let count = 0;
    
    for (let x = 1; x <= 100; x++) {
        if (a.every(i => (x % i == 0))) {
            if (b.every(i => (i % x == 0))) {
                count++;
            }
        }
    }

    return count;
}
betweenTwoSets([2, 4], [16, 32, 96])

module.exports = betweenTwoSets;