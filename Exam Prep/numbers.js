// Write a program to read a sequence of integers and find and print the top 5 numbers greater than the average value in the sequence, sorted in descending order.
// Input
// •	Read from the console a single line holding space-separated integers.
// Output
// •	Print the above-described numbers on a single line, space-separated. 
// •	If less than 5 numbers hold the property mentioned above, print less than 5 numbers. 
// •	Print "No" if no numbers hold the above property.
// Constraints
// •	All input numbers are integers in the range [-1 000 000 … 1 000 000]. 
// •	The count of numbers is in the range [1…10 000].


function numbers(str){
    let nums = str.split(' ').map(Number);

    let sum = 0;
    for (let num of nums){  
        sum += num;
    }
    let average = sum / nums.length; 
    

    let topNums = nums
        .filter(num => num > average) 
        .sort((a, b) => b - a) 
        .slice(0, 5); 


    if (topNums.length == 0){
        console.log(`No`);
    } else {
        console.log(topNums.join(' '));
    }

}

numbers('5 2 3 4 -10 30 40 50 20 50 60 60 51');