function schoolGrades(arr) {
    let list = {};

    for (let i = 0; i < arr.length; i++){
        let students = arr[i].split(' ');
        let name = students[0];
        //console.log(students);

        for (let j = 1; j < students.length; j++){
            let grade = Number(students[j]);

            if(!list[name]){
                list[name] = [];
            } 
            
            list[name].push(grade);
        }          
    }

    let sortedNames = Object.keys(list).sort();

    for(let name of sortedNames){
        let grades = list[name];
        let sum = grades.reduce((a, b) => a + b, 0);
        let average = (sum / grades.length).toFixed(2);
        console.log(`${name}: ${average}`);
    }

    // let studentGrades = {};

    // // Process each student's grades
    // for (let student of arr) {
    //     let [name, ...grades] = student.split(' ');
    //     grades = grades.map(Number);

    //     if (!studentGrades[name]) {
    //         studentGrades[name] = [];
    //     }

    //     studentGrades[name].push(...grades);
    // }

    // let sortedStudents = Object.keys(studentGrades).sort();

    // for (let student of sortedStudents) {
    //     let total = studentGrades[student].reduce((acc, curr) => acc + curr, 0);
    //     let average = (total / studentGrades[student].length).toFixed(2);
    //     console.log(`${student}: ${average}`);
    // }

    // let stud = {};

    // for (let student of arr){
    //     let tokens = student.split(' ');
    //     let name = tokens.shift();
    //     let totalGrade = 0;

    //     for (let grade of tokens){
    //         totalGrade += Number(grade);
    //     }

    //     if (!stud[name]) {
    //         stud[name] = { total: 0, count: 0 };
    //     }

    //     stud[name].total += totalGrade;
    //     stud[name].count += tokens.length;
    // }

    // let sortedNames = Object.keys(stud).sort();

    // for (let name of sortedNames) {
    //     let average = (stud[name].total / stud[name].count).toFixed(2);
    //     console.log(`${name}: ${average}`);
    // }

}

schoolGrades([
    'Lilly 4 6 6 5',
    'Tim 5 6',
    'Tammy 2 4 3',
    'Tim 6 6'
]);