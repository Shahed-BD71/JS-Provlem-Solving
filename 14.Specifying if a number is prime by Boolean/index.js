// Create a function that will return a Boolean specifying if a number is prime
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

console.log('15 is Prime?'+ " " + isPrime(15))
console.log('511 is Prime?'+ " " + isPrime(511))