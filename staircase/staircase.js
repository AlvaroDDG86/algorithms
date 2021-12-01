function print(num, total) {
    return "#".repeat(num).padStart(total);
}

function staircase(n) {
    for (let i = 1; i <= n; i++) {
        console.log(print(i, n));
    }
}
staircase(6);
module.exports = print;