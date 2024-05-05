const sumAll = function(numberOne, numberTwo) {
    let sum = 0;
    if( numberOne < 0 || numberTwo < 0 ) {
        return 'ERROR';
    } else if ( !Number.isInteger(numberOne) || !Number.isInteger(numberTwo) ){
        return 'ERROR';
    } else {
        if( numberOne < numberTwo) {
            for(let i = numberOne; i <= numberTwo; i++){
                sum += i;
            }
        } else {
            for(let i = numberTwo; i <= numberOne; i++){
                sum += i;
            }
        }
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
