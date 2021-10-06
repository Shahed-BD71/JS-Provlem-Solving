// let fibo0 = 0;
// console.log(fibo0)
// let fibo1 = 1;
// console.log(1)

// for (let i = 2; i < 10; i++) {
//    let fibo = fibo1 + fibo0;
//    fibo0 = fibo1
//    fibo1 = fibo
//    console.log(fibo)
// }


// In Recursive way.....
// Reminder, A function that calls itself is called recursive.

function getFibo(num) {
    if (num == 0) {
        return 0;
    }if (num == 1) {
        return 1;
    }
    return getFibo(num - 1) + getFibo (num - 2)
}

console.log(getFibo(9))