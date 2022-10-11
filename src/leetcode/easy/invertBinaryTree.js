// https://leetcode.com/problems/invert-binary-tree/submissions/

var invertTree = function (root) {
    if (!root) return null;

    const prevLeft = invertTree(root.left);
    const prevRight = invertTree(root.right);

    root.left = prevRight;
    root.right = prevLeft;

    return root;
};
