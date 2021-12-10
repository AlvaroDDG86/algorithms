function breakingTheRecords(scores) {
    let best = scores[0]
    let worst = scores[0]
    let bestTimes = 0;
    let worstTimes = 0;
    scores.forEach((val) => {
        if (val > best) {
            best = val;
            bestTimes++;
        } else if (val < worst) {
            worst = val;
            worstTimes++;
        }
    })
    return [bestTimes, worstTimes];
}
breakingTheRecords([10, 5, 20, 20, 4, 5, 2, 25, 1])
module.exports = breakingTheRecords