const numbers=[3,5,10,2,9,7,9];
let count = 0;
let sum = 0;
const squareNumbers = (numbers) => {
    for(const number of numbers){
        const square = number*number;
        sum = sum + square;
        count++;
    }
    const average =sum/count;
    return average.toFixed(2);
}

const result = squareNumbers(numbers);
console.log(result);