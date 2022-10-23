// https://leetcode.com/problems/power-of-three/

var isPowerOfThree = function (n) {
    if (n === 1) return true;

    if (n % 3 === 0) return isPowerOfThree(n / 3);

    return false;
};

console.log(isPowerOfThree(617673396283947));
