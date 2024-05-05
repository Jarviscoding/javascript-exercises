const reverseString = function(input) {
    let string = input.split('');
    let x = string.length;
    let reverseString = [];
    for (let i = 0; i < x; i++) {
        reverseString.push(string.pop());
    }
    return reverseString.join("");

};

// Do not edit below this line
module.exports = reverseString;
  