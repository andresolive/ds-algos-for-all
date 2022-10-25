// https://leetcode.com/problems/missing-ranges/

var findMissingRanges = function (nums, lower, upper) {
    if (!nums.length && lower === upper) return [`${upper}`];
    if (!nums.length) return [`${lower}->${upper}`];

    const result = [];

    for (let i = 0; i < nums.length; i++) {
        if (lower < nums[i]) {
            if (lower === nums[i] - 1) {
                result.push(`${lower}`);
                // lower = nums[i] + 1;
            } else {
                result.push(`${lower}->${nums[i] - 1}`);
                // lower = nums[i] + 1;
            }
        }
        lower = nums[i] + 1;
    }

    if (nums[nums.length - 1] !== upper) {
        if (nums[nums.length - 1] + 1 === upper) {
            result.push(`${upper}`);
        } else {
            result.push(`${nums[nums.length - 1] + 1}->${upper}`);
        }
    }

    return result;
};
