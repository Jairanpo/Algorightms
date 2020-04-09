// Write a function called productOfArray which takes in 
// an array of numbers and returns the product of them all.
// productOfArray([1,2,3]) resultado me tiene que dar -> 6
// productOfArray([1,2,3,10]) // resultado me tiene que dar -> 60


function productOfArray(arr) {
    if (arr.length === 1) {
        return arr;
    }
    return arr[0] * productOfArray(arr.slice(1));
}


console.log(productOfArray([1, 2, 3]));
console.log(productOfArray([1, 2, 3, 10]));