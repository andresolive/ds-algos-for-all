// https://leetcode.com/problems/pascals-triangle/solution/

var generate = function (numRows) {
    const result = [];
    let prevRow = [1];
    result.push(prevRow);
    if (numRows < 2) return result;

    let rowsBuilt = 1;

    while (rowsBuilt < numRows) {
        const newRow = [1];
        for (let i = 0; i < prevRow.length; i++) {
            const valAtPlusOne = prevRow[i + 1] ? prevRow[i + 1] : 0;
            const valToPush = prevRow[i] + valAtPlusOne;
            newRow.push(valToPush);
        }
        result.push(newRow);
        prevRow = newRow;
        rowsBuilt++;
    }

    return result;
};
