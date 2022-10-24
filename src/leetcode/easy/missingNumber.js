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
