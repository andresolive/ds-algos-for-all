// https://leetcode.com/problems/invert-binary-tree/submissions/

var invertTree = function (node) {
    if (!node) return null;

    const prevLeft = invertTree(node.left);
    const prevRight = invertTree(node.right);

    node.left = prevRight;
    node.right = prevLeft;

    return node;
};
