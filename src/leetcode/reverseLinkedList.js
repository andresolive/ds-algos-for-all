// https://leetcode.com/problems/reverse-linked-list/solution/

// using a stack
var reverseList = function (head) {
    if (!head) return head;

    const stack = [];

    let curr = head;
    while (curr) {
        const stackNode = { val: curr.val, next: null };
        stack.push(stackNode);
        curr = curr.next;
    }

    const newHead = stack.pop();
    let node = newHead;
    while (stack.length) {
        const newNode = stack.pop();
        node.next = newNode;
        node = node.next;
    }

    return newHead;
};
