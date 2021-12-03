function appleAndOrange(s, t, a, b, apples, oranges) {
    return (apples.map(apple => a + apple).filter(place => place >= s && place <= t).length
            + " " + oranges.map(orange => b + orange).filter(place => place >= s && place <= t).length)
}
// appleAndOrange(7, 10, 4, 12, [2, 3, -4], [3, -2, -4])


module.exports = appleAndOrange;