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

// using iteration
var reverseListIteration = function (head) {
    if (!head) return head;

    let node = head;
    let prev = null;
    while (node) {
        const nextNode = node.next;
        node.next = prev;
        prev = node;
        node = nextNode;
    }

    // you return the pointer to the head
    return prev;
};
