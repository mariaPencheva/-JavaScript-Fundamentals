// You have now returned from your world tour. On your way, you have discovered some new plants, and you want to gather some information about them and create an exhibition to see which plant is highest rated.
// On the first line, you will receive a number n. On the next n lines, you will be given some information about the plants that you have discovered in the format: "{plant}<->{rarity}". Store that information because you will need it later. If you receive a plant more than once, update its rarity.
// After that, until you receive the command "Exhibition", you will be given some of these commands:
// •	"Rate: {plant} - {rating}" – add the given rating to the plant (store all ratings)
// •	"Update: {plant} - {new_rarity}" – update the rarity of the plant with the new one
// •	"Reset: {plant}" – remove all the ratings of the given plant
// Note: If any given plant name is invalid, print "error"
// After the command "Exhibition", print the information that you have about the plants in the following format:
// "Plants for the exhibition:
// - {plant_name1}; Rarity: {rarity}; Rating: {average_rating}
// - {plant_name2}; Rarity: {rarity}; Rating: {average_rating}
// …
// - {plant_nameN}; Rarity: {rarity}; Rating: {average_rating}"
// The average rating should be formatted to the second decimal place.
// Input / Constraints
// •	You will receive the input as described above.
// •	JavaScript: you will receive a list of strings.
// Output
// •	Print the information about all plants as described above.


// first line = num, next n lines:
// "{plant}<->{rarity}";
// 

function plantDiscovery(arr) {
    let plantsInfo = {};
    let plantsLines = Number(arr.shift());

    for (let i = 0; i < plantsLines; i++) {
        let [name, rarity] = arr.shift().split('<->');
        rarity = Number(rarity);
        //console.log(name);

        if (!plantsInfo.hasOwnProperty(name)) {
            plantsInfo[name] = {
                rarity: rarity,
                ratings: []
            };
        } else {
            plantsInfo[name].rarity = rarity; 
        }
    }

    for (let line of arr) {
        if (line === "Exhibition") {
            break;
        }

        let lineAsArr = line.split(': ');
        let command = lineAsArr[0];
        let [plantName, rating] = lineAsArr[1].split(' - ');

        if (!plantsInfo.hasOwnProperty(plantName)) {
            console.log("error");
            continue;
        }

        if (command == 'Rate') {
            plantsInfo[plantName].ratings.push(Number(rating));
        } else if (command == 'Update') {
            plantsInfo[plantName].rarity = Number(rating);
        } else if (command == 'Reset') {
            plantsInfo[plantName].ratings = [];
        }
    }

    console.log("Plants for the exhibition:");
    
    for (let plant in plantsInfo) {
        let sum = 0;
        let ratings = plantsInfo[plant].ratings;
        let averageRating = 0;
    
        for (let rating of ratings) {
            sum += rating;
        }
    
        if (ratings.length > 0) {
            averageRating = sum / ratings.length;
        }
    
        console.log(`- ${plant}; Rarity: ${plantsInfo[plant].rarity}; Rating: ${averageRating.toFixed(2)}`);
    }
    
}

plantDiscovery([
    "3",
    "Arnoldii<->4",
    "Woodii<->7",
    "Welwitschia<->2",
    "Rate: Woodii - 10",
    "Rate: Welwitschia - 7",
    "Rate: Arnoldii - 3",
    "Rate: Woodii - 5",
    "Update: Woodii - 5",
    "Reset: Arnoldii",
    "Exhibition"
]);