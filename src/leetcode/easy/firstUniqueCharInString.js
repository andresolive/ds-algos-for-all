// https://leetcode.com/problems/first-unique-character-in-a-string/

var firstUniqChar = function (s) {
    const dict = {};

    for (let i = 0; i < s.length; i++) {
        if (s[i] in dict) dict[s[i]]++;
        else dict[s[i]] = 1;
    }

    for (let i = 0; i < s.length; i++) {
        if (dict[s[i]] === 1) return i;
    }

    return -1;
};
