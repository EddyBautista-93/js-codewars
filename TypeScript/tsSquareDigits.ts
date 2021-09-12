const squareDigit = (num: number) => {
    var splitArray = num.toString().split('');
    var newArray = [];
    splitArray.forEach(element => {
        newArray.push(Math.pow(parseInt(element), 2))
    });
    var totalPowSum = parseInt(newArray.join(''));
    return totalPowSum;
}