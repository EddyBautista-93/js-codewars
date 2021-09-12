var squareDigit = function (num) {
    var splitArray = num.toString().split('');
    var newArray = [];
    splitArray.forEach(function (element) {
        newArray.push(Math.pow(parseInt(element), 2));
    });
    var totalPowSum = parseInt(newArray.join(''));
    return totalPowSum;
};
