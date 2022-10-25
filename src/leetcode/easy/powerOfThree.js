var isPowerOfThree = function (n) {
    if (n === 1) return true;
    if (n === 2) return false;

    let x = 1;
    while (x < n) {
        if (n === 3 ** x) return true;
        x++;
    }

    return false;
};
