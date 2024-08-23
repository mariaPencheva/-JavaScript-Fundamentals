function companyUsers(arr) {
    let companyEmployees = {}

    for (let companyEmployee of arr){
        //console.log(companyEmployee);

        let [company, employeeID] = companyEmployee.split(' -> ');
        // let line = companyEmployee.split(' -> ');
        // let company = line[0];
        // let empoyeeID = line[1];

        //console.log(employeeID);

        if (company in companyEmployees){
            if (!companyEmployees[company].includes(employeeID)){ 
                companyEmployees[company].push(employeeID); 
            }
        } else{
            companyEmployees[company] = [employeeID];
            //companyEmployees[company].push(employeeID);
        }

    }

    let entries = Object.entries(companyEmployees).sort((a, b) => a[0].localeCompare(b[0]));
    //console.log(entries);

    for(let [name, employeeIDs] of entries){
        console.log(name);
        employeeIDs.forEach(id => console.log(`-- ${id}`));
    }
}

companyUsers([
    'SoftUni -> AA12345',
    'SoftUni -> BB12345',
    'Microsoft -> CC12345',
    'HP -> BB12345'
]);