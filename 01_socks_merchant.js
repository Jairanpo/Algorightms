function sockMerchant(n, ar) {
    // Create a dictionary with number of socks and 
    // amount of socks of that pair
    var sock_pairs = {};

    for (let i = 0; i < n; i++) {
        let current_sock = [ar[i]];
        if (sock_pairs[current_sock]) {
            sock_pairs[current_sock] = sock_pairs[current_sock] + 1;
        } else {
            sock_pairs[current_sock] = 1;
        }
    }

    var total = 0;
    for (let i in sock_pairs) {
        let current = sock_pairs[i]
        if (current === 1) {
            continue;
        } else if (current % 2 === 0) {
            total += current / 2
        } else {
            total += (current - 1) / 2
        }
    }
    return total;

}


sockMerchant(9, [10, 20, 20, 10, 10, 30, 50, 10, 20]);