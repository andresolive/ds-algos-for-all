// https://leetcode.com/problems/merge-sorted-array/

var merge = function (nums1, m, nums2, n) {
    let i = 0;
    let j = 0;

    // remove zeroes from nums1
    for (let i = 0; i < n; i++) {
        nums1.pop();
    }

    while (nums2.length) {
        if (nums1[i] <= nums2[j]) {
            i++;
        } else if (nums1[i] > nums2[j]) {
            const removed = nums2.shift();
            nums1.splice(i, 0, removed);
            i++;
        } else {
            const removed = nums2.shift();
            nums1[i] = removed;
            i++;
        }
    }
};
