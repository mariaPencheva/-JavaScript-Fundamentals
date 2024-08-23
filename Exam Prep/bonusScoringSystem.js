
// Create a program that calculates bonus points for each student enrolled in a course. On the first line, you are going to receive the number of students. On the second line, you will receive the total number of lectures in the course. The course has an additional bonus, which you will receive on the third line. On the following lines, you will be receiving the count of attendances for each student.
// The bonus is calculated with the following formula:
// {total bonus} = {student attendances} / {course lectures} * (5 + {additional bonus})
// Find the student with the maximum bonus and print them, along with his attendance, in the following format:
// "Max Bonus: {max bonus points}."
// "The student has attended {student attendances} lectures."
// Round the bonus points at the end to the nearest larger number.
// Input / Constraints
// •	On the first line, you are going to receive the number of the students – an integer in the range [0…50].
// •	On the second line, you will receive the number of the lectures – an integer number in the range [0...50].
// •	On the third line, you will receive the additional bonus – an integer number in the range [0….100].
// •	On the following lines, you will be receiving the attendance of each student.
// •	There will never be students with equal bonuses.
// Output
// •	Print the maximum bonus points and the attendance of the given student, rounded to the nearest larger number, scored by a student in this course in the format described above.


function bonusScoringSystem(arr) {
    let numOfStudents = Number(arr[0]);
    let numOfLectures = Number(arr[1]);
    let additionalBonus = Number(arr[2]);

    let totalBonusForEachStudent = 0;
    let maxBonus = Number.MIN_VALUE;  //Number.MIN_SAFE_INTEGER
    let attendedLect = 0;

    for (let i = 3; i < arr.length; i++) {
        let eachStudentAttendances = Number(arr[i]);

        totalBonusForEachStudent =
        eachStudentAttendances / numOfLectures * (5 + additionalBonus);

        if (totalBonusForEachStudent >= maxBonus) {
            maxBonus = totalBonusForEachStudent;
            attendedLect = eachStudentAttendances;
        }
    }
    //maxBonus = Math.ceil(maxBonus);
    //console.log(`Max Bonus: ${maxBonus}.`);

    console.log(`Max Bonus: ${Math.ceil(maxBonus)}.`);
    console.log(`The student has attended ${attendedLect} lectures.`);
}

bonusScoringSystem([
    '5', '25', '30',
    '12', '19', '24',
    '16', '20'
]);
// bonusScoringSystem([
//     '10', '30', '14', '8',
//     '23', '27', '28', '15',
//     '17', '25', '26', '5',
//     '18']);