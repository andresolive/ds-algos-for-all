var moveZeroes = function (nums) {
    const positives = [];
    let count = 0;

    while (nums.length) {
        const el = nums.pop();
        if (el === 0) count++;
        else positives.push(el);
    }

    while (positives.length) {
        nums.push(positives.pop());
    }

    while (count) {
        nums.push(0);
        count--;
    }
};
