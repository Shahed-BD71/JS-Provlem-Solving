// // Print the first 100 prime numbers
printPrime(100)
function printPrime(nPrime) {
    var n = 0;
    var i = 2;
    while (n < nPrime) {
        if (isPrime(i)) 
        {
            console.log(n, '-->', i)
            n++;
        }
         i++
    }

}

function isPrime(n) {
    if (n < 2)
        return false;
    if (n == 2)
       return true; 

    let maxDivisor = Math.sqrt(n)
    for (let i = 2; i <= maxDivisor; i++) 
    {
        if (n % i == 0) {
            return false
        }
    }
    return true;
}

console.log(isPrime(9));

// print the sum of first 100 prime numbers
