// Create a recurse function that sum all numbers util the former.
// recurse_sum(3) = 6 
// recurse_sum(4) = 9


function recurse_sum(_integer) {
    if (_integer == 0) {
        return 0;
    }
    return _integer + recurse_sum(--_integer);
};

console.log(recurse_sum(3));
console.log(recurse_sum(5));