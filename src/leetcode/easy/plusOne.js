// https://leetcode.com/problems/plus-one/submissions/

var plusOne = function (digits) {
    /* this algorithm is called Schoolbook Addition with Carry
  Find the rightmost not-nine element and increase it by 1
  Make every element after it equal to 0
  Careful! If the number is only nines, you have to make them all 0
  and prepend a 1 */

    // find the index of the rightmost non-9 element
    let i = digits.length - 1;
    while (i >= 0) {
        if (digits[i] !== 9) break;
        i--;
    }

    // if i === -1 it means there are only nines in the array
    if (i === -1) {
        for (let j = 0; j < digits.length; j++) {
            digits[j] = 0;
        }
        digits.unshift(1);
        return digits;
    }

    // if the last non-9 element is at the end of the array
    if (i === digits.length - 1) {
        digits[i] += 1;
    }
    // if it's not (meaning there are nines to its right)
    else {
        digits[i] += 1;
        i++;
        while (i < digits.length) {
            digits[i] = 0;
            i++;
        }
    }

    return digits;
};

var plusOneCleaner = function (digits) {
    // move along the input starting from the end
    for (let i = digits.length - 1; i >= 0; i--) {
        // set all the nines at the end of the array to zeroes
        if (digits[i] === 9) digits[i] = 0;
        else {
            // increase the rightmost not-9 by 1 and return the result
            digits[i] += 1;
            return digits;
        }
    }

    return [1].concat(digits);
};
