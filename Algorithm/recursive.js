function factorial(num) { // O(n)
    // base case
    if (num == 1) {
        return 1;
    }

    return num * factorial(num-1);
}


function fibonacci(num) { // O(2^n)
    if (num < 2) {
        return num;
    }

    return fibonacci(num-1) + fibonacci(num-2);
}