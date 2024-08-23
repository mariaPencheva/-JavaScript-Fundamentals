function distanceBetweenPoints(x1, y1, x2, y2) { 
    let b = x2 - x1;
    let a = y2 - y1;

    let distance = Math.sqrt(b ** 2 + a ** 2);

    console.log(distance); 
}


distanceBetweenPoints(2, 4, 5, 0);
// distanceBetweenPoints(2.34, 15.66, -13.55, -2.9985);