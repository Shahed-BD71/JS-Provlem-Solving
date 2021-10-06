//Calculate the sum of numbers in an array of numbers.

function sumOfArray(array){
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        sum += array[i];
    }
    return sum
}
console.log(sumOfArray([10, 20, 30, 40, 50]))
