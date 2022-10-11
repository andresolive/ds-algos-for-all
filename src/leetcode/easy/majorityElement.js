// https://leetcode.com/problems/majority-element/

var majorityElement = function (nums) {
    const pairs = {};

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] in pairs) {
            pairs[nums[i]]++;
        } else {
            pairs[nums[i]] = 1;
        }
    }

    let highestCount = 0;
    let result;

    for (let key in pairs) {
        if (pairs[key] > highestCount) {
            highestCount = pairs[key];
            result = key;
        }
    }

    return result;
};
