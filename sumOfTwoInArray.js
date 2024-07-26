
let input = [1, 3, 5, 7, 16, 4];
let target = 18;

function sumOfTwoInArray(input, target) {
    for (let i = 0; i < input.length; i++) {
        for (let j = i + 1; j < input.length; j++) {
            if (input[i] + input[j] === target) {
                return true;
            }
        }
    }
    return false;
}

console.log(sumOfTwoInArray(input, target)); 
// let input = [1, 3, 5, 7, 16, 4];
// let target = 12;
// let input = [1, 3, 5, 7, 16, 4];
// let target = 18;
// let input = [12, 17, 14, 11, 19, 8];
// let target = 20;