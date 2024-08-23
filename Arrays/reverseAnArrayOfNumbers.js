function reverseAnArrayOfNumbers(n, nums) {
    
    let reversed = [];
    for(let i = n - 1; i >= 0; i--){
        reversed.push(nums[i])
    }

    console.log(reversed.join(` `));
    //-------------------------

    // let result = nums.slice(0, n); 
    // let reversed = result.reverse(); 

    // console.log(reversed.join(' '));

    //--------------------------

    // console.log(nums.slice(0, n).reverse().join(' '));

    
  
}

reverseAnArrayOfNumbers(3, [10, 20, 30, 40, 50]);
reverseAnArrayOfNumbers(4, [-1, 20, 99, 5]);
reverseAnArrayOfNumbers(2, [66, 43, 75, 89, 47])

