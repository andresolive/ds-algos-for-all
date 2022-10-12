// https://leetcode.com/problems/merge-two-sorted-lists/submissions/

var mergeTwoLists = function (list1, list2) {
    if (!list1 && !list2) return list1;
    if (!list1 && list2) return list2;
    if (list1 && !list2) return list1;

    let node1 = list1;
    let node2 = list2;
    let result;
    let lastNode;

    while (node1 || node2) {
        let nodeToAdd;
        if (!node1) {
            nodeToAdd = node2;
            node2 = node2.next;
        } else if (!node2) {
            nodeToAdd = node1;
            node1 = node1.next;
        } else if (node1.val < node2.val) {
            nodeToAdd = node1;
            node1 = node1.next;
        } else {
            nodeToAdd = node2;
            node2 = node2.next;
        }

        if (!result) {
            result = nodeToAdd;
            lastNode = result;
        } else {
            lastNode.next = nodeToAdd;
            lastNode = lastNode.next;
        }
    }

    return result;
};
