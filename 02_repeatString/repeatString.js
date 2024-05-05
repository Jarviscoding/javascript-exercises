const repeatString = function(string, repititions) {
    if (repititions < 0) {
        return 'ERROR';
    } else {
        finalString = '';
        for (let i = 1; i <= repititions; i++) {
            finalString = finalString.concat(string);
        }
        return finalString;
    };

};

// Do not edit below this line
module.exports = repeatString;
