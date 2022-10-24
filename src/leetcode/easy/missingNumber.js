// https://leetcode.com/problems/missing-number/

var missingNumber = function (nums) {
    const n = nums.length;

    nums.sort((a, b) => a - b);

    for (let i = 0; i < n + 1; i++) {
        // if we are outside the array
        if (nums[i] === "undefined") return nums[i - 1] + 1;
        // if we are still inside the array
        else if (i !== nums[i]) return i;
    }
};

var missingNumberGaussFormula = function (nums) {
    // Gauss formula: sum from i=0 to n = n(n+1)/2
    const expectedSum = (nums.length * (nums.length + 1)) / 2;
    let actualSum = 0;

    i = 0;
    while (i < nums.length) {
        actualSum += nums[i];
        i++;
    }

    return expectedSum - actualSum;
};
