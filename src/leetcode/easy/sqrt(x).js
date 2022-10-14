// https://leetcode.com/problems/sqrtx/

var mySqrt = function (x) {
    let i = 0;
    while (i >= 0) {
        if (i * i === x) return i;
        else if (i * i > x) return i - 1;
        i++;
    }
};
