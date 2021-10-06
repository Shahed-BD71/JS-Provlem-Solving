// Find the maximum number in an array of numbers
function maxNumber(array){
    var max = array[0];
    for (let i = 0; i < array.length; i++) {
        if (array[i] > max) {
            max = array[i];
        }
    }
    return max
}
console.log(maxNumber([20, 30, 40, 40,599, -30])) //599


