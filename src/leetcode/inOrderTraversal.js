var walk = function (currentNode, path) {
    if (!currentNode) return path;

    // 1. pre-recursion:
    // nothing to do

    // 2. recursion:
    walk(currentNode.left, path);
    path.push(currentNode.val);
    walk(currentNode.right, path);

    // 3. post-recursion:
    // nothing to do

    return path;
};

var inorderTraversal = function (root) {
    // recursion
    // return walk(root, [])

    // iteration
    const stack = [];
    const result = [];
    let currentNode = root;

    while (currentNode !== null || stack.length) {
        while (currentNode !== null) {
            stack.push(currentNode);
            currentNode = currentNode.left;
        }
        currentNode = stack.pop();
        result.push(currentNode.val);
        currentNode = currentNode.right;
    }
    return result;
};
