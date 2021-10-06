// Calculate the sum of digits of a positive integer number...

function sumOfDigits(num) {
    let s = num.toString()
    var sum = 0;
    for (let char of s) {
        let digit = parseInt(char)
        sum += digit
    }
    return sum;
}
console.log(sumOfDigits(146))