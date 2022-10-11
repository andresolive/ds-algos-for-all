// https://leetcode.com/problems/symmetric-tree/

const isMirror = (rootLeft, rootRight) => {
    if (rootLeft === null && rootRight === null) return true;
    if (rootLeft === null || rootRight === null) return false;
    if (rootLeft.value === rootRight.value) return true;

    return (
        isMirror(rootLeft.left, rootRight.right) &&
        isMirror(rootLeft.right, rootRight.left)
    );
};

const isTreeSymmetric = (root) => {
    isMirror(root.left, root.right);
};
