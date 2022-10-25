/* keep dividing n by b as long as the remainder is 0
this is because n = b^x or n = b * b * ... * b
hence it should be possible to divide n by b x number of times,
every time with a remainder of 0 and the end result be 1 */

var isPowerOfThree = function (n) {
    if (n < 1) {
        return false;
    }

    while (n % 3 == 0) {
        n /= 3;
    }

    return n == 1;
};
