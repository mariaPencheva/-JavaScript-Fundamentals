function personInfo(firstName, lastName, age) {
    let person ={ //{};
    firstName: firstName, //firstName, lastName, age -> композиция/ композираме променливите в един обект; името на променливата ще стане ключ, а стойността ще бъде стойност на това свойство
    lastName: lastName,
    age: age,
    }
    // person.firstName = firstName; // person[`firstName`] = firstName;
    // person.lastName = lastName;
    // person.age = age;

    return person;

}

let result = personInfo("Peter", "Pan", 20);

console.log(result);