var hammingWeight = function (n) {
    // the parameter in .toString() specifies the base for the
    // number value (default is 10)
    // if we do n.toString() it returns a string representing the
    // number in base 10

    const str = n.toString(2);

    let count = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] == "1") count++;
    }

    return count;
};
