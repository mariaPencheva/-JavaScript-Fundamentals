function sumFirstLast(arr) {
    let first = arr.shift();
    let last = arr.pop();

    console.log(Number(first) + Number(last));
}

sumFirstLast(['5', '10']);
// sumFirstLast(['10', '20', '30']);