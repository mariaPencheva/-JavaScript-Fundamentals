function oddOccurrences(str) {
    let counts = {};
    let order = []; // За запазване на реда на появата
    let words = str.toLowerCase().split(' ');
    
    for (let word of words) {
        if (!counts[word]) {
            counts[word] = 1;
            order.push(word);
        } else {
            counts[word]++;
        }
    }
    
    let oddWords = order.filter(word => counts[word] % 2 !== 0);
    console.log(oddWords.join(' '));
}

oddOccurrences('Java C# Php PHP Java PhP 3 C# 3 1 5 C#');