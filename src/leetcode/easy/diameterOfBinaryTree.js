var diameterOfBinaryTree = function (root) {
    let overallMax = 0;

    var determineLongestArm = function (node) {
        if (!node) return 0;

        const leftArmLength = determineLongestArm(node.left);
        const rightArmLength = determineLongestArm(node.right);

        if (leftArmLength + rightArmLength > overallMax) {
            overallMax = leftArmLength + rightArmLength;
        }

        return Math.max(leftArmLength, rightArmLength) + 1;
    };

    determineLongestArm(root);

    return overallMax;
};
