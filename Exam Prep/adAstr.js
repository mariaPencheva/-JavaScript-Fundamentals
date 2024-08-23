// You are an astronaut who just embarked on a mission across the solar system. Since you will be in space for a long time, you have packed a lot of food with you. Create a program, which helps you identify how much food you have left and gives you information about its expiration date.
// On the first line of the input, you will be given a text string. You must extract the information about the food and calculate the total calories. 
// First, you must extract the food info. It will always follow the same pattern rules:
// •	It will be surrounded by "|" or "#" (only one of the two) in the following pattern: 
// #{item name}#{expiration date}#{calories}#   or 
// |{item name}|{expiration date}|{calories}|
// •	The item name will contain only lowercase and uppercase letters and whitespace.
// •	The expiration date will always follow the pattern: "{day}/{month}/{year}", where the day, month, and year will be exactly two digits long.
// •	The calories will be an integer between 0-10000.
// Calculate the total calories of all food items and then determine how many days you can last with the food you have. Keep in mind that you need 2000kcal a day.
// Input / Constraints
// •	You will receive a single string.
// Output
// •	First, print the number of days you will be able to last with the food you have:
// "You have food to last you for: {days} days!"
// •	The output for each food item should look like this:
// "Item: {item name}, Best before: {expiration date}, Nutrition: {calories}"


// products = [
//  {name: 'apple', expdate: '10/12/23, kcal: 200' },
//  {name: 'chips', expdate: '10/12/24, kcal: 200' }
// ]

function adAstr(arr) {
    let str = arr.shift();
    let pattern = /([#|])(?<name>[A-Za-z\s]+)\1(?<expdate>\d{2}\/\d{2}\/\d{2})\1(?<kcals>\d+)\1/g;

    let totalKcals = 0;
    let products = [];

    let matches = str.matchAll(pattern);
    // console.log(matches);

    for (let match of matches){
        let { name, expdate, kcals } = match.groups;
        kcals = Number(kcals);
        // console.log(kcals);

        totalKcals += kcals;
        products.push({ name, expdate, kcals});
        
    }

    let days = Math.floor(totalKcals / 2000);
    // console.log(days);
    console.log(`You have food to last you for: ${days} days!`);
    
    products.forEach(product => console.log(`Item: ${product.name}, Best before: ${product.expdate}, Nutrition: ${product.kcals}`));
                
}

adAstr([
    '$$#@@%^&#Fish#24/12/20#8500#|#Incorrect#19.03.20#450|$5*(@!#Ice Cream#03/10/21#9000#^#@aswe|Milk|05/09/20|2000|'
])