"use strict";

function countUniqueValues(list_of_numbers) {
    var left = 0;
    var right = 1;

    while (right <= list_of_numbers.length) {

        if (list_of_numbers[left] == list_of_numbers[right]) {
            ++right;
        } else {
            ++left;
            list_of_numbers[left] = list_of_numbers[right];
            ++right;
        }
    }
    return left;
}



//console.log(countUniqueValues([1, 2, 2]));
//console.log(countUniqueValues([1, 2, 4, 3]));
console.log(countUniqueValues([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13]));
console.log(countUniqueValues([]));