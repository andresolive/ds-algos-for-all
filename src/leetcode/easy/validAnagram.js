var isAnagram = function (s, t) {
    if (s.length !== t.length) return false;

    const sDict = {};
    for (let i = 0; i < s.length; i++) {
        if (s[i] in sDict) sDict[s[i]]++;
        else sDict[s[i]] = 1;
    }

    for (let i = 0; i < t.length; i++) {
        if (t[i] in sDict) sDict[t[i]]--;
        else return false;
    }

    console.log(sDict);

    for (let key in sDict) {
        if (sDict[key] !== 0) return false;
    }

    return true;
};
