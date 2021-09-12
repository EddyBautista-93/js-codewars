const squareDigit = (num) => {
    var splitArray = num.toString().split('');
    var newArray = [];
    splitArray.forEach(element => {
        newArray.push(Math.pow(element, 2))
    });
    var totalPowSum = parseInt(newArray.join(''));
    return totalPowSum;
}

const squareDigitSingleLine = (num) => Number(('' + num).split('').map(function (val) { return val * val;}).join(''));


// another way to handle the question
// function squareDigits(num){
//     var array = num.toString().split('').map( function(int) {
//       var i = parseInt(int);
//       return i * i;
//     });
    
//     return parseInt(array.join(""));
//   }

squareDigit(9119);