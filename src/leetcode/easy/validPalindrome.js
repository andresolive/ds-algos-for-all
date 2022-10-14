var isPalindrome = function (s) {
    s = s.toLowerCase();

    const cleanArr = [];
    for (let i = 0; i < s.length; i++) {
        const asciiVal = s[i].charCodeAt();
        // 48 - 57 represent 0 to 9
        // 97 - 122 represent a to z

        if (
            (48 <= asciiVal && asciiVal <= 57) ||
            (97 <= asciiVal && asciiVal <= 122)
        ) {
            cleanArr.push(s[i]);
        }
    }

    for (
        let i = 0, j = cleanArr.length - 1;
        i < cleanArr.length / 2;
        i++, j--
    ) {
        if (cleanArr[i] !== cleanArr[j]) return false;
    }

    return true;
};
