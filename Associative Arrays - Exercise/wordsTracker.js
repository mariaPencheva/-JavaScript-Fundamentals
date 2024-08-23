function wordsTracker(arr) {
    let searchedWords = arr.shift().split(' ');
    let occurrences = {};

    for (let word of searchedWords){
        occurrences[word] = 0;
    }

    for (let word of arr){
        if (word in occurrences){
            occurrences[word] ++;
        } 
    }
    
    let entries = Object.entries(occurrences).sort((a, b) => b[1] - a[1]);

    for(let entry of entries){
        console.log(entry.join(' - '));
    }

}

wordsTracker([
    'is the',
    'first', 'sentence', 'Here', 'is', 'another', 'the', 'And', 'finally', 'the', 'the', 'sentence'])