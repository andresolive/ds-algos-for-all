// https://leetcode.com/problems/maximum-depth-of-binary-tree/submissions/

var walk = function (currentNode, prevMax = 0) {
    if (!currentNode) return 0;

    return 1 + Math.max(walk(currentNode.left), walk(currentNode.right));
};

var maxDepth = function (root) {
    return walk(root);
};
