//Calculate the average of the numbers in an array of numbers

function arrayAverage(array) {
    let average = 0
    for (let i = 0; i < array.length; i++) {
        average += array[i] / array.length;
    }
    return average;
}
console.log(arrayAverage([10, 20, 40, 100, 400]))
