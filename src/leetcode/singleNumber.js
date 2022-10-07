// https://leetcode.com/problems/single-number/

var singleNumber = function (nums) {
    const obj = {};

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] in obj) {
            delete obj[nums[i]];
        } else {
            obj[nums[i]] = true;
        }
    }

    return Object.keys(obj)[0];
};
