function gradientStudents(grades) {
    return grades.map(grade => {
        if (grade < 38 || grade % 5 === 0) {
            return grade
        }
        let nextFiveMult = grade
        for (let index = 1; index < 5; index++) {
            nextFiveMult++
            if (nextFiveMult % 5 === 0) break;
        }
        return nextFiveMult === grade || nextFiveMult - grade >= 3 ? grade : nextFiveMult
    })
}
gradientStudents([73, 67, 38, 33])

module.exports = gradientStudents;