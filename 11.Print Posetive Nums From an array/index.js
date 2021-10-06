// Create a function that receives an array of numbers and returns an array containing only the positive numbers.
// Requirement: Use a “for” loop.
 function getPositiveNum(array) {
    let positiveNumArray = [];
    for (let i = 0; i < array.length; i++) {
        const num = array[i];
        if (num > 0) {
            positiveNumArray.push(num);
        }
    }
    return positiveNumArray;
 }
//  console.log(getPositiveNum([12, -1, 13, -40, 50])) //[ 12, 13, 50 ]


//for...of method..
 function getPositiveNum(array) {
    let positiveNumArray = [];
    for (let num of array) {
        if (num > 0) {
            positiveNumArray.push(num);
        }
    }
    return positiveNumArray;
 }
//  console.log(getPositiveNum([12, -1, 13, -40, 50]))


//Filter method
function getPositiveNum(array) {
   return array.filter(num => num >= 0)
}
// console.log(getPositiveNum([12, -1, 13, -40, 50]))



//if you want to know the boolean value use "map"
function getPositiveNum(array) {
    return array.map(num => num >= 0)
 }
 console.log(getPositiveNum([12, -1, 13, -40, 50]))
 //[ true, false, true, false, true ]