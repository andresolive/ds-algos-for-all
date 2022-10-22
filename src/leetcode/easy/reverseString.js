var reverseString = function (s) {
    const originalLength = s.length;

    for (let i = originalLength - 1; i >= 0; i--) {
        s.push(s[i]);
    }

    for (let i = 0; i < originalLength; i++) {
        s.shift();
    }
};
