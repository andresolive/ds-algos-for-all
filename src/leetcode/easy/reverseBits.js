var reverseBits = function (n) {
    const str = n.toString(2);

    let revBinaryArr = str.split("").reverse();
    for (let i = str.length; i < 32; i++) {
        revBinaryArr.push("0");
    }

    const revBinaryStr = revBinaryArr.join("");

    return parseInt(revBinaryStr, 2);
};
