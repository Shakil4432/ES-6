const numbers1 = [1,2,10,40,67,89];
const numbers2 = [7,9,45,67,90];

const combinedArray = (numbers1,numbers2) =>{
    const arrayCombined = [...numbers1,...numbers2];
    console.log(arrayCombined);
    const maxNumber = Math.max(...arrayCombined);
    return maxNumber;
}

const result = combinedArray(numbers1,numbers2)
console.log(result);