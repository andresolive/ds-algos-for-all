var scaledNumber = function (letter) {
    return letter.charCodeAt() - 64;
};

var titleToNumber = function (columnTitle) {
    let result = 0;

    let exponent = 0;
    for (let j = columnTitle.length - 1; j >= 0; j--) {
        result += scaledNumber(columnTitle[j]) * 26 ** exponent;
        exponent++;
    }

    return result;
};
