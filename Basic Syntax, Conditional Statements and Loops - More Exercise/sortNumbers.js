function sortNumbers(a, b, c) {
    let max = Math.max(a, b, c);
    let min = Math.min(a, b, c);
    
    console.log(max);

    let middle;
    if (a !== max && a !== min) {
        middle = a;
    } else if (b !== max && b !== min) {
        middle = b;
    } else {
        middle = c;
    }
    console.log(middle);

    console.log(min);
}

sortNumbers(2, 1, 3);
// sortNumbers(-2, 1, 3);
// sortNumbers(0, 0, 2);