// https://leetcode.com/problems/remove-duplicates-from-sorted-array/submissions/

var removeDuplicates = function (nums) {
    if (nums.length < 1) return nums;

    for (let i = 0; i < nums.length; i++) {
        while (nums[i] === nums[i + 1]) {
            nums.splice(i + 1, 1);
        }
    }

    return nums.length;
};

var removeDuplicatesWithPointer = function (nums) {
    let insertAt = 0;

    for (let i = 0; i < nums.length; i++) {
        if (nums[i - 1] !== nums[i]) {
            nums[insertAt] = nums[i];
            insertAt++;
        }
    }

    return insertAt;
};
