function cutAndReverse(str) {
    let middleIndex = str.length / 2;

    let firstHalf = str.slice(0, middleIndex).split('').reverse().join('');
    console.log(firstHalf);

    let secHalf = str.slice(middleIndex).split('').reverse().join('');
    console.log(secHalf);
}

// cutAndReverse('tluciffiDsIsihTgnizamAoSsIsihT');
cutAndReverse('sihToDtnaCuoYteBIboJsihTtAdooGoSmI');