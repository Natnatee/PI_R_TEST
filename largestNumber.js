function largestNumber(input) {

    input.sort((a, b) => {
        let test1 = "" + a + b
        let test2 = "" + b + a

        return test2.localeCompare(test1)
    });

    // console.log(input)
    return input.join("")
}


let input1 = [10, 2, 13, 7]
let input2 = [21, 36, 8, 45]

console.log(largestNumber(input1))
console.log(largestNumber(input2))
