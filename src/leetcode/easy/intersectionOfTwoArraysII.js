// https://leetcode.com/problems/intersection-of-two-arrays-ii/

var intersect = function (nums1, nums2) {
    const dict1 = {};
    const dict2 = {};
    const result = [];

    for (let i = 0; i < nums1.length; i++) {
        if (nums1[i] in dict1) {
            dict1[nums1[i]]++;
        } else {
            dict1[nums1[i]] = 1;
        }
    }

    for (let i = 0; i < nums2.length; i++) {
        if (nums2[i] in dict2) {
            dict2[nums2[i]]++;
        } else {
            dict2[nums2[i]] = 1;
        }
    }

    for (let key in dict1) {
        let amtToPush = 0;
        if (key in dict2) {
            amtToPush = Math.min(dict1[key], dict2[key]);

            while (amtToPush > 0) {
                result.push(key);
                amtToPush--;
            }
        }
    }

    return result;
};
