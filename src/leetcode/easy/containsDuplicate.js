// https://leetcode.com/problems/contains-duplicate/submissions/

var containsDuplicate = function (nums) {
    const counts = {};

    for (let i = 0; i < nums.length; i++) {
        if (!(nums[i] in counts)) {
            counts[nums[i]] = 1;
        } else return true;
    }

    return false;
};
