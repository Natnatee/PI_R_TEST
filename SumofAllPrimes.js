function sumOfAllPrime(input) {
    let output = 0;
    
    function isPrime(n) {
        if (n <= 1) return false;
        for (let i = 2; i * i <= n; i++) {
            if (n % i === 0) return false;
        }
        return true;
    }

    for (let i = 2; i <= input; i++) {
        if (isPrime(i)) {
            output += i;
        }
    }

    return output;
}

let input1 = 10;
let input2 = 59;

console.log(sumOfAllPrime(input1)); // Output: 17 (2 + 3 + 5 + 7)
console.log(sumOfAllPrime(input2)); // Output: 440 (2 + 3 + 5 + 7 + 11 + 13 + 17 + 19 + 23 + 29 + 31 + 37 + 41 + 43 + 47 + 53 + 59)
