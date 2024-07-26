
let input = [25, 40, 14, 91, 31, 22, 49, 13, 6];

function customSortFunction(input) {
    let output= []
    for (let i = 0; i < input.length; i++) {
        if (input[i]%2==0){
            output.push(input[i])
        }else{
            output.unshift(input[i])
        }
    }
    return output;
}

console.log(customSortFunction(input)); 
