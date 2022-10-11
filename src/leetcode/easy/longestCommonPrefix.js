//leetcode.com/problems/longest-common-prefix/

https: var longestCommonPrefix = function (strs) {
    if (!strs.length) return "";
    // if (strs.length === 1) return strs[0];

    let longestPrefix = strs[0];

    for (let i = 0; i < strs.length; i++) {
        let newLongestPrefix = "";

        let j = 0;
        while (longestPrefix[j] && strs[i][j]) {
            if (longestPrefix[j] === strs[i][j]) {
                newLongestPrefix += longestPrefix[j];
            } else break;
            j++;
        }

        longestPrefix = newLongestPrefix;
    }

    return longestPrefix;
};
